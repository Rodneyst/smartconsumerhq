# Generate Article Workflow

This document defines the repeatable AI workflow for generating a new buying guide at Smart Consumer HQ. Follow every step in order. Do not skip the draft-and-review step — never auto-publish.

---

## Prerequisites

Before starting, read:
1. `docs/99_session_logs/` — most recent entry
2. `docs/02_development/AI_HANDOFF.md`
3. `CLAUDE.md`

---

## Step 1 — Pick the Next Queued Article

Open `content/content-queue.json`.

Find the first item where `"status": "queued"` with the lowest `priority` value (1 = highest priority).

Note the item's:
- `id`
- `title`
- `slug`
- `category`
- `target_keyword`
- `secondary_keywords`
- `affiliate_network_priority`
- `internal_links`
- `notes`

**Update the item's status** in `content-queue.json`:
```json
"status": "drafting"
```

---

## Step 2 — Research the Topic

Using the `target_keyword` and `secondary_keywords`:

1. Identify the top 5 products to feature. Verify they are:
   - Currently available on Amazon (or the specified `affiliate_network_priority`)
   - Actively sold (not discontinued)
   - Competitively priced within the article's stated budget/range
   - Have strong verified buyer reviews (4.0+ stars, 500+ reviews preferred)

2. For each product, collect:
   - Full product name and model number
   - Price range (state "as of" approximate date — do not cite exact prices which change daily)
   - 3–5 key specs most relevant to the buying decision
   - 3–5 genuine pros
   - 2–3 genuine cons
   - ASIN (Amazon Standard Identification Number) for affiliate link generation
   - Who it's best for (use case, buyer profile)

3. Identify the 5–7 most important questions buyers ask about this category. These become the FAQ section.

4. Identify the 3–5 key factors that matter most when choosing in this category. These become the buying guide section.

---

## Step 3 — Draft the Article

Copy `content/templates/article-template.html` to `content/drafts/{slug}.html`.

Replace all PLACEHOLDER values with real content. The article must include:

### Required Sections (in order)

| Section | Requirement |
|---|---|
| `<head>` SEO | Title tag, meta description (150–160 chars), canonical, OG tags, Twitter Card, Article JSON-LD, FAQPage JSON-LD |
| Breadcrumb | Home > Buying Guides > Article Title |
| Hero section | H1 headline, 1–2 sentence sub, meta info (author, date, read time) |
| FTC Disclosure | Immediately after hero, before first product mention |
| Table of Contents | Anchored list linking to all H2 sections |
| Introduction | 2–3 paragraphs: problem → why it matters → what this guide covers |
| Top Picks Summary Table | Quick-reference table: pick label, product name, best for, price range |
| Full Reviews (5 products) | Each product: H3 title, 2–3 paragraph overview, pros/cons grid, affiliate CTA button |
| Full Comparison Table | All 5 products × key specs side by side |
| Buying Guide | 3–5 H3 subsections on what to evaluate. No product names here — pure educational content |
| FAQ | 5–7 Q&A pairs matching the FAQPage JSON-LD schema |
| Conclusion | 2–3 paragraphs: restate top pick, secondary pick, call to action |
| Bottom Disclosure | Reiterate affiliate relationship |

### Word Count Target

- Minimum: 3,500 words
- Target: 4,000–4,500 words
- Items marked `estimated_word_count: 3000` can target 3,000–3,500

### Affiliate Link Rules

- Use `href="#"` as a placeholder for ALL affiliate links during drafting
- Add `target="_blank" rel="nofollow sponsored"` to every affiliate link
- Do NOT generate real Amazon URLs during drafting — that happens at publish time
- Add a comment `<!-- AFFILIATE: amazon ASIN: XXXXXXXXXX -->` after each placeholder link so the publisher knows what to replace it with

Example:
```html
<a href="#" target="_blank" rel="nofollow sponsored" class="btn btn-primary btn-sm">
  Check Price on Amazon →
</a>
<!-- AFFILIATE: amazon ASIN: B08QZC9QZC -->
```

### Internal Links

Include all links from the item's `internal_links` array at least once. Place them naturally in the text body or as a "Related" callout near the end.

### Schema Requirements

The `<head>` must include:
- `"@type": "Article"` with headline, datePublished, dateModified, author, publisher, url
- `"@type": "FAQPage"` with mainEntity array matching the FAQ section questions verbatim

---

## Step 4 — Self-Review Before Saving

Before saving the draft, verify:

- [ ] Word count ≥ 3,500
- [ ] Title tag ≤ 60 characters
- [ ] Meta description 150–160 characters, includes target keyword
- [ ] Canonical URL is `https://smartconsumerhq.com/guides/{slug}`
- [ ] H1 appears only once
- [ ] Every affiliate link has `target="_blank" rel="nofollow sponsored"` and `href="#"` placeholder
- [ ] Every affiliate link has an `<!-- AFFILIATE: network ASIN: XXXXXXXXXX -->` comment
- [ ] FTC disclosure appears at top of article body, before first product mention
- [ ] All 5 products have a pros/cons section
- [ ] FAQ section has at least 5 questions
- [ ] FAQPage JSON-LD questions match the FAQ HTML section verbatim
- [ ] Internal links from `content-queue.json` are all present
- [ ] No specific prices are stated as exact — use ranges and "as of writing" language
- [ ] No false claims or unsupported superlatives ("the only", "the most", "clinically proven")

---

## Step 5 — Save the Draft

Save the completed article to:
```
content/drafts/{slug}.html
```

Do NOT save to `guides/` yet. The article is not published until it passes human review.

---

## Step 6 — Update Content Queue

In `content/content-queue.json`, update the article's status:
```json
"status": "review_needed"
```

---

## Step 7 — Update Session Log

Append an entry to `docs/99_session_logs/YYYY-MM-DD-session-log.md` documenting:
- Article drafted
- Draft location
- Word count
- Status set to `review_needed`
- Any issues found or notes for reviewer

Copy the session log to the local backup path.

---

## Step 8 — Notify User for Review

Report to the user:
- Draft saved to: `content/drafts/{slug}.html`
- Word count
- Target keyword
- Products covered
- Status in queue: `review_needed`
- Next step: human review, then run `tools/publish-article.md` workflow

Do NOT commit the draft to git automatically. The user approves it first.

---

## Generating Multiple Articles

If generating more than one article in a session:
- Complete Steps 1–8 fully for each article before starting the next
- Update `content-queue.json` status for each article as you go
- Do not leave any article in `"drafting"` status without a corresponding draft file

---

## Error Recovery

If a draft article is interrupted mid-generation:
- Do not leave a partial file in `content/drafts/`
- Either complete it or delete the partial file
- Reset the queue item status back to `"queued"` if draft was not completed

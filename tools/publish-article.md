# Publish Article Workflow

This document defines the workflow for publishing an approved draft from `content/drafts/` to a live guide page. Follow every step in order.

**This workflow requires explicit user confirmation before the `git push` step.**

---

## Prerequisites

- The article draft must exist at `content/drafts/{slug}.html`
- The queue item in `content/content-queue.json` must have `"status": "approved"`
- The article must have passed the review checklist at `docs/02_development/ARTICLE_REVIEW_CHECKLIST.md`

---

## Step 1 — Verify the Draft

1. Open `content/drafts/{slug}.html`
2. Confirm the draft exists and is complete
3. Confirm `content-queue.json` shows `"status": "approved"` for this slug
4. Note all `<!-- AFFILIATE: network ASIN: XXXXXXXXXX -->` comments — you'll replace these in Step 3

---

## Step 2 — Copy Draft to Guides Directory

Copy (do not move) the file:
```
content/drafts/{slug}.html  →  guides/{slug}.html
```

Do not delete the draft file from `content/drafts/` — keep it as a record.

---

## Step 3 — Replace Affiliate Link Placeholders

For every `href="#"` affiliate link with an `<!-- AFFILIATE: amazon ASIN: XXXXXXXXXX -->` comment:

Replace `href="#"` with the real Amazon affiliate URL:
```
https://www.amazon.com/dp/{ASIN}?tag=smartconsu0ca-20
```

Example:
```html
<!-- Before -->
<a href="#" target="_blank" rel="nofollow sponsored">Check Price →</a>
<!-- AFFILIATE: amazon ASIN: B08QZC9QZC -->

<!-- After -->
<a href="https://www.amazon.com/dp/B08QZC9QZC?tag=smartconsu0ca-20"
   target="_blank" rel="nofollow sponsored">Check Price on Amazon →</a>
```

For Walmart links (when Walmart approval is confirmed):
- Replace with Walmart affiliate URL once the program is active
- Check `AFFILIATE_CONFIG.walmart.status` in `config/affiliate-config.js` — must be `"active"` first

For CJ links:
- Replace with CJ Deep Link for the appropriate merchant
- Check `AFFILIATE_CONFIG.cj.status` must be `"active"`

If no ASIN is available for a specific product, leave `href="#"` temporarily and add a `<!-- TODO: needs real affiliate URL -->` comment. Do not publish with unresolved blanks if they represent the guide's primary CTAs.

---

## Step 4 — Update the Sitemap

Open `sitemap.xml`. Add a new `<url>` entry in the "Guide pages" section:

```xml
<url>
  <loc>https://smartconsumerhq.com/guides/{slug}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## Step 5 — Update the Category Page

Open `categories/{category}.html` for the article's category (e.g., `categories/home-office.html`).

Add a new guide card linking to the published article. Follow the existing guide card pattern in that page.

If no guide card section exists yet on the category page, add one following the pattern from other category pages.

---

## Step 6 — Update the Buying Guides Index

Open `buying-guides.html`.

Add a guide card for the new article in the appropriate category section. Use the same `.guide-card` markup pattern as the other entries on that page.

If a new category section is needed, add an H2 heading for the category and the guide card below it.

---

## Step 7 — Update Internal Links

For each URL listed in the article's `internal_links` array in `content-queue.json`:
1. Verify the link is actually present in `guides/{slug}.html` (it should be — added during drafting)
2. Check the reverse: any existing published guide that logically links to this new article — consider adding a "Related:" callout in that guide's conclusion section

---

## Step 8 — Verify SEO Metadata

Before committing, verify in `guides/{slug}.html`:

- [ ] `<title>` tag is present, ≤ 60 characters, includes primary keyword
- [ ] `<meta name="description">` is 150–160 characters
- [ ] `<link rel="canonical">` is `https://smartconsumerhq.com/guides/{slug}`
- [ ] OG tags: `og:type`, `og:url`, `og:title`, `og:description`, `og:image`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`
- [ ] Article JSON-LD: `datePublished` and `dateModified` set to today's date
- [ ] FAQPage JSON-LD present and matches FAQ section content

---

## Step 9 — Update Content Tracking Files

**Update `content-queue.json`:**
```json
"status": "published"
```

**Update `content/published-content.json`:**
Add a new entry for the published article:
```json
{
  "id": "{slug}",
  "title": "Full article title",
  "slug": "{slug}",
  "url": "https://smartconsumerhq.com/guides/{slug}",
  "category": "{category}",
  "publish_date": "YYYY-MM-DD",
  "word_count": NNNN,
  "affiliate_status": "active",
  "affiliate_networks": ["amazon"],
  "indexed_status": "submitted",
  "sitemap_included": true,
  "schema_types": ["Article", "FAQPage"],
  "last_updated": "YYYY-MM-DD",
  "notes": "Brief notes about this article."
}
```

Update `"total_published"` and `"total_word_count"` totals at the top of the file.

---

## Step 10 — Stage Specific Files

Stage only the specific files changed. Never use `git add -A` or `git add .`.

```bash
git add guides/{slug}.html
git add sitemap.xml
git add categories/{category}.html
git add buying-guides.html
git add content/content-queue.json
git add content/published-content.json
git add docs/99_session_logs/YYYY-MM-DD-session-log.md
```

If any other files were modified (e.g., an existing guide was updated with an internal link), add those too.

---

## Step 11 — Commit

```bash
git commit -m "publish: {slug} — {word_count} words, {N} products reviewed"
```

Example:
```bash
git commit -m "publish: best-ergonomic-office-chairs-under-300 — 4,500 words, 5 chairs reviewed"
```

---

## Step 12 — Confirm with User, Then Push

**Do NOT push without explicit user confirmation.**

Report to the user:
- Files staged
- Commit message
- Affected pages (new guide, sitemap, category page, buying-guides.html)
- Ask: "Ready to push to production?"

After confirmation:
```bash
git push origin main
```

---

## Step 13 — Verify Deployment

Wait 60–90 seconds for Cloudflare to deploy. Then verify:

```bash
curl -s -o /dev/null -w "%{http_code}" https://smartconsumerhq.com/guides/{slug}
```

Expected: `200`

Also spot-check:
```bash
curl -s https://smartconsumerhq.com/guides/{slug} | grep -i "{slug}"
```

Verify the canonical URL, title tag, and at least one affiliate link are present in the response.

---

## Step 14 — Update Session Log

Append an entry to `docs/99_session_logs/YYYY-MM-DD-session-log.md` documenting:
- Article published
- Live URL
- Word count
- Files modified
- Git commit hash
- Push confirmed
- Any notes

Copy session log to local backup:
```bash
cp docs/99_session_logs/YYYY-MM-DD-session-log.md \
   ~/Documents/SmartConsumerHQ/session-logs/YYYY-MM-DD-session-log.md
```

---

## Batch Publishing

If publishing multiple articles in one session:
- Complete Steps 1–14 for each article sequentially
- Commit each article as a separate commit (one commit per article)
- You may push all commits together at the end, but confirm with user first

# Automated Content Agent — Smart Consumer HQ

**Created:** 2026-06-09  
**Last updated:** 2026-06-09

This document describes the automated content agent workflow for SmartConsumerHQ. An AI agent using this system can generate, stage, review-gate, publish, document, and deploy affiliate buying guides with minimal manual work.

---

## System Overview

The content automation pipeline consists of five files working together:

| File | Purpose |
|---|---|
| `content/content-queue.json` | Ordered list of articles to generate. Tracks status from queued → drafting → review_needed → approved → published |
| `content/drafts/` | Staging area for generated articles. Nothing here is live. |
| `content/published-content.json` | Registry of all published articles with metadata |
| `tools/generate-article.md` | Step-by-step workflow for generating a new article draft |
| `tools/publish-article.md` | Step-by-step workflow for publishing an approved draft to production |

Supporting files:
- `content/templates/article-template.html` — HTML template all new articles are based on
- `docs/02_development/ARTICLE_REVIEW_CHECKLIST.md` — checklist a human uses to approve drafts
- `config/affiliate-config.js` — network IDs (used when inserting real affiliate URLs at publish time)

---

## Article Lifecycle

```
QUEUED → DRAFTING → REVIEW_NEEDED → APPROVED → PUBLISHED
  ↑           ↓            ↓              ↓           ↓
queue.json  draft file   draft file   draft file   guides/
```

| Status | Meaning | Location |
|---|---|---|
| `queued` | Not yet started | `content-queue.json` only |
| `drafting` | Agent is generating | `content/drafts/{slug}.html` (incomplete) |
| `review_needed` | Draft complete — awaiting human review | `content/drafts/{slug}.html` (complete) |
| `approved` | Human approved — ready to publish | `content/drafts/{slug}.html` (approved) |
| `published` | Live on site | `guides/{slug}.html` |

The agent only advances an article to `published` status after human approval. The `approved` flag must be set manually in `content-queue.json` by the user or an authorized reviewer.

---

## How the Agent Works

### Generation (one article)

1. Agent reads `content/content-queue.json`
2. Picks the first `"status": "queued"` item by lowest priority number
3. Sets status to `"drafting"`
4. Researches topic: 5 products, specs, pros/cons, FAQ questions, buying factors
5. Generates full HTML article based on `content/templates/article-template.html`
6. Saves to `content/drafts/{slug}.html`
7. Sets status to `"review_needed"`
8. Appends to session log
9. Reports draft location and word count to user
10. **Stops — does not publish**

Full workflow: `tools/generate-article.md`

### Publishing (one approved article)

1. Agent verifies `"status": "approved"` in `content-queue.json`
2. Copies draft to `guides/{slug}.html`
3. Replaces all `href="#"` affiliate placeholders with real Amazon URLs (`?tag=smartconsu0ca-20`)
4. Adds article URL to `sitemap.xml`
5. Adds guide card to the relevant `categories/{category}.html`
6. Adds guide card to `buying-guides.html`
7. Verifies SEO metadata
8. Updates `content-queue.json` status to `"published"`
9. Updates `content/published-content.json`
10. Stages specific files, commits
11. **Asks user for explicit push confirmation**
12. After confirmation, pushes, verifies deployment
13. Updates session log

Full workflow: `tools/publish-article.md`

---

## How to Generate an Article

**Prompt template for the AI agent:**

> Generate the next article in the content queue for SmartConsumerHQ. Read `content/content-queue.json`, pick the first queued item, and follow `tools/generate-article.md` exactly. Save the draft to `content/drafts/{slug}.html` and set status to `review_needed`. Do not publish. Report draft location, word count, and products covered.

The agent will:
1. Identify the highest-priority queued item
2. Generate a complete draft (3,500–4,500 words)
3. Save it to `content/drafts/`
4. Update `content-queue.json`
5. Report to you without committing or publishing

---

## How to Approve a Draft

1. Open `content/drafts/{slug}.html` in a browser or text editor
2. Run through `docs/02_development/ARTICLE_REVIEW_CHECKLIST.md`
3. Make any necessary corrections
4. When satisfied, open `content/content-queue.json`
5. Change `"status": "review_needed"` → `"status": "approved"` for that item
6. Then trigger the publish workflow

---

## How to Publish

**Prompt template:**

> Publish the approved article with slug `{slug}` from `content/drafts/{slug}.html`. Follow `tools/publish-article.md` exactly. Confirm deployment before closing. Update session log. Do not push without my confirmation.

The agent will:
1. Copy draft to `guides/`
2. Replace affiliate placeholders with real URLs
3. Update sitemap, category page, buying-guides.html
4. Stage specific files
5. Commit
6. **Ask for your go-ahead before pushing**
7. Push, verify live, update session log

---

## How to Update Affiliate Links

When Amazon Associates approves your account (already done — Store ID: `smartconsu0ca-20`), or when Walmart is approved:

1. Reference `docs/05_research/AFFILIATE_LINK_MAP.md` for all placeholder locations
2. For each guide, find all `href="#"` affiliate links
3. Replace with real affiliate URLs:
   - Amazon: `https://www.amazon.com/dp/{ASIN}?tag=smartconsu0ca-20`
   - Walmart (when active): See `config/affiliate-config.js` for format
4. Commit specific guide files and push

**Prompt template:**

> Replace all `href="#"` affiliate link placeholders in `guides/best-home-gym-equipment.html` with real Amazon URLs using tag `smartconsu0ca-20`. Use the product names to identify the correct ASINs. Commit and push after my confirmation.

---

## How to Avoid Overwriting Previous Work

These rules must be followed at all times:

1. **Never use `git add -A` or `git add .`** — stage specific files only
2. **Never overwrite `guides/*.html` without reading the file first** — existing guides may have been manually edited
3. **Always check `content/published-content.json`** before creating a new article — do not re-generate an article that's already published
4. **Always check `content/content-queue.json`** before generating — do not generate an article with `"status"` other than `"queued"`
5. **Never modify the draft file in `content/drafts/` after setting status to `"approved"`** — the reviewer approved that specific version
6. **Do not modify `sitemap.xml` except to add new URLs** — never remove existing entries
7. **Do not edit `components.js` or `styles.css` without explicit user instruction** — these affect every page

---

## Required Session Log Process

Every session that generates or publishes articles must:

1. Append a new numbered entry to `docs/99_session_logs/YYYY-MM-DD-session-log.md`
2. Include: articles generated, articles published, files created/modified, affiliate links updated (if any), git commit hashes
3. Copy the updated session log to the local backup: `~/Documents/SmartConsumerHQ/session-logs/`
4. Commit the session log as part of the final commit (never omit it)

---

## Quality Standards

All generated articles must:

- Achieve minimum 3,500 words (target 4,000–4,500)
- Cover exactly 5 products with full reviews
- Include a comparison table with specs
- Include a buying guide section with 3–5 H3 subsections
- Include 5–7 FAQ questions with structured data
- Have all SEO metadata filled in
- Have an FTC disclosure before the first product mention
- Have `target="_blank" rel="nofollow sponsored"` on every affiliate link
- Have no specific pricing stated as exact (prices change; use ranges)
- Have all internal links from the queue item present

---

## Adding New Articles to the Queue

To add a new article to `content/content-queue.json`:

1. Assign the next sequential `id` (e.g., `q021`)
2. Assign a `priority` number (higher = lower priority; 1 is the next to write)
3. Set `"status": "queued"`
4. Fill in all required fields
5. Add it to the `queue` array
6. Commit `content-queue.json`

Required fields: `id`, `title`, `slug`, `category`, `target_keyword`, `secondary_keywords`, `affiliate_network_priority`, `article_type`, `status`, `priority`, `estimated_word_count`, `internal_links`, `notes`

---

## File Ownership Summary

| File | Owner | Never modify without |
|---|---|---|
| `content/content-queue.json` | Agent (status) + User (priority) | Reading current state first |
| `content/drafts/*.html` | Agent generates, User approves | Explicit instruction |
| `content/published-content.json` | Agent (publish step) | Publishing a new article |
| `guides/*.html` | Agent (publish step only) | Draft approved AND user confirmed push |
| `sitemap.xml` | Agent (publish step) | Publishing a new article |
| `components.js` | User only | Explicit user instruction |
| `styles.css` | User only | Explicit user instruction |
| `config/affiliate-config.js` | User only | Affiliate program status changes |

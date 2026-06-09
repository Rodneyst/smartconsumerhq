# Content Workflow — Smart Consumer HQ

**Last updated:** 2026-06-09

This document describes the end-to-end workflow for taking an article from idea to live production page. Follow every step in order. Do not skip steps.

---

## Overview

```
IDEA (backlog)
  ↓
RESEARCH (keyword + product research)
  ↓
DRAFT (markdown in content/articles/)
  ↓
REVIEW (SEO + quality checklist)
  ↓
CONVERT TO HTML (apply guide HTML template)
  ↓
UPDATE SITEMAP (add new URL to sitemap.xml)
  ↓
UPDATE CATEGORY PAGE (add guide card)
  ↓
COMMIT (stage specific files)
  ↓
PUSH TO GITHUB (triggers auto-deploy)
  ↓
CLOUDFLARE DEPLOY (~60–90 seconds)
  ↓
VERIFY (check live URL, check sitemap, check category page)
  ↓
POST-PUBLISH (update PROJECT_STATUS, TODO, session log)
```

---

## Step 1 — Select an Article Idea

**Source:** `content/article_ideas/master-article-backlog.csv`

**Selection criteria (in order):**
1. **Priority: High** — start with High priority articles
2. **Monetization Potential: High** — maximise revenue per article
3. **Difficulty: Easy or Medium** — build domain authority before tackling Hard keywords
4. **Category balance** — don't publish 5 articles in one category while others have none

**Update the CSV** when starting an article: change `Status` from `Idea` to `In Progress`.

---

## Step 2 — Keyword and Product Research

Before writing a single word:

### Keyword Research
1. Confirm the primary keyword using Google autocomplete and "People Also Ask"
2. Check the current top 10 results for this keyword — understand what Google is rewarding
3. Note 2–4 secondary keywords (variations, related terms) to use naturally in the copy
4. Verify search intent matches the article type (buying guide = commercial investigation)

### Product Research
1. Search Amazon for the top products in this category
2. Sort by "Best Sellers" and "Avg. Customer Review" to find popular options
3. Identify 5–7 strong candidates covering different price tiers
4. For each candidate, note:
   - Current Amazon price
   - Star rating and number of reviews
   - Key specifications from the product page
   - Top positive and negative review themes
5. Cross-reference with 1–2 reputable editorial sources (Wirecutter, RTINGS, Consumer Reports)
6. Record product ASINs for affiliate link construction once Amazon Associates is active

### Research Output
Create a brief research note at the top of the draft file:

```markdown
<!-- RESEARCH NOTES (delete before publishing)
Primary keyword: {keyword}
Secondary keywords: {kw1}, {kw2}, {kw3}
Products shortlisted: {product 1}, {product 2}, {product 3}, {product 4}, {product 5}
Top competitor URL: {URL}
Top competitor word count: ~{N} words
Top competitor weaknesses: {what they miss or do poorly}
-->
```

---

## Step 3 — Draft in Markdown

**File location:** `content/articles/{slug}.md`  
**File naming:** Use the guide's URL slug (e.g., `best-home-gym-equipment.md`)

**Template:** Copy `content/templates/buying-guide-template.md` and fill it in.

### Draft Standards
- Write the complete article in markdown before touching any HTML
- Aim for 1,800–2,500 words
- Complete every section from the template (no skipping FAQ or final recommendation)
- Mark all future affiliate link placements with `<!-- AFFILIATE LINK: {product name} -->`
- Do not convert to HTML until the markdown draft is complete and reviewed

### Draft File Header

Every draft file must start with:

```markdown
---
title: {SEO Title}
slug: {guide-slug}
category: {Category Name}
primary_keyword: {keyword}
status: draft | review | ready | published
word_count: {N}
last_updated: {YYYY-MM-DD}
---
```

---

## Step 4 — Review (Pre-Publish Checklist)

Before converting the markdown to HTML, run the full pre-publish checklist from `content/templates/buying-guide-template.md`.

**Critical checks:**
- [ ] Word count 1,500+ (aim 1,800–2,500)
- [ ] Primary keyword in H1, first 100 words, at least one H2
- [ ] Affiliate disclosure text present and correct
- [ ] All 5+ products have a "What We Like" and "What Could Be Better" section
- [ ] Comparison table complete
- [ ] FAQ has 5+ questions
- [ ] Final recommendation section present
- [ ] At least 3 internal links planned
- [ ] No placeholder text remaining (search for `{` to catch unfilled placeholders)

Update draft frontmatter `status` to `ready` when review is complete.

---

## Step 5 — Convert to HTML

Convert the reviewed markdown draft to HTML using the existing guide page structure.

### HTML Template Reference

Use an existing guide page as the base. The structure must match exactly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- SEO meta tags, OG tags, Twitter Card, Schema.org JSON-LD -->
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <div id="site-header-placeholder"></div>

  <main>
    <nav class="breadcrumb">
      <a href="/">Home</a> › 
      <a href="/categories/{category-slug}">{Category Name}</a> › 
      {Guide Title}
    </nav>

    <!-- affiliate disclosure div -->
    <!-- H1 -->
    <!-- article body -->
  </main>

  <div id="site-footer-placeholder"></div>

  <script src="../components.js"></script>
  <script src="../script.js"></script>
</body>
</html>
```

**File path:** `guides/{slug}.html`

### Key Conversion Rules
- All affiliate links use `href="#"` until Amazon Associates is approved
- All affiliate links must have `rel="nofollow sponsored" target="_blank"`
- Canonical URL: `https://smartconsumerhq.com/guides/{slug}`
- Schema.org JSON-LD: use the Article template from the buying guide template
- Set `datePublished` and `dateModified` to today's date in ISO format

---

## Step 6 — Update Sitemap

Add the new guide URL to `sitemap.xml` at the repo root.

```xml
<url>
  <loc>https://smartconsumerhq.com/guides/{slug}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

Place new guide URLs in the `<!-- Guides -->` section, in alphabetical order by slug.

---

## Step 7 — Update Category Page

Add the new guide card to the appropriate `categories/{category-slug}.html`:

1. Locate the guide cards grid (`.guides-grid` div)
2. Replace the relevant "coming soon" placeholder card, OR add a new `.guide-card` if no placeholder exists
3. Use the standard guide card structure from `CLAUDE.md`

```html
<article class="guide-card">
  <div class="guide-card-img">
    <!-- image placeholder until images are added -->
  </div>
  <div class="guide-card-body">
    <span class="guide-tag">{Category Name}</span>
    <h3 class="guide-card-title">
      <a href="/guides/{slug}">{Guide Title}</a>
    </h3>
    <p class="guide-card-excerpt">{2–3 sentence description}</p>
    <a href="/guides/{slug}" class="guide-card-link">Read Guide →</a>
  </div>
</article>
```

---

## Step 8 — Commit

Stage **only the files that changed** for this article. Never use `git add -A`.

```bash
# Stage the new guide HTML
git add guides/{slug}.html

# Stage the updated sitemap
git add sitemap.xml

# Stage the updated category page
git add categories/{category-slug}.html

# If updating the article draft status
git add content/articles/{slug}.md

# Stage the updated CSV (status changed to Published)
git add content/article_ideas/master-article-backlog.csv

# Commit with a descriptive message
git commit -m "Add guide: {Guide Title}"
```

### Commit Message Format

```
Add guide: {Guide Title}

- {word count} words, {N} products reviewed
- Primary keyword: {keyword}
- Category: {category}
- Updates sitemap.xml and {category} category page
```

---

## Step 9 — Push to GitHub

**CONFIRM with the user before pushing — this is a direct production deployment.**

```bash
git push origin main
```

Cloudflare Workers & Pages GitHub App detects the push and deploys automatically.

---

## Step 10 — Cloudflare Deploy

Deployment is automatic. No action required.

**Timeline:** ~60–90 seconds after push.

**Verify deployment:**
1. Check the GitHub commit for a green checkmark (Cloudflare Workers Builds)
2. If yellow circle: build still in progress — wait 30 more seconds
3. If red ✗: check the Cloudflare Workers & Pages dashboard

---

## Step 11 — Verify Live

After deployment completes, verify:

```bash
# Check guide returns 200
curl -o /dev/null -s -w "%{http_code}" -L https://smartconsumerhq.com/guides/{slug}
# Expected: 200

# Check sitemap includes the new URL
curl -s https://smartconsumerhq.com/sitemap.xml | grep "{slug}"
# Expected: the URL appears
```

Also verify manually in a browser:
- [ ] Page loads without errors
- [ ] Header and footer inject correctly
- [ ] Breadcrumb shows correct path
- [ ] Affiliate disclosure is visible above the fold
- [ ] All internal links work
- [ ] Category page shows the new guide card

---

## Step 12 — Post-Publish Documentation

After the guide is live and verified:

1. **Update CSV:** Change `Status` from `In Progress` to `Published`
2. **Update `docs/01_product/PROJECT_STATUS.md`:** Add guide to the Existing Guides table
3. **Update `docs/01_product/TODO.md`:** Mark the guide as complete
4. **Update `docs/02_development/AI_HANDOFF.md`:** Update guide count and any relevant status
5. **Write session log entry:** `docs/99_session_logs/YYYY-MM-DD-session-log.md`
6. **Copy session log to local Mac:** `~/Documents/SmartConsumerHQ/session-logs/`
7. **Commit documentation updates** (separate commit from the guide itself)

```bash
git add content/article_ideas/master-article-backlog.csv \
        docs/01_product/PROJECT_STATUS.md \
        docs/01_product/TODO.md \
        docs/02_development/AI_HANDOFF.md \
        docs/99_session_logs/YYYY-MM-DD-session-log.md
git commit -m "docs: update project status after publishing {Guide Title}"
git push origin main
```

---

## Article Prioritisation Guide

When deciding which article to write next, use this priority order:

1. **Fill existing placeholder guides first** — the 4 existing HTML pages (best-home-gym-equipment, best-budget-standing-desks, best-smartwatches-under-300, best-family-suvs-for-value) are already indexed and receiving zero traffic because they have no content. These have the highest ROI.

2. **Fill empty categories next** — Money Saving and Home Products have zero guides. One guide each raises these categories above "coming soon" status.

3. **Expand high-performing categories** — after initial content is live and GSC shows which category pages are getting impressions, prioritise guides for those categories.

4. **Follow the CSV** — `content/article_ideas/master-article-backlog.csv` Priority column guides the remaining choices.

---

## Content Update Workflow (Existing Guides)

For updating a published guide (price changes, new products, etc.):

1. Update the HTML file directly (or update the markdown draft and re-convert)
2. Update `dateModified` in Schema.org JSON-LD
3. Add "Updated {Month Year}" to the visible guide header
4. No sitemap update needed unless the URL changed
5. Commit and push
6. After deployment: in Google Search Console, use "Request Indexing" on the updated URL

---

## Future Automation Hooks

This workflow is designed to be partially automated in future sessions. Automation candidates (do not build yet):

- Step 3→5: Script to convert markdown frontmatter + content into HTML (using the guide template)
- Step 6: Script to append new URL to sitemap.xml automatically
- Step 8: Pre-commit hook to verify checklist items
- Step 12: Script to update CSV status automatically

When building automation, document it in `docs/02_development/CONTENT_SYSTEM.md` and update this workflow file.

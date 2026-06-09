# Article Review Checklist — Smart Consumer HQ

Use this checklist before approving a draft in `content/drafts/`. When all boxes are checked, change `"status": "review_needed"` → `"status": "approved"` in `content/content-queue.json`.

**Draft location:** `content/drafts/{slug}.html`

---

## Editorial Quality

- [ ] **No fake claims** — No invented quotes, fabricated reviews, or made-up statistics. All claims are sourced from manufacturer specs or widely-cited reviews.
- [ ] **No unsupported superlatives** — Avoid "the only", "the most", "the best in the world" unless clearly attributable. Prefer "one of the best", "top-rated", "highly rated".
- [ ] **No unsupported pricing** — Prices are stated as approximate ranges ("around $200–$250", "as of writing"), not exact current prices. Prices change; static claims become incorrect.
- [ ] **Products are real and available** — All 5 products are currently sold on Amazon (or the listed network). No discontinued products, no counterfeit listings.
- [ ] **Review content is accurate** — Specs cited (dimensions, weight, battery life, etc.) match manufacturer or trusted third-party spec sheets.
- [ ] **Buying guide section is educational** — The buying guide section explains what to look for, not just what you picked. A reader can apply it to products not in the article.
- [ ] **FAQ answers are complete** — Each FAQ answer is substantive (3+ sentences). No one-word or vague answers.
- [ ] **Tone is neutral and helpful** — No excessive enthusiasm that reads like a paid placement. Cons are honest and specific.
- [ ] **Word count ≥ 3,500** — Check by reading through or counting sections.

---

## FTC Compliance

- [ ] **Affiliate disclosure is present above the fold** — The disclosure block appears in the article body before the first product mention. It must not be only in the footer.
- [ ] **Disclosure language is accurate** — Must include: "This site may earn commissions from qualifying purchases made through our links." (or equivalent)
- [ ] **Bottom disclosure also present** — Reiterate the affiliate relationship at the bottom of the article.
- [ ] **All product links are properly labeled** — Every `<a>` tag that is an affiliate link must have `rel="nofollow sponsored"`.

---

## Affiliate Links

- [ ] **Every affiliate link has `target="_blank"`** — Affiliate links must open in a new tab.
- [ ] **Every affiliate link has `rel="nofollow sponsored"`** — Both values required; must not be only one.
- [ ] **All affiliate links have ASIN/ID comments** — Each `href="#"` placeholder has a `<!-- AFFILIATE: network ASIN: XXXXXXXXXX -->` comment so the publisher can replace it correctly.
- [ ] **No real affiliate URLs in draft** — Drafts use `href="#"` + ASIN comment. Real URLs are inserted during publish step.
- [ ] **Affiliate CTA text is clear** — Buttons say "Check Price on Amazon →" or similar. Not "Click here" or "Buy now" without context.

---

## Internal Links

- [ ] **All `internal_links` from queue item are present** — Open `content/content-queue.json` and verify each link in the `internal_links` array appears at least once in the article body or related section.
- [ ] **Internal links use relative paths** — `../buying-guides.html` not `https://smartconsumerhq.com/buying-guides`.
- [ ] **No broken internal links** — Verify each linked page exists in the repository.

---

## SEO Metadata

- [ ] **`<title>` tag present and ≤ 60 characters** — Includes the primary keyword naturally.
- [ ] **`<meta name="description">` is 150–160 characters** — Includes primary keyword. No duplication of title.
- [ ] **`<link rel="canonical">` is correct** — Must be `https://smartconsumerhq.com/guides/{slug}` (no `.html` extension in canonical).
- [ ] **OG tags present** — `og:type`, `og:url`, `og:title`, `og:description` all filled in.
- [ ] **Twitter Card tags present** — `twitter:card`, `twitter:title`, `twitter:description` all filled in.
- [ ] **Article JSON-LD present and valid** — `@type: Article`, headline, datePublished, dateModified, author, publisher, url all present. No placeholder values remain.
- [ ] **FAQPage JSON-LD present** — Questions in the schema match the FAQ section questions verbatim.
- [ ] **No `PLACEHOLDER` text remaining** — Search the file for `PLACEHOLDER`. Must return zero results.
- [ ] **Breadcrumb reflects article location** — Home > Buying Guides > Article Title (not category-only).

---

## HTML Structure

- [ ] **H1 appears exactly once** — The article title in the hero section.
- [ ] **H2 sections match Table of Contents** — ToC links anchor correctly to each H2.
- [ ] **Comparison table is complete** — All 5 products × all key specs. No empty cells.
- [ ] **Pros/cons blocks present for all 5 products** — Each product review has a pros list and cons list.
- [ ] **No inline style conflicts** — No color or font overrides that conflict with `styles.css` design tokens.
- [ ] **`<main>` tag wraps article body** — Required for accessibility and correct component injection.
- [ ] **Header/footer injection divs present** — `<div id="site-header-placeholder">` and `<div id="site-footer-placeholder">`.
- [ ] **Scripts at bottom of body** — `../components.js` and `../script.js` loaded just before `</body>`.

---

## Mobile Layout

- [ ] **Comparison table is scrollable on mobile** — Table is wrapped in `<div style="overflow-x:auto">`.
- [ ] **No fixed-width elements wider than the viewport** — No `width:800px` or similar hard-coded widths.
- [ ] **Pros/cons grid degrades gracefully** — The grid layout does not overflow on small screens (check with DevTools at 375px width).

---

## Pre-Publish Verification

- [ ] **Sitemap not yet updated** — The article URL should NOT be in `sitemap.xml` until the publish step.
- [ ] **File is in `content/drafts/`** — Must not have been copied to `guides/` yet.
- [ ] **No git commit of this draft** — Drafts are not committed to git. Only published articles are.
- [ ] **Session log updated** — A session log entry notes this article is under review.

---

## Approval

When all boxes above are checked:

1. Open `content/content-queue.json`
2. Find the article by `slug`
3. Change `"status": "review_needed"` → `"status": "approved"`
4. Note the approval in the session log
5. Trigger the publish workflow: `tools/publish-article.md`

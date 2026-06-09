# Content System — Smart Consumer HQ

**Last updated:** 2026-06-09

This document defines the content architecture, workflow, and standards for all editorial work on Smart Consumer HQ. Every person or AI agent writing content must read this before starting.

---

## Content Architecture

### Directory Structure

```
smartconsumerhq/
├── content/                          # Content workspace (not served directly)
│   ├── templates/                    # Writing templates
│   │   └── buying-guide-template.md  # Master template for all buying guides
│   ├── article_ideas/               # Article planning and backlog
│   │   └── master-article-backlog.csv  # 100 article ideas with metadata
│   └── articles/                    # Article drafts in markdown (pre-HTML)
│       └── {slug}.md                # One file per article draft
│
├── guides/                          # Published HTML guide pages (live on site)
│   └── {slug}.html
│
└── categories/                      # Published HTML category pages
    └── {category-slug}.html
```

### Content vs Published Files

The `content/` directory is a **workspace** — it contains drafts, templates, and planning documents. It does not get served as web pages.

Published articles live in `guides/` as `.html` files. The workflow is:

```
content/articles/{slug}.md  →  (convert to HTML)  →  guides/{slug}.html
```

This separation keeps draft content isolated from live pages and makes the git history cleaner.

---

## Article Types

### 1. Buying Guide (Primary)

The main content type. 1,800–2,500 words. Targets commercial investigation keywords ("best X under $Y").

**Template:** `content/templates/buying-guide-template.md`

**URL pattern:** `/guides/{slug}`  
**File path:** `guides/{slug}.html`

### 2. Category Page

Aggregates guides within a single category. 400–600 words of intro content plus guide cards.

**URL pattern:** `/categories/{category-slug}`  
**File path:** `categories/{category-slug}.html`

### 3. Informational Article (Future)

Captures earlier-funnel informational queries ("how to choose a standing desk"). Links to buying guides at natural conversion points.

**URL pattern:** `/guides/{slug}` (same as buying guides)

---

## Article Workflow

See `tools/content-workflow.md` for the step-by-step process. Summary:

```
Idea (backlog) → Research → Draft (markdown) → Review → Convert to HTML → Publish
→ Update sitemap → Update category page → Internal linking → Commit → Push → Deploy
```

---

## Category–Guide Relationship

Each buying guide belongs to one primary category. This relationship drives:
- Navigation (breadcrumbs on guide pages)
- Internal linking (category page links to all its guides)
- Schema.org markup
- sitemap.xml priorities

### Category Map

| Category | Slug | Current Guides |
|---|---|---|
| Home Fitness | `home-fitness` | best-home-gym-equipment |
| Home Office | `home-office` | best-budget-standing-desks |
| Tech & Gadgets | `tech-gadgets` | best-smartwatches-under-300 |
| Family & Parenting | `family-parenting` | best-family-suvs-for-value |
| Money Saving | `money-saving` | *(none yet)* |
| Home Products | `home-products` | *(none yet)* |

### Updating a Category Page After Publishing a New Guide

When a new guide goes live:

1. Open `categories/{category-slug}.html`
2. Replace the relevant "coming soon" card (or add a new guide card) with a live `.guide-card` pointing to the new guide
3. Commit both the new guide HTML and the updated category page together

---

## Internal Linking Strategy

Strong internal linking improves SEO by distributing link equity and helping Google understand topical relationships. Every guide must follow these rules:

### Minimum Internal Links Per Guide

| Link type | Minimum |
|---|---|
| Link to parent category page | 1 (required) |
| Links to related guides | 2 |
| Link to affiliate disclosure | 1 (via the affiliate notice component) |

### Where to Place Internal Links

1. **Contextual links in body copy** — when mentioning a related product or topic, link to the relevant guide naturally within the sentence.
2. **Related Guides section** at the bottom of every article — 2–4 links to guides in the same or adjacent category.
3. **Category link in breadcrumb** — always present via the breadcrumb nav component.

### Internal Linking Priority Matrix

When choosing which guides to link from a new article:

| Priority | Link to... |
|---|---|
| 1st | Parent category page |
| 2nd | Most closely related guide (same product category) |
| 3rd | A guide from an adjacent category (e.g., Home Fitness → Home Products) |
| 4th | Any guide that has already linked to this page (reciprocal) |

### Anchor Text Rules

- Use descriptive anchor text that includes the target guide's primary keyword when natural
- Never use "click here" or "read more" as anchor text
- Never force an anchor text that reads unnaturally in context
- Vary anchor text across different pages linking to the same target

---

## SEO Standards

Every guide page must meet these standards before publishing.

### Required Meta Tags (in `<head>`)

```html
<title>{SEO Title — max 60 chars, primary keyword near start}</title>
<meta name="description" content="{140–160 chars, includes keyword, soft CTA}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://smartconsumerhq.com/guides/{slug}">

<!-- Open Graph -->
<meta property="og:title" content="{SEO Title}">
<meta property="og:description" content="{Meta Description}">
<meta property="og:url" content="https://smartconsumerhq.com/guides/{slug}">
<meta property="og:type" content="article">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{SEO Title}">
<meta name="twitter:description" content="{Meta Description}">
```

### On-Page SEO Requirements

| Element | Requirement |
|---|---|
| H1 | Contains primary keyword; one per page |
| H2 | At least 3 H2 subheadings; include secondary keywords naturally |
| Primary keyword | In first 100 words of body copy |
| Word count | 1,500 minimum; 1,800–2,500 target |
| Internal links | Minimum 3 (see internal linking strategy above) |
| Image alt text | Descriptive; includes keyword where natural |
| Breadcrumb | Required on all guide and category pages |

### Schema.org Markup

Use `Article` schema on guide pages. Template in `content/templates/buying-guide-template.md`. Must include:
- `headline`
- `description`
- `author` (Organization: Smart Consumer HQ)
- `publisher`
- `datePublished`
- `dateModified`
- `mainEntityOfPage`

### URL Conventions

- All guide URLs follow `/guides/{primary-keyword-hyphenated}`
- Use the extension-free URL in canonical tags and sitemap (Cloudflare strips `.html`)
- Always lowercase; hyphens only; no underscores; no special characters
- Keep slugs short and keyword-focused (4–6 words max)

---

## Affiliate Disclosure Standards

FTC guidelines require clear, prominent disclosure before any affiliate content.

### Placement

Affiliate disclosure must appear **above the fold** on every guide page — visible without scrolling on a standard desktop or mobile viewport. Place it:
- Immediately after the breadcrumb navigation, or
- Immediately below the H1

### Required Disclosure Text

```html
<div class="affiliate-notice">
  <p>This page contains affiliate links. If you purchase through our links,
  we may earn a commission at no extra cost to you.
  <a href="/legal/affiliate-disclosure">Learn more</a>.</p>
</div>
```

Do not modify this text. It matches the language in `/legal/affiliate-disclosure.html`.

### Affiliate Link Attributes

All outbound affiliate links must have:

```html
<a href="{AFFILIATE URL}" 
   rel="nofollow sponsored" 
   target="_blank">Product Name</a>
```

- `rel="nofollow"` — tells Google not to pass PageRank through the link
- `rel="sponsored"` — FTC/Google requirement for paid/affiliate links
- `target="_blank"` — opens in new tab (standard for external links)

### Affiliate Link Readiness

Do not add affiliate links to any page until Amazon Associates is approved. Use placeholder `href="#"` during draft stage, clearly marked with a comment:

```html
<a href="#" rel="nofollow sponsored" target="_blank"><!-- PLACEHOLDER: add affiliate URL --></a>
```

---

## Content Quality Standards

### Research Requirements

Before writing a guide:
1. Identify the top 5–7 products by searching Amazon, reviewing editorial sites (Wirecutter, RTINGS, etc.)
2. Check current prices on Amazon
3. Read existing customer reviews to understand real-world pros and cons
4. Note any verified specifications from manufacturer product pages
5. Check search results for the primary keyword — understand what the top-ranking pages cover

### Writing Standards

- Write for the reader, not for search engines — the best content ranks
- Lead every section with the most important point first
- Use specific numbers, not vague language ("up to 50 inches wide" not "spacious")
- Be honest about limitations — readers trust guides that acknowledge trade-offs
- Never claim to have personally tested products unless you have — use "based on reviews" or "according to verified purchasers"
- Minimum reading level: Grade 8 (use Hemingway App or similar)

### Content Update Policy

- Update guides when product availability or pricing changes significantly
- Update the `dateModified` in Schema.org JSON-LD when revised
- Add "Updated {Month Year}" to the guide's visible header when revised
- Re-submit updated URLs to Google Search Console after significant changes

---

## Sitemap Update Procedure

Every time a new guide or category page is published, update `sitemap.xml`:

1. Add the new URL with appropriate `changefreq` and `priority`
2. Use the extension-free URL form
3. Guides: `priority 0.9`, `changefreq monthly`
4. Categories: `priority 0.8`, `changefreq weekly`
5. Commit `sitemap.xml` alongside the new page

```xml
<url>
  <loc>https://smartconsumerhq.com/guides/{new-slug}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

# Smart Consumer HQ

Independent buying guides and product reviews for everyday consumers.

**Live site:** https://smartconsumerhq.com  
**GitHub:** https://github.com/Rodneyst/smartconsumerhq

---

## Project Overview

Smart Consumer HQ publishes long-form buying guides, product reviews, and consumer comparisons across 6 product categories, monetised through affiliate commissions. The site is built with raw HTML, CSS, and JavaScript — no framework, no build system — and deployed directly to Cloudflare Workers.

---

## Repository Structure

```
smartconsumerhq/
├── index.html              # Homepage
├── styles.css              # Global stylesheet (all pages)
├── script.js               # Shared vanilla JS
├── components.js           # Header/footer injection for inner pages
├── sitemap.xml             # XML sitemap (19 URLs)
├── robots.txt              # Crawler directives
├── CLAUDE.md               # Rules and conventions for AI agents
│
├── buying-guides.html      # Section: all buying guides
├── reviews.html            # Section: product reviews index
├── comparisons.html        # Section: product comparisons index
├── deals.html              # Section: best deals on top picks
├── blog.html               # Section: blog / article index
│
├── categories/             # 6 category landing pages
├── guides/                 # Buying guide articles (4 live)
├── legal/                  # Affiliate disclosure, privacy policy, terms
│
├── config/
│   └── affiliate-config.js # Centralized affiliate network IDs
│
├── lib/
│   └── affiliate.js        # Affiliate link utility functions
│
├── content/
│   ├── templates/
│   │   ├── buying-guide-template.md    # Markdown template for guide drafts
│   │   └── article-template.html      # HTML template for published articles
│   ├── products/           # Product data JSON files
│   ├── articles/           # Article drafts (markdown)
│   └── article_ideas/      # Backlog of 100+ article ideas
│
├── tools/
│   └── content-workflow.md
│
└── docs/                   # All project documentation
    ├── 00_founder/         # Vision, goals, affiliate accounts
    ├── 01_product/         # Status, roadmap, task list, monetization
    ├── 02_development/     # Deployment guide, AI handoff, affiliate system
    ├── 03_story/           # Brand narrative, editorial standards
    ├── 04_design/          # Style references
    ├── 05_research/        # SEO setup, keyword research
    └── 99_session_logs/    # Chronological session logs
```

---

## Affiliate System

The affiliate link infrastructure is centralized in two files. No affiliate IDs are hardcoded in HTML pages or components.

| File | Purpose |
|---|---|
| `config/affiliate-config.js` | Network IDs and status flags — edit here only |
| `lib/affiliate.js` | Utility functions for generating links and product cards |

### Active Networks

| Network | Status | ID | Links Live |
|---|---|---|---|
| Amazon Associates | **Active** | Store ID: `smartconsu0ca-20` | 33 links across 3 guides |
| CJ Affiliate | **Active** | Property ID: `101779331` | 0 — no advertiser programs joined yet |
| Walmart Affiliates | Pending | Application submitted | 0 |
| Impact Radius | Disabled | Verification failed — revisit later | 0 |

### Key Functions

```javascript
generateAmazonAffiliateLink('B08QZC9QZC')
// → https://www.amazon.com/dp/B08QZC9QZC?tag=smartconsu0ca-20

generateAffiliateButton('Check Price', url, 'btn btn-primary btn-sm')
// → <a href="..." class="btn btn-primary btn-sm" target="_blank" rel="nofollow sponsored">Check Price</a>

generateProductCard({ name, rating, price, pros, cons, affiliateUrl })
// → Full product card HTML string

generateMerchantLink('amazon', 'B08QZC9QZC')
// → Amazon affiliate URL with active store tag

getAffiliateNetwork('https://www.amazon.com/dp/...')
// → 'amazon'
```

Full documentation: `docs/02_development/affiliate-system.md`

---

## Content System

### Published Content

| Type | Count | Location |
|---|---|---|
| Buying Guides | 4 | `guides/` |
| Category Pages | 6 | `categories/` |
| Section Landing Pages | 5 | Root level |
| Legal Pages | 3 | `legal/` |

### Content Templates

- **HTML article template:** `content/templates/article-template.html` — copy and fill PLACEHOLDER values for new articles. Includes all SEO fields, FTC disclosure, ToC, pros/cons blocks, comparison table, FAQ, and conclusion.
- **Markdown draft template:** `content/templates/buying-guide-template.md` — for drafting guide content before converting to HTML.

### Product Data

Product specifications and affiliate data are stored as JSON in `content/products/`. Example: `content/products/flexispot-e7.json`. These can be loaded via JavaScript to populate product cards dynamically, or used as reference data when creating new guide pages.

### Adding a New Article (Manual)

1. Pick an idea from `content/article_ideas/master-article-backlog.csv`
2. Draft in `content/articles/{slug}.md` using the markdown template
3. Copy `content/templates/article-template.html` → `guides/{slug}.html`
4. Fill in all PLACEHOLDER values
5. Replace all `href="#"` affiliate links with real Amazon URLs using `?tag=smartconsu0ca-20`
6. Add the URL to `sitemap.xml`
7. Link to it from the relevant category page
8. Commit and push

Full workflow: `tools/content-workflow.md`

---

## Automated Content Pipeline

SmartConsumerHQ has a fully documented automated content agent pipeline. An AI agent can generate, stage, review-gate, publish, and deploy articles without manual HTML writing.

### How It Works

```
QUEUED → DRAFTING → REVIEW_NEEDED → APPROVED → PUBLISHED
```

| File | Role |
|---|---|
| `content/content-queue.json` | 20 articles queued, ordered by priority |
| `content/drafts/` | Staging area — nothing here is live |
| `content/published-content.json` | Registry of all live articles |
| `tools/generate-article.md` | Workflow: pick from queue → research → draft → save → mark review_needed |
| `tools/publish-article.md` | Workflow: approved draft → guides/ → real affiliate URLs → sitemap → push |

### Generate the Next Article

> **Prompt:** "Generate the next article in the content queue for SmartConsumerHQ. Read `content/content-queue.json`, pick the first queued item, and follow `tools/generate-article.md` exactly. Save the draft to `content/drafts/{slug}.html` and set status to `review_needed`. Do not publish. Report draft location, word count, and products covered."

### Publish an Approved Article

After you review `content/drafts/{slug}.html` and set `"status": "approved"` in `content-queue.json`:

> **Prompt:** "Publish the approved article with slug `{slug}` from `content/drafts/{slug}.html`. Follow `tools/publish-article.md` exactly. Do not push without my confirmation."

### Content Queue — Next 5 Articles

| Priority | Title | Category |
|---|---|---|
| 1 | Best Ergonomic Office Chairs Under $300 | Home Office |
| 2 | Best Air Fryers Under $150 | Kitchen Tools |
| 3 | Best Wireless Earbuds Under $100 | Tech & Gadgets |
| 4 | Best Resistance Bands for Home Workouts | Home Fitness |
| 5 | Best Instant Pots and Pressure Cookers | Kitchen Tools |

Full documentation: `docs/02_development/AUTOMATED_CONTENT_AGENT.md`  
Review checklist: `docs/02_development/ARTICLE_REVIEW_CHECKLIST.md`

---

## SEO

| Item | Status |
|---|---|
| Sitemap | Live — `https://smartconsumerhq.com/sitemap.xml` — **19 URLs** |
| Robots | Live — `https://smartconsumerhq.com/robots.txt` |
| Google Search Console | **Verified** — DNS TXT record June 2026; sitemap submitted |
| GA4 | **Active** — Measurement ID `G-KNC6546GMH` |
| Microsoft Clarity | **Active** — Project ID `x4ihicw52o` |
| Schema.org JSON-LD | Present on all pages (Article, FAQ, CollectionPage) |
| Canonical URLs | Present on all pages |
| OG / Twitter Card | Present on all pages |

Full SEO setup: `docs/05_research/SEO_SETUP.md`

---

## Documentation

| Document | Location | Purpose |
|---|---|---|
| Project Status | `docs/01_product/PROJECT_STATUS.md` | Current state of the site |
| Roadmap | `docs/01_product/ROADMAP.md` | 5-phase development plan |
| Task List | `docs/01_product/TODO.md` | Prioritised todo list |
| Monetization Status | `docs/01_product/MONETIZATION_STATUS.md` | Affiliate program status and revenue targets |
| Affiliate System | `docs/02_development/affiliate-system.md` | Affiliate architecture, functions, and maintenance |
| Deployment Guide | `docs/02_development/DEPLOYMENT.md` | How to deploy and troubleshoot |
| AI Handoff | `docs/02_development/AI_HANDOFF.md` | Entry point for AI agents |
| Affiliate Accounts | `docs/00_founder/affiliate-accounts.md` | Account IDs and program status |
| SEO Setup | `docs/05_research/SEO_SETUP.md` | GSC, GA4, sitemap, keyword strategy |
| Session Logs | `docs/99_session_logs/` | Chronological work history |
| AI Agent Rules | `CLAUDE.md` (root) | Code conventions and project rules |

---

## Development Workflow

```bash
# Edit files locally
git add <specific-files>          # Never use git add -A
git commit -m "Description"
git push origin main              # CONFIRM with user — this is production
```

No build step required. Files are served as-is. Deploy time: ~60–90 seconds.

Full details: `docs/02_development/DEPLOYMENT.md`

---

## Roadmap Status

| Phase | Status |
|---|---|
| Phase 1: Foundation | **Complete** — hosting, DNS, GSC, GA4, Clarity, sitemap |
| Phase 2: Content Engine | **Complete** — 4 guides live, affiliate links active, content pipeline built |
| Phase 3: SEO | **Active** — GSC verified, sitemap indexed, schema on all pages; awaiting rankings |
| Phase 4: Monetization | **Active** — 33 Amazon affiliate links live (`smartconsu0ca-20`); CJ needs advertiser programs |
| Phase 5: Scale | Not started — requires traffic |

**Immediate next step:** Upgrade Amazon search URLs to direct ASINs (SiteStripe), apply to CJ advertiser programs, and generate next article from content queue (q001: best-ergonomic-office-chairs-under-300).

Full roadmap: `docs/01_product/ROADMAP.md`

---

## Required Startup Procedure for AI Agents

1. Read the most recent file in `docs/99_session_logs/`
2. Read `docs/02_development/AI_HANDOFF.md`
3. Read `docs/01_product/PROJECT_STATUS.md`
4. Read `CLAUDE.md` (root)

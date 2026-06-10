# TODO — Smart Consumer HQ

**Last updated:** 2026-06-09 (Entry 22)

---

## Completed

- [x] Create homepage (`index.html`) with all sections
- [x] Create global stylesheet (`styles.css`)
- [x] Create shared JS (`script.js`, `components.js`)
- [x] Create 6 category pages (home-fitness, tech-gadgets, home-office, family-parenting, money-saving, home-products)
- [x] Fix category page routing — move files into `categories/` subdirectory
- [x] Create `guides/` directory with 4 placeholder guide pages
- [x] Create `legal/` directory (affiliate-disclosure, privacy-policy, terms-of-use)
- [x] Configure SSH authentication for GitHub
- [x] Confirm Cloudflare auto-deploy on push to `main`
- [x] Verify all internal links return 200
- [x] Create `sitemap.xml` — 14 URLs, extension-free, live at `/sitemap.xml`
- [x] Create `robots.txt` — allow all crawlers, reference sitemap, live at `/robots.txt`
- [x] Create docs/ documentation framework (CLAUDE.md, DEPLOYMENT.md, PROJECT_STATUS.md, ROADMAP.md, SEO_SETUP.md, AI_HANDOFF.md)
- [x] Establish session log standard and startup/shutdown procedures
- [x] Infrastructure complete (2026-06-09):
  - [x] Cloudflare deployment confirmed auto-deploying on push to `main`
  - [x] Google Search Console verified via Cloudflare DNS TXT record
  - [x] Sitemap (14 URLs) submitted to GSC
  - [x] GA4 property active — Measurement ID `G-KNC6546GMH`
  - [x] `docs/01_product/CONTENT_ROADMAP.md` — Top 20 guides with priority, search intent, monetization score
  - [x] `docs/01_product/MONETIZATION_PLAN.md` — Amazon Associates, Walmart, Impact, CJ, display ads milestones
- [x] Analytics foundation:
  - [x] GA4 tracking code installed in `script.js` (IIFE #10) — **`G-KNC6546GMH` ACTIVE as of 2026-06-09**
  - [x] GSC verification meta tag in `index.html` — placeholder code, ready to activate
  - [x] `docs/05_research/GA4_SETUP.md` — step-by-step activation guide
  - [x] `docs/05_research/SEARCH_CONSOLE_SETUP.md` — step-by-step verification guide
  - [x] `docs/05_research/AFFILIATE_LINK_MAP.md` — all 11 affiliate link placeholders mapped
- [x] Create content engine foundation:
  - [x] `content/templates/buying-guide-template.md`
  - [x] `content/article_ideas/master-article-backlog.csv` (100 ideas)
  - [x] `content/articles/` directory (ready for drafts)
  - [x] `docs/02_development/CONTENT_SYSTEM.md`
  - [x] `tools/content-workflow.md`

---

## High Priority

### Affiliate Links
- [x] **Replace `href="#"` affiliate placeholders in guides 1–3** with real Amazon URLs `?tag=smartconsu0ca-20`. 33 links replaced across `best-home-gym-equipment.html`, `best-budget-standing-desks.html`, `best-smartwatches-under-300.html`. Guide 4 (Family SUVs) skipped — Edmunds research links, N/A. ✓ (Entry 19)
- [x] **Full affiliate-link audit** — 148 links scanned, 3 broken fixed, 9 MR items identified. Created `docs/affiliate-audit.md`. ✓ (Entry 21)
- [x] **Replace MR-01: Autonomous SmartDesk Pro** → FEZIBO 55" Electric Desk in `best-budget-standing-desks.html` and `deals.html`. ✓ (Entry 22)
- [x] **Replace MR-02: Lululemon 5mm The Mat** → Yoga Design Lab Combo Mat 3.5mm in `best-yoga-mats-under-100.html`. ✓ (Entry 22)
- [x] **Replace MR-03: Liforme Original Yoga Mat** → Manduka eKO Lite 4mm in `best-yoga-mats-under-100.html`. ✓ (Entry 22)
- [x] **Replace MR-04: Autonomous ErgoChair Pro** → SIDIZ T50 in `best-ergonomic-office-chairs-under-300.html`. ✓ (Entry 22)

### Content Automation Pipeline (Phase 2B — complete)
- [x] **Content queue created** — `content/content-queue.json` — 20 articles, priorities 1–20 ✓
- [x] **Drafts folder created** — `content/drafts/` — staging area for generated articles ✓
- [x] **Published content tracker** — `content/published-content.json` — 4 existing guides tracked ✓
- [x] **Generate article workflow** — `tools/generate-article.md` — repeatable AI workflow ✓
- [x] **Publish article workflow** — `tools/publish-article.md` — review-gated publish process ✓
- [x] **AUTOMATED_CONTENT_AGENT.md** — full agent handoff documentation ✓
- [x] **ARTICLE_REVIEW_CHECKLIST.md** — human review checklist before publishing ✓
- [x] **Generate next 10 articles** — q001–q010 drafted in `content/drafts/`, status: review_needed (Entry 20) ✓
- [ ] **Review and approve drafts** — use `docs/02_development/ARTICLE_REVIEW_CHECKLIST.md`. Start with q001 (ergonomic chairs) — highest commercial intent
- [ ] **Publish approved drafts** — run publish workflow for each approved item; commit each guide separately

### Content (Phase 2 — published guides)
- [x] **Write full content: `guides/best-home-gym-equipment.html`** — 3,681 words. Audited 2026-06-09 ✓
- [x] **Write full content: `guides/best-budget-standing-desks.html`** — 4,663 words. Published 2026-06-09 ✓
- [x] **Write full content: `guides/best-smartwatches-under-300.html`** — 4,475 words. Published 2026-06-09 ✓
- [x] **Write full content: `guides/best-family-suvs-for-value.html`** — 5,188 words. Published 2026-06-09 ✓
- [ ] **Write first Money Saving guide** — "Best Cashback Apps 2026" recommended
- [ ] **Write first Home Products guide** — `q020` Best Budget Robot Vacuums is in queue

### SEO and Analytics
- [x] **Activate Google Search Console** — verified 2026-06-09; sitemap submitted ✓
- [x] **Activate GA4** — `G-KNC6546GMH` active since 2026-06-09 ✓
- [x] **Submit updated sitemap** — 19 URLs as of Phase 2A. Resubmit to GSC.
- [ ] **Resubmit sitemap to GSC** — sitemap now has 19 URLs (was 14); resubmit at search.google.com/search-console
- [ ] **Run Lighthouse audit** — static HTML should score 90+; confirm no regressions
- [ ] **Submit to Bing Webmaster Tools** — additional search engine coverage

### Monetization
- [x] **Amazon Associates active** — Store ID `smartconsu0ca-20` ✓
- [x] **CJ Affiliate active** — Property ID `101779331` ✓
- [x] **33 affiliate links live in production** — post-deployment verified 2026-06-09 ✓
- [ ] **Upgrade top-pick search URLs to direct ASINs via SiteStripe** — Priority: (1) Bowflex SelectTech 552 in `best-home-gym-equipment.html` ×3 links; (2) FlexiSpot E7 in `best-budget-standing-desks.html` ×3 links; (3) Apple Watch SE 2 in `best-smartwatches-under-300.html` ×3 links. ASIN curl-testing blocked by Amazon bot detection — requires SiteStripe in-browser verification. Do not push until verified. Direct ASINs convert ~2× better than search URLs.
- [ ] **Apply to CJ advertiser programs** — Best Buy, Target, Home Depot via CJ dashboard
- [ ] **Monitor Walmart Affiliates approval** — application submitted; activate links when approved
- [ ] **Connect newsletter form to real email provider** — Mailchimp or ConvertKit

---

## Medium Priority

- [ ] Add favicon (`/favicon.ico`) and apple-touch-icon
- [ ] Add product images to guide pages (WebP, optimised)
- [ ] Write 2–4 more Home Fitness guides (adjustable dumbbells, exercise bikes, weight bench, treadmill)
- [ ] Write 2–4 more Home Office guides (ergonomic chairs, monitors, mechanical keyboards)
- [ ] Write 2–4 more Tech & Gadgets guides (wireless earbuds, smart home, streaming devices)
- [ ] Add `BreadcrumbList` Schema.org structured data to all inner pages
- [ ] Test all pages in mobile browsers (iOS Safari, Android Chrome)
- [ ] Run Lighthouse audit and fix any issues scoring below 90
- [ ] Set up Bing Webmaster Tools
- [ ] Add `rel="nofollow sponsored"` to all affiliate links (needed before going live)

---

## Low Priority

- [ ] Add OG image (`/og-image.jpg`) — referenced in meta tags but file doesn't exist
- [ ] Add logo image (`/logo.png`) — referenced in Schema.org but file doesn't exist
- [ ] W3C HTML validation on all pages
- [ ] Add `<link rel="preload">` for critical CSS
- [ ] Create a 404 error page
- [ ] Cookie consent banner (required once GA4 with cookies is installed)
- [ ] Submit site to web directories and resource lists
- [ ] Add "last updated" datestamp to guide pages
- [ ] Add author byline to guide pages

---

## Content Backlog

100 article ideas catalogued in `content/article_ideas/master-article-backlog.csv`.

**Next 10 recommended articles (by priority and monetization potential):**

| # | Title | Category | Priority |
|---|---|---|---|
| 1 | Best Home Gym Equipment for Beginners | Home Fitness | High — exists as placeholder |
| 2 | Best Budget Standing Desks Under $400 | Home Office | High — exists as placeholder |
| 3 | Best Smartwatches Under $300 | Tech & Gadgets | High — exists as placeholder |
| 4 | Best Family SUVs for Value | Family & Parenting | High — exists as placeholder |
| 5 | Best Cashback Apps 2026 | Money Saving | High — fills empty category |
| 6 | Best Robot Vacuums for Every Budget | Home Products | High — fills empty category |
| 7 | Best Adjustable Dumbbells 2026 | Home Fitness | High |
| 8 | Best Ergonomic Office Chairs Under $400 | Home Office | High |
| 9 | Best Wireless Earbuds Under $100 | Tech & Gadgets | High |
| 10 | Best Baby Monitors 2026 | Family & Parenting | High |

---

## Future Ideas

- [ ] Product comparison tables with sortable columns (requires JS enhancement)
- [ ] Price history charts using affiliate API data
- [ ] "Best of" roundup posts (seasonal: Black Friday, Prime Day, back-to-school)
- [ ] User-submitted deal alerts (requires backend)
- [ ] Newsletter sponsorships once list exceeds 1,000 subscribers
- [ ] Video content (YouTube channel with product walkthroughs)
- [ ] Downloadable buying checklists as lead magnets
- [ ] `/go/` redirect system for clean affiliate links and easy link management
- [ ] Automated price monitoring to flag when recommended products change price
- [ ] Markdown-to-HTML conversion script for content pipeline automation
- [ ] Expand to additional categories (Pet Products, Travel Gear, Beauty & Personal Care)
- [ ] Build topical authority cluster in one category before expanding further

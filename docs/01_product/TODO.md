# TODO — Smart Consumer HQ

**Last updated:** 2026-06-09 (Entry 8)

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

### Content (Phase 2 — start here)
- [x] **Write full content: `guides/best-home-gym-equipment.html`** — 3,681 words; 5 products, 2 comparison tables, 6-question FAQ + schema, verdict box, affiliate links, internal links, SEO complete. Audited 2026-06-09 ✓
- [ ] **Write full content: `guides/best-budget-standing-desks.html`** — use buying guide template
- [ ] **Write full content: `guides/best-smartwatches-under-300.html`** — use buying guide template
- [ ] **Write full content: `guides/best-family-suvs-for-value.html`** — use buying guide template
- [ ] **Add affiliate disclosure notice** to top of each guide page (above the fold)
- [ ] **Write first Money Saving guide** — pick from backlog (recommend: Best Cashback Apps 2026)
- [ ] **Write first Home Products guide** — pick from backlog (recommend: Best Robot Vacuums for Every Budget)

### SEO and Analytics
- [x] **Activate Google Search Console** — verified 2026-06-09 via Cloudflare DNS TXT record; sitemap (14 URLs) submitted to GSC
- [x] **Activate GA4** — `G-KNC6546GMH` installed in `script.js` IIFE #10; tracking live on all pages as of 2026-06-09
- [ ] **Apply for Amazon Associates** — see application checklist in `docs/05_research/AFFILIATE_LINK_MAP.md`; write 2 more full guides before applying

### Monetization
- [ ] **Add real affiliate links to guides** — after Amazon Associates approval
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

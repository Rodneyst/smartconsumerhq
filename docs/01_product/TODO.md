# TODO — Smart Consumer HQ

**Last updated:** 2026-06-09

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
- [x] Create content engine foundation:
  - [x] `content/templates/buying-guide-template.md`
  - [x] `content/article_ideas/master-article-backlog.csv` (100 ideas)
  - [x] `content/articles/` directory (ready for drafts)
  - [x] `docs/02_development/CONTENT_SYSTEM.md`
  - [x] `tools/content-workflow.md`

---

## High Priority

### Content (Phase 2 — start here)
- [ ] **Write full content: `guides/best-home-gym-equipment.html`** — use buying guide template; 1,800+ words; 5 products; comparison table; FAQ
- [ ] **Write full content: `guides/best-budget-standing-desks.html`** — use buying guide template
- [ ] **Write full content: `guides/best-smartwatches-under-300.html`** — use buying guide template
- [ ] **Write full content: `guides/best-family-suvs-for-value.html`** — use buying guide template
- [ ] **Add affiliate disclosure notice** to top of each guide page (above the fold)
- [ ] **Write first Money Saving guide** — pick from backlog (recommend: Best Cashback Apps 2026)
- [ ] **Write first Home Products guide** — pick from backlog (recommend: Best Robot Vacuums for Every Budget)

### SEO and Analytics
- [ ] **Set up Google Search Console** — verify domain via Cloudflare DNS TXT record, submit sitemap
- [ ] **Install Google Analytics (GA4)** — add measurement script to `script.js`
- [ ] **Apply for Amazon Associates** — required before affiliate links can go live

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

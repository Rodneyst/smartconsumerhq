# Roadmap — Smart Consumer HQ

**Last updated:** June 8, 2026

This roadmap is organised into five phases. Each phase builds on the previous. Phases 1 and 2 must be substantially complete before SEO and monetisation efforts will produce meaningful results.

---

## Phase 1: Foundation
**Goal:** A fully functional, technically sound site with no broken links, proper crawlability, and legal compliance.

### 1.1 Fix All Broken Links
- [x] Move category pages into `categories/` subdirectory
- [x] Create `categories/money-saving.html`
- [x] Create `categories/home-products.html`
- [x] Create `guides/` directory with 4 placeholder guide pages
- [x] Create `legal/` directory with affiliate-disclosure, privacy-policy, terms-of-use
- [x] Verify all internal links return 200

### 1.2 Crawlability
- [ ] Create `sitemap.xml` listing all live URLs
- [ ] Create `robots.txt` allowing all crawlers, pointing to sitemap
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### 1.3 Legal Compliance
- [x] Affiliate disclosure page
- [x] Privacy policy page
- [x] Terms of use page
- [ ] Add affiliate disclosure notice to top of each guide page
- [ ] Cookie consent banner (if using analytics cookies)

### 1.4 Technical Baseline
- [ ] Verify all pages pass W3C HTML validation
- [ ] Test site on mobile (iOS Safari, Android Chrome)
- [ ] Test all nav dropdowns and interactive elements
- [ ] Connect newsletter form to real email provider (Mailchimp / ConvertKit)
- [ ] Add favicon and apple-touch-icon

**Phase 1 target completion:** Week 1–2

---

## Phase 2: Content
**Goal:** Enough published guides to attract meaningful organic traffic and support affiliate revenue.

### 2.1 Complete Existing Guide Pages (4 guides)
Replace placeholder content with full buying guides:
- [ ] Best Home Gym Equipment for Beginners (1,800+ words)
- [ ] Best Budget Standing Desks Under $400 (1,800+ words)
- [ ] Best Smart Watches Under $300 (1,800+ words)
- [ ] Best Family SUVs for Value (2,000+ words)

Each guide must include:
- Intro with clear value proposition
- How we tested / methodology section
- Top picks with pros/cons
- Comparison table
- Buying guide (what to look for)
- FAQ section
- Affiliate disclosure notice
- Real affiliate links

### 2.2 Expand to 25 Guides
Priority guide topics by category:

**Home Fitness (target: 5 guides)**
- [ ] Best Adjustable Dumbbells 2026
- [ ] Best Budget Treadmills Under $600
- [ ] Best Exercise Bikes Under $800
- [ ] Best Fitness Trackers 2026

**Home Office (target: 5 guides)**
- [ ] Best Ergonomic Office Chairs Under $400
- [ ] Best Budget 4K Monitors 2026
- [ ] Best Mechanical Keyboards for Work
- [ ] Best USB Microphones for Remote Work

**Tech & Gadgets (target: 5 guides)**
- [ ] Best Wireless Earbuds Under $100
- [ ] Best Laptops Under $800 2026
- [ ] Best Smart Home Starter Kits
- [ ] Best Portable Chargers and Power Banks

**Family & Parenting (target: 3 guides)**
- [ ] Best Baby Monitors 2026
- [ ] Best Car Seats for Toddlers

**Money Saving (target: 4 guides)**
- [ ] Best Cashback Apps 2026
- [ ] Best Price Tracking Tools
- [ ] Best Times to Buy Electronics

**Home Products (target: 3 guides)**
- [ ] Best Robot Vacuums for Every Budget
- [ ] Best Coffee Makers Under $100

### 2.3 Expand to 50 Guides
After hitting 25 guides and confirming organic traffic growth, expand to 50 total guides using the same template. Prioritise categories showing the most search traffic in Google Search Console.

### 2.4 Supporting Informational Articles
Beyond buying guides, add informational content that captures earlier-funnel searches:
- [ ] "How to set up a home gym in a small space"
- [ ] "Standing desk vs. regular desk: is it worth it?"
- [ ] "How to choose a smartwatch"
- These link internally to relevant buying guides.

### 2.5 Internal Linking Strategy
- [ ] Every guide links to 2–3 related guides in the sidebar (already in template)
- [ ] Every category page links to all guides in that category
- [ ] Homepage featured guides link to most recent/important guides
- [ ] Informational articles link to buying guides at natural conversion points

**Phase 2 target:** 25 guides live within 60 days

---

## Phase 3: SEO
**Goal:** Indexed, measurable, and improving in organic search rankings.

### 3.1 Google Search Console
- [ ] Verify domain ownership in GSC
- [ ] Submit sitemap.xml
- [ ] Monitor Index Coverage report weekly
- [ ] Fix any crawl errors flagged by GSC
- [ ] Monitor Core Web Vitals

### 3.2 Google Analytics (GA4)
- [ ] Create GA4 property
- [ ] Add GA4 measurement script to all pages (via `script.js` or inline)
- [ ] Configure goals: newsletter signup, affiliate link click events
- [ ] Set up weekly traffic report

### 3.3 Structured Data Validation
- [ ] Test all pages with Google's Rich Results Test
- [ ] Validate Schema.org JSON-LD on each page type (Organization, CollectionPage, Article)
- [ ] Add `BreadcrumbList` structured data to all inner pages
- [ ] Consider adding `Product` and `Review` schema to guide pages with specific product picks

### 3.4 Page Speed Optimisation
- [ ] Run Lighthouse audit on homepage and one guide page
- [ ] Optimise any images added to guide pages (WebP format, correct sizing)
- [ ] Evaluate whether Google Fonts can be loaded with `font-display: swap`
- [ ] Confirm Cloudflare caching headers are correct

### 3.5 Keyword Strategy
See `SEO_SETUP.md` for detailed keyword research approach.

- [ ] Build master keyword list for all 6 categories
- [ ] Map one primary keyword per guide page
- [ ] Ensure H1, title tag, and meta description all include primary keyword
- [ ] Target long-tail, high commercial-intent keywords first ("best X under $Y")

### 3.6 Backlink Strategy
- [ ] Submit site to relevant directories and resource pages
- [ ] Reach out to personal finance / consumer blogs for link exchanges
- [ ] Create one linkable data-driven asset (e.g. "Price tracking study")
- [ ] Monitor backlink profile via Ahrefs or similar

**Phase 3 target:** GSC and GA4 live within 1 week of Phase 1 completion

---

## Phase 4: Monetisation
**Goal:** Generating consistent affiliate revenue from organic traffic.

### 4.1 Amazon Associates
- [ ] Apply for Amazon Associates program
- [ ] Add affiliate links to all 4 existing guides
- [ ] Use Amazon OneLink for international traffic monetisation
- [ ] Add affiliate disclosure notice to top of each guide (above the fold)
- [ ] Track affiliate click events in GA4

### 4.2 Other Affiliate Networks
- [ ] Apply to ShareASale, Impact, or CJ Affiliate
- [ ] Identify non-Amazon affiliate programs for each category
- [ ] Diversify away from Amazon-only for categories with better direct programs

### 4.3 Email Newsletter
- [ ] Choose email provider (Mailchimp free tier or ConvertKit)
- [ ] Connect homepage and sidebar newsletter forms
- [ ] Create welcome email with "best guides" roundup
- [ ] Publish one email per week (new guide announcement or deals roundup)
- [ ] Target: 500 subscribers within 90 days

### 4.4 Lead Magnets
- [ ] Create one downloadable PDF (e.g. "Home Gym Buyer's Checklist")
- [ ] Gate it behind email signup
- [ ] A/B test with vs. without lead magnet on Home Fitness category page

### 4.5 Conversion Optimisation
- [ ] Track affiliate link click-through rate per guide
- [ ] A/B test CTA button placement and copy
- [ ] Ensure affiliate links open in new tab and have proper `rel="nofollow sponsored"` attributes
- [ ] Review and improve underperforming guides quarterly

**Phase 4 target:** First affiliate commission within 30 days of Amazon Associates approval

---

## Phase 5: Automation and Scale
**Goal:** Reduce manual effort per guide while maintaining quality; build systems for scale.

### 5.1 AI-Assisted Article Creation
- [ ] Define article brief template (keyword, intent, outline, sources required)
- [ ] Use Claude or similar to draft guide sections from briefs
- [ ] Establish human review and fact-check workflow before publishing
- [ ] Document the workflow in `CLAUDE.md`

### 5.2 Content Update Workflows
- [ ] Schedule quarterly reviews of all published guides (prices, availability, rankings change)
- [ ] Update "Updated [Month Year]" datestamp on guides when revised
- [ ] Set calendar reminders for seasonal content (Black Friday buying guides, etc.)

### 5.3 Affiliate Link Management
- [ ] Centralise affiliate links using a redirect prefix (e.g. `/go/product-name`) for easier updates
- [ ] Build a simple link registry (spreadsheet or JSON file) mapping product slugs to affiliate URLs
- [ ] This makes updating expired or changed affiliate links a single-file edit

### 5.4 Reporting Dashboards
- [ ] Build a weekly metrics review habit: sessions, affiliate clicks, signups, revenue
- [ ] Connect GA4 → Google Looker Studio for a simple dashboard
- [ ] Track revenue per guide to identify top performers and replication opportunities

---

## Success Milestones

| Milestone | Target date |
|---|---|
| Zero broken links, sitemap live | Week 1 |
| 4 guides with full content + affiliate links | Week 2 |
| GSC and GA4 installed | Week 1 |
| 10 guides live | Week 4 |
| Amazon Associates approved | Week 2 |
| First affiliate click | Week 3 |
| First affiliate commission | Week 6 |
| 25 guides live | Week 8 |
| 500 email subscribers | Week 16 |
| 50 guides live | Week 20 |
| 10,000 monthly organic sessions | Month 6 |

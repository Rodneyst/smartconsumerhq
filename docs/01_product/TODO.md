# TODO — Smart Consumer HQ

**Last updated:** June 8, 2026

---

## Completed

- [x] Create homepage (`index.html`) with all sections
- [x] Create global stylesheet (`styles.css`)
- [x] Create shared JS (`script.js`, `components.js`)
- [x] Create 4 category pages (home-fitness, tech-gadgets, home-office, family-parenting)
- [x] Fix category page routing — move files into `categories/` subdirectory
- [x] Create `categories/money-saving.html`
- [x] Create `categories/home-products.html`
- [x] Create `guides/` directory with 4 placeholder guide pages
- [x] Create `legal/` directory (affiliate-disclosure, privacy-policy, terms-of-use)
- [x] Configure SSH authentication for GitHub
- [x] Confirm Cloudflare auto-deploy on push to `main`
- [x] Verify all internal links return 200
- [x] Create CLAUDE.md, DEPLOYMENT.md, PROJECT_STATUS.md, ROADMAP.md, SEO_SETUP.md

---

## High Priority

- [ ] **Create `sitemap.xml`** — required for Google indexing; list all 14 live HTML pages
- [ ] **Create `robots.txt`** — allow all crawlers, reference sitemap
- [ ] **Set up Google Search Console** — verify domain, submit sitemap
- [ ] **Install Google Analytics (GA4)** — add measurement ID to all pages via `script.js`
- [ ] **Apply for Amazon Associates** — needed before any affiliate links can go live
- [ ] **Write full content for 4 existing guide pages** — currently all placeholders
  - [ ] Best Home Gym Equipment for Beginners
  - [ ] Best Budget Standing Desks Under $400
  - [ ] Best Smart Watches Under $300
  - [ ] Best Family SUVs for Value
- [ ] **Add real affiliate links to guides** — after Amazon Associates is approved
- [ ] **Add affiliate disclosure notice to top of each guide** (above-the-fold text)
- [ ] **Connect newsletter form to real email provider** — Mailchimp or ConvertKit

---

## Medium Priority

- [ ] Add favicon (`/favicon.ico`) and apple-touch-icon
- [ ] Add product images to guide pages (WebP, optimised)
- [ ] Write 2 more guides for Money Saving category
- [ ] Write 2 more guides for Home Products category
- [ ] Add `BreadcrumbList` Schema.org structured data to all inner pages
- [ ] Add affiliate disclosure notice as a component in `components.js` (auto-injected on guide pages)
- [ ] Test all pages in mobile browsers (iOS Safari, Android Chrome)
- [ ] Run Lighthouse audit and fix any issues scoring below 90
- [ ] Add `rel="nofollow sponsored"` to all affiliate links
- [ ] Set up Bing Webmaster Tools

---

## Low Priority

- [ ] Add OG image (`/og-image.jpg`) — currently referenced in meta tags but file doesn't exist
- [ ] Add logo image (`/logo.png`) — referenced in Schema.org but file doesn't exist
- [ ] W3C HTML validation on all pages
- [ ] Add `<link rel="preload">` for critical CSS
- [ ] Create a 404 error page
- [ ] Cookie consent banner (if using GA4 with cookies)
- [ ] Submit site to web directories and resource lists
- [ ] Add "last updated" datestamp to guide pages
- [ ] Add author byline to guide pages

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
- [ ] Expand to additional categories (Pet Products, Travel Gear, Beauty & Personal Care)
- [ ] Build a topical authority cluster around one category before expanding

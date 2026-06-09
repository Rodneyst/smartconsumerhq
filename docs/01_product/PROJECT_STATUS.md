# Project Status — Smart Consumer HQ

**Last updated:** 2026-06-09 (Entry 3)

---

## Project Overview

Smart Consumer HQ is an independent affiliate review and buying guide website targeting everyday consumers researching product purchases. The site publishes category-level landing pages and long-form buying guides across six consumer verticals, monetised through affiliate commissions.

**Live URL:** https://smartconsumerhq.com  
**GitHub:** https://github.com/Rodneyst/smartconsumerhq  
**Contact:** hello@smartconsumerhq.com

---

## Domain and Hosting Architecture

| Layer | Provider | Detail |
|---|---|---|
| Domain registrar | Unknown | Domain is `smartconsumerhq.com` |
| DNS | Cloudflare | Nameservers: `deb.ns.cloudflare.com`, `carlos.ns.cloudflare.com` |
| CDN / proxy | Cloudflare | All traffic proxied; origin IPs never exposed |
| Hosting | Cloudflare Workers (Static Assets) | Files served directly from Cloudflare edge |
| TLS | Cloudflare | Automatic HTTPS |
| DDoS / firewall | Cloudflare | Included with proxy |

**Key behaviour:** Cloudflare Workers automatically redirects `.html` URLs to their extension-free equivalents (e.g. `/categories/home-fitness.html` → `/categories/home-fitness`). All pages return 200 at both forms.

---

## GitHub Repository

| Field | Value |
|---|---|
| Repository | `Rodneyst/smartconsumerhq` |
| Default branch | `main` |
| Remote URL | `git@github.com:Rodneyst/smartconsumerhq.git` |
| Auth method | SSH (configured June 8, 2026) |
| CI/CD | Cloudflare Workers & Pages GitHub App (auto-deploy on push to `main`) |
| GitHub Actions | None |
| GitHub Pages | Not enabled |

**Special branches (do not modify):**
- `cloudflare/workers-autoconfig` — created by Cloudflare bot, contains `wrangler.jsonc`
- `cloudflare/workers-autoconfig-2` — active Cloudflare integration branch

---

## Cloudflare Deployment Workflow

Every push to `main` → Cloudflare GitHub App webhook → Workers build → live in ~60–90 seconds.

No build step. Files are deployed as-is. No staging environment. `main` is production.

See `docs/02_development/DEPLOYMENT.md` for full details and rollback instructions.

---

## Current Site Structure

```
smartconsumerhq/
├── index.html                          # Homepage
├── styles.css                          # Global stylesheet
├── script.js                           # Shared vanilla JS
├── components.js                       # Header/footer injection for inner pages
├── sitemap.xml                         # XML sitemap (14 URLs)
├── robots.txt                          # Crawler directives
│
├── categories/
│   ├── home-fitness.html
│   ├── home-office.html
│   ├── tech-gadgets.html
│   ├── family-parenting.html
│   ├── money-saving.html
│   └── home-products.html
│
├── guides/
│   ├── best-home-gym-equipment.html
│   ├── best-budget-standing-desks.html
│   ├── best-smartwatches-under-300.html
│   └── best-family-suvs-for-value.html
│
├── legal/
│   ├── affiliate-disclosure.html
│   ├── privacy-policy.html
│   └── terms-of-use.html
│
├── content/                            # Content workspace (not served as pages)
│   ├── templates/buying-guide-template.md
│   ├── article_ideas/master-article-backlog.csv
│   └── articles/                       # Article drafts (markdown)
│
├── tools/
│   └── content-workflow.md
│
├── docs/
│   ├── 01_product/   (PROJECT_STATUS.md, ROADMAP.md, TODO.md)
│   ├── 02_development/   (DEPLOYMENT.md, AI_HANDOFF.md, CONTENT_SYSTEM.md)
│   ├── 05_research/   (SEO_SETUP.md)
│   └── 99_session_logs/
│
├── README.md
└── CLAUDE.md
```

---

## Existing Categories (6)

| Category | URL | Status |
|---|---|---|
| Home Fitness | `/categories/home-fitness` | Live — 1 guide linked |
| Tech & Gadgets | `/categories/tech-gadgets` | Live — 1 guide linked |
| Home Office | `/categories/home-office` | Live — 1 guide linked |
| Family & Parenting | `/categories/family-parenting` | Live — 1 guide linked |
| Money Saving | `/categories/money-saving` | Live — 0 guides (coming soon cards) |
| Home Products | `/categories/home-products` | Live — 0 guides (coming soon cards) |

---

## Existing Guides (4)

| Guide | Category | URL | Status |
|---|---|---|---|
| Best Home Gym Equipment for Beginners | Home Fitness | `/guides/best-home-gym-equipment` | **Live — full content published 2026-06-09** |
| Best Budget Standing Desks Under $400 | Home Office | `/guides/best-budget-standing-desks` | Live — placeholder content only |
| Best Smart Watches Under $300 | Tech & Gadgets | `/guides/best-smartwatches-under-300` | Live — placeholder content only |
| Best Family SUVs for Value | Family & Parenting | `/guides/best-family-suvs-for-value` | Live — placeholder content only |

All 4 guides contain intro copy and "coming soon" placeholders. Full article content has not yet been written.

---

## Existing Legal Pages (3)

| Page | URL | Status |
|---|---|---|
| Affiliate Disclosure | `/legal/affiliate-disclosure` | Live |
| Privacy Policy | `/legal/privacy-policy` | Live |
| Terms of Use | `/legal/terms-of-use` | Live |

---

## Content System

**Status:** Foundation built — content system is operational but no articles drafted yet.

| Asset | Location | Status |
|---|---|---|
| Buying guide template | `content/templates/buying-guide-template.md` | Complete |
| Article backlog (100 ideas) | `content/article_ideas/master-article-backlog.csv` | Complete |
| Article drafts folder | `content/articles/` | Empty — ready for use |
| Content system documentation | `docs/02_development/CONTENT_SYSTEM.md` | Complete |
| Content workflow | `tools/content-workflow.md` | Complete |

---

## Current SEO Status

| Item | Status |
|---|---|
| sitemap.xml | Live — `https://smartconsumerhq.com/sitemap.xml` — 14 URLs |
| robots.txt | Live — `https://smartconsumerhq.com/robots.txt` |
| Google Search Console | Not yet configured |
| GA4 | Not yet installed |
| Schema.org JSON-LD | Present on all pages |
| Canonical URLs | Present on all pages, correctly set |
| Meta tags (OG, Twitter Card) | Present on all pages |
| Page speed | Not yet measured |

---

## Analytics

No analytics platform installed. No data is being collected.

---

## Monetization

| Item | Status |
|---|---|
| Affiliate links | None — all guides contain placeholder content only |
| Amazon Associates | Not yet applied |
| Newsletter | Form exists but not connected to a real email provider |
| Revenue | $0 |

---

## Revenue Model and Affiliate Strategy

The site is built as an affiliate content business:

1. **Primary revenue:** Amazon Associates commissions on product recommendations within buying guides
2. **Secondary revenue:** Other affiliate networks (ShareASale, Impact, direct brand programs) for non-Amazon products
3. **Supporting revenue:** Email newsletter (owned audience for repeat traffic and future products)

**Content strategy:** Long-form buying guides (1,800–2,500 words) targeting high commercial-intent keywords. These rank well organically and convert well to affiliate clicks.

**Funnel:** Organic search → category or guide page → affiliate product link → commission on purchase.

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| 3 guide pages still contain placeholder content only | High | Pending — home-gym guide now complete |
| Google Search Console not configured | High | Pending |
| GA4 not installed | Medium | Pending |
| Newsletter form not connected to real provider | Medium | Pending |
| No affiliate links on any page | High | Pending — requires Amazon Associates approval |
| Money Saving and Home Products have no real guides | Medium | Pending |
| No images on any page | Medium | Pending |

---

## Completed Work Log

| Date | Commit | Description |
|---|---|---|
| 2026-06-08 | `058fe17` | Fix category page routing — moved 4 HTML files into `categories/` |
| 2026-06-08 | `e7e66e7` | Add missing category, guide, and legal pages |
| 2026-06-08 | `4a4893a` | Add project documentation suite |
| 2026-06-08 | `c6a87d2` | Add sitemap.xml and robots.txt |
| 2026-06-09 | `a9a47d1` | Add session summary for June 8 2026 |
| 2026-06-09 | `51989d9` | Establish docs/ documentation and continuity framework |
| 2026-06-09 | `a93096b` | Add local Mac backup step to session log procedure |
| 2026-06-09 | *(Entry 2)* | Build content engine foundation (templates, backlog, workflow, system docs) |
| 2026-06-09 | *(Entry 3)* | Write full buying guide: guides/best-home-gym-equipment.html (5 products, ~2,400 words) |

---

## Next Recommended Actions

**Immediate (this session or next):**
1. Write next full guide: `guides/best-budget-standing-desks.html`
2. Set up Google Search Console — verify domain, submit sitemap

**Short term:**
3. Write remaining 2 placeholder guides (smartwatches, family SUVs)
4. Write 2 Money Saving guides and 2 Home Products guides
5. Install GA4 — add measurement script to `script.js`
6. Apply for Amazon Associates

See `ROADMAP.md` for the full phased plan.

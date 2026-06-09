# Project Status — Smart Consumer HQ

**Last updated:** June 8, 2026

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

See `DEPLOYMENT.md` for full details and rollback instructions.

---

## Current Site Structure

```
smartconsumerhq/
├── index.html                          # Homepage
├── styles.css                          # Global stylesheet
├── script.js                           # Shared vanilla JS
├── components.js                       # Header/footer injection for inner pages
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
├── PROJECT_STATUS.md
├── ROADMAP.md
├── TODO.md
├── SEO_SETUP.md
├── DEPLOYMENT.md
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
| Best Home Gym Equipment for Beginners | Home Fitness | `/guides/best-home-gym-equipment` | Live — placeholder content |
| Best Budget Standing Desks Under $400 | Home Office | `/guides/best-budget-standing-desks` | Live — placeholder content |
| Best Smart Watches Under $300 | Tech & Gadgets | `/guides/best-smartwatches-under-300` | Live — placeholder content |
| Best Family SUVs for Value | Family & Parenting | `/guides/best-family-suvs-for-value` | Live — placeholder content |

All 4 guides currently contain intro copy and "coming soon" placeholders. Full article content needs to be written.

---

## Existing Legal Pages (3)

| Page | URL | Status |
|---|---|---|
| Affiliate Disclosure | `/legal/affiliate-disclosure` | Live |
| Privacy Policy | `/legal/privacy-policy` | Live |
| Terms of Use | `/legal/terms-of-use` | Live |

---

## Current Status

### SEO
- **Google Search Console:** Not yet set up
- **Sitemap:** Not yet created (`/sitemap.xml` returns 404)
- **Robots.txt:** Not yet created (`/robots.txt` returns 404)
- **Structured data:** Schema.org JSON-LD present on all pages (Organization, CollectionPage, Article types)
- **Canonical URLs:** Present on all pages, correctly set
- **Meta tags:** Title, description, OG, Twitter Card on all pages
- **Google Analytics / GA4:** Not yet installed
- **Page speed:** Not yet measured — no images, minimal JS, should score well

### Analytics
- No analytics platform installed. No data is being collected.

### Monetization
- **Affiliate links:** No live affiliate links on the site yet. Guide pages contain placeholder content only.
- **Amazon Associates:** Not yet applied or configured
- **Newsletter:** Form exists on homepage and in sidebars, but submission is simulated (no real email provider connected)
- **Revenue:** $0 current

---

## Revenue Model and Affiliate Strategy

The site is built as an affiliate content business:

1. **Primary revenue:** Amazon Associates commissions on product recommendations within buying guides
2. **Secondary revenue:** Other affiliate networks (ShareASale, Impact, direct brand programs) for non-Amazon products
3. **Supporting revenue:** Email newsletter (owned audience for repeat traffic and future products)

**Content strategy:** Long-form buying guides (1,500–3,000 words) targeting high commercial-intent keywords (e.g. "best standing desk under $400"). These rank well organically and convert well to affiliate clicks.

**Funnel:** Organic search → category page or guide → affiliate product link → commission on purchase.

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| Guide pages contain placeholder content only | High | Pending — content needs to be written |
| No sitemap.xml | High | Pending |
| No robots.txt | Medium | Pending |
| Google Search Console not configured | High | Pending |
| GA4 not installed | Medium | Pending |
| Newsletter form not connected to real provider | Medium | Pending |
| No affiliate links on any page | High | Pending |
| Money Saving and Home Products have no real guides | Medium | Pending |
| No images on any page | Medium | Pending |

---

## Completed Work Log — June 8, 2026

| Commit | Description |
|---|---|
| `41a3852` | Initial commit |
| `217ef3e` | Update index.html |
| `d706d08` | Add files via upload |
| `2820485` | Add files via upload |
| `da3dfce` | Add files via upload (final homepage + category pages) |
| `058fe17` | Fix category page routing — moved 4 HTML files into `categories/` subdirectory |
| `e7e66e7` | Add missing category, guide, and legal pages; add CLAUDE.md and DEPLOYMENT.md |

**Issues resolved today:**
- All category pages were at repo root instead of `categories/` — caused 404s on all nav links
- `money-saving.html` and `home-products.html` did not exist
- `guides/` directory did not exist — 4 guide pages linked from homepage were 404
- `legal/` directory did not exist — footer links on every page were 404
- SSH authentication configured for git push
- Remote URL updated from HTTPS to SSH

---

## Next Recommended Actions

**Immediate (this week):**
1. Create `sitemap.xml` and `robots.txt`
2. Set up Google Search Console and submit sitemap
3. Install GA4
4. Connect newsletter form to a real provider (Mailchimp, ConvertKit, etc.)
5. Apply for Amazon Associates

**Short term (next 2–4 weeks):**
6. Write full content for the 4 existing guide pages
7. Add real affiliate product links to guides
8. Write 6 more guides (one per category at minimum)
9. Add product images to guide pages

**Medium term:**
10. Build to 25 guides across all 6 categories
11. Implement internal linking strategy
12. Begin backlink outreach

See `ROADMAP.md` for the full phased plan.

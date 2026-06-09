# AI Handoff — Smart Consumer HQ

This document is the primary entry point for any AI agent beginning work on this project. Read this first, then read the files listed in "Required Reading."

**Last updated:** 2026-06-09

---

## Project Summary

Smart Consumer HQ (`smartconsumerhq.com`) is a static affiliate/review website publishing independent buying guides across 6 consumer categories. It generates revenue through affiliate commissions (primarily Amazon Associates). The site is fully live and deployed.

**Owner:** Rodney Stogner  
**Live URL:** https://smartconsumerhq.com  
**GitHub:** https://github.com/Rodneyst/smartconsumerhq  
**Contact:** hello@smartconsumerhq.com

---

## Architecture Overview

### Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript — no framework, no build system |
| Hosting | Cloudflare Workers (static assets mode) |
| CDN/DNS/TLS | Cloudflare |
| Deployment | Cloudflare Workers & Pages GitHub App (auto-deploy on push to `main`) |
| Version control | Git / GitHub |

### Key Files

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, category grid, guides, newsletter, FAQ |
| `styles.css` | Single global stylesheet for all pages |
| `script.js` | Shared vanilla JS (header, menu, scroll, forms, FAQ accordion) |
| `components.js` | Header/footer injection for all inner pages |
| `categories/*.html` | 6 category landing pages |
| `guides/*.html` | Buying guide pages (currently 4, all placeholder content) |
| `legal/*.html` | Affiliate disclosure, privacy policy, terms of use |
| `sitemap.xml` | XML sitemap (14 URLs) |
| `robots.txt` | Crawler directives |
| `CLAUDE.md` | Project rules for AI agents — read this before writing any code |

### Page Architecture

All inner pages (categories, guides, legal) use `components.js` to inject a shared header and footer. They never contain header/footer HTML inline. Script paths are relative: `../styles.css`, `../components.js`, `../script.js`.

Never create per-page stylesheets. Never add npm packages, build tools, or frameworks.

---

## Deployment Process

Every push to `main` automatically deploys to production via Cloudflare Workers & Pages GitHub App.

```bash
git add <specific-files>          # Never use git add -A or git add .
git commit -m "Description"
git push origin main              # CONFIRM with user before pushing — this is production
```

Deploy time: ~60–90 seconds. Verify with a green checkmark on the GitHub commit.

**Do not modify** the `cloudflare/workers-autoconfig` or `cloudflare/workers-autoconfig-2` branches — they are managed by the Cloudflare bot.

Full details: `docs/02_development/DEPLOYMENT.md`

---

## Git Workflow

- `main` branch = production
- No staging environment
- SSH authentication configured (`git@github.com:Rodneyst/smartconsumerhq.git`)
- Stage specific files only — never `git add -A`
- Commit messages should be descriptive and human-readable

---

## SEO Status (as of 2026-06-09)

| Item | Status |
|---|---|
| sitemap.xml | Live at `https://smartconsumerhq.com/sitemap.xml` — 14 URLs |
| robots.txt | Live at `https://smartconsumerhq.com/robots.txt` |
| Google Search Console | Not yet configured |
| GA4 | Not yet installed |
| Schema.org JSON-LD | Present on all pages |
| Canonical URLs | Present on all pages |
| OG / Twitter Card tags | Present on all pages |

---

## Current Roadmap Status

The project is at the end of Phase 1 (Foundation) with one item remaining: Google Search Console setup. Phase 2 (Content) is the immediate priority — writing full guide copy for the 4 placeholder guide pages.

See `docs/01_product/ROADMAP.md` for the full 5-phase plan.

---

## Current TODO Status

**High priority remaining:**
1. Set up Google Search Console and submit sitemap
2. Install Google Analytics (GA4)
3. Apply for Amazon Associates
4. Connect newsletter form to Mailchimp or ConvertKit
5. Write full content for 4 guide pages (currently all placeholders)
6. Add real affiliate links to guides (requires Amazon Associates approval)

See `docs/01_product/TODO.md` for the complete task list.

---

## Open Issues

| Issue | Severity |
|---|---|
| All 4 guide pages contain placeholder content — not SEO-ready | High |
| Google Search Console not configured — site is not being monitored for indexing | High |
| No affiliate links on any page — zero revenue potential until resolved | High |
| GA4 not installed — no traffic data being collected | Medium |
| Newsletter form not connected to real provider | Medium |
| No images on any page | Medium |
| Money Saving and Home Products categories have no real guides | Medium |

---

## Recommended Next Milestone

**Phase 1 completion:** Set up Google Search Console and submit the sitemap. This is a 15-minute task that does not require code changes.

**Phase 2 start:** Write full content for the first guide page (`guides/best-home-gym-equipment.html`). Replace all placeholder content with a real 1,800+ word buying guide. Add affiliate disclosure notice above the fold. Prepare for affiliate links once Amazon Associates is approved.

---

## Required Files to Read Before Working

In this order:

1. `docs/99_session_logs/` — read the most recent session log
2. `docs/02_development/AI_HANDOFF.md` — this file
3. `docs/01_product/PROJECT_STATUS.md` — current project state
4. `docs/01_product/ROADMAP.md` — phased development plan
5. `docs/01_product/TODO.md` — task list
6. `CLAUDE.md` (repo root) — project rules and code conventions

---

## Important Rules (Summary)

- Never push to `main` without explicit user confirmation
- Never use `git add -A` or `git add .`
- Never add npm packages, frameworks, or build tools
- Never duplicate header/footer HTML — always use `components.js`
- Never modify the Cloudflare bot branches
- Always include full SEO metadata on every new page
- Always follow the category page template in `CLAUDE.md`
- Always update session logs, PROJECT_STATUS.md, and TODO.md at session end

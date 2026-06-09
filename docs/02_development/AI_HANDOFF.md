# AI Handoff — Smart Consumer HQ

This document is the primary entry point for any AI agent beginning work on this project. Read this first, then read the files listed in "Required Reading."

**Last updated:** 2026-06-09 (Entry 7)

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
| `guides/*.html` | Buying guide pages (4 live, all placeholder content) |
| `legal/*.html` | Affiliate disclosure, privacy policy, terms of use |
| `sitemap.xml` | XML sitemap (14 URLs) — live at `/sitemap.xml` |
| `robots.txt` | Crawler directives — live at `/robots.txt` |
| `CLAUDE.md` | Project rules for AI agents — read before writing any code |

### Content System Files

| File | Purpose |
|---|---|
| `content/templates/buying-guide-template.md` | Master template for all buying guides |
| `content/article_ideas/master-article-backlog.csv` | 100 article ideas with priority metadata |
| `content/articles/` | Article drafts in markdown (empty — ready for use) |
| `docs/02_development/CONTENT_SYSTEM.md` | Content architecture, SEO standards, affiliate rules |
| `tools/content-workflow.md` | End-to-end workflow from idea to live page |

### Analytics & Research Files

| File | Purpose |
|---|---|
| `docs/05_research/GA4_SETUP.md` | GA4 setup history — `G-KNC6546GMH` active since 2026-06-09 |
| `docs/05_research/SEARCH_CONSOLE_SETUP.md` | GSC setup history — verified via Cloudflare DNS 2026-06-09 |
| `docs/05_research/AFFILIATE_LINK_MAP.md` | Map of all 11 affiliate link placeholders — use when Amazon Associates approved |
| `docs/05_research/SEO_SETUP.md` | Keyword research and SEO strategy |
| `docs/01_product/CONTENT_ROADMAP.md` | Top 20 buying guides — priority, search intent, monetization score, traffic estimates |
| `docs/01_product/MONETIZATION_PLAN.md` | Affiliate program plan — Amazon, Walmart, Impact, CJ, display ads; milestones |

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

## Content Workflow Summary

The full workflow is documented in `tools/content-workflow.md`. The short version:

1. Pick article from `content/article_ideas/master-article-backlog.csv` (Priority: High first)
2. Research keyword and products
3. Draft article as markdown in `content/articles/{slug}.md` using the buying guide template
4. Run pre-publish checklist
5. Convert to HTML → `guides/{slug}.html`
6. Update `sitemap.xml` and the relevant `categories/{slug}.html`
7. Commit specific files, push, verify live
8. Update PROJECT_STATUS.md, TODO.md, session log

**Priority order for next articles:**
1. Fill the 4 existing placeholder guides (they're indexed but empty)
2. Write first Money Saving guide (category has zero content)
3. Write first Home Products guide (category has zero content)

---

## Git Workflow

- `main` branch = production
- No staging environment
- SSH authentication configured (`git@github.com:Rodneyst/smartconsumerhq.git`)
- Stage specific files only — never `git add -A`
- Commit messages should be descriptive and human-readable

---

## SEO & Analytics Status (as of 2026-06-09)

| Item | Status |
|---|---|
| sitemap.xml | Live — `https://smartconsumerhq.com/sitemap.xml` — 14 URLs |
| robots.txt | Live — `https://smartconsumerhq.com/robots.txt` |
| Google Search Console | **VERIFIED** — Cloudflare DNS TXT record 2026-06-09; sitemap submitted |
| GA4 | **ACTIVE** — `G-KNC6546GMH` firing `page_view` on all 14 pages since 2026-06-09 |
| Schema.org JSON-LD | Present on all pages |
| Canonical URLs | Present on all pages |
| OG / Twitter Card tags | Present on all pages |
| Affiliate link map | `docs/05_research/AFFILIATE_LINK_MAP.md` — 11 placeholders mapped in `best-home-gym-equipment.html` |

---

## Current Roadmap Status

- **Phase 1 (Foundation):** **100% complete.** sitemap.xml, robots.txt, Cloudflare deployment, GSC verified, sitemap submitted, GA4 active.
- **Phase 2 (Content):** 1 of 4 placeholder guides complete (best-home-gym-equipment). Next: best-budget-standing-desks. Full plan in `docs/01_product/CONTENT_ROADMAP.md`.
- **Phase 3 (SEO):** Foundation complete. GA4 collecting data. Organic rankings to develop as content grows.
- **Phases 4–5 (Monetization):** Not started. Plan in `docs/01_product/MONETIZATION_PLAN.md`. Amazon Associates requires 2+ more complete guides first.

See `docs/01_product/ROADMAP.md` for the full 5-phase plan.

---

## Current TODO Status

**Infrastructure — ALL COMPLETE:**
1. ~~GSC verification~~ ✓ — Cloudflare DNS, sitemap submitted
2. ~~GA4 activation~~ ✓ — `G-KNC6546GMH` live

**AI next tasks (priority order):**
3. ~~Write full content for `guides/best-home-gym-equipment.html`~~ — **Done 2026-06-09** ✓
4. **Write `guides/best-budget-standing-desks.html`** — next immediate task
5. Write `guides/best-smartwatches-under-300.html`
6. Write `guides/best-family-suvs-for-value.html`
7. Apply for Amazon Associates (after 3 complete guides) — checklist in `docs/05_research/AFFILIATE_LINK_MAP.md`
8. Write first Money Saving guide + first Home Products guide

See `docs/01_product/CONTENT_ROADMAP.md` for full 20-guide pipeline and priority scores.

See `docs/01_product/TODO.md` for the complete task list.

---

## Open Issues

| Issue | Severity | Notes |
|---|---|---|
| 3 guide pages still contain placeholder content | High | Next AI task |
| No affiliate links on any page — zero revenue potential | High | Blocked on Amazon Associates approval |
| Newsletter form not connected to real provider | Medium | Pending — Mailchimp or ConvertKit |
| Money Saving and Home Products have zero real guides | Medium | Guides 5–7 in content roadmap |
| No images on any page | Medium | Pending |
| ~~Google Search Console not configured~~ | ~~High~~ | **RESOLVED** 2026-06-09 |
| ~~GA4 not installed~~ | ~~Medium~~ | **RESOLVED** 2026-06-09 |

---

## Recommended Next Milestone

**Infrastructure complete.** All Phase 1 setup tasks are done.

**AI next task:** Write `guides/best-budget-standing-desks.html` full content (Priority #1 in CONTENT_ROADMAP.md). Use `content/templates/buying-guide-template.md`. Follow `tools/content-workflow.md`. Target: 5 products, comparison table, buying guide section, FAQ, internal links to home-office category.

**User action after 3 complete guides:** Apply for Amazon Associates — checklist at `docs/05_research/AFFILIATE_LINK_MAP.md`.

---

## Required Files to Read Before Working

In this order:

1. `docs/99_session_logs/` — read the most recent session log
2. `docs/02_development/AI_HANDOFF.md` — this file
3. `docs/01_product/PROJECT_STATUS.md` — current project state
4. `docs/01_product/ROADMAP.md` — phased development plan
5. `docs/01_product/TODO.md` — task list
6. `CLAUDE.md` (repo root) — project rules and code conventions
7. `docs/02_development/CONTENT_SYSTEM.md` — if writing content
8. `tools/content-workflow.md` — if writing content

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
- Always copy session log to `~/Documents/SmartConsumerHQ/session-logs/`
- Do not add affiliate links until Amazon Associates is approved

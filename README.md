# Smart Consumer HQ

Independent buying guides and product reviews for everyday consumers.

**Live site:** https://smartconsumerhq.com  
**GitHub:** https://github.com/Rodneyst/smartconsumerhq

---

## Project Overview

Smart Consumer HQ publishes long-form buying guides across 6 consumer categories, monetised through affiliate commissions. The site is built with raw HTML, CSS, and JavaScript — no framework, no build system — and deployed directly to Cloudflare Workers.

---

## Repository Structure

```
smartconsumerhq/
├── index.html              # Homepage
├── styles.css              # Global stylesheet (all pages)
├── script.js               # Shared vanilla JS
├── components.js           # Header/footer injection for inner pages
├── sitemap.xml             # XML sitemap
├── robots.txt              # Crawler directives
├── CLAUDE.md               # Rules and conventions for AI agents
│
├── categories/             # 6 category landing pages
├── guides/                 # Buying guide articles
├── legal/                  # Affiliate disclosure, privacy policy, terms
│
└── docs/                   # All project documentation
    ├── 00_founder/         # Vision, goals, success metrics
    ├── 01_product/         # Status, roadmap, task list
    ├── 02_development/     # Deployment guide, AI handoff
    ├── 03_story/           # Brand narrative, editorial standards
    ├── 04_design/          # Style references
    ├── 05_research/        # SEO setup, keyword research
    └── 99_session_logs/    # Chronological session logs
```

---

## Documentation Structure

| Document | Location | Purpose |
|---|---|---|
| Project Status | `docs/01_product/PROJECT_STATUS.md` | Current state of the site |
| Roadmap | `docs/01_product/ROADMAP.md` | 5-phase development plan |
| Task List | `docs/01_product/TODO.md` | Prioritised todo list |
| Deployment Guide | `docs/02_development/DEPLOYMENT.md` | How to deploy and troubleshoot |
| AI Handoff | `docs/02_development/AI_HANDOFF.md` | Entry point for AI agents |
| SEO Setup | `docs/05_research/SEO_SETUP.md` | GSC, GA4, sitemap, keyword strategy |
| Session Logs | `docs/99_session_logs/` | Chronological work history |
| AI Agent Rules | `CLAUDE.md` (root) | Code conventions and project rules |

---

## Session Logging

Every work session generates a log entry in `docs/99_session_logs/YYYY-MM-DD-session-log.md`. These logs record all changes, decisions, commits, and recommended next steps, enabling seamless continuity between sessions.

See `docs/99_session_logs/README.md` for the full session log format and rules.

---

## Development Workflow

```bash
# Edit files locally
# Stage specific files (never git add -A)
git add <specific-files>

# Commit with a descriptive message
git commit -m "Description of change"

# Push — this triggers a production deployment
# CONFIRM with user before pushing
git push origin main
```

No build step required. Files are served as-is.

---

## Deployment Workflow

1. Push to `main`
2. Cloudflare Workers & Pages GitHub App detects the push
3. Files deploy to Cloudflare edge network (~60–90 seconds)
4. Verify at https://smartconsumerhq.com

**`main` = production. There is no staging environment.**

Full details: `docs/02_development/DEPLOYMENT.md`

---

## SEO

- **Sitemap:** https://smartconsumerhq.com/sitemap.xml (14 URLs)
- **Robots:** https://smartconsumerhq.com/robots.txt
- **Google Search Console:** Not yet configured
- **GA4:** Not yet installed
- All pages include canonical URLs, OG tags, Twitter Card tags, Schema.org JSON-LD

Full SEO setup guide: `docs/05_research/SEO_SETUP.md`

---

## Current Roadmap Status

| Phase | Status |
|---|---|
| Phase 1: Foundation | Nearly complete — GSC setup remaining |
| Phase 2: Content | Not started — 4 guide pages are placeholder content |
| Phase 3: SEO | Not started |
| Phase 4: Monetisation | Not started |
| Phase 5: Automation | Not started |

Full roadmap: `docs/01_product/ROADMAP.md`

---

## Required Startup Procedure for AI Agents

Before beginning any work on this project, an AI agent must:

1. Read the most recent file in `docs/99_session_logs/`
2. Read `docs/02_development/AI_HANDOFF.md`
3. Read `docs/01_product/PROJECT_STATUS.md`
4. Read `docs/01_product/ROADMAP.md`
5. Read `docs/01_product/TODO.md`
6. Read `CLAUDE.md` (repo root)
7. Summarize current project state and confirm understanding before making any changes

See `docs/99_session_logs/README.md` for the complete startup and shutdown procedure.

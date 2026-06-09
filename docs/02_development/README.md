# Development — Smart Consumer HQ

This directory contains technical documentation: deployment guide, infrastructure notes, and the AI handoff file.

---

## Contents

| File | Description |
|---|---|
| [AI_HANDOFF.md](AI_HANDOFF.md) | Primary entry point for AI agents — architecture, deployment, current status, required reading |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Full deployment reference — architecture diagram, git workflow, SSH setup, rollback, troubleshooting |
| *(pending)* TECHNICAL_ARCHITECTURE.md | Detailed technical notes on page structure, component system, CSS conventions |

---

## Quick Reference

- **Hosting:** Cloudflare Workers (static assets)
- **Deploy trigger:** `git push origin main`
- **Deploy time:** ~60–90 seconds
- **SSH remote:** `git@github.com:Rodneyst/smartconsumerhq.git`
- **No build step. No staging. `main` = production.**

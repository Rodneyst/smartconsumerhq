# Deployment Documentation — Smart Consumer HQ

## Hosting Platform

**Cloudflare Workers (Static Asset Mode)**

The site is served by Cloudflare Workers using the Assets feature, which serves the repository root as a static site directly on Cloudflare's global edge network. This is configured in `wrangler.jsonc`.

## DNS

- **Nameservers:** `deb.ns.cloudflare.com` / `carlos.ns.cloudflare.com`
- **Domain:** `smartconsumerhq.com` is fully managed by Cloudflare DNS
- **Proxy:** The domain resolves to Cloudflare proxy IPs (`104.21.14.189`, `172.67.160.41`) — origin is never exposed directly
- **CDN/Cache:** Cloudflare handles caching, TLS termination, and DDoS protection at the edge

## GitHub Integration

The Cloudflare Workers & Pages **GitHub App** is installed on the `Rodneyst/smartconsumerhq` repository. Evidence:

- `cloudflare-workers-and-pages[bot]` auto-created the `cloudflare/workers-autoconfig-2` branch containing `wrangler.jsonc`
- GitHub Checks API confirms a `Workers Builds` check run on every push to `main`
- No GitHub Actions workflows exist — Cloudflare's app handles all deployment triggers natively

## Does Pushing to `main` Auto-Deploy?

**Yes.** Every push to the `main` branch automatically triggers a Cloudflare Workers build and deployment. The GitHub Checks status on the latest commit (`da3dfce`) confirmed:

```
Workers Builds: smartconsumerhq | status: completed | conclusion: success
```

There is no manual deployment step required.

## Deployment Architecture

```
Developer (local)
       │
       │  git push origin main
       ▼
┌─────────────────────────────┐
│   GitHub                    │
│   repo: Rodneyst/           │
│         smartconsumerhq     │
│                             │
│   branch: main  ◄── source  │
└──────────┬──────────────────┘
           │  GitHub App webhook (push event)
           ▼
┌─────────────────────────────┐
│   Cloudflare Workers &      │
│   Pages Build System        │
│                             │
│   wrangler.jsonc:           │
│     name: smartconsumerhq   │
│     assets.directory: "."   │
└──────────┬──────────────────┘
           │  Deploys all files to edge
           ▼
┌─────────────────────────────┐
│   Cloudflare Edge Network   │
│   (global CDN)              │
│                             │
│   smartconsumerhq.com       │
│   DNS: Cloudflare proxy     │
└─────────────────────────────┘
```

## Exact Deployment Workflow

1. Edit files locally (HTML, CSS, JS)
2. Commit changes: `git commit -m "description"`
3. Push to main: `git push origin main`
4. Cloudflare's GitHub App detects the push automatically
5. Cloudflare builds and deploys all files from the repo root to the edge
6. Changes are live at `https://smartconsumerhq.com` within ~1–2 minutes
7. GitHub shows a green checkmark (`Workers Builds: success`) when complete

## Wrangler Configuration (`wrangler.jsonc`)

Located in the `cloudflare/workers-autoconfig-2` branch (not merged to `main`):

```jsonc
{
  "name": "smartconsumerhq",
  "compatibility_date": "2026-06-08",
  "assets": {
    "directory": "."
  },
  "observability": {
    "enabled": true
  },
  "compatibility_flags": ["nodejs_compat"]
}
```

The `assets.directory: "."` setting means every file in the repository root is served as a static asset.

## Important Notes

- **No build step** — files are deployed as-is; no compilation, bundling, or preprocessing
- **No staging environment** — `main` is directly production
- **No rollback mechanism** documented — to revert, push a prior commit to `main`
- **GitHub Pages is NOT used** — the GitHub Pages API returns 404 for this repo
- **No CI test suite** — pushes deploy immediately without automated tests

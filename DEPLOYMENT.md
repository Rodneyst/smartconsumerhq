# Deployment Guide — Smart Consumer HQ

**Last updated:** June 8, 2026

---

## Overview

Smart Consumer HQ is a static HTML/CSS/JS site deployed to Cloudflare Workers via a GitHub App integration. Every push to `main` automatically deploys to production. There is no build step and no staging environment.

---

## Architecture

```
Developer (local)
       │
       │  git push origin main
       ▼
┌─────────────────────────────┐
│   GitHub                    │
│   Rodneyst/smartconsumerhq  │
│   branch: main              │
└──────────┬──────────────────┘
           │  GitHub App webhook (on push)
           ▼
┌─────────────────────────────┐
│   Cloudflare Workers &      │
│   Pages Build System        │
│                             │
│   wrangler.jsonc:           │
│     assets.directory: "."   │
└──────────┬──────────────────┘
           │  ~60–90 seconds
           ▼
┌─────────────────────────────┐
│   Cloudflare Edge Network   │
│   (global CDN)              │
│   smartconsumerhq.com       │
└─────────────────────────────┘
```

**Key facts:**
- No build step — files are served as-is
- `main` branch = production
- Deploy time: ~60–90 seconds after push
- Cloudflare Workers strips `.html` extensions and serves clean URLs (e.g. `/categories/home-fitness` instead of `/categories/home-fitness.html`)

---

## Git Workflow

### Normal change (single file or small update)
```bash
# 1. Edit the file
# 2. Stage the specific file(s)
git add categories/home-fitness.html

# 3. Commit with a clear message
git commit -m "Update home fitness guide with new product picks"

# 4. Push — this triggers deployment immediately
git push origin main
```

### Multiple related changes
```bash
git add categories/home-fitness.html guides/best-home-gym-equipment.html
git commit -m "Add dumbbell section to fitness guide and category page"
git push origin main
```

**Always stage specific files.** Never use `git add -A` or `git add .` — this can accidentally include sensitive files or unfinished work.

---

## Branch Strategy

This project currently uses a single-branch workflow:

| Branch | Purpose |
|---|---|
| `main` | Production — all changes go here |
| `cloudflare/workers-autoconfig` | Managed by Cloudflare bot — do not touch |
| `cloudflare/workers-autoconfig-2` | Managed by Cloudflare bot — do not touch |

**There is no staging branch.** If you need to preview changes before they go live, test locally by opening the HTML files directly in a browser (most features work without a server).

For larger changes (new page templates, CSS overhauls), consider creating a feature branch:
```bash
git checkout -b feature/new-guide-template
# make changes, commit
git checkout main
git merge feature/new-guide-template
git push origin main
git branch -d feature/new-guide-template
```

---

## SSH Authentication Setup

Git is configured to use SSH. The remote URL is:
```
git@github.com:Rodneyst/smartconsumerhq.git
```

### First-time SSH setup on a new machine

**Step 1 — Generate key**
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# Accept default path (~/.ssh/id_ed25519)
# Set a passphrase or leave blank
```

**Step 2 — Add to macOS Keychain (no passphrase prompts)**
```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

**Step 3 — Copy public key to clipboard**
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Step 4 — Add to GitHub**
- github.com → Settings → SSH and GPG keys → New SSH key
- Paste the key, save

**Step 5 — Set repo remote to SSH**
```bash
git remote set-url origin git@github.com:Rodneyst/smartconsumerhq.git
```

**Test:**
```bash
ssh -T git@github.com
# Should respond: Hi Rodneyst! You've successfully authenticated...
```

---

## Deploying Future Changes

### Standard deployment (most common)
```bash
# Edit files locally
git add <specific-files>
git commit -m "Describe what changed and why"
git push origin main
```

Deployment completes in ~60–90 seconds. To confirm it succeeded:
- Check the GitHub repo → the latest commit will show a green checkmark (Cloudflare Workers Builds)
- Or visit `https://smartconsumerhq.com` and verify the change is live

### Adding a new page
1. Create the HTML file in the correct directory (`categories/`, `guides/`, or `legal/`)
2. Follow the page template (see `CLAUDE.md`)
3. Add the URL to `sitemap.xml`
4. Verify all relative paths (`../styles.css`, `../components.js`, `../script.js`) are correct
5. Stage, commit, push

### Updating `sitemap.xml`
Update `sitemap.xml` whenever a new page is added or removed. Add the clean URL (no `.html` extension):
```xml
<url>
  <loc>https://smartconsumerhq.com/guides/your-new-guide</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## Verifying a Deployment

After pushing, verify the deployment completed:

```bash
# Check deploy status (Cloudflare shows a Workers Builds check on the commit)
# Via GitHub UI: repo → latest commit → green ✓ next to commit hash

# Verify specific URL returns 200 (follow redirects with -L)
curl -o /dev/null -s -w "%{http_code}" -L https://smartconsumerhq.com/categories/home-fitness.html
# Expected output: 200
```

Note: Cloudflare redirects `.html` URLs to their extension-free form (307 → 200). Both forms work. Use `-L` to follow the redirect and see the final status code.

---

## Rolling Back a Deployment

Since there is no staging and `main` is production, rollback means pushing an older commit to `main`.

### Identify the commit to roll back to
```bash
git log --oneline
# e.g.:
# e7e66e7 Add missing category pages and guides
# 058fe17 Fix category page routing
# da3dfce Add files via upload
```

### Option A — Revert (safe, creates a new commit)
```bash
# Revert the most recent commit
git revert HEAD
git push origin main

# Revert a specific commit
git revert e7e66e7
git push origin main
```
Revert is the safest option — it creates a new commit that undoes the change, preserving full history.

### Option B — Reset (destructive, rewrites history)
```bash
# Roll back to a specific commit — WARNING: this rewrites history
git reset --hard 058fe17
git push --force origin main
```
Use `--force` push only as a last resort. It can cause issues if others have pulled the branch.

---

## Wrangler Configuration

The `wrangler.jsonc` file that configures the Cloudflare Workers deployment lives in the `cloudflare/workers-autoconfig-2` branch (managed by Cloudflare bot, not merged to `main`):

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

`assets.directory: "."` means every file at the repo root is a deployable asset. Do not add a `wrangler.jsonc` to `main` — it will conflict with the Cloudflare bot's branch.

---

## Troubleshooting

### Push rejected: permission denied (publickey)
SSH key not configured or not loaded.
```bash
# Check if key is loaded
ssh-add -l

# Re-add if missing
ssh-add --apple-use-keychain ~/.ssh/id_ed25519

# Test GitHub auth
ssh -T git@github.com
```

### Changes not appearing after push
1. Check the GitHub commit for a green checkmark — if it's a yellow circle, the build is still in progress (wait another 30s)
2. If there's a red ✗, the Cloudflare build failed — check the Workers & Pages dashboard in Cloudflare
3. Hard refresh the browser (`Cmd+Shift+R` on Mac) to bypass Cloudflare cache

### Page returns 404 after adding a new file
- Confirm the file was actually committed and pushed (`git log --oneline` should show it)
- Confirm the URL path matches the file path exactly (case-sensitive on Cloudflare)
- Confirm the file has a `.html` extension
- Wait 60–90 seconds after push for deployment to complete

### 307 redirect instead of 200
This is expected and correct. Cloudflare Workers automatically redirects `.html` URLs to extension-free form. The destination (e.g. `/categories/home-fitness`) returns 200. Internal links using `.html` extensions work fine — the redirect is transparent to users.

### Accidentally committed sensitive file
```bash
# Remove from tracking without deleting locally
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Remove sensitive file from tracking"
git push origin main
```
If the file contained secrets, rotate those secrets immediately — the file is in git history even after removal.

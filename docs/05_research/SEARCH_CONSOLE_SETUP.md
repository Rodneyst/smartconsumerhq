# Google Search Console Setup Guide

**Last updated:** 2026-06-09  
**Status:** Meta tag placeholder installed in `index.html` — awaiting verification code from GSC

---

## Overview

Google Search Console (GSC) is the primary tool for monitoring how the site appears in Google Search — tracking impressions, clicks, average ranking position, crawl errors, and Core Web Vitals. It also lets you submit the sitemap directly to Google for faster indexing.

Verification is done via an HTML meta tag already placed in `index.html`. You only need to get the verification code from GSC, update one value in `index.html`, push, and click Verify.

---

## Step 1: Add Property in Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account (use `lv100roxas@gmail.com` or a dedicated Google account)
3. Click **Add property** (top left dropdown)
4. Select **URL prefix**
5. Enter: `https://smartconsumerhq.com/`
6. Click **Continue**

---

## Step 2: Get Your Verification Code

1. On the verification screen, scroll down to **"HTML tag"** option
2. Expand it — you'll see a meta tag like:
   ```html
   <meta name="google-site-verification" content="AbCdEfGhIjKlMnOpQrStUv" />
   ```
3. **Copy only the content value** — the string after `content="`  
   Example: `AbCdEfGhIjKlMnOpQrStUv`
4. Do NOT click "Verify" yet

---

## Step 3: Update index.html

1. Open `/Users/chilehadez/smartconsumerhq/index.html`
2. Find this line (it's in the `<head>` section, near the top):
   ```html
   <meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />
   ```
3. Replace `REPLACE_WITH_GSC_VERIFICATION_CODE` with your actual verification string
4. Save the file

---

## Step 4: Commit and Push

```bash
git add index.html
git commit -m "seo: add Google Search Console verification meta tag"
git push origin main
```

Wait approximately 60–90 seconds for Cloudflare to deploy.

---

## Step 5: Verify Ownership in GSC

1. Return to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Verify** on the HTML tag option
3. GSC will fetch `https://smartconsumerhq.com/` and look for the meta tag
4. You should see **"Ownership verified"** ✓

If verification fails:
- Confirm the deployment completed (check GitHub commit has a green checkmark)
- Confirm the meta tag appears in the live page source: visit `https://smartconsumerhq.com/`, right-click → View Page Source, search for `google-site-verification`
- Try again after 2 minutes

---

## Step 6: Submit the Sitemap

After verification:

1. In GSC left sidebar, click **Sitemaps**
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **Submit**
4. Status should change to "Success" within a few minutes

The sitemap URL being submitted: `https://smartconsumerhq.com/sitemap.xml`

This file currently contains 14 URLs covering all live pages.

---

## Step 7: Initial Configuration

After verification and sitemap submission:

1. **Check Index Coverage** — GSC → Indexing → Pages
   - "Indexed" count should grow over 1–2 weeks as Google crawls the submitted URLs
   - Watch for any "Not indexed" or "Crawled — not indexed" errors

2. **Check Core Web Vitals** — GSC → Experience → Core Web Vitals
   - Available once Google has enough real-user data (usually 28+ days)

3. **Set up email alerts** — GSC → Settings → Email preferences
   - Enable alerts for manual actions, coverage issues, and security problems

---

## What to Monitor Weekly

| Report | What to Look For |
|---|---|
| Performance → Search results | Impressions and clicks growing over time |
| Performance → Queries | Which search terms your pages appear for |
| Indexing → Pages | All 14+ URLs indexed; no unexpected errors |
| Experience → Core Web Vitals | All pages rated "Good" |
| Security & Manual Actions | Should always be "No issues detected" |

---

## Expected Timeline After Verification

| Timeframe | What Happens |
|---|---|
| Day 1–3 | Google begins re-crawling based on sitemap |
| Week 1–2 | Most pages indexed (visible in Index Coverage) |
| Week 3–4 | First impressions and clicks appear in Performance report |
| Month 2+ | Ranking data becomes meaningful; optimize based on query data |

---

## Notes for This Site

- **Cloudflare** strips `.html` extensions and redirects to clean URLs. GSC will show the clean URL versions (e.g. `/guides/best-home-gym-equipment`), which is correct.
- The **sitemap.xml** already uses extension-free URLs — no changes needed.
- All pages have **canonical URLs** set correctly — GSC will respect these.
- **Schema.org JSON-LD** is present on all pages — enables Rich Results in search.

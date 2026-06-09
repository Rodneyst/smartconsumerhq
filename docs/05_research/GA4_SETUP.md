# Google Analytics 4 (GA4) Setup Guide

**Last updated:** 2026-06-09  
**Status:** Code placeholder installed in `script.js` — awaiting Measurement ID

---

## Overview

GA4 tracking is implemented via IIFE #10 in `script.js`. It loads dynamically on every page (including the homepage and all inner pages). To activate tracking, you only need to replace the placeholder Measurement ID with your real one — no HTML file changes required.

---

## Step 1: Create a GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account (use `lv100roxas@gmail.com` or a dedicated analytics account)
3. Click **Admin** (gear icon, bottom left)
4. Under **Account**, click **Create Account** (or use an existing one)
   - Account name: `Smart Consumer HQ`
5. Under the new account, click **Create Property**
   - Property name: `Smart Consumer HQ`
   - Reporting time zone: Your local timezone
   - Currency: USD
6. Click **Next**, select your industry (Publishing / Media) and business size (Small)
7. Click **Create**

---

## Step 2: Set Up a Web Data Stream

1. After creating the property, click **Web** under "Choose a platform"
2. Enter:
   - Website URL: `https://smartconsumerhq.com`
   - Stream name: `Smart Consumer HQ Web`
3. Click **Create stream**
4. On the next screen, copy your **Measurement ID** — it looks like `G-XXXXXXXXXX`

---

## Step 3: Activate Tracking in the Codebase

1. Open `/Users/chilehadez/smartconsumerhq/script.js`
2. Find the GA4 section (IIFE #10, near the bottom of the file)
3. Replace the placeholder Measurement ID:

```javascript
// BEFORE:
var GA4_ID = 'G-XXXXXXXXXX';

// AFTER (example):
var GA4_ID = 'G-ABC123DEF4';
```

4. Save the file
5. Stage and commit:

```bash
git add script.js
git commit -m "analytics: activate GA4 tracking (measurement ID configured)"
git push origin main
```

6. Wait ~90 seconds for Cloudflare to deploy

---

## Step 4: Verify Tracking is Working

1. Open [analytics.google.com](https://analytics.google.com) → select your property
2. Go to **Reports** → **Realtime**
3. Open [smartconsumerhq.com](https://smartconsumerhq.com) in another browser tab
4. Confirm the Realtime report shows at least 1 active user
5. Navigate to a guide page to confirm inner pages are also tracked

If the Realtime report shows your visit within 30 seconds, tracking is working correctly.

---

## Step 5: Configure Goals (Recommended)

After basic tracking is confirmed, set up these key events in GA4:

### Affiliate Link Clicks
Once affiliate links are active (after Amazon Associates approval):

1. GA4 Admin → **Events** → **Create event**
2. Event name: `affiliate_click`
3. Condition: `event_name equals click` AND `link_classes contains btn-affiliate`
4. This tracks every time a visitor clicks "View on Amazon →"

### Newsletter Signups
1. GA4 Admin → **Events** → **Create event**
2. Event name: `newsletter_signup`
3. Condition: `event_name equals form_submit` AND `form_id equals newsletter-form`

---

## Current Implementation Notes

**File:** `script.js` — IIFE #10 (bottom of file)

**How it works:**
- Checks if `GA4_ID` has been replaced from the placeholder value
- If still placeholder, exits silently — no tracking, no errors
- Once a real ID is set, dynamically injects the gtag.js script into `<head>`
- Initializes `dataLayer` and calls `gtag('config', GA4_ID)` on every page load
- Works on ALL pages: homepage, categories, guides, legal pages

**Privacy / Compliance:**
- Once GA4 is active, a cookie consent banner may be required depending on your users' jurisdiction (EU visitors = GDPR)
- See TODO.md — "Cookie consent banner" is listed as Low Priority
- For a primarily US audience in the early stage, this is a low-urgency concern

---

## GA4 Dashboard Recommended Setup

After 2–4 weeks of data, configure these reports:

| Report | Purpose |
|---|---|
| Traffic Acquisition | Which search queries and sources send visitors |
| Landing Pages | Which guide and category pages attract the most traffic |
| Realtime | Monitor traffic after publishing a new guide |
| Events | Track affiliate clicks once links are active |
| User Retention | See if visitors return |

---

## Troubleshooting

| Issue | Fix |
|---|---|
| No data showing in Realtime | Check that the Measurement ID in script.js matches exactly what GA4 shows |
| Script not loading | Open browser DevTools → Network tab → filter for "googletagmanager" — confirm the script loads |
| Events not firing | Check DevTools → Console for errors; confirm GA4 property type is "Web" not "App" |
| AdBlockers blocking tracking | Expected — uBlock Origin and similar tools block gtag. This is normal. |

# SEO Setup Guide — Smart Consumer HQ

**Last updated:** June 8, 2026

---

## Google Search Console Setup

### Step 1 — Add Property
1. Go to https://search.google.com/search-console
2. Click **Add property** → choose **Domain** (not URL prefix) → enter `smartconsumerhq.com`
3. Copy the TXT verification record provided by GSC

### Step 2 — Verify via Cloudflare DNS
Since DNS is managed by Cloudflare:
1. Log into the Cloudflare dashboard
2. Select the `smartconsumerhq.com` zone
3. Go to **DNS** → **Add record**
4. Type: `TXT`, Name: `@`, Content: paste the GSC verification string
5. Click **Save**
6. Return to GSC and click **Verify** (propagation is near-instant with Cloudflare)

### Step 3 — Submit Sitemap
1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter `sitemap.xml` in the field and click **Submit**
3. Check back in 24–48 hours to confirm Google has crawled it

### Step 4 — Set Preferred Domain
GSC will default to the domain as verified. Confirm canonical URLs on pages match (they do — all canonicals use `https://smartconsumerhq.com/...`).

### Step 5 — Monitor Weekly
- **Coverage** — check for crawl errors, excluded pages, redirect chains
- **Performance** — impressions, clicks, CTR, average position by query
- **Core Web Vitals** — ensure pages pass LCP, CLS, FID thresholds

---

## Google Analytics (GA4) Setup

### Step 1 — Create GA4 Property
1. Go to https://analytics.google.com
2. Click **Admin** → **Create** → **Property**
3. Name: `Smart Consumer HQ`, timezone and currency as appropriate
4. Choose **Web** as the platform
5. Enter `https://smartconsumerhq.com` as the website URL
6. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2 — Add GA4 to the Site
Add the following snippet to `script.js` (at the top, before all other code), replacing `G-XXXXXXXXXX` with your measurement ID:

```javascript
// Google Analytics 4
(function initGA4() {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
})();
```

This single addition in `script.js` covers every page automatically (all pages load `script.js`).

### Step 3 — Configure Events
In GA4, set up the following custom events:
- **affiliate_click** — fire when a user clicks an affiliate link (add `data-affiliate="true"` to affiliate links and track via JS)
- **newsletter_signup** — fire on successful newsletter form submission (hook into the existing form handler in `script.js`)

### Step 4 — Verify Installation
1. Open the live site in a browser
2. In GA4, go to **Reports** → **Realtime**
3. Confirm your own session appears — if it does, GA4 is working

---

## Sitemap Creation

Create `/sitemap.xml` at the repo root. Update this file whenever new pages are added.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://smartconsumerhq.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Categories -->
  <url><loc>https://smartconsumerhq.com/categories/home-fitness</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://smartconsumerhq.com/categories/tech-gadgets</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://smartconsumerhq.com/categories/home-office</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://smartconsumerhq.com/categories/family-parenting</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://smartconsumerhq.com/categories/money-saving</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://smartconsumerhq.com/categories/home-products</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>

  <!-- Guides -->
  <url><loc>https://smartconsumerhq.com/guides/best-home-gym-equipment</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://smartconsumerhq.com/guides/best-budget-standing-desks</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://smartconsumerhq.com/guides/best-smartwatches-under-300</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://smartconsumerhq.com/guides/best-family-suvs-for-value</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>

  <!-- Legal -->
  <url><loc>https://smartconsumerhq.com/legal/affiliate-disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://smartconsumerhq.com/legal/privacy-policy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://smartconsumerhq.com/legal/terms-of-use</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>

</urlset>
```

**Note on URLs:** Cloudflare Workers strips `.html` from URLs. Use the extension-free form in the sitemap (as shown above).

---

## Robots.txt Recommendations

Create `/robots.txt` at the repo root:

```
User-agent: *
Allow: /

Sitemap: https://smartconsumerhq.com/sitemap.xml
```

No pages need to be blocked on this site. Keep it simple and permissive.

---

## Initial Keyword Strategy

### Approach
Target **commercial investigation** keywords: users who are actively researching a purchase. These convert to affiliate clicks at a much higher rate than informational queries.

**Best keyword formula:** `best [product] [qualifier]`
- "best standing desks under $400"
- "best smartwatches under $300"
- "best home gym equipment for beginners"

**Secondary formula:** `[product] for [use case]`
- "standing desk for small spaces"
- "smartwatch for runners"

### Keyword Research Process
1. Start with a seed term (e.g. "standing desk")
2. Use Google's autocomplete and "People also ask" to find variations
3. Check search volume and difficulty in Ahrefs, SEMrush, or free tools (Ubersuggest, Keywords Everywhere)
4. Prioritise: **high commercial intent + moderate search volume + low competition**
5. Assign one primary keyword per guide page

### Priority Keywords to Target First

| Guide | Primary keyword | Est. monthly searches |
|---|---|---|
| Best Budget Standing Desks | "best standing desk under 400" | 2,000–5,000 |
| Best Smart Watches Under $300 | "best smartwatch under 300" | 5,000–10,000 |
| Best Home Gym Equipment | "best home gym equipment for beginners" | 5,000–10,000 |
| Best Family SUVs for Value | "best family suv for the money" | 10,000–20,000 |

### On-Page Keyword Placement
For each guide, the primary keyword must appear in:
- `<title>` tag (near the start)
- `<h1>` (exact or close match)
- Meta description (naturally)
- First paragraph of body copy
- At least one `<h2>` subheading
- Alt text of the main image (when images are added)

---

## On-Page SEO Checklist

Run this checklist on every new guide before publishing:

### Technical
- [ ] `<title>` tag: under 60 characters, includes primary keyword
- [ ] Meta description: 140–160 characters, includes keyword, has a call to action
- [ ] Canonical URL: set correctly, matches the live URL (extension-free)
- [ ] Schema.org JSON-LD: present and valid (use Google's Rich Results Test)
- [ ] `robots` meta: `index, follow`
- [ ] OG and Twitter Card tags present

### Content
- [ ] H1 contains primary keyword
- [ ] At least 3 H2 subheadings
- [ ] Word count: 1,500 minimum for guides
- [ ] Intro answers the search intent in the first 100 words
- [ ] Affiliate disclosure above the fold
- [ ] At least 3 internal links to related guides or categories
- [ ] External links (affiliate or reference) open in new tab with `rel="nofollow sponsored"`

### User Experience
- [ ] Page loads without layout shift on mobile
- [ ] All images have descriptive `alt` text
- [ ] Affiliate links are clearly labelled (e.g. "View on Amazon")
- [ ] CTA is visible without scrolling on desktop

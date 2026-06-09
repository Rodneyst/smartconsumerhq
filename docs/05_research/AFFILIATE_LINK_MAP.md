# Affiliate Link Map — Smart Consumer HQ

**Purpose:** Master reference for every affiliate link placeholder on the site. When Amazon Associates is approved, replace each `href="#"` with the actual affiliate URL using this map.

**Last updated:** 2026-06-09

---

## How to Use This Map

1. Apply for Amazon Associates at `affiliate-program.amazon.com`
2. Once approved, search for each product in Amazon Associates SiteStripe
3. Generate an affiliate link for each product
4. Update the HTML file at the line number listed below
5. Replace `href="#"` with `href="YOUR_AFFILIATE_URL"`
6. Verify `rel="nofollow sponsored" target="_blank"` is still present on each link
7. Commit, push, verify live

**Affiliate link format:** `https://www.amazon.com/dp/ASIN/?tag=YOUR_ASSOCIATE_TAG`

---

## Affiliate Links by Page

### `guides/best-home-gym-equipment.html`

| # | Line | Product | Link Text | Location | Search Term / ASIN Hint |
|---|---|---|---|---|---|
| 1 | 243 | Bowflex SelectTech 552 Adjustable Dumbbells | "View on Amazon →" | Product card #1 (Best Overall) | Search: "Bowflex SelectTech 552 adjustable dumbbells" |
| 2 | 288 | Marcy Foldable Utility Bench | "View on Amazon →" | Product card #2 (Best Bench) | Search: "Marcy foldable utility weight bench" |
| 3 | 333 | WHATAFIT Resistance Bands Set 11-Piece | "View on Amazon →" | Product card #3 (Best Budget) | Search: "WHATAFIT resistance bands set" |
| 4 | 378 | Iron Gym Total Upper Body Workout Bar | "View on Amazon →" | Product card #4 (Best Bodyweight) | Search: "Iron Gym pull up bar doorway" |
| 5 | 423 | Sunny Health & Fitness SF-RW5623 Rowing Machine | "View on Amazon →" | Product card #5 (Best Cardio) | Search: "Sunny Health SF-RW5623 magnetic rowing" |
| 6 | 630 | Bowflex SelectTech 552 Adjustable Dumbbells | "Shop Bowflex SelectTech 552 →" | Verdict/recommendation box | Same URL as link #1 |
| 7 | 650 | Bowflex 552 Dumbbells | "🏆 Bowflex 552 Dumbbells" | Sidebar quick picks | Same URL as link #1 |
| 8 | 651 | Marcy Foldable Bench | "🪑 Marcy Foldable Bench" | Sidebar quick picks | Same URL as link #2 |
| 9 | 652 | WHATAFIT Bands Set | "💪 WHATAFIT Bands Set" | Sidebar quick picks | Same URL as link #3 |
| 10 | 653 | Iron Gym Pull-Up Bar | "🔝 Iron Gym Pull-Up Bar" | Sidebar quick picks | Same URL as link #4 |
| 11 | 654 | Sunny Rowing Machine | "🚣 Sunny Rowing Machine" | Sidebar quick picks | Same URL as link #5 |

**Total links in this guide:** 11 (5 unique products × 2–3 placements each)

**Note:** Links #6–#11 should use the same affiliate URLs as their corresponding product card links (#1–#5). No separate ASIN lookups needed.

---

### `guides/best-budget-standing-desks.html`

**Status:** Placeholder content — no affiliate links yet. Add links when full content is written.

---

### `guides/best-smartwatches-under-300.html`

**Status:** Placeholder content — no affiliate links yet. Add links when full content is written.

---

### `guides/best-family-suvs-for-value.html`

**Status:** Placeholder content — no affiliate links yet. Note: family SUV guide links to AutoTrader/CarGurus rather than Amazon. Different affiliate program needed.

---

### `index.html`

**Status:** No affiliate links. Homepage links to guide pages only, no direct product links.

---

### `categories/*.html`

**Status:** No affiliate links on any category page. Category pages link to guide pages only.

---

## Affiliate Link Totals by Status

| Status | Count |
|---|---|
| Active affiliate links | 0 |
| Placeholder links (`href="#"`) | 11 |
| Links pending guide content | ~30–40 estimated (when remaining 3 guides written) |

---

## Amazon Associates Application Checklist

Before applying, confirm the site meets Amazon's requirements:

- [x] Site is live and publicly accessible at `https://smartconsumerhq.com`
- [x] Affiliate disclosure visible on guide pages (`/legal/affiliate-disclosure`)
- [x] Disclosure linked in site footer
- [x] Disclosure box present on `guides/best-home-gym-equipment.html` above the fold
- [ ] At least 3 pieces of qualifying content (guides) with substantial content — **in progress**
- [ ] Privacy Policy exists at `/legal/privacy-policy` — ✓
- [ ] Terms of Use exists at `/legal/terms-of-use` — ✓
- [ ] Site does not pop up or redirect users — ✓

**Recommended:** Write at least 2 more full guides before applying. Amazon reviews site content manually.

---

## After Amazon Associates Approval

1. Open each guide HTML file
2. Use the line numbers in this map to find each `href="#"` link
3. Replace with your affiliate URL: `https://www.amazon.com/dp/ASIN/?tag=YOUR_TAG`
4. Verify `rel="nofollow sponsored" target="_blank"` is present on every link
5. Update this map — change Status column from "placeholder" to "active"
6. Test each link in browser to confirm it resolves to the correct Amazon product page
7. Update `docs/05_research/SEO_SETUP.md` to note affiliate links are live
8. Update `docs/01_product/PROJECT_STATUS.md` monetization section

# Affiliate Link Audit — Smart Consumer HQ

**Audit date:** 2026-06-09 (Entry 21)  
**Last updated:** 2026-06-09 (Entry 22) — MR-01 through MR-04 resolved  
**Auditor:** Automated scan + HTTP verification  
**Scope:** All published guides, all draft articles, all section pages, templates

---

## Summary

| Metric | Count |
|---|---|
| **Total links audited** | **148** |
| Direct ASIN links | 5 |
| Amazon search links | 143 |
| Placeholder (template only) | 1 |
| **Broken / HTTP 404** | **3** → auto-fixed |
| **Missing affiliate tag** | **0** |
| **Redirect anomalies** | **0** |
| **URL inconsistencies** | **1** → auto-fixed |
| **Products with limited Amazon availability** | ~~6 products across 4 files~~ → **2 remaining (MR-05, MR-06 baby monitors)** |
| **Manual review required** | ~~9 items~~ → **5 remaining (MR-05 through MR-09)** |

---

## Auto-Fixed Issues

### Fix 1 — Broken ASIN: Bowflex SelectTech 552 (B001ARYU58)
**Severity:** Critical — live broken links in published guide  
**File:** `guides/best-home-gym-equipment.html`  
**Lines affected:** 243 (product card), 630 (verdict box CTA), 650 (sidebar quick pick)

| Before | After |
|---|---|
| `https://www.amazon.com/dp/B001ARYU58?tag=smartconsu0ca-20` | `https://www.amazon.com/s?k=Bowflex+SelectTech+552+Adjustable+Dumbbells&tag=smartconsu0ca-20` |

**Test result:** ASIN B001ARYU58 returns HTTP 404. Amazon returns 200 for search URL.  
**Root cause:** Amazon listing for this ASIN has been removed or consolidated. The product is still sold but under different ASINs that cannot be verified without SiteStripe access.  
**Fix applied:** Downgraded to Amazon search URL. Commission still applies if customer purchases through the search result. When verified ASIN is available via SiteStripe, upgrade to direct link.

---

### Fix 2 — URL Inconsistency: FlexiSpot E7
**Severity:** Minor — shorter search term produces less targeted results  
**File:** `deals.html` line 80

| Before | After |
|---|---|
| `https://www.amazon.com/s?k=FlexiSpot+E7&tag=smartconsu0ca-20` | `https://www.amazon.com/s?k=FlexiSpot+E7+Electric+Standing+Desk&tag=smartconsu0ca-20` |

**Root cause:** `deals.html` was written with a shorter search term than the standing desks guide. The longer term is more specific and produces better-targeted search results.

---

## Valid Links

### Direct ASIN Links — Verified

| File | Line | Product | ASIN | HTTP Status |
|---|---|---|---|---|
| `guides/best-home-gym-equipment.html` | 378 | Iron Gym Total Upper Body Workout Bar | B001EJMS6K | **200 ✅** |
| `guides/best-home-gym-equipment.html` | 653 | Iron Gym (sidebar) | B001EJMS6K | **200 ✅** |

**Note:** B001ARYU58 (Bowflex) has been replaced — no more broken direct ASIN links remain.

### Amazon Search Links — All Verified HTTP 200

All 143 search URLs return HTTP 200 and carry `tag=smartconsu0ca-20`. Search URLs are format-valid affiliate links — commissions apply to any purchase made within 24 hours of the click.

---

## Manual Review Required

The following products raise concerns about Amazon availability or content accuracy. None were auto-fixed — these require editorial decisions.

---

### MR-01 — Autonomous SmartDesk Pro (Published Guide) ✅ RESOLVED (Entry 22)
**Severity:** High — live published content  
**File:** `guides/best-budget-standing-desks.html` and `deals.html`  
**Resolution:** Replaced with **FEZIBO 55" Electric Height-Adjustable Standing Desk** across all occurrences in both files. Full product card rewritten (8 locations in standing desks guide + 1 in deals.html). Affiliate link: `s?k=FEZIBO+55+inch+Electric+Height+Adjustable+Standing+Desk&tag=smartconsu0ca-20`

---

### MR-02 — Lululemon 5mm "The Mat" (Draft) ✅ RESOLVED (Entry 22)
**Severity:** High — affects draft before publishing  
**File:** `content/drafts/best-yoga-mats-under-100.html`  
**Resolution:** Replaced with **Yoga Design Lab Combo Mat 3.5mm** (PU/rubber, hot yoga grip, $78–$95, Amazon-native). Full product card rewritten plus all in-body references updated (comparison table ×2, verdict, sidebar, buying guide text). Affiliate link: `s?k=Yoga+Design+Lab+Combo+Mat+3.5mm&tag=smartconsu0ca-20`

---

### MR-03 — Liforme Original Yoga Mat (Draft) ✅ RESOLVED (Entry 22)
**Severity:** Medium — affects draft before publishing  
**File:** `content/drafts/best-yoga-mats-under-100.html`  
**Resolution:** Replaced with **Manduka eKO Lite Natural Rubber Yoga Mat 4mm** (natural rubber, eco-sourced, immediate grip, $68–$85, Amazon-native). Full product card rewritten plus all in-body references updated (comparison table ×2, sidebar, buying guide text). Affiliate link: `s?k=Manduka+eKO+Lite+Yoga+Mat+4mm&tag=smartconsu0ca-20`

---

### MR-04 — Autonomous ErgoChair Pro (Draft) ✅ RESOLVED (Entry 22)
**Severity:** Medium — affects draft before publishing  
**File:** `content/drafts/best-ergonomic-office-chairs-under-300.html`  
**Resolution:** Replaced with **SIDIZ T50 Fully Adjustable Ergonomic Office Chair** (40-year commercial manufacturer, seat depth adjustment, 4D armrests, 2D lumbar, $280–$320, Amazon-native). Full product card rewritten plus all in-body references updated (comparison table ×2, verdict, sidebar, buying guide text). Affiliate link: `s?k=SIDIZ+T50+Ergonomic+Office+Chair&tag=smartconsu0ca-20`

---

### MR-05 — Nanit Pro Complete Baby Monitor (Draft)
**Severity:** Low — sold on Amazon but verify current availability  
**File:** `content/drafts/best-baby-monitors-2026.html`  
**Lines:** 286, 638, 640  
**Issue:** Nanit Pro Complete is available on Amazon but frequently goes in/out of stock. The monitor also requires a paid subscription ($99–$299/year) which isn't clearly disclosed in the draft. FTC guidelines require disclosure of ongoing costs.  
**Recommended fix:** Add subscription cost disclosure to the product description before publishing. Verify stock availability before committing to publish.

---

### MR-06 — Owlet Dream Duo Baby Monitor (Draft)
**Severity:** Low — sold on Amazon but verify listing  
**File:** `content/drafts/best-baby-monitors-2026.html`  
**Lines:** 332, 641  
**Issue:** The Owlet Dream Duo is available on Amazon, but Owlet has had regulatory issues with their pulse oximetry products. The Dream Duo's sock (SpO2 monitoring feature) was previously pulled from the US market by the FDA (2021) and relaunched with modifications. Verify the current product status and that the version being recommended is the FDA-compliant 2023+ model.  
**Recommended fix:** Add a note to the product description clarifying it is the current FDA-compliant version. Verify the Amazon listing is current stock (not old clearance of discontinued model).

---

### MR-07 — Bowflex SelectTech 552 ASIN Upgrade Path
**Severity:** Low — current search URL is functional  
**File:** `guides/best-home-gym-equipment.html` (3 links, now search URLs)  
**Issue:** Following the auto-fix, Bowflex 552 links are now search URLs. For the site's #1 published guide and #1 product recommendation, a direct ASIN link would improve conversion.  
**Recommended fix:** Log into Amazon SiteStripe while viewing the Bowflex SelectTech 552 product page and get the verified current ASIN. Replace `s?k=Bowflex+SelectTech+552+Adjustable+Dumbbells` with `dp/[ASIN]`.

---

### MR-08 — Iron Gym ASIN Longevity
**Severity:** Low — currently verified valid  
**File:** `guides/best-home-gym-equipment.html`  
**Lines:** 378, 653  
**Issue:** ASIN B001EJMS6K currently returns HTTP 200. However, the Bowflex ASIN also appeared valid until it didn't — periodic ASIN re-verification is recommended.  
**Recommended fix:** Re-verify B001EJMS6K every 60–90 days as part of routine audit. Use SiteStripe to confirm it links to the correct product (not a redirected/merged listing).

---

### MR-09 — Template Placeholder
**Severity:** None — by design  
**File:** `content/templates/article-template.html` line 227  
**URL:** `PLACEHOLDER: https://www.amazon.com/dp/ASIN?tag=smartconsu0ca-20`  
**Issue:** Not a live link — intentional placeholder showing the required format.  
**Action:** None required.

---

## Full Link Inventory

### Published Guides

#### `guides/best-home-gym-equipment.html` — 11 links

| Line | Product | URL | Type | Status |
|---|---|---|---|---|
| 243 | Bowflex SelectTech 552 (card) | `s?k=Bowflex+SelectTech+552+Adjustable+Dumbbells` | search | ✅ Fixed (was 404) |
| 288 | Marcy Foldable Bench (card) | `s?k=Marcy+Foldable+Utility+Weight+Bench` | search | ✅ Valid |
| 333 | WHATAFIT Bands 11-Piece (card) | `s?k=WHATAFIT+Resistance+Bands+11+Piece` | search | ✅ Valid |
| 378 | Iron Gym Total Upper Body (card) | `dp/B001EJMS6K` | direct ASIN | ✅ Valid (200) |
| 423 | Sunny Health SF-RW5623 (card) | `s?k=Sunny+Health+SF-RW5623+Rowing+Machine` | search | ✅ Valid |
| 630 | Bowflex 552 (verdict CTA) | `s?k=Bowflex+SelectTech+552+Adjustable+Dumbbells` | search | ✅ Fixed (was 404) |
| 650 | Bowflex 552 (sidebar) | `s?k=Bowflex+SelectTech+552+Adjustable+Dumbbells` | search | ✅ Fixed (was 404) |
| 651 | Marcy Bench (sidebar) | `s?k=Marcy+Foldable+Utility+Weight+Bench` | search | ✅ Valid |
| 652 | WHATAFIT Bands (sidebar) | `s?k=WHATAFIT+Resistance+Bands+11+Piece` | search | ✅ Valid |
| 653 | Iron Gym (sidebar) | `dp/B001EJMS6K` | direct ASIN | ✅ Valid (200) |
| 654 | Sunny Rowing (sidebar) | `s?k=Sunny+Health+SF-RW5623+Rowing+Machine` | search | ✅ Valid |

#### `guides/best-budget-standing-desks.html` — 11 links

| Line | Product | URL | Type | Status |
|---|---|---|---|---|
| 245 | FlexiSpot E7 (card) | `s?k=FlexiSpot+E7+Electric+Standing+Desk` | search | ✅ Valid |
| 290 | FEZIBO 55" Electric Desk (card) | `s?k=FEZIBO+55+inch+Electric+Height+Adjustable+Standing+Desk` | search | ✅ Fixed (MR-01) |
| 336 | VIVO Electric 55" (card) | `s?k=VIVO+Electric+55+Standing+Desk` | search | ✅ Valid |
| 383 | SHW Electric Desk (card) | `s?k=SHW+Electric+Height+Adjustable+Standing+Desk` | search | ✅ Valid |
| 428 | FlexiSpot E5 (card) | `s?k=FlexiSpot+E5+Electric+Standing+Desk` | search | ✅ Valid |
| 643 | FlexiSpot E7 (verdict CTA) | `s?k=FlexiSpot+E7+Electric+Standing+Desk` | search | ✅ Valid |
| 663 | FlexiSpot E7 (sidebar) | `s?k=FlexiSpot+E7+Electric+Standing+Desk` | search | ✅ Valid |
| 664 | FEZIBO 55" (sidebar) | `s?k=FEZIBO+55+inch+Electric+Height+Adjustable+Standing+Desk` | search | ✅ Fixed (MR-01) |
| 665 | VIVO Electric 55" (sidebar) | `s?k=VIVO+Electric+55+Standing+Desk` | search | ✅ Valid |
| 666 | SHW Electric Desk (sidebar) | `s?k=SHW+Electric+Height+Adjustable+Standing+Desk` | search | ✅ Valid |
| 667 | FlexiSpot E5 (sidebar) | `s?k=FlexiSpot+E5+Electric+Standing+Desk` | search | ✅ Valid |

#### `guides/best-smartwatches-under-300.html` — 11 links

| Line | Product | URL | Type | Status |
|---|---|---|---|---|
| 239 | Apple Watch SE 2 (card) | `s?k=Apple+Watch+SE+2nd+generation` | search | ✅ Valid |
| 284 | Samsung Galaxy Watch 6 (card) | `s?k=Samsung+Galaxy+Watch+6+40mm` | search | ✅ Valid |
| 331 | Garmin Forerunner 255 (card) | `s?k=Garmin+Forerunner+255` | search | ✅ Valid |
| 378 | Fitbit Versa 4 (card) | `s?k=Fitbit+Versa+4` | search | ✅ Valid |
| 424 | Amazfit GTR 4 (card) | `s?k=Amazfit+GTR+4` | search | ✅ Valid |
| 643 | Apple Watch SE 2 (verdict CTA) | `s?k=Apple+Watch+SE+2nd+generation` | search | ✅ Valid |
| 662 | Apple Watch SE 2 (sidebar) | `s?k=Apple+Watch+SE+2nd+generation` | search | ✅ Valid |
| 663 | Samsung Galaxy Watch 6 (sidebar) | `s?k=Samsung+Galaxy+Watch+6+40mm` | search | ✅ Valid |
| 664 | Garmin Forerunner 255 (sidebar) | `s?k=Garmin+Forerunner+255` | search | ✅ Valid |
| 665 | Fitbit Versa 4 (sidebar) | `s?k=Fitbit+Versa+4` | search | ✅ Valid |
| 666 | Amazfit GTR 4 (sidebar) | `s?k=Amazfit+GTR+4` | search | ✅ Valid |

#### `guides/best-family-suvs-for-value.html` — 0 Amazon links
No affiliate links applicable (Edmunds research links only — by design).

---

### Section Pages

#### `deals.html` — 5 links

| Line | Product | URL | Type | Status |
|---|---|---|---|---|
| 80 | FlexiSpot E7 | `s?k=FlexiSpot+E7+Electric+Standing+Desk` | search | ✅ Fixed (was short URL) |
| 94 | FEZIBO 55" Electric Desk | `s?k=FEZIBO+55+inch+Electric+Height+Adjustable+Standing+Desk` | search | ✅ Fixed (MR-01) |
| 112 | Apple Watch SE 2nd Gen | `s?k=Apple+Watch+SE+2nd+generation` | search | ✅ Valid |
| 126 | Garmin Forerunner 255 | `s?k=Garmin+Forerunner+255` | search | ✅ Valid |
| 144 | Bowflex SelectTech 552 | `s?k=Bowflex+SelectTech+552` | search | ✅ Valid |

---

### Draft Articles — Status Summary

| Draft | Links | Auto-Fix | Manual Review | Status |
|---|---|---|---|---|
| best-ergonomic-office-chairs-under-300 | 11 | None | ~~MR-04~~ → SIDIZ T50 (fixed) | ✅ MR-04 resolved — ready to review |
| best-air-fryers-under-150 | 11 | None | None | ✅ Ready to review |
| best-wireless-earbuds-under-100 | 11 | None | None | ✅ Ready to review |
| best-resistance-bands-home-workouts | 11 | None | None | ✅ Ready to review |
| best-instant-pots-pressure-cookers | 11 | None | None | ✅ Ready to review |
| best-yoga-mats-under-100 | 11 | None | ~~MR-02, MR-03~~ → YDL Combo + eKO Lite (fixed) | ✅ MR-02 + MR-03 resolved — ready to review |
| best-coffee-makers-under-100 | 11 | None | None | ✅ Ready to review |
| best-laptop-stands-work-from-home | 11 | None | None | ✅ Ready to review |
| best-baby-monitors-2026 | 11 | None | MR-05 (Nanit), MR-06 (Owlet) | ⚠️ Review before publish |
| best-portable-chargers-power-banks | 11 | None | None | ✅ Ready to review |

---

### Templates

| File | Line | URL | Status |
|---|---|---|---|
| `content/templates/article-template.html` | 227 | `PLACEHOLDER: https://www.amazon.com/dp/ASIN?tag=smartconsu0ca-20` | ✅ Intentional placeholder |

---

## Audit Conclusions

### What's Working
- **0 missing affiliate tags** — every Amazon link carries `tag=smartconsu0ca-20`
- **0 redirect anomalies** — all valid links resolve directly without suspicious redirects
- **Iron Gym ASIN (B001EJMS6K)** — the only remaining direct ASIN link; verified HTTP 200
- **All search URLs functional** — 143 search links return HTTP 200 with tag intact

### What Was Fixed
- **3 broken ASIN links** replaced with working search URLs (Bowflex SelectTech 552)
- **1 URL inconsistency** resolved (FlexiSpot E7 short search term in deals.html)

### What Needs Manual Editorial Review
| ID | File | Product | Issue | Priority |
|---|---|---|---|---|
| MR-01 | best-budget-standing-desks.html + deals.html | ~~Autonomous SmartDesk Pro~~ → FEZIBO 55" | ✅ Resolved Entry 22 | ~~High~~ |
| MR-02 | best-yoga-mats-under-100.html (draft) | ~~Lululemon 5mm~~ → Yoga Design Lab Combo | ✅ Resolved Entry 22 | ~~High~~ |
| MR-03 | best-yoga-mats-under-100.html (draft) | ~~Liforme Original~~ → Manduka eKO Lite | ✅ Resolved Entry 22 | ~~Medium~~ |
| MR-04 | best-ergonomic-office-chairs-under-300.html (draft) | ~~Autonomous ErgoChair Pro~~ → SIDIZ T50 | ✅ Resolved Entry 22 | ~~Medium~~ |
| MR-05 | best-baby-monitors-2026.html (draft) | Nanit Pro Complete | Verify availability + disclose subscription | **Low** |
| MR-06 | best-baby-monitors-2026.html (draft) | Owlet Dream Duo | Verify FDA-compliant model is listed | **Low** |
| MR-07 | best-home-gym-equipment.html | Bowflex SelectTech 552 | Upgrade search URL to verified ASIN via SiteStripe | **Low** |
| MR-08 | best-home-gym-equipment.html | Iron Gym B001EJMS6K | Re-verify ASIN every 60–90 days | **Low** |
| MR-09 | article-template.html | Placeholder | Intentional — no action needed | None |

---

## Recommended Actions by Priority

**Completed (Entry 22):**
1. ✅ MR-01: Autonomous SmartDesk Pro → FEZIBO 55" (published guide + deals.html)
2. ✅ MR-02: Lululemon 5mm The Mat → Yoga Design Lab Combo Mat (yoga mats draft)
3. ✅ MR-03: Liforme Original → Manduka eKO Lite (yoga mats draft)
4. ✅ MR-04: Autonomous ErgoChair Pro → SIDIZ T50 (chairs draft)

**Before publishing baby monitors draft:**
5. Resolve MR-05: Add Nanit Pro subscription cost disclosure
6. Resolve MR-06: Verify Owlet Dream Duo is FDA-compliant 2023+ model

**Ongoing maintenance:**
6. Use Amazon SiteStripe to get verified ASINs for all top-pick products (MR-07)
7. Re-run this audit every 60–90 days to catch newly broken ASINs (MR-08)

---

## Re-Audit Schedule

| Trigger | Action |
|---|---|
| Before any draft is published | Check that all affiliate links in that draft are correct |
| Every 60–90 days | Re-test all direct ASIN links for HTTP status |
| After Amazon reports broken link | Immediate audit of all ASIN links |
| After Amazon Associates policy update | Review all affiliate link formats |

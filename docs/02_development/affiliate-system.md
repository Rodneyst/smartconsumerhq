# Affiliate System — Smart Consumer HQ

**Created:** 2026-06-09  
**Last updated:** 2026-06-09

---

## Architecture

The affiliate system uses two vanilla JavaScript files to keep all network IDs and link logic centralized. No affiliate IDs are hardcoded in HTML pages or components.

```
config/affiliate-config.js   — Network IDs and status flags (edit here only)
lib/affiliate.js             — Link generation and product card utility functions
```

Both files are loaded via `<script>` tags on any page that displays affiliate product links. Load `affiliate-config.js` before `affiliate.js`.

**Note:** The user originally requested TypeScript (`.ts`) files. This site is vanilla HTML/CSS/JS with no build system — TypeScript requires a compiler that does not exist here. The `.js` equivalents provide identical functionality.

---

## Configuration File — `config/affiliate-config.js`

Contains a global `AFFILIATE_CONFIG` object. Edit network IDs and status flags here only.

```javascript
AFFILIATE_CONFIG = {
  amazon:  { storeId: 'smartconsu0ca-20', status: 'active' },
  cj:      { propertyId: '101779331',     status: 'active' },
  walmart: { status: 'pending' },
  impact:  { status: 'disabled' }
}
```

When a network goes from `pending` → `active`, update the `status` flag and add the base URL here. No other files need updating.

---

## Utility Functions — `lib/affiliate.js`

### `generateAmazonAffiliateLink(asin)`

Returns a fully-qualified Amazon affiliate URL with the active store tag.

```javascript
generateAmazonAffiliateLink('B08N5WRWNW')
// → https://www.amazon.com/dp/B08N5WRWNW?tag=smartconsu0ca-20
```

### `generateAffiliateButton(text, url, className)`

Returns an HTML string for an affiliate CTA button. All buttons open in a new tab with `rel="nofollow sponsored"`.

```javascript
generateAffiliateButton('Check Price on Amazon', amazonUrl)
// → <a href="..." class="btn-affiliate" target="_blank" rel="nofollow sponsored">Check Price on Amazon</a>
```

### `generateProductCard(product)`

Returns an HTML string for a product card. Accepts a product config object.

```javascript
generateProductCard({
  name: 'FlexiSpot E7',
  image: '/images/flexispot-e7.jpg',
  rating: 4.8,
  price: '$399',
  pros: ['Sturdy frame', 'Programmable heights'],
  cons: ['Assembly time'],
  affiliateUrl: generateAmazonAffiliateLink('B08QZC9QZC'),
  network: 'amazon'
})
```

### `generateMerchantLink(network, productId, fallbackUrl)`

Returns the correct affiliate URL for any supported network. Falls back to `fallbackUrl` if the network is not active.

```javascript
generateMerchantLink('amazon', 'B08QZC9QZC')
generateMerchantLink('walmart', '12345678', 'https://www.walmart.com/ip/...')
```

### `getAffiliateNetwork(url)`

Returns the network name (`'amazon'`, `'walmart'`, `'cj'`, `'impact'`, `'direct'`) from a URL string. Useful for analytics tagging.

```javascript
getAffiliateNetwork('https://www.amazon.com/dp/B08N5WRWNW?tag=smartconsu0ca-20')
// → 'amazon'
```

---

## Adding a Product Card to a Guide Page

1. Load the two affiliate scripts in the page `<head>` or just before `</body>`:
   ```html
   <script src="../../config/affiliate-config.js"></script>
   <script src="../../lib/affiliate.js"></script>
   ```
   Adjust the relative paths based on page depth.

2. Use `generateAmazonAffiliateLink()` in inline scripts to populate link `href` values:
   ```html
   <a id="product-link" href="#" rel="nofollow sponsored" target="_blank">Check Price</a>
   <script>
     document.getElementById('product-link').href =
       generateAmazonAffiliateLink('B08N5WRWNW');
   </script>
   ```

3. Or write the full Amazon URL directly in the `href` for static simplicity:
   ```html
   <a href="https://www.amazon.com/dp/B08N5WRWNW?tag=smartconsu0ca-20"
      target="_blank" rel="nofollow sponsored">Check Price on Amazon</a>
   ```
   This is preferred for guide pages — no JavaScript dependency for the link to work.

---

## Affiliate Link Rules

- All affiliate links: `target="_blank"` and `rel="nofollow sponsored"`
- Amazon format: `https://www.amazon.com/dp/[ASIN]?tag=smartconsu0ca-20`
- Never hardcode the store tag in HTML — reference it from `AFFILIATE_CONFIG.amazon.storeId` in JS or use the above static format
- FTC disclosure: the shared footer (via `components.js`) already includes: *"Smart Consumer HQ participates in affiliate programs. We may earn commissions on qualifying purchases."*
- Individual guide pages should also include an in-page disclosure near the first affiliate link

---

## Adding a New Affiliate Network

1. Add a new key to `AFFILIATE_CONFIG` in `config/affiliate-config.js`
2. Add a case to the `switch` statement in `generateMerchantLink()` in `lib/affiliate.js`
3. Update `getAffiliateNetwork()` with the new network's URL domain pattern
4. Update `docs/01_product/MONETIZATION_STATUS.md` with the new network status
5. Update `docs/00_founder/affiliate-accounts.md` with account details

---

## Network Status Reference

| Network | Status | Action Required |
|---|---|---|
| Amazon Associates | Active | Replace `href="#"` placeholders with real URLs using `tag=smartconsu0ca-20` |
| CJ Affiliate | Active | Apply to advertiser programs (Best Buy, Target, Home Depot) via CJ dashboard |
| Walmart | Pending | Activate link generation when approval arrives |
| Impact Radius | Disabled | Revisit when site traffic grows |

---

## FTC Compliance

The following FTC disclosure language is present on:

- **All pages** via the shared footer in `components.js`: *"Smart Consumer HQ participates in affiliate programs. We may earn commissions on qualifying purchases."*
- **All guide/article pages**: In-page disclosure block in the guide header area
- **Comparison pages and product review pages**: Same in-page disclosure language
- **`/legal/affiliate-disclosure`**: Full standalone disclosure page

The footer disclosure is injected automatically on all inner pages via `components.js`. No per-page update needed.

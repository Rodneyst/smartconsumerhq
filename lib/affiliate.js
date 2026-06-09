// Affiliate link utility functions
// Requires affiliate-config.js loaded before this file in any HTML page that uses these functions

function generateAmazonAffiliateLink(asin) {
  if (!asin) return '#';
  return 'https://www.amazon.com/dp/' + asin + '?tag=' + AFFILIATE_CONFIG.amazon.storeId;
}

function generateAffiliateButton(text, url, className) {
  var safeUrl = url || '#';
  var safeClass = className || 'btn-affiliate';
  return '<a href="' + safeUrl + '" class="' + safeClass + '" target="_blank" rel="nofollow sponsored">' + text + '</a>';
}

function generateMerchantLink(network, productId, fallbackUrl) {
  switch ((network || '').toLowerCase()) {
    case 'amazon':
      return generateAmazonAffiliateLink(productId);
    case 'walmart':
      if (AFFILIATE_CONFIG.walmart.status !== 'active') return fallbackUrl || '#';
      return 'https://goto.walmart.com/c/' + productId;
    case 'cj':
      if (AFFILIATE_CONFIG.cj.status !== 'active') return fallbackUrl || '#';
      return 'https://www.anrdoezrs.net/click-' + AFFILIATE_CONFIG.cj.propertyId + '-' + productId;
    default:
      return fallbackUrl || '#';
  }
}

function getAffiliateNetwork(url) {
  if (!url || url === '#') return null;
  if (url.indexOf('amazon.com') !== -1) return 'amazon';
  if (url.indexOf('walmart.com') !== -1) return 'walmart';
  if (url.indexOf('anrdoezrs.net') !== -1 || url.indexOf('dpbolvw.net') !== -1) return 'cj';
  if (url.indexOf('impact.com') !== -1 || url.indexOf('pjtra.com') !== -1) return 'impact';
  return 'direct';
}

// product: { name, image, rating, price, pros[], cons[], affiliateUrl, badge }
function generateProductCard(product) {
  var badgeHtml = product.badge
    ? '<span class="guide-badge top-pick">' + product.badge + '</span>'
    : '';
  var prosHtml = (product.pros || []).map(function(p) { return '<li>' + p + '</li>'; }).join('');
  var consHtml = (product.cons || []).map(function(c) { return '<li>' + c + '</li>'; }).join('');
  var imageHtml = product.image
    ? '<img src="' + product.image + '" alt="' + product.name + '" style="width:100%;border-radius:8px 8px 0 0;" />'
    : '';

  return '<div class="guide-card">'
    + (imageHtml ? '<div class="guide-card-img">' + imageHtml + '</div>' : '')
    + '<div class="guide-card-top">'
    + '<span class="guide-category-tag">' + (product.category || '') + '</span>'
    + badgeHtml
    + '</div>'
    + '<div class="guide-card-body">'
    + '<h3 class="guide-title">' + product.name + '</h3>'
    + (product.rating ? '<p style="margin:4px 0 8px;font-size:0.875rem;">Rating: ' + product.rating + '/5</p>' : '')
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">'
    + '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:12px;">'
    + '<strong style="color:#166534;display:block;margin-bottom:6px;font-size:0.8rem;">✅ Pros</strong>'
    + '<ul style="margin:0;padding-left:14px;font-size:0.8rem;">' + prosHtml + '</ul>'
    + '</div>'
    + '<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:12px;">'
    + '<strong style="color:#991b1b;display:block;margin-bottom:6px;font-size:0.8rem;">❌ Cons</strong>'
    + '<ul style="margin:0;padding-left:14px;font-size:0.8rem;">' + consHtml + '</ul>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="guide-card-footer">'
    + '<span class="guide-read-time" style="font-weight:600;">' + (product.price || '') + '</span>'
    + generateAffiliateButton('Check Price →', product.affiliateUrl, 'btn btn-primary btn-sm')
    + '</div>'
    + '</div>';
}

/**
 * Smart Consumer HQ — components.js
 * Injects shared header and footer on inner pages.
 * Loaded only by inner pages (categories/, guides/, legal/)
 */
(function () {
  'use strict';

  /* ---- Determine root path relative to current page depth ---- */
  // /categories/x.html  → root = '../'
  // /guides/x.html      → root = '../'
  // /legal/x.html       → root = '../'
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const root = depth >= 2 ? '../' : './';

  /* ---- HEADER ---- */
  const headerHTML = `
<header class="site-header" id="site-header">
  <div class="container header-inner">
    <a href="${root}index.html" class="logo" aria-label="Smart Consumer HQ Home">
      <span class="logo-icon">🔍</span>
      <span class="logo-text">Smart Consumer <strong>HQ</strong></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <ul>
        <li class="nav-dropdown">
          <a href="${root}index.html#categories" class="nav-dropdown-toggle">Categories <span class="nav-arrow">▾</span></a>
          <ul class="dropdown-menu">
            <li><a href="${root}categories/home-fitness.html">🏋️ Home Fitness</a></li>
            <li><a href="${root}categories/tech-gadgets.html">💻 Tech &amp; Gadgets</a></li>
            <li><a href="${root}categories/home-office.html">🖥️ Home Office</a></li>
            <li><a href="${root}categories/family-parenting.html">👨‍👩‍👧 Family &amp; Parenting</a></li>
            <li><a href="${root}categories/money-saving.html">💰 Money Saving</a></li>
            <li><a href="${root}categories/home-products.html">🏠 Home Products</a></li>
          </ul>
        </li>
        <li><a href="${root}buying-guides.html">Buying Guides</a></li>
        <li><a href="${root}reviews.html">Reviews</a></li>
        <li><a href="${root}comparisons.html">Comparisons</a></li>
        <li><a href="${root}deals.html">Deals</a></li>
        <li><a href="${root}blog.html">Blog</a></li>
        <li><a href="${root}index.html#about">About</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <a href="${root}index.html#newsletter" class="btn btn-primary btn-sm">Subscribe</a>
      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
<footer class="site-footer" aria-labelledby="footer-brand-inner">
  <div class="container footer-inner">
    <div class="footer-col footer-brand-col">
      <a href="${root}index.html" class="logo footer-logo" id="footer-brand-inner">
        <span class="logo-icon">🔍</span>
        <span class="logo-text">Smart Consumer <strong>HQ</strong></span>
      </a>
      <p class="footer-tagline">Helping Consumers Make Smarter Buying Decisions</p>
    </div>
    <div class="footer-col">
      <h3 class="footer-heading">Quick Links</h3>
      <ul class="footer-links">
        <li><a href="${root}index.html">Home</a></li>
        <li><a href="${root}index.html#guides">Buying Guides</a></li>
        <li><a href="${root}index.html#about">About Us</a></li>
        <li><a href="${root}index.html#newsletter">Newsletter</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3 class="footer-heading">Categories</h3>
      <ul class="footer-links">
        <li><a href="${root}categories/home-fitness.html">Home Fitness</a></li>
        <li><a href="${root}categories/tech-gadgets.html">Tech &amp; Gadgets</a></li>
        <li><a href="${root}categories/home-office.html">Home Office</a></li>
        <li><a href="${root}categories/family-parenting.html">Family &amp; Parenting</a></li>
        <li><a href="${root}categories/money-saving.html">Money Saving</a></li>
        <li><a href="${root}categories/home-products.html">Home Products</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3 class="footer-heading">Legal</h3>
      <ul class="footer-links">
        <li><a href="mailto:hello@smartconsumerhq.com">hello@smartconsumerhq.com</a></li>
        <li><a href="${root}legal/affiliate-disclosure.html">Affiliate Disclosure</a></li>
        <li><a href="${root}legal/privacy-policy.html">Privacy Policy</a></li>
        <li><a href="${root}legal/terms-of-use.html">Terms of Use</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p class="footer-copy">© 2026 Smart Consumer HQ. All rights reserved.</p>
      <p class="footer-disclosure">Smart Consumer HQ participates in affiliate programs. We may earn commissions on qualifying purchases.</p>
    </div>
  </div>
</footer>`;

  /* ---- Inject into page ---- */
  const headerTarget = document.getElementById('site-header-placeholder');
  const footerTarget = document.getElementById('site-footer-placeholder');

  if (headerTarget) headerTarget.outerHTML = headerHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  /* ---- Re-run shared scripts that need DOM ---- */
  // These are defined in script.js which loads after components.js
})();

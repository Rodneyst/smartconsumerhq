# Smart Consumer HQ — Project Guide for AI Agents

## What This Project Is

Smart Consumer HQ (`smartconsumerhq.com`) is a static affiliate/review website serving independent product buying guides across consumer categories. No framework, no build system — raw HTML, CSS, and JavaScript deployed directly to Cloudflare Workers.

---

## Repository Structure

```
smartconsumerhq/
├── index.html              # Homepage (hero, category grid, guides, newsletter, FAQ)
├── styles.css              # Single global stylesheet for all pages (~37KB)
├── script.js               # Shared vanilla JS (header, menu, scroll, forms)
├── components.js           # Header/footer injection for category pages
├── home-fitness.html       # Category page: Home Fitness
├── home-office.html        # Category page: Home Office
├── tech-gadgets.html       # Category page: Tech & Gadgets
├── family-parenting.html   # Category page: Family & Parenting
├── DEPLOYMENT.md           # Deployment documentation
└── CLAUDE.md               # This file
```

---

## File Purposes

### `index.html`
The homepage. Contains all section markup inline: site header, hero, category cards grid, featured buying guides grid, "Why Trust Us" pillars, newsletter signup form, FAQ accordion, and footer. All SEO metadata, Open Graph tags, Schema.org JSON-LD, and canonical URL are in the `<head>`.

### `styles.css`
Single stylesheet covering every page. Uses CSS custom properties (`--blue`, `--blue-light`, etc.) defined at `:root`. Organized by component: reset → tokens → layout → header → hero → cards → footer → utilities → responsive. Do not create per-page stylesheets.

### `script.js`
Vanilla JS with no dependencies. Eight self-contained IIFEs:
1. Sticky header shadow on scroll
2. Mobile menu toggle (hamburger)
3. Scroll reveal animations via IntersectionObserver
4. Newsletter form validation and fake-submit
5. Smooth scroll for anchor links
6. Scroll-spy active nav highlighting
7. Nav dropdown (keyboard + click accessible)
8. FAQ accordion (one open at a time)
9. Active nav state for inner pages

### `components.js`
Loaded only by category/inner pages. Injects a shared header and footer at runtime by replacing `<div id="site-header-placeholder">` and `<div id="site-footer-placeholder">`. Computes relative root path automatically based on URL depth. After injection, `script.js` re-runs the interactive behaviours.

---

## Category Page Architecture

Category pages (e.g. `home-fitness.html`) follow a strict pattern:

```html
<head>
  <!-- SEO, OG, Twitter Card, Schema.org CollectionPage JSON-LD -->
  <link rel="stylesheet" href="../styles.css" />
</head>
<body>
  <div id="site-header-placeholder"></div>  <!-- replaced by components.js -->

  <main>
    <nav class="breadcrumb">...</nav>        <!-- Home > Category Name -->
    <section class="category-hero">...</section>
    <section class="guides-section">
      <div class="guides-grid">
        <!-- .guide-card elements -->
      </div>
    </section>
    <!-- optional: comparison table, FAQ, newsletter CTA -->
  </main>

  <div id="site-footer-placeholder"></div>  <!-- replaced by components.js -->

  <script src="../components.js"></script>
  <script src="../script.js"></script>
</body>
```

**Key rules:**
- Stylesheet path is `../styles.css` (one level up from root)
- Script paths are `../components.js` and `../script.js`
- `components.js` must load before `script.js`
- Always include Schema.org `CollectionPage` JSON-LD
- Always set a canonical URL matching `https://smartconsumerhq.com/categories/<slug>.html`

---

## Article / Guide Card Structure

Each guide card in a `.guides-grid`:

```html
<article class="guide-card">
  <div class="guide-card-img">
    <!-- image or placeholder -->
  </div>
  <div class="guide-card-body">
    <span class="guide-tag">Category Label</span>
    <h3 class="guide-card-title"><a href="...">Title</a></h3>
    <p class="guide-card-excerpt">Short description...</p>
    <a href="..." class="guide-card-link">Read Guide →</a>
  </div>
</article>
```

---

## Deployment Workflow

**Every push to `main` auto-deploys to production.** There is no staging environment.

1. Make changes to local files
2. `git add <files>` — be specific, never `git add -A`
3. `git commit -m "clear description of change"`
4. `git push origin main`
5. Cloudflare Workers & Pages GitHub App deploys automatically (~1–2 min)
6. Verify at `https://smartconsumerhq.com`

See `DEPLOYMENT.md` for full architecture details.

---

## Rules for AI Agents

### Never do without explicit user confirmation
- Push to `git push origin main` (this is a direct production deployment)
- Delete or overwrite HTML files without showing a diff first
- Modify `styles.css` in ways that affect the global layout without checking cross-page impact
- Add new npm/Node dependencies — this project has none and should stay that way
- Create a build system, bundler, or transpilation step

### Always do
- Keep all pages using the single `styles.css` — no inline styles blocks, no separate stylesheets
- Follow the category page template exactly when creating new category pages
- Include full SEO metadata (canonical, OG, Twitter Card, Schema.org JSON-LD) on every new page
- Use `components.js` pattern on all inner pages — never duplicate the header/footer HTML inline
- Test that relative paths (`../styles.css`, `../script.js`) are correct for the page's depth

### Code style
- Vanilla JS only — no libraries, no frameworks, no CDN script imports
- New JS behaviour goes in `script.js` as a new numbered IIFE
- CSS custom properties are defined in `:root` in `styles.css` — use them, don't hardcode hex values
- No TypeScript, no JSX, no CSS preprocessors

### Content
- The site participates in affiliate programs — all outbound product links may be affiliate links
- Affiliate disclosure is referenced at `/legal/affiliate-disclosure.html`
- Do not remove or modify affiliate disclosure language in footer or legal pages

### Git hygiene
- Commit messages should be descriptive (e.g. `Add home-products category page`, not `Add files via upload`)
- Stage specific files, not entire directories
- The `cloudflare/workers-autoconfig` and `cloudflare/workers-autoconfig-2` branches are managed by the Cloudflare GitHub App — do not modify or delete them

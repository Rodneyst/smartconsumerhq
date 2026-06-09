# Design — Smart Consumer HQ

This directory contains design references: branding, colour palette, typography, and style documentation.

---

## Contents

*(No documents created yet.)*

---

## Planned Documents

| File | Description |
|---|---|
| BRAND_STYLE.md | Colour palette, typography, logo usage, and visual identity guidelines |
| UI_COMPONENTS.md | Reference for existing CSS components (cards, buttons, grids, forms) |

---

## Current Design State

The site uses a single global stylesheet (`styles.css` at repo root). Key design tokens are defined as CSS custom properties in `:root`:

```css
--blue: #2563eb;
--blue-light: #3b82f6;
--blue-dark: #1d4ed8;
/* ...etc */
```

All design changes must go through `styles.css`. No per-page stylesheets. No inline style blocks.

See `CLAUDE.md` at the repo root for the complete style rules.

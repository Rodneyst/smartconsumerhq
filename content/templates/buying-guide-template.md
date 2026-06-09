# Buying Guide Template — Smart Consumer HQ

Use this template for every buying guide. Replace all `{PLACEHOLDER}` values. Delete instruction comments before publishing.

---

## FRONT MATTER (for HTML head — do not publish as visible content)

```
SEO Title:        Best {PRODUCT} {QUALIFIER} {YEAR} — {BENEFIT}
                  (max 60 chars, include primary keyword near the start)

Meta Description: {ONE SENTENCE summarizing the guide, 140–160 chars, 
                  include primary keyword, end with a soft CTA}
                  Example: "We tested 12 standing desks under $400 and found
                  the best options for home offices. See our top picks and
                  buying advice."

Slug:             /guides/{primary-keyword-hyphenated}
                  Example: /guides/best-budget-standing-desks

Canonical URL:    https://smartconsumerhq.com/guides/{slug}

Category:         {Home Fitness | Home Office | Tech & Gadgets | 
                   Family & Parenting | Home Products | Money Saving}

Primary Keyword:  {exact target keyword}
Secondary Keywords: {2–4 related terms}

Schema Type:      Article (use existing guide page JSON-LD template)

Last Updated:     {YYYY-MM-DD}
Word Count Target: 1,800–2,500 words
```

---

## AFFILIATE DISCLOSURE (above the fold — required on all guide pages)

```html
<!-- Place immediately after breadcrumb, before H1 or immediately below H1 -->
<div class="affiliate-notice">
  <p>This page contains affiliate links. If you purchase through our links, 
  we may earn a commission at no extra cost to you. 
  <a href="/legal/affiliate-disclosure">Learn more</a>.</p>
</div>
```

---

## ARTICLE STRUCTURE

---

### H1: {SEO Title — same as or very close to the SEO title tag}

**Example:** Best Budget Standing Desks Under $400 in 2026

*Target: exact or near-exact match to primary keyword*

---

### INTRODUCTION (150–250 words)

**Purpose:** Hook the reader, establish credibility, preview what they'll find.

**Must include:**
- Open with the reader's problem or goal (not "In this article...")
- State what this guide covers and who it's for
- Mention the number of products tested/researched
- Include the primary keyword naturally in the first 100 words
- End with a transition to the quick picks table

**Template:**

{HOOK — describe the reader's situation in 1–2 sentences}

{BRIDGE — why this decision matters / what goes wrong without guidance}

We {researched / tested / compared} {NUMBER} {products} to find the best options for {USE CASE}. Whether you {QUALIFIER 1} or {QUALIFIER 2}, there's a pick on this list for you.

*Jump to our top picks below, or read our full buying guide to understand what to look for before you buy.*

---

### QUICK PICKS TABLE

**Purpose:** Serve readers who want the answer fast. Google often features this.

```markdown
## Our Top Picks at a Glance

| # | Product | Best For | Price Range | Rating |
|---|---|---|---|---|
| 1 | {PRODUCT NAME} | Best Overall | ${LOW}–${HIGH} | ★★★★★ |
| 2 | {PRODUCT NAME} | Best Budget | ${LOW}–${HIGH} | ★★★★☆ |
| 3 | {PRODUCT NAME} | Best Premium | ${LOW}–${HIGH} | ★★★★★ |
| 4 | {PRODUCT NAME} | Best for {USE CASE} | ${LOW}–${HIGH} | ★★★★☆ |
| 5 | {PRODUCT NAME} | Best Compact | ${LOW}–${HIGH} | ★★★★☆ |
```

*Each product name should be an affiliate link once Amazon Associates is active.*
*Use `rel="nofollow sponsored"` and `target="_blank"` on all affiliate links.*

---

### TOP PICKS (one H2 per product — 5 picks minimum)

Repeat this block for each product:

```markdown
## 1. {PRODUCT NAME} — Best Overall

{IMAGE PLACEHOLDER or product image}

**Our Rating:** ★★★★★ (X/5)  
**Price:** ${PRICE} — [Check current price on Amazon ↗](#)  
**Best for:** {one-line description of ideal buyer}

{2–3 sentence overview of why this product made the list. Lead with the
most compelling benefit. Be specific — mention the feature that makes
it stand out from competitors.}

### What We Like
- {Specific benefit with detail}
- {Specific benefit with detail}
- {Specific benefit with detail}
- {Specific benefit with detail}

### What Could Be Better
- {Honest limitation — be specific, not vague}
- {Honest limitation}

### Specs at a Glance

| Spec | Value |
|---|---|
| {KEY SPEC 1} | {VALUE} |
| {KEY SPEC 2} | {VALUE} |
| {KEY SPEC 3} | {VALUE} |
| {KEY SPEC 4} | {VALUE} |
| Warranty | {VALUE} |

**Bottom line:** {1–2 sentence verdict. Who should buy this and why.}

[View on Amazon →](#) *(affiliate link)*
```

---

### COMPARISON TABLE

**Purpose:** Lets readers compare all picks side by side. Often ranks well on its own.

```markdown
## Full Comparison Table

| Product | Price | {SPEC 1} | {SPEC 2} | {SPEC 3} | Best For |
|---|---|---|---|---|---|
| {PRODUCT 1} | ${PRICE} | {VALUE} | {VALUE} | {VALUE} | Best Overall |
| {PRODUCT 2} | ${PRICE} | {VALUE} | {VALUE} | {VALUE} | Best Budget |
| {PRODUCT 3} | ${PRICE} | {VALUE} | {VALUE} | {VALUE} | Best Premium |
| {PRODUCT 4} | ${PRICE} | {VALUE} | {VALUE} | {VALUE} | Best {USE CASE} |
| {PRODUCT 5} | ${PRICE} | {VALUE} | {VALUE} | {VALUE} | Best Compact |
```

*Choose specs that matter most for this category. For electronics: size, battery, specs. For furniture: dimensions, weight capacity, material.*

---

### BUYING GUIDE (400–600 words)

**Purpose:** Capture informational intent. Helps readers who aren't ready to buy yet. Builds authority and internal linking opportunities.

```markdown
## How to Choose the Best {PRODUCT CATEGORY}: What to Look For

Before you buy, here's what actually matters:

### {FACTOR 1: Most Important}
{2–3 sentences explaining this factor and why it matters. Give specific 
numbers or ranges where possible. Example: "Height range matters if you're 
taller than 6'2" — look for a maximum height of at least 48 inches."}

### {FACTOR 2}
{2–3 sentences}

### {FACTOR 3}
{2–3 sentences}

### {FACTOR 4}
{2–3 sentences}

### {FACTOR 5: Budget Guidance}
{Explain the price tiers: what you get at each budget level.
Example: "Under $200: expect basic features. $200–$400: the sweet spot for 
most home users. $400+: professional features most people don't need."}

### What to Avoid
{Common mistakes buyers make. Specific and actionable.}
```

---

### FAQ (5–8 questions)

**Purpose:** Targets "People Also Ask" boxes and voice search. Each question should be a real search query.

```markdown
## Frequently Asked Questions

### {QUESTION matching a real search query}?
{2–4 sentence answer. Be direct — answer in the first sentence.}

### {QUESTION}?
{Answer}

### {QUESTION}?
{Answer}

### {QUESTION}?
{Answer}

### {QUESTION}?
{Answer}
```

**FAQ question formulas that perform well:**
- "What is the best {product} for {use case}?"
- "How much should I spend on a {product}?"
- "What is the difference between {option A} and {option B}?"
- "Is {product} worth it?"
- "How long do {products} last?"
- "What {product} do {experts / professionals} recommend?"

---

### FINAL RECOMMENDATION (100–150 words)

```markdown
## Our Final Recommendation

{Restate the top pick and runner-up. Explain who each is best for in 
plain language. End with a direct CTA.}

If you want the best overall option without overthinking it, go with the 
**{PRODUCT 1}** — it {REASON IN ONE CLAUSE}.

If budget is tight, the **{PRODUCT 2}** delivers {KEY BENEFIT} at a 
significantly lower price.

And if {SPECIFIC NEED}, the **{PRODUCT 3}** is purpose-built for that.

[See {PRODUCT 1} on Amazon →](#) *(affiliate link)*

*Prices checked {MONTH YEAR}. Affiliate links help support this site at 
no extra cost to you.*
```

---

### INTERNAL LINKS (add naturally throughout — minimum 3)

Every guide must link to:
- Its parent category page (`/categories/{category-slug}`)
- At least 2 related guides from the same or adjacent categories
- Affiliate disclosure (`/legal/affiliate-disclosure`) — via the affiliate notice at top

**Internal link placement rules:**
- Link naturally within body copy when mentioning a related topic
- Add a "Related Guides" section at the bottom if natural in-text links are sparse
- Never force links — only link when genuinely relevant

```markdown
## Related Guides

- [Best {RELATED GUIDE 1}](/guides/{slug})
- [Best {RELATED GUIDE 2}](/guides/{slug})
- [More {CATEGORY} guides →](/categories/{category-slug})
```

---

### SCHEMA MARKUP (for HTML `<head>` — copy into guide page JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{SEO TITLE}",
  "description": "{META DESCRIPTION}",
  "author": {
    "@type": "Organization",
    "name": "Smart Consumer HQ"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Smart Consumer HQ",
    "url": "https://smartconsumerhq.com"
  },
  "datePublished": "{YYYY-MM-DD}",
  "dateModified": "{YYYY-MM-DD}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://smartconsumerhq.com/guides/{SLUG}"
  }
}
```

---

## PRE-PUBLISH CHECKLIST

Run this before every guide goes live:

**SEO**
- [ ] `<title>` tag under 60 chars, includes primary keyword
- [ ] Meta description 140–160 chars, includes keyword, has soft CTA
- [ ] Canonical URL set correctly
- [ ] H1 contains primary keyword
- [ ] Primary keyword in first 100 words of body copy
- [ ] At least 3 H2 subheadings
- [ ] Schema.org JSON-LD present and valid
- [ ] At least 3 internal links

**Affiliate Compliance**
- [ ] Affiliate disclosure notice above the fold
- [ ] All affiliate links have `rel="nofollow sponsored"`
- [ ] All affiliate links open in new tab (`target="_blank"`)
- [ ] No affiliate links before Amazon Associates is approved

**Content Quality**
- [ ] 1,500+ words (aim for 1,800–2,500)
- [ ] At least 5 products reviewed
- [ ] Comparison table present
- [ ] FAQ section with 5+ questions
- [ ] Word count verified
- [ ] No placeholder text remaining
- [ ] Final recommendation section present

**Technical**
- [ ] Relative paths correct: `../styles.css`, `../components.js`, `../script.js`
- [ ] `components.js` loads before `script.js`
- [ ] Breadcrumb nav present
- [ ] Page renders correctly in browser before publishing

**After Publishing**
- [ ] Add URL to `sitemap.xml`
- [ ] Link to this guide from parent category page
- [ ] Link to this guide from at least one other relevant guide
- [ ] Update `docs/01_product/PROJECT_STATUS.md`
- [ ] Update `docs/01_product/TODO.md`
- [ ] Commit specific files and push to GitHub
- [ ] Write session log entry

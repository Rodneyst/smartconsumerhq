# Content — Smart Consumer HQ

This directory is the **content workspace**. It contains article drafts, article ideas, and writing templates. Files here are **not served as web pages** — they are working documents used during the content creation process.

Published articles live in `guides/` as HTML files.

---

## Directory Structure

```
content/
├── templates/
│   └── buying-guide-template.md    # Master template for all buying guides
├── article_ideas/
│   └── master-article-backlog.csv  # 100 article ideas with priority and metadata
└── articles/
    └── {slug}.md                   # Article drafts (one per article, markdown)
```

---

## How to Use This Directory

### Starting a new article

1. Pick an idea from `article_ideas/master-article-backlog.csv` (sort by Priority: High)
2. Copy `templates/buying-guide-template.md` to `articles/{slug}.md`
3. Fill in the template — complete draft in markdown before converting to HTML
4. Follow the full workflow in `tools/content-workflow.md`

### Article draft file naming

Use the guide's URL slug:
- Guide URL: `/guides/best-home-gym-equipment`
- Draft file: `content/articles/best-home-gym-equipment.md`

### Draft status tracking

Each draft file has a frontmatter `status` field:

| Status | Meaning |
|---|---|
| `draft` | In progress — not ready for review |
| `review` | Draft complete — running pre-publish checklist |
| `ready` | Checklist passed — ready to convert to HTML |
| `published` | Live on site — HTML version exists in `guides/` |

---

## Content System Documentation

Full documentation: `docs/02_development/CONTENT_SYSTEM.md`  
Full workflow: `tools/content-workflow.md`

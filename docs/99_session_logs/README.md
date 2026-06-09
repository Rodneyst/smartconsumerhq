# Session Logs — Smart Consumer HQ

This directory contains chronological session logs for every work session performed on this project. Session logs are the primary continuity mechanism between AI agent sessions.

---

## Purpose

Session logs ensure that any AI agent (or human collaborator) picking up work on this project can immediately understand:

- What was done in the most recent session
- What the current project state is
- What outstanding tasks exist
- What to do next

---

## Required Format

Every session log file must be named:

```
YYYY-MM-DD-session-log.md
```

If multiple sessions occur on the same day, append a suffix:

```
YYYY-MM-DD-session-log-2.md
YYYY-MM-DD-session-log-3.md
```

---

## Required Fields Per Entry

Each session log entry must include all of the following sections:

```markdown
## Entry N

**Timestamp:** YYYY-MM-DD HH:MM (timezone)

**Session Objective:**
One sentence describing what this session was meant to accomplish.

**Prompt Summary:**
Brief summary of the prompt or instructions received.

---

### Work Completed
Summary of everything done.

### Files Created
List of every file created, with file type.

### Files Modified
List of every file modified, with a description of the change.

### Files Moved
List of every file moved, from → to.

### Files Deleted
List of every file deleted.

### Commands Executed
Shell commands run (git, curl, etc.).

### Git Status Summary
State of the working tree at session end.

### Git Commits Created
Table: hash, message.

### GitHub Pushes Completed
Number and status of pushes.

### Cloudflare Deployments Completed
Number and status of deployments triggered.

### SEO Changes
Any changes affecting crawlability, indexability, or structured data.

### Content Changes
New or modified content (guide copy, category descriptions, etc.).

### Architecture Decisions
Any decision affecting the site structure, deployment, or file organisation.

### Known Issues
Issues that exist at session end.

### Outstanding Tasks
Remaining tasks not completed this session.

### Recommended Next Prompt
The exact prompt a future AI agent should receive to continue work.
```

---

## Rules

1. **Never overwrite a prior entry.** Always create a new file or append.
2. **Every session that changes the project must generate a log entry.** Documentation changes count. Content changes count. Config changes count.
3. **Log entries are append-only.** The historical record must remain intact.
4. **Date format is ISO 8601** (`YYYY-MM-DD`). Always use absolute dates — never relative ("yesterday", "last week").

---

## AI Agent Startup Procedure

Before performing any work on this project, an AI agent must:

1. Read the most recent session log in this directory
2. Read `docs/01_product/PROJECT_STATUS.md`
3. Read `docs/01_product/ROADMAP.md`
4. Read `docs/01_product/TODO.md`
5. Read `docs/02_development/AI_HANDOFF.md`
6. Summarize the current project state and confirm understanding before making changes

---

## AI Agent Shutdown Procedure

Before completing any work session, an AI agent must:

1. Write a session log entry for this session
2. Update `docs/01_product/PROJECT_STATUS.md` if project status changed
3. Update `docs/01_product/TODO.md` if tasks changed
4. Update `docs/01_product/ROADMAP.md` if the roadmap changed
5. Update `docs/02_development/AI_HANDOFF.md` if architecture or workflow changed
6. **Copy the session log to local Mac backup:** `~/Documents/SmartConsumerHQ/session-logs/`
   ```bash
   cp docs/99_session_logs/YYYY-MM-DD-session-log.md ~/Documents/SmartConsumerHQ/session-logs/
   ```
7. Commit all documentation updates
8. Push to GitHub
9. Provide a complete session summary in the conversation

---

## Project Handoff Process

To hand off this project to a new AI agent or developer:

1. Point them to this directory
2. Have them read the most recent session log first
3. Then `AI_HANDOFF.md` → `PROJECT_STATUS.md` → `ROADMAP.md` → `TODO.md`
4. The startup procedure above ensures they have full context before touching anything

---

## Session Log Index

| Date | Key Work |
|---|---|
| [2026-06-08](2026-06-08-session-log.md) | Initial setup: SSH auth, category page fix, missing pages, documentation suite, sitemap/robots |
| [2026-06-09](2026-06-09-session-log.md) | Documentation framework: docs/ structure, session log standard, AI handoff, README update |

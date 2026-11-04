---
name: domain-research
description: Use before building anything in a domain you have not worked in (banking, health, legal, etc.).
---

# Domain research
## Rules
Before writing code, spend focused time answering:
1. What are the non-negotiables (regulation, audit, data retention, security)?
2. What are the core entities and their invariants?
3. What failure modes are unacceptable (double payment, lost record)?
4. What terms does the domain use? Build a short glossary.
Write the answers into a `domains/<name>` skill so the next project starts faster.
## Example
Banking: audit logs must be append-only before any CRUD screen is built.

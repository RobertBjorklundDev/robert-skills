# Changes (from chats with NOBA-Bank Code Assignment Helper, CGM Case Helper, Code Test Helper)

- paths/prototype/SKILL.md: rewritten as a flow (intake, tickets, build, hand-in, interview prep); adds 500-line files, less clutter, one ticket at a time, no name in output. Source: NOBA t3u, t15u, t60u; CGM "Robert review" output.
- paths/prototype/intake/SKILL.md (new): find core rules, hunt deliberate ambiguities, domain research, hidden test-data rules, time tally. Source: NOBA t5u, t6u, t147u, t159u; CGM log-keeper two-hour mark, nurse vs official sources.
- paths/prototype/testing/SKILL.md: black-box TDD, deterministic test data (no runtime random), AAA comments, weak-test check, failing case shown in output. Source: NOBA t3u, t62u, t75u-t76u, t156u, t164u; CGM display-output request.
- paths/prototype/architecture/SKILL.md: DB per service with own users, middleware for user and correlation ID, enum for small sets, fail-fast + shared Retry-After timestamp, replica-safe state, diagram. Source: NOBA t16u-t19u, t63u, t92u-t93u, t127u, t157u.
- paths/prototype/dotnet/SKILL.md: filled the draft with conventions shown in the .NET ledger case (visible transactions, FOR UPDATE, DI request context, WebApplicationFactory + Testcontainers, no runtime-random data helpers). Source: NOBA t61u-t63u, t163u, t165u-t167u.
- paths/prototype/hand-in/SKILL.md (new): cleanup PR, rule-to-test map, README with interpretations and limits, consistent docs, honest failures. Source: NOBA t145u-t147u, t160u; CGM deliverables, honest-failure discussion, interview critiques.
- paths/prototype/interview-prep/SKILL.md (new): walkthrough, weak spots, critiques, diagram, competency prep. Source: NOBA t156u-t161u; CGM t6u, shadow-mode question.
- paths/prototype/ai-work-log/SKILL.md (new): reasoned AI log and time tally. Source: CGM Work Log Keeper setup and /workspace/cgm-case/ai-work-log.md reflection.
- core/about-robert/SKILL.md: added real gaps (banking, clinical), working style. Source: NOBA t3u, t15u, t166u; CGM rules research; Robert's interview feedback in Grok Bot chat.
- domains/banking/SKILL.md: added audit outbox, one record per booking, key ownership, screening request IDs, all-or-nothing. Source: NOBA t6u, t92u; interview feedback on immutable audit logs.
- paths/prototype/typescript/SKILL.md: unchanged (no new TypeScript evidence in these chats).
- Code Test Helper: only a live C# quiz and small exercises; no durable preferences extracted.

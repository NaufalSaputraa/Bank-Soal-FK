---
name: context-compression
description: Skill for token optimization and caveman mode communication.
---

# Context Compression & Efficiency Skill — BankSoal FK

Use this skill to keep AI context window efficient, concise, and focused on essential technical substance.

## Rules & Patterns

1. **Terse Communication**:
   - Drop filler, pleasantries, hedging, and articles where appropriate.
   - Use `[thing] [action] [reason]. [next step].` pattern.
2. **Context Preservation**:
   - Avoid reading full 700+ line files when investigating specific lines.
   - Use grep search or targeted `StartLine`/`EndLine` reads.
   - Write output/reports directly into `.md` files instead of long inline responses.
3. **Data Processing**:
   - Program batch operations and data validation via Node.js scripts instead of dumping massive raw JSON arrays into chat context.

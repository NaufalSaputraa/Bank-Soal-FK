---
name: content-validator
description: Skill for validating data structures, question schemas, and array integrity in BankSoal FK.
---

# Content & Data Validator Skill — BankSoal FK

Use this skill whenever you add new questions, modify `app/data.js`, or verify dataset consistency across BankSoal FK.

## Protocol

1. **Syntax Check & Execution**:
   Always execute the standalone validator:
   ```bash
   node .agent/scripts/validate_data.js
   ```

2. **Schema Verification Checklist**:
   - `DB.sources` array is present and non-empty.
   - Each `Source` has valid `id`, `name`, `fileName`, `color`, `icon`, `desc`.
   - Each `Concept` inside `concepts` has valid `id`, `name`, `definition`, `keyPoints`.
   - Each `Question` inside `questions` uses `q(text, answerIdx, opts, tags, explanation)`:
     - `text` is a non-empty string.
     - `answerIdx` is valid integer within `opts` bounds.
     - `opts` contains only strings.
     - `explanation` is optional but recommended for complex medical questions.
   - Each `Flashcard` inside `flashcards` uses `fc(front, back, tags)`:
     - `front` and `back` are valid non-empty strings.

3. **Flat List Integrity**:
   Verify `DB.allQuestions` and `DB.allFlashcards` are properly populated at boot time:
   - `q.sourceId` and `q.conceptId` attached correctly.
   - Total question count matches sum of individual concept questions.

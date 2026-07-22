# Workflow: Add New Study Source / PDF Block

Use this procedure when integrating a new PDF source or study topic into `BankSoal FK`.

## Steps

1. **Extract PDF Data**:
   - Extract raw question & flashcard text into temporary file.
   - Format questions into `q("text", answerIdx, ["A", "B", "C", "D"], [], "explanation")`.
   - Format flashcards into `fc("front", "back")`.

2. **Add Source to `app/data.js`**:
   - Append new object to `DB.sources` array:
     ```javascript
     DB.sources.push({
       id: "file-X-name",
       name: "Topic Name",
       short: "File X",
       fileName: "original.pdf",
       icon: "🫁", color: "#...",
       desc: "Description...",
       concepts: [
         {
           id: "concept-id",
           name: "Concept Name",
           definition: "...",
           keyPoints: ["..."],
           questions: [ q(...) ],
           flashcards: [ fc(...) ]
         }
       ]
     });
     ```

3. **Validate Data Integrity**:
   - Run Node.js validator:
     ```bash
     node .agent/scripts/validate_data.js
     ```
   - Confirm output status is `✅ PASSED`.

4. **Test & Update Cache**:
   - Open `index.html` in browser to verify rendering.
   - Update `CACHE_NAME` version in `app/sw.js`.

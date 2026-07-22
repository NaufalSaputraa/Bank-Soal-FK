# BankSoal FK — Development & Coding Rules

> Strictly enforce these rules when adding features, modifying code, or expanding content in BankSoal FK.

---

## 📌 1. Stack & Zero-Build Mandate

1. **No External Dependencies / Frameworks**:
   - Do NOT add `package.json`, React, Vue, Svelte, Tailwind, or build tools (Vite, Webpack, Babel).
   - The application MUST run directly by opening `index.html` in a web browser.
2. **Vanilla Standard**:
   - JavaScript must use clean ES6+ standard without experimental polyfills.
   - CSS must use standard CSS3 custom properties (variables) defined in `app/style.css`.

---

## 📌 2. Data Structure & Validation Rules (`app/data.js`)

1. **Global DB Constant**:
   - `const DB = { sources: [] };` at top of `app/data.js` MUST NOT be changed to `let` or `var`.
2. **Question Helper Signature**:
   ```js
   q(text, answerIdx, opts, tags = [], explanation = "")
   ```
   - `opts` MUST be a flat array of strings (`["A", "B", "C", "D"]`). NEVER pass nested arrays.
   - `answerIdx` MUST be 0-based and within bounds `0 <= answerIdx < opts.length`.
   - All `q(...)` calls within a concept MUST be inside a SINGLE `questions: [...]` array, separated by commas. Do NOT split with `],[`.
3. **Flashcard Helper Signature**:
   ```js
   fc(front, back, tags = [])
   ```
   - `front` and `back` MUST be non-empty strings.
4. **Validation Execution**:
   - BEFORE committing any data addition or edit to `app/data.js`, run:
     ```bash
     node .agent/scripts/validate_data.js
     ```
   - Ensure output ends with `✅ PASSED`.

---

## 📌 3. Architecture & Code Modification Rules (`app/app.js`)

1. **Event Delegation Pattern**:
   - All interactive UI actions (clicks, navigation, quiz selections, flashcard flips) MUST be handled via event delegation in the SINGLE `document.addEventListener('click', ...)` handler.
   - Avoid inline `onclick="..."` HTML attributes.
2. **State Management (`S`)**:
   - LocalStorage key `bs_prog` MUST be preserved for progress state. Do NOT change this key without writing a migration strategy.
   - Do NOT mutate `DB.sources` directly during runtime; treat `DB` as an immutable read-only knowledge base after initialization.
3. **UI Rendering**:
   - Dynamic UI must be rendered using template literals into `#pageContent` or targeted sub-containers.

---

## 📌 4. Offline & PWA Safety (`app/sw.js`)

1. When adding new asset files or revising existing JS/CSS code, increment the `CACHE_NAME` version string in `app/sw.js` to ensure clients fetch updated assets.

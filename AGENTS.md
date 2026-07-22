# BankSoal FK — Repo Guide & Agent Specification

> Primary Agent Entry Point for BankSoal FK (Medical Question Bank PWA)

---

## 📋 Overview & Architecture

BankSoal FK is a zero-build, offline-first Progressive Web Application (PWA) built for medical students.

- **Stack**: Pure HTML5, Vanilla CSS3 (Custom Properties & Glassmorphism), Vanilla JavaScript (ES6+). Zero build tools, zero dependencies.
- **Detailed Specification**: See [.agent/ARCHITECTURE.md](file:///d:/Coding/BankSoal/.agent/ARCHITECTURE.md)
- **Rules & Constraints**: See [.agent/rules/BANKSOAL_RULES.md](file:///d:/Coding/BankSoal/.agent/rules/BANKSOAL_RULES.md)

---

## 📁 Project Structure

```
index.html        ← Shell loader & layout (Sidebar, Main, Header)
app/
  style.css       ← CSS Design system (Glassmorphism, Dark mode, Animations, Responsive)
  data.js         ← Knowledge base (5 sources, 12 concepts, 253 questions, 98 flashcards)
  app.js          ← Application logic (State S, View router, Single event delegation listener)
  manifest.json   ← PWA Web App Manifest
  sw.js           ← Service Worker (Offline caching strategy)
.agent/           ← Agent System & Tooling imported & adapted from ag-kit
  ARCHITECTURE.md # Full architecture specification
  rules/          # Development & Data rules
  skills/         # Domain skills (content-validator, frontend-design, context-compression)
  workflows/      # Procedures (add-blok, verify, ui-ux-pro-max)
  scripts/        # Standalone Node.js data validator (`validate_data.js`)
```

---

## 🚀 How to Run & Deploy

- **Run Locally**: Open `index.html` directly in browser (no local server required).
- **Deployment**: Deployed via GitHub Pages from `main` branch root directory (`https://naufalsaputraa.github.io/Bank-Soal-FK/`).

---

## ⚙️ Key Architectural Concepts

1. **Knowledge Base (`app/data.js`)**:
   - Organized as: `DB.sources[]` → `concepts[]` → `questions[]` & `flashcards[]`.
   - `DB.allQuestions` and `DB.allFlashcards` are populated automatically on boot.
2. **State & Event Delegation (`app/app.js`)**:
   - `S` object stores runtime state (current view, active quiz/tryout/flashcard state, progress).
   - Progress saved in `localStorage` under key `bs_prog`.
   - **Single Event Delegation**: All click interactions handled via ONE `document.addEventListener('click', ...)` listener.
3. **PWA & Service Worker (`app/sw.js`)**:
   - Offline-first cache. Increment `CACHE_NAME` version whenever static assets change.

---

## 🧪 Data Validation

Run the standalone validator script before committing any changes:

```bash
node .agent/scripts/validate_data.js
```

---

## 📦 Agent Tooling & Workflows

- **Data Validation**: [.agent/skills/content-validator/SKILL.md](file:///d:/Coding/BankSoal/.agent/skills/content-validator/SKILL.md)
- **Frontend Design System**: [.agent/skills/frontend-design/SKILL.md](file:///d:/Coding/BankSoal/.agent/skills/frontend-design/SKILL.md)
- **Context Compression**: [.agent/skills/context-compression/SKILL.md](file:///d:/Coding/BankSoal/.agent/skills/context-compression/SKILL.md)
- **Workflow - Add Block**: [.agent/workflows/add-blok.md](file:///d:/Coding/BankSoal/.agent/workflows/add-blok.md)
- **Workflow - Verify**: [.agent/workflows/verify.md](file:///d:/Coding/BankSoal/.agent/workflows/verify.md)
- **Workflow - UI Audit**: [.agent/workflows/ui-ux-pro-max.md](file:///d:/Coding/BankSoal/.agent/workflows/ui-ux-pro-max.md)

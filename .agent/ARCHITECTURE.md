# BankSoal FK — System Architecture & Repo Specification

> **Aplikasi Web Bank Soal & Material Belajar Kedokteran (PWA)**  
> *Zero-build stack, high-performance vanilla JS, offline-first PWA, glassmorphic UI.*

---

## 📐 Project Overview

BankSoal FK adalah platform web progresif (PWA) untuk mahasiswa kedokteran yang menyediakan bank soal latihan, materi per konsep, kuis cepat, simulasi Tryout CBT, dan flashcard interaktif.

- **Stack**: HTML5, Vanilla CSS3 (Custom Properties & Glassmorphism), Modern JavaScript (ES6+).
- **Tooling**: Zero build tools, zero npm package overhead, zero frameworks. Runs directly in browser or via GitHub Pages.
- **Data Architecture**: Data-driven client runtime. Seluruh knowledge base tersimpan di `app/data.js` dan di-render dinamis via JS template literals.
- **Offline Capabilities**: Full PWA dengan service worker caching di `app/sw.js` & manifest di `app/manifest.json`.

---

## 📁 Repository Structure

```
d:\Coding\BankSoal\
├── index.html                   # HTML Shell Loader & Main App Layout
├── AGENTS.md                    # Agent Entry Point & Instructions
├── app/
│   ├── style.css                # CSS Design System (Tokens, Layout, Components, Animations)
│   ├── data.js                  # Central Knowledge Base (DB object, Sources, Concepts, Questions, FC)
│   ├── app.js                   # Application Controller (Router, State S, Event Delegation, Renderers)
│   ├── manifest.json            # PWA Web App Manifest
│   └── sw.js                    # Service Worker Offline Cache Handler
└── .agent/
    ├── ARCHITECTURE.md          # Full Architectural Specification (This File)
    ├── rules/
    │   └── BANKSOAL_RULES.md    # Development & Data Structuring Rules
    ├── skills/
    │   ├── content-validator/   # Skill for Data & Schema Validation
    │   ├── frontend-design/     # Skill for UI/UX & Glassmorphic CSS Standards
    │   └── context-compression/ # Skill for Token Saving & Compressed Communication
    ├── workflows/
    │   ├── add-blok.md          # Workflow: Adding New PDF Source / Study Block
    │   ├── verify.md            # Workflow: Validation & Verification Process
    │   └── ui-ux-pro-max.md     # Workflow: UI/UX Audit & Design Enhancement
    └── scripts/
        └── validate_data.js     # Standalone Node.js Data Integrity Validator
```

---

## 🧬 Data Model (`app/data.js`)

Data diorganisir berdasarkan **File Sumber PDF (Source)** → **Konsep (Concept)** → **Soal (Questions)** & **Flashcards**.

```typescript
interface DataBase {
  sources: Source[];
  allQuestions: Question[];  // Automatically populated at boot
  allFlashcards: Flashcard[]; // Automatically populated at boot
}

interface Source {
  id: string;        // e.g. "file-1-mikro"
  name: string;      // e.g. "PR + Mikrobiologi"
  short: string;     // e.g. "File 1"
  fileName: string;  // e.g. "2026 PR+MikrobFN.pdf"
  icon: string;      // Emoji e.g. "🦠"
  color: string;     // HSL or Hex e.g. "#b08a3e"
  desc: string;      // Brief overview
  concepts: Concept[];
}

interface Concept {
  id: string;          // e.g. "flora-normal"
  name: string;        // e.g. "Flora Normal Tubuh"
  definition: string;  // Core definition
  keyPoints: string[]; // Key medical points to memorize
  questions: Question[];
  flashcards: Flashcard[];
}

interface Question {
  text: string;           // Question body string
  answerIdx: number;      // 0-based index targeting correct item in opts
  opts: string[];         // Array of choice strings (e.g. ["A", "B", "C", "D"])
  tags?: string[];        // Optional tags
  explanation?: string;  // Detailed answer rationale
  // Populated dynamically:
  sourceId?: string;
  sourceName?: string;
  conceptId?: string;
  conceptName?: string;
}

interface Flashcard {
  front: string; // Question / Prompt
  back: string;  // Answer / Explanation
  tags?: string[];
  // Populated dynamically:
  sourceId?: string;
  sourceName?: string;
  conceptId?: string;
  conceptName?: string;
}
```

### Constructors Helpers in `app/data.js`
- `q(text, answerIdx, opts, tags = [], explanation = "")`
- `fc(front, back, tags = [])`

---

## ⚡ Application Controller & State (`app/app.js`)

### Global State `S`
```javascript
const S = {
  view: 'home', // 'home' | 'materi' | 'soal' | 'kuis' | 'tryout' | 'flashcard' | 'cari'
  selectedSource: null,
  selectedConcept: null,
  quiz: { active: false, questions: [], idx: 0, score: 0, answers: [], done: false },
  tryout: { active: false, questions: [], idx: 0, score: 0, answers: [], timeLeft: 0, done: false },
  flashcard: { active: false, cards: [], idx: 0 },
  progress: JSON.parse(localStorage.getItem('bs_prog') || '{}'),
  qShuffle: {} // Caches randomized option order per question key per session
};
```

### Key Architectural Patterns
1. **Single Event Delegation**: Seluruh event click ditangani oleh SATU listener utama di `document.addEventListener('click', ...)` untuk performa maksimal dan mempermudah render ulang DOM.
2. **Answer Option Shuffling (`qShuffle`)**: Pilihan jawaban diacak per sesi tanpa merusak `answerIdx` asli melalui mapping indeks.
3. **Progress Persistence**: Status konsep yang telah dipelajari disimpan di `localStorage` dengan key `bs_prog`.
4. **Pure Template Literals**: Seluruh UI views di-render ulang secara deklaratif menggunakan string template literal ke `#pageContent`.

---

## 🎨 UI & Styling System (`app/style.css`)

- **Color System**: Modern dark theme berbasis HSL CSS Custom Properties.
- **Glassmorphism**: Backdrop blur filter, translucent cards, subtle border gradients.
- **Typography**: Google Fonts Inter (sans-serif) & JetBrains Mono (monospace), dengan system font fallbacks untuk penggunaan offline.
- **Responsiveness**: Mobile-first grid & flex layouts dengan sidebar drawer collapsible di screen width <= 768px.

---

## 🛠️ Verification & Quality Assurance

- Validasi data dilakukan tanpa framework test via script Node.js:
  ```bash
  node .agent/scripts/validate_data.js
  ```
- Script memeriksa:
  - Syntax error & runtime instantiation `app/data.js`.
  - Integrity array `DB.sources`, `concepts`, `questions`, dan `flashcards`.
  - Range `answerIdx` vs `opts.length`.
  - Tipe data string pada opsi dan teks soal.
  - Peringatan soal duplikat.

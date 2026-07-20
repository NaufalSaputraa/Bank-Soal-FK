# BankSoal FK — Repo Guide

## Project structure
```
index.html     ← SPA utama (semua CSS + JS inline)
app/data.js    ← Knowledge base (topik, konsep, soal, flashcard)
```
No build step, no package.json, no frameworks.

## How to run
Open `index.html` in browser langsung jalan. Deploy via GitHub Pages (branch `main`, root folder).

## Architecture
- `DB` global object di `app/data.js` → 6 topik, 23 konsep, 143 soal, 102 flashcard
- `S` global state di `index.html` → progress, quiz, tryout, flashcard
- Progress disimpan di `localStorage` key `bs_prog`
- Semua render pakai template literal + innerHTML (no DOM diffing)

## Adding new content (blok baru)
1. Buka `app/data.js`
2. Tambah objek ke array `DB.topics`:
   ```js
   DB.topics.push({
     id: "respirasi",
     name: "Respirasi",
     icon: "🫁",
     color: "#...",
     description: "...",
     subtopics: [
       {
         id: "respirasi-paru",
         name: "Paru",
         concepts: [
           {
             id: "alveolus",
             name: "Alveolus",
             definition: "...",
             keyPoints: ["..."],
             related: ["..."],
             questions: [q("soal", 0, ["A","B","C","D"], ["tag1","tag2"])],
             flashcards: [fc("depan", "belakang")]
           }
         ]
       }
     ]
   });
   ```
3. `DB.allQuestions` dan `DB.allFlashcards` otomatis terisi (dihitung di bottom data.js)
4. `git add -A && git commit && git push` → Pages auto-deploy

## Data validation rules
- `q(text, answerIdx, opts, tags)` → `opts` harus array of strings, jangan nested array
- `answerIdx` harus 0-based, valid untuk panjang `opts`
- `fc(front, back, tags)` → front & back harus string
- Duplicate question text diperbolehkan (beda topik bisa mirip)

## Key gotchas
- `const DB` di data.js — jangan ganti jadi `let`/`var`
- LocalStorage key: `bs_prog` — jangan diubah tanpa migrasi
- Google Fonts (Inter, JetBrains Mono) — fallback ke system font jika offline
- GitHub Pages URL: `https://naufalsaputraa.github.io/Bank-Soal-FK/`
- Branch: `main` default, Pages deploy dari branch `main` folder `/ (root)`
- Tidak ada test, lint, atau typecheck — validasi manual via `node -e "new Function(content)"`

## Cleanup
- File ekstrak PDF (`.txt`) di `data/` dan `tmp_pdf/` bisa dihapus setelah data masuk
- Jangan commit PDF asli ke repo

## For future blok
Cukup edit `app/data.js` → tambah topik baru. Aplikasi otomatis handle tanpa perubahan lain.

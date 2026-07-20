# BankSoal FK — Repo Guide

## Project structure
```
index.html        ← Loader (46 lines), load app/style.css + app/data.js + app/app.js
app/
  style.css       ← CSS (styling, responsif, aksesibilitas)
  data.js         ← Knowledge base (5 file sumber, 30+ konsep, 199+ soal, 98+ flashcard)
  app.js          ← Aplikasi logic (event delegation, render, routing)
  manifest.json   ← PWA manifest
  sw.js           ← Service worker (cache offline)
```
No build step, no package.json, no frameworks.

## How to run
Open `index.html` in browser langsung jalan. Deploy via GitHub Pages (branch `main`, root folder).

## Architecture
- **Data per file sumber** — 5 file PDF asli sebagai grup utama (bukan per topik)
  - File 1: PR + Mikrobiologi
  - File 2: MTB UB PAT FN MUSKULOSKELETAL 1 (Anatomi + Histologi)
  - File 3: PAT MUSKULO 2
  - File 4: MARTABAK UB SUMATIF 2
  - File 5: MTB UB 2 FNMS CALVARIA
- `DB` global object di `app/data.js`: `DB.sources[]` → tiap source punya `concepts[]`
- `S` global state di `app/app.js` → progress, quiz, tryout, flashcard
- Progress disimpan di `localStorage` key `bs_prog`
- Semua render pakai template literal + innerHTML (no DOM diffing)
- Event delegation: SATU click listener di `document`, no inline onclick
- Pilihan jawaban diacak per sesi (disimpan di `S.qShuffle`)

## Adding new content (blok baru)
1. Buka `app/data.js`
2. Tambah objek ke array `DB.sources`:
   ```js
   DB.sources.push({
     id: "file-6-respirasi",
     name: "Respirasi",
     short: "File 6",
     fileName: "respirasi.pdf",
     icon: "🫁", color: "#...",
     desc: "...",
     concepts: [{
       id: "paru",
       name: "Paru",
       definition: "...",
       keyPoints: ["..."],
       questions: [q("soal", 0, ["A","B","C","D"])],
       flashcards: [fc("depan", "belakang")]
     }]
   });
   ```
3. `DB.allQuestions` dan `DB.allFlashcards` otomatis terisi (dihitung di bottom data.js)
4. `git add -A && git commit && git push` → Pages auto-deploy

## Data validation rules
- `q(text, answerIdx, opts, tags)` → `opts` harus array of strings, jangan nested array. Semua q() dalam SATU array `questions: [...]`, jangan dipisah dengan `],[`
- `answerIdx` harus 0-based, valid untuk panjang `opts`
- `fc(front, back, tags)` → front & back harus string
- Duplicate question text diperbolehkan (beda file bisa mirip)

## Key gotchas
- `const DB` di data.js — jangan ganti jadi `let`/`var`
- LocalStorage key: `bs_prog` — jangan diubah tanpa migrasi
- Google Fonts (Inter, JetBrains Mono) — fallback ke system font jika offline
- GitHub Pages URL: `https://naufalsaputraa.github.io/Bank-Soal-FK/`
- Branch: `main` default, Pages deploy dari branch `main` folder `/ (root)`
- Tidak ada test, lint, atau typecheck — validasi manual via `node -e "new Function(fs.readFileSync('app/data.js','utf8'))"`
- Service worker cache di `app/sw.js` — perlu update versi (`CACHE` variable) kalau ganti konten

## Cleanup
- File ekstrak PDF (`.txt`) di `data/` dan `tmp_pdf/` bisa dihapus setelah data masuk
- Jangan commit PDF asli ke repo

## For future blok
Cukup edit `app/data.js` → tambah source baru. Aplikasi otomatis handle tanpa perubahan lain.

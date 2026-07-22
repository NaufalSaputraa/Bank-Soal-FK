const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../app/data.js');

try {
  const code = fs.readFileSync(dataPath, 'utf8');
  eval(code + '; globalThis.DB = DB;');
} catch (err) {
  console.error('❌ SYNTAX / RUNTIME ERROR IN app/data.js:');
  console.error(err);
  process.exit(1);
}

const DB = globalThis.DB;
let errors = 0;
let warnings = 0;

if (!DB || !Array.isArray(DB.sources)) {
  console.error('❌ FATAL: DB or DB.sources is missing');
  process.exit(1);
}

console.log(`🔍 Validating BankSoal Data (${DB.sources.length} sources found)...`);

let totalConcepts = 0;
let totalQuestions = 0;
let totalFlashcards = 0;
const questionTexts = new Set();

DB.sources.forEach((src, sIdx) => {
  if (!src.id || !src.name || !src.fileName) {
    console.error(`❌ Source [${sIdx}] missing id/name/fileName`);
    errors++;
  }
  if (!Array.isArray(src.concepts)) {
    console.error(`❌ Source [${src.id || sIdx}] has no concepts array`);
    errors++;
    return;
  }

  totalConcepts += src.concepts.length;

  src.concepts.forEach((con, cIdx) => {
    if (!con.id || !con.name) {
      console.error(`❌ Concept [${cIdx}] in ${src.name} missing id/name`);
      errors++;
    }

    // Questions check
    const qList = (con.questions || []).flat();
    qList.forEach((q, qIdx) => {
      totalQuestions++;
      if (!q.text || typeof q.text !== 'string') {
        console.error(`❌ Question [${qIdx}] in ${con.name} (${src.name}) missing text`);
        errors++;
      } else {
        if (questionTexts.has(q.text.trim())) {
          warnings++;
        } else {
          questionTexts.add(q.text.trim());
        }
      }

      if (!Array.isArray(q.opts) || q.opts.length === 0) {
        console.error(`❌ Question [${qIdx}] "${q.text?.substring(0, 30)}" in ${con.name} has no options array`);
        errors++;
      } else {
        q.opts.forEach((opt, oIdx) => {
          if (typeof opt !== 'string') {
            console.error(`❌ Option [${oIdx}] in Question "${q.text?.substring(0, 30)}" is not a string`);
            errors++;
          }
        });
        if (typeof q.answerIdx !== 'number' || q.answerIdx < 0 || q.answerIdx >= q.opts.length) {
          console.error(`❌ Question "${q.text?.substring(0, 30)}" answerIdx (${q.answerIdx}) out of bounds (0-${q.opts.length - 1})`);
          errors++;
        }
      }
    });

    // Flashcards check
    (con.flashcards || []).forEach((fc, fIdx) => {
      totalFlashcards++;
      if (!fc.front || !fc.back) {
        console.error(`❌ Flashcard [${fIdx}] in ${con.name} missing front/back text`);
        errors++;
      }
    });
  });
});

console.log('--------------------------------------------------');
console.log(`📊 Summary:`);
console.log(`   - Sources    : ${DB.sources.length}`);
console.log(`   - Concepts   : ${totalConcepts}`);
console.log(`   - Questions  : ${totalQuestions} (allQuestions: ${DB.allQuestions.length})`);
console.log(`   - Flashcards : ${totalFlashcards} (allFlashcards: ${DB.allFlashcards.length})`);
console.log(`   - Duplicates : ${warnings} warnings`);
console.log(`   - Validation : ${errors === 0 ? '✅ PASSED' : `❌ FAILED with ${errors} errors`}`);

if (errors > 0) process.exit(1);

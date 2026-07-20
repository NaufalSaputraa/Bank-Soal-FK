
const S = {
  view:'home', selectedSource:null, selectedConcept:null,
  quiz:{active:false, questions:[], idx:0, score:0, answers:[], done:false},
  tryout:{active:false, questions:[], idx:0, score:0, answers:[], timeLeft:0, done:false},
  flashcard:{active:false, cards:[], idx:0},
  progress:JSON.parse(localStorage.getItem('bs_prog')||'{}'),
  qShuffle:{}
};
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const fmt=s=>{let m=Math.floor(s/60),se=s%60;return `${String(m).padStart(2,'0')}:${String(se).padStart(2,'0')}`};
const shf=a=>{let b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.random()*(i+1)|0;[b[i],b[j]]=[b[j],b[i]]}return b};
const ltr=i=>String.fromCharCode(65+i);
const save=()=>localStorage.setItem('bs_prog',JSON.stringify(S.progress));
const learned=id=>!!S.progress[id];
const mark=id=>{S.progress[id]=true;save();sideProg()};

function shuffleOpts(q){
  const key = q.text;
  if(S.qShuffle[key]) return S.qShuffle[key];
  const idx = Array.from({length: q.opts.length}, (_,i) => i);
  const shuffled = shf(idx);
  const result = { opts: shuffled.map(i => q.opts[i]), answerIdx: shuffled.indexOf(q.answerIdx) };
  S.qShuffle[key] = result;
  return result;
}

function findConcept(id){
  for(const s of DB.sources)
    for(const c of s.concepts)
      if(c.id===id) return {...c, sourceId:s.id, sourceName:s.name};
  return null;
}
function countQ(srcId){return DB.allQuestions.filter(q=>q.sourceId===srcId).length}
function sideProg(){
  const total=DB.sources.reduce((a,s)=>a+s.concepts.length,0);
  const done=Object.keys(S.progress).length;
  $('#sidebarFooter').textContent=`${done}/${total} konsep dipelajari`;
}

// EVENT DELEGATION — single listener for everything
document.addEventListener('click', e => {
  // ── Sidebar toggle (mobile) ──
  if(window.innerWidth<=768 && !e.target.closest('.sidebar') && e.target.id!=='menuBtn') {
    $('#sidebar')?.classList.remove('open');
  }

  // ── Quiz/Tryout answer ── (must be FIRST: highest priority, stops propagation)
  const opt = e.target.closest('.q-opt:not(.locked)');
  if(opt) {
    const i=parseInt(opt.dataset.i), ans=parseInt(opt.dataset.ans);
    const mode = opt.closest('[data-mode]');
    if(mode) {
      // Inside quiz or tryout mode
      if(mode.dataset.mode==='tryout') {
        S.tryout.answers[S.tryout.idx]=i;
        if(i===ans) S.tryout.score++;
        tryout($('#pageContent'));
      } else {
        S.quiz.answers[S.quiz.idx]=i;
        if(i===ans) S.quiz.score++;
        kuis($('#pageContent'));
      }
    } else {
      // Standalone question (bank soal / concept detail) — visually mark only
      const parent = opt.closest('.q-card');
      parent.querySelectorAll('.q-opt').forEach(o => {
        o.classList.add('locked');
        if(parseInt(o.dataset.i)===ans) o.classList.add('correct');
      });
      if(i!==ans) opt.classList.add('wrong');
    }
    return;
  }

  // ── Source card (home / source detail) ──
  const srcCard = e.target.closest('.source-card');
  if(srcCard) {
    const concept = srcCard.dataset.concept;
    const source = srcCard.dataset.source;
    if(concept) nav('materi',{selectedConcept:concept,selectedSource:source});
    else nav('materi',{selectedSource:source});
    return;
  }

  // ── Tree leaf (concept in materi tree) ──
  const leaf = e.target.closest('.tree-leaf');
  if(leaf) {
    nav('materi',{selectedConcept:leaf.dataset.concept,selectedSource:leaf.dataset.source});
    return;
  }

  // ── Navigation (sidebar, links, search results) ──
  const navEl = e.target.closest('[data-nav], [data-view]');
  if(navEl) {
    const view = navEl.dataset.view || navEl.dataset.nav;
    const concept = navEl.dataset.concept;
    if(concept) nav(view,{selectedConcept:concept,selectedSource:navEl.dataset.source||null});
    else { S.selectedSource=null; S.selectedConcept=null; nav(view); }
    return;
  }

  // ── Start actions (quiz, tryout, flashcard) ──
  const start = e.target.closest('[data-start]');
  if(start) {
    const [type, param] = start.dataset.start.split(',');
    if(type==='quiz') startQuiz(parseInt(param)||10);
    else if(type==='tryout') startTryout(param||'all');
    else if(type==='fc') startFlashcards(param||'all');
    return;
  }

  // ── Next question (quiz/tryout) ──
  const next = e.target.closest('[data-next]');
  if(next) {
    if(next.dataset.next==='quiz') nextQuiz();
    else nextTryout();
    return;
  }

  // ── Buka materi button ──
  const buka = e.target.closest('[data-buka]');
  if(buka) {
    nav('materi',{selectedConcept:buka.dataset.buka,selectedSource:buka.dataset.source||null});
    return;
  }

  // ── Flashcard flip ──
  const fcCard = e.target.closest('.fc-card');
  if(fcCard && !fcCard.closest('[data-mode]') && !e.target.closest('[data-fc],[data-start]')) {
    fcCard.classList.toggle('flipped');
    return;
  }

  // ── Flashcard navigation ──
  const fcNav = e.target.closest('[data-fc]');
  if(fcNav) {
    if(fcNav.dataset.fc==='next') nextFc();
    else prevFc();
    return;
  }

  // ── Tryout question nav ──
  const qnavBtn = e.target.closest('.qnav button');
  if(qnavBtn) { goTryout(parseInt(qnavBtn.dataset.goto)); return; }

  // ── Filter select ──
  const filter = e.target.closest('[data-filter]');
  if(filter) { nav('soal',{selectedSource:filter.value}); return; }

  // ── Search result item ──
  const sr = e.target.closest('.sr-item');
  if(sr) {
    const concept = sr.dataset.concept;
    if(concept) nav('materi',{selectedConcept:concept});
    $('#searchResults').style.display='none';
    return;
  }

  // ── Flashcard start from meta button ──
  const fcNavBtn = e.target.closest('[data-fc-nav]');
  if(fcNavBtn) { startFlashcards(fcNavBtn.dataset.fcNav||'all'); return; }
});

// ── Menu button ──
$('#menuBtn')?.addEventListener('click', e => {
  e.stopPropagation();
  $('#sidebar').classList.toggle('open');
});

function nav(view, params={}){
  S.view=view; Object.assign(S,params);
  $$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===view));
  if(window.innerWidth<=768) $('#sidebar').classList.remove('open');
  render();
}

function render(){
  const t={home:'Beranda',materi:'Materi',soal:'Bank Soal',kuis:'Quiz Cepat',tryout:'Try Out CBT',flashcard:'Flashcard',cari:'Cari'}[S.view]||'';
  $('#pageTitle').textContent=t;
  const bc=$('#breadcrumb');
  if(S.selectedConcept){const c=findConcept(S.selectedConcept);bc.textContent=c?`Materi › ${c.sourceName} › ${c.name}`:''}
  else if(S.selectedSource){const s=DB.sources.find(x=>x.id===S.selectedSource);bc.textContent=s?`Materi › ${s.name}`:'Materi'}
  else bc.textContent=S.view==='materi'?'Jelajahi File':'Blok Muskuloskeletal';
  $('#headerMeta').textContent=DB.allQuestions.length+' soal · '+DB.allFlashcards.length+' flashcard';
  $('#soalCount').textContent=DB.allQuestions.length;
  const c=$('#pageContent');c.innerHTML='';
  if(S.view==='home') home(c);
  else if(S.view==='materi') materi(c);
  else if(S.view==='soal') soal(c);
  else if(S.view==='kuis') kuis(c);
  else if(S.view==='tryout') tryout(c);
  else if(S.view==='flashcard') flashcard(c);
  else if(S.view==='cari') cari(c);
  sideProg();
}

// ── HOME ──
function home(c){
  c.innerHTML=`<div class="stats">
      <div class="stat"><div class="num">${DB.sources.length}</div><div class="label">File Sumber</div></div>
      <div class="stat"><div class="num">${DB.sources.reduce((a,s)=>a+s.concepts.length,0)}</div><div class="label">Konsep</div></div>
      <div class="stat"><div class="num gold">${DB.allQuestions.length}</div><div class="label">Soal</div></div>
      <div class="stat"><div class="num accent">${DB.allFlashcards.length}</div><div class="label">Flashcard</div></div>
    </div>
    <div class="section-title" role="heading">File Sumber</div>
    <div class="topics">${DB.sources.map(s=>`
      <div class="topic source-card" data-source="${s.id}" tabindex="0" role="button">
        <div class="icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <div class="meta">${s.concepts.length} konsep · ${countQ(s.id)} soal · ${DB.allFlashcards.filter(f=>f.sourceId===s.id).length} flashcard</div>
        <div class="meta" style="font-size:11px;margin-top:2px">${s.desc}</div>
      </div>
    `).join('')}</div>
    <div class="section-title" style="margin-top:16px">Akses Cepat</div>
    <div class="btn-group">
      <button class="btn btn-primary" data-start="quiz,10">⚡ Quiz Cepat</button>
      <button class="btn" data-start="fc,all">🃏 Semua Flashcard</button>
      <button class="btn btn-accent" data-nav="tryout">📝 Try Out CBT</button>
    </div>`;
}

// ── MATERI ──
function materi(c){
  if(S.selectedConcept){detail(c,S.selectedConcept);return}
  if(S.selectedSource){sourceDetail(c,S.selectedSource);return}
  c.innerHTML=`<div style="display:grid;grid-template-columns:260px 1fr;gap:20px;align-items:start">
      <div class="tree-card">${DB.sources.map(s=>`
        <div class="tree-item">
          <button class="tree-toggle" aria-expanded="false">
            <span class="arrow">▶</span><span class="t-icon">${s.icon}</span> ${s.short||s.name}
          </button>
          <div class="tree-children">${s.concepts.map(c=>`
            <button class="tree-leaf${S.selectedConcept===c.id?' active':''}" data-concept="${c.id}" data-source="${s.id}" tabindex="0">${c.name} ${learned(c.id)?'✓':''}</button>
          `).join('')}</div>
        </div>
      `).join('')}</div>
      <div class="card" style="text-align:center;padding:48px 20px;color:var(--ink-3)">
        <div style="font-size:40px;margin-bottom:12px">📖</div>
        <div>Pilih file sumber, lalu pilih konsep untuk melihat detail.</div>
      </div>
    </div>`;
}

function sourceDetail(c,srcId){
  const src=DB.sources.find(s=>s.id===srcId);
  if(!src){c.innerHTML='<div class="card">File tidak ditemukan.</div>';return}
  const fcCount=DB.allFlashcards.filter(f=>f.sourceId===srcId).length;
  c.innerHTML=`<div class="concept">
      <h2>${src.icon} ${src.name}</h2>
      <div class="def">${src.desc}</div>
      <div class="meta" style="font-size:13px;margin-top:8px">${src.concepts.length} konsep · ${countQ(srcId)} soal · ${fcCount} flashcard</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:14px">
      ${src.concepts.map(c=>`
        <div class="topic source-card" data-source="${srcId}" data-concept="${c.id}" tabindex="0">
          <h3 style="font-size:14px">${c.name}</h3>
          <div class="meta">${(c.questions||[]).flat().length} soal</div>
        </div>
      `).join('')}
    </div>`;
}

function detail(c,conceptId){
  const con=findConcept(conceptId);
  if(!con){c.innerHTML='<div class="card">Konsep tidak ditemukan.</div>';return}
  mark(conceptId);
  const qs=DB.allQuestions.filter(q=>q.conceptId===conceptId);
  const fcs=DB.allFlashcards.filter(f=>f.conceptId===conceptId);
  let h=`<div class="concept"><h2>${con.name}</h2>
    <div class="def">${con.definition}</div>
    ${con.keyPoints?.length?`<ul class="kpl">${con.keyPoints.map(k=>`<li>${k}</li>`).join('')}</ul>`:''}
    <div class="meta" style="font-size:12px;color:var(--ink-3);margin-top:8px">Sumber: ${con.sourceName}</div></div>`;
  if(qs.length){
    h+=`<div class="section-title" style="margin-top:20px">Soal (${qs.length})</div>`;
    qs.forEach(q=>{h+=qCard(q,false)});
  }
  if(fcs.length){
    h+=`<div class="section-title" style="margin-top:20px">Flashcard (${fcs.length})</div>`;
    fcs.forEach(f=>{h+=fcMini(f)});
  }
  c.innerHTML=h;
}

function qCard(q,showAns){
  const sq = showAns ? {opts:q.opts, answerIdx:q.answerIdx} : shuffleOpts(q);
  return `<div class="q-card"><div class="q-text">${q.text}</div>
    <div class="q-opts">${sq.opts.map((o,i)=>`<div class="q-opt${showAns?(i===sq.answerIdx?' correct':' locked'):''}" data-i="${i}" data-ans="${sq.answerIdx}" tabindex="0" role="button">${ltr(i)} ${o}</div>`).join('')}</div>
    <div class="q-tags">${(q.tags||[]).map(t=>`<span class="q-tag">#${t}</span>`).join('')}</div>
    ${showAns?`<div style="margin-top:8px;padding:8px 10px;border-radius:var(--radius-sm);font-size:12.5px;background:var(--green-light);color:var(--green)"><strong>✓ ${ltr(sq.answerIdx)}. ${sq.opts[sq.answerIdx]}</strong>
      ${q.explanation?`<div style="margin-top:4px;padding-top:4px;border-top:1px solid rgba(0,0,0,0.08);font-weight:400;color:var(--ink-2)">${q.explanation}</div>`:''}</div>
      <div style="font-size:12px;color:var(--ink-3);margin-top:6px">📍 ${q.sourceName} › ${q.conceptName}</div>`:''}</div>`;
}

function fcMini(f){
  return `<div class="fc-card" style="min-height:70px;padding:16px;margin-bottom:8px" tabindex="0"><div class="fc-front">${f.front}</div><div class="fc-back">${f.back}</div></div>`;
}

// ── SOAL ──
function soal(c){
  const filter=S.selectedSource||'all';
  let qs=DB.allQuestions;
  if(filter!=='all') qs=qs.filter(q=>q.sourceId===filter);
  const byConcept={};
  qs.forEach(q=>{if(!byConcept[q.conceptName])byConcept[q.conceptName]=[];byConcept[q.conceptName].push(q)});
  c.innerHTML=`<div class="card" style="padding:14px 20px;margin-bottom:16px">
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <select data-filter aria-label="Filter file" style="padding:7px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:inherit;background:var(--surface)">
          <option value="all">Semua File</option>
          ${DB.sources.map(s=>`<option value="${s.id}"${s.id===filter?' selected':''}>${s.icon} ${s.name}</option>`).join('')}
        </select>
        <span style="font-size:13px;color:var(--ink-3)">${qs.length} soal</span>
      </div>
    </div>
    ${Object.entries(byConcept).map(([con,qss])=>`
      <div class="section-title">📌 ${con} <span class="count">(${qss.length} soal)</span></div>
      ${qss.map(q=>qCard(q,false)).join('')}
    `).join('')}`;
}

// ── KUIS ──
function kuis(c){
  if(S.quiz.done){
    const qs=S.quiz.questions;const sc=S.quiz.score;
    c.innerHTML=`<div class="qc"><div class="score">${sc}/${qs.length}</div><div class="label">Quiz Selesai</div><div class="sub">${sc===qs.length?'🎉 Sempurna!':sc>=qs.length*0.7?'👍 Bagus!':'📚 Ayo belajar lagi!'}</div><div class="btn-group" style="justify-content:center;margin-top:20px"><button class="btn" data-start="quiz,${qs.length}">Ulangi</button><button class="btn btn-primary" data-start="quiz,10">Soal Baru</button></div></div>`;
    return;
  }
  if(!S.quiz.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">⚡</div><div style="font-size:18px;font-weight:600;margin-bottom:6px">Quiz Cepat</div><div style="color:var(--ink-3);margin-bottom:20px">Soal acak dari semua file</div><div class="btn-group" style="justify-content:center"><button class="btn btn-primary" data-start="quiz,10">10 soal</button><button class="btn" data-start="quiz,20">20 soal</button><button class="btn" data-start="quiz,0">Semua (${DB.allQuestions.length})</button></div></div>`;
    return;
  }
  const qs=S.quiz.questions;const idx=S.quiz.idx;
  if(idx>=qs.length){S.quiz.done=true;kuis(c);return}
  const q=qs[idx];const ans=S.quiz.answers[idx];const locked=ans!==undefined;
  const sq=shuffleOpts(q);
  c.innerHTML=`<div class="quiz-bar"><span class="qb-stat"><strong>${idx+1}</strong>/${qs.length}</span><div class="quiz-progress"><div class="qp-fill" style="width:${(idx+1)/qs.length*100}%"></div></div><span class="qb-stat">✓ <strong>${S.quiz.score}</strong></span></div>
    <div class="q-card" data-mode="quiz"><div class="q-text">${q.text}</div>
    <div class="q-opts">${sq.opts.map((o,i)=>`<div class="q-opt${locked?(i===sq.answerIdx?' correct':i===ans?' wrong':' locked'):''}" data-i="${i}" data-ans="${sq.answerIdx}" tabindex="0">${ltr(i)} ${o}</div>`).join('')}</div>
    ${locked?`<div style="margin-top:10px;padding:10px;border-radius:var(--radius-sm);font-size:13px;font-weight:500;${ans===sq.answerIdx?'background:var(--green-light);color:var(--green)':'background:var(--red-light);color:var(--red)'}">${ans===sq.answerIdx?'✓ Benar!':'✕ '+ltr(sq.answerIdx)+'. '+sq.opts[sq.answerIdx]}
      ${q.explanation?`<div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(0,0,0,0.1);font-weight:400;font-size:12.5px;color:var(--ink-2)"><strong>Pembahasan:</strong> ${q.explanation}</div>`:''}
      <div style="margin-top:6px;font-weight:400;font-size:12px;color:var(--ink-3)">📍 ${q.sourceName} › ${q.conceptName}</div>
    </div>`:''}</div>
    ${locked?`<div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><button class="btn btn-sm" data-buka="${q.conceptId}" data-source="${q.sourceId}">📖 Buka Materi</button><button class="btn btn-primary btn-sm" data-next="quiz">${idx+1>=qs.length?'Lihat Nilai':'→'}</button></div>`:''}`;
}
function nextQuiz(){S.quiz.idx++;if(S.quiz.idx>=S.quiz.questions.length){S.quiz.done=true}render()}
function startQuiz(c=10){S.qShuffle={};let pool=shf([...DB.allQuestions]);if(c>0) pool=pool.slice(0,Math.min(c,pool.length));S.quiz={active:true,done:false,questions:pool,idx:0,score:0,answers:new Array(pool.length).fill(undefined)};nav('kuis')}

// ── TRYOUT ──
let timerRef=null;
function tryout(c){
  if(S.tryout.done){
    const to=S.tryout;
    c.innerHTML=`<div class="qc"><div class="score">${to.score}/${to.questions.length}</div><div class="label">Try Out Selesai!</div><div class="sub">Waktu: ${fmt(to.timeLimit||0)}</div><div class="btn-group" style="justify-content:center;margin-top:20px"><button class="btn btn-primary" data-start="tryout,all">Ulangi</button></div></div>`;
    return;
  }
  if(!S.tryout.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">📝</div><div style="font-size:18px;font-weight:600;margin-bottom:6px">Try Out CBT</div><div style="color:var(--ink-3);margin-bottom:20px">30 soal, timer 30 menit</div><div class="card"><div class="card-header">Pilih Sumber</div><div class="btn-group">${DB.sources.map(s=>`<button class="btn" data-start="tryout,${s.id}">${s.icon} ${s.short||s.name}</button>`).join('')}<button class="btn btn-primary" data-start="tryout,all">📋 Semua</button></div></div></div>`;
    return;
  }
  const to=S.tryout;const qs=to.questions;const idx=to.idx;
  if(idx>=qs.length||to.timeLeft<=0){to.done=true;tryout(c);return}
  const q=qs[idx];const ans=to.answers[idx];const locked=ans!==undefined;
  const sq=shuffleOpts(q);
  c.innerHTML=`<div class="quiz-bar"><span class="qb-stat"><strong>${idx+1}</strong>/${qs.length}</span><div class="quiz-progress"><div class="qp-fill" style="width:${(idx+1)/qs.length*100}%"></div></div><span class="timer" id="timerDisplay">${fmt(to.timeLeft)}</span></div>
    <div class="q-card" data-mode="tryout"><div class="q-text">${q.text}</div>
    <div class="q-opts">${sq.opts.map((o,i)=>`<div class="q-opt${locked?(i===sq.answerIdx?' correct':i===ans?' wrong':' locked'):''}" data-i="${i}" data-ans="${sq.answerIdx}" tabindex="0">${ltr(i)} ${o}</div>`).join('')}</div></div>
    ${locked?`<div style="padding:10px;margin-top:8px;border-radius:var(--radius-sm);font-size:13px;${ans===sq.answerIdx?'background:var(--green-light);color:var(--green)':'background:var(--red-light);color:var(--red)'}"><strong>${ans===sq.answerIdx?'✓ Benar':'✕ Jawaban: '+ltr(sq.answerIdx)}</strong>${q.explanation?`<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(0,0,0,0.1);font-weight:400;font-size:12px;color:var(--ink-2)">${q.explanation}</div>`:''}</div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px"><span style="font-size:12px;color:var(--ink-3);margin-right:auto">📍 ${q.sourceName} › ${q.conceptName}</span><button class="btn btn-sm" data-buka="${q.conceptId}" data-source="${q.sourceId}">📖 Buka Materi</button><button class="btn btn-primary btn-sm" data-next="tryout">${idx+1>=qs.length?'Selesai':'→'}</button></div>`:''}
    <div class="qnav">${qs.map((_,i)=>`<button data-goto="${i}" class="${to.answers[i]!==undefined?'done':''}${i===idx?' cur':''}" tabindex="0">${i+1}</button>`).join('')}</div>`;
}
function nextTryout(){S.tryout.idx++;if(S.tryout.idx>=S.tryout.questions.length){S.tryout.done=true}render()}
function goTryout(i){S.tryout.idx=i;render()}
function startTryout(t='all'){
  S.qShuffle={};let pool=t==='all'?[...DB.allQuestions]:DB.allQuestions.filter(q=>q.sourceId===t);
  pool=shf(pool).slice(0,30);
  if(timerRef) clearInterval(timerRef);
  S.tryout={active:true,done:false,questions:pool,idx:0,score:0,answers:new Array(pool.length).fill(undefined),timeLeft:1800,timeLimit:1800};
  timerRef=setInterval(()=>{
    if(S.tryout.done||!S.tryout.active){clearInterval(timerRef);return}
    S.tryout.timeLeft--;if(S.tryout.timeLeft<=0){S.tryout.done=true;render()}else{const e=$('#timerDisplay');if(e)e.textContent=fmt(S.tryout.timeLeft)}
  },1000);nav('tryout');
}

// ── FLASHCARD ──
function flashcard(c){
  if(S.flashcard.active&&!S.flashcard.cards.length)S.flashcard.active=false;
  if(!S.flashcard.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">🃏</div><div style="font-size:18px;font-weight:600;margin-bottom:20px">${DB.allFlashcards.length} Flashcard</div><div class="btn-group" style="justify-content:center"><button class="btn btn-primary" data-start="fc,all">Semua (${DB.allFlashcards.length})</button>${DB.sources.map(s=>`<button class="btn" data-start="fc,${s.id}">${s.icon} ${s.short||s.name}</button>`).join('')}</div></div>`;
    return;
  }
  const cards=S.flashcard.cards;const idx=S.flashcard.idx;
  if(!cards.length||idx>=cards.length){S.flashcard.active=false;flashcard(c);return}
  const card=cards[idx];
  c.innerHTML=`<div style="text-align:center;max-width:580px;margin:0 auto">
    <div style="font-size:12px;color:var(--ink-3);margin-bottom:10px;font-family:var(--mono)">${idx+1}/${cards.length}</div>
    <div class="fc-card" tabindex="0">
      <div class="fc-front">${card.front}</div>
      <div class="fc-back">${card.back}</div>
      <div class="fc-meta">${card.sourceName} · ${card.conceptName}</div>
      <div class="fc-hint">👆 Klik untuk balik</div>
    </div>
    <div class="btn-group" style="justify-content:center;margin-top:14px">
      <button class="btn btn-sm" data-fc="prev">←</button>
      <button class="btn btn-primary btn-sm" data-fc="next">→</button>
    </div>
    <button class="btn btn-sm" style="margin-top:8px" data-start="fc,${S.flashcard.sourceId||'all'}">🔄 Acak Ulang</button>
  </div>`;
}
function startFlashcards(t='all'){let cards=t==='all'?[...DB.allFlashcards]:DB.allFlashcards.filter(f=>f.sourceId===t);S.flashcard={active:true,cards:shf(cards),idx:0,sourceId:t};nav('flashcard')}
function nextFc(){S.flashcard.idx++;render()}
function prevFc(){if(S.flashcard.idx>0)S.flashcard.idx--;render()}

// ── CARI ──
function cari(c){
  c.innerHTML=`<div class="card" style="padding:16px 20px;margin-bottom:20px">
    <div class="section-title" style="margin-bottom:8px">🔍 Cari</div>
    <div class="search-wrap">
      <input type="text" id="searchInput" placeholder="Cari konsep, soal, atau flashcard..." autofocus aria-label="Kata kunci">
      <div class="search-results" id="searchResults" style="display:none" role="listbox"></div>
    </div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="card"><div class="card-header">💡 Tips</div><div style="font-size:13px">Cari: <strong>osteoblas</strong>, <strong>foramen</strong>, <strong>carpal tunnel</strong>, <strong>klumpke</strong></div></div>
      <div class="card"><div class="card-header">📁 File</div><div style="font-size:13px">${DB.sources.map(s=>`<a href="#" data-nav="materi" data-concept="" onclick="return false">${s.icon} ${s.short||s.name}</a><br>`).join('')}</div></div>
    </div>`;
  const inp=$('#searchInput'),res=$('#searchResults');let tm;
  inp.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(()=>search(this.value,res),150)});
}
function search(q,cont){
  if(!q||q.length<2){cont.style.display='none';return}
  const query=q.toLowerCase();
  let concepts=[],questions=[],flashcards=[];
  DB.sources.forEach(s=>{s.concepts.forEach(c=>{
    if(c.name.toLowerCase().includes(query)||c.definition.toLowerCase().includes(query)) concepts.push({id:c.id,name:c.name,source:s.name});
    (c.questions||[]).flat().forEach(qq=>{if(qq.text.toLowerCase().includes(query)) questions.push({text:qq.text.substring(0,80)+'...',concept:c.name})});
    (c.flashcards||[]).forEach(f=>{if(f.front.toLowerCase().includes(query)||f.back.toLowerCase().includes(query)) flashcards.push({front:f.front,concept:c.name})});
  })});
  let html='';
  if(concepts.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;color:var(--gold)">KONSEP</div>${concepts.slice(0,5).map(c=>`<div class="sr-item" data-concept="${c.id}" tabindex="0"><span class="sr-type">${c.source}</span><br>${c.name}</div>`).join('')}`;
  if(questions.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;color:var(--gold)">SOAL</div>${questions.slice(0,5).map(q=>`<div class="sr-item" tabindex="0"><span class="sr-type">${q.concept}</span><br>${q.text}</div>`).join('')}`;
  if(flashcards.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;color:var(--gold)">FLASHCARD</div>${flashcards.slice(0,5).map(f=>`<div class="sr-item" tabindex="0"><span class="sr-type">${f.concept}</span><br>${f.front}</div>`).join('')}`;
  if(!html) html='<div class="sr-item" style="color:var(--ink-3)" role="status">Tidak ditemukan</div>';
  cont.innerHTML=html;cont.style.display='block';
}

// ── INIT ──
render();

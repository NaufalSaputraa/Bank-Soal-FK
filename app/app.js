
// ============================================================
// STATE
// ============================================================
const S = {
  view:'home', selectedTopic:null, selectedSubtopic:null, selectedConcept:null,
  quiz:{active:false, questions:[], idx:0, score:0, answers:[], done:false},
  tryout:{active:false, questions:[], idx:0, score:0, answers:[], timeLeft:0, done:false},
  flashcard:{active:false, cards:[], idx:0},
  progress:JSON.parse(localStorage.getItem('bs_prog')||'{}'),
  sideOpen:false
};
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const fmt=(s)=>{let m=Math.floor(s/60),se=s%60;return `${String(m).padStart(2,'0')}:${String(se).padStart(2,'0')}`};
const shf=a=>{let b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.random()*(i+1)|0;[b[i],b[j]]=[b[j],b[i]]}return b};
const ltr=i=>String.fromCharCode(65+i);
const save=()=>localStorage.setItem('bs_prog',JSON.stringify(S.progress));
const learned=id=>!!S.progress[id];
const mark=(id)=>{S.progress[id]=true;save();sideProg()};

function findConcept(id){
  for(const t of DB.topics)
    for(const st of t.subtopics)
      for(const c of st.concepts)
        if(c.id===id) return {...c, topicId:t.id, topicName:t.name, subtopicId:st.id, subtopicName:st.name};
  return null;
}
function countQ(topicId){return DB.allQuestions.filter(q=>q.topicId===topicId).length}
function sideProg(){
  const total=DB.topics.reduce((a,t)=>a+t.subtopics.reduce((b,st)=>b+st.concepts.length,0),0);
  const done=Object.keys(S.progress).length;
  $('#sidebarFooter').textContent=`${done}/${total} konsep dipelajari`;
}

// ============================================================
// NAVIGATE
// ============================================================
function nav(view,params={}){
  S.view=view;Object.assign(S,params);
  $$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===view));
  if(window.innerWidth<=768) $('#sidebar').classList.remove('open');
  render();
}

// ============================================================
// RENDER
// ============================================================
function render(){
  const title={home:'Beranda',materi:'Materi',soal:'Bank Soal',kuis:'Quiz Cepat',tryout:'Try Out CBT',flashcard:'Flashcard',cari:'Cari'}[S.view]||'';
  $('#pageTitle').textContent=title;
  const bc=$('#breadcrumb');
  if(S.selectedConcept){const c=findConcept(S.selectedConcept);bc.textContent=`Materi ${c?'> '+c.topicName+' > '+c.name:''}`}
  else bc.textContent=S.view==='materi'?'Jelajahi Materi':'Blok Muskuloskeletal';
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

// ============================================================
// HOME
// ============================================================
function home(c){
  const totalConcepts=DB.topics.reduce((a,t)=>a+t.subtopics.reduce((b,st)=>b+st.concepts.length,0),0);
  c.innerHTML=`
    <div class="stats">
      <div class="stat"><div class="num">${DB.topics.length}</div><div class="label">Topik</div></div>
      <div class="stat"><div class="num">${totalConcepts}</div><div class="label">Konsep</div></div>
      <div class="stat"><div class="num gold">${DB.allQuestions.length}</div><div class="label">Soal</div></div>
      <div class="stat"><div class="num accent">${DB.allFlashcards.length}</div><div class="label">Flashcard</div></div>
      <div class="stat"><div class="num">${Object.keys(S.progress).length}</div><div class="label">Dipahami</div></div>
    </div>
    <div class="section-title">Topik Pembelajaran</div>
    <div class="topics">
      ${DB.topics.map(t=>`<div class="topic" style="--color:${t.color}" onclick="nav('materi',{selectedTopic:'${t.id}'})">
        <div class="icon">${t.icon}</div>
        <h3>${t.name}</h3>
        <div class="meta">${t.subtopics.reduce((a,st)=>a+st.concepts.length,0)} konsep · ${countQ(t.id)} soal</div>
        <div class="meta" style="font-size:11px;margin-top:2px">${t.description||''}</div>
      </div>`).join('')}
    </div>
    <div class="section-title">Akses Cepat</div>
    <div class="btn-group">
      <button class="btn btn-primary" onclick="startQuiz()">⚡ Quiz Cepat</button>
      <button class="btn" onclick="startFlashcards('all')">🃏 Belajar Flashcard</button>
      <button class="btn btn-accent" onclick="nav('tryout')">📝 Try Out CBT</button>
    </div>
  `;
}

// ============================================================
// MATERI
// ============================================================
function materi(c){
  if(S.selectedConcept){detail(c,S.selectedConcept);return}
  c.innerHTML=`
    <div style="display:grid;grid-template-columns:280px 1fr;gap:20px;align-items:start">
      <div class="tree-card">${DB.topics.map(t=>`
        <div class="tree-item">
          <button class="tree-toggle" onclick="const n=this.nextElementSibling;n.classList.toggle('open');this.querySelector('.arrow').style.transform=n.classList.contains('open')?'rotate(90deg)':''">
            <span class="arrow">▶</span><span class="t-icon">${t.icon}</span> ${t.name}
          </button>
          <div class="tree-children">${t.subtopics.map(st=>`
            <div class="tree-item" style="border:none">
              <button class="tree-toggle" style="padding-left:40px" onclick="const n=this.nextElementSibling;n.classList.toggle('open');this.querySelector('.arrow').style.transform=n.classList.contains('open')?'rotate(90deg)':''">
                <span class="arrow">▶</span> ${st.name}
              </button>
              <div class="tree-children">${st.concepts.map(c=>`
                <button class="tree-leaf${S.selectedConcept===c.id?' active':''}" onclick="nav('materi',{selectedConcept:'${c.id}'})">
                  ${c.name} ${learned(c.id)?'<span class="leaf-check">✓</span>':''}
                </button>
              `).join('')}</div>
            </div>
          `).join('')}</div>
        </div>
      `).join('')}</div>
      <div class="card" style="text-align:center;padding:48px 20px;color:var(--ink-3)">
        <div style="font-size:40px;margin-bottom:12px">📖</div>
        <div style="font-size:14px">Pilih konsep dari daftar di samping untuk melihat detail materi, soal, dan flashcard.</div>
      </div>
    </div>
  `;
}

function detail(c,conceptId){
  const con=findConcept(conceptId);
  if(!con){c.innerHTML='<div class="card">Konsep tidak ditemukan.</div>';return}
  mark(conceptId);
  const qs=DB.allQuestions.filter(q=>q.conceptId===conceptId);
  const fcs=DB.allFlashcards.filter(f=>f.conceptId===conceptId);
  let h=`<div class="concept">
    <h2>${con.name}</h2>
    <div class="def">${con.definition}</div>
    ${con.keyPoints?.length?`<ul class="kpl">${con.keyPoints.map(k=>`<li>${k}</li>`).join('')}</ul>`:''}
    ${con.related?.length?`<div class="related">Konsep terkait: ${con.related.map(r=>`<a href="#" onclick="nav('materi',{selectedConcept:'${r}'});return false">${r}</a>`).join('')}</div>`:''}
  </div>`;
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
  return `<div class="q-card">
    <div class="q-text">${q.text}</div>
    <div class="q-opts">${q.opts.map((o,i)=>`<div class="q-opt${showAns?(i===q.answerIdx?' correct':' locked'):''}" data-i="${i}" onclick="${showAns?'':`answerQ(this,${q.answerIdx})`}"><span class="ol">${ltr(i)}</span> ${o}</div>`).join('')}</div>
    <div class="q-tags">${q.tags.map(t=>`<span class="q-tag">#${t}</span>`).join('')}</div>
  </div>`;
}
function answerQ(el,ans){
  if(el.classList.contains('locked')) return;
  const i=parseInt(el.dataset.i);
  const parent=el.closest('.q-card');
  parent.querySelectorAll('.q-opt').forEach(o=>{o.classList.add('locked');if(parseInt(o.dataset.i)===ans)o.classList.add('correct')});
  if(i!==ans) el.classList.add('wrong');
}
function fcMini(f){
  return `<div class="fc-card" style="min-height:70px;padding:16px;margin-bottom:8px" onclick="this.classList.toggle('flipped')">
    <div class="fc-front">${f.front}</div>
    <div class="fc-back">${f.back}</div>
  </div>`;
}

// ============================================================
// SOAL
// ============================================================
function soal(c){
  const filter=S.selectedTopic||'all';
  let qs=DB.allQuestions;
  if(filter!=='all') qs=qs.filter(q=>q.topicId===filter);
  const byConcept={};
  qs.forEach(q=>{if(!byConcept[q.conceptName])byConcept[q.conceptName]=[];byConcept[q.conceptName].push(q)});
  c.innerHTML=`
    <div class="card" style="padding:14px 20px;margin-bottom:16px">
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <select style="padding:7px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;font-family:inherit;background:var(--surface)" onchange="nav('soal',{selectedTopic:this.value})">
          <option value="all">Semua Topik</option>
          ${DB.topics.map(t=>`<option value="${t.id}"${t.id===filter?' selected':''}>${t.icon} ${t.name}</option>`).join('')}
        </select>
        <span style="font-size:13px;color:var(--ink-3)">${qs.length} soal</span>
      </div>
    </div>
    ${Object.entries(byConcept).map(([con,qs])=>`
      <div class="section-title">📌 ${con} <span class="count">(${qs.length} soal)</span></div>
      ${qs.map(q=>qCard(q,false)).join('')}
    `).join('')}
  `;
}

// ============================================================
// KUIS
// ============================================================
function kuis(c){
  if(S.quiz.done){
    const qs=S.quiz.questions;const sc=S.quiz.score;
    c.innerHTML=`<div class="qc"><div class="score">${sc}/${qs.length}</div><div class="label">Quiz Selesai</div><div class="sub">${sc===qs.length?'🎉 Sempurna!':sc>=qs.length*0.7?'👍 Bagus!':sc>=qs.length*0.5?'💪 Tetap semangat!':'📚 Ayo belajar lagi!'}</div><div class="btn-group" style="justify-content:center;margin-top:20px"><button class="btn" onclick="startQuiz()">Ulangi</button><button class="btn btn-primary" onclick="startQuiz(undefined,true)">Soal Baru</button></div></div>`;
    return;
  }
  if(!S.quiz.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">⚡</div><div style="font-size:18px;font-weight:600;margin-bottom:6px">Quiz Cepat</div><div style="color:var(--ink-3);margin-bottom:20px">Soal acak dari semua topik — jawab dan langsung lihat hasilnya</div><div class="btn-group" style="justify-content:center"><button class="btn btn-primary" onclick="startQuiz()">Mulai (10 soal)</button><button class="btn" onclick="startQuiz(20)">20 soal</button><button class="btn" onclick="startQuiz(0)">Semua (${DB.allQuestions.length})</button></div></div>`;
    return;
  }
  const qs=S.quiz.questions;const idx=S.quiz.idx;
  if(idx>=qs.length){S.quiz.done=true;kuis(c);return}
  const q=qs[idx];const ans=S.quiz.answers[idx];const locked=ans!==undefined;
  c.innerHTML=`
    <div class="quiz-bar">
      <span class="qb-stat"><strong>${idx+1}</strong>/${qs.length}</span>
      <div class="quiz-progress"><div class="qp-fill" style="width:${(idx+1)/qs.length*100}%"></div></div>
      <span class="qb-stat">✓ <strong>${S.quiz.score}</strong></span>
    </div>
    <div class="q-card">
      <div class="q-text">${q.text}</div>
      <div class="q-opts">${q.opts.map((o,i)=>`<div class="q-opt${locked?(i===q.answerIdx?' correct':i===ans?' wrong':' locked'):''}" data-i="${i}" data-ans="${q.answerIdx}" ${locked?'':'onclick="quizClick(this)"'}><span class="ol">${ltr(i)}</span> ${o}</div>`).join('')}</div>
      <div class="q-tags">${q.tags.map(t=>`<span class="q-tag">#${t}</span>`).join('')}</div>
      ${locked?`<div style="margin-top:10px;padding:10px 14px;border-radius:var(--radius-sm);font-size:13px;font-weight:500;${ans===q.answerIdx?'background:var(--green-light);color:var(--green)':'background:var(--red-light);color:var(--red)'}">${ans===q.answerIdx?'✓ Benar!':'✕ Jawaban: '+ltr(q.answerIdx)+'. '+q.opts[q.answerIdx]}</div>`:''}
    </div>
    ${locked?`<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary btn-sm" onclick="nextQuiz()">${idx+1>=qs.length?'Lihat Nilai':'Selanjutnya →'}</button></div>`:''}
  `;
}
function quizClick(el){
  if(el.classList.contains('locked')) return;
  const i=parseInt(el.dataset.i);
  const ans=parseInt(el.dataset.ans);
  S.quiz.answers[S.quiz.idx]=i;
  if(i===ans) S.quiz.score++;
  kuis($('#pageContent'));
}
function nextQuiz(){S.quiz.idx++;if(S.quiz.idx>=S.quiz.questions.length)S.quiz.done=true;render()}
function startQuiz(c=10){
  let pool=shf([...DB.allQuestions]);
  if(c>0) pool=pool.slice(0,Math.min(c,pool.length));
  S.quiz={active:true,done:false,questions:pool,idx:0,score:0,answers:new Array(pool.length).fill(undefined)};
  nav('kuis');
}

// ============================================================
// TRYOUT
// ============================================================
let timerRef=null;
function tryout(c){
  if(S.tryout.done){
    const to=S.tryout;
    c.innerHTML=`<div class="qc"><div class="score">${to.score}/${to.questions.length}</div><div class="label">Try Out Selesai!</div><div class="sub">Waktu: ${fmt(to.timeLimit||0)}</div><div class="btn-group" style="justify-content:center;margin-top:20px"><button class="btn btn-primary" onclick="startTryout()">Ulangi</button></div></div>`;
    return;
  }
  if(!S.tryout.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">📝</div><div style="font-size:18px;font-weight:600;margin-bottom:6px">Try Out CBT</div><div style="color:var(--ink-3);margin-bottom:20px">Simulasi ujian: 30 soal, timer 30 menit, tampilan seperti CBT</div><div class="card" style="text-align:left"><div class="card-header">Pilih Topik</div><div class="btn-group">${DB.topics.map(t=>`<button class="btn" onclick="startTryout('${t.id}')">${t.icon} ${t.name}</button>`).join('')}<button class="btn btn-primary" onclick="startTryout('all')">📋 Semua Topik</button></div></div></div>`;
    return;
  }
  const to=S.tryout;const qs=to.questions;const idx=to.idx;
  if(idx>=qs.length||to.timeLeft<=0){to.done=true;tryout(c);return}
  const q=qs[idx];const ans=to.answers[idx];const locked=ans!==undefined;
  c.innerHTML=`
    <div class="quiz-bar">
      <span class="qb-stat"><strong>${idx+1}</strong>/${qs.length}</span>
      <div class="quiz-progress"><div class="qp-fill" style="width:${(idx+1)/qs.length*100}%"></div></div>
      <span class="timer" id="timerDisplay">${fmt(to.timeLeft)}</span>
    </div>
    <div class="q-card">
      <div class="q-text">${q.text}</div>
      <div class="q-opts">${q.opts.map((o,i)=>`<div class="q-opt${locked?(i===q.answerIdx?' correct':i===ans?' wrong':' locked'):''}" data-i="${i}" data-ans="${q.answerIdx}" ${locked?'':'onclick="tryoutClick(this)"'}><span class="ol">${ltr(i)}</span> ${o}</div>`).join('')}</div>
    </div>
    ${locked?`<div style="display:flex;justify-content:flex-end"><button class="btn btn-primary btn-sm" onclick="nextTryout()">${idx+1>=qs.length?'Selesai':'Selanjutnya →'}</button></div>`:''}
    <div class="qnav">${qs.map((_,i)=>`<button class="${to.answers[i]!==undefined?'done':''}${i===idx?' cur':''}" onclick="goTryout(${i})">${i+1}</button>`).join('')}</div>
  `;
}
function tryoutClick(el){
  if(el.classList.contains('locked')) return;
  const i=parseInt(el.dataset.i);
  const ans=parseInt(el.dataset.ans);
  S.tryout.answers[S.tryout.idx]=i;
  if(i===ans) S.tryout.score++;
  tryout($('#pageContent'));
}
function nextTryout(){S.tryout.idx++;if(S.tryout.idx>=S.tryout.questions.length)S.tryout.done=true;render()}
function goTryout(i){S.tryout.idx=i;render()}
function startTryout(t='all'){
  let pool=t==='all'?[...DB.allQuestions]:DB.allQuestions.filter(q=>q.topicId===t);
  pool=shf(pool).slice(0,30);
  if(timerRef) clearInterval(timerRef);
  S.tryout={active:true,done:false,questions:pool,idx:0,score:0,answers:new Array(pool.length).fill(undefined),timeLeft:1800,timeLimit:1800};
  timerRef=setInterval(()=>{
    if(S.tryout.done||!S.tryout.active){clearInterval(timerRef);return}
    S.tryout.timeLeft--;
    if(S.tryout.timeLeft<=0){S.tryout.done=true;render()}
    else{const e=$('#timerDisplay');if(e)e.textContent=fmt(S.tryout.timeLeft)}
  },1000);
  nav('tryout');
}

// ============================================================
// FLASHCARD
// ============================================================
function flashcard(c){
  if(S.flashcard.active&&!S.flashcard.cards.length) S.flashcard.active=false;
  if(!S.flashcard.active){
    c.innerHTML=`<div style="text-align:center;padding:40px 0"><div style="font-size:48px;margin-bottom:12px">🃏</div><div style="font-size:18px;font-weight:600;margin-bottom:20px">${DB.allFlashcards.length} Flashcard</div><div class="btn-group" style="justify-content:center"><button class="btn btn-primary" onclick="startFlashcards('all')">Semua (${DB.allFlashcards.length})</button>${DB.topics.map(t=>`<button class="btn" onclick="startFlashcards('${t.id}')">${t.icon} ${t.name}</button>`).join('')}</div></div>`;
    return;
  }
  const cards=S.flashcard.cards;const idx=S.flashcard.idx;
  if(!cards.length||idx>=cards.length){S.flashcard.active=false;flashcard(c);return}
  const card=cards[idx];
  c.innerHTML=`
    <div style="text-align:center;max-width:580px;margin:0 auto">
      <div style="font-size:12px;color:var(--ink-3);margin-bottom:10px;font-family:var(--mono)">${idx+1}/${cards.length}</div>
      <div class="fc-card" onclick="this.classList.toggle('flipped')">
        <div class="fc-front">${card.front}</div>
        <div class="fc-back">${card.back}</div>
        <div class="fc-meta">${card.topicName} · ${card.conceptName}</div>
        <div class="fc-hint">👆 Klik untuk balik</div>
      </div>
      <div class="btn-group" style="justify-content:center;margin-top:14px">
        <button class="btn btn-sm" onclick="prevFc()">←</button>
        <button class="btn btn-primary btn-sm" onclick="nextFc()">→</button>
      </div>
      <button class="btn btn-sm" style="margin-top:8px" onclick="startFlashcards('${S.flashcard.topicId||'all'}')">🔄 Acak Ulang</button>
    </div>
  `;
}
function startFlashcards(t='all'){
  let cards=t==='all'?[...DB.allFlashcards]:DB.allFlashcards.filter(f=>f.topicId===t);
  S.flashcard={active:true,cards:shf(cards),idx:0,topicId:t};
  nav('flashcard');
}
function nextFc(){S.flashcard.idx++;render()}
function prevFc(){if(S.flashcard.idx>0)S.flashcard.idx--;render()}

// ============================================================
// CARI
// ============================================================
function cari(c){
  c.innerHTML=`
    <div class="card" style="padding:16px 20px;margin-bottom:20px">
      <div class="section-title" style="margin-bottom:8px">🔍 Cari</div>
      <div class="search-wrap">
        <input type="text" id="searchInput" placeholder="Cari konsep, soal, atau flashcard..." autofocus>
        <div class="search-results" id="searchResults" style="display:none"></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="card"><div class="card-header">💡 Tips</div><div style="font-size:13px;color:var(--ink-2)">Cari kata kunci: <strong>osteoblas</strong>, <strong>foramen</strong>, <strong>carpal tunnel</strong>, <strong>klumpke</strong>, <strong>ossifikasi</strong>...</div></div>
      <div class="card"><div class="card-header">🏷️ Topik</div><div style="font-size:13px">${DB.topics.map(t=>`<a href="#" style="display:inline-block;margin-right:8px" onclick="nav('materi',{selectedTopic:'${t.id}'});return false">${t.icon} ${t.name}</a>`).join('')}</div></div>
    </div>
  `;
  const inp=$('#searchInput');const res=$('#searchResults');let tm;
  inp.addEventListener('input',function(){
    clearTimeout(tm);
    tm=setTimeout(()=>search(this.value,res),150);
  });
}

function search(q,cont){
  if(!q||q.length<2){cont.style.display='none';return}
  const query=q.toLowerCase();
  let concepts=[],questions=[],flashcards=[];
  DB.topics.forEach(t=>{t.subtopics.forEach(st=>{st.concepts.forEach(c=>{
    if(c.name.toLowerCase().includes(query)||c.definition.toLowerCase().includes(query)) concepts.push({id:c.id,name:c.name,topic:t.name});
    c.questions.forEach(qq=>{if(qq.text.toLowerCase().includes(query)) questions.push({text:qq.text.substring(0,80)+'...',concept:c.name,answerIdx:qq.answerIdx})});
    c.flashcards.forEach(f=>{if(f.front.toLowerCase().includes(query)||f.back.toLowerCase().includes(query)) flashcards.push({front:f.front,concept:c.name})});
  });});});
  let html='';
  if(concepts.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--gold)">KONSEP</div>${concepts.slice(0,5).map(c=>`<div class="sr-item" onclick="nav('materi',{selectedConcept:'${c.id}'});document.getElementById('searchResults').style.display='none'"><span class="sr-type">${c.topic}</span><br>${c.name}</div>`).join('')}`;
  if(questions.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--gold)">SOAL</div>${questions.slice(0,5).map(q=>`<div class="sr-item" onclick="document.getElementById('searchInput').value='${q.text.substring(0,30)}';document.getElementById('searchResults').style.display='none'"><span class="sr-type">${q.concept}</span><br>${q.text}</div>`).join('')}`;
  if(flashcards.length) html+=`<div style="padding:6px 14px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--gold)">FLASHCARD</div>${flashcards.slice(0,5).map(f=>`<div class="sr-item"><span class="sr-type">${f.concept}</span><br>${f.front}</div>`).join('')}`;
  if(!html) html='<div class="sr-item" style="color:var(--ink-3)">Tidak ditemukan</div>';
  cont.innerHTML=html;cont.style.display='block';
}

// ============================================================
// INIT
// ============================================================
$$('.nav-item[data-view]').forEach(el=>el.addEventListener('click',function(){nav(this.dataset.view)}));
// Close sidebar on click outside
document.addEventListener('click',e=>{
  if(window.innerWidth<=768&&!e.target.closest('.sidebar')&&!e.target.closest('#menuBtn'))$('#sidebar')?.classList.remove('open');
});
render();


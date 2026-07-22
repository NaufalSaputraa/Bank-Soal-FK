// ============================================================
// KNOWLEDGE BASE — Blok Muskuloskeletal
// SUSUNAN: per file sumber → per topik → per konsep
// ============================================================
const DB = { sources: [] };

// helpers
function q(text, answerIdx, opts, tags = [], explanation = "") {
  return { text, opts, answerIdx, tags, explanation };
}
function fc(front, back, tags = []) {
  return { front, back, tags };
}

// ──────────────────── FILE 1 ────────────────────
// 2026 PR + MikrobFN.pdf — Mikrobiologi
DB.sources.push({
  id: "file-1-mikro",
  name: "PR + Mikrobiologi",
  short: "File 1",
  fileName: "2026 PR+MikrobFN.pdf",
  icon: "🦠", color: "#b08a3e",
  desc: "Flora normal, bakteri patogen, pewarnaan, desinfeksi, sterilisasi, infeksi nosokomial.",
  concepts: [
    {
      id: "flora-normal",
      name: "Flora Normal Tubuh",
      definition: "Mikroorganisme menetap di permukaan tubuh tanpa menimbulkan penyakit pada keadaan normal.",
      keyPoints: [
        "Melindungi dari patogen: modifikasi pH, hambat tempat ikat, produksi bakteriosin",
        "Faktor oportunistik: invasi, komponen permukaan, kolonisasi, predisposisi host",
        "Kulit: S. epidermidis (dihambat lisozim)",
        "Kolon: 96% anaerob, Clostridium sp. (gelembung gas)",
        "Vagina: Candida albicans (kandidiasis oportunistik)",
        "Saluran napas: Strep. viridans → endokarditis subakut",
        "Traktus urinarius: >10⁵ sel/ml → ISK",
        "Area steril traktus respiratorius: alveoli, nasofaring"
      ],
      questions: [
        q("Flora normal mengurangi kolonisasi patogen dengan cara?", 0, ["Modifikasi pH, hambat tempat ikat, produksi bakteriosin","Invasi dan toksigenitas","Produksi endotoksin","Pembentukan spora"], [], "Flora normal melindungi melalui 3 mekanisme: (1) modifikasi pH lingkungan, (2) kompetisi tempat pengikatan, (3) produksi bakteriosin yang membunuh patogen."),
        q("Faktor flora normal jadi oportunistik?", 0, ["Invasi, komponen permukaan, kolonisasi, predisposisi host","Nutrisi","Kebersihan","Kondisi geografis"], [], "Faktor predisposisi host: imunokompromis, diabetes, pemakaian antibiotik lama, kateter, luka operasi. Bakteri komensal jadi invasif saat pertahanan tubuh menurun."),
        q("Flora kulit yang dihambat lisozim?", 0, ["Staphylococcus epidermidis","Escherichia coli","Salmonella typhi","Shigella dysentriae"], [], "Lisozim: enzim dalam keringat, air mata, & saliva. Merusak peptidoglikan dinding sel bakteri Gram positif. S. epidermidis adalah flora normal kulit yang rentan."),
        q("Bakteri anaerob kolon penyebab infeksi gelembung gas?", 0, ["Clostridium sp.","Escherichia coli","Staphylococcus sp","Streptococcus sp"], [], "Clostridium perfringens: bakteri anaerob Gram positif penghasil gas. Menyebabkan gas gangrene (nekrosis jaringan + gelembung gas). Spora di tanah. Kontaminasi luka."),
        q("Flora vagina oportunistik penyebab kandidiasis?", 0, ["Candida albicans","Enterococcus faecalis","Aspergillus sp.","Penicillium sp."], [], "Candida albicans: jamur komensal vagina. Oportunistik jika imun turun, pH berubah, atau pemakaian antibiotik. Menyebabkan kandidiasis vaginalis (flora putih gatal)."),
        q("Strep. viridans pada katup jantung abnormal menyebabkan?", 0, ["Endokarditis subakut","Pneumonia","Meningitis","Septikemia"], [], "Streptococcus viridans: flora normal mulut & saluran napas. Bisa masuk aliran darah saat ekstraksi gigi. Menempel di katup jantung abnormal → endokarditis subakut bakterialis."),
        q("Jumlah bakteri urine menandakan ISK?", 0, [">10⁵ sel/ml",">1000 sel/ml",">100 sel/ml",">10 sel/ml"], [], "Bakteriuria signifikan: >10^5 CFU/ml urine midstream. Jika >10^5 disertai gejala → ISK. <10^5 kemungkinan kontaminasi flora normal uretra."),
        q("Faktor kolonisasi flora vagina?", 0, ["Umur, hormonal, kebiasaan seksual, antiseptik genitalia","pH vagina","Jumlah flora normal","Mikroba pembentuk biofilm"]),
        q("Area traktus respiratorius yang steril?", 0, ["Alveoli, nasofaring","Laring, sinus nasalis","Orofaring, tonsil","Mulut, tenggorokan"], [], "Alveoli & nasofaring bagian bawah steril (tidak ada flora normal). Laring, sinus, bronkioli, orofaring, tonsil memiliki flora normal. Paru normal = steril."),
        q("Sifat oportunis Bacteroides di kolon → trauma → rongga perineum?", 0, ["Supurasi & bakteriemia","Cystitis","Apendisitis","Pyelonefritis","Uretritis"]),
        q("Faktor keseimbangan flora normal (2 anak sakit, 4 tidak)?", 0, ["Virulensi","Nutrisi","Hygiene","Vaksinasi","Iklim"]),
        q("Area traktus gastrointestinal yang relatif steril?", 0, ["Hati & kantung empedu","Usus besar, ileum","Esofagus","Usus halus"]),
        q("Kontaminasi spora Clostridia → efek neurotoksik?", 0, ["Clostridium botulinum","C. perfringens A","C. defecile","C. tetani"]),
        q("Koloni MacConkey merah → patogen oportunis saluran cerna & kontaminan perairan?", 0, ["Escherichia coli","C. diphteriae","M. leprae","S. pneumonia"]),
        q("Imun lemah → kolonisasi mukosa invasif → meningitis?", 0, ["Neisseria meningitidis","N. gonorrhoeae","B. anthracis","B. subtilis"]),
        q("Bahan disinfeksi cegah kolonisasi Candida biofilm kateter?", 0, ["Khlorin","Alkohol","Aseton","Spirtus"]),
        q("Infeksi nosokomial → masalah bagi rumah sakit?", 0, ["Bertambah biaya operasional","Menularkan bakteri resisten","Daya tampung menurun","Masa rawat bertambah"]),
        q("Sampel ILO (infeksi luka operasi)?", 0, ["Drainase purulen","Sputum","Feses","Urin"]),
        q("Surveilans infeksi nosokomial: typing bakteri & sensitivitas?", 0, ["Serotyping","Biotyping","Phage typing","Antibiogram"]),

        q("Flora komensal saluran napas yang jadi oportunistik?", 0, ["Strep. viridans → endokarditis","Candida → bakteriemi","Rotavirus → ISK","C. diphteriae → tetanus"]),
        q("Bakteri flora usus yang invasif dan resisten fagosit?", 0, ["Leukosidin, hemolisin, fibrinolisin","Flagel, spora, kapsul","Peptidoglikan, asam mikolat","Endotoksin, LPS"]),
        q("Faktor penentu mikroflora traktus gastrointestinal?", 0, ["Sanitasi, higiene, habitasi","Invasi dan toksigenitas","Komponen permukaan dan enzim","Sistem imun host"]),
        q("Clostridia resisten akibat antibiotik oral?", 0, ["Clostridium defecile","Clostridium perfringens","Clostridium septikum","Clostridium tetani"]),
        q("Flora di liang telinga yang tahan asam?", 0, ["Mycobacterium saprofit","Propionibacterium sp.","S. aureus","P. aeruginosa"]),
        q("Bakteri tahan asam diidentifikasi dengan pewarnaan?", 0, ["Ziehl-Neelsen","Gram","Fuelgen","Burri-Gins"], [], "Ziehl-Neelsen (pewarnaan tahan asam): menggunakan karbol fuchsin + pemanasan. Mycobacterium memiliki asam mikolat di dinding sel → tahan dekolorisasi asam-alkohol. Warna: merah."),
        q("Media isolasi bakteri tahan asam?", 0, ["Lowenstein-Jensen","Brain Heart Infusion","BGLB","Muller Hinton"], [], "Lowenstein-Jensen: media padat untuk Mycobacterium tuberculosis. Mengandung telur, gliserol, & malachite green. Koloni tumbuh lambat (3-6 minggu)."),
        q("Bakteri penyebab pneumonia?", 0, ["Streptococcus pneumonia","P. aeruginosa","S. aureus","Mycobacterium saprofit"]),
        q("Mycobacterium tuberculosis penyebab?", 0, ["TBC (kronis batuk berdarah)","Pneumonia","Meningitis","Septikemia"]),
        q("Endotoksin dihasilkan bakteri?", 0, ["Escherichia coli","Strep. pneumonia","S. aureus","Mycobacterium atipik"], [], "Endotoksin = Lipopolisakarida (LPS) di membran luar Gram negatif. Terdiri dari lipid A (toksik), core polisakarida, & O-antigen. Menyebabkan demam, syok septik."),
        q("Eksotoksin dapat dinonaktifkan dengan?", 0, ["Fenol, formaldehida","Alkohol 60%","Aseton","Etanol 40%"], [], "Formaldehida & fenol: menginaktivasi toksin menjadi toksoid. Toksoid mempertahankan antigenisitas tapi kehilangan toksisitas. Digunakan untuk vaksin (difteri, tetanus)."),
        q("Toksoid dari eksotoksin bakteri?", 0, ["Corynebacterium diphteriae","Salmonella typhi","Clostridium tetani","Bordetella pertusis"], [], "Corynebacterium diphtheriae menghasilkan eksotoksin difteri. Eksotoksin dinonaktifkan dengan formaldehida → toksoid difteri (vaksin DPT). Toksoid merangsang antibodi antitoksin."),
        q("Bakteri penyebab infeksi koliform (MacConkey merah)?", 0, ["Escherichia coli","C. diphteriae","M. leprae","N. meningitides"], [], "E. coli: basil Gram negatif, fermentasi laktat → koloni merah/pink di MacConkey. Patogen oportunis saluran cerna. Penyebab ISK & diare paling umum."),
        q("Bakteri tahan asam penyebab infeksi kronis?", 0, ["Mycobacterium tuberculosis","Propionibacterium","S. aureus","P. aeruginosa"], [], "Mycobacterium tuberculosis: basil tahan asam (BTA). Penyebab TB paru. Menular via droplet. Kronis: batuk >3 minggu, hemoptisis, demam, BB turun. Diagnosis: BTA sputum + kultur Lowenstein."),
      ],
      flashcards: [
        fc("Cara flora normal lindungi tubuh?","Modifikasi pH, hambat tempat ikat, bakteriosin"),
        fc("Strep. viridans di katup jantung?","Endokarditis subakut"),
        fc("Candida albicans di vagina?","Kandidiasis oportunistik"),
        fc("Bakteri tahan asam?","Mycobacterium (Ziehl-Neelsen, Lowenstein-Jensen)"),
        fc("Endotoksin?","Lipopolisakarida dari Gram negatif (E. coli)"),
        fc("Toksoid?","Eksotoksin dinonaktifkan → vaksin (difteri, tetanus)"),
        fc("MacConkey koloni merah?","E. coli (coliform, gram negatif, enterik)")
      ]
    },
    {
      id: "desinfeksi-sterilisasi",
      name: "Desinfeksi & Sterilisasi",
      definition: "Metode membunuh mikroorganisme: fisika (panas, radiasi) dan kimia (desinfektan, antiseptik).",
      keyPoints: [
        "Pemanasan kering: flaming, incineration",
        "Pemanasan basah: autoclave (>100°C), boiling, pasteurisasi",
        "Autoclave: sterilisasi >100°C uap bertekanan",
        "Karbol/lisol: meningkatkan permeabilitas membran plasma",
        "Savlon: tidak membunuh HIV & Hepatitis B",
        "Bycline: merusak membran sel bakteri",
        "Alkohol 70-80% efektif, tapi kurang terhadap spora",
        "Uji koefisien fenol: pakai Staphylococcus aureus",
        "Desinfektan vs antiseptik: antiseptik untuk jaringan hidup"
      ],
      questions: [
        q("Contoh pemanasan kering?", 0, ["Flaming","Autoclave","Pasteurisasi","Radiasi"], [], "Flaming: sterilisasi dengan api langsung. Untuk inokulum loop. Incineration: pembakaran. Autoclave = pemanasan basah (uap bertekanan 121°C, 15 menit)."),
        q("Contoh sterilisasi pemanasan basah?", 0, ["Autoclave","Flaming","Radiasi","Boiling"], [], "Autoclave: uap bertekanan 121°C, 15 menit. Membunuh spora. Boiling: 100°C, tidak bunuh spora. Pasteurisasi: 72°C 15 detik, bunuh patogen bukan spora."),
        q("Desinfektan tingkatkan permeabilitas membran plasma?", 0, ["Karbol/Lisol","Etanol","Klorin","Formalin"], [], "Fenol (karbol) & lisol: denaturasi protein & merusak membran sel. Fenol adalah desinfektan pertama oleh Joseph Lister. Sekarang jarang karena toksisitas."),
        q("Desinfektan tidak membunuh HIV & Hepatitis B?", 0, ["Savlon","Betadin","Klorin","Etanol"], [], "Savlon (cetrimide + klorheksidin): antiseptik ringan. Tidak efektif terhadap virus HIV & HBV. Untuk HIV/HBV butuh etanol 70%, hipoklorit, atau glutaraldehid."),
        q("Bakteri untuk uji koefisien fenol?", 0, ["Staphylococcus aureus","Salmonella typhi","Bacillus subtilis","E. coli"], [], "Staphylococcus aureus: bakteri Gram positif, non-spora. Digunakan sebagai standar uji koefisien fenol untuk mengukur efektivitas desinfektan. Koefisien fenol = rasio aktivitas vs fenol."),
        q("Mekanisme bycline membunuh bakteri?", 0, ["Merusak membran sel","Denaturasi protein","Oksidasi protein","Inaktivasi enzim"], [], "Bycline (klorin dioksida): oksidator kuat. Merusak membran sel & mengoksidasi protein bakteri. Efektif terhadap bakteri, virus, spora. Digunakan di faskes."),
        q("Waktu efektif dekontaminasi HIV & Hepatitis B?", 0, ["10 menit","5 menit","15 menit","30 menit"], [], "10 menit: waktu kontak minimal untuk desinfektan tingkat tinggi membunuh HIV & HBV. Alkohol 70%: 1-2 menit. Klorin 0.5%: 10 menit."),
        q("Kandungan antiseptik tangan kurang efektif terhadap?", 0, ["Spora","Pili","Flagel","Membran sel"]),
        q("Enzim air mata yang melisis bakteri?", 0, ["Lisozim","Protease","Lipase","Hialuronidase"], [], "Lisozim (muramidase): enzim dalam air mata, saliva, keringat. Memecah ikatan β-1,4 glikosidik peptidoglikan dinding sel bakteri Gram positif."),
        q("Faktor internal hilangkan flora transien kulit?", 0, ["pH rendah, asam lemak, kelenjar sebasea, lisozim","Teknik cuci tangan","Antiseptik","Sabun"], [], "pH rendah (5.5), asam lemak, kelenjar sebasea (sebum), & lisozim adalah pertahanan kimiawi kulit. Flora transien dapat dihilangkan dengan cuci tangan biasa."),
        q("Peran SALT (skin-associated lymphoid tissue)?", 0, ["Memaparkan antigen & merangsang sel imun (sitokin)","Produksi lisozim","Fagositosis","Pembentukan biofilm"]),
        q("Tahap paling penting biofilm untuk melekat?", 0, ["Adhesi","Maturasi","Dispersi","Propagasi"], [], "Adhesi: tahap pertama & paling kritis pembentukan biofilm. Bakteri melekat ke permukaan melalui pili, fimbriae, & adhesin. Setelah adhesi → maturasi → produksi EPS."),
        q("Infeksi nosokomial patogen kondisional?", 0, ["Staphylococcus aureus","Salmonella typhi","Mycobacterium atipik","Proteus"]),
        q("Antiseptik cara kerja merusak protein & asam nukleat?", 0, ["Hidrogen peroksida","Hibiscrub","Povidon碘in","Hibitane"]),
        q("Disinfektan yang bisa jadi antiseptik dosis tertentu?", 0, ["Betadine","Handscrub","Byclin","H2O2"]),
        q("Cara penyucihamaan yang benar?", 0, ["Luar → dalam → luar","Dalam → luar","Luar → dalam","Bebas"]),
        q("Langkah pertama aseptik sebelum operasi?", 0, ["Dekontaminasi","Disinfeksi","Cuci tangan","Sterilisasi"]),
        q("Bycline mekanisme kerja?", 0, ["Merusak membran sel","Denaturasi protein","Oksidasi protein","Inaktivasi enzim"]),
        q("Desinfektan tingkatkan permeabilitas dinding sitoplasma?", 0, ["Karbol","Formalin","Lisol","Etanol","Klorin"]),

        q("Cara penyucihamaan yang benar?", 0, ["Luar → dalam → luar","Dalam → luar","Luar → dalam","Bebas"]),
        q("Langkah pertama aseptik sebelum operasi?", 0, ["Dekontaminasi","Disinfeksi","Cuci tangan","Sterilisasi"]),
      ],
      flashcards: [
        fc("Pemanasan kering?","Flaming, incineration"),
        fc("Pemanasan basah?","Autoclave, boiling, pasteurisasi"),
        fc("Autoclave?","Sterilisasi >100°C uap bertekanan"),
        fc("Savlon?","Tidak membunuh HIV & Hepatitis B"),
        fc("Karbol?","Meningkatkan permeabilitas membran plasma"),
        fc("Bycline?","Merusak membran sel bakteri"),
        fc("Uji koefisien fenol?","Gunakan Staphylococcus aureus"),
        fc("Lisozim?","Enzim air mata, lisis bakteri"),
      ]
    }
  ]
});

// ──────────────────── FILE 2 ────────────────────
// MTB UB PAT FN MUSKULOSKELETAL 1.pdf — Anatomi & Histologi
DB.sources.push({
  id: "file-2-mtb1",
  name: "MTB UB PAT FN MUSKULOSKELETAL 1",
  short: "File 2",
  fileName: "MTB UB PAT FN MUSKULOSKELETAL 1.pdf",
  icon: "📘", color: "#1f4b48",
  desc: "Anatomi (Cranium, Ekstremitas, Myologi, Arthrologi) & Histologi (Tulang, Ossifikasi, Kartilago).",
  concepts: [
    {
      id: "f2-cranium",
      name: "Cranium & Foramen",
      definition: "Tengkorak (neurocranium), lubang-lubang basis cranii, dan sutura.",
      keyPoints: [
        "Neurocranium: frontale, 2 parietale, 2 temporale, occipitale, sphenoidale, ethmoidale",
        "Os sphenoidale termasuk neurocranium",
        "Foramen rotundum → N. maxillaris (V2)",
        "Foramen ovale → N. mandibularis (V3)",
        "Foramen spinosum → A. meningea media",
        "Foramen jugulare → N. IX, X, XI",
        "Foramen magnum → medula oblongata → spinalis",
        "Meatus acusticus internus → N. VII & VIII",
        "Sutura coronalis → frontal + parietal",
        "Sutura lambdoidea → parietal + occipital",
        "Palatum durum: processus palatinus maxillae + lamina horizontalis ossis palatini",
        "Os palatina membentuk palatum durum",
        "Sella turcica → glandula hipofisis"
      ],
      questions: [
        q("Tulang manakah yang termasuk Neurocranium?", 0, ["Os occipitale, parietale, temporale, frontale, sphenoidale, ethmoidale","Os maxillae, mandibula, zygomaticum","Os frontale, parietale, nasale","Os occipitale, temporale, mandibula"]),
        q("Os manakah yang termasuk neurocranium?", 0, ["Os sphenoidale","Os maxillaris","Os zygomaticum","Os patella"]),
        q("Pada basis cranii foramen rotundum. Nervus yang keluar?", 0, ["N. maxillaris (V2)","N. mandibularis (V3)","N. ophthalmicus (V1)","N. facialis (VII)"], [], "Foramen rotundum: terletak di os sphenoidale, dilalui oleh V2 (N. maxillaris). Foramen ovale = V3, fissura orbitalis superior = V1."),
        q("Meatus acusticus internus tempat keluar nervus?", 0, ["N. VII & VIII","N. V & VI","N. IX & X","N. III & IV"], [], "Meatus acusticus internus di os temporale pars petrosa → N. facialis (VII) dan N. vestibulocochlearis (VIII)."),
        q("Lubang tempat keluar nervus IX, X, XI?", 0, ["Foramen jugulare","Foramen magnum","Foramen ovale","Foramen spinosum"], [], "Foramen jugulare di fossa cranii posterior: dilewati N. IX (glossopharyngeus), X (vagus), XI (accessorius)."),
        q("Arteri meningea media masuk melalui?", 0, ["Foramen spinosum","Foramen ovale","Foramen rotundum","Foramen magnum"], [], "Foramen spinosum: cabang A. maxillaris → A. meningea media. Satu-satunya foramen yang dilalui arteri (bukan saraf)."),
        q("Tempat medula oblongata jadi medula spinalis?", 0, ["Foramen magnum","Foramen jugulare","Foramen ovale","Canalis opticus"], [], "Foramen magnum di os occipitale: tempat peralihan medula oblongata (dari cranium) menjadi medula spinalis (ke canalis vertebralis)."),
        q("Glandula hipofisis terletak di?", 0, ["Sella turcica","Fossa cranii anterior","Fossa condylaris","Fossa jugularis"], [], "Sella turcica (fossa hipofisialis) di os sphenoidale — tempat glandula pituitaria/hipofisis."),
        q("Sendi antara os parietalis dan os frontalis?", 0, ["Sutura coronalis","Sutura sagittalis","Sutura lambdoidea","Sutura squamosa"], [], "Sutura coronalis: antara os frontale dan os parietale. Sutura sagittalis = antar 2 parietal. Sutura lambdoidea = parietal + occipital."),
        q("Sendi antara Os parietale dan Os occipitale?", 0, ["Sutura lambdoidea","Sutura coronalis","Atlantooccipitalis","Sutura sagitalis"], [], "Sutura lambdoidea menghubungkan os parietale dan os occipitale — bentuknya seperti huruf lambda (Λ)."),
        q("Tulang yang membangun palatum durum?", 0, ["Os palatina","Os nasal","Os mandibula","Os lacrimale"]),
        q("Sendi antara os mandibula dan cranium?", 0, ["TMJ","Atlantooccipitalis","Atlantoaxialis","Symphysis mandibulae"]),
        q("Hubungan antar corpus vertebra?", 0, ["Discus intervertebralis","Zygapophysialis","Lig. flavum","Symphysis pubis"]),
        q("Otot mastikasi meliputi?", 0, ["Temporalis, masseter, pterygoideus lat & med","Buccinator, orbicularis oris","SCM, trapezius","Digastricus, mylohyoideus"]),
        q("Jumlah nervi cervicales?", 0, ["8 pasang","5 pasang","7 pasang","12 pasang"]),
        q("Foramen transversarium dilewati?", 0, ["A. vertebralis","A. carotis interna","N. spinalis","A. basilaris"]),
        q("N. spinalis keluar melalui?", 0, ["Foramen intervertebrale","Foramen transversarium","Foramen vertebrale","Canalis centralis"]),
        q("Angulus sternalis (Ludovici) patokan costa?", 0, ["Costa II","Costa I","Costa III","Costa VII"]),
        q("Costa spuria fluctuantes?", 0, ["Costa XI","Costa I","Costa II","Costa VII"]),
        q("Kumpulan badan sel saraf di luar SSP?", 0, ["Ganglion","Efektor","Nervus","Soma cell"]),
        q("Jaringan ikat sekitar 1 fasciculus?", 0, ["Perimysium","Endomysium","Epimysium","Sarkolema"]),
        q("Bagian perut otot seran lintang?", 0, ["Venter","Caput","Origo","Insertio"]),
        q("Arteri kompartemen posterior lengan atas?", 0, ["A. profunda brachii","A. brachialis","A. radialis","A. ulnaris"]),
        q("Otot yang memiliki dua caput?", 0, ["M. biceps brachii","M. quadriceps femoris","M. pronator quadratus","M. triceps brachii","M. semimembranosus"]),
        q("Cairan yang mengisi ruang articulatio diartrosis?", 0, ["Cairan synovial","Capsule articulatio","Discus articulatio","Cartilage articulatio"]),
        q("Patella merupakan segmen medulla spinalis?", 0, ["L2-L4","C5-C6","T1-T4","S1-S2"]),

      ],
      flashcards: [
        fc("Neurocranium?","8 tulang: frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid"),
        fc("Foramen rotundum?","N. maxillaris (V2)"),
        fc("Foramen jugulare?","N. IX, X, XI"),
        fc("Sutura coronalis?","Frontal + parietal"),
        fc("Palatum durum?","Os palatina"),
        fc("Jumlah nervi cervicales?","8 pasang"),
        fc("Foramen transversarium?","A. vertebralis"),
        fc("Costa spuria fluctuantes?","Costa XI"),
        fc("Otot mastikasi?","Temporalis, masseter, pterygoideus"),
        fc("TMJ?","Temporomandibular joint"),
        fc("Discus intervertebralis?","Hubungan antar corpus vertebra"),
        fc("Perimysium?","Jaringan ikat sekitar fasciculus"),
        fc("Venter?","Bagian perut otot"),
      ]
    },
    {
      id: "f2-ekstremitas",
      name: "Anatomi Ekstremitas",
      definition: "Anatomi ekstremitas atas & bawah termasuk persarafan, pembuluh darah, dan area topografis.",
      keyPoints: [
        "Plexus brachialis: C5-Th1",
        "Fasc. posterior → N. radialis, fasc. medialis → N. ulnaris",
        "Erb-Duchenne palsy: C5-C6 → waiter's tip",
        "Klumpke palsy: C8-Th1 → claw hand",
        "Winged scapula: N. thoracicus longus",
        "Wrist drop: N. radialis (Saturday night palsy)",
        "Claw hand: N. ulnaris",
        "N. axillaris → kulit lateral bahu",
        "M. pectoralis minor membagi a. axillaris",
        "V. mediana cubiti di fossa cubiti",
        "A. radialis di lateral M. flexor carpi radialis",
        "Refleks biceps: C5-C6",
        "Trigonum femorale: sup=lig.inguinale, lat=m.sartorius, med=m.adductor longus",
        "Isi trigonum (lat→med): nervus, arteri, vena",
        "N. ischiadicus → n. tibialis & n. peroneus communis",
        "Foot drop: n. peroneus communis di collum fibulae",
        "First web space: n. peroneus profundus",
        "Tendon Achilles: m. gastrocnemius + m. soleus",
        "V. saphena magna → v. femoralis",
        "V. saphena parva → v. poplitea",
        "Hunter's canal: dilewati a.femoralis, v.femoralis, n.saphenus (BUKAN n.femoralis)",
        "A. circumflexa femoris medialis → nekrosis caput femoris jika rusak",
        "N. ischiadicus keluar via for. ischiadicum majus pars infrapiriformis"
      ],
      questions: [
        q("Winged scapula, saraf yang jejas?", 0, ["N. thoracicus longus","N. axillaris","N. suprascapularis","N. dorsalis scapulae"], [], "N. thoracicus longus (C5-C7) menginervasi M. serratus anterior. Jika rusak → scapula menonjol (winged scapula)."),
        q("Abduksi lengan 15° pertama?", 0, ["M. supraspinatus","M. deltoideus","M. infraspinatus","M. teres minor"], [], "M. supraspinatus menginisiasi abduksi 0-15°. M. deltoideus mengambil alih 15-90°. Rotator cuff: supraspinatus, infraspinatus, teres minor, subscapularis."),
        q("Erb-Duchenne palsy (C5-C6)?", 0, ["Waiter's tip","Claw hand","Wrist drop","Carpal tunnel"], [], "Erb-Duchenne: lesi C5-C6 → lengan tergantung rotasi medial (waiter's tip). N. axillaris + n. suprascapularis + n. musculocutaneus terganggu."),
        q("Klumpke palsy (C8-Th1)?", 0, ["Claw hand","Waiter's tip","Wrist drop","Saturday night"], [], "Klumpke: lesi C8-Th1 → N. ulnaris + N. medianus pars medial → claw hand. Sering akibat trauma abduksi lengan (lahir, jatuh)."),
        q("Wrist drop lesi?", 0, ["N. radialis","N. medianus","N. ulnaris","N. musculocutaneus"], [], "N. radialis (C5-C8) menginervasi ekstensor lengan bawah. Lesi → wrist drop. Saturday night palsy: tidur dengan lengan tergantung."),
        q("Claw hand lesi kronis?", 0, ["N. ulnaris","N. medianus","N. radialis","N. axillaris"], [], "N. ulnaris (C8-Th1) → otot intrinsik tangan. Lesi → hyperextension MCP + fleksi IP (claw hand). Jari 4-5 paling parah."),
        q("Parestesia jari ke-5?", 0, ["N. ulnaris","N. medianus","N. radialis","N. cutaneus antebrachii"], [], "N. ulnaris: area sensorik di sisi medial tangan (jari 5 + setengah jari 4). Juga berjalan di epicondylus medialis (fungky bone)."),
        q("Nervus di epicondylus medialis?", 0, ["N. ulnaris","N. radialis","N. musculocutaneus","N. axillaris"]),
        q("Pembagi arteri axillaris?", 0, ["M. pectoralis minor","M. pectoralis major","M. teres major","Clavicula"], [], "M. pectoralis minor membagi a. axillaris jadi 3 bagian: pars proximalis (sebelum), retropectoralis (di belakang), distalis (setelah otot)."),
        q("Vena di fossa cubiti hubungkan cephalica & basilica?", 0, ["V. mediana cubiti","V. axillaris","V. brachialis","V. saphena magna"], [], "V. mediana cubiti di fossa cubiti — vena yang menghubungkan v. cephalica (lateral) dan v. basilica (medial). Tempat favorit pungsi vena."),
        q("Fraktur collum chirurgicum humeri risiko?", 0, ["N. axillaris & A. circumflexa humeri post.","N. radialis & A. profunda brachii","N. ulnaris","N. medianus"], [], "N. axillaris dan A. circumflexa humeri posterior melingkari collum chirurgicum humeri. Fraktur di sini berisiko merusak keduanya → paralysis deltoid."),
        q("A. radialis di lateral tendon?", 0, ["M. flexor carpi radialis","M. flexor carpi ulnaris","M. palmaris longus","M. brachioradialis"]),
        q("Nervus kulit lateral bahu?", 0, ["N. cutaneus superior lateral","N. axillaris","N. radialis","N. suprascapularis"]),
        q("Pemeriksaan refleks biceps (segmen)?", 0, ["C5-C6","C4-C5","C6-C7","C8-T1"]),
        q("Batas lateral trigonum femorale?", 0, ["M. sartorius","M. adductor longus","Lig. inguinale","M. pectineus"], [], "Trigonum femorale: superior = lig. inguinale, lateral = m. sartorius, medial = m. adductor longus. Isi lateral ke medial: Nervus, Arteri, Vena (NAV)."),
        q("Batas superior trigonum femorale?", 0, ["Ligamentum inguinale","M. sartorius","M. adductor longus","M. pectineus"], [], "Ligamentum inguinale dari SIAS ke tuberkulum pubikum. Batas antara abdomen dan femur. Juga atap lacuna musculorum & vasorum."),
        q("Batas medial trigonum femorale?", 0, ["M. adductor longus","M. sartorius","Lig. inguinale","M. rectus femoris"], [], "M. adductor longus: batas medial trigonum femorale. Otot ini juga bagian dari lantai trigonum bersama m. pectineus & m. iliopsoas."),
        q("Isi trigonum femorale (lateral→medial)?", 0, ["Nervus – arteri – vena","Arteri – vena – nervus","Vena – arteri – nervus","Arteri – nervus – vena"], [], "Mnemonik NAV: Nervus, Arteri, Vena (lateral ke medial). Lebih lengkap NAVEL: Nerve, Artery, Vein, Empty space, Lymph nodes."),
        q("Tendon Achilles dibentuk?", 0, ["M. gastrocnemius & soleus","M. tibialis posterior & soleus","M. peroneus longus & brevis","M. flexor hallucis longus"], [], "Tendon Achilles (tendo calcaneus) = tendon terkuat tubuh. Dibentuk penyatuan M. gastrocnemius (superfisial) & M. soleus (dalam). Insersi di tuber calcanei."),
        q("Percabangan n. ischiadicus?", 0, ["N. tibialis & peroneus communis","N. peroneus superfisial & profunda","N. tibialis & femoralis","N. femoralis & pudendus"], [], "N. ischiadicus (L4-S3) bercabang di fossa poplitea jadi N. tibialis (medial) & N. peroneus communis (lateral). Tibialis inervasi posterior, peroneus inervasi anterior & lateral."),
        q("N. tibialis menginervasi kompartemen?", 0, ["Posterior tungkai bawah","Anterior tungkai bawah","Lateral tungkai bawah"]),
        q("Foot drop lesi saraf di collum fibulae?", 0, ["N. peroneus (fibularis) communis","N. tibialis","N. saphenus","N. suralis"]),
        q("First web space inervasi?", 0, ["N. peroneus profundus","N. peroneus superficialis","N. tibialis","N. saphenus"]),
        q("Tidak melewati Hunter's Canal?", 0, ["N. femoralis","A. femoralis","V. femoralis","N. saphenus"]),
        q("Fraktur collum femoris sebabkan nekrosis?", 0, ["A. circumflexa femoris medialis","A. obturatoria","A. circumflexa femoris lateralis","A. profunda femoris"]),
        q("N. ischiadicus keluar pelvis via?", 0, ["For. ischiadicum majus pars infrapiriformis","For. ischiadicum majus pars suprapiriformis","For. ischiadicum minus","Canalis obturatorius"]),
        q("Flexor utama panggul?", 0, ["M. iliopsoas","M. rectus femoris","M. sartorius","M. gracilis"], [], "M. iliopsoas = fleksor utama panggul. M. iliacus dari fossa iliaca + M. psoas major dari vertebra L1-L5. Insersi di trochanter minor femoris. Inervasi: N. femoralis."),
        q("Otot adductor paling posterior?", 0, ["M. adductor magnus","M. adductor brevis","M. adductor longus","M. pectineus"], [], "M. adductor magnus: otot adductor terbesar & paling posterior. Punya 2 bagian: adductor (adduksi) & ischiocondylaris (ekstensi). Hiatus adductorius di bagian distal."),
        q("Unlocking lutut saat fleksi?", 0, ["M. popliteus","M. plantaris","M. gastrocnemius","M. soleus"]),
        q("V. saphena magna bermuara ke?", 0, ["V. femoralis","V. poplitea","V. iliaca externa","V. tibialis posterior"], [], "V. saphena magna: vena superfisial terpanjang. Dari dorsum pedis ke anterior medial malleolus, medial knee, fossa ovalis, lalu ke V. femoralis."),
        q("V. saphena parva bermuara ke?", 0, ["V. poplitea","V. femoralis","V. iliaca externa","V. tibialis posterior"], [], "V. saphena parva: dari lateral dorsum pedis ke posterior calf, fossa poplitea, lalu ke V. poplitea. Penting untuk evaluasi varises."),
        q("Trendelenburg sign positif → kelumpuhan?", 0, ["M. gluteus medius; N. gluteus superior","M. gluteus maximus","M. piriformis","M. quadriceps"], [], "Test Trendelenburg: berdiri 1 kaki. Jika panggul turun di sisi yang diangkat → M. gluteus medius lemah. Diinervasi N. gluteus superior (L4-S1)."),
        q("A. poplitea kelanjutan a. femoralis setelah?", 0, ["Hiatus adductorius","Trigonum femorale","Canalis inguinalis","Lacuna musculorum"], [], "A. femoralis jadi A. poplitea setelah melewati hiatus adductorius (celah di M. adductor magnus). A. poplitea bercabang jadi A. tibialis anterior & posterior."),
        q("Otot hamstring?", 0, ["Biceps femoris, semitendinosus, semimembranosus","Rectus femoris, vastus","Sartorius, gracilis","Adductor magnus, longus"], [], "Hamstring: 3 otot posterior thigh. Biceps femoris (lateral), Semitendinosus & Semimembranosus (medial). Semua dari tuber ischiadicum. Fungsi: ekstensi pinggul + fleksi lutut."),
        q("Otot tailor (fleksi, abduksi, eksorotasi, fleksi lutut)?", 0, ["M. sartorius","M. gracilis","M. rectus femoris","M. tensor fasciae latae"], [], "M. sartorius = tailor muscle. Otot terpanjang tubuh. Dari SIAS ke pes anserinus (medial tibia). Fungsi: fleksi, abduksi, rotasi eksternal panggul, fleksi lutut."),
        q("Otot rotator cuff rotasi internal?", 0, ["M. subscapularis","M. supraspinatus","M. infraspinatus","M. teres minor"], [], "Rotator cuff: SITS (Supraspinatus, Infraspinatus, Teres minor, Subscapularis). Subscapularis satu-satunya yang melakukan rotasi internal."),
        q("Struktur anatomis yang dilalui fasciculus medialis?", 0, ["Sulcus nervi ulnaris","Sulcus nervi radialis","Canalis carpi","Sulcus bicipitalis medialis"], [], "Fasciculus medialis plexus brachialis → N. ulnaris. Saraf ini berjalan di sulcus nervi ulnaris (epicondylus medialis humeri) — area yang sensitif saat terbentur (funny bone)."),
        q("Fasciculus medialis berasal dari segmen?", 0, ["C8-T1","C5-C6","T2-T5","L1-L5","S2-S4"], [], "Fasciculus medialis: C8-Th1 → N. ulnaris. Fasciculus lateralis: C5-C7 → N. musculocutaneus. Fasciculus posterior: C5-C8 → N. radialis."),
        q("N. vastus medialis dipersarafi oleh?", 0, ["N. femoralis","N. saphenus","N. suralis","N. ischiadicus","N. obturatorius"], [], "N. femoralis (L2-L4) menginervasi M. quadriceps femoris (vastus medialis, vastus lateralis, vastus intermedius, rectus femoris) dan M. sartorius."),
        q("Otot kompartemen lateral regio cruris?", 0, ["M. peroneus brevis","M. plantaris","M. tibialis anterior","M. gastrocnemius"], [], "Kompartemen lateral tungkai bawah: M. peroneus longus & M. peroneus brevis. Diinervasi N. peroneus superficialis. Fungsi: eversi kaki."),
        q("Serabut saraf anyaman di permukaan a. radialis → komponen fungsional?", 0, ["GVE simpatis postganglioner","GVA","GSA","GVE preganglioner"]),
        q("Refleks biceps brachii → saraf servikal spesifik?", 0, ["C5","C6","C7","T1","L1"]),
        q("Pemeriksaan otot gastrocnemius dengan gerakan?", 0, ["Melompat","Push up","Menjepit bola","Menendang bola"]),

      ],
      flashcards: [
        fc("Erb-Duchenne?","C5-C6 → waiter's tip"),
        fc("Klumpke?","C8-Th1 → claw hand"),
        fc("Winged scapula?","N. thoracicus longus"),
        fc("Wrist drop?","N. radialis (Saturday night)"),
        fc("Claw hand?","N. ulnaris"),
        fc("Pembagi a. axillaris?","M. pectoralis minor"),
        fc("V. mediana cubiti?","Fossa cubiti, hubung cephalica-basilica"),
        fc("Trigonum femorale?","Sup=lig.inguinale, lat=m.sartorius, med=m.adductor longus"),
        fc("Isi trigonum (lat→med)?","Nervus-Arteri-Vena (NAV)"),
        fc("Tendon Achilles?","Gastrocnemius + soleus"),
        fc("Foot drop?","N. peroneus communis di collum fibulae"),
        fc("First web space?","N. peroneus profundus"),
        fc("V. saphena magna →?","V. femoralis"),
        fc("V. saphena parva →?","V. poplitea"),
        fc("Hunter's canal tidak dilewati?","N. femoralis"),
        fc("Hamstring?","Biceps femoris, semitendinosus, semimembranosus"),
        fc("Refleks biceps?","C5-C6"),
        fc("M. popliteus?","Unlocking lutut"),
      ]
    },
    {
      id: "f2-histologi",
      name: "Histologi Tulang & Kartilago",
      definition: "Jaringan tulang (osteon, sel tulang, ossifikasi, woven bone) dan kartilago.",
      keyPoints: [
        "Osteon = sistem Havers = unit dasar tulang kompak",
        "Lamella interstitialis: di antara osteon, BUKAN bagian osteon",
        "Lamella circumferentia externa: dekat periosteum",
        "Kanal Volkmann: hubungkan antar kanal Havers (tegak lurus)",
        "Canaliculi ossei: hubungkan antar lacuna",
        "Osteoblas: kuboid basofilik, mensekresi osteoid",
        "Osteosit: sel matang di lakuna, tonjolan di kanalikuli",
        "Osteoklas: raksasa multinukleus di Lakuna Howship, resorpsi",
        "Osteoid: matriks organik belum termineralisasi",
        "Woven bone: kolagen tidak teratur, di cement akar gigi",
        "Serabut Sharpey: lekatkan periosteum ke tulang",
        "Periosteum: jaringan ikat padat luar tulang",
        "Ossifikasi intramembranosa: mesenkim → tulang (tengkorak)",
        "Ossifikasi endokondral: kartilago hialin → tulang panjang",
        "Zona proliferasi: kondrosit tumpukan koin, mitosis aktif",
        "Zona kalsifikasi: kartilago mengapur, kondrosit degenerasi",
        "Kartilago hyalin: trakea, bronkus, ventral costae",
        "Kartilago elastis: epiglotis, telinga luar",
        "Kartilago fibrosa: simfisis pubis, discus intervertebralis"
      ],
      questions: [
        q("Struktur yang TIDAK termasuk osteon?", 0, ["Lamella interstitialis","Osteosit","Lamella osteoni","Canalis centralis"], [], "Osteon (sistem Havers) terdiri dari: canalis centralis, lamella osteoni (konsentris), osteosit, canaliculi. Lamella interstitialis adalah sisa osteon lama DI ANTARA osteon — bukan bagian dari satu osteon."),
        q("Struktur tidak termasuk osteonum?", 0, ["Lamella interstitial","Canalis havers","Lamella osteoni","Osteocytus"], [], "Osteonum = osteon. Komponennya: canalis havers, lamella osteoni, canalis, osteosit. Lamella interstitial terletak di antara osteon — bukan komponen satu osteon."),
        q("Preparat tulang kompak: lingkaran konsentris + saluran tengah?", 0, ["Osteon (sistem Havers)","Lakuna","Kanalikuli","Trabekula"], [], "Osteon = unit struktural tulang kompak. Lamella konsentris mengelilingi canalis centralis (Havers) yang berisi pembuluh darah & saraf."),
        q("Lamella di dekat periosteum?", 0, ["Lamella circumferentia externa","Lamella osteoni","Lamella interstitialis","Lamella circumferentia interna"], [], "Lamella circumferentia externa terletak di bawah periosteum. Lamella circumferentia interna di sebelah endosteum."),
        q("Saluran tegak lurus hubungkan kanal Havers?", 0, ["Kanal Volkmann","Kanalikuli","Lakuna","Lamela sirkumferensial"], [], "Kanal Volkmann: berjalan tegak lurus terhadap sumbu panjang tulang, menghubungkan antar kanal Havers dan antara Havers dengan periosteum."),
        q("Juluran sitoplasma osteosit hubungkan lacuna?", 0, ["Canaliculi ossei","Serat Sharpey","Lamella osteoni","Lamella circumferentia"], [], "Canaliculi ossei: juluran sitoplasma osteosit yang memancar dari lacuna, menghubungkan antar lacuna — memungkinkan nutrient & sinyal antar sel."),
        q("Sel besar di Lakuna Howship?", 0, ["Osteoklas","Osteosit","Osteoprogenitor","Osteoblas"], [], "Osteoklas: sel raksasa multinukleus (3-50 inti) yang melakukan resorpsi tulang. Berada di Lakuna Howship (lekukan pada permukaan tulang)."),
        q("Osteoporosis, sel raksasa multinukleus di Howship. Fungsi?", 0, ["Resorpsi tulang","Sintesis kolagen","Produksi osteoid","Mineralisasi"], [], "Osteoklas mensekresi asam & enzim proteolitik (katepsin K, MMP-9) yang melarutkan mineral dan mendegradasi kolagen — proses resorpsi tulang."),
        q("Fraktur humerus, sel kuboid mensekresi osteoid?", 0, ["Osteoblas","Osteosit","Osteoklas","Kondrosit"], [], "Osteoblas: sel kuboid basofilik dengan aparatus Golgi berkembang. Aktif mensintesis osteoid (matriks organik tulang) yang kemudian termineralisasi."),
        q("Ciri osteoblas di tepi trabekula?", 0, ["Sitoplasma basofilik","Menyebar di matriks","Tidak punya tonjolan","Nukleus kecil"], [], "Osteoblas aktif memiliki sitoplasma basofilik (kaya RNA utk sintesis protein). Nukleus eukromatik besar. Tersusun berderet seperti epitel di permukaan osteoid."),
        q("Sel di lakuna dengan tonjolan di kanalikuli?", 0, ["Osteosit","Osteoblas","Osteoklas","Fibroblas"], [], "Osteosit: sel tulang matang yang terperangkap di lakuna. Memiliki tonjolan sitoplasma panjang (canaliculi) untuk komunikasi & pertukaran nutrient."),
        q("Sel tulang matang?", 0, ["Osteosit","Osteoklas","Osteoblas","Osteoprogenitor"], [], "Osteosit = sel tulang dewasa. Osteoblas = sel pembentuk tulang. Osteoklas = sel peresorpsi. Osteoprogenitor = sel induk."),
        q("Karakteristik osteoid?", 0, ["Diproduksi osteoblas","Berisi kolagen tipe II","Komponen cellular tulang","Berada di Howship"], [], "Osteoid = matriks organik tulang BELUM termineralisasi. Diproduksi osteoblas. Terdiri dari kolagen tipe I & proteoglikan. Awalnya osteoid → termineralisasi → tulang keras."),
        q("Matriks organik tulang sebelum mineralisasi?", 0, ["Osteoid","Osteon","Lakuna","Kanalikuli"], [], "Osteoid adalah matriks organik (osteoid) yang disekresi osteoblas. Setelah termineralisasi menjadi tulang. Mineral → hidroksiapatit (kalsium fosfat)."),
        q("Karakteristik woven bone?", 0, ["Ditemukan di cement akar gigi","Kolagen teratur","Membentuk Havers","Banyak sel & teratur"], [], "Woven bone: immature bone dengan serabut kolagen tersusun acak, banyak osteosit. Ditemukan di cementum akar gigi & tulang embrio. Nantinya diganti lamellar bone."),
        q("Tulang embrio: serabut kolagen tidak teratur?", 0, ["Woven bone","Tulang kompak","Lamellar bone","Osteon"], [], "Woven bone adalah tulang primer pada embrio. Kolagen tersusun tidak beraturan → lebih lemah. Setelah remodelling → lamellar bone (kolagen teratur, lebih kuat)."),
        q("Pernyataan benar tentang remodelling?", 0, ["Dipengaruhi hormon & gravitasi","Osteoklas > osteoblas","Osteoklas menyusun tulang","Hard callus jadi soft"], [], "Remodelling: keseimbangan resorpsi (osteoklas) & formasi (osteoblas). Dipengaruhi PTH (↑resorpsi), kalsitonin (↓resorpsi), & beban mekanik (gravitasi)."),
        q("Serabut Sharpey fungsinya?", 0, ["Melekatkan periosteum ke tulang","Hematopoiesis","Hubungkan osteon","Bentuk osteoid"], [], "Serabut Sharpey (serat kolagen perforasi): menembus dari periosteum ke tulang kompak. Berfungsi menambatkan periosteum erat ke permukaan tulang."),
        q("Biopsi: jaringan ikat padat luar tulang, lapisan osteogenik?", 0, ["Periosteum","Endosteum","Perikondrium","Osteoid"], [], "Periosteum: 2 lapisan. Lapisan fibrosa (luar) = jaringan ikat padat. Lapisan osteogenik (dalam) = osteoblas & osteoprogenitor. Penting untuk pertumbuhan & perbaikan tulang."),
        q("Ossifikasi tengkorak (langsung dari mesenkim)?", 0, ["Intramembranosa","Endokondral","Intrakartilaginea","Perikondral"], [], "Osifikasi intramembranosa: sel mesenkim → osteoblas → osteoid → mineralisasi. Pada tulang tengkorak (frontal, parietal, occipital). Tanpa fase kartilago."),
        q("Kondrosit tumpukan koin di lempeng epifisis?", 0, ["Zona proliferasi","Zona istirahat","Zona hipertrofi","Zona kalsifikasi"], [], "Zona proliferasi: kondrosit membelah cepat & tersusun longitudinal seperti tumpukan koin (collumella chondrocytica). Bertanggung jawab untuk pemanjangan tulang."),
        q("Kartilago mengapur, kondrosit degenerasi?", 0, ["Zona kalsifikasi","Zona istirahat","Zona proliferasi","Zona osifikasi"], [], "Zona kalsifikasi: matriks kartilago mengalami kalsifikasi. Kondrosit degenerasi & mati karena nutrisi terhambat. Batas sebelum osifikasi."),
        q("Kartilago dengan serat elastis di epiglotis?", 0, ["Kartilago elastis","Kartilago hyalin","Kartilago fibrosa","Textus osseus"]),
        q("Jaringan di simfisis pubis?", 0, ["Cartilago fibrosa","Cartilago elastica","Cartilago hyalina","Textus osseus"]),
        q("Chondrosit dalam lacuna (kartilago elastis)?", 0, ["Chondrocyte","Fibroblas","Osteocyte","Sel mesenkim"]),
        q("Asal mesenkim pembentuk kartilago?", 0, ["Stratum chondrogenicum perichondrium","Stratum fibrosum","Matriks teritorialis","Perimysium"]),
        q("Struktur hubungkan antar lacuna?", 0, ["Canaliculi","Lamella interstitial","Osteoklas","Osteoid"]),
        q("Bukan struktur tulang kompak?", 0, ["Perineurium","Osteon","Canalis Volkmann","Canalis centralis","Lamella circumferentia"]),
        q("Myocytus cardiacus yang membedakan dari striatus?", 0, ["Discus intercalatus","Inti tunggal di tengah","Nukleus oval","Sel bercabang"]),

      ],
      flashcards: [
        fc("Osteon?","Unit dasar tulang kompak (sistem Havers)"),
        fc("Lamella interstitialis?","Antar osteon, BUKAN bagian osteon"),
        fc("Kanal Volkmann?","Hubungkan Havers, tegak lurus"),
        fc("Osteoblas?","Bentuk osteoid, basofilik"),
        fc("Osteoklas?","Resorpsi tulang di Lakuna Howship"),
        fc("Woven bone?","Di cement akar gigi, kolagen tak teratur"),
        fc("Osifikasi intramembranosa?","Mesenkim→tulang (tengkorak)"),
        fc("Zona proliferasi?","Kondrosit tumpukan koin, mitosis"),
        fc("Periosteum?","Ikat padat luar tulang"),
        fc("Serabut Sharpey?","Levatkan periosteum ke tulang"),
        fc("Discus articularis?","Membagi rongga sendi diarthrosis"),
        fc("Enarthrosis?","Sendi peluru"),
        fc("Simfisis pubis?","Fibrocartilago"),
        fc("Kartilago elastis?","Epiglotis, telinga luar"),
      ]
    }
  ]
});

// ──────────────────── FILE 3 ────────────────────
// PAT MUSKULO 2.pdf — Fisiologi, Mikrobiologi, Embriologi
DB.sources.push({
  id: "file-3-pat2",
  name: "PAT MUSKULO 2",
  short: "File 3",
  fileName: "PAT MUSKULO 2.pdf",
  icon: "📗", color: "#a8442f",
  desc: "Fisiologi otot (ATP, kontraksi), mikrobiologi (desinfeksi), embriologi.",
  concepts: [
    {
      id: "f3-fisiologi",
      name: "Fisiologi Otot & Metabolisme",
      definition: "Mekanisme kontraksi otot, sumber energi, dan neuromuscular junction.",
      keyPoints: [
        "NMJ: potensial aksi → Ca²⁺ masuk terminal → ACh lepas → depolarisasi end plate",
        "Relaksasi: Ca²⁺ dikembalikan ke retikulum sarkoplasma",
        "Sumber energi 10 detik pertama: fosfokreatin",
        "Glikolisis: glukosa → 2 piruvat → 2 laktat (+2 ATP)",
        "1 mol glukosa aerob = 32 ATP",
        "Sarkomer: dari garis Z ke garis Z",
        "Saat kontraksi: pita I & zona H memendek, pita A tetap",
        "Diameter aktin = 6nm, miosin = 16nm",
        "Fase 0 jantung: pembukaan saluran Na⁺ cepat",
        "Kalmodulin: aktivasi MLCK pada otot polos",
        "Otot jantung: discus intercalatus, bercabang, inti 1-2 tengah",
        "Otot polos: fusiform, inti 1 tengah, tidak striasi"
      ],
      questions: [
        q("Enzim mitokondria hasilkan 3 ATP?", 0, ["Oxoglutarate dehydrogenase","Succinate dehydrogenase","Malate dehydrogenase","Pyruvate kinase"]),
        q("ATP dari 1 mol glukosa (aerob)?", 0, ["32 ATP","2 ATP","8 ATP","16 ATP"], [], "Glikolisis (2 ATP) → DO piruvat → asetil-KoA → siklus Krebs (2 ATP) → rantai transpor elektron (28 ATP). Total = 32 ATP."),
        q("Struktur yang menjadi batas sarkomer?", 0, ["Garis Z","Pita A","Pita I","Garis M"], [], "Sarkomer = dari garis Z ke Z. Terdiri dari pita A (miosin), pita I (aktin), zona H (pusat pita A). Saat kontraksi: sliding filament theory."),
        q("Saat kontraksi bagian mana memendek?", 0, ["Zona H","Pita A","Aktin","Miosin"], [], "Pita I & zona H memendek. Pita A tetap. Sliding filament theory: filamen aktin meluncur ke tengah melewati miosin."),
        q("Diameter filamen tipis (aktin)?", 0, ["6 nm","0,6 nm","16 nm","60 nm"], [], "Aktin = 6 nm. Miosin (tebal) = 16 nm. F-actin terdiri dari aktin G, tropomiosin, troponin."),
        q("Proses akhir kontraksi tunggal?", 0, ["Ca²⁺ kembali ke retikulum sarkoplasma","ACh dilepas","Reseptor dihidropirin kembali","Ca²⁺ dilepas"], [], "Relaksasi: Ca2+ dipompa ke retikulum sarkoplasma oleh SERCA (Ca2+ ATPase). Tanpa Ca2+, tropomiosin tutup binding site aktin → kontraksi berhenti."),
        q("Perbedaan otot halus multi-unit vs unitary?", 0, ["Multi-unit: kontraksi independen","Unitary: kontraksi independen","Tidak ada perbedaan","Multi-unit: kontraksi bersama"]),
        q("Ciri otot halus (intestinum tenue)?", 0, ["Fusiform, inti 1 tengah, tidak striasi","Silindris, inti banyak tepi","Bercabang, discus intercalatus","Kuboid, inti bulat"]),
        q("Apa itu syncytium pada otot jantung?", 0, ["Sel otot jantung berfungsi sebagai satu kesatuan","Setiap sel bekerja independen","Sel tidak berhubungan","Tidak punya discus intercalatus"]),
        q("Fungsi kalmodulin?", 0, ["Aktifkan Myosin Light Chain Kinase","Naikkan Ca²⁺","Sinyal kontraksi","Mulai kontraksi"]),
        q("Enzim kunci piruvat → asetil-KoA?", 0, ["Piruvat dehydrogenase","Laktat dehydrogenase","Piruvat kinase","Fosfat mutase"]),
      
        q("Reaksi glukosa → PEP hasilkan energi?", 0, ["+7 ATP","+1 ATP","+2 ATP","+5 ATP"]),
        q("Sel buatan K⁺ dimasukkan dalam Na⁺ Cl⁻, potensial ekuilibrium Cl⁻?", 0, ["Menjadi negatif","Menjadi nol","Menjadi positif","Tidak berubah"]),
        q("Fakta benar tentang otot lansia?", 0, ["Massa otot pria > wanita","Massa otot wanita > pria","Otot 70% massa tubuh","Otot ubah kinetik jadi kimia"]),
      ],
      flashcards: [
        fc("NMJ?","Aksi saraf → Ca²⁺ masuk → ACh lepas → depolarisasi"),
        fc("Energi 10 detik pertama?","Fosfokreatin"),
        fc("ATP per glukosa aerob?","32 ATP"),
        fc("Batas sarkomer?","Garis Z ke Z"),
        fc("Otot jantung?","Discus intercalatus, bercabang"),
        fc("Kalmodulin?","Aktifkan MLCK"),
        fc("Oxoglutarate dehydrogenase?","3 ATP"),
      ]
    },
    {
      id: "f3-embrio-mikro",
      name: "Embriologi & Mikrobiologi",
      definition: "Embriogenesis (gastrulasi, implantasi) dan mikrobiologi (desinfeksi, koefisien fenol).",
      keyPoints: [
        "Gastrulasi: pembentukan 3 lapisan germinal (ektoderm, mesoderm, endoderm)",
        "Penanda gastrulasi: primitive streak",
        "Blastula: tahap implantasi di uterus",
        "Mesoderm → miotom (otot), sklerotom (tulang), dermatom (kulit)",
        "Bakteri uji koefisien fenol: Staphylococcus aureus",
        "Pemanasan kering: flaming",
        "Desinfektan tingkatkan permeabilitas: karbol",
        "Savlon: tidak bunuh HIV & Hepatitis B"
      ],
      questions: [
        q("Diferensiasi organ mulai pembentukan 3 lapisan germinal?", 0, ["Gastrulasi","Blastulasi","Morulasi","Evaginasi"]),
        q("Penanda gastrulasi?", 0, ["Primitive streak","Primitive yolk","Primitive node","Primitive groove"]),
        q("Mesoderm → otot rangka?", 0, ["Miotom","Sklerotom","Dermatom","Mioblas"]),
        q("Implantasi hasil pembuahan zigot di tahap?", 0, ["Blastula","Mesoderm","Endoderm","Gastrula"]),
        q("Bakteri untuk uji koefisien fenol?", 0, ["Staphylococcus aureus","Salmonella typhi","Bacillus subtilis","E. coli"]),
        q("Termasuk pemanasan kering?", 0, ["Flaming","Autoclave","Pasteurisasi","Radiasi"]),
        q("Desinfektan tingkatkan permeabilitas membran?", 0, ["Karbol","Etanol","Klorin","Formalin"]),
        q("Desinfektan tidak bunuh HIV & Hepatitis B?", 0, ["Savlon","Betadin","Klorin","Etanol"]),
        q("Waktu efektif dekontaminasi HIV/Hepatitis B?", 0, ["10 menit","5 menit","15 menit","30 menit"]),
      ],
      flashcards: [
        fc("Gastrulasi?","Pembentukan 3 lapisan germinal"),
        fc("Primitive streak?","Penanda gastrulasi"),
        fc("Miotom?","Mesoderm → otot"),
        fc("Blastula?","Tahap implantasi"),
        fc("Uji koefisien fenol?","Gunakan S. aureus"),
        fc("Pemanasan kering?","Flaming"),
        fc("Savlon?","Tidak bunuh HIV & Hepatitis B"),
      ]
    }
  ]
});

// ──────────────────── FILE 4 ────────────────────
// MARTABAK UB SUMATIF 2 BLOK MUSKULOSKELETAL.pdf
DB.sources.push({
  id: "file-4-sumatif2",
  name: "MARTABAK UB SUMATIF 2",
  short: "File 4",
  fileName: "MARTABAK UB SUMATIF 2 BLOK MUSKULOSKELETAL.pdf",
  icon: "📕", color: "#2c5f7a",
  desc: "Biomekanika, Fisiologi Otot, Mikrobiologi, Histologi, Embriologi — Soal Sumatif 2.",
  concepts: [
    {
      id: "f4-biomekanika",
      name: "Biomekanika & Keseimbangan",
      definition: "Penerapan prinsip fisika: momentum, keseimbangan, tuas, traksi.",
      keyPoints: [
        "Keseimbangan labil: pusat gravitasi di luar benda",
        "Stabil: pusat gravitasi di dalam, permukaan luas, pusat gravitasi rendah",
        "Helm bantalan: aplikasi momentum",
        "Angkat barbel: tuas kelas III",
        "Traksi kulit untuk fraktur: aplikasi biomekanika ortopedi",
        "Membungkuk bukan cara membuat keseimbangan stabil"
      ],
      questions: [
        q("Keseimbangan labil saat?", 0, ["Pusat gravitasi di luar benda","Pusat gravitasi di dalam","Permukaan luas","Kontak luas"]),
        q("Bukan cara membuat keseimbangan lebih stabil?", 0, ["Membungkuk","Memegang tongkat","Berjongkok","Buka kaki lebar"]),
        q("Mengangkat barbel tuas kelas?", 0, ["III","I","II","IV"]),
        q("Helm bantalan penerapan?", 0, ["Momentum","Tuas I","Tuas II","Traksi"]),
        q("Yang bukan keseimbangan stabil?", 0, ["Pusat gravitasi di luar benda","Pusat gravitasi di dalam","Kuasa luas","Permukaan luas"]),
        q("Mengapa otot kontraksi massanya bertambah?", 0, ["Aliran darah meningkat","Sarkomer memendek","Hipertrofi serabut","Filamen menebal"]),
        q("Cara seimbang saat diserang dari kejauhan?", 0, ["Berdiri kaki dibuka lebar, tangan siap","Berdiri 1 kaki","Tangan diatas","Tubuh berotasi"]),
        q("Penerapan biomekanika dalam ortopedi?", 0, ["Traksi kulit untuk fraktur","Penambahan beban","Bungkus tulang fraktur","Operasi cepat"]),
        q("Penerapan fisika momentum?", 0, ["Helm olahraga beladiri","Body alignment","Traksi kulit","Kursi ergonomis"]),
        q("Atlet angkat beban → keseimbangan dengan?", 0, ["Membuka kedua kaki","Telungkup","Jongkok","Membungkuk"]),
        q("Pemanfaatan fisika momentum yang tepat?", 0, ["Helm olahraga beladiri","Body alignment","Traksi kulit fraktur","Kursi ergonomis","Kuda-kuda pesilat"]),

      ],
      flashcards: [
        fc("Keseimbangan labil?","Pusat gravitasi di luar benda"),
        fc("Helm bantalan?","Aplikasi momentum"),
        fc("Angkat barbel?","Tuas kelas III"),
        fc("Traksi kulit?","Biomekanika ortopedi"),
      ]
    },
    {
      id: "f4-fisiologi",
      name: "Fisiologi Otot Lanjutan",
      definition: "Kontraksi otot, NMJ, potensial aksi jantung, dan jenis otot.",
      keyPoints: [
        "NMJ: Ca²⁺ masuk terminal → ACh lepas → depolarisasi end plate",
        "Relaksasi: Ca²⁺ kembali ke retikulum sarkoplasma (Ca²⁺ ATPase)",
        "Fase 0 potensial aksi jantung: Na⁺ cepat masuk",
        "Kalmodulin-Ca²⁺ aktivasi MLCK",
        "Otot rangka hipertrofi: peningkatan jumlah sarkomer paralel",
        "Otot jantung: discus intercalatus, gap junction (syncytium)",
        "Sumber energi: fosfokreatin (10 detik pertama), glikolisis, oksidasi"
      ],
      questions: [
        q("Proses di NMJ?", 0, ["Ca²⁺ masuk terminal → ACh lepas → depolarisasi end plate","Depolarisasi end plate → ACh lepas","ACh lepas → aksi saraf","Ca²⁺ masuk end plate → aksi otot"]),
        q("Penyebab fase 0 potensial aksi jantung?", 0, ["Pembukaan saluran Na⁺ cepat","Penutupan saluran Na⁺ lambat","Pembukaan saluran K⁺ cepat","Masuknya Ca²⁺"]),
        q("Fungsi ATP untuk relaksasi?", 0, ["Ca²⁺ ATPase","Na⁺ K⁺ ATPase","Miosin ATPase","Fosforilasi oksidatif"]),
        q("ATP digunakan kontraksi otot pada?", 0, ["Miosin ATPase","Na⁺ K⁺ ATPase","Ca²⁺ ATPase","Fosforilasi oksidatif"]),
        q("Hipertrofi otot angkat beban?", 0, ["Peningkatan jumlah sarkomer paralel","Peningkatan fast twitch","Aktivasi ATPase miosin","Peningkatan panjang serabut"]),
        q("Hasil ketidakseimbangan laju aktivitas otot dan oksigenasi?", 0, ["Laktat","Piruvat","Asetil-KoA","Glukosa"]),
      
        q("Succinate-CoA ligase hasilkan energi?", 0, ["+1 ATP","+2 ATP","+3 ATP","+5 ATP"]),
        q("Diamater F-actin?", 0, ["6 nanometer","0,6 nanometer","60 nanometer","16 nanometer"]),
        q("Reaksi glukosa → PEP hasilkan energi?", 0, ["+7 ATP","+1 ATP","+2 ATP","+5 ATP"]),
        q("Reaksi Succinate-CoA ligase hasilkan?", 0, ["+1 ATP","+2 ATP","+3 ATP","+5 ATP"]),
        q("Senyawa diperlukan oksidasi di sitoplasma & mitokondria?", 0, ["NADH","O₂","GTP","Glukosa","Asetil-KoA"]),
        q("Perubahan senyawa TIDAK terjadi di sitoplasma otot?", 0, ["Piruvat → asetil-KoA","Glukosa → asetil-KoA","Piruvat → laktat","Piruvat → malat"]),
        q("Kompleks Ca²⁺-kalmodulin berperan?", 0, ["Aktivasi saluran Ca²⁺ & kontraksi","Hasilkan ATP","Hentikan kontraksi","Buat miosin"]),
        q("Desinfektan yang bisa bunuh HIV & Hep B?", 0, ["Betadin","Savlon","Hibitane","Dettol"]),
        q("Sterilisasi pemanasan basah?", 0, ["Autoclave","Incineration","Flaming","Radiasi"]),
        q("Enzim di reaksi akrosom?", 0, ["Hyaluronidase","Acrosin","Tripsin","Amilase"]),
        q("Zona osteoid (lingkaran kuning) adalah?", 0, ["Daerah osteoid (matriks belum termineralisasi)","Jaringan termineralisasi","Jaringan ikat longgar","Degradasi tulang"]),
        q("Minggu ke-3 → penanda gastrulasi?", 0, ["Primitive streak","Primitive yolk","Primitive node","Primitive groove"]),
        q("Atrofi otot perut lateral → saraf yang inervasi?", 0, ["Miotom hypaxial","Miotom epaxial","Skleretom","Dermatom","Miotom abaxial"]),
        q("Area traktus genitourinarius ditumbuhi mikroorganisme?", 0, ["Genitalia eksterna, uretra anterior, vagina","Genitalia eksterna saja","Vagina saja","Uretra anterior saja"]),
        q("Antiseptik merusak protein & asam nukleat?", 0, ["Povidon iodine","H₂O₂","Hibiscrub","Hibitane","Alkohol"]),
        q("Pelepasan zat inhibitor di akrosom?", 0, ["Reaksi akrosom","Kapasitasi","Adaptasi","Fertilisasi"]),
        q("Impuls atrium tak lewat AV ring → akibat?", 0, ["Atrium & ventrikel tidak kontraksi bersamaan","Atrium kontraksi lebih cepat","Ventrikel kontraksi lebih cepat","Atrium & ventrikel kontraksi bersamaan"]),

      ],
      flashcards: [
        fc("Fase 0 jantung?","Na⁺ cepat masuk"),
        fc("Relaksasi?","Ca²⁺ ATPase → Ca²⁺ ke retikulum sarkoplasma"),
        fc("Hipertrofi otot?","Peningkatan sarkomer paralel"),
        fc("Produk anaerob?","Laktat"),
      ]
    }
  ]
});

// ──────────────────── FILE 5 ────────────────────
// MTB UB 2 FNMS CALVARIA.pdf — Campuran
DB.sources.push({
  id: "file-5-calvaria",
  name: "MTB UB 2 FNMS CALVARIA",
  short: "File 5",
  fileName: "MTB UB 2 FNMS CALVARIA.pdf",
  icon: "📙", color: "#6b5b8a",
  desc: "Biomekanika, Fisiologi Otot, Mikrobiologi, Histologi, Embriologi — Soal Calvaria.",
  concepts: [
    {
      id: "f5-fisiologi",
      name: "Fisiologi Otot & Energi",
      definition: "Mekanisme kontraksi, metabolisme energi otot, dan potensial aksi.",
      keyPoints: [
        "Relaksasi: Ca²⁺ dikembalikan ke retikulum sarkoplasma",
        "Saat kontraksi: Zona H memendek, pita A tetap",
        "Struktur sarkomer: dari garis Z ke Z",
        "10 detik pertama: fosfokreatin",
        "Oksigen sebagai akseptor elektron terakhir",
        "Glikolisis anaerob: 2 ATP, tidak efisien",
        "Peningkatan frekuensi rangsangan → tingkatkan gaya otot"
      ],
      questions: [
        q("Bagian yang memendek saat kontraksi?", 0, ["Zona H","Pita A","Aktin","Miosin"]),
        q("Fungsi oksigen dalam fosforilasi oksidatif?", 0, ["Akseptor elektron terakhir","Donor elektron","Ikat ATP jadi ADP","Hambat RTE"]),
        q("Mengapa jalur asam laktat tidak efisien?", 0, ["Hanya 2 ATP, tanpa NADH tambahan","Tidak pakai glukosa","Lebih banyak NADH","Laktat masuk mitokondria"]),
        q("Hasil glikolisis pada otot?", 0, ["Piruvat & laktat","Glikogen","Oksalasetat","Asetil-KoA"]),
        q("Bagaimana tingkatkan gaya satu serat otot?", 0, ["Tingkatkan frekuensi rangsangan","Turunkan K⁺ ekstrasel","Naikkan Na⁺","Turunkan permeabilitas K⁺"]),
        q("Enzim kunci ubah piruvat jadi asetil-KoA?", 0, ["Piruvat dehydrogenase","Laktat dehydrogenase","Piruvat kinase","Isomerase"]),
        q("Pada oksigen cukup, metabolisme otot?", 0, ["Aerob, oksidasi lengkap → CO₂ + H₂O","Anaerob","Anaerob, hanya glikolisis","Aerob, hasil laktat"], [], "Aerob: glukosa → CO2 + H2O + 32 ATP. Lebih efisien. Anaerob: glukosa → laktat + 2 ATP. Tidak efisien tapi cepat. Digunakan saat olahraga intensitas tinggi."),
        q("Kontraksi tetanik akibat akumulasi?", 0, ["Ca²⁺","ATP","Troponin","Na⁺"]),
        q("Yang bukan sistem penghasil energi otot?", 0, ["Siklus Cori","Glikolisis anaerob","Fosfokreatin","Dekarboksilasi oksidatif"], [], "Siklus Cori: terjadi di HATI, bukan di otot. Siklus ini mengubah laktat (dari otot) kembali jadi glukosa. Sistem energi otot: fosfokreatin, glikolisis, & fosforilasi oksidatif."),
        q("Penumpukan asam laktat → efek ke enzim glikolisis?", 0, ["Penurunan aktivitas enzim (inhibisi asidosis)","Glikolisis berhenti total","Peningkatan aktivitas enzim","Tidak terbentuk ATP"], [], "Asidosis laktat menghambat enzim glikolisis (terutama fosfofruktokinase-1). Mekanisme umpan balik negatif untuk mencegah kerusakan sel akibat pH terlalu rendah."),
        q("Pada oksigen cukup, metabolisme otot berlangsung secara?", 0, ["Aerob, oksidasi lengkap → CO₂+H₂O","Anaerob, hanya glikolisis","Aerob, hasil laktat","Anaerob, tanpa mitokondria"]),
        q("Otot saat berkontraksi massanya bertambah karena?", 0, ["Aliran darah meningkat","Sarkomer memendek","Hipertrofi serabut","Filamen menebal"], [], "Aliran darah meningkat saat kontraksi otot (vasodilatasi akibat metabolit). Darah mengandung air & nutrisi → massa otot bertambah sementara."),
        q("Fungsi serat eksitatori & konduktif dalam jantung?", 0, ["Menghasilkan & mentransmisikan impuls untuk ritme","Menjaga pernapasan","Menjaga tekanan darah","Mengatur frekuensi"]),
        q("Peningkatan massa otot angkat beban?", 0, ["Hipertrofi individual","Hiperplasia","Kadar lemak meningkat","Cairan meningkat"]),
        q("Otot TIDAK berasal dari mesoderm?", 0, ["Otot siliaris & sfingter pupil","Otot kepala","Otot ekstremitas atas","Otot mammaria"]),
        q("Myosin light chain kinase saat Ca²⁺ keluar dari sel menjadi?", 0, ["Tidak aktif","Lebih aktif","Tetap aktif","Terdegradasi total"]),
        q("Model perbaikan fraktur (osteoblas + osteoklas bersama)?", 0, ["Remodelling","Osifikasi intramembranosa","Osifikasi endokondral"]),
        q("Otot jantung berasal dari lapisan mesoderm?", 0, ["Mesoderm splanknik","Neural crest","Mesoderm paraksial","Miotom","Mesoderm lateral"]),
        q("Otot hipertrofi dari sel mesoderm?", 0, ["Somit / paraksial","Neural crest","Mesoderm lateral","Splanchnik"]),

      ],
      flashcards: [
        fc("Saat kontraksi memendek?","Zona H"),
        fc("O₂ fungsi?","Akseptor elektron terakhir"),
        fc("Glikolisis anaerob?","2 ATP, hasil laktat"),
        fc("Frekuensi rangsangan?","Tingkatkan gaya otot"),
        fc("Kontraksi tetanik?","Akumulasi Ca²⁺ intrasel"),
      ]
    },
    {
      id: "f5-biomekanika",
      name: "Biomekanika",
      definition: "Prinsip keseimbangan, momentum, dan penerapan biomekanika.",
      keyPoints: [
        "Pusat gravitasi di dalam benda → stabil",
        "Pusat gravitasi di luar → labil",
        "Bukan cara seimbang: membungkuk",
        "Helm bantalan = aplikasi momentum",
        "Momentum: pukulan kecepatan tinggi daya rusak lebih besar",
        "Cara seimbang: melebar kaki, merentang tangan, tongkat, senderan dinding"
      ],
      questions: [
        q("Yang bukan cara agar seimbang?", 0, ["Membungkuk","Melebarkan kaki","Merentangkan tangan","Pakai tongkat"]),
        q("Mana hasil daya rusak lebih besar?", 0, ["Pukulan metakarpal kecepatan tinggi","Pukulan metakarpal kecepatan rendah","Telapak kecepatan rendah","Telapak kecepatan tinggi"]),
        q("Penerapan prinsip biomekanika?", 0, ["Traksi untuk kaki patah","Bungkus tulang fraktur","Operasi cepat","Angkat kaki dg beban"]),
        q("Kapan keseimbangan menjadi labil?", 0, ["Pusat gravitasi di luar benda","Permukaan luas","Kontak luas","Pusat gravitasi rendah"]),
      
        q("Sifat dan karakteristik otot?", 0, ["Massa otot pria lansia > wanita lansia","70% massa tubuh","Wanita > pria lansia","Jaringan terkecil"]),
        q("Angkat beban tingkatkan massa otot?", 0, ["Hipertrofi individual","Hiperplasia","Kadar lemak meningkat","Cairan meningkat"]),
      ],
      flashcards: [
        fc("Keseimbangan stabil?","Pusat gravitasi di dalam, permukaan luas"),
        fc("Keseimbangan labil?","Pusat gravitasi di luar"),
        fc("Momentum?","Helm bantalan, kecepatan tinggi daya rusak besar"),
      ]
    },
    {
      id: "f5-histologi-embrio",
      name: "Histologi & Embriologi",
      definition: "Jaringan otot, kartilago, osifikasi, perkembangan vertebra dan ekstremitas.",
      keyPoints: [
        "Otot jantung: discus intercalatus, sel bercabang",
        "Otot rangka: silindris, inti banyak tepi, striasi",
        "Ciri otot polos (intestinum tenue): fusiform, inti 1 tengah",
        "Osteon: unit tulang kompak, canalis sentralis",
        "Osifikasi vertebra selesai ~25 tahun",
        "Osifikasi primer di diafisis, sekunder di epifisis",
        "Tunas ekstremitas bentuk jari minggu 8-9",
        "Pusat osifikasi primer femur di diafisis",
        "Sel mesenkim → osteoblas → osteoid → mineralisasi → trabekula",
        "Kartilago elastis: epiglotis (kondrosit di lakuna, serat elastis)"
      ],
      questions: [
        q("Ciri myocytus cardiacus membedakan dari striatus & non-striatus?", 0, ["Memiliki discus intercalatus","Inti tunggal tengah","Nukleus oval","Sel bercabang"]),
        q("Otot rangka? (ciri)", 0, ["Silindris, inti banyak di tepi, striasi","Fusiform, inti 1 tengah","Bercabang, discus intercalatus","Kuboid, inti bulat"]),
        q("Struktur hubungkan sel otot jantung?", 0, ["Discus intercalatus","Stria","Nukleus","Anastomosis"]),
        q("Apa struktur utama tulang kompak?", 0, ["Osteon (sistem Havers)","Trabekula","Kanalikuli","Laguna Howship"]),
        q("Osifikasi vertebra selesai usia?", 0, ["25 tahun","10 tahun","15 tahun","18 tahun"]),
        q("Pusat osifikasi primer tulang panjang?", 0, ["Diafisis","Epifisis","Metafisis","Lempeng epifisis"]),
        q("Tunas ekstremitas bentuk jari minggu?", 0, ["8-9","3-4","10-11","12-13"]),
        q("Osifikasi intramembranosa: sel mesenkim → osteoblas →?", 0, ["Osteoid","Lamella","Trabekula","Kartilago hyalina"]),
        q("Tulang pengulangan primer ekstremitas bawah?", 0, ["Femur","Radius","Klavikula","Humerus"]),
        q("Jaringan kartilago elastis di epiglotis?", 0, ["Kartilago elastis","Kartilago hyalin","Kartilago fibrosa","Textus osseus"]),
        q("Sel utama kartilago elastis dalam lacuna?", 0, ["Chondrocyte","Fibroblas","Osteocyte","Sel mesenkim"]),
        q("Lapisan mesoderm pembentuk otot rangka?", 0, ["Miotom","Sklerotom","Dermatom","Mioblas"]),
        q("Otot dari mesoderm kecuali?", 0, ["Otot siliaris & sfingter pupil","Otot kepala","Otot ekstremitas","Otot mammaria"]),
        q("Perkembangan vertebra: sel padat ke kranial bentuk?", 0, ["Arkus vertebra","Diskus intervertebralis","Processus transversum","Processus spinosus"]),
        q("Urutan struktur otot dari besar ke kecil?", 0, ["Fasikulus → miolibril → sarkomer","Sarkomer → miolibril → fasikulus","Bundle → aktin → miolibril","Miolibril → serabut → aktin"]),
        q("Sumber energi utama 10 detik pertama?", 0, ["Fosfokreatin","Siklus Cori","Glukoneogenesis","Glikolisis"]),
        q("Enzim ubah piruvat jadi asetil-KoA?", 0, ["Piruvat dehydrogenase","Laktat dehydrogenase","Piruvat kinase","Fosfat mutase"]),
      
        q("Sarkomer unit struktural dibentuk?", 0, ["Garis Z","Pita A","Pita I","Zona H"]),
        q("Diamater filamen tebal (miosin)?", 0, ["16 nm","6 nm","0,6 nm","60 nm"]),
      ],
      flashcards: [
        fc("Otot jantung?","Discus intercalatus, bercabang"),
        fc("Otot rangka?","Silindris, inti banyak tepi"),
        fc("Otot polos?","Fusiform, inti 1 tengah"),
        fc("Osteon?","Unit tulang kompak, canalis sentralis"),
        fc("Osifikasi primer?","Diafisis"),
        fc("Osifikasi vertebra selesai?","~25 tahun"),
        fc("Tunas jari?","Minggu 8-9"),
        fc("Miotom?","Mesoderm → otot rangka"),
      ]
    }
  ]
});

// ──────────────────────────────────────────────

// ──────────────────── NEW SOURCES (FILE 6 & 7) ────────────────────
// NEW SOURCES GENERATED
DB.sources.push({
  "id": "file-6-embriologi",
  "name": "Embriologi Muskuloskeletal",
  "short": "File 6",
  "fileName": "Gabungan File Embriologi.pdf",
  "icon": "👶",
  "color": "#7c3aed",
  "desc": "Gabungan komprehensif embriologi skeletal, perkembangan somit, osifikasi, embriologi otot, & perkembangan ekstremitas.",
  "concepts": [
    {
      "id": "embriologi-skeletal",
      "name": "Embriologi Sistem Skeletal & Aksial",
      "definition": "Perkembangan tulang belakang, iga, sternum, serta neurocranium & viscerocranium dari mesoderm & sel krista neuralis.",
      "keyPoints": [
        "Mesoderm paraksial → Somit → Sklerotom (tulang belakang & iga)",
        "Notokorda sisa → Nukleus Pulposus diskus intervertebralis",
        "Resegmentasi vertebra: kaudal sklerotom atas berfusi dengan kranial sklerotom bawah",
        "Atap tengkorak (calvaria) → osifikasi intramembranosa",
        "Basis cranii → osifikasi endokondral",
        "Lengkung Faring I → Malleus, Incus, Maksila, Mandibula",
        "Lengkung Faring II → Stapes, Proc. Styloideus, Os Hyoideum"
      ],
      "questions": [
        {
          "text": "Sistem skeletal (rangka) berkembang dari lapisan embrional mana?",
          "answerIdx": 0,
          "opts": [
            "Mesoderm paraksial, mesoderm lempeng lateral, & krista neuralis",
            "Ektoderm permukaan & endoderm",
            "Hanya mesoderm intermediat",
            "Endoderm & notokorda"
          ],
          "explanation": "Neurocranium & viscerocranium sebagian berasal dari sel krista neuralis (ektoderm), sedangkan kerangka aksial (vertebra, iga, sternum) dari mesoderm paraksial (sklerotom) dan kerangka anggota badan dari mesoderm lempeng lateral (somatik)."
        },
        {
          "text": "Struktur somit yang berdiferensiasi membentuk tulang belakang (columna vertebralis) dan iga adalah?",
          "answerIdx": 0,
          "opts": [
            "Sklerotom",
            "Dermatom",
            "Miotom",
            "Pronefros"
          ],
          "explanation": "Pada akhir minggu ke-4, sel-sel sklerotom menjadi mesenkim dan bermigrasi mengelilingi medulla spinalis dan notokorda untuk membentuk vertebra dan iga."
        },
        {
          "text": "Dalam proses resegmentasi vertebra, bagian kaudal suatu sklerotom akan menyatu dengan?",
          "answerIdx": 1,
          "opts": [
            "Bagian kaudal sklerotom di bawahnya",
            "Bagian kranial sklerotom segmen di bawahnya",
            "Notokorda segmen atas",
            "Nervus spinalis"
          ],
          "explanation": "Resegmentasi terjadi ketika separuh kaudal tiap sklerotom tumbuh dan berfusi dengan separuh kranial sklerotom di bawahnya. Diskus intervertebralis berkembang di antara segmen tersebut."
        },
        {
          "text": "Struktur embrional apakah yang membentuk nukleus pulposus pada diskus intervertebralis?",
          "answerIdx": 0,
          "opts": [
            "Notokorda",
            "Sklerotom kranial",
            "Mesoesofagus",
            "Aorta dorsalis"
          ],
          "explanation": "Notokorda mengalami regresi total di regio korpus vertebra, tetapi membesar dan bertahan di area diskus intervertebralis membentuk Nukleus Pulposus."
        },
        {
          "text": "Tengkorak dibagi menjadi neurocranium dan viscerocranium. Membranous neurocranium (atap tengkorak) mengalami osifikasi jenis apa?",
          "answerIdx": 0,
          "opts": [
            "Osifikasi intramembranosa (desmal)",
            "Osifikasi endokondral",
            "Osifikasi sekunder",
            "Osifikasi fibrokartilago"
          ],
          "explanation": "Tulang pipih atap tengkorak (atrium/calvaria: frontal, parietal) terbentuk langsung dari mesenkim melalui osifikasi intramembranosa tanpa melalui model kartilago."
        },
        {
          "text": "Basis cranii (kondrocranium) mengalami proses penulangan berupa?",
          "answerIdx": 1,
          "opts": [
            "Osifikasi intramembranosa",
            "Osifikasi endokondral",
            "Osifikasi langsung",
            "Osifikasi desmal"
          ],
          "explanation": "Basis cranii mula-mula dibentuk dari sejumlah kartilago yang terpisah yang kemudian menyatu dan mengalami penulangan endokondral."
        },
        {
          "text": "Lengkung faring I (lengkung mandibularis) menghasilkan tulang-tulang viscerocranium berupa?",
          "answerIdx": 0,
          "opts": [
            "Malleus, incus, maksila, zigomatikum, & mandibula",
            "Stapes & processus styloideus",
            "Os hyoideum cornu majus",
            "Kartilago tiroid"
          ],
          "explanation": "Lengkung faring 1 membentuk bagian dorsalnya (prosesus maksilaris: maksila, zigomatikum, os temporale pars skuamosa) dan bagian ventral (prosesus mandibularis: kartilago Meckel → malleus, incus, mandibula)."
        },
        {
          "text": "Lengkung faring II (lengkung hioid) membentuk tulang pendengaran berupa?",
          "answerIdx": 0,
          "opts": [
            "Stapes & processus styloideus",
            "Malleus & incus",
            "Os ethmoidale",
            "Os sphenoidale"
          ],
          "explanation": "Kartilago lengkung faring II (kartilago Reichert) membentuk stapes, processus styloideus, ligamentum stylohyoideum, serta cornu minus dan corpus bagian atas os hyoideum."
        },
        {
          "text": "Sternum berkembang dari sepasang acuan mesenkim yang terletak di dinding tubuh ventral yang disebut?",
          "answerIdx": 0,
          "opts": [
            "Bilah sternum (sternal bars / sternal bands)",
            "Sklerotom thorakal",
            "Prosesus xiphoideus primordium",
            "Dermatom thorax"
          ],
          "explanation": "Bilah sternum berkembang secara independen di mesoderm lempeng lateral somatik pada kedua sisi dinding tubuh ventral, kemudian menyatu di garis tengah."
        },
        {
          "text": "Pada osifikasi endokondral tulang panjang, pusat osifikasi primer muncul di regio mana?",
          "answerIdx": 0,
          "opts": [
            "Diafisis",
            "Epifisis",
            "Metafisis",
            "Kartilago artikularis"
          ],
          "explanation": "Pusat osifikasi primer muncul di diafisis (batang tulang) sebelum lahir, sedangkan pusat osifikasi sekunder muncul di epifisis setelah lahir."
        }
      ],
      "flashcards": [
        {
          "front": "Sklerotom?",
          "back": "Bagian somit → pembentuk vertebra, iga, & tulang belakang."
        },
        {
          "front": "AER (Apical Ectodermal Ridge)?",
          "back": "Ektoderm distal tunas ekstremitas → eksresi FGF4/8 → pertumbuhan proksimodistal."
        },
        {
          "front": "ZPA (Zone of Polarizing Activity)?",
          "back": "Mesenkim posterior tunas ekstremitas → eksresi Sonic Hedgehog (SHH) → penentu pola jari anteroposterior."
        },
        {
          "front": "Sindaktili?",
          "back": "Kegagalan apoptosis jaringan interdigital → jari menyatu."
        }
      ]
    },
    {
      "id": "embriologi-muskular",
      "name": "Embriologi Sistem Muskular & Otot",
      "definition": "Perkembangan otot rangka, otot jantung, & otot polos dari mesoderm paraksial, splanknik, & neuroektoderm.",
      "keyPoints": [
        "Somitomer (kepala) & Somit (aksial/ekstremitas) → Dermomiotom",
        "Epimere (epaksial) → otot dorsalis / ekstensor → Ramus Dorsalis N. Spinalis",
        "Hypomere (hipaksial) → otot ventrolateral / dinding tubuh → Ramus Ventralis N. Spinalis",
        "Otot pengunyah → Lengkung Faring I (N. V3)",
        "Otot ekspresi wajah → Lengkung Faring II (N. VII)",
        "Otot pupil & mioepitel kelenjar → berasal unik dari Neuroektoderm"
      ],
      "questions": [
        {
          "text": "Seluruh sistem otot tubuh berkembang dari mesoderm, KECUALI otot-otot berikut yang berasal dari neuroektoderm yaitu?",
          "answerIdx": 0,
          "opts": [
            "Otot sfingter & dilatator pupil, otot polos kelenjar mammaria & keringat",
            "Otot miokardium jantung",
            "Otot diafragma & otot lidah",
            "Otot biseps & triseps brakii"
          ],
          "explanation": "Otot sfingter pupil, otot dilatator pupil, serta sel-sel mioepitel kelenjar mammaria dan keringat berasal dari ektoderm (neuroektoderm)."
        },
        {
          "text": "Otot rangka (muskulus skeletal) kerangka aksial dan ekstremitas terutama berasal dari?",
          "answerIdx": 0,
          "opts": [
            "Mesoderm paraksial (somit & somitomer)",
            "Mesoderm lempeng lateral splanknik",
            "Mesoderm intermediat",
            "Endoderm parietal"
          ],
          "explanation": "Somitomer (di kepala) dan somit (dari regio oksipital ke kaudal) berdiferensiasi membentuk dermomiotom yang menjadi sumber utama otot rangka."
        },
        {
          "text": "Dermomiotom terbagi menjadi regio epaksial (epimere) dan hipaksial (hypomere). Epimere dipersarafi oleh?",
          "answerIdx": 0,
          "opts": [
            "Ramus dorsalis nervus spinalis",
            "Ramus ventralis nervus spinalis",
            "Nervus kranialis V",
            "Nervus phrenicus"
          ],
          "explanation": "Epimere (otot epaksial: otot ekstensor columna vertebralis/autokton) dipersarafi oleh ramus dorsalis nervus spinalis, sedangkan hypomere (otot hipaksial: otot dinding tubuh & ekstremitas) dipersarafi ramus ventralis."
        },
        {
          "text": "Otot-otot ekspresi wajah (muskulus fasialis) berkembang dari somitomer/lengkung faring ke berapa?",
          "answerIdx": 1,
          "opts": [
            "Lengkung faring I (N. V)",
            "Lengkung faring II (N. VII / N. Fasialis)",
            "Lengkung faring III (N. IX)",
            "Lengkung faring IV (N. X)"
          ],
          "explanation": "Lengkung faring II membentuk otot-otot ekspresi wajah (m. orbicularis oris, m. orbicularis oculi, m. platysma, m. stapedius) yang dipersarafi N. Fasialis (CN VII)."
        },
        {
          "text": "Otot-otot pengunyah (m. masseter, m. temporalis, m. pterygoideus) berasal dari lengkung faring ke berapa?",
          "answerIdx": 0,
          "opts": [
            "Lengkung faring I (N. Trigeminus / V3)",
            "Lengkung faring II (N. VII)",
            "Lengkung faring III (N. IX)",
            "Somit oksipital"
          ],
          "explanation": "Lengkung faring I membentuk otot-otot pengunyah (mastication) yang dipersarafi caban mandibularis Nervus Trigeminus (N. V3)."
        },
        {
          "text": "Otot jantung (miokardium) berkembang dari lapisan mesoderm apa?",
          "answerIdx": 0,
          "opts": [
            "Mesoderm lempeng lateral splanknik (viseral)",
            "Mesoderm paraksial",
            "Mesoderm somatik",
            "Ektoderm neural"
          ],
          "explanation": "Otot jantung berkembang dari mesoderm splanknik yang mengelilingi tabung jantung endotel primer."
        },
        {
          "text": "Ciri khas perkembangan sel otot polos (smooth muscle) pada dinding pembuluh darah adalah berasal dari?",
          "answerIdx": 0,
          "opts": [
            "Mesoderm lempeng lateral splanknik & sel krista neuralis (di aorta)",
            "Mesoderm paraksial sklerotom",
            "Endoderm usus",
            "Ektoderm permukaan"
          ],
          "explanation": "Otot polos dinding pembuluh darah berasal dari mesoderm splanknik dan sel krista neuralis (khusus aorta & pembuluh darah besar)."
        }
      ],
      "flashcards": [
        {
          "front": "Polidaktili?",
          "back": "Jari tambahan (extra digits) akibat ekspresi SHH abnormal."
        },
        {
          "front": "Nukleus pulposus?",
          "back": "Sisa notokorda di diskus intervertebralis."
        },
        {
          "front": "Osifikasi intramembranosa?",
          "back": "Penulangan langsung dari mesenkim (tulang atap tengkorak/calvaria, klavikula)."
        },
        {
          "front": "Osifikasi endokondral?",
          "back": "Penulangan via model kartilago hialin (tulang panjang & basis cranii)."
        }
      ]
    },
    {
      "id": "embriologi-ekstremitas",
      "name": "Perkembangan Ekstremitas & Anomalik",
      "definition": "Perkembangan tunas ekstremitas (limb bud), sumbu proksimodistal & anteroposterior, serta kelainan kongenital.",
      "keyPoints": [
        "AER (Apical Ectodermal Ridge) → FGF4/8 → proliferasi proksimodistal",
        "ZPA (Zone of Polarizing Activity) → Sonic Hedgehog (SHH) → pola digit anteroposterior",
        "Rotasi ekstremitas: Atas 90° Lateral, Bawah 90° Medial",
        "Sindaktili: kegagalan apoptosis jaringan interdigital (jari menyatu)",
        "Polidaktili: jari tambahan akibat ekspresi SHH abnormal",
        "Amelia / Meromelia: hilangnya seluruh atau sebagian ekstremitas"
      ],
      "questions": [
        {
          "text": "Struktur ektoderm tebal di ujung distal tunas ekstremitas (limb bud) yang mengontrol pertumbuhan proksimodistal adalah?",
          "answerIdx": 0,
          "opts": [
            "Apical Ectodermal Ridge (AER)",
            "Zone of Polarizing Activity (ZPA)",
            "Progress Zone (PZ)",
            "Notochordal Plate"
          ],
          "explanation": "AER (Apical Ectodermal Ridge) mengekspresikan FGF4 dan FGF8 yang menjaga mesenkim di bawahnya tetap berproliferasi, mendorong pertumbuhan ekstremitas sepanjang sumbu proksimodistal."
        },
        {
          "text": "Kerusakan atau ablasi pada Apical Ectodermal Ridge (AER) pada tahap awal pembentukan limb bud akan mengakibatkan?",
          "answerIdx": 0,
          "opts": [
            "Amelia atau Meromelia (defek/hilangnya ekstremitas)",
            "Polidaktili (jari berlebih)",
            "Sindaktili (jari menyatu)",
            "Brakidaktili (jari pendek)"
          ],
          "explanation": "Tanpa AER, proliferasi mesenkim terhenti sehingga pertumbuhan distal ekstremitas terhenti (menyebebkan amelia: tidak ada ekstremitas, atau meromelia: ekstremitas parsial)."
        },
        {
          "text": "Zone of Polarizing Activity (ZPA) terletak di posterior tunas ekstremitas dan mengatur pola anteroposterior (ibu jari ke kelingking) dengan mengeluarkan morfogen apa?",
          "answerIdx": 0,
          "opts": [
            "Sonic Hedgehog (SHH)",
            "FGF8",
            "Wnt7a",
            "BMP4"
          ],
          "explanation": "ZPA menghasilkan protein Sonic Hedgehog (SHH) yang menentukan identitas digit anteroposterior (dari ibu jari/pollex di anterior ke kelingking di posterior)."
        },
        {
          "text": "Seorang bayi lahir dengan jari ke-4 dan ke-5 pada tangan kanan menyatu (fused digits). Kelainan kongenital ini disebut?",
          "answerIdx": 0,
          "opts": [
            "Sindaktili",
            "Polidaktili",
            "Ektrodaktili",
            "Brakidaktili"
          ],
          "explanation": "Sindaktili terjadi akibat kegagalan pemisahan jari karena gangguan apoptosis (kematian sel terprogram) pada jaringan interdigital minggu ke-7 embrional."
        },
        {
          "text": "Kelainan kongenital berupa terbentuknya jari tambahan (extra digits) disebut?",
          "answerIdx": 1,
          "opts": [
            "Sindaktili",
            "Polidaktili",
            "Phocomelia",
            "Achondroplasia"
          ],
          "explanation": "Polidaktili adalah adanya jari tambahan, sering akibat regulasi berlebih dari eksresi SHH pada ZPA."
        },
        {
          "text": "Kelainan ekstremitas pendek seperti sirip anjing laut akibat penghentian osifikasi endokondral (dapat dipicu obat talidomid) disebut?",
          "answerIdx": 0,
          "opts": [
            "Phocomelia",
            "Polidaktili",
            "Sindaktili",
            "Craniosynostosis"
          ],
          "explanation": "Phocomelia ditandai dengan hilangnya tulang panjang ekstremitas (humerus/radius/femur/tibia) sehingga tangan/kaki melekat langsung pada truncus."
        },
        {
          "text": "Rotasi ekstremitas terjadi pada minggu ke-7 embrional. Ekstremitas atas dan bawah berotasi ke arah mana?",
          "answerIdx": 0,
          "opts": [
            "Ekstremitas atas berotasi 90° ke lateral, ekstremitas bawah 90° ke medial",
            "Ekstremitas atas berotasi 90° ke medial, ekstremitas bawah 90° ke lateral",
            "Keduanya berotasi 180° ke medial",
            "Keduanya berotasi 90° ke lateral"
          ],
          "explanation": "Ekstremitas atas berotasi 90° ke LATERAL (ekstensor di posterior/lateral), sedangkan ekstremitas bawah berotasi 90° ke MEDIAL (ekstensor di anterior)."
        }
      ],
      "flashcards": [
        {
          "front": "Lengkung faring I?",
          "back": "Mandibularis (N. V3) → Malleus, Incus, Maksila, Mandibula, otot pengunyah."
        },
        {
          "front": "Lengkung faring II?",
          "back": "Hioid (N. VII) → Stapes, Proc. styloideus, otot ekspresi wajah."
        },
        {
          "front": "Phocomelia?",
          "back": "Defek ekstremitas pendek seperti sirip akibat terhentinya diferensiasi tulang panjang."
        }
      ]
    }
  ]
});

DB.sources.push({
  "id": "file-7-fisiologi",
  "name": "Fisiologi Otot & Muskuloskeletal",
  "short": "File 7",
  "fileName": "soal fisiologi.pdf",
  "icon": "⚡",
  "color": "#0284c7",
  "desc": "Fisiologi potensial aksi jantung, mekanika sliding filament sarkomer, unitary smooth muscle, & bioenergetika kontraksi.",
  "concepts": [
    {
      "id": "fisiologi-kontraksi-sarkomer",
      "name": "Fisiologi Kontraksi & Mekanika Sarkomer",
      "definition": "Mekanisme biokimia & biofisika kontraksi otot rangka, jantung, & polos.",
      "keyPoints": [
        "Potensial aksi jantung Plateau (Fase 2) → Influks Ca2+ L-type + efluks K+ berkurang",
        "Teori Sliding Filament: Pita A TETAP, Pita I MEMENDEK, Zona H MEMENDEK/hilang",
        "Unitary Smooth Muscle berkontraksi sebagai sinsitium lewat Gap Junctions",
        "Sumber energi 10 detik pertama → Fosfokreatin (Kreatin Fosfat)",
        "Troponin C (otot rangka) vs Kalmodulin (otot polos) sebagai sensor Ca2+"
      ],
      "questions": [
        {
          "text": "Mengapa potensial aksi pada otot jantung memiliki fase plateau yang tidak ditemukan pada sebagian besar neuron?",
          "answerIdx": 1,
          "opts": [
            "Karena kanal natrium tetap terbuka selama seluruh potensial aksi",
            "Karena terjadi influks Ca²⁺ melalui kanal L-type bersamaan dengan berkurangnya efluks K⁺",
            "Karena pompa Na-K ATPase bekerja lebih cepat dibanding neuron",
            "Karena konsentrasi K⁺ ekstrasel jauh lebih tinggi",
            "Karena Na-Ca exchanger meningkatkan influks Na⁺"
          ],
          "explanation": "Fase plateau (fase 2) potensial aksi jantung disebabkan oleh pembukaan kanal Kalsium lambat tipe L (L-type Ca2+ channels) yang memasukkan Ca2+ ke intraseluler diimbangi penurunan permeabilitas K+."
        },
        {
          "text": "Selama kontraksi maksimal otot rangka, manakah kombinasi perubahan sarkomer berikut yang PALING tepat?",
          "answerIdx": 2,
          "opts": [
            "A band memendek, I band memendek, H band tetap",
            "A band tetap, I band memanjang, H band memanjang",
            "A band tetap, I band memendek, H band memendek atau menghilang",
            "A band memanjang, I band tetap, H band memendek",
            "Semua bagian memendek dengan proporsi yang sama"
          ],
          "explanation": "Menurut teori Sliding Filament: Pita A (filamen miosin) panjangnya TETAP. Pita I (filamen aktin murni) MEMENDEK, dan Zona H (daerah miosin murni tanpa tumpang tindih) MEMENDEK atau menghilang saat aktin saling bergeser ke tengah."
        },
        {
          "text": "Karakteristik yang paling mendukung agar unitary smooth muscle (otot polos viseral) dapat berkontraksi sebagai satu kesatuan adalah?",
          "answerIdx": 2,
          "opts": [
            "Setiap serabut dipersarafi oleh satu ujung saraf independen",
            "Adanya basement membrane tebal yang memisahkan setiap serabut",
            "Sitoplasma antarserabut dihubungkan oleh gap junction (nectus)",
            "Tidak adanya hubungan mekanik antarserabut",
            "Setiap serabut menghasilkan potensial aksi secara terisolasi"
          ],
          "explanation": "Otot polos unitary (seperti di usus, uterus, pembuluh darah) memiliki gap junctions (nectus) yang memungkinkan arus ion mengalir bebas dari satu sel ke sel lain sehingga berkontraksi sinkron sebagai sinsitium fungsional."
        },
        {
          "text": "Sumber energi utama yang langsung digunakan untuk regenerasi ATP pada 10 detik pertama aktivitas otot intensif adalah?",
          "answerIdx": 0,
          "opts": [
            "Fosfokreatin (Kreatin Fosfat)",
            "Glikolisis anaerob",
            "Siklus Kreb & fosforilasi oksidatif",
            "Glikogenolisis hati",
            "Siklus Cori"
          ],
          "explanation": "Sistem fosfagen (ATP + Kreatin Fosfat) memberikan pasokan energi maksimal tercepat dalam 8-10 detik pertama kontraksi otot sebelum glikolisis mengambil alih."
        },
        {
          "text": "Peran ion Kalsium (Ca²⁺) dalam memicu kontraksi otot rangka adalah dengan berikatan pada subunit mana?",
          "answerIdx": 0,
          "opts": [
            "Troponin C",
            "Troponin I",
            "Troponin T",
            "Tropomiosin",
            "Kepala Miosin"
          ],
          "explanation": "Ca2+ dilepaskan dari retikulum sarkoplasma dan berikatan dengan Troponin C. Ini menginduksi perubahan konformasi Troponin-Tropomiosin sehingga tempat pengikatan miosin pada aktin terbuka."
        },
        {
          "text": "Pada otot polos, ion Ca²⁺ yang masuk ke sitosol memicu kontraksi dengan membentuk kompleks bersama protein apa?",
          "answerIdx": 0,
          "opts": [
            "Kalmodulin (Calmodulin)",
            "Troponin C",
            "Kalsekuestrin",
            "Kalseksin",
            "Kalsekuestrin"
          ],
          "explanation": "Otot polos tidak memiliki troponin. Ca2+ berikatan dengan Kalmodulin membentuk kompleks Ca2+-Kalmodulin yang mengaktifkan Myosin Light Chain Kinase (MLCK) untuk memfosforilasi kepala miosin."
        }
      ],
      "flashcards": [
        {
          "front": "Fase Plateau Otot Jantung?",
          "back": "Influks Ca²⁺ lewat kanal L-type + efluks K⁺ menurun."
        },
        {
          "front": "Perubahan Sarkomer saat Kontraksi?",
          "back": "Pita A tetap, Pita I memendek, Zona H memendek/menghilang."
        },
        {
          "front": "Unitary Smooth Muscle?",
          "back": "Otot polos viseral dengan gap junctions → kontraksi sinkron sebagai sinsitium."
        },
        {
          "front": "Sumber energi otot 10 detik pertama?",
          "back": "Fosfokreatin (Kreatin Fosfat)."
        },
        {
          "front": "Pengikat Ca²⁺ otot rangka vs otot polos?",
          "back": "Otot Rangka = Troponin C; Otot Polos = Kalmodulin (Calmodulin)."
        }
      ]
    }
  ]
});



// FLAT LISTS (for quiz, tryout, flashcard)
// ──────────────────────────────────────────────
DB.allQuestions = [];
DB.allFlashcards = [];
DB.sources.forEach(src => {
  src.concepts.forEach(con => {
    (con.questions || []).flat().forEach(q => {
      q.sourceId = src.id; q.sourceName = src.name; q.conceptId = con.id; q.conceptName = con.name;
      if(!q.explanation) q.explanation = '';
      DB.allQuestions.push(q);
    });
    (con.flashcards || []).forEach(f => {
      f.sourceId = src.id; f.sourceName = src.name; f.conceptId = con.id; f.conceptName = con.name;
      DB.allFlashcards.push(f);
    });
  });
});





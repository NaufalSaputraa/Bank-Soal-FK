// ============================================================
// KNOWLEDGE BASE — Blok Muskuloskeletal
// Sumber: 5 file PDF (mikrobio, anatomi, histologi, fisiologi,
//          embriologi, biomekanika, soal ujian)
// ============================================================
const DB = {
  version: "1.0.0",
  blok: "Muskuloskeletal",
  topics: []
};

// ───────────────────── helper ─────────────────────
function q(text, answerIdx, opts, tags = [], explanation = "") {
  return { text, opts, answerIdx, tags, explanation };
}
function fc(front, back, tags = []) {
  return { front, back, tags };
}

// ============================================================
// TOPIK 1: ANATOMI
// ============================================================
DB.topics.push({
  id: "anatomi",
  name: "Anatomi",
  icon: "🦴",
  color: "#1f4b48",
  description: "Struktur tubuh manusia: cranium, vertebra, thorax, ekstremitas, arthrologi, myologi, neurovaskular.",
  subtopics: [
    // ── Cranium ──
    {
      id: "anatomi-cranium",
      name: "Cranium",
      concepts: [
        {
          id: "neurocranium",
          name: "Neurocranium",
          definition: "Bagian tengkorak yang melindungi otak. Terdiri dari 8 tulang: os frontale, 2 os parietale, 2 os temporale, os occipitale, os sphenoidale, os ethmoidale.",
          keyPoints: [
            "Neurocranium = pelindung otak",
            "Viscerocranium = tulang wajah",
            "Os sphenoidale termasuk neurocranium"
          ],
          related: ["foramen-cranii", "sutura-cranii"],
          questions: [
            q("Tulang manakah yang termasuk kelompok Neurocranium?", 0, [
              "Os occipitale, parietale, temporale, frontale, sphenoidale, ethmoidale",
              "Os maxillae, mandibula, zygomaticum, nasale, lacrimale, vomer",
              "Os frontale, parietale, nasale, maxillae, zygomaticum",
              "Os occipitale, temporale, mandibula, maxillae"
            ], ["anatomi", "neurocranium"]),
            q("Os manakah yang termasuk neurocranium?", 0, [
              "Os sphenoidale",
              "Os maxillaris", "Os zygomaticum", "Os patella", "Os nasale"
            ], ["anatomi", "neurocranium"])
          ],
          flashcards: [
            fc("Sebutkan tulang-tulang neurocranium", "Frontale, 2 parietale, 2 temporale, occipitale, sphenoidale, ethmoidale (total 8)"),
            fc("Apa fungsi neurocranium?", "Melindungi otak"),
            fc("Os sphenoidale termasuk neurocranium atau viscerocranium?", "Neurocranium")
          ]
        },
        {
          id: "foramen-cranii",
          name: "Foramen & Lubang Tengkorak",
          definition: "Lubang-lubang pada basis cranii yang dilalui oleh saraf dan pembuluh darah.",
          keyPoints: [
            "Foramen rotundum → N. maxillaris (V2)",
            "Foramen ovale → N. mandibularis (V3)",
            "Foramen spinosum → A. meningea media",
            "Foramen jugulare → N. IX, X, XI",
            "Foramen magnum → medulla oblongata → medulla spinalis",
            "Meatus acusticus internus → N. VII & VIII"
          ],
          related: ["neurocranium", "basis-cranii"],
          questions: [
            q("Pada basis cranii terdapat foramen rotundum. Nervus apa yang keluar?", 0, [
              "N. maxillaris (V2)", "N. mandibularis (V3)",
              "N. ophthalmicus (V1)", "N. facialis (VII)"
            ], ["anatomi", "foramen"]),
            q("Meatus acusticus internus adalah tempat keluarnya nervus...", 0, [
              "N. VII (facialis) dan N. VIII (vestibulocochlearis)",
              "N. V dan N. VI", "N. IX dan N. X", "N. III dan N. IV"
            ], ["anatomi", "foramen"]),
            q("Apa nama lubang tempat keluarnya nervus IX, X, XI?", 0, [
              "Foramen jugulare", "Foramen magnum", "Foramen ovale", "Foramen spinosum"
            ], ["anatomi", "foramen"]),
            q("Arteri meningea media masuk tengkorak melalui?", 0, [
              "Foramen spinosum", "Foramen ovale", "Foramen rotundum", "Foramen magnum"
            ], ["anatomi", "foramen"]),
            q("Apa nama lubang tempat medulla oblongata menjadi medulla spinalis?", 0, [
              "Foramen magnum", "Foramen jugulare", "Foramen ovale", "Canalis opticus"
            ], ["anatomi", "foramen"]),
            q("Glandula hipofisis terletak pada cekungan?", 0, [
              "Fossa hipofisialis / sella turcica",
              "Fossa cranii anterior", "Fossa condylaris", "Fossa jugularis"
            ], ["anatomi", "foramen"])
          ],
          flashcards: [
            fc("Foramen rotundum dilewati?", "N. maxillaris (V2)"),
            fc("Foramen ovale dilewati?", "N. mandibularis (V3)"),
            fc("Foramen spinosum dilewati?", "A. meningea media"),
            fc("Foramen jugulare dilewati?", "N. IX, X, XI"),
            fc("Foramen magnum?", "Medulla oblongata menjadi medulla spinalis"),
            fc("Sella turcica berisi?", "Glandula hipofisis")
          ]
        },
        {
          id: "sutura-cranii",
          name: "Sutura Tengkorak & Palatum",
          definition: "Sendi fibrosa pada tengkorak yang menghubungkan tulang-tulang cranial.",
          keyPoints: [
            "Sutura coronalis → os frontale + os parietale",
            "Sutura sagittalis → antar 2 os parietale",
            "Sutura lambdoidea → os parietale + os occipitale",
            "Palatum durum → processus palatinus maxillae + lamina horizontalis ossis palatini",
            "Os palatina membentuk palatum durum",
            "TMJ → sendi antara mandibula dengan cranium",
            "Discus intervertebralis → hubungan antar corpus vertebra"
          ],
          related: [],
          questions: [
            q("Sendi antara os parietalis dan os frontalis disebut?", 0, [
              "Sutura coronalis", "Sutura sagittalis", "Sutura lambdoidea", "Sutura squamosa"
            ], ["anatomi", "sutura"]),
            q("Apakah sendi yang terbentuk antara Os parietale dan Os occipitale?", 0, [
              "Sutura lambdoidea", "Sutura coronalis",
              "Articulatio atlantooccipitalis", "Sutura sagitalis",
              "Articulatio temporomandibularis"
            ], ["anatomi", "sutura"]),
            q("Tulang apa yang turut membangun palatum durum?", 0, [
              "Os palatina",
              "Os nasal", "Os mandibula", "Os lacrimale", "Os parientale"
            ], ["anatomi", "sutura"]),
            q("Sendi antara os mandibula dengan cranium disebut?", 0, [
              "Articulatio temporomandibularis (TMJ)",
              "Articulatio atlantooccipitalis", "Articulatio atlantoaxialis",
              "Symphysis mandibulae"
            ], ["anatomi", "sutura"]),
            q("Sendi yang terbentuk akibat hubungan antar corpus vertebra?", 0, [
              "Discus intervertebralis",
              "Articulatio zygapophysialis", "Ligamentum flavum", "Symphysis pubis"
            ], ["anatomi", "sutura"])
          ],
          flashcards: [
            fc("Sutura coronalis?", "Os frontale + os parietale"),
            fc("Sutura lambdoidea?", "Os parietale + os occipitale"),
            fc("Penyusun palatum durum?", "Processus palatinus maxillae + lamina horizontalis ossis palatini")
          ]
        },
        {
          id: "vertebra-thorax",
          name: "Vertebra & Thorax",
          definition: "Tulang belakang (vertebra) dan rangka dada (costa, sternum).",
          keyPoints: [
            "Nervi cervicales: 8 pasang",
            "Foramen transversarium → A. vertebralis",
            "Foramen intervertebrale → tempat keluar n. spinalis",
            "Angulus sternalis (Ludovici) → patokan costa II",
            "Costa spuria fluctuantes → costa XI",
            "Otot mastikasi: temporalis, masseter, pterygoideus lateralis & medialis"
          ],
          related: ["foramen-cranii"],
          questions: [
            q("Berapa jumlah nervi cervicales?", 0, [
              "8 pasang", "5 pasang", "7 pasang", "12 pasang", "3 pasang"
            ], ["anatomi", "vertebra"]),
            q("Foramen transversarium pada vertebra cervicalis dilewati?", 0, [
              "Arteria vertebralis", "Arteria carotis interna",
              "Nervus spinalis", "Arteria basilaris"
            ], ["anatomi", "vertebra"]),
            q("Nervus spinalis keluar melalui lubang?", 0, [
              "Foramen intervertebrale", "Foramen transversarium",
              "Foramen vertebrale", "Canalis centralis"
            ], ["anatomi", "vertebra"]),
            q("Angulus sternalis (Ludovici) menentukan costa ke?", 0, [
              "Costa II", "Costa I", "Costa III", "Costa VII"
            ], ["anatomi", "thorax"]),
            q("Manakah yang termasuk costa spuria fluctuantes?", 0, [
              "Costa XI", "Costa I", "Costa II", "Costa VII", "Costa X"
            ], ["anatomi", "thorax"]),
            q("Otot apa saja yang termasuk kelompok otot mastikasi?", 0, [
              "M. temporalis, masseter, pterygoideus lateralis & medialis",
              "M. buccinator, orbicularis oris, zygomaticus",
              "M. sternocleidomastoideus, trapezius",
              "M. digastricus, mylohyoideus"
            ], ["anatomi", "myologi"])
          ],
          flashcards: [
            fc("Jumlah nervi cervicales?", "8 pasang"),
            fc("Foramen transversarium berisi?", "A. vertebralis"),
            fc("Foramen intervertebrale berfungsi?", "Tempat keluar n. spinalis"),
            fc("Angulus sternalis patokan untuk?", "Costa II")
          ]
        }
      ]
    },
    // ── ANATOMI EKSTREMITAS ──
    {
      id: "anatomi-ekstremitas",
      name: "Ekstremitas",
      concepts: [
        {
          id: "plexus-brachialis",
          name: "Plexus Brachialis & Saraf Ekstremitas Atas",
          definition: "Anyaran saraf dari C5-Th1 yang menginervasi ekstremitas atas.",
          keyPoints: [
            "Plexus brachialis: C5, C6, C7, C8, Th1",
            "Fasciculus posterior → N. radialis",
            "Fasciculus medialis → N. ulnaris (C8-Th1)",
            "Fasciculus lateralis → N. musculocutaneus",
            "N. axillaris → M. deltoideus, kulit lateral bahu",
            "N. radialis → wrist drop (Saturday night palsy)",
            "N. medianus → carpal tunnel, hand of benediction",
            "N. ulnaris → claw hand, parestesia jari 5"
          ],
          related: [],
          questions: [
            q("Mahasiswa cedera, scapula menonjol (winged scapula). Saraf yang jejas?", 0, [
              "N. thoracicus longus", "N. axillaris", "N. suprascapularis",
              "N. dorsalis scapulae", "N. femoralis"
            ], ["anatomi", "plexus"]),
            q("Otot yang menginisiasi abduksi lengan 15° pertama?", 0, [
              "M. supraspinatus", "M. deltoideus", "M. infraspinatus",
              "M. teres minor", "M. teres major"
            ], ["anatomi", "plexus"]),
            q("Lesi plexus brachialis pars superior (C5-C6) → waiter's tip?", 0, [
              "Erb-Duchenne palsy", "Klumpke paralysis",
              "Saturday night palsy", "Carpal tunnel syndrome"
            ], ["anatomi", "plexus"]),
            q("Lesi plexus brachialis pars inferior (C8-Th1) → claw hand?", 0, [
              "Klumpke paralysis", "Erb-Duchenne palsy",
              "Saturday night palsy", "Carpal tunnel syndrome"
            ], ["anatomi", "plexus"]),
            q("Wrist drop disebabkan lesi?", 0, [
              "N. radialis", "N. medianus", "N. ulnaris", "N. musculocutaneus"
            ], ["anatomi", "plexus"]),
            q("Claw hand (main en griffe) lesi kronis saraf?", 0, [
              "N. ulnaris", "N. medianus", "N. radialis", "N. axillaris"
            ], ["anatomi", "plexus"]),
            q("Parestesia sisi medial telapak tangan & jari ke-5?", 0, [
              "N. ulnaris", "N. medianus", "N. radialis", "N. cutaneus antebrachii lat."
            ], ["anatomi", "plexus"]),
            q("Nervus yang berjalan di epicondylus medialis?", 0, [
              "N. ulnaris", "N. radialis", "N. musculocutaneus", "N. axillaris", "N. ischiadicus"
            ], ["anatomi", "plexus"]),
            q("Struktur yang membagi arteri axillaris menjadi 3 bagian?", 0, [
              "M. pectoralis minor", "M. pectoralis major",
              "M. teres major", "Clavicula", "M. teres minor"
            ], ["anatomi", "plexus"]),
            q("Vena untuk pungsi di fossa cubiti hubungkan v. cephalica & v. basilica?", 0, [
              "V. mediana cubiti", "V. axillaris", "V. brachialis", "V. saphena magna"
            ], ["anatomi", "plexus"]),
            q("Fraktur collum chirurgicum humeri berisiko merusak?", 0, [
              "N. axillaris & A. circumflexa humeri posterior",
              "N. radialis & A. profunda brachii",
              "N. ulnaris & A. collateralis ulnaris",
              "N. medianus & A. brachialis"
            ], ["anatomi", "plexus"]),
            q("Arteri radialis di pergelangan tangan terletak di lateral tendon?", 0, [
              "M. flexor carpi radialis", "M. flexor carpi ulnaris",
              "M. palmaris longus", "M. brachioradialis"
            ], ["anatomi", "plexus"]),
            q("Nervus yang menginervasi kulit bagian lateral bahu?", 0, [
              "N. cutaneus superior lateral", "N. axillaris",
              "N. radialis", "N. suprascapularis"
            ], ["anatomi", "plexus"]),
            q("Pemeriksaan refleks tendon biceps brachii menilai segmen?", 0, [
              "C5-C6", "C4-C5", "C6-C7", "C8-T1", "L2-L4"
            ], ["anatomi", "plexus"])
          ],
          flashcards: [
            fc("Erb-Duchenne palsy lesi?", "Plexus brachialis pars superior C5-C6 → waiter's tip"),
            fc("Klumpke palsy lesi?", "Plexus brachialis pars inferior C8-Th1 → claw hand"),
            fc("Winged scapula lesi?", "N. thoracicus longus"),
            fc("Wrist drop lesi?", "N. radialis (Saturday night palsy)"),
            fc("Claw hand lesi?", "N. ulnaris"),
            fc("Carpal tunnel melibatkan?", "N. medianus"),
            fc("Refleks biceps segmen?", "C5-C6"),
            fc("Pembagi arteri axillaris?", "M. pectoralis minor"),
            fc("V. mediana cubiti?", "Menghubungkan v. cephalica & v. basilica di fossa cubiti")
          ]
        },
        {
          id: "anatomi-ekstremitas-bawah",
          name: "Ekstremitas Bawah",
          definition: "Anatomi panggul, tungkai, dan kaki termasuk persarafan dan pembuluh darah.",
          keyPoints: [
            "Trigonum femorale: batas superior = lig. inguinale, lateral = m. sartorius, medial = m. adductor longus",
            "Isi trigonum femorale (lateral→medial): nervus, arteri, vena",
            "N. ischiadicus keluar pelvis via for. ischiadicum majus pars infrapiriformis",
            "N. ischiadicus bercabang jadi n. tibialis & n. peroneus communis",
            "N. peroneus communis melingkari collum fibulae (foot drop)",
            "N. peroneus profundus → first web space",
            "N. tibialis → kompartemen posterior tungkai bawah",
            "V. saphena magna → v. femoralis",
            "V. saphena parva → v. poplitea",
            "Tendon Achilles → m. gastrocnemius + m. soleus",
            "Hunter's canal dilewati a. femoralis, v. femoralis, n. saphenus (bukan n. femoralis)"
          ],
          related: [],
          questions: [
            q("Batas lateral trigonum femorale?", 0, [
              "M. sartorius", "M. adductor longus", "Ligamentum inguinale", "M. pectineus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Batas superior trigonum femorale?", 0, [
              "Ligamentum inguinale", "M. sartorius",
              "M. adductor longus", "M. pectineus", "M. iliopsoas"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Batas medial trigonum femorale?", 0, [
              "M. adductor longus", "M. sartorius",
              "Ligamentum inguinale", "M. rectus femoralis"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Isi trigonum femorale dari lateral ke medial?", 0, [
              "Nervus – arteri – vena",
              "Arteri – vena – nervus", "Vena – arteri – nervus", "Arteri – nervus – vena"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot yang membentuk Tendon Achilles?", 0, [
              "M. gastrocnemius & M. soleus",
              "M. tibialis posterior & M. soleus",
              "M. peroneus longus & brevis", "M. flexor hallucis longus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Percabangan nervus ischiadicus?", 0, [
              "N. tibialis & N. peroneus communis",
              "N. peroneus superficialis & profunda",
              "N. tibialis & N. femoralis", "N. femoralis & N. pudendus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("N. tibialis menginervasi kompartemen?", 0, [
              "Posterior tungkai bawah", "Anterior tungkai bawah", "Lateral tungkai bawah"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Foot drop akibat cedera saraf melingkari collum fibulae?", 0, [
              "N. peroneus (fibularis) communis",
              "N. tibialis", "N. saphenus", "N. suralis"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Inervasi kulit first web space?", 0, [
              "N. peroneus profundus", "N. peroneus superficialis",
              "N. tibialis", "N. saphenus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Organ yang tidak melewati Hunter's Canal?", 0, [
              "N. femoralis", "A. femoralis", "V. femoralis", "N. saphena"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Fraktur collum femoris sebabkan nekrosis caput femoris karena rusak?", 0, [
              "A. circumflexa femoris medialis", "A. obturatoria",
              "A. circumflexa femoris lateralis", "A. profunda femoris"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("N. ischiadicus keluar pelvis via?", 0, [
              "For. ischiadicum majus pars infrapiriformis",
              "For. ischiadicum majus pars suprapiriformis",
              "Foramen ischiadicum minus", "Canalis obturatorius"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Flexor utama sendi panggul?", 0, [
              "M. iliopsoas", "M. rectus femoris", "M. sartorius", "M. gracilis"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot adductor tungkai paling posterior?", 0, [
              "M. adductor magnus", "M. adductor brevis",
              "M. adductor longus", "M. pectineus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot 'unlocking' lutut saat fleksi dari ekstensi?", 0, [
              "M. popliteus", "M. plantaris", "M. gastrocnemius", "M. soleus"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("V. saphena magna bermuara ke?", 0, [
              "V. femoralis", "V. poplitea", "V. iliaca externa", "V. tibialis posterior"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("V. saphena parva bermuara ke?", 0, [
              "V. poplitea", "V. femoralis", "V. iliaca externa", "V. tibialis posterior"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Trendelenburg sign positif → kelumpuhan?", 0, [
              "M. gluteus medius; N. gluteus superior",
              "M. gluteus maximus; N. gluteus inferior",
              "M. piriformis; N. ischiadicus",
              "M. quadriceps femoris; N. femoralis"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Arteri poplitea adalah kelanjutan a. femoralis setelah?", 0, [
              "Hiatus adductorius", "Trigonum femorale",
              "Canalis inguinalis", "Lacuna musculorum"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot kelompok Hamstring?", 0, [
              "M. biceps femoris, semitendinosus, semimembranosus",
              "M. rectus femoris, vastus lateralis, vastus medialis",
              "M. sartorius, gracilis, pectineus",
              "M. adductor magnus, longus, brevis"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot 'tailor' (fleksi panggul, abduksi, eksorotasi, fleksi lutut)?", 0, [
              "M. sartorius", "M. gracilis", "M. rectus femoris", "M. tensor fasciae latae"
            ], ["anatomi", "ekstremitas-bawah"]),
            q("Otot rotator cuff yang melakukan rotasi internal (medial)?", 0, [
              "M. subscapularis", "M. supraspinatus", "M. infraspinatus", "M. teres minor"
            ], ["anatomi", "ekstremitas-bawah"])
          ],
          flashcards: [
            fc("Batas trigonum femorale?", "Superior: lig. inguinale, Lateral: m. sartorius, Medial: m. adductor longus"),
            fc("Isi trigonum femorale (lat→med)?", "Nervus, Arteri, Vena (NAV)"),
            fc("N. ischiadicus bercabang jadi?", "N. tibialis & N. peroneus communis"),
            fc("Foot drop lesi?", "N. peroneus communis di collum fibulae"),
            fc("First web space diinervasi?", "N. peroneus profundus"),
            fc("Tendon Achilles?", "M. gastrocnemius + M. soleus"),
            fc("V. saphena magna →?", "V. femoralis"),
            fc("V. saphena parva →?", "V. poplitea"),
            fc("Hunter's canal tidak dilewati?", "N. femoralis"),
            fc("Hamstring?", "M. biceps femoris, semitendinosus, semimembranosus")
          ]
        },
        {
          id: "myologi-umum",
          name: "Myologi Umum",
          definition: "Ilmu tentang otot, termasuk struktur, jenis, dan fungsi.",
          keyPoints: [
            "Bagian otot: caput (kepala), venter (perut), insertio (ujung), origo (pangkal)",
            "Jaringan ikat otot: epimysium (luar), perimysium (sekitar fasciculus), endomysium (dalam)",
            "Otot dengan 2 caput: m. biceps brachii",
            "Unit kontraktil terkecil: sarkomer (batas: garis Z)"
          ],
          related: [],
          questions: [
            q("Disebut apakah bagian perut dari otot seran lintang?", 0, [
              "Venter", "Caput", "Origo", "Insertio", "Cauda"
            ], ["anatomi", "myologi"]),
            q("Apa nama jaringan ikat yang mengelilingi 1 fasciculus?", 0, [
              "Perimysium", "Endomysium", "Epimysium", "Sarcoplasma", "Sarcolema"
            ], ["anatomi", "myologi"]),
            q("Kumpulan badan sel saraf di luar SSP disebut?", 0, [
              "Ganglion", "Efektor", "Nervus", "Soma cell", "Reseptor"
            ], ["anatomi", "myologi"]),
            q("Otot yang memiliki dua caput?", 0, [
              "M. biceps brachii", "M. quadriceps femoris",
              "M. pronator quadratus", "M. triceps brachii", "M. semimembranosus"
            ], ["anatomi", "myologi"])
          ],
          flashcards: [
            fc("Bagian otot?", "Caput, venter, origo, insertio"),
            fc("Perimysium?", "Jaringan ikat sekitar 1 fasciculus"),
            fc("Epimysium?", "Jaringan ikat paling luar otot"),
            fc("Endomysium?", "Jaringan ikat dalam (sekitar serabut otot)")
          ]
        },
        {
          id: "arthrologi",
          name: "Arthrologi (Sendi)",
          definition: "Ilmu tentang sendi, klasifikasi, dan strukturnya.",
          keyPoints: [
            "Diarthrosis: sendi gerak, punya cavum articularis, discus articularis, cairan synovial",
            "Sendi peluru (enarthrosis): gerak ke segala arah, contoh: articulatio coxae",
            "Symphysis pubica dihubungkan fibrocartilago",
            "Discus articularis membagi rongga sendi diarthrosis menjadi 2"
          ],
          related: [],
          questions: [
            q("Apa yang membagi rongga sendi diarthrosis menjadi 2 rongga?", 0, [
              "Discus articularis", "Cavitas articularis", "Cartilago hyalina",
              "Membran synovalis", "Discus intervertebralis"
            ], ["anatomi", "arthrologi"]),
            q("Struktur yang menghubungkan articulatio symphysis pubica?", 0, [
              "Fibrocartilago", "Discus articularis",
              "Meniscus articularis", "Membrana interossei", "Discus epiphysealis"
            ], ["anatomi", "arthrologi"]),
            q("Karakteristik articulatio diarthrosis?", 0, [
              "Cairan synovial", "Tuberosis", "Tuberculum", "Periosteum", "Otot"
            ], ["anatomi", "arthrologi"]),
            q("Sendi yang mirip sendi peluru?", 0, [
              "Sendi enarthrosis", "Sendi ginglymus",
              "Sendi elipsoidea", "Sendi sellaris", "Sendi trochlearis"
            ], ["anatomi", "arthrologi"]),
            q("Struktur tulang yang membentuk articulatio atlantooccipital?", 0, [
              "Facies articularis superior atlantis",
              "Proc. condylaris", "Os maxilaris", "Os mandibularis", "Os vomer"
            ], ["anatomi", "arthrologi"])
          ],
          flashcards: [
            fc("Diarthrosis?", "Sendi gerak dengan cairan synovial"),
            fc("Enarthrosis?", "Sendi peluru, gerak ke segala arah"),
            fc("Symphysis pubica dihubungkan?", "Fibrocartilago"),
            fc("Discus articularis?", "Membagi rongga sendi diarthrosis")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// TOPIK 2: HISTOLOGI
// ============================================================
DB.topics.push({
  id: "histologi",
  name: "Histologi",
  icon: "🔬",
  color: "#2f6d4f",
  description: "Jaringan tubuh: tulang, kartilago, otot, dan proses osifikasi.",
  subtopics: [
    {
      id: "histologi-tulang",
      name: "Textus Osseus (Jaringan Tulang)",
      concepts: [
        {
          id: "osteon",
          name: "Osteon & Tulang Kompak",
          definition: "Unit struktural tulang kompak (osteon/sistem Havers): lamella konsentris mengelilingi canalis centralis (Havers) yang berisi pembuluh darah & saraf.",
          keyPoints: [
            "Osteon = sistem Havers = unit dasar tulang kompak",
            "Lamella osteoni → konsentris mengelilingi kanal",
            "Lamella interstitialis → di antara osteon, TIDAK termasuk osteon",
            "Lamella circumferentia externa → di dekat periosteum",
            "Canaliculi ossei → menghubungkan antar lacuna",
            "Kanal Volkmann → menghubungkan antar kanal Havers (tegak lurus)",
            "Struktur osteon: osteosit, lamella osteoni, canalis centralis, canaliculi ossei"
          ],
          related: ["sel-tulang"],
          questions: [
            q("Bangunan penyusun osteon. Struktur yang TIDAK ikut menyusun?", 0, [
              "Lamella interstitialis", "Osteosit", "Lamella osteoni",
              "Canalis centralis", "Canaliculi ossei"
            ], ["histologi", "osteon"]),
            q("Struktur yang tidak termasuk osteonum?", 0, [
              "Lamella interstitial", "Canalis havers",
              "Lamella osteoni", "Canaliculus ossei", "Osteocytus"
            ], ["histologi", "osteon"]),
            q("Preparat tulang kompak: lingkaran konsentris + saluran tengah berisi pembuluh darah?", 0, [
              "Osteon (sistem Havers)", "Lakuna", "Kanalikuli", "Trabekula", "Endosteum"
            ], ["histologi", "osteon"]),
            q("Apakah nama lamella yang berada di dekat periosteum?", 0, [
              "Lamella circumferentia externa", "Lamella osteoni",
              "Lamella interstitialis", "Lamella circumferentia interna"
            ], ["histologi", "osteon"]),
            q("Preparat tulang kompak: saluran menghubungkan antar kanal Havers, tegak lurus?", 0, [
              "Kanal Volkmann", "Kanalikuli", "Lakuna",
              "Lamela sirkumferensial", "Osteoid"
            ], ["histologi", "osteon"]),
            q("Apakah nama juluran sitoplasma osteosit yang menghubungkan antar lacuna?", 0, [
              "Canaliculi ossei", "Serat Sharpey", "Lamella osteoni",
              "Lamella circumferentia eksterna", "Lamella circumferentia interna"
            ], ["histologi", "osteon"]),
            q("Struktur yang menghubungkan antar lacuna?", 0, [
              "Canaliculi", "Lamella interstitial", "Osteoklas", "Osteoid"
            ], ["histologi", "osteon"])
          ],
          flashcards: [
            fc("Osteon?", "Unit struktural tulang kompak (sistem Havers)"),
            fc("Lamella interstitialis?", "Di antara osteon, bukan bagian osteon"),
            fc("Lamella circumferentia externa?", "Di dekat periosteum"),
            fc("Kanal Volkmann?", "Menghubungkan kanal Havers, tegak lurus"),
            fc("Canaliculi ossei?", "Menghubungkan antar lacuna")
          ]
        },
        {
          id: "sel-tulang",
          name: "Sel-Sel Tulang",
          definition: "Terdiri dari osteoblas (pembentuk tulang), osteosit (sel matang), osteoklas (peresorpsi), dan osteoprogenitor (sel induk).",
          keyPoints: [
            "Osteoblas: sel kuboid basofilik, aktif mensekresi osteoid",
            "Osteosit: sel matang dalam lakuna, punya tonjolan di kanalikuli",
            "Osteoklas: sel raksasa multinukleus di Lakuna Howship, resorpsi tulang",
            "Osteoprogenitor: sel induk → osteoblas"
          ],
          related: ["osteon", "osteoid", "remodelling"],
          questions: [
            q("Tampak sel besar dalam lekukan Lakuna Howship. Sel dimaksud?", 0, [
              "Osteoklas", "Osteosit", "Osteoprogenitor", "Osteoblas", "Mesenkim"
            ], ["histologi", "sel-tulang"]),
            q("Wanita 68 th, osteoporosis. Sel raksasa multinukleus di Lakuna Howship. Fungsinya?", 0, [
              "Resorpsi jaringan tulang", "Sintesis kolagen tipe II",
              "Produksi osteoid", "Mineralisasi osteoid", "Pembentukan lakuna"
            ], ["histologi", "sel-tulang"]),
            q("Anak 10 th, fraktur humerus. Sel kuboid aktif mensekresikan osteoid?", 0, [
              "Osteoblas", "Osteosit", "Osteoklas", "Kondrosit", "Fibroblas"
            ], ["histologi", "sel-tulang"]),
            q("Sel di garis kuning (osteoblas di tepi trabekula). Cirinya?", 0, [
              "Sitoplasma bersifat basofilik",
              "Tersusun menyebar di matriks osteoid",
              "Tidak punya tonjolan sitoplasma",
              "Nukleus kecil", "Menyusun stratum fibrogenicum periosteum"
            ], ["histologi", "sel-tulang"]),
            q("Cedera tulang panjang. Sel di lakuna dengan tonjolan sitoplasma di kanalikuli?", 0, [
              "Osteosit", "Osteoblas", "Osteoklas", "Fibroblas", "Sel osteoprogenitor"
            ], ["histologi", "sel-tulang"]),
            q("Sel tulang matang adalah?", 0, [
              "Osteosit", "Osteoklas", "Osteoblas", "Osteoprogenitor", "Kondrosit"
            ], ["histologi", "sel-tulang"])
          ],
          flashcards: [
            fc("Osteoblas?", "Pembentuk tulang, sekresi osteoid, sitoplasma basofilik"),
            fc("Osteosit?", "Sel tulang matang di lakuna, punya tonjolan"),
            fc("Osteoklas?", "Sel raksasa multinukleus, resorpsi tulang di Lakuna Howship"),
            fc("Lakuna Howship?", "Lekukan tempat osteoklas berada saat resorpsi")
          ]
        },
        {
          id: "osteoid",
          name: "Osteoid & Matriks Tulang",
          definition: "Matriks organik tulang yang belum termineralisasi, diproduksi oleh osteoblas. Mengandung kolagen tipe I dan proteoglikan.",
          keyPoints: [
            "Osteoid = matriks tulang belum termineralisasi",
            "Diproduksi oleh osteoblas",
            "Akan mengalami mineralisasi menjadi tulang keras",
            "Osteoid terdapat di zona osteoid pada lempeng epifisis"
          ],
          related: ["sel-tulang", "ossifikasi"],
          questions: [
            q("Karakteristik osteoid?", 0, [
              "Diproduksi oleh osteoblas",
              "Berisi kolagen tipe 2 & garam anorganik",
              "Merupakan komponen cellular tulang",
              "Berada di lakuna howship",
              "Merupakan sel tulang matur"
            ], ["histologi", "osteoid"]),
            q("Pada penyembuhan fraktur, osteoblas menghasilkan matriks organik sebelum mineralisasi?", 0, [
              "Osteoid", "Osteon", "Lakuna", "Kanalikuli", "Lamela"
            ], ["histologi", "osteoid"]),
             q("Pada osifikasi intramembranosa, sel mesenkim → osteoblas → mensekresikan matriks organik?",
              0, ["Osteoid", "Lamella", "Trabekula", "Cartilago hyalina", "Endosteum"],
              ["histologi", "osteoid"])
          ],
          flashcards: [
            fc("Osteoid?", "Matriks organik tulang belum termineralisasi, diproduksi osteoblas"),
            fc("Osteoid mengandung?", "Kolagen tipe I dan proteoglikan")
          ]
        },
        {
          id: "ossifikasi",
          name: "Ossifikasi & Lempeng Epifisis",
          definition: "Proses pembentukan tulang: intramembranosa (langsung dari mesenkim) dan endokondral (dari kartilago).",
          keyPoints: [
            "Ossifikasi intramembranosa: langsung dari mesenkim → tulang (tulang tengkorak)",
            "Ossifikasi endokondral: kartilago hialin → tulang (tulang panjang)",
            "Lempeng epifisis (dari epifisis ke diafisis): zona reservata/istirahat, zona proliferasi, zona hipertrofi, zona kalsifikasi, zona osifikasi",
            "Zona proliferasi: kondrosit tersusun seperti tumpukan koin (collumella chondrocytica), aktif mitosis",
            "Zona kalsifikasi: matriks kartilago mengapur, kondrosit degenerasi"
          ],
          related: ["osteoid", "sel-tulang"],
          questions: [
            q("Bayi: pembentukan tulang tengkorak langsung dari mesenkim tanpa kartilago?", 0, [
              "Intramembranosa", "Endokondral", "Intrakartilaginea",
              "Perikondral", "Apposisional"
            ], ["histologi", "ossifikasi"]),
            q("Anak gangguan pertumbuhan. Kondrosit seperti tumpukan koin, aktif membelah?", 0, [
              "Zona proliferasi", "Zona istirahat", "Zona hipertrofi",
              "Zona kalsifikasi", "Zona osifikasi"
            ], ["histologi", "ossifikasi"]),
            q("Anak 6 th, lempeng epifisis: sel seperti tumpukan koin sejajar?", 0, [
              "Zona proliferasi", "Zona reservata", "Zona hipertrofi",
              "Zona klasifikasi", "Zona osifikasi"
            ], ["histologi", "ossifikasi"]),
            q("Anak gangguan mineralisasi: matriks kartilago mengapur, kondrosit degenerasi?", 0, [
              "Zona kalsifikasi", "Zona istirahat", "Zona proliferasi",
              "Zona hipertrofi", "Zona osifikasi"
            ], ["histologi", "ossifikasi"]),
            q("Gambar ossifikasi lempeng epifisis. Pernyataan yang benar?", 0, [
              "Tampak collumella chondrocytica pada zona proliferata",
              "Sel cartilago cadangan di zona resorben",
              "Jenis cartilago cadangan adalah elastis",
              "Sel cartilago membesar di zona reservata",
              "Proses ini terjadi di atap tengkorak"
            ], ["histologi", "ossifikasi"]),
            q("Gambar ossifikasi (penggantian kartilago hialin). Pernyataan benar?", 0, [
              "Penggantian kartilago hialin dengan tulang",
              "Disebut osteogenesis intramembranacea",
              "Pola pertumbuhan interstisial",
              "Sel mesenkimal hipertrofi lalu pecah",
              "Bone shaft digantikan tulang kompakta"
            ], ["histologi", "ossifikasi"])
          ],
          flashcards: [
            fc("Osifikasi intramembranosa?", "Langsung dari mesenkim → tulang (tengkorak)"),
            fc("Osifikasi endokondral?", "Kartilago hialin → tulang (tulang panjang)"),
            fc("Zona proliferasi?", "Kondrosit seperti tumpukan koin, aktif mitosis"),
            fc("Zona kalsifikasi?", "Matriks kartilago mengapur, kondrosit degenerasi"),
            fc("Urutan lempeng epifisis?", "Reservata → Proliferasi → Hipertrofi → Kalsifikasi → Osifikasi")
          ]
        },
        {
          id: "woven-bone",
          name: "Woven Bone & Remodelling",
          definition: "Woven bone: tulang imatur dengan serabut kolagen tidak teratur, banyak sel. Ditemukan pada cementum akar gigi dan tulang embrio.",
          keyPoints: [
            "Woven bone: kolagen tidak teratur, banyak sel osteosit",
            "Ditemukan pada cement akar gigi dan tulang embrio",
            "Remodelling: keseimbangan osteoblas (formasi) & osteoklas (resorpsi)",
            "Dipengaruhi hormon (PTH, kalsitonin) dan gravitasi",
            "Serabut Sharpey: melekatkan periosteum ke tulang"
          ],
          related: ["sel-tulang", "osteon"],
          questions: [
            q("Karakteristik woven bone?", 0, [
              "Ditemukan pada cement akar gigi",
              "Tidak banyak sel & serabut kolagen teratur",
              "Membentuk sistem Havers",
              "Terdiri dari os compacta & spongiosa",
              "Osteoklas berderet seperti epithelial"
            ], ["histologi", "woven-bone"]),
            q("Tulang embrio: serabut kolagen tidak teratur, banyak sel?", 0, [
              "Woven bone", "Tulang kompak", "Tulang spongiosa",
              "Lamellar bone", "Osteon"
            ], ["histologi", "woven-bone"]),
            q("Pernyataan benar tentang remodelling tulang?", 0, [
              "Dipengaruhi respon umpan balik negatif hormon & gravitasi",
              "Terjadi jika aktivitas osteoklas > osteoblas",
              "Osteoklas menyusun matriks tulang",
              "Osteoblas meresorpsi tulang",
              "Pada fraktur hard callus jadi soft callus"
            ], ["histologi", "woven-bone"]),
            q("Atlet cedera. Serabut Sharpey menembus tulang. Fungsinya?", 0, [
              "Melekatkan periosteum pada tulang",
              "Tempat hematopoiesis", "Menghubungkan osteon",
              "Membentuk osteoid", "Menghubungkan lakuna"
            ], ["histologi", "woven-bone"]),
            q("Biopsi tulang femur: jaringan ikat padat menutupi permukaan luar, lapisan osteogenik?", 0, [
              "Periosteum", "Endosteum", "Perikondrium",
              "Osteoid", "Lamela interstisial"
            ], ["histologi", "woven-bone"])
          ],
          flashcards: [
            fc("Woven bone?", "Tulang imatur, kolagen tidak teratur, banyak sel"),
            fc("Serabut Sharpey?", "Melekatkan periosteum ke tulang"),
            fc("Remodelling?", "Keseimbangan formasi (osteoblas) & resorpsi (osteoklas)"),
            fc("Periosteum?", "Jaringan ikat padat luar tulang, lapisan osteogenik")
          ]
        },
        {
          id: "kartilago",
          name: "Kartilago (Tulang Rawan)",
          definition: "Jaringan ikat khusus dengan matriks padat. Tiga jenis: hyalin, elastis, fibrosa.",
          keyPoints: [
            "Kartilago hyalin: trakea, bronkus, ventral costae, sendi",
            "Kartilago elastis: epiglotis, telinga luar",
            "Kartilago fibrosa: symphysis pubis, discus intervertebralis",
            "Chondrosit di dalam lacuna",
            "Perichondrium: lapisan fibrosa luar + lapisan kondrogenik dalam"
          ],
          related: ["ossifikasi"],
          questions: [
            q("Jaringan kartilago dengan kondrosit di lakuna, matriks serat elastica. Di organ mana?", 0, [
              "Epiglotis", "Trakea", "Ventral costae",
              "Bronchi primerius", "Bronchi sekundrius"
            ], ["histologi", "kartilago"]),
            q("Jaringan di simfisis pubis pada gambar histologi?", 0, [
              "Cartilago fibrosa", "Cartilago elastica",
              "Cartilago hyalina", "Textus osseus"
            ], ["histologi", "kartilago"]),
            q("Sel utama dalam lacuna pada textus cartilagineus elastica?", 0, [
              "Chondrocyte", "Fibroblast", "Osteocyte",
              "Sel mesenkim", "Chondroblast"
            ], ["histologi", "kartilago"]),
            q("Asal sel mesenkim pembentuk kartilago?", 0, [
              "Stratum chondrogenicum perichondrium",
              "Stratum fibrosum perichondrium",
              "Matriks teritorialis",
              "Matriks interteritorialis",
              "Perimysium"
            ], ["histologi", "kartilago"])
          ],
          flashcards: [
            fc("Kartilago hyalin?", "Trakea, bronkus, ventral costae"),
            fc("Kartilago elastis?", "Epiglotis, telinga luar"),
            fc("Kartilago fibrosa?", "Symphysis pubis, discus intervertebralis")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// TOPIK 3: FISIOLOGI OTOT
// ============================================================
DB.topics.push({
  id: "fisiologi",
  name: "Fisiologi Otot",
  icon: "⚡",
  color: "#a8442f",
  description: "Mekanisme kontraksi otot, metabolisme energi, neuromuscular junction, dan potensial aksi.",
  subtopics: [
    {
      id: "fisiologi-kontraksi",
      name: "Kontraksi Otot",
      concepts: [
        {
          id: "nmj",
          name: "Neuromuscular Junction (NMJ)",
          definition: "Pertemuan saraf-otot tempat sinyal dari saraf diteruskan ke otot.",
          keyPoints: [
            "Urutan NMJ: potensial aksi saraf → buka Ca channel → Ca masuk terminal → pelepasan asetilkolin → depolarisasi end plate otot",
            "Asetilkolin (ACh) adalah neurotransmitter di NMJ",
            "Relaksasi: Ca²⁺ dikembalikan ke retikulum sarkoplasma"
          ],
          related: [],
          questions: [
            q("Proses di neuromuscular junction (NMJ)?", 0, [
              "Ca²⁺ masuk terminal saraf → ACh dilepas → depolarisasi end plate",
              "Depolarisasi end plate → potensial aksi saraf → Ca²⁺ masuk",
              "ACh dilepas → potensial aksi saraf → potensial aksi otot",
              "Ca²⁺ masuk end plate → potensial aksi otot"
            ], ["fisiologi", "nmj"]),
            q("Proses akhir kontraksi tunggal otot rangka?", 0, [
              "Pengembalian Ca²⁺ ke retikulum sarkoplasma",
              "Pelepasan asetilkolin",
              "Pengembalian reseptor dihidropirin",
              "Pelepasan Ca²⁺",
              "Penutupan reseptor nikotinik"
            ], ["fisiologi", "nmj"])
          ],
          flashcards: [
            fc("Urutan NMJ?", "Aksi saraf → Ca²⁺ masuk → ACh lepas → depolarisasi end plate"),
            fc("Relaksasi otot?", "Ca²⁺ dikembalikan ke retikulum sarkoplasma")
          ]
        },
        {
          id: "sarkomer",
          name: "Sarkomer & Kontraksi",
          definition: "Unit fungsional kontraktil terkecil otot rangka, terdiri dari pita A, pita I, garis Z, zona H, garis M.",
          keyPoints: [
            "Sarkomer = dari garis Z ke garis Z",
            "Pita A = daerah miosin (tebal)",
            "Pita I = daerah aktin (tipis)",
            "Zona H = tengah pita A, hanya miosin",
            "Garis M = di tengah sarkomer",
            "Saat kontraksi: pita I dan zona H memendek, pita A tetap",
            "Diameter filamen tipis (aktin) = 6 nm",
            "Diameter filamen tebal (miosin) = 16 nm"
          ],
          related: [],
          questions: [
            q("Struktur yang menjadi batas sarkomer?", 0, [
              "Garis Z", "Pita A", "Pita I", "Garis M", "Zona H"
            ], ["fisiologi", "sarkomer"]),
            q("Saat kontraksi, bagian mana yang memendek?", 0, [
              "Zona H", "Pita A", "Aktin", "Miosin"
            ], ["fisiologi", "sarkomer"]),
            q("Berapa diameter filamen tipis?", 0, [
              "6 nanometer", "0,6 nanometer", "16 nanometer",
              "60 nanometer", "6 mikrometer"
            ], ["fisiologi", "sarkomer"]),
            q("Berapa diameter filamen tebal?", 0, [
              "16 nanometer", "6 nanometer", "0,6 nanometer",
              "60 nanometer", "6 mikrometer"
            ], ["fisiologi", "sarkomer"])
          ],
          flashcards: [
            fc("Batas sarkomer?", "Garis Z ke garis Z"),
            fc("Saat kontraksi memendek?", "Pita I dan zona H"),
            fc("Diameter aktin?", "6 nm"),
            fc("Diameter miosin?", "16 nm")
          ]
        },
        {
          id: "energi-otot",
          name: "Metabolisme Energi Otot",
          definition: "Sumber energi otot: fosfokreatin, glikolisis anaerob, fosforilasi oksidatif.",
          keyPoints: [
            "10 detik pertama: fosfokreatin",
            "Glikolisis anaerob: glukosa → 2 piruvat → 2 laktat (+2 ATP)",
            "Siklus Krebs: di mitokondria, menghasilkan banyak ATP",
            "Succinate-CoA ligase → +1 ATP",
            "Oxoglutarate dehydrogenase → +3 ATP",
            "1 mol glukosa → 32 ATP (aerob)",
            "Glikolisis anaerob → 2 ATP, tidak efisien",
            "Fosforilasi oksidatif: O₂ sebagai akseptor elektron terakhir"
          ],
          related: [],
          questions: [
            q("Sumber energi utama 10 detik pertama aktivitas maksimal?", 0, [
              "Fosfokreatin", "Siklus Cori",
              "Glukoneogenesis", "Glikolisis anaerob"
            ], ["fisiologi", "energi"]),
            q("ATP dari 1 mol glukosa secara aerob?", 0, [
              "32 ATP", "2 ATP", "8 ATP", "16 ATP", "38 ATP"
            ], ["fisiologi", "energi"]),
            q("Hasil glikolisis pada otot?", 0, [
              "Piruvat dan laktat", "Glikogen",
              "Oksalasetat", "Asetil-KoA"
            ], ["fisiologi", "energi"]),
            q("Fungsi oksigen dalam fosforilasi oksidatif?", 0, [
              "Akseptor elektron terakhir", "Donor elektron terakhir",
              "Mengikat ATP jadi ADP", "Menghambat rantai transpor elektron"
            ], ["fisiologi", "energi"])
          ],
          flashcards: [
            fc("Energi 10 detik pertama?", "Fosfokreatin"),
            fc("Hasil glikolisis?", "2 piruvat + 2 ATP (anaerob)"),
            fc("ATP per glukosa (aerob)?", "32 ATP"),
            fc("Fungsi O₂?", "Akseptor elektron terakhir di fosforilasi oksidatif")
          ]
        },
        {
          id: "otot-jantung",
          name: "Otot Jantung & Otot Polos",
          definition: "Ciri khas otot jantung (cardiac): discus intercalatus, sel bercabang, inti 1-2 di tengah. Otot polos: inti tunggal tengah, fusiform, tidak berstriasi.",
          keyPoints: [
            "Otot jantung: discus intercalatus, bercabang, striasi, inti 1-2 tengah",
            "Otot rangka: silindris, inti banyak di tepi, striasi",
            "Otot polos: fusiform, inti 1 di tengah, tidak striasi",
            "Otot polos unitary: gap junction, kontraksi bersama",
            "Otot polos multi-unit: kontraksi independen",
            "Fase 0 potensial aksi jantung: pembukaan saluran Na⁺ cepat",
            "Kalmodulin: mengaktifkan MLCK pada otot polos"
          ],
          related: [],
          questions: [
            q("Ciri myocytus cardiacus yang membedakan dari striatus & non-striatus?", 0, [
              "Memiliki discus intercalatus",
              "Inti tunggal di tengah",
              "Nukleus lonjong (oval)",
              "Sel bercabang & berhubungan",
              "Miofibril tersusun teratur"
            ], ["fisiologi", "otot-jantung"]),
            q("Struktur yang menghubungkan sel otot jantung?", 0, [
              "Discus intercalatus", "Stria", "Nukleus", "Anastomosis"
            ], ["fisiologi", "otot-jantung"]),
            q("Ciri otot halus (intestinum tenue) untuk gerak peristaltik?", 0, [
              "Sel fusiform, inti 1 di tengah, tidak striasi",
              "Silindris, inti banyak di perifer, striasi",
              "Bercabang, inti 1-2 di tengah, discus intercalatus",
              "Kuboid, inti bulat di tengah",
              "Pipih, inti di perifer"
            ], ["fisiologi", "otot-jantung"]),
            q("Apa yang membedakan unitary vs multi-unit smooth muscle?", 0, [
              "Multi-unit bekerja independen",
              "Unitary bekerja independen",
              "Multi-unit tidak berkontraksi",
              "Tidak ada perbedaan"
            ], ["fisiologi", "otot-jantung"]),
            q("Penyebab fase 0 potensial aksi otot jantung?", 0, [
              "Pembukaan saluran natrium cepat",
              "Penutupan saluran natrium lambat",
              "Pembukaan saluran kalium cepat",
              "Masuknya kalsium"
            ], ["fisiologi", "otot-jantung"]),
            q("Fungsi kalmodulin?", 0, [
              "Mengaktifkan enzim Myosin Light Chain Kinase",
              "Meninggikan kalsium",
              "Sinyal mulai kontraksi",
              "Memulai kontraksi"
            ], ["fisiologi", "otot-jantung"]),
            q("Apa itu 'syncytium' pada otot jantung?", 0, [
              "Semua sel otot jantung berhubungan & berfungsi sebagai satu kesatuan",
              "Semua sel otot jantung bekerja independen",
              "Sel otot jantung tidak saling berhubungan",
              "Sel jantung tidak punya discus intercalatus"
            ], ["fisiologi", "otot-jantung"])
          ],
          flashcards: [
            fc("Ciri otot jantung?", "Discus intercalatus, bercabang, inti 1-2 tengah"),
            fc("Ciri otot rangka?", "Silindris, inti banyak tepi, striasi"),
            fc("Ciri otot polos?", "Fusiform, inti 1 tengah, tidak striasi"),
            fc("Fase 0 jantung?", "Pembukaan saluran Na⁺ cepat"),
            fc("Kalmodulin?", "Mengaktifkan MLCK pada otot polos")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// TOPIK 4: MIKROBIOLOGI
// ============================================================
DB.topics.push({
  id: "mikrobiologi",
  name: "Mikrobiologi",
  icon: "🦠",
  color: "#b08a3e",
  description: "Flora normal, bakteri patogen, pewarnaan, desinfeksi/sterilisasi, infeksi nosokomial.",
  subtopics: [
    {
      id: "mikro-flora-normal",
      name: "Flora Normal",
      concepts: [
        {
          id: "flora-normal",
          name: "Flora Normal Tubuh",
          definition: "Mikroorganisme yang menetap di permukaan tubuh tanpa menimbulkan penyakit pada keadaan normal.",
          keyPoints: [
            "Flora normal melindungi dari patogen dengan: modifikasi pH, hambat tempat pengikatan, produksi bakteriosin",
            "Faktor jadi oportunistik: invasi, komponen permukaan, kolonisasi, predisposisi host",
            "Kulit: Staphylococcus epidermidis (lisozim menghambat)",
            "Kolon: 96% anaerob, Clostridium sp. (infeksi gelembung gas)",
            "Vagina: Candida albicans (oportunistik, pH rendah)",
            "Saluran napas: Strep. viridans → endokarditis subakut",
            "Traktus urinarius: >10⁵ sel/ml → ISK"
          ],
          related: [],
          questions: [
            q("Flora normal mengurangi kolonisasi patogen dengan cara?", 0, [
              "Modifikasi pH, hambat tempat ikat, produksi bakteriosin",
              "Invasi dan toksigenitas",
              "Produksi endotoksin",
              "Pembentukan spora"
            ], ["mikrobiologi", "flora-normal"]),
            q("Faktor flora normal jadi oportunistik?", 0, [
              "Invasi, komponen permukaan, kolonisasi, predisposisi host",
              "Nutrisi", "Kebersihan", "Kondisi geografis"
            ], ["mikrobiologi", "flora-normal"]),
            q("Flora kulit yang dihambat lisozim?", 0, [
              "Staphylococcus epidermidis",
              "Escherichia coli", "Salmonella typhi",
              "Shigella dysentriae", "Vibrio cholera"
            ], ["mikrobiologi", "flora-normal"]),
            q("Bakteri anaerob kolon penyebab infeksi gelembung gas?", 0, [
              "Clostridium sp.", "Escherichia coli",
              "Staphylococcus sp", "Streptococcus sp", "Salmonella sp"
            ], ["mikrobiologi", "flora-normal"]),
            q("Flora vagina oportunistik penyebab kandidiasis?", 0, [
              "Candida albicans", "Enterococcus faecalis",
              "Aspergillus sp.", "Penicillium sp.", "Herpes simplex"
            ], ["mikrobiologi", "flora-normal"]),
            q("Flora saluran napas Strep. viridans pada katup jantung abnormal?", 0, [
              "Endokarditis subakut", "Pneumonia",
              "Meningitis", "Septikemia", "Gastroenteritis"
            ], ["mikrobiologi", "flora-normal"]),
            q("Jumlah bakteri urine menandakan ISK?", 0, [
              ">10⁵ sel/ml", ">1000 sel/ml", ">100 sel/ml", ">10 sel/ml", ">1 sel/ml"
            ], ["mikrobiologi", "flora-normal"]),
            q("Faktor yang mempengaruhi kolonisasi flora vagina?", 0, [
              "Umur, hormonal, kebiasaan seksual, antiseptik genitalia",
              "pH vagina", "Jumlah flora normal",
              "Jenis flora normal", "Mikroba pembentuk biofilm"
            ], ["mikrobiologi", "flora-normal"]),
            q("Area traktus respiratorius yang steril?", 0, [
              "Alveoli, nasofaring",
              "Laring, sinus nasalis, bronkioli",
              "Orofaring, nasofaring, tonsil",
              "Mulut, tenggorokan",
              "Orofaring, bronki"
            ], ["mikrobiologi", "flora-normal"])
          ],
          flashcards: [
            fc("Cara flora normal lindungi tubuh?", "Modifikasi pH, hambat tempat ikat, produksi bakteriosin"),
            fc("Strep. viridans pada katup jantung?", "Endokarditis subakut"),
            fc("Candida albicans di vagina?", "Kandidiasis oportunistik"),
            fc("ISK ditandai?", ">10⁵ bakteri/ml urin")
          ]
        }
      ]
    },
    {
      id: "mikro-desinfeksi",
      name: "Desinfeksi & Sterilisasi",
      concepts: [
        {
          id: "desinfeksi-sterilisasi",
          name: "Desinfeksi & Sterilisasi",
          definition: "Metode membunuh mikroorganisme: fisika (panas, radiasi) dan kimia (desinfektan, antiseptik).",
          keyPoints: [
            "Pemanasan kering: flaming, incineration",
            "Pemanasan basah: autoclave (>100°C), boiling, pasteurisasi",
            "Autoclave: sterilisasi >100°C dengan uap bertekanan",
            "Antiseptik: untuk jaringan hidup; Desinfektan: untuk benda mati",
            "Karbol/lisol: meningkatkan permeabilitas membran plasma",
            "Savlon: tidak membunuh HIV & Hepatitis B",
            "Bycline: merusak membran sel bakteri",
            "Alkohol 70-80%: efektif tapi kurang efektif terhadap spora",
            "Uji koefisien fenol: menggunakan Staphylococcus aureus"
          ],
          related: [],
          questions: [
            q("Contoh pemanasan kering?", 0, [
              "Flaming", "Autoclave", "Pasteurisasi", "Radiasi", "Boiling"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Contoh sterilisasi pemanasan basah?", 0, [
              "Autoclave", "Flaming", "Radiasi", "Boiling", "Incineration"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Desinfektan tingkatkan permeabilitas membran plasma?", 0, [
              "Karbol/Lisol", "Etanol", "Klorin", "Formalin", "Savlon"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Desinfektan tidak membunuh HIV & Hepatitis B?", 0, [
              "Savlon", "Betadin", "Klorin", "Etanol", "Formalin"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Bakteri untuk uji koefisien fenol?", 0, [
              "Staphylococcus aureus", "Salmonella typhi",
              "Bacillus subtilis", "Escherichia coli"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Mekanisme bycline membunuh bakteri?", 0, [
              "Merusak membran sel", "Denaturasi protein",
              "Oksidasi protein", "Menginaktivasi enzim"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Waktu efektif dekontaminasi HIV & Hepatitis B?", 0, [
              "10 menit", "5 menit", "15 menit", "30 menit", "45 menit"
            ], ["mikrobiologi", "desinfeksi"]),
            q("Kandungan antiseptik tangan kurang efektif terhadap?", 0, [
              "Spora", "Pili", "Flagel", "Membran sel", "Dinding sel"
            ], ["mikrobiologi", "desinfeksi"])
          ],
          flashcards: [
            fc("Pemanasan kering?", "Flaming, incineration"),
            fc("Pemanasan basah?", "Autoclave, boiling, pasteurisasi"),
            fc("Autoclave?", "Sterilisasi >100°C uap bertekanan"),
            fc("Savlon?", "Tidak membunuh HIV & Hepatitis B"),
            fc("Karbol?", "Meningkatkan permeabilitas membran plasma"),
            fc("Bycline?", "Merusak membran sel bakteri"),
            fc("Uji koefisien fenol?", "Gunakan Staphylococcus aureus")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// TOPIK 5: EMBRIOLOGI
// ============================================================
DB.topics.push({
  id: "embriologi",
  name: "Embriologi",
  icon: "🧬",
  color: "#6b5b8a",
  description: "Perkembangan embrio: gastrulasi, osteogenesis, perkembangan vertebra dan ekstremitas.",
  subtopics: [
    {
      id: "embrio-umum",
      name: "Embriogenesis Umum",
      concepts: [
        {
          id: "gastrulasi",
          name: "Gastrulasi & 3 Lapisan Germinal",
          definition: "Pembentukan 3 lapisan germinal (ektoderm, mesoderm, endoderm) pada minggu ke-3 ditandai primitive streak.",
          keyPoints: [
            "Gastrulasi: pembentukan 3 lapisan germinal",
            "Tahap: morula → blastula → gastrula",
            "Primitive streak = penanda gastrulasi",
            "Mesoderm → miotom (otot rangka), sklerotom (tulang), dermatom (kulit)",
            "Otot berasal dari mesoderm (kecuali otot siliaris & sfingter pupil dari ektoderm neural crest)"
          ],
          related: [],
          questions: [
            q("Diferensiasi organ dimulai pembentukan 3 lapisan germinal pada tahap?", 0, [
              "Gastrulasi", "Blastulasi", "Morulasi", "Evaginasi", "Invaginasi"
            ], ["embriologi", "gastrulasi"]),
            q("Penanda tahap gastrulasi?", 0, [
              "Primitive streak", "Primitive yolk",
              "Primitive node", "Primitive groove"
            ], ["embriologi", "gastrulasi"]),
            q("Lapisan mesoderm pada somit yang membentuk otot rangka?", 0, [
              "Miotom", "Sklerotom", "Dermatom", "Mioblas", "Miosit"
            ], ["embriologi", "gastrulasi"]),
            q("Pada implantasi hasil pembuahan di uterus, zigot di tahap?", 0, [
              "Blastula", "Mesoderm", "Endoderm", "Gastrula", "Morula"
            ], ["embriologi", "gastrulasi"])
          ],
          flashcards: [
            fc("Gastrulasi?", "Pembentukan 3 lapisan germinal (minggu ke-3)"),
            fc("Penanda gastrulasi?", "Primitive streak"),
            fc("Miotom?", "Mesoderm → otot rangka"),
            fc("Sklerotom?", "Mesoderm → tulang")
          ]
        },
        {
          id: "osteogenesis-embrio",
          name: "Osteogenesis Embrio",
          definition: "Pembentukan tulang pada embrio: osifikasi primer di diafisis, sekunder di epifisis.",
          keyPoints: [
            "Osifikasi primer: dimulai di diafisis tulang panjang",
            "Osifikasi vertebra: selesai sekitar usia 25 tahun",
            "Tunas ekstremitas: minggu 8-9 mulai bentuk jari",
            "Pusat osifikasi primer femur: di diafisis",
            "Pertumbuhan tulang kepala (desmal) = intramembranosa"
          ],
          related: ["ossifikasi"],
          questions: [
            q("Lokasi pusat osifikasi primer pada tulang panjang?", 0, [
              "Diafisis", "Epifisis", "Metafisis",
              "Lempeng epifisis", "Kartilago artikular"
            ], ["embriologi", "osteogenesis"]),
            q("Osifikasi vertebra selesai pada usia?", 0, [
              "25 tahun", "10 tahun", "15 tahun", "18 tahun", "21 tahun"
            ], ["embriologi", "osteogenesis"]),
            q("Tunas ekstremitas mulai bentuk jari pada minggu?", 0, [
              "8-9", "3-4", "10-11", "12-13", "14-15"
            ], ["embriologi", "osteogenesis"]),
            q("Tulang yang mengalami pengulangan primer pada ekstremitas bawah?", 0, [
              "Femur", "Radius", "Klavikula", "Humerus", "Tibia"
            ], ["embriologi", "osteogenesis"])
          ],
          flashcards: [
            fc("Osifikasi primer?", "Dimulai di diafisis tulang panjang"),
            fc("Osifikasi vertebra selesai?", "~25 tahun"),
            fc("Tunas ekstremitas bentuk jari?", "Minggu 8-9")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// TOPIK 6: BIOMEKANIKA
// ============================================================
DB.topics.push({
  id: "biomekanika",
  name: "Biomekanika",
  icon: "⚙️",
  color: "#2c5f7a",
  description: "Prinsip fisika dalam tubuh: momentum, keseimbangan, tuas, traksi.",
  subtopics: [
    {
      id: "biomek-umum",
      name: "Prinsip Biomekanika",
      concepts: [
        {
          id: "keseimbangan-momentum",
          name: "Keseimbangan & Momentum",
          definition: "Penerapan hukum fisika Newton dan prinsip keseimbangan pada tubuh manusia.",
          keyPoints: [
            "Keseimbangan stabil: pusat gravitasi di dalam benda, permukaan luas",
            "Keseimbangan labil: pusat gravitasi di luar benda",
            "Helm dengan bantalan → aplikasi momentum",
            "Traksi kulit/kaki → aplikasi biomekanika ortopedi",
            "Angkat barbel: tuas kelas III"
          ],
          related: [],
          questions: [
            q("Keseimbangan menjadi labil saat?", 0, [
              "Pusat gravitasi di luar benda",
              "Pusat gravitasi di dalam benda",
              "Permukaan lebih luas",
              "Kontak lebih luas",
              "Pusat gravitasi lebih rendah"
            ], ["biomekanika", "keseimbangan"]),
            q("Yang bukan cara membuat keseimbangan lebih stabil?", 0, [
              "Membungkuk", "Memegang tongkat",
              "Berjongkok", "Membuka kaki lebar",
              "Membuka tangan (T pose)"
            ], ["biomekanika", "keseimbangan"]),
            q("Mengangkat barbel termasuk tuas kelas?", 0, [
              "III", "I", "II", "IV", "V"
            ], ["biomekanika", "keseimbangan"]),
            q("Penggunaan helm bantalan merupakan penerapan?", 0, [
              "Momentum", "Tuas kelas I", "Tuas kelas II",
              "Tuas kelas III", "Traksi"
            ], ["biomekanika", "keseimbangan"]),
            q("Pernyataan benar tentang otot (biomekanika)?", 0, [
              "Massa otot pria lansia > wanita lansia",
              "Otot membentuk 70% massa tubuh",
              "Otot mengubah energi kinetik jadi kimia",
              "Massa otot wanita lansia > pria lansia"
            ], ["biomekanika", "keseimbangan"]),
            q("Penerapan biomekanika dalam ortopedi?", 0, [
              "Traksi kulit untuk fraktur kaki",
              "Penambahan beban agar lurus",
              "Membungkus tulang fraktur",
              "Operasi cepat"
            ], ["biomekanika", "keseimbangan"])
          ],
          flashcards: [
            fc("Keseimbangan labil?", "Pusat gravitasi di luar benda"),
            fc("Helm bantalan?", "Aplikasi momentum"),
            fc("Angkat barbel?", "Tuas kelas III")
          ]
        }
      ]
    }
  ]
});

// ============================================================
// ALL QUESTIONS FLAT LIST (for quiz/tryout)
// ============================================================
DB.allQuestions = [];
DB.topics.forEach(topic => {
  topic.subtopics.forEach(st => {
    st.concepts.forEach(con => {
      con.questions.forEach(q => {
        q.topicId = topic.id;
        q.topicName = topic.name;
        q.subtopicId = st.id;
        q.subtopicName = st.name;
        q.conceptId = con.id;
        q.conceptName = con.name;
        DB.allQuestions.push(q);
      });
    });
  });
});

// ALL FLASHCARDS FLAT LIST
DB.allFlashcards = [];
DB.topics.forEach(topic => {
  topic.subtopics.forEach(st => {
    st.concepts.forEach(con => {
      con.flashcards.forEach(f => {
        f.topicId = topic.id;
        f.topicName = topic.name;
        f.subtopicId = st.id;
        f.subtopicName = st.name;
        f.conceptId = con.id;
        f.conceptName = con.name;
        DB.allFlashcards.push(f);
      });
    });
  });
});

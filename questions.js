// questions.js — IQ Test Question Bank
// Each question has English (en) and Spanish (es) versions
// domains: Verbal | Numerical | Spatial | Logic
// difficulty: 1 (easy) | 2 (medium) | 3 (hard)

var QUESTION_BANK = [

  // ─── VERBAL ──────────────────────────────────────────────────────────────

  {
    domain: "Verbal", difficulty: 1,
    en: { q: "Which word is the odd one out?", s: "Choose the word that does not belong.", o: ["Carrot","Potato","Tomato","Radish"], a: 2 },
    es: { q: "¿Cuál palabra no pertenece al grupo?", s: "Elige la palabra que no encaja.", o: ["Zanahoria","Papa","Tomate","Rábano"], a: 2 }
  },
  {
    domain: "Verbal", difficulty: 1,
    en: { q: "Complete the analogy: Book is to Library as Painting is to ___", s: "", o: ["Artist","Canvas","Gallery","Museum"], a: 2 },
    es: { q: "Completa la analogía: Libro es a Biblioteca como Pintura es a ___", s: "", o: ["Artista","Lienzo","Galería","Museo"], a: 2 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "Which word means the same as 'Ephemeral'?", s: "", o: ["Eternal","Transient","Substantial","Ancient"], a: 1 },
    es: { q: "¿Cuál palabra significa lo mismo que 'Efímero'?", s: "", o: ["Eterno","Transitorio","Sustancial","Antiguo"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "If all Bloops are Razzies and all Razzies are Lazzies, then:", s: "", o: ["All Bloops are definitely Lazzies","All Lazzies are Bloops","Some Bloops are not Lazzies","None of the above"], a: 0 },
    es: { q: "Si todos los Bloops son Razzies y todos los Razzies son Lazzies, entonces:", s: "", o: ["Todos los Bloops son Lazzies","Todos los Lazzies son Bloops","Algunos Bloops no son Lazzies","Ninguna de las anteriores"], a: 0 }
  },
  {
    domain: "Verbal", difficulty: 3,
    en: { q: "Choose the word most OPPOSITE in meaning to: LOQUACIOUS", s: "", o: ["Talkative","Verbose","Taciturn","Eloquent"], a: 2 },
    es: { q: "Elige la palabra más OPUESTA en significado a: LOCUAZ", s: "", o: ["Hablador","Verboso","Taciturno","Elocuente"], a: 2 }
  },
  {
    domain: "Verbal", difficulty: 1,
    en: { q: "Which of the following is a synonym for 'Brave'?", s: "", o: ["Timid","Courageous","Reckless","Cautious"], a: 1 },
    es: { q: "¿Cuál de las siguientes es sinónimo de 'Valiente'?", s: "", o: ["Tímido","Valeroso","Imprudente","Cauteloso"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "Complete the analogy: Hot is to Cold as Day is to ___", s: "", o: ["Sun","Night","Warm","Light"], a: 1 },
    es: { q: "Completa la analogía: Caliente es a Frío como Día es a ___", s: "", o: ["Sol","Noche","Tibio","Luz"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "Which word does NOT belong with the others?", s: "", o: ["Triangle","Circle","Red","Square"], a: 2 },
    es: { q: "¿Cuál palabra NO pertenece al grupo?", s: "", o: ["Triángulo","Círculo","Rojo","Cuadrado"], a: 2 }
  },
  {
    domain: "Verbal", difficulty: 3,
    en: { q: "Which word means the same as 'Ubiquitous'?", s: "", o: ["Rare","Everywhere","Hidden","Ancient"], a: 1 },
    es: { q: "¿Cuál palabra significa lo mismo que 'Ubicuo'?", s: "", o: ["Raro","En todas partes","Oculto","Antiguo"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "Complete the analogy: Doctor is to Hospital as Teacher is to ___", s: "", o: ["Book","Student","School","Lesson"], a: 2 },
    es: { q: "Completa la analogía: Médico es a Hospital como Maestro es a ___", s: "", o: ["Libro","Estudiante","Escuela","Lección"], a: 2 }
  },
  {
    domain: "Verbal", difficulty: 1,
    en: { q: "Which of these words is an antonym of 'Ancient'?", s: "", o: ["Old","Modern","Historic","Classic"], a: 1 },
    es: { q: "¿Cuál de estas palabras es antónimo de 'Antiguo'?", s: "", o: ["Viejo","Moderno","Histórico","Clásico"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 3,
    en: { q: "Choose the word most similar in meaning to: INSIPID", s: "", o: ["Flavorful","Bland","Spicy","Vivid"], a: 1 },
    es: { q: "Elige la palabra más similar en significado a: INSÍPIDO", s: "", o: ["Sabroso","Soso","Picante","Vívido"], a: 1 }
  },
  {
    domain: "Verbal", difficulty: 2,
    en: { q: "Complete: Bird is to Sky as Fish is to ___", s: "", o: ["Scales","Water","Swimming","Ocean"], a: 1 },
    es: { q: "Completa: Pájaro es a Cielo como Pez es a ___", s: "", o: ["Escamas","Agua","Nadar","Océano"], a: 1 }
  },

  // ─── NUMERICAL ───────────────────────────────────────────────────────────

  {
    domain: "Numerical", difficulty: 1,
    en: { q: "What is the next number in the series?\n2, 6, 12, 20, 30, ___", s: "", o: ["40","42","44","48"], a: 1 },
    es: { q: "¿Cuál es el siguiente número en la serie?\n2, 6, 12, 20, 30, ___", s: "", o: ["40","42","44","48"], a: 1 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "If a shirt costs $40 after a 20% discount, what was the original price?", s: "", o: ["$48","$50","$52","$56"], a: 1 },
    es: { q: "Si una camisa cuesta $40 después de un 20% de descuento, ¿cuál era el precio original?", s: "", o: ["$48","$50","$52","$56"], a: 1 }
  },
  {
    domain: "Numerical", difficulty: 1,
    en: { q: "What is the next number: 1, 1, 2, 3, 5, 8, 13, ___", s: "Identify the pattern and continue the sequence.", o: ["18","19","20","21"], a: 3 },
    es: { q: "¿Cuál es el siguiente número: 1, 1, 2, 3, 5, 8, 13, ___", s: "Identifica el patrón y continúa la secuencia.", o: ["18","19","20","21"], a: 3 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "A train travels 120 km in 1.5 hours. How long to travel 200 km at the same speed?", s: "", o: ["2 hrs","2 hrs 20 min","2 hrs 30 min","2 hrs 40 min"], a: 2 },
    es: { q: "Un tren recorre 120 km en 1.5 horas. ¿Cuánto tarda en recorrer 200 km a la misma velocidad?", s: "", o: ["2 hrs","2 hrs 20 min","2 hrs 30 min","2 hrs 40 min"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 1,
    en: { q: "What is the next number in the series?\n3, 6, 9, 12, ___", s: "", o: ["14","15","16","18"], a: 1 },
    es: { q: "¿Cuál es el siguiente número en la serie?\n3, 6, 9, 12, ___", s: "", o: ["14","15","16","18"], a: 1 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "If 5 workers build a wall in 10 days, how long for 2 workers to build the same wall?", s: "", o: ["20 days","25 days","30 days","4 days"], a: 1 },
    es: { q: "Si 5 trabajadores construyen un muro en 10 días, ¿cuánto tardan 2 trabajadores en construir el mismo muro?", s: "", o: ["20 días","25 días","30 días","4 días"], a: 1 }
  },
  {
    domain: "Numerical", difficulty: 3,
    en: { q: "What is the missing number?\n4, 9, 16, 25, ___, 49", s: "", o: ["30","34","36","38"], a: 2 },
    es: { q: "¿Cuál es el número que falta?\n4, 9, 16, 25, ___, 49", s: "", o: ["30","34","36","38"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "A store offers 30% off. The sale price is $70. What was the original price?", s: "", o: ["$90","$95","$100","$110"], a: 2 },
    es: { q: "Una tienda ofrece 30% de descuento. El precio de oferta es $70. ¿Cuál era el precio original?", s: "", o: ["$90","$95","$100","$110"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 3,
    en: { q: "What is the next number: 2, 3, 5, 7, 11, 13, ___", s: "Hint: think about prime numbers.", o: ["14","15","17","19"], a: 2 },
    es: { q: "¿Cuál es el siguiente número: 2, 3, 5, 7, 11, 13, ___", s: "Pista: piensa en números primos.", o: ["14","15","17","19"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "If a car travels at 60 km/h, how far does it travel in 2 hours 30 minutes?", s: "", o: ["120 km","140 km","150 km","180 km"], a: 2 },
    es: { q: "Si un auto viaja a 60 km/h, ¿qué distancia recorre en 2 horas 30 minutos?", s: "", o: ["120 km","140 km","150 km","180 km"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 1,
    en: { q: "What is 15% of 200?", s: "", o: ["25","30","35","40"], a: 1 },
    es: { q: "¿Cuánto es el 15% de 200?", s: "", o: ["25","30","35","40"], a: 1 }
  },
  {
    domain: "Numerical", difficulty: 3,
    en: { q: "What is the next number: 1, 4, 9, 16, 25, ___", s: "", o: ["30","34","36","40"], a: 2 },
    es: { q: "¿Cuál es el siguiente número: 1, 4, 9, 16, 25, ___", s: "", o: ["30","34","36","40"], a: 2 }
  },
  {
    domain: "Numerical", difficulty: 2,
    en: { q: "A recipe needs 3 cups of flour for 12 cookies. How many cups for 20 cookies?", s: "", o: ["4 cups","5 cups","6 cups","4.5 cups"], a: 1 },
    es: { q: "Una receta necesita 3 tazas de harina para 12 galletas. ¿Cuántas tazas para 20 galletas?", s: "", o: ["4 tazas","5 tazas","6 tazas","4.5 tazas"], a: 1 }
  },

  // ─── SPATIAL ─────────────────────────────────────────────────────────────

  {
    domain: "Spatial", difficulty: 3,
    en: { q: "A cube is painted red on all faces, then cut into 27 equal smaller cubes. How many smaller cubes have exactly 2 red faces?", s: "", o: ["8","12","6","4"], a: 1 },
    es: { q: "Un cubo está pintado de rojo en todas sus caras y se corta en 27 cubos iguales. ¿Cuántos cubos pequeños tienen exactamente 2 caras rojas?", s: "", o: ["8","12","6","4"], a: 1 }
  },
  {
    domain: "Spatial", difficulty: 2,
    en: { q: "If you fold a square piece of paper in half twice and cut a hole in the center, how many holes appear when fully unfolded?", s: "", o: ["1","2","4","8"], a: 2 },
    es: { q: "Si doblas una hoja cuadrada por la mitad dos veces y haces un agujero en el centro, ¿cuántos agujeros aparecen al desdoblarla?", s: "", o: ["1","2","4","8"], a: 2 }
  },
  {
    domain: "Spatial", difficulty: 2,
    en: { q: "How many faces does a regular dodecahedron have?", s: "", o: ["8","10","12","20"], a: 2 },
    es: { q: "¿Cuántas caras tiene un dodecaedro regular?", s: "", o: ["8","10","12","20"], a: 2 }
  },
  {
    domain: "Spatial", difficulty: 1,
    en: { q: "How many sides does a hexagon have?", s: "", o: ["5","6","7","8"], a: 1 },
    es: { q: "¿Cuántos lados tiene un hexágono?", s: "", o: ["5","6","7","8"], a: 1 }
  },
  {
    domain: "Spatial", difficulty: 2,
    en: { q: "A clock shows 3:00. What is the angle between the hour and minute hands?", s: "", o: ["60°","75°","90°","120°"], a: 2 },
    es: { q: "Un reloj marca las 3:00. ¿Cuál es el ángulo entre el minutero y el horario?", s: "", o: ["60°","75°","90°","120°"], a: 2 }
  },
  {
    domain: "Spatial", difficulty: 3,
    en: { q: "A cube has all faces painted. It is cut into 64 equal smaller cubes. How many smaller cubes have NO painted faces?", s: "", o: ["8","16","24","32"], a: 0 },
    es: { q: "Un cubo tiene todas sus caras pintadas. Se corta en 64 cubos iguales. ¿Cuántos cubos pequeños no tienen ninguna cara pintada?", s: "", o: ["8","16","24","32"], a: 0 }
  },
  {
    domain: "Spatial", difficulty: 1,
    en: { q: "If you look at a clock at 6:00, which hand points straight down?", s: "", o: ["Minute hand","Hour hand","Both hands","Neither"], a: 1 },
    es: { q: "Si miras un reloj a las 6:00, ¿cuál manecilla apunta hacia abajo?", s: "", o: ["Minutero","Horario","Ambas","Ninguna"], a: 1 }
  },
  {
    domain: "Spatial", difficulty: 2,
    en: { q: "How many edges does a cube have?", s: "", o: ["8","10","12","16"], a: 2 },
    es: { q: "¿Cuántas aristas tiene un cubo?", s: "", o: ["8","10","12","16"], a: 2 }
  },
  {
    domain: "Spatial", difficulty: 3,
    en: { q: "A mirror reflects your image. If you raise your RIGHT hand, which hand does your reflection raise?", s: "", o: ["Right hand","Left hand","Both hands","Neither"], a: 0 },
    es: { q: "Un espejo refleja tu imagen. Si levantas tu mano DERECHA, ¿qué mano levanta tu reflejo?", s: "", o: ["Mano derecha","Mano izquierda","Ambas manos","Ninguna"], a: 0 }
  },
  {
    domain: "Spatial", difficulty: 2,
    en: { q: "If you unfold a cube, how many squares will you see?", s: "", o: ["4","5","6","8"], a: 2 },
    es: { q: "Si desarmas un cubo, ¿cuántos cuadrados verás?", s: "", o: ["4","5","6","8"], a: 2 }
  },

  // ─── LOGIC ───────────────────────────────────────────────────────────────

  {
    domain: "Logic", difficulty: 2,
    en: { q: "All doctors are scientists. Some scientists are artists. Therefore:", s: "", o: ["All doctors are artists","Some doctors may be artists","No doctors are artists","All artists are doctors"], a: 1 },
    es: { q: "Todos los médicos son científicos. Algunos científicos son artistas. Por lo tanto:", s: "", o: ["Todos los médicos son artistas","Algunos médicos pueden ser artistas","Ningún médico es artista","Todos los artistas son médicos"], a: 1 }
  },
  {
    domain: "Logic", difficulty: 1,
    en: { q: "In a race, you overtake the person in 2nd place. What position are you in now?", s: "", o: ["1st","2nd","3rd","It depends"], a: 1 },
    es: { q: "En una carrera, adelantas a la persona en 2do lugar. ¿En qué posición estás ahora?", s: "", o: ["1ro","2do","3ro","Depende"], a: 1 }
  },
  {
    domain: "Logic", difficulty: 3,
    en: { q: "You have hourglasses measuring 7 min and 4 min. How do you measure exactly 9 minutes?", s: "Choose the correct method.", o: ["Start both; when 4 ends flip it; when 7 ends 1 min remains on 4; flip 7; wait for 4","Start 7-min; when done start 4-min; total = 11 min","Start both; when 4 ends flip 7; when 7 ends flip 4","Run 4-min twice then 1 min of 7-min"], a: 0 },
    es: { q: "Tienes relojes de arena de 7 min y 4 min. ¿Cómo mides exactamente 9 minutos?", s: "Elige el método correcto.", o: ["Inicia ambos; cuando el de 4 termina, voltéalo; cuando el de 7 termina queda 1 min en el de 4; voltea el de 7; espera a que termine el de 4","Inicia el de 7; cuando termina inicia el de 4; total = 11 min","Inicia ambos; cuando termina el de 4 voltea el de 7; cuando termina el de 7 voltea el de 4","Corre el de 4 dos veces y luego 1 min del de 7"], a: 0 }
  },
  {
    domain: "Logic", difficulty: 2,
    en: { q: "A farmer has 17 sheep. All but 9 die. How many sheep are left?", s: "", o: ["8","9","17","None"], a: 1 },
    es: { q: "Un granjero tiene 17 ovejas. Todas mueren excepto 9. ¿Cuántas quedan?", s: "", o: ["8","9","17","Ninguna"], a: 1 }
  },
  {
    domain: "Logic", difficulty: 2,
    en: { q: "If some Greens are Blues, and all Blues are Reds, which must be true?", s: "", o: ["All Greens are Reds","Some Greens are Reds","No Greens are Reds","All Reds are Greens"], a: 1 },
    es: { q: "Si algunos Verdes son Azules, y todos los Azules son Rojos, ¿qué debe ser cierto?", s: "", o: ["Todos los Verdes son Rojos","Algunos Verdes son Rojos","Ningún Verde es Rojo","Todos los Rojos son Verdes"], a: 1 }
  },
  {
    domain: "Logic", difficulty: 1,
    en: { q: "If you have a 3-litre jug and a 5-litre jug, how do you measure exactly 4 litres?", s: "", o: ["Fill 5, pour into 3, empty 3, pour rest into 3, fill 5 again, top up 3","Fill 3 twice into 5","Fill 5 and pour out 1","You can't do it"], a: 0 },
    es: { q: "Si tienes un jarro de 3 litros y uno de 5 litros, ¿cómo mides exactamente 4 litros?", s: "", o: ["Llena el de 5, vacía en el de 3, vacía el de 3, pasa el resto, llena el de 5 y completa el de 3","Llena el de 3 dos veces en el de 5","Llena el de 5 y saca 1","No se puede"], a: 0 }
  },
  {
    domain: "Logic", difficulty: 3,
    en: { q: "Three boxes are labeled 'Apples', 'Oranges', 'Apples & Oranges'. All labels are wrong. You pick one fruit from the 'Apples & Oranges' box and it's an apple. What does the 'Oranges' box contain?", s: "", o: ["Oranges","Apples","Apples & Oranges","Cannot determine"], a: 2 },
    es: { q: "Tres cajas están etiquetadas 'Manzanas', 'Naranjas', 'Manzanas y Naranjas'. Todas las etiquetas son incorrectas. Sacas una fruta de la caja 'Manzanas y Naranjas' y es una manzana. ¿Qué contiene la caja 'Naranjas'?", s: "", o: ["Naranjas","Manzanas","Manzanas y Naranjas","No se puede determinar"], a: 2 }
  },
  {
    domain: "Logic", difficulty: 2,
    en: { q: "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What is the fifth daughter's name?", s: "", o: ["Nunu","Nana","Nene","Mary"], a: 3 },
    es: { q: "El padre de María tiene 5 hijas: Nana, Nene, Nini, Nono. ¿Cómo se llama la quinta hija?", s: "", o: ["Nunu","Nana","Nene","María"], a: 3 }
  },
  {
    domain: "Logic", difficulty: 2,
    en: { q: "A rooster lays an egg on top of a barn roof. Which way does it roll?", s: "", o: ["Left","Right","It doesn't roll","Toward the sun"], a: 2 },
    es: { q: "Un gallo pone un huevo en el techo de un granero. ¿Hacia dónde rueda?", s: "", o: ["A la izquierda","A la derecha","No rueda","Hacia el sol"], a: 2 }
  },
  {
    domain: "Logic", difficulty: 3,
    en: { q: "You are in a room with 3 light switches. One controls a bulb in another room. You can only enter the other room once. How do you find which switch controls the bulb?", s: "", o: ["Turn on switch 1, wait, turn off, turn on switch 2, enter room — if bulb is on it's 2, if warm it's 1, if off and cold it's 3","Flip all switches","Try each one separately with multiple trips","You cannot determine it"], a: 0 },
    es: { q: "Estás en una habitación con 3 interruptores. Uno controla un foco en otra habitación. Solo puedes entrar una vez. ¿Cómo sabes cuál controla el foco?", s: "", o: ["Enciende el 1, espera, apágalo, enciende el 2, entra — si está encendido es el 2, si está caliente es el 1, si está apagado y frío es el 3","Activa todos","Prueba cada uno por separado con múltiples viajes","No se puede determinar"], a: 0 }
  },
  {
    domain: "Logic", difficulty: 1,
    en: { q: "What comes next in the pattern: A, C, E, G, ___", s: "", o: ["H","I","J","K"], a: 1 },
    es: { q: "¿Qué sigue en el patrón: A, C, E, G, ___", s: "", o: ["H","I","J","K"], a: 1 }
  },
  {
    domain: "Logic", difficulty: 2,
    en: { q: "If RED means STOP and GREEN means GO, what does YELLOW mean in logic?", s: "", o: ["Stop","Go","Caution / prepare to stop","Speed up"], a: 2 },
    es: { q: "Si ROJO significa PARA y VERDE significa AVANZA, ¿qué significa AMARILLO en lógica?", s: "", o: ["Para","Avanza","Precaución / prepárate para parar","Acelera"], a: 2 }
  }

];

// ─── UI STRINGS ──────────────────────────────────────────────────────────────
// Used by index.html to render all interface text in the selected language

var UI_STRINGS = {
  en: {
    header: "Cognitive Assessment Lab · v3.0",
    live: "● Live",
    tag: "// Standardized Intelligence Quotient Test",
    title1: "Measure",
    title2: "Your",
    titleAccent: "Mind.",
    subtitle: "A 15-question adaptive assessment across four cognitive domains. Results are estimates based on standardized scoring methods.",
    statQ: "Questions",
    statT: "Min avg",
    statD: "Domains",
    infoD: "Domains tested",
    infoDA: "Verbal · Numerical · Spatial · Logic",
    infoT: "Time per question",
    infoTA: "30 seconds",
    infoDif: "Difficulty",
    infoDifA: "Progressive (easy → hard)",
    infoS: "Score range",
    infoSA: "70 – 145 IQ estimate",
    begin: "Begin Assessment →",
    shareNote: "Share this page: copy the URL to send to others.",
    next: "Next →",
    retake: "Retake Test →",
    share: "Share Result ↗",
    copied: "✓ Copied to clipboard",
    correct: "✓ Correct",
    incorrect: "✗ Incorrect — Correct answer: ",
    timeout: "⏱ Time's up — Correct answer: ",
    sec: "sec",
    scoreLabel: "Estimated IQ Score",
    questionOf: "Question",
    of: "of",
    score: "Score:",
    breakdown: "Domain Breakdown",
    percentileNote: "This is a short-form estimate, not a clinical IQ test. Official assessments require evaluation by a qualified professional.",
    profileLabel: "Cognitive Profile",
    profiles: {
      "Critical Reasoner":    "You excel at language and logical deduction. You analyze arguments precisely and communicate with clarity.",
      "Analytical Mind":      "You think in systems and patterns. Numbers and spatial problems are your natural domain.",
      "Creative Thinker":     "You combine visual thinking with verbal fluency, making you adaptable and imaginative.",
      "Systematic Thinker":   "You apply structured, rule-based thinking to solve problems step by step.",
      "Balanced Generalist":  "You perform consistently across all cognitive domains — a rare and valuable trait.",
      "Verbal Specialist":    "Your strongest asset is language — understanding, nuance, and communication.",
      "Spatial Reasoner":     "You have an exceptional ability to mentally manipulate shapes, space, and structure.",
      "Logical Purist":       "Pure deduction is your strength. You cut through noise and reach conclusions efficiently."
    },
    iqClasses: {
      145: ["Exceptionally Gifted",    "Profound intellectual ability. You process information with uncommon depth, breadth, and creative synthesis.", "Top 0.1% — 1 in 1,000"],
      130: ["Very Superior Intelligence", "Advanced reasoning, rapid pattern recognition, and exceptional problem-solving across multiple cognitive domains.", "Top 2% — 1 in 50"],
      120: ["Superior Intelligence",   "Above-average cognitive performance with strong analytical and abstract reasoning skills.", "Top 9% — 1 in 11"],
      110: ["High Average",            "Above the typical range, with solid reasoning and problem-solving across verbal, numerical, and logical tasks.", "Top 25% — 1 in 4"],
      90:  ["Average Intelligence",    "Performance within the typical range for adults, with strengths across all four cognitive domains.", "Middle 50%"],
      80:  ["Low Average",             "Slightly below average in some domains. Consistent practice can improve these skills.", "Bottom 25%"],
      0:   ["Below Average",           "This result may reflect test conditions or time pressure. Consider retaking.", "Bottom 10%"]
    }
  },
  es: {
    header: "Laboratorio de Evaluación Cognitiva · v3.0",
    live: "● En vivo",
    tag: "// Test de Coeficiente Intelectual Estandarizado",
    title1: "Mide",
    title2: "Tu",
    titleAccent: "Mente.",
    subtitle: "Una evaluación de 15 preguntas en cuatro dominios cognitivos. Los resultados son estimaciones basadas en métodos de puntuación estandarizados.",
    statQ: "Preguntas",
    statT: "Min prom",
    statD: "Dominios",
    infoD: "Dominios evaluados",
    infoDA: "Verbal · Numérico · Espacial · Lógica",
    infoT: "Tiempo por pregunta",
    infoTA: "30 segundos",
    infoDif: "Dificultad",
    infoDifA: "Progresiva (fácil → difícil)",
    infoS: "Rango de puntuación",
    infoSA: "Estimado de 70 – 145 CI",
    begin: "Comenzar Evaluación →",
    shareNote: "Comparte esta página: copia la URL para enviársela a otros.",
    next: "Siguiente →",
    retake: "Repetir Test →",
    share: "Compartir Resultado ↗",
    copied: "✓ Copiado al portapapeles",
    correct: "✓ Correcto",
    incorrect: "✗ Incorrecto — Respuesta correcta: ",
    timeout: "⏱ Se acabó el tiempo — Respuesta correcta: ",
    sec: "seg",
    scoreLabel: "Puntuación CI Estimada",
    questionOf: "Pregunta",
    of: "de",
    score: "Puntaje:",
    breakdown: "Resultados por Dominio",
    percentileNote: "Esta es una estimación corta, no un test clínico de CI. Las evaluaciones oficiales requieren la valoración de un profesional.",
    profileLabel: "Perfil Cognitivo",
    profiles: {
      "Razonador Crítico":       "Destacas en lenguaje y deducción lógica. Analizas argumentos con precisión y te comunicas con claridad.",
      "Mente Analítica":         "Piensas en sistemas y patrones. Los números y problemas espaciales son tu dominio natural.",
      "Pensador Creativo":       "Combinas el pensamiento visual con la fluidez verbal, lo que te hace adaptable e imaginativo.",
      "Pensador Sistemático":    "Aplicas un pensamiento estructurado y basado en reglas para resolver problemas paso a paso.",
      "Generalista Equilibrado": "Rindes de manera consistente en todos los dominios cognitivos — un rasgo raro y valioso.",
      "Especialista Verbal":     "Tu mayor activo es el lenguaje — comprensión, matices y comunicación.",
      "Razonador Espacial":      "Tienes una habilidad excepcional para manipular mentalmente formas, espacios y estructuras.",
      "Lógico Puro":             "La deducción pura es tu fortaleza. Eliminas el ruido y llegas a conclusiones de manera eficiente."
    },
    iqClasses: {
      145: ["Excepcionalmente Dotado",       "Capacidad intelectual profunda. Procesas información con una profundidad, amplitud y síntesis creativa poco comunes.", "Top 0.1% — 1 de cada 1,000"],
      130: ["Inteligencia Muy Superior",     "Razonamiento avanzado, reconocimiento rápido de patrones y resolución de problemas excepcional.", "Top 2% — 1 de cada 50"],
      120: ["Inteligencia Superior",         "Rendimiento cognitivo por encima del promedio con sólidas habilidades de razonamiento abstracto.", "Top 9% — 1 de cada 11"],
      110: ["Promedio Alto",                 "Por encima del rango típico, con buen razonamiento en tareas verbales, numéricas y lógicas.", "Top 25% — 1 de cada 4"],
      90:  ["Inteligencia Promedio",         "Rendimiento dentro del rango típico para adultos, con fortalezas en los cuatro dominios.", "50% central"],
      80:  ["Promedio Bajo",                 "Ligeramente por debajo del promedio en algunos dominios. La práctica constante puede mejorar estas habilidades.", "Último 25%"],
      0:   ["Por Debajo del Promedio",       "Este resultado puede reflejar las condiciones del test o la presión del tiempo. Considera repetirlo.", "Último 10%"]
    }
  }
};

// ─── COGNITIVE PROFILE LOGIC ─────────────────────────────────────────────────
// Call this after test to get profile key based on domain scores
// domainScores = { Verbal: 0-1, Numerical: 0-1, Spatial: 0-1, Logic: 0-1 }

function getCognitiveProfile(domainScores, lang) {
  var V = domainScores.Verbal;
  var N = domainScores.Numerical;
  var S = domainScores.Spatial;
  var L = domainScores.Logic;
  var avg = (V + N + S + L) / 4;
  var threshold = 0.15;

  var enKey, esKey;

  if (V >= avg + threshold && L >= avg + threshold) {
    enKey = "Critical Reasoner"; esKey = "Razonador Crítico";
  } else if (N >= avg + threshold && S >= avg + threshold) {
    enKey = "Analytical Mind"; esKey = "Mente Analítica";
  } else if (S >= avg + threshold && V >= avg + threshold) {
    enKey = "Creative Thinker"; esKey = "Pensador Creativo";
  } else if (L >= avg + threshold && N >= avg + threshold) {
    enKey = "Systematic Thinker"; esKey = "Pensador Sistemático";
  } else if (V >= avg + threshold && N < avg && S < avg && L < avg) {
    enKey = "Verbal Specialist"; esKey = "Especialista Verbal";
  } else if (S >= avg + threshold && V < avg && N < avg && L < avg) {
    enKey = "Spatial Reasoner"; esKey = "Razonador Espacial";
  } else if (L >= avg + threshold && V < avg && N < avg && S < avg) {
    enKey = "Logical Purist"; esKey = "Lógico Puro";
  } else {
    enKey = "Balanced Generalist"; esKey = "Generalista Equilibrado";
  }

  var key = lang === 'es' ? esKey : enKey;
  var desc = UI_STRINGS[lang].profiles[key];
  return { key: key, desc: desc };
}

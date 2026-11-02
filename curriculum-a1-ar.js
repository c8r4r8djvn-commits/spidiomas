(function () {
  const unitsData = [
    {
      id: "ar-greetings",
      title: "Saludos y presentaciones",
      canDo: "Saludar, presentarte, deletrear tu nombre y manejar intercambios breves.",
      grammar: "pronombres, frases nominales, preguntas básicas y género",
      sounds: "dirección de escritura, alfabeto, vocales breves y sonidos árabes",
      vocabulary: "saludos, cortesía, nombres y números básicos",
      game: "reto de saludos y nombres",
      lessons: [
        {
          title: "Saludar según la situación",
          objective: "Saludar y despedirte con expresiones habituales del árabe estándar moderno (MSA).",
          vocabulary: [
            ["مَرْحَبًا", "hola", "مَرْحَبًا، كَيْفَ حَالُكَ؟", "Hola, ¿cómo estás? (a un hombre)"],
            ["صَبَاحُ الْخَيْرِ", "buenos días", "صَبَاحُ الْخَيْرِ يَا لَيْلَى.", "Buenos días, Leila."],
            ["مَسَاءُ الْخَيْرِ", "buenas tardes/noches (al saludar)", "مَسَاءُ الْخَيْرِ يَا سَامِي.", "Buenas tardes, Sami."],
            ["إِلَى اللِّقَاءِ", "hasta luego", "إِلَى اللِّقَاءِ، يَا مَرْيَمُ.", "Hasta luego, Mariam."]
          ],
          grammar: {
            title: "Saludos y orientación de la escritura",
            explanation: "En árabe estándar moderno (MSA), muchas expresiones de saludo son fórmulas completas. El árabe se escribe de derecha a izquierda; las letras se conectan dentro de la palabra, aunque algunas no se unen con la letra siguiente. Empieza leyendo la línea desde su extremo derecho.",
            pattern: "مَرْحَبًا = hola · صَبَاحُ الْخَيْرِ = buenos días\nاتجاه الكتابة: ← من اليمين إلى اليسار",
            examples: [
              { target: "مَرْحَبًا، يَا سَامِي.", translation: "Hola, Sami." },
              { target: "صَبَاحُ الْخَيْرِ، يَا لَيْلَى.", translation: "Buenos días, Leila." }
            ],
            tip: "El MSA se entiende ampliamente en contextos formales y educativos; las formas coloquiales varían de un país y una región a otra."
          },
          choice: ["¿Qué expresión significa «buenos días»?", ["مَسَاءُ الْخَيْرِ", "صَبَاحُ الْخَيْرِ", "إِلَى اللِّقَاءِ"], "صَبَاحُ الْخَيْرِ"],
          fill: { prompt: "___، يَا لَيْلَى. (buenos días)", answer: "صَبَاحُ الْخَيْرِ", hint: "Es el saludo que se usa por la mañana." },
          dialogue: { title: "Saludar a una persona", scene: "Llegas por la mañana a una clase de árabe.", speaker: "لَيْلَى", target: "صَبَاحُ الْخَيْرِ، يَا أَمِينُ.", translation: "Buenos días, Amín.", answer: "صَبَاحُ النُّورِ.", answerTranslation: "Buenos días (respuesta tradicional al saludo).", wrong: "إِلَى اللِّقَاءِ.", wrongTranslation: "Hasta luego." },
          production: { title: "Practica un saludo", prompt: "Saluda a Sami por la tarde.", answer: "مَسَاءُ الْخَيْرِ، يَا سَامِي.", wrong: "صَبَاحُ الْخَيْرِ، يَا سَامِي.", translation: "Buenas tardes, Sami." }
        },
        {
          title: "Decir quién soy",
          objective: "Decir tu nombre y preguntar cómo se llama otra persona.",
          vocabulary: [
            ["اِسْم", "nombre", "اِسْمِي أَمِينٌ.", "Me llamo Amín."],
            ["أَنَا", "yo", "أَنَا لَيْلَى.", "Yo soy Leila."],
            ["مَا", "qué", "مَا اسْمُكَ؟", "¿Cómo te llamas? (a un hombre)"],
            ["أَنْتَ", "tú (masculino)", "أَنْتَ سَامِي.", "Tú eres Sami."]
          ],
          grammar: {
            title: "Pronombres y presentación nominal",
            explanation: "Los pronombres أَنَا (yo) y أَنْتَ (tú, hombre) suelen aparecer antes del nombre o adjetivo. En presente, una frase nominal no necesita el verbo «ser»: أَنَا طَالِبٌ significa «soy estudiante». El posesivo ـي al final de اِسْمِي significa «mi».",
            pattern: "أَنَا + nombre/adjetivo · أَنَا طَالِبٌ = soy estudiante\nاِسْمِي + nombre = me llamo… · مَا اسْمُكَ؟ = ¿cómo te llamas? (hombre)",
            examples: [
              { target: "أَنَا لَيْلَى. اِسْمِي لَيْلَى.", translation: "Soy Leila. Me llamo Leila." },
              { target: "مَا اسْمُكَ؟ اِسْمِي سَامِي.", translation: "¿Cómo te llamas? Me llamo Sami." }
            ],
            tip: "La forma أَنْتِ (anti) se usa para «tú» al hablar con una mujer; aquí practicas أَنْتَ."
          },
          choice: ["¿Cómo dices «me llamo Amín»?", ["اِسْمِي أَمِينٌ.", "مَا اسْمُكَ؟", "إِلَى اللِّقَاءِ."], "اِسْمِي أَمِينٌ."],
          fill: { prompt: "___ أَمِينٌ. (Me llamo Amín.)", answer: "اِسْمِي", hint: "Usa la palabra «nombre» con el sufijo «mi»." },
          dialogue: { title: "Preguntar el nombre", scene: "Conoces a un compañero nuevo en un curso.", speaker: "سَامِي", target: "مَا اسْمُكَ؟", translation: "¿Cómo te llamas? (a un hombre)", answer: "اِسْمِي أَمِينٌ.", answerTranslation: "Me llamo Amín.", wrong: "صَبَاحُ الْخَيْرِ.", wrongTranslation: "Buenos días." },
          production: { title: "Preséntate", prompt: "Di que te llamas Leila.", answer: "اِسْمِي لَيْلَى.", wrong: "مَا اسْمُكِ؟", translation: "Me llamo Leila." }
        },
        {
          title: "Cortesía y pedir que repitan",
          objective: "Dar las gracias y pedir que repitan una frase lentamente.",
          vocabulary: [
            ["مِنْ فَضْلِكَ", "por favor (a un hombre)", "أَعِدْ، مِنْ فَضْلِكَ.", "Repite, por favor."],
            ["شُكْرًا", "gracias", "شُكْرًا عَلَى الْمُسَاعَدَةِ.", "Gracias por la ayuda."],
            ["عَفْوًا", "de nada / disculpe", "عَفْوًا، لَا بَأْسَ.", "De nada, no hay problema."],
            ["بِبُطْءٍ", "despacio", "تَكَلَّمْ بِبُطْءٍ، مِنْ فَضْلِكَ.", "Habla despacio, por favor."]
          ],
          grammar: {
            title: "Petición cortés e imperativo",
            explanation: "En MSA, una petición breve puede usar el imperativo. Para hablar con un hombre, أَعِدْ significa «repite» y تَكَلَّمْ, «habla». Añadir مِنْ فَضْلِكَ («por favor», a un hombre) suaviza la petición.",
            pattern: "Imperativo + مِنْ فَضْلِكَ\nأَعِدْ = repite · تَكَلَّمْ بِبُطْءٍ = habla despacio",
            examples: [
              { target: "أَعِدْ، مِنْ فَضْلِكَ.", translation: "Repite, por favor. (a un hombre)" },
              { target: "شُكْرًا عَلَى الْمُسَاعَدَةِ.", translation: "Gracias por la ayuda." }
            ],
            tip: "Al dirigirte a una mujer, la forma de «por favor» es مِنْ فَضْلِكِ y el imperativo puede cambiar."
          },
          choice: ["¿Qué expresión se usa para agradecer?", ["شُكْرًا", "بِبُطْءٍ", "إِلَى اللِّقَاءِ"], "شُكْرًا"],
          fill: { prompt: "تَكَلَّمْ ___. (Habla despacio.)", answer: "بِبُطْءٍ", hint: "Completa con el adverbio «despacio»." },
          dialogue: { title: "Pedir que repitan", scene: "No oíste bien una indicación en clase.", speaker: "أَمِين", target: "هَلْ فَهِمْتَ؟", translation: "¿Entendiste? (a un hombre)", answer: "أَعِدْ، مِنْ فَضْلِكَ.", answerTranslation: "Repite, por favor.", wrong: "شُكْرًا جَزِيلًا.", wrongTranslation: "Muchas gracias." },
          production: { title: "Pide ayuda con cortesía", prompt: "Pide a un hombre que hable despacio.", answer: "تَكَلَّمْ بِبُطْءٍ، مِنْ فَضْلِكَ.", wrong: "إِلَى اللِّقَاءِ، مِنْ فَضْلِكَ.", translation: "Habla despacio, por favor." }
        },
        {
          title: "Letras, sonidos y números",
          objective: "Reconocer letras árabes iniciales y contar del uno al cinco.",
          vocabulary: [
            ["وَاحِد", "uno", "عِنْدِي قَلَمٌ وَاحِدٌ.", "Tengo un bolígrafo."],
            ["اِثْنَان", "dos", "عِنْدِي كِتَابَانِ اِثْنَانِ.", "Tengo dos libros."],
            ["ثَلَاثَة", "tres", "ثَلَاثَةُ أَقْلَامٍ.", "Tres bolígrafos."],
            ["حَرْف", "letra", "هَذَا حَرْفُ الْبَاءِ.", "Esta es la letra bāʾ."]
          ],
          grammar: {
            title: "Leer letras y vocales breves",
            explanation: "El alfabeto árabe tiene 28 letras y se lee de derecha a izquierda. Las vocales breves suelen escribirse como signos encima o debajo de consonantes en materiales para principiantes, pero a menudo se omiten en textos cotidianos. La forma de varias letras cambia según su posición en la palabra.",
            pattern: "بَ = ba · بِ = bi · بُ = bu\nا، ب، ت، ث → se leen de derecha a izquierda",
            examples: [
              { target: "بَابٌ وَاحِدٌ.", translation: "Una puerta." },
              { target: "ثَلَاثَةُ أَقْلَامٍ.", translation: "Tres bolígrafos." }
            ],
            tip: "Algunas letras, como ا y د, no se unen a la letra que viene después; sigue leyendo hacia la izquierda."
          },
          choice: ["¿Qué numeral significa «tres»?", ["وَاحِد", "ثَلَاثَة", "اِثْنَان"], "ثَلَاثَة"],
          fill: { prompt: "هَذَا حَرْفُ ___. (Esta es la letra bāʾ.)", answer: "الْبَاءِ", hint: "La letra ب se llama bāʾ; completa con su nombre." },
          dialogue: { title: "Reconocer una letra", scene: "Señalas una letra en tu cuaderno.", speaker: "لَيْلَى", target: "مَا هَذَا؟", translation: "¿Qué es esto?", answer: "هَذَا حَرْفُ الْبَاءِ.", answerTranslation: "Esta es la letra bāʾ.", wrong: "عِنْدِي كِتَابٌ.", wrongTranslation: "Tengo un libro." },
          production: { title: "Di cuántas letras ves", prompt: "Di «tres letras».", answer: "ثَلَاثَةُ أَحْرُفٍ.", wrong: "وَاحِدُ حَرْفٍ.", translation: "Tres letras." }
        }
      ]
    },
    {
      id: "ar-details",
      title: "Datos personales y vida diaria",
      canDo: "Decir de dónde eres, qué idiomas hablas, datos de contacto sencillos y la hora.",
      grammar: "preguntas con مِنْ/أَيْنَ, preposiciones y números",
      sounds: "pronunciación de consonantes enfáticas y ritmo interrogativo",
      vocabulary: "países, idiomas, números, calendario y momentos del día",
      game: "entrevista de datos y calendario",
      lessons: [
        {
          title: "Nombre, origen e idiomas",
          objective: "Preguntar por el origen y decir qué idiomas hablas.",
          vocabulary: [
            ["مِنْ أَيْنَ", "de dónde", "مِنْ أَيْنَ أَنْتَ؟", "¿De dónde eres? (a un hombre)"],
            ["مِصْر", "Egipto", "أَنَا مِنْ مِصْرَ.", "Soy de Egipto."],
            ["إِسْبَانِي", "español (idioma)", "أَتَكَلَّمُ الْإِسْبَانِيَّةَ.", "Hablo español."],
            ["عَرَبِيَّة", "árabe (idioma)", "أَتَعَلَّمُ الْعَرَبِيَّةَ.", "Aprendo árabe."]
          ],
          grammar: {
            title: "Preguntar con مِنْ أَيْنَ",
            explanation: "La expresión interrogativa مِنْ أَيْنَ significa «de dónde». La respuesta comienza con أَنَا مِنْ («soy de»). Los nombres de idiomas suelen llevar artículo definido cuando son el objeto de أَتَكَلَّمُ («hablo»).",
            pattern: "مِنْ أَيْنَ أَنْتَ؟ → أَنَا مِنْ + país\nأَتَكَلَّمُ + الْعَرَبِيَّةَ / الْإِسْبَانِيَّةَ",
            examples: [
              { target: "مِنْ أَيْنَ أَنْتَ؟ أَنَا مِنْ مِصْرَ.", translation: "¿De dónde eres? Soy de Egipto." },
              { target: "أَتَكَلَّمُ الْإِسْبَانِيَّةَ وَأَتَعَلَّمُ الْعَرَبِيَّةَ.", translation: "Hablo español y aprendo árabe." }
            ],
            tip: "أَنْتَ se dirige a un hombre; أَنْتِ se dirige a una mujer. El MSA y las variedades habladas tienen vocabulario diferente."
          },
          choice: ["¿Cómo dices «Soy de Egipto»?", ["أَنَا مِنْ مِصْرَ.", "أَنَا مِنْ إِسْبَانِيَا.", "أَتَكَلَّمُ الْعَرَبِيَّةَ."], "أَنَا مِنْ مِصْرَ."],
          fill: { prompt: "أَنَا ___ مِصْرَ. (Soy de Egipto.)", answer: "مِنْ", hint: "Usa la preposición «de / desde»." },
          dialogue: { title: "Preguntar de dónde es alguien", scene: "Conversas con un compañero de intercambio.", speaker: "أَمِين", target: "مِنْ أَيْنَ أَنْتِ؟", translation: "¿De dónde eres? (a una mujer)", answer: "أَنَا مِنْ إِسْبَانِيَا.", answerTranslation: "Soy de España.", wrong: "أَتَكَلَّمُ الْعَرَبِيَّةَ.", wrongTranslation: "Hablo árabe." },
          production: { title: "Di qué idioma aprendes", prompt: "Di «Aprendo árabe».", answer: "أَتَعَلَّمُ الْعَرَبِيَّةَ.", wrong: "أَتَعَلَّمُ الْإِسْبَانِيَّةَ.", translation: "Aprendo árabe." }
        },
        {
          title: "Números, teléfono y dirección",
          objective: "Decir un número de teléfono ficticio y preguntar dónde está una dirección.",
          vocabulary: [
            ["رَقْم", "número", "مَا رَقْمُ هَاتِفِكَ؟", "¿Cuál es tu número de teléfono? (a un hombre)"],
            ["هَاتِف", "teléfono", "هَذَا هَاتِفِي.", "Este es mi teléfono."],
            ["عُنْوَان", "dirección", "هَذَا عُنْوَانِي.", "Esta es mi dirección."],
            ["صِفْر", "cero", "رَقْمِي صِفْرٌ وَاحِدٌ.", "Mi número es cero, uno."]
          ],
          grammar: {
            title: "Posesivo ـي y preguntas con مَا",
            explanation: "El sufijo ـي unido a un nombre significa «mi»: هَاتِفِي, «mi teléfono»; عُنْوَانِي, «mi dirección». Para preguntar por un dato, مَا precede al nombre: مَا رَقْمُ هَاتِفِكَ؟ («¿cuál es tu número?» a un hombre).",
            pattern: "nombre + ـي = mi nombre · هَاتِفِي = mi teléfono\nمَا + nombre…؟ = ¿cuál / qué…?",
            examples: [
              { target: "هَذَا رَقْمُ هَاتِفِي.", translation: "Este es mi número de teléfono." },
              { target: "مَا عُنْوَانُكَ؟ هَذَا عُنْوَانِي.", translation: "¿Cuál es tu dirección? Esta es mi dirección. (a un hombre)" }
            ],
            tip: "Practica con números inventados; no publiques tu teléfono ni tu dirección reales."
          },
          choice: ["¿Qué palabra significa «teléfono»?", ["هَاتِف", "عُنْوَان", "اِسْم"], "هَاتِف"],
          fill: { prompt: "هَذَا عُنْوَان___. (Esta es mi dirección.)", answer: "ي", hint: "Añade el sufijo que significa «mi»." },
          dialogue: { title: "Pedir un número", scene: "Un compañero te pregunta por un dato inventado para practicar.", speaker: "لَيْلَى", target: "مَا رَقْمُ هَاتِفِكَ؟", translation: "¿Cuál es tu número de teléfono? (a un hombre)", answer: "رَقْمِي صِفْرٌ وَاحِدٌ.", answerTranslation: "Mi número es cero, uno.", wrong: "هَذَا عُنْوَانِي.", wrongTranslation: "Esta es mi dirección." },
          production: { title: "Comparte un dato ficticio", prompt: "Di «Este es mi teléfono».", answer: "هَذَا هَاتِفِي.", wrong: "هَذَا عُنْوَانِي.", translation: "Este es mi teléfono." }
        },
        {
          title: "Formularios, citas y ayuda",
          objective: "Reconocer datos básicos de un formulario y pedir ayuda.",
          vocabulary: [
            ["اِسْم", "nombre", "اُكْتُبِ الِاسْمَ هُنَا.", "Escribe el nombre aquí."],
            ["تَارِيخ", "fecha", "مَا التَّارِيخُ الْيَوْمَ؟", "¿Cuál es la fecha de hoy?"],
            ["مِنْ فَضْلِكَ", "por favor (a un hombre)", "سَاعِدْنِي، مِنْ فَضْلِكَ.", "Ayúdame, por favor."],
            ["سَاعِدْنِي", "ayúdame", "هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", "¿Puedes ayudarme? (a un hombre)"]
          ],
          grammar: {
            title: "Pedir algo con هَلْ يُمْكِنُكَ",
            explanation: "هَلْ يُمْكِنُكَ أَنْ…؟ permite preguntar cortésmente «¿puedes…?» a un hombre. Después de أَنْ aparece el verbo en subjuntivo; para A1 puedes aprender la expresión completa هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟",
            pattern: "هَلْ يُمْكِنُكَ أَنْ + verbo…؟\nسَاعِدْنِي = ayúdame · مِنْ فَضْلِكَ = por favor (a un hombre)",
            examples: [
              { target: "هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", translation: "¿Puedes ayudarme? (a un hombre)" },
              { target: "اُكْتُبِ الِاسْمَ هُنَا، مِنْ فَضْلِكَ.", translation: "Escribe el nombre aquí, por favor. (a un hombre)" }
            ],
            tip: "Al dirigirte a una mujer, se usa هَلْ يُمْكِنُكِ y مِنْ فَضْلِكِ."
          },
          choice: ["¿Qué expresión pide ayuda cortésmente?", ["هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", "مَا التَّارِيخُ؟", "إِلَى اللِّقَاءِ"], "هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟"],
          fill: { prompt: "هَلْ ___ أَنْ تُسَاعِدَنِي؟ (¿Puedes ayudarme?)", answer: "يُمْكِنُكَ", hint: "Escribe la forma dirigida a un hombre de «es posible para ti»." },
          dialogue: { title: "Completar un formulario", scene: "No entiendes un campo del formulario de clase.", speaker: "سَامِي", target: "هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", translation: "¿Puedes ayudarme? (a un hombre)", answer: "نَعَمْ، مِنْ فَضْلِكَ اُكْتُبِ الِاسْمَ هُنَا.", answerTranslation: "Sí; por favor, escribe aquí el nombre.", wrong: "مَا رَقْمُ هَاتِفِكَ؟", wrongTranslation: "¿Cuál es tu número de teléfono?" },
          production: { title: "Pide ayuda", prompt: "Pregunta a un hombre si puede ayudarte.", answer: "هَلْ يُمْكِنُكَ أَنْ تُسَاعِدَنِي؟", wrong: "مَا اسْمُكَ؟", translation: "¿Puedes ayudarme?" }
        },
        {
          title: "Cómo estás y qué hora es",
          objective: "Preguntar cómo está alguien y decir una hora en punto.",
          vocabulary: [
            ["كَيْفَ", "cómo", "كَيْفَ حَالُكَ؟", "¿Cómo estás? (a un hombre)"],
            ["حَال", "estado", "أَنَا بِخَيْرٍ.", "Estoy bien."],
            ["السَّاعَة", "la hora / el reloj", "كَمِ السَّاعَةُ؟", "¿Qué hora es?"],
            ["الْآن", "ahora", "السَّاعَةُ الثَّامِنَةُ الْآنَ.", "Ahora son las ocho."]
          ],
          grammar: {
            title: "Preguntar por el estado y la hora",
            explanation: "كَيْفَ حَالُكَ؟ pregunta «¿cómo estás?» a un hombre; con una mujer, كَيْفَ حَالُكِ؟. Para preguntar la hora se dice كَمِ السَّاعَةُ؟ y se responde con السَّاعَةُ seguida del número ordinal femenino.",
            pattern: "كَيْفَ حَالُكَ؟ → أَنَا بِخَيْرٍ، شُكْرًا.\nكَمِ السَّاعَةُ؟ → السَّاعَةُ الثَّامِنَةُ.",
            examples: [
              { target: "كَيْفَ حَالُكِ؟ أَنَا بِخَيْرٍ، شُكْرًا.", translation: "¿Cómo estás? Estoy bien, gracias. (a una mujer)" },
              { target: "كَمِ السَّاعَةُ؟ السَّاعَةُ الثَّالِثَةُ.", translation: "¿Qué hora es? Son las tres." }
            ],
            tip: "La respuesta informal puede omitir el pronombre: بِخَيْرٍ significa «bien» o «estoy bien» según el contexto."
          },
          choice: ["¿Qué preguntas para saber la hora?", ["كَيْفَ حَالُكَ؟", "كَمِ السَّاعَةُ؟", "مَا اسْمُكَ؟"], "كَمِ السَّاعَةُ؟"],
          fill: { prompt: "السَّاعَةُ ___ الْآنَ. (Ahora son las ocho.)", answer: "الثَّامِنَةُ", hint: "Escribe el ordinal femenino «octava»." },
          dialogue: { title: "Preguntar la hora", scene: "Entras a una clase y preguntas por la hora.", speaker: "لَيْلَى", target: "كَمِ السَّاعَةُ؟", translation: "¿Qué hora es?", answer: "السَّاعَةُ الثَّامِنَةُ.", answerTranslation: "Son las ocho.", wrong: "أَنَا بِخَيْرٍ.", wrongTranslation: "Estoy bien." },
          production: { title: "Di cómo estás", prompt: "Responde «Estoy bien, gracias».", answer: "أَنَا بِخَيْرٍ، شُكْرًا.", wrong: "كَمِ السَّاعَةُ؟", translation: "Estoy bien, gracias." }
        },
        {
          title: "Meses, días y fechas",
          objective: "Nombrar días y meses y dar una fecha sencilla.",
          vocabulary: [
            ["الْيَوْم", "hoy / el día", "الْيَوْمُ يَوْمُ الِاثْنَيْنِ.", "Hoy es lunes."],
            ["شَهْر", "mes", "أَيُّ شَهْرٍ الْآنَ؟", "¿Qué mes es ahora?"],
            ["يَنَايِر", "enero", "عِيدُ مِيلَادِي فِي يَنَايِرَ.", "Mi cumpleaños es en enero."],
            ["الْجُمُعَة", "viernes", "أَعْمَلُ يَوْمَ الْجُمُعَةِ.", "Trabajo el viernes."]
          ],
          grammar: {
            title: "Fechas con فِي y يوم",
            explanation: "فِي significa «en» y se usa con un mes: فِي يَنَايِرَ. Para un día de la semana, يَوْمُ الْجُمُعَةِ significa «el viernes». El orden habitual al expresar el día puede variar según la frase.",
            pattern: "فِي + mes = en + mes\nيَوْمُ + día = el + día · عِيدُ مِيلَادِي فِي… = mi cumpleaños es en…",
            examples: [
              { target: "عِيدُ مِيلَادِي فِي يَنَايِرَ.", translation: "Mi cumpleaños es en enero." },
              { target: "الْيَوْمُ يَوْمُ الْجُمُعَةِ.", translation: "Hoy es viernes." }
            ],
            tip: "Los nombres de los meses cambian entre países; يَنَايِر es una forma común en varias regiones y se entiende en MSA."
          },
          choice: ["¿Qué palabra significa «enero»?", ["الْجُمُعَة", "يَنَايِر", "الْيَوْم"], "يَنَايِر"],
          fill: { prompt: "عِيدُ مِيلَادِي ___ يَنَايِرَ. (Mi cumpleaños es en enero.)", answer: "فِي", hint: "Usa la preposición «en»." },
          dialogue: { title: "Hablar del calendario", scene: "Un compañero pregunta por tu cumpleaños.", speaker: "أَمِين", target: "فِي أَيِّ شَهْرٍ عِيدُ مِيلَادِكَ؟", translation: "¿En qué mes es tu cumpleaños? (a un hombre)", answer: "عِيدُ مِيلَادِي فِي يَنَايِرَ.", answerTranslation: "Mi cumpleaños es en enero.", wrong: "الْيَوْمُ يَوْمُ الْجُمُعَةِ.", wrongTranslation: "Hoy es viernes." },
          production: { title: "Di el día de hoy", prompt: "Di «Hoy es viernes».", answer: "الْيَوْمُ يَوْمُ الْجُمُعَةِ.", wrong: "عِيدُ مِيلَادِي فِي يَنَايِرَ.", translation: "Hoy es viernes." }
        }
      ]
    },
    {
      id: "ar-family",
      title: "La familia y los lugares",
      canDo: "Presentar a tu familia, describir relaciones y decir dónde vives y de dónde eres.",
      grammar: "género y concordancia, posesivos, demostrativos y negación sencilla",
      sounds: "artículos definidos y consonantes solares y lunares",
      vocabulary: "familia, nacionalidades, ciudades y hogar",
      game: "árbol familiar y mapa",
      lessons: [
        {
          title: "Personas de mi familia",
          objective: "Nombrar familiares y decir quiénes forman parte de tu familia.",
          vocabulary: [
            ["أَب", "padre", "هَذَا أَبِي.", "Este es mi padre."],
            ["أُمّ", "madre", "هَذِهِ أُمِّي.", "Esta es mi madre."],
            ["أَخ", "hermano", "هَذَا أَخِي.", "Este es mi hermano."],
            ["أُخْت", "hermana", "هَذِهِ أُخْتِي.", "Esta es mi hermana."]
          ],
          grammar: {
            title: "Género y concordancia básica",
            explanation: "Los nombres árabes tienen género gramatical. هَذَا («este») acompaña a un nombre masculino, como أَب; هَذِهِ («esta») acompaña a un nombre femenino, como أُمّ. El sufijo ـي expresa «mi».",
            pattern: "هَذَا + masculino · هَذِهِ + femenino\nأَبِي = mi padre · أُمِّي = mi madre",
            examples: [
              { target: "هَذَا أَخِي، وَهَذِهِ أُخْتِي.", translation: "Este es mi hermano y esta es mi hermana." },
              { target: "هَذِهِ أُمِّي.", translation: "Esta es mi madre." }
            ],
            tip: "El género es gramatical; no siempre coincide con la terminación de la palabra. Aprende cada nombre junto con هَذَا o هَذِهِ."
          },
          choice: ["¿Qué dices para «Esta es mi madre»?", ["هَذَا أَبِي.", "هَذِهِ أُمِّي.", "هَذَا أَخِي."], "هَذِهِ أُمِّي."],
          fill: { prompt: "هَذَا ___ . (Este es mi padre.)", answer: "أَبِي", hint: "Usa «padre» con el sufijo «mi»." },
          dialogue: { title: "Presentar a tu familia", scene: "Muestras una foto familiar a un compañero.", speaker: "لَيْلَى", target: "مَنْ هَذَا؟", translation: "¿Quién es este?", answer: "هَذَا أَبِي.", answerTranslation: "Este es mi padre.", wrong: "هَذِهِ أُمِّي.", wrongTranslation: "Esta es mi madre." },
          production: { title: "Presenta a una hermana", prompt: "Di «Esta es mi hermana».", answer: "هَذِهِ أُخْتِي.", wrong: "هَذَا أَخِي.", translation: "Esta es mi hermana." }
        },
        {
          title: "De dónde soy y dónde vivo",
          objective: "Decir tu país, ciudad y nacionalidad con frases sencillas.",
          vocabulary: [
            ["مَدِينَة", "ciudad", "أَسْكُنُ فِي مَدِينَةِ مَدْرِيدَ.", "Vivo en la ciudad de Madrid."],
            ["أَسْكُنُ", "vivo / habito", "أَسْكُنُ فِي مَدْرِيدَ.", "Vivo en Madrid."],
            ["إِسْبَانِيَا", "España", "أَنَا مِنْ إِسْبَانِيَا.", "Soy de España."],
            ["إِسْبَانِيّ", "español (masculino)", "أَنَا إِسْبَانِيٌّ.", "Soy español."]
          ],
          grammar: {
            title: "Concordar el gentilicio",
            explanation: "Los gentilicios concuerdan con el género de la persona. إِسْبَانِيٌّ es masculino; إِسْبَانِيَّةٌ es femenino. Para decir dónde vives, usa أَسْكُنُ فِي («vivo en»).",
            pattern: "masculino: أَنَا إِسْبَانِيٌّ · femenino: أَنَا إِسْبَانِيَّةٌ\nأَسْكُنُ فِي + ciudad",
            examples: [
              { target: "أَنَا إِسْبَانِيَّةٌ وَأَسْكُنُ فِي مَدْرِيدَ.", translation: "Soy española y vivo en Madrid." },
              { target: "أَنَا مِنْ إِسْبَانِيَا.", translation: "Soy de España." }
            ],
            tip: "La terminación femenina ـَة aparece en muchos gentilicios femeninos; aprende la forma completa de cada país."
          },
          choice: ["¿Qué frase significa «Vivo en Madrid»?", ["أَسْكُنُ فِي مَدْرِيدَ.", "أَنَا مِنْ مَدْرِيدَ.", "أَتَكَلَّمُ الْإِسْبَانِيَّةَ."], "أَسْكُنُ فِي مَدْرِيدَ."],
          fill: { prompt: "أَسْكُنُ ___ مَدْرِيدَ. (Vivo en Madrid.)", answer: "فِي", hint: "La preposición para «en»." },
          dialogue: { title: "Decir dónde vives", scene: "Una compañera nueva pregunta por tu ciudad.", speaker: "مَرْيَم", target: "أَيْنَ تَسْكُنُ؟", translation: "¿Dónde vives? (a un hombre)", answer: "أَسْكُنُ فِي مَدْرِيدَ.", answerTranslation: "Vivo en Madrid.", wrong: "أَنَا مِنْ مِصْرَ.", wrongTranslation: "Soy de Egipto." },
          production: { title: "Di tu nacionalidad", prompt: "Di «Soy español» (forma masculina).", answer: "أَنَا إِسْبَانِيٌّ.", wrong: "أَنَا إِسْبَانِيَّةٌ.", translation: "Soy español." }
        },
        {
          title: "Árbol familiar y descripciones",
          objective: "Presentar a un familiar y describirlo con adjetivos sencillos.",
          vocabulary: [
            ["جَدّ", "abuelo", "هَذَا جَدِّي.", "Este es mi abuelo."],
            ["جَدَّة", "abuela", "هَذِهِ جَدَّتِي.", "Esta es mi abuela."],
            ["كَبِير", "grande / mayor (masculino)", "أَخِي كَبِيرٌ.", "Mi hermano es mayor."],
            ["صَغِيرَة", "pequeña / menor (femenino)", "أُخْتِي صَغِيرَةٌ.", "Mi hermana es pequeña."]
          ],
          grammar: {
            title: "Adjetivos y concordancia",
            explanation: "En una frase nominal, el adjetivo suele ir después del nombre y concuerda con él en género y número. كَبِيرٌ es masculino; كَبِيرَةٌ, femenino. Para decir «mi hermana», se añade ـي a أُخْت.",
            pattern: "nombre + adjetivo · أَخِي كَبِيرٌ\nأُخْتِي كَبِيرَةٌ · أُخْتِي صَغِيرَةٌ",
            examples: [
              { target: "أَخِي كَبِيرٌ وَأُخْتِي صَغِيرَةٌ.", translation: "Mi hermano es mayor y mi hermana es pequeña." },
              { target: "هَذِهِ جَدَّتِي.", translation: "Esta es mi abuela." }
            ],
            tip: "Los adjetivos pueden cambiar de forma femenina, a menudo con ـَة; fíjate en el nombre que describen."
          },
          choice: ["¿Qué adjetivo femenino significa «pequeña»?", ["كَبِير", "صَغِيرَة", "جَدّ"], "صَغِيرَة"],
          fill: { prompt: "أُخْتِي ___ . (Mi hermana es pequeña.)", answer: "صَغِيرَةٌ", hint: "Completa con el adjetivo femenino con terminación de caso." },
          dialogue: { title: "Describir a la familia", scene: "Hablas de dos familiares en una conversación.", speaker: "سَامِي", target: "كَيْفَ أَخُوكَ؟", translation: "¿Cómo es tu hermano?", answer: "أَخِي كَبِيرٌ.", answerTranslation: "Mi hermano es mayor.", wrong: "هَذِهِ جَدَّتِي.", wrongTranslation: "Esta es mi abuela." },
          production: { title: "Describe a una hermana", prompt: "Di «Mi hermana es pequeña».", answer: "أُخْتِي صَغِيرَةٌ.", wrong: "أَخِي كَبِيرٌ.", translation: "Mi hermana es pequeña." }
        }
      ]
    },
    {
      id: "ar-work",
      title: "¿A qué te dedicas?",
      canDo: "Nombrar profesiones, hablar de horarios, tareas, estudios y preferencias.",
      grammar: "frases nominales, presente habitual, negación y gustar",
      sounds: "vocales, ritmo de frase y consonantes enfáticas",
      vocabulary: "profesiones, estudios, tareas y tiempo",
      game: "mímica de profesiones y horarios",
      lessons: [
        {
          title: "Vocabulario de oficios y trabajos",
          objective: "Decir a qué te dedicas y nombrar profesiones frecuentes.",
          vocabulary: [
            ["مُعَلِّم", "profesor (masculino)", "هُوَ مُعَلِّمٌ.", "Él es profesor."],
            ["مُعَلِّمَة", "profesora", "هِيَ مُعَلِّمَةٌ.", "Ella es profesora."],
            ["طَبِيب", "médico", "أَخِي طَبِيبٌ.", "Mi hermano es médico."],
            ["طَالِب", "estudiante (masculino)", "أَنَا طَالِبٌ.", "Soy estudiante."]
          ],
          grammar: {
            title: "Profesión en una frase nominal",
            explanation: "Para decir una profesión en presente, normalmente se usa una frase nominal sin verbo equivalente a «ser». El sustantivo de profesión suele concordar con la persona: مُعَلِّمٌ para un hombre y مُعَلِّمَةٌ para una mujer.",
            pattern: "هُوَ + profesión masculina · هِيَ + profesión femenina\nأَنَا طَالِبٌ (hombre) · أَنَا طَالِبَةٌ (mujer)",
            examples: [
              { target: "هِيَ مُعَلِّمَةٌ وَهُوَ طَبِيبٌ.", translation: "Ella es profesora y él es médico." },
              { target: "أَنَا طَالِبَةٌ.", translation: "Soy estudiante. (mujer)" }
            ],
            tip: "No traduzcas literalmente «ser»; en presente, la oración nominal expresa la profesión directamente."
          },
          choice: ["¿Qué forma dice «Ella es profesora»?", ["هُوَ مُعَلِّمٌ.", "هِيَ مُعَلِّمَةٌ.", "أَنَا طَالِبٌ."], "هِيَ مُعَلِّمَةٌ."],
          fill: { prompt: "هُوَ ___ . (Él es médico.)", answer: "طَبِيبٌ", hint: "Escribe «médico» en forma masculina." },
          dialogue: { title: "Preguntar por una profesión", scene: "Conoces a alguien durante una pausa de clase.", speaker: "مَرْيَم", target: "مَاذَا تَعْمَلُ؟", translation: "¿A qué te dedicas? (a un hombre)", answer: "أَنَا طَالِبٌ.", answerTranslation: "Soy estudiante. (hombre)", wrong: "هِيَ مُعَلِّمَةٌ.", wrongTranslation: "Ella es profesora." },
          production: { title: "Di a qué te dedicas", prompt: "Di «Soy estudiante» en masculino.", answer: "أَنَا طَالِبٌ.", wrong: "أَنَا مُعَلِّمَةٌ.", translation: "Soy estudiante." }
        },
        {
          title: "Expresar horario y disponibilidad",
          objective: "Comunicar un horario sencillo y preguntar cuándo trabaja alguien.",
          vocabulary: [
            ["أَعْمَلُ", "trabajo", "أَعْمَلُ صَبَاحًا.", "Trabajo por la mañana."],
            ["صَبَاحًا", "por la mañana", "أَدْرُسُ صَبَاحًا.", "Estudio por la mañana."],
            ["مَسَاءً", "por la tarde/noche", "أَعْمَلُ مَسَاءً.", "Trabajo por la tarde."],
            ["مَتَى", "cuándo", "مَتَى تَعْمَلُ؟", "¿Cuándo trabajas? (a un hombre)"]
          ],
          grammar: {
            title: "Presente habitual y preguntas con مَتَى",
            explanation: "أَعْمَلُ («trabajo») y أَدْرُسُ («estudio») expresan acciones habituales. مَتَى («cuándo») va al inicio de la pregunta. Los adverbios صَبَاحًا y مَسَاءً indican el momento del día.",
            pattern: "مَتَى + verbo…؟ · أَعْمَلُ صَبَاحًا.\nأَدْرُسُ مَسَاءً. = estudio por la tarde.",
            examples: [
              { target: "مَتَى تَعْمَلُ؟ أَعْمَلُ صَبَاحًا.", translation: "¿Cuándo trabajas? Trabajo por la mañana." },
              { target: "أَدْرُسُ الْعَرَبِيَّةَ مَسَاءً.", translation: "Estudio árabe por la tarde." }
            ],
            tip: "El verbo cambia según la persona: أَعْمَلُ significa «yo trabajo» y تَعْمَلُ puede significar «tú trabajas» o «ella trabaja»."
          },
          choice: ["¿Qué palabra significa «por la mañana»?", ["صَبَاحًا", "مَسَاءً", "مَتَى"], "صَبَاحًا"],
          fill: { prompt: "أَعْمَلُ ___. (Trabajo por la tarde.)", answer: "مَسَاءً", hint: "Completa con el momento del día opuesto a la mañana." },
          dialogue: { title: "Preguntar por el horario", scene: "Un compañero organiza una sesión de estudio.", speaker: "أَمِين", target: "مَتَى تَدْرُسُ؟", translation: "¿Cuándo estudias? (a un hombre)", answer: "أَدْرُسُ مَسَاءً.", answerTranslation: "Estudio por la tarde.", wrong: "أَنَا طَبِيبٌ.", wrongTranslation: "Soy médico." },
          production: { title: "Di cuándo trabajas", prompt: "Di «Trabajo por la mañana».", answer: "أَعْمَلُ صَبَاحًا.", wrong: "أَعْمَلُ مَسَاءً.", translation: "Trabajo por la mañana." }
        },
        {
          title: "Tareas e instrucciones sencillas",
          objective: "Entender instrucciones frecuentes y pedir que repitan.",
          vocabulary: [
            ["اِفْتَحْ", "abre (a un hombre)", "اِفْتَحِ الْكِتَابَ.", "Abre el libro."],
            ["اُكْتُبْ", "escribe (a un hombre)", "اُكْتُبِ الِاسْمَ.", "Escribe el nombre."],
            ["اِقْرَأْ", "lee (a un hombre)", "اِقْرَأِ الْجُمْلَةَ.", "Lee la frase."],
            ["اِعْمَلْ", "trabaja / haz (a un hombre)", "اِعْمَلْ مَعِي.", "Trabaja conmigo."]
          ],
          grammar: {
            title: "Imperativos para instrucciones",
            explanation: "El imperativo se usa para dar una instrucción directa. Las formas اِفْتَحْ, اُكْتُبْ e اِقْرَأْ se dirigen a un hombre; se puede añadir مِنْ فَضْلِكَ para ser cortés. La forma dirigida a una mujer es distinta.",
            pattern: "اِفْتَحْ + objeto · اُكْتُبْ + objeto · اِقْرَأْ + objeto\nمِنْ فَضْلِكَ = por favor (a un hombre)",
            examples: [
              { target: "اِفْتَحِ الْكِتَابَ، مِنْ فَضْلِكَ.", translation: "Abre el libro, por favor. (a un hombre)" },
              { target: "اُكْتُبِ الِاسْمَ وَاقْرَأِ الْجُمْلَةَ.", translation: "Escribe el nombre y lee la frase." }
            ],
            tip: "Las vocales breves que facilitan la pronunciación pueden cambiar al enlazar palabras; los ejemplos están vocalizados para principiantes."
          },
          choice: ["¿Qué forma significa «lee» (a un hombre)?", ["اِقْرَأْ", "اُكْتُبْ", "اِفْتَحْ"], "اِقْرَأْ"],
          fill: { prompt: "___ الْكِتَابَ. (Abre el libro.)", answer: "اِفْتَحْ", hint: "Usa el imperativo «abre» dirigido a un hombre." },
          dialogue: { title: "Seguir una instrucción", scene: "El profesor te pide que abras el libro.", speaker: "الْمُعَلِّمُ", target: "اِفْتَحِ الْكِتَابَ، مِنْ فَضْلِكَ.", translation: "Abre el libro, por favor. (a un hombre)", answer: "حَسَنًا، أَفْتَحُ الْكِتَابَ.", answerTranslation: "De acuerdo, abro el libro.", wrong: "أَنَا مِنْ إِسْبَانِيَا.", wrongTranslation: "Soy de España." },
          production: { title: "Da una instrucción", prompt: "Pide a un hombre que escriba el nombre.", answer: "اُكْتُبِ الِاسْمَ، مِنْ فَضْلِكَ.", wrong: "اِقْرَأِ الْكِتَابَ، مِنْ فَضْلِكَ.", translation: "Escribe el nombre, por favor." }
        },
        {
          title: "Estudios, profesiones y gustos",
          objective: "Hablar de estudios y expresar algo que te gusta.",
          vocabulary: [
            ["أَدْرُسُ", "estudio", "أَدْرُسُ الْعَرَبِيَّةَ.", "Estudio árabe."],
            ["أُحِبُّ", "me gusta / quiero", "أُحِبُّ الْقِرَاءَةَ.", "Me gusta leer."],
            ["الْقِرَاءَة", "lectura", "الْقِرَاءَةُ مُفِيدَةٌ.", "La lectura es útil."],
            ["عَمَل", "trabajo", "أُحِبُّ عَمَلِي.", "Me gusta mi trabajo."]
          ],
          grammar: {
            title: "Expresar gustos con أُحِبُّ",
            explanation: "أُحِبُّ significa «me gusta» o «quiero» según el contexto. Puede ir seguido de un nombre como عَمَلِي («mi trabajo») o de un nombre de actividad como الْقِرَاءَة («la lectura»).",
            pattern: "أُحِبُّ + nombre/actividad\nأُحِبُّ الْقِرَاءَةَ. · أُحِبُّ عَمَلِي.",
            examples: [
              { target: "أَدْرُسُ الْعَرَبِيَّةَ وَأُحِبُّ الْقِرَاءَةَ.", translation: "Estudio árabe y me gusta leer." },
              { target: "أُحِبُّ عَمَلِي.", translation: "Me gusta mi trabajo." }
            ],
            tip: "Para hablar de otra persona, cambia el verbo: هُوَ يُحِبُّ («a él le gusta») y هِيَ تُحِبُّ («a ella le gusta»)."
          },
          choice: ["¿Qué frase significa «Me gusta mi trabajo»?", ["أُحِبُّ عَمَلِي.", "أَدْرُسُ عَمَلِي.", "أَفْتَحُ الْبَابَ."], "أُحِبُّ عَمَلِي."],
          fill: { prompt: "أُحِبُّ ___ . (Me gusta leer.)", answer: "الْقِرَاءَةَ", hint: "Completa con «la lectura»." },
          dialogue: { title: "Hablar de lo que te gusta", scene: "Una compañera pregunta por tus estudios.", speaker: "لَيْلَى", target: "مَاذَا تُحِبُّ؟", translation: "¿Qué te gusta? (a un hombre)", answer: "أُحِبُّ الْقِرَاءَةَ.", answerTranslation: "Me gusta leer.", wrong: "أَعْمَلُ صَبَاحًا.", wrongTranslation: "Trabajo por la mañana." },
          production: { title: "Di qué estudias", prompt: "Di «Estudio árabe».", answer: "أَدْرُسُ الْعَرَبِيَّةَ.", wrong: "أُحِبُّ الْعَرَبِيَّةَ.", translation: "Estudio árabe." }
        }
      ]
    },
    {
      id: "ar-home",
      title: "La casa y dónde están las cosas",
      canDo: "Nombrar espacios y muebles, ubicar objetos y expresar necesidades básicas.",
      grammar: "demostrativos, preposiciones de lugar, género y existencia con هُنَاكَ",
      sounds: "artículo definido y letras solares y lunares",
      vocabulary: "habitaciones, muebles y objetos cotidianos",
      game: "ubica los objetos de la casa",
      lessons: [
        {
          title: "Habitaciones y muebles",
          objective: "Nombrar habitaciones y objetos comunes de una vivienda.",
          vocabulary: [
            ["بَيْت", "casa", "هَذَا بَيْتٌ.", "Esta es una casa."],
            ["غُرْفَة", "habitación", "هَذِهِ غُرْفَةٌ.", "Esta es una habitación."],
            ["بَاب", "puerta", "هَذَا بَابُ الْبَيْتِ.", "Esta es la puerta de la casa."],
            ["كُرْسِيّ", "silla", "هَذَا كُرْسِيٌّ.", "Esta es una silla."]
          ],
          grammar: {
            title: "Demostrativos y género",
            explanation: "هَذَا significa «este/esto» con un nombre masculino y هَذِهِ con uno femenino. بَيْتٌ y بَابٌ son masculinos; غُرْفَةٌ es femenino. La terminación ـة es frecuente en nombres femeninos, aunque hay excepciones.",
            pattern: "هَذَا + nombre masculino · هَذِهِ + nombre femenino\nهَذَا بَيْتٌ · هَذِهِ غُرْفَةٌ",
            examples: [
              { target: "هَذَا بَيْتٌ وَهَذِهِ غُرْفَةٌ.", translation: "Esta es una casa y esta es una habitación." },
              { target: "هَذَا كُرْسِيٌّ.", translation: "Esta es una silla." }
            ],
            tip: "Con demostrativos, identifica primero el género gramatical del sustantivo."
          },
          choice: ["¿Qué demostrativo acompaña a غُرْفَةٌ?", ["هَذَا", "هَذِهِ", "هُنَاكَ"], "هَذِهِ"],
          fill: { prompt: "هَذِهِ ___ . (Esta es una habitación.)", answer: "غُرْفَةٌ", hint: "Completa con el nombre femenino «habitación»." },
          dialogue: { title: "Nombrar un objeto", scene: "Señalas un objeto de la habitación.", speaker: "أَمِين", target: "مَا هَذَا؟", translation: "¿Qué es esto?", answer: "هَذَا كُرْسِيٌّ.", answerTranslation: "Es una silla.", wrong: "هَذِهِ غُرْفَةٌ.", wrongTranslation: "Esta es una habitación." },
          production: { title: "Nombra una casa", prompt: "Di «Esta es una casa».", answer: "هَذَا بَيْتٌ.", wrong: "هَذِهِ غُرْفَةٌ.", translation: "Esta es una casa." }
        },
        {
          title: "Buscar una vivienda",
          objective: "Preguntar por las habitaciones y describir dónde está un objeto.",
          vocabulary: [
            ["مَطْبَخ", "cocina", "الْمَطْبَخُ فِي الْبَيْتِ.", "La cocina está en la casa."],
            ["غُرْفَةُ النَّوْم", "dormitorio", "غُرْفَةُ النَّوْمِ كَبِيرَةٌ.", "El dormitorio es grande."],
            ["فِي", "en / dentro de", "الْكِتَابُ فِي الْغُرْفَةِ.", "El libro está en la habitación."],
            ["أَيْنَ", "dónde", "أَيْنَ الْمَطْبَخُ؟", "¿Dónde está la cocina?"]
          ],
          grammar: {
            title: "Ubicación con فِي",
            explanation: "فِي significa «en/dentro de» y va antes del lugar. Para preguntar «¿dónde está…?» se usa أَيْنَ seguido del nombre. El artículo ال se añade al sustantivo definido: مَطْبَخٌ («una cocina») → الْمَطْبَخُ («la cocina»).",
            pattern: "أَيْنَ + nombre definido؟\nالْكِتَابُ فِي الْغُرْفَةِ. = El libro está en la habitación.",
            examples: [
              { target: "أَيْنَ الْمَطْبَخُ؟ الْمَطْبَخُ فِي الْبَيْتِ.", translation: "¿Dónde está la cocina? La cocina está en la casa." },
              { target: "الْكِتَابُ فِي غُرْفَةِ النَّوْمِ.", translation: "El libro está en el dormitorio." }
            ],
            tip: "Después de una preposición como فِي, la terminación del nombre puede cambiar; en el habla cotidiana las vocales finales suelen omitirse."
          },
          choice: ["¿Qué preposición significa «en»?", ["مِنْ", "فِي", "إِلَى"], "فِي"],
          fill: { prompt: "الْكِتَابُ ___ الْغُرْفَةِ. (El libro está en la habitación.)", answer: "فِي", hint: "Usa la preposición de lugar «en»." },
          dialogue: { title: "Preguntar por una habitación", scene: "Buscas la cocina en una casa nueva.", speaker: "مَرْيَم", target: "أَيْنَ الْمَطْبَخُ؟", translation: "¿Dónde está la cocina?", answer: "الْمَطْبَخُ فِي الْبَيْتِ.", answerTranslation: "La cocina está en la casa.", wrong: "غُرْفَةُ النَّوْمِ كَبِيرَةٌ.", wrongTranslation: "El dormitorio es grande." },
          production: { title: "Ubica un libro", prompt: "Di «El libro está en la habitación».", answer: "الْكِتَابُ فِي الْغُرْفَةِ.", wrong: "الْكِتَابُ مِنَ الْغُرْفَةِ.", translation: "El libro está en la habitación." }
        },
        {
          title: "Pedir permiso y explicar una necesidad",
          objective: "Expresar una necesidad y pedir permiso para usar un objeto.",
          vocabulary: [
            ["أُرِيدُ", "quiero", "أُرِيدُ مَاءً.", "Quiero agua."],
            ["مَاء", "agua", "أُرِيدُ مَاءً، مِنْ فَضْلِكَ.", "Quiero agua, por favor."],
            ["هَلْ يُمْكِنُ", "¿se puede? / ¿es posible?", "هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟", "¿Puedo entrar?"],
            ["اِسْتَعْمِلْ", "usa (a un hombre)", "اِسْتَعْمِلْ هَذَا الْكُرْسِيَّ.", "Usa esta silla."]
          ],
          grammar: {
            title: "Expresar deseo y posibilidad",
            explanation: "أُرِيدُ («quiero») va seguido del objeto deseado. Para pedir permiso de forma cortés, هَلْ يُمْكِنُ أَنْ…؟ significa «¿es posible…?». El imperativo اِسْتَعْمِلْ se dirige a un hombre.",
            pattern: "أُرِيدُ + objeto · هَلْ يُمْكِنُ أَنْ + verbo…؟\nأُرِيدُ مَاءً. · هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟",
            examples: [
              { target: "أُرِيدُ مَاءً، مِنْ فَضْلِكَ.", translation: "Quiero agua, por favor." },
              { target: "هَلْ يُمْكِنُ أَنْ أَسْتَعْمِلَ هَذَا الْكُرْسِيَّ؟", translation: "¿Puedo usar esta silla?" }
            ],
            tip: "En una petición dirigida a otra persona se puede añadir ضَمِير o un verbo conjugado; la forma de la pregunta cambia según quién actúa."
          },
          choice: ["¿Qué frase significa «Quiero agua»?", ["أُرِيدُ مَاءً.", "أَسْكُنُ فِي الْبَيْتِ.", "اِفْتَحِ الْبَابَ."], "أُرِيدُ مَاءً."],
          fill: { prompt: "___ مَاءً، مِنْ فَضْلِكَ. (Quiero agua, por favor.)", answer: "أُرِيدُ", hint: "Escribe «quiero»." },
          dialogue: { title: "Pedir permiso para entrar", scene: "Estás frente a una sala de clase.", speaker: "سَامِي", target: "هَلْ يُمْكِنُ أَنْ أَدْخُلَ؟", translation: "¿Puedo entrar?", answer: "نَعَمْ، تَفَضَّلْ.", answerTranslation: "Sí, adelante. (a un hombre)", wrong: "أُرِيدُ مَاءً.", wrongTranslation: "Quiero agua." },
          production: { title: "Expresa una necesidad", prompt: "Di «Quiero agua, por favor».", answer: "أُرِيدُ مَاءً، مِنْ فَضْلِكَ.", wrong: "أُرِيدُ كُرْسِيًّا.", translation: "Quiero agua, por favor." }
        }
      ]
    },
    {
      id: "ar-travel",
      title: "Desplazamientos y transporte",
      canDo: "Nombrar medios de transporte, preguntar por un billete y comprender horarios.",
      grammar: "preposiciones de dirección, preguntas de cantidad y presente",
      sounds: "consonantes finales y ritmo de instrucciones",
      vocabulary: "estaciones, transporte, billetes y direcciones",
      game: "planifica un viaje corto",
      lessons: [
        {
          title: "Autobús, tren y estación",
          objective: "Nombrar transportes y pedir un billete sencillo.",
          vocabulary: [
            ["حَافِلَة", "autobús", "أَذْهَبُ بِالْحَافِلَةِ.", "Voy en autobús."],
            ["قِطَار", "tren", "أَسَافِرُ بِالْقِطَارِ.", "Viajo en tren."],
            ["مَحَطَّة", "estación", "أَيْنَ الْمَحَطَّةُ؟", "¿Dónde está la estación?"],
            ["تَذْكِرَة", "billete", "أُرِيدُ تَذْكِرَةً، مِنْ فَضْلِكَ.", "Quiero un billete, por favor."]
          ],
          grammar: {
            title: "Medios de transporte con بِ",
            explanation: "La preposición بِ expresa el medio de transporte: بِالْحَافِلَةِ («en autobús»), بِالْقِطَارِ («en tren»). Para pedir algo, أُرِيدُ + sustantivo es una estructura práctica.",
            pattern: "أَذْهَبُ بِـ + transporte\nأُرِيدُ + sustantivo…، مِنْ فَضْلِكَ.",
            examples: [
              { target: "أَذْهَبُ بِالْحَافِلَةِ إِلَى الْمَحَطَّةِ.", translation: "Voy en autobús a la estación." },
              { target: "أُرِيدُ تَذْكِرَةً لِلْقِطَارِ.", translation: "Quiero un billete de tren." }
            ],
            tip: "بِـ se une por escrito al artículo: بِ + الْحَافِلَةِ → بِالْحَافِلَةِ."
          },
          choice: ["¿Qué palabra significa «tren»?", ["حَافِلَة", "قِطَار", "مَحَطَّة"], "قِطَار"],
          fill: { prompt: "أَذْهَبُ ___ الْحَافِلَةِ. (Voy en autobús.)", answer: "بِ", hint: "Añade la preposición que expresa el medio." },
          dialogue: { title: "Comprar un billete", scene: "En la estación pides un billete de tren.", speaker: "الْمُوَظَّفُ", target: "مَاذَا تُرِيدُ؟", translation: "¿Qué desea? (a un hombre)", answer: "أُرِيدُ تَذْكِرَةً لِلْقِطَارِ.", answerTranslation: "Quiero un billete de tren.", wrong: "أَيْنَ الْمَحَطَّةُ؟", wrongTranslation: "¿Dónde está la estación?" },
          production: { title: "Di cómo viajas", prompt: "Di «Viajo en tren».", answer: "أَسَافِرُ بِالْقِطَارِ.", wrong: "أَسَافِرُ بِالْحَافِلَةِ.", translation: "Viajo en tren." }
        },
        {
          title: "Horarios, salidas y llegadas",
          objective: "Preguntar cuándo sale un transporte y entender indicaciones básicas.",
          vocabulary: [
            ["مَتَى", "cuándo", "مَتَى يَخْرُجُ الْقِطَارُ؟", "¿Cuándo sale el tren?"],
            ["يَخْرُجُ", "sale", "يَخْرُجُ الْقِطَارُ الْآنَ.", "El tren sale ahora."],
            ["يَصِلُ", "llega", "يَصِلُ الْقِطَارُ مَسَاءً.", "El tren llega por la tarde."],
            ["الْآن", "ahora", "الْحَافِلَةُ هُنَا الْآنَ.", "El autobús está aquí ahora."]
          ],
          grammar: {
            title: "Preguntar cuándo con مَتَى",
            explanation: "مَتَى («cuándo») inicia una pregunta. En presente, يَخْرُجُ («sale») y يَصِلُ («llega») describen un horario o una acción actual. El sujeto puede aparecer después del verbo.",
            pattern: "مَتَى + verbo + sujeto؟\nمَتَى يَخْرُجُ الْقِطَارُ؟ · يَصِلُ مَسَاءً.",
            examples: [
              { target: "مَتَى يَخْرُجُ الْقِطَارُ؟ يَخْرُجُ الْآنَ.", translation: "¿Cuándo sale el tren? Sale ahora." },
              { target: "يَصِلُ الْقِطَارُ مَسَاءً.", translation: "El tren llega por la tarde." }
            ],
            tip: "Para transporte femenino, como الْحَافِلَة, el verbo también puede concordar en femenino: تَخْرُجُ الْحَافِلَةُ."
          },
          choice: ["¿Qué verbo significa «llega»?", ["يَصِلُ", "يَخْرُجُ", "يَنْتَظِرُ"], "يَصِلُ"],
          fill: { prompt: "مَتَى ___ الْقِطَارُ؟ (¿Cuándo sale el tren?)", answer: "يَخْرُجُ", hint: "Completa con el verbo «sale»." },
          dialogue: { title: "Consultar una salida", scene: "Miras el horario en la estación y preguntas al personal.", speaker: "أَمِين", target: "مَتَى يَخْرُجُ الْقِطَارُ؟", translation: "¿Cuándo sale el tren?", answer: "يَخْرُجُ الْآنَ.", answerTranslation: "Sale ahora.", wrong: "أُرِيدُ تَذْكِرَةً.", wrongTranslation: "Quiero un billete." },
          production: { title: "Di cuándo llega", prompt: "Di «El tren llega por la tarde».", answer: "يَصِلُ الْقِطَارُ مَسَاءً.", wrong: "يَخْرُجُ الْقِطَارُ مَسَاءً.", translation: "El tren llega por la tarde." }
        },
        {
          title: "Rutinas y acciones en curso",
          objective: "Describir cómo viajas habitualmente y decir a dónde vas ahora.",
          vocabulary: [
            ["أَذْهَبُ", "voy", "أَذْهَبُ إِلَى الْعَمَلِ.", "Voy al trabajo."],
            ["إِلَى", "a / hacia", "أَذْهَبُ إِلَى الْمَحَطَّةِ.", "Voy a la estación."],
            ["يَوْمِيًّا", "diariamente", "أَذْهَبُ يَوْمِيًّا بِالْحَافِلَةِ.", "Voy diariamente en autobús."],
            ["مَعَ", "con", "أَذْهَبُ مَعَ أَخِي.", "Voy con mi hermano."]
          ],
          grammar: {
            title: "Presente y dirección con إِلَى",
            explanation: "El presente árabe puede expresar tanto una rutina como una acción actual; el contexto o palabras como يَوْمِيًّا («diariamente») ayudan a distinguirlas. إِلَى indica dirección o destino.",
            pattern: "أَذْهَبُ إِلَى + destino\nأَذْهَبُ يَوْمِيًّا بِـ + transporte",
            examples: [
              { target: "أَذْهَبُ يَوْمِيًّا إِلَى الْعَمَلِ بِالْحَافِلَةِ.", translation: "Voy diariamente al trabajo en autobús." },
              { target: "أَذْهَبُ إِلَى الْمَحَطَّةِ مَعَ أَخِي.", translation: "Voy a la estación con mi hermano." }
            ],
            tip: "El árabe no usa una forma progresiva separada como «estoy yendo» en este ejemplo; el contexto comunica si es habitual o actual."
          },
          choice: ["¿Qué preposición indica destino?", ["فِي", "مِنْ", "إِلَى"], "إِلَى"],
          fill: { prompt: "أَذْهَبُ ___ الْمَحَطَّةِ. (Voy a la estación.)", answer: "إِلَى", hint: "Usa la preposición de movimiento «a / hacia»." },
          dialogue: { title: "Hablar de tu trayecto", scene: "Un compañero pregunta cómo sueles ir al trabajo.", speaker: "لَيْلَى", target: "كَيْفَ تَذْهَبُ إِلَى الْعَمَلِ؟", translation: "¿Cómo vas al trabajo? (a un hombre)", answer: "أَذْهَبُ بِالْحَافِلَةِ.", answerTranslation: "Voy en autobús.", wrong: "أَذْهَبُ مَعَ أَخِي.", wrongTranslation: "Voy con mi hermano." },
          production: { title: "Di tu destino", prompt: "Di «Voy a la estación».", answer: "أَذْهَبُ إِلَى الْمَحَطَّةِ.", wrong: "أَذْهَبُ مِنَ الْمَحَطَّةِ.", translation: "Voy a la estación." }
        }
      ]
    },
    {
      id: "ar-shopping",
      title: "Compras, comida y ropa",
      canDo: "Preguntar precios, comprar alimentos, indicar cantidades y pedir prendas o bebidas.",
      grammar: "demostrativos, singular y plural, cuantificadores y petición cortés",
      sounds: "sonidos de letras solares y lunares y pronunciación de palabras",
      vocabulary: "precios, alimentos, cantidades, ropa y tienda",
      game: "mercado y menú",
      lessons: [
        {
          title: "Números y precios",
          objective: "Preguntar cuánto cuesta algo y entender un precio sencillo.",
          vocabulary: [
            ["كَمْ", "cuánto", "كَمْ ثَمَنُ هَذَا؟", "¿Cuánto cuesta esto?"],
            ["ثَمَن", "precio", "الثَّمَنُ عَشَرَةُ دَرَاهِمَ.", "El precio es diez dirhams."],
            ["وَاحِد", "uno", "ثَمَنُهُ دِينَارٌ وَاحِدٌ.", "Cuesta un dinar."],
            ["عَشَرَة", "diez", "عَشَرَةُ دَرَاهِمَ.", "Diez dirhams."]
          ],
          grammar: {
            title: "Preguntar una cantidad con كَمْ",
            explanation: "كَمْ pregunta por una cantidad y aparece antes del nombre: كَمْ ثَمَنُ هَذَا؟ significa «¿cuánto cuesta esto?». En MSA formal, el sustantivo contado después de números como 3–10 suele aparecer en plural; aprende primero la expresión completa.",
            pattern: "كَمْ + nombre…؟ · كَمْ ثَمَنُ هَذَا؟\nالثَّمَنُ + número + moneda",
            examples: [
              { target: "كَمْ ثَمَنُ هَذَا؟ الثَّمَنُ عَشَرَةُ دَرَاهِمَ.", translation: "¿Cuánto cuesta esto? Cuesta diez dirhams." },
              { target: "ثَمَنُهُ دِينَارٌ وَاحِدٌ.", translation: "Cuesta un dinar." }
            ],
            tip: "Las monedas cambian por país. Aquí se usan ejemplos de práctica; los precios y formas habladas varían regionalmente."
          },
          choice: ["¿Qué palabra pregunta «cuánto»?", ["مَتَى", "كَمْ", "أَيْنَ"], "كَمْ"],
          fill: { prompt: "كَمْ ___ هَذَا؟ (¿Cuánto cuesta esto?)", answer: "ثَمَنُ", hint: "Completa con «precio de»." },
          dialogue: { title: "Preguntar un precio", scene: "En un mercado preguntas por el precio de un artículo.", speaker: "الْبَائِعُ", target: "كَمْ ثَمَنُ هَذَا؟", translation: "¿Cuánto cuesta esto?", answer: "الثَّمَنُ عَشَرَةُ دَرَاهِمَ.", answerTranslation: "Cuesta diez dirhams.", wrong: "أَذْهَبُ إِلَى الْمَحَطَّةِ.", wrongTranslation: "Voy a la estación." },
          production: { title: "Pregunta el precio", prompt: "Pregunta «¿Cuánto cuesta esto?»", answer: "كَمْ ثَمَنُ هَذَا؟", wrong: "أَيْنَ هَذَا؟", translation: "¿Cuánto cuesta esto?" }
        },
        {
          title: "Alimentos básicos y mercado",
          objective: "Nombrar alimentos básicos y pedir un producto.",
          vocabulary: [
            ["خُبْز", "pan", "أُرِيدُ خُبْزًا.", "Quiero pan."],
            ["تُفَّاح", "manzanas", "أُرِيدُ تُفَّاحًا.", "Quiero manzanas."],
            ["حَلِيب", "leche", "هَذَا حَلِيبٌ.", "Esto es leche."],
            ["سُوق", "mercado", "أَذْهَبُ إِلَى السُّوقِ.", "Voy al mercado."]
          ],
          grammar: {
            title: "Pedir alimentos con أُرِيدُ",
            explanation: "Para pedir un alimento se usa أُرِيدُ seguido del sustantivo. Los nombres indefinidos pueden llevar terminación ـًا en el objeto directo, como خُبْزًا. En la conversación diaria, esas vocales finales suelen no pronunciarse.",
            pattern: "أُرِيدُ + alimento\nأُرِيدُ خُبْزًا. · أَذْهَبُ إِلَى السُّوقِ.",
            examples: [
              { target: "أُرِيدُ خُبْزًا وَحَلِيبًا، مِنْ فَضْلِكَ.", translation: "Quiero pan y leche, por favor." },
              { target: "أَذْهَبُ إِلَى السُّوقِ لِشِرَاءِ التُّفَّاحِ.", translation: "Voy al mercado a comprar manzanas." }
            ],
            tip: "En muchos dialectos cambian algunas palabras de comida; estos ejemplos corresponden al MSA."
          },
          choice: ["¿Qué palabra significa «pan»?", ["خُبْز", "حَلِيب", "تُفَّاح"], "خُبْز"],
          fill: { prompt: "أُرِيدُ ___. (Quiero leche.)", answer: "حَلِيبًا", hint: "Escribe «leche» con terminación de objeto indefinido." },
          dialogue: { title: "Pedir en el mercado", scene: "Pides un alimento a un vendedor.", speaker: "الْبَائِعُ", target: "مَاذَا تُرِيدُ؟", translation: "¿Qué desea? (a un hombre)", answer: "أُرِيدُ خُبْزًا، مِنْ فَضْلِكَ.", answerTranslation: "Quiero pan, por favor.", wrong: "أَذْهَبُ إِلَى السُّوقِ.", wrongTranslation: "Voy al mercado." },
          production: { title: "Pide un alimento", prompt: "Di «Quiero manzanas».", answer: "أُرِيدُ تُفَّاحًا.", wrong: "أُرِيدُ حَلِيبًا.", translation: "Quiero manzanas." }
        },
        {
          title: "Cantidades y pago",
          objective: "Pedir una cantidad sencilla y preguntar si se puede pagar.",
          vocabulary: [
            ["كِيلُو", "kilo", "أُرِيدُ كِيلُو تُفَّاحٍ.", "Quiero un kilo de manzanas."],
            ["نِصْف", "medio", "أُرِيدُ نِصْفَ كِيلُو.", "Quiero medio kilo."],
            ["مَعَ", "con", "مَعِي نُقُودٌ.", "Tengo dinero conmigo."],
            ["نَقْد", "efectivo / dinero", "هَلْ تَقْبَلُ النَّقْدَ؟", "¿Acepta efectivo?"]
          ],
          grammar: {
            title: "Cantidades con كِيلُو y نِصْف",
            explanation: "كِيلُو («kilo») puede preceder al producto: كِيلُو تُفَّاحٍ («un kilo de manzanas»). نِصْفَ كِيلُو significa «medio kilo». Para preguntar si aceptan algo, se puede usar هَلْ + verbo.",
            pattern: "كِيلُو + producto · نِصْفُ كِيلُو = medio kilo\nهَلْ تَقْبَلُ…؟ = ¿acepta…?",
            examples: [
              { target: "أُرِيدُ كِيلُو تُفَّاحٍ وَنِصْفَ كِيلُو خُبْزًا.", translation: "Quiero un kilo de manzanas y medio kilo de pan." },
              { target: "هَلْ تَقْبَلُ النَّقْدَ؟", translation: "¿Acepta efectivo?" }
            ],
            tip: "La unidad y su terminación pueden variar con el caso y la variedad; estas frases modelo sirven para una compra básica."
          },
          choice: ["¿Qué expresión significa «medio kilo»?", ["نِصْفُ كِيلُو", "كِيلُو وَاحِد", "نُقُود"], "نِصْفُ كِيلُو"],
          fill: { prompt: "أُرِيدُ ___ كِيلُو. (Quiero medio kilo.)", answer: "نِصْفَ", hint: "Escribe «medio» antes de kilo." },
          dialogue: { title: "Pedir una cantidad", scene: "En el mercado indicas cuánto producto quieres.", speaker: "الْبَائِعُ", target: "كَمْ تُرِيدُ؟", translation: "¿Cuánto desea? (a un hombre)", answer: "أُرِيدُ نِصْفَ كِيلُو.", answerTranslation: "Quiero medio kilo.", wrong: "مَعِي نُقُودٌ.", wrongTranslation: "Tengo dinero conmigo." },
          production: { title: "Di cuánto quieres", prompt: "Pide un kilo de manzanas.", answer: "أُرِيدُ كِيلُو تُفَّاحٍ.", wrong: "أُرِيدُ نِصْفَ كِيلُو.", translation: "Quiero un kilo de manzanas." }
        },
        {
          title: "Ropa, bebidas y preferencias",
          objective: "Pedir una prenda o bebida y expresar una preferencia.",
          vocabulary: [
            ["قَمِيص", "camisa", "هَذَا قَمِيصٌ جَدِيدٌ.", "Esta es una camisa nueva."],
            ["فُسْتَان", "vestido", "هَذَا فُسْتَانٌ جَمِيلٌ.", "Este es un vestido bonito."],
            ["قَهْوَة", "café", "أُرِيدُ قَهْوَةً.", "Quiero café."],
            ["شَاي", "té", "أُفَضِّلُ الشَّايَ.", "Prefiero el té."]
          ],
          grammar: {
            title: "Demostrativos y preferencia",
            explanation: "هَذَا acompaña a nombres masculinos como قَمِيص y فُسْتَان. Para expresar preferencia, أُفَضِّلُ («prefiero») va seguido de la opción elegida. Los adjetivos se colocan después del nombre y concuerdan con él.",
            pattern: "هَذَا + masculino · nombre + adjetivo\nأُفَضِّلُ + opción",
            examples: [
              { target: "هَذَا قَمِيصٌ جَدِيدٌ.", translation: "Esta es una camisa nueva." },
              { target: "أُفَضِّلُ الشَّايَ عَلَى الْقَهْوَةِ.", translation: "Prefiero el té al café." }
            ],
            tip: "قَهْوَة es femenino; con ella se usa هَذِهِ: هَذِهِ قَهْوَةٌ."
          },
          choice: ["¿Qué palabra significa «vestido»?", ["قَمِيص", "فُسْتَان", "شَاي"], "فُسْتَان"],
          fill: { prompt: "أُفَضِّلُ ___ . (Prefiero el té.)", answer: "الشَّايَ", hint: "Completa con el nombre definido «té»." },
          dialogue: { title: "Pedir algo en una cafetería", scene: "En una cafetería te preguntan qué prefieres.", speaker: "النَّادِلُ", target: "مَاذَا تُفَضِّلُ؟", translation: "¿Qué prefiere? (a un hombre)", answer: "أُفَضِّلُ الشَّايَ.", answerTranslation: "Prefiero el té.", wrong: "هَذَا قَمِيصٌ جَدِيدٌ.", wrongTranslation: "Esta es una camisa nueva." },
          production: { title: "Pide café", prompt: "Di «Quiero café».", answer: "أُرِيدُ قَهْوَةً.", wrong: "أُفَضِّلُ الشَّايَ.", translation: "Quiero café." }
        }
      ]
    },
    {
      id: "ar-stories",
      title: "Historias, pasado y cultura",
      canDo: "Hablar de ayer con expresiones memorizadas y describir personas, lugares y estudios.",
      grammar: "pasado frecuente, posesivos, conectores y adjetivos",
      sounds: "ritmo narrativo y pronunciación de palabras vocalizadas",
      vocabulary: "actividades pasadas, familia, lugares y escuela",
      game: "relato encadenado de un día",
      lessons: [
        {
          title: "Contar qué hice ayer",
          objective: "Hablar de una actividad pasada y mencionar cuándo ocurrió.",
          vocabulary: [
            ["أَمْسِ", "ayer", "أَمْسِ ذَهَبْتُ إِلَى السُّوقِ.", "Ayer fui al mercado."],
            ["ذَهَبْتُ", "fui", "ذَهَبْتُ إِلَى الْمَدْرَسَةِ.", "Fui a la escuela."],
            ["دَرَسْتُ", "estudié", "دَرَسْتُ الْعَرَبِيَّةَ.", "Estudié árabe."],
            ["زُرْتُ", "visité", "زُرْتُ صَدِيقِي.", "Visité a mi amigo."]
          ],
          grammar: {
            title: "Pasado en primera persona",
            explanation: "Muchos verbos forman el pasado de «yo» con la terminación ـتُ: ذَهَبْتُ («fui»), دَرَسْتُ («estudié»), زُرْتُ («visité»). أَمْسِ indica que la acción ocurrió ayer.",
            pattern: "raíz verbal + تُ = yo hice…\nأَمْسِ + pasado · ذَهَبْتُ / دَرَسْتُ / زُرْتُ",
            examples: [
              { target: "أَمْسِ ذَهَبْتُ إِلَى السُّوقِ.", translation: "Ayer fui al mercado." },
              { target: "دَرَسْتُ الْعَرَبِيَّةَ وَزُرْتُ صَدِيقِي.", translation: "Estudié árabe y visité a mi amigo." }
            ],
            tip: "Aprende los verbos de alta frecuencia como formas completas; algunas raíces tienen cambios que no se predicen solo con la terminación."
          },
          choice: ["¿Qué verbo significa «estudié»?", ["دَرَسْتُ", "أَذْهَبُ", "أَفْتَحُ"], "دَرَسْتُ"],
          fill: { prompt: "أَمْسِ ___ إِلَى السُّوقِ. (Ayer fui al mercado.)", answer: "ذَهَبْتُ", hint: "Completa con el pasado de «ir» para «yo»." },
          dialogue: { title: "Hablar de ayer", scene: "Un compañero te pregunta qué hiciste ayer.", speaker: "سَامِي", target: "مَاذَا فَعَلْتَ أَمْسِ؟", translation: "¿Qué hiciste ayer? (a un hombre)", answer: "دَرَسْتُ الْعَرَبِيَّةَ.", answerTranslation: "Estudié árabe.", wrong: "أَدْرُسُ الْعَرَبِيَّةَ.", wrongTranslation: "Estudio árabe." },
          production: { title: "Cuenta una acción pasada", prompt: "Di «Ayer fui al mercado».", answer: "أَمْسِ ذَهَبْتُ إِلَى السُّوقِ.", wrong: "أَمْسِ أَذْهَبُ إِلَى السُّوقِ.", translation: "Ayer fui al mercado." }
        },
        {
          title: "Hablar de mi familia",
          objective: "Describir a familiares y contar una actividad pasada sencilla.",
          vocabulary: [
            ["عَائِلَة", "familia", "عَائِلَتِي كَبِيرَةٌ.", "Mi familia es grande."],
            ["أُمّ", "madre", "زُرْتُ أُمِّي أَمْسِ.", "Visité a mi madre ayer."],
            ["مَعَ", "con", "ذَهَبْتُ مَعَ أُخْتِي.", "Fui con mi hermana."],
            ["سَعِيد", "feliz (masculino)", "أَنَا سَعِيدٌ مَعَ عَائِلَتِي.", "Estoy feliz con mi familia."]
          ],
          grammar: {
            title: "Posesivos con nombres de familia",
            explanation: "Los sufijos posesivos se unen al nombre: عَائِلَتِي («mi familia»), أُمِّي («mi madre»), أُخْتِي («mi hermana»). En pasado, ذَهَبْتُ indica «fui yo» y puede combinarse con مَعَ («con»).",
            pattern: "nombre + ـي = mi… · عَائِلَتِي / أُمِّي\nذَهَبْتُ مَعَ + persona",
            examples: [
              { target: "زُرْتُ أُمِّي أَمْسِ.", translation: "Visité a mi madre ayer." },
              { target: "ذَهَبْتُ مَعَ أُخْتِي إِلَى الْبَيْتِ.", translation: "Fui con mi hermana a casa." }
            ],
            tip: "El nombre أُمّ cambia su forma al añadir el sufijo: أُمِّي. Pronuncia la vocal breve para enlazarlo con naturalidad."
          },
          choice: ["¿Qué palabra significa «mi familia»?", ["عَائِلَتِي", "مَدْرَسَتِي", "مَدِينَتِي"], "عَائِلَتِي"],
          fill: { prompt: "زُرْتُ ___ أَمْسِ. (Visité a mi madre ayer.)", answer: "أُمِّي", hint: "Completa con «mi madre»." },
          dialogue: { title: "Contar una visita", scene: "Una amiga pregunta a quién visitaste ayer.", speaker: "مَرْيَم", target: "مَنْ زُرْتَ أَمْسِ؟", translation: "¿A quién visitaste ayer? (a un hombre)", answer: "زُرْتُ أُمِّي.", answerTranslation: "Visité a mi madre.", wrong: "عَائِلَتِي كَبِيرَةٌ.", wrongTranslation: "Mi familia es grande." },
          production: { title: "Cuenta con quién fuiste", prompt: "Di «Fui con mi hermana».", answer: "ذَهَبْتُ مَعَ أُخْتِي.", wrong: "ذَهَبْتُ مَعَ أَخِي.", translation: "Fui con mi hermana." }
        },
        {
          title: "Ciudades, lugares y escuela",
          objective: "Hablar de una ciudad, describir la escuela y decir qué estudiaste.",
          vocabulary: [
            ["مَدْرَسَة", "escuela", "هَذِهِ مَدْرَسَةٌ جَدِيدَةٌ.", "Esta es una escuela nueva."],
            ["مَدِينَة", "ciudad", "مَدِينَتِي كَبِيرَةٌ.", "Mi ciudad es grande."],
            ["جَمِيل", "bonito (masculino)", "الْبَيْتُ جَمِيلٌ.", "La casa es bonita."],
            ["تَعَلَّمْتُ", "aprendí", "تَعَلَّمْتُ كَلِمَاتٍ جَدِيدَةً.", "Aprendí palabras nuevas."]
          ],
          grammar: {
            title: "Concordancia y pasado de aprender",
            explanation: "El adjetivo concuerda en género con el nombre: مَدِينَةٌ جَمِيلَةٌ (femenino), بَيْتٌ جَمِيلٌ (masculino). تَعَلَّمْتُ es el pasado en primera persona de «aprender», y كَلِمَاتٍ significa «palabras».",
            pattern: "femenino: مَدِينَةٌ كَبِيرَةٌ · masculino: بَيْتٌ جَمِيلٌ\nتَعَلَّمْتُ = aprendí",
            examples: [
              { target: "مَدِينَتِي جَمِيلَةٌ وَالْمَدْرَسَةُ قَرِيبَةٌ.", translation: "Mi ciudad es bonita y la escuela está cerca." },
              { target: "تَعَلَّمْتُ كَلِمَاتٍ جَدِيدَةً فِي الْمَدْرَسَةِ.", translation: "Aprendí palabras nuevas en la escuela." }
            ],
            tip: "Muchos adjetivos femeninos terminan en ـَة; asegúrate de que el adjetivo corresponda al género del nombre."
          },
          choice: ["¿Qué forma concuerda con مَدِينَةٌ?", ["جَمِيلٌ", "جَمِيلَةٌ", "جَدِيدٌ"], "جَمِيلَةٌ"],
          fill: { prompt: "مَدِينَتِي ___ . (Mi ciudad es bonita.)", answer: "جَمِيلَةٌ", hint: "Usa la forma femenina de «bonito»." },
          dialogue: { title: "Describir tu ciudad", scene: "Un compañero pregunta cómo es tu ciudad.", speaker: "أَمِين", target: "كَيْفَ مَدِينَتُكَ؟", translation: "¿Cómo es tu ciudad? (a un hombre)", answer: "مَدِينَتِي جَمِيلَةٌ.", answerTranslation: "Mi ciudad es bonita.", wrong: "تَعَلَّمْتُ كَلِمَاتٍ جَدِيدَةً.", wrongTranslation: "Aprendí palabras nuevas." },
          production: { title: "Di qué aprendiste", prompt: "Di «Aprendí palabras nuevas».", answer: "تَعَلَّمْتُ كَلِمَاتٍ جَدِيدَةً.", wrong: "أَتَعَلَّمُ كَلِمَاتٍ جَدِيدَةً.", translation: "Aprendí palabras nuevas." }
        }
      ]
    }
  ];

  function makeLesson(unitId, spec, index) {
    const [first, second, third] = spec.vocabulary;
    return {
      id: `${unitId}-${index + 1}`,
      title: spec.title,
      minutes: 8,
      objective: spec.objective,
      vocabulary: spec.vocabulary.map(([target, translation, exampleTarget, exampleTranslation]) => ({
        target,
        translation,
        exampleTarget,
        exampleTranslation
      })),
      steps: [
        {
          type: "vocabulary",
          title: "Escucha y relaciona",
          instruction: "Lee y escucha las expresiones, relaciona cada palabra con su significado y repite a tu ritmo.",
          itemIds: spec.vocabulary.map(([target]) => target)
        },
        {
          type: "grammar",
          title: spec.grammar.title,
          explanation: spec.grammar.explanation,
          pattern: spec.grammar.pattern,
          examples: spec.grammar.examples,
          tip: spec.grammar.tip
        },
        {
          type: "multipleChoice",
          title: "Comprende el vocabulario",
          prompt: spec.choice[0],
          options: spec.choice[1],
          answer: spec.choice[2],
          feedback: `La respuesta correcta es «${spec.choice[2]}». ${first[0]} significa «${first[1]}».`
        },
        {
          type: "fillBlank",
          title: "Completa la frase",
          prompt: spec.fill.prompt,
          answer: spec.fill.answer,
          acceptedAnswers: [spec.fill.answer],
          hint: spec.fill.hint
        },
        {
          type: "dialogue",
          title: spec.dialogue.title,
          scene: spec.dialogue.scene,
          turns: [
            {
              speaker: spec.dialogue.speaker,
              target: spec.dialogue.target,
              translation: spec.dialogue.translation,
              options: [
                { target: spec.dialogue.answer, translation: spec.dialogue.answerTranslation, correct: true },
                { target: spec.dialogue.wrong, translation: spec.dialogue.wrongTranslation, correct: false }
              ]
            }
          ]
        },
        {
          type: "production",
          title: spec.production.title,
          prompt: spec.production.prompt,
          options: [spec.production.answer, spec.production.wrong],
          answer: spec.production.answer,
          model: spec.production.answer,
          translation: spec.production.translation
        }
      ]
    };
  }

  const units = unitsData.map((unit) => ({
    id: unit.id,
    lessons: unit.lessons.map((lesson, index) => makeLesson(unit.id, lesson, index))
  }));
  window.ARABIC_A1_CURRICULUM = {
    metadata: {
      language: "ar",
      languageName: "Árabe",
      speechLanguage: "ar-SA",
      supportLanguage: "es",
      level: "A1",
      audience: "Hispanohablantes principiantes; los ejemplos enseñan árabe estándar moderno y señalan las formas de tratamiento.",
      estimatedMinutes: 232
    },
    roadmap: unitsData.map(({ id, title, canDo, grammar, sounds, vocabulary, game }) => ({
      id, title, canDo, grammar, sounds, vocabulary, game
    })),
    units
  };
})();

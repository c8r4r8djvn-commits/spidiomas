function createItalianA2Lesson({
  id, title, objective, vocabulary, grammar, fill, dialogue, production, quiz
}) {
  const words = vocabulary.map(([it, es, exampleIt, exampleEs]) => ({
    target: it,
    translation: es,
    exampleTarget: exampleIt,
    exampleTranslation: exampleEs
  }));
  return {
    id,
    title,
    minutes: 8,
    objective,
    vocabulary: words,
    steps: [
      {
        type: "vocabulary",
        title: "Escucha y relaciona",
        instruction: "Lee los términos en contexto, escucha el italiano y repite a tu ritmo.",
        itemIds: words.map((word) => word.target)
      },
      {
        type: "grammar",
        title: grammar.title,
        explanation: grammar.explanation,
        pattern: grammar.pattern,
        examples: grammar.examples,
        tip: grammar.tip
      },
      {
        type: "fillBlank",
        title: fill.title,
        prompt: fill.prompt,
        answer: fill.answer,
        acceptedAnswers: fill.acceptedAnswers || [fill.answer],
        hint: fill.hint
      },
      {
        type: "dialogue",
        title: dialogue.title,
        scene: dialogue.scene,
        turns: [{
          speaker: dialogue.speaker,
          it: dialogue.prompt,
          es: dialogue.promptEs,
          options: [
            { it: dialogue.answer, es: dialogue.answerEs, correct: true },
            { it: dialogue.wrong, es: dialogue.wrongEs, correct: false }
          ]
        }]
      },
      {
        type: "production",
        title: production.title,
        prompt: production.prompt,
        frame: production.frame,
        model: production.model,
        privacyNote: production.privacyNote ||
          "Practica con datos ficticios si la situación incluye información personal."
      },
      {
        type: "multipleChoice",
        title: quiz.title,
        prompt: quiz.prompt,
        options: quiz.options,
        answer: quiz.answer,
        feedback: quiz.feedback
      }
    ]
  };
}

window.ITALIAN_A2_CURRICULUM = {
  metadata: {
    language: "it",
    languageName: "Italiano",
    supportLanguage: "es",
    level: "A2",
    audience: "Hispanohablantes que ya completaron los fundamentos A1",
    estimatedMinutes: 520,
    design: "Siete unidades con situaciones cotidianas, gramática en contexto, práctica guiada, producción y evaluación formativa",
    contentNote: "Currículo original inspirado en los objetivos temáticos y gramaticales de Facile Facile A2. Los textos, ejemplos y actividades son propios."
  },
  roadmap: [
    {
      id: "a2-citta",
      title: "Personas, trabajo y vida en la ciudad",
      canDo: "Describir una situación actual, contar hechos recientes y orientarte en una ciudad.",
      grammar: "presente irregular; stare + gerundio; passato prossimo; artículos y preposiciones",
      sounds: "consonantes dobles y ritmo de frases descriptivas",
      vocabulary: "ciudad, residencia, trabajo, servicios y transporte",
      game: "entrevista a una persona recién llegada"
    },
    {
      id: "a2-infanzia",
      title: "Recuerdos y experiencias de infancia",
      canDo: "Describir hábitos pasados, contar un recuerdo y distinguir contexto de acontecimiento.",
      grammar: "imperfetto; contraste con passato prossimo; pronombres directos",
      sounds: "entonación narrativa y acento de las formas verbales",
      vocabulary: "familia, escuela, juegos, infancia y medios",
      game: "adivina el recuerdo"
    },
    {
      id: "a2-contatti",
      title: "Paquetes, mensajes y contactos",
      canDo: "Gestionar un envío, explicar una incidencia y referirte a personas u objetos con pronombres.",
      grammar: "pronombres directos con passato prossimo; indirectos; pronombres con infinitivo",
      sounds: "grupos consonánticos y expresiones telefónicas",
      vocabulary: "correo, paquetes, formularios, teléfono y trámites",
      game: "resolver una entrega"
    },
    {
      id: "a2-istruzioni",
      title: "Instrucciones, recetas y servicios",
      canDo: "Dar y seguir instrucciones sencillas en casa, en un restaurante o en un hotel.",
      grammar: "imperativo afirmativo y negativo; formas tu, Lei, noi y voi; pronombres unidos",
      sounds: "ritmo de instrucciones y acento imperativo",
      vocabulary: "ingredientes, cocina, limpieza, hotel y seguridad",
      game: "ordena los pasos"
    },
    {
      id: "a2-futuro",
      title: "Fiestas, planes y viajes",
      canDo: "Hablar de planes, hacer una reserva y explicar dónde o cuánto tiempo hace falta.",
      grammar: "futuro semplice; verbos irregulares frecuentes; usos de ci y ci vuole/ci vogliono",
      sounds: "terminaciones del futuro y entonación al reservar",
      vocabulary: "festividades, transporte, alojamiento y vacaciones",
      game: "organiza una escapada"
    },
    {
      id: "a2-condizionale",
      title: "Deseos, hipótesis y peticiones corteses",
      canDo: "Expresar deseos y posibilidades, y pedir información con cortesía en una oficina.",
      grammar: "condizionale presente regular e irregular; peticiones y situaciones hipotéticas",
      sounds: "formas condicionales y entonación cortés",
      vocabulary: "municipio, documentos, familia, residencia y proyectos",
      game: "simulación en una oficina pública"
    },
    {
      id: "a2-salute",
      title: "Salud, farmacia y pronombres combinados",
      canDo: "Describir síntomas, entender indicaciones y explicar a quién entregas algo.",
      grammar: "pronomi doppi; combinaciones con ne, passato prossimo, infinitivo e imperativo",
      sounds: "claridad al explicar síntomas y nombres de medicamentos",
      vocabulary: "cuerpo, síntomas, farmacia y servicios sanitarios",
      game: "prepara una consulta médica"
    }
  ],
  units: [
    {
      id: "a2-citta",
      title: "Personas, trabajo y vida en la ciudad",
      lessons: [
        createItalianA2Lesson({
          id: "a2-citta-1",
          title: "Una entrevista en la ciudad",
          objective: "Responder preguntas sobre residencia, trabajo y adaptación a una ciudad.",
          vocabulary: [
            ["il quartiere", "el barrio", "Abito in un quartiere tranquillo.", "Vivo en un barrio tranquilo."],
            ["la periferia", "las afueras", "La periferia è lontana dal centro.", "Las afueras están lejos del centro."],
            ["il palazzo", "el edificio", "Il palazzo ha sei piani.", "El edificio tiene seis pisos."],
            ["la convivenza", "la convivencia", "La convivenza richiede rispetto.", "La convivencia requiere respeto."],
            ["il lavoro", "el trabajo", "Cerco un lavoro stabile.", "Busco un trabajo estable."],
            ["distribuire", "repartir", "Distribuisco volantini nel quartiere.", "Reparto folletos en el barrio."],
            ["le pulizie", "la limpieza", "Faccio le pulizie in un ufficio.", "Hago la limpieza en una oficina."],
            ["la bicicletta", "la bicicleta", "Vado al lavoro in bicicletta.", "Voy al trabajo en bicicleta."],
            ["la fermata", "la parada", "La fermata è vicino a casa.", "La parada está cerca de casa."],
            ["mancare", "echar de menos", "Mi manca la mia famiglia.", "Echo de menos a mi familia."]
          ],
          grammar: {
            title: "Presente irregular y stare + gerundio",
            explanation: "Algunos verbos frecuentes tienen formas irregulares en presente. Para describir una acción que ocurre ahora, combina stare conjugado con el gerundio: sto cercando. El presente simple puede expresar rutinas.",
            pattern: "io vado · faccio · vengo\nsto + gerundio: sto lavorando / stiamo cercando",
            examples: [
              { target: "Vado al centro in autobus.", translation: "Voy al centro en autobús." },
              { target: "In questo periodo sto cercando lavoro.", translation: "En este período estoy buscando trabajo." }
            ],
            tip: "No uses stare + infinitivo: se dice sto lavorando, no sto lavorare."
          },
          fill: {
            title: "Describe qué está pasando",
            prompt: "In questo momento ___ un appartamento più vicino al lavoro.",
            answer: "sto cercando",
            hint: "Usa la primera persona de stare y el gerundio de cercare."
          },
          dialogue: {
            title: "Hablar de tu situación actual",
            scene: "Una compañera nueva te pregunta por tu trabajo y por cómo te desplazas.",
            speaker: "Compañera",
            prompt: "Come vai al lavoro?",
            promptEs: "¿Cómo vas al trabajo?",
            answer: "Di solito vado in autobus, ma oggi sto andando in bicicletta.",
            answerEs: "Normalmente voy en autobús, pero hoy voy en bicicleta.",
            wrong: "Ieri sono andato in farmacia.",
            wrongEs: "Ayer fui a la farmacia."
          },
          production: {
            title: "Cuenta cómo es tu barrio",
            prompt: "Describe dónde vives, qué haces ahora y cómo llegas a un lugar cercano.",
            frame: "Abito in ___. In questo periodo sto ___. Di solito vado a ___ in ___.",
            model: "Abito in un quartiere tranquillo. In questo periodo sto cercando lavoro. — Vivo en un barrio tranquilo. En este período estoy buscando trabajo."
          },
          quiz: {
            title: "Distingue rutina y acción actual",
            prompt: "¿Qué frase expresa una acción que ocurre en este momento?",
            options: ["Ogni giorno vado al lavoro.", "Adesso sto cercando un autobus.", "Ieri sono andato al lavoro."],
            answer: "Adesso sto cercando un autobus.",
            feedback: "Adesso y stare + gerundio señalan una acción en curso."
          }
        }),
        createItalianA2Lesson({
          id: "a2-citta-2",
          title: "Contar algo que ya ocurrió",
          objective: "Relatar una experiencia reciente y reconocer artículos determinativos en contexto.",
          vocabulary: [
            ["la ricerca", "la búsqueda", "La ricerca del lavoro è lunga.", "La búsqueda de trabajo es larga."],
            ["l'annuncio", "el anuncio", "Ho letto un annuncio interessante.", "He leído un anuncio interesante."],
            ["il colloquio", "la entrevista", "Il colloquio è finito alle cinque.", "La entrevista terminó a las cinco."],
            ["la domanda", "la pregunta", "Ho fatto una domanda al responsabile.", "Le hice una pregunta al encargado."],
            ["la risposta", "la respuesta", "La risposta è arrivata ieri.", "La respuesta llegó ayer."],
            ["l'ufficio", "la oficina", "L'ufficio apre alle nove.", "La oficina abre a las nueve."],
            ["il documento", "el documento", "Ho portato i documenti richiesti.", "He llevado los documentos solicitados."],
            ["il responsabile", "el responsable", "Il responsabile mi ha chiamato.", "El responsable me llamó."],
            ["la settimana", "la semana", "La settimana scorsa ho lavorato molto.", "La semana pasada trabajé mucho."],
            ["finalmente", "por fin", "Finalmente ho trovato una stanza.", "Por fin encontré una habitación."]
          ],
          grammar: {
            title: "Passato prossimo y artículos determinativos",
            explanation: "Usa passato prossimo para presentar una acción concluida. Se forma con avere o essere en presente más el participio. El artículo determinativo concuerda con el sustantivo: il documento, l'ufficio, la domanda, gli annunci.",
            pattern: "avere / essere + participio passato\nil · lo · l' · la · i · gli · le",
            examples: [
              { target: "Ho letto l'annuncio e ho chiamato l'ufficio.", translation: "Leí el anuncio y llamé a la oficina." },
              { target: "La responsabile è arrivata alle nove.", translation: "La responsable llegó a las nueve." }
            ],
            tip: "Con essere, el participio suele concordar con el sujeto: è arrivata, sono arrivati."
          },
          fill: {
            title: "Completa un relato breve",
            prompt: "Ieri ___ (leggere) l'annuncio e ___ (chiamare) l'ufficio.",
            answer: "ho letto",
            acceptedAnswers: ["ho letto"],
            hint: "Completa el primer verbo con avere + participio; después añade e ho chiamato."
          },
          dialogue: {
            title: "Hablar de una gestión terminada",
            scene: "Una amiga pregunta cómo te fue en una oficina.",
            speaker: "Amiga",
            prompt: "Hai già parlato con il responsabile?",
            promptEs: "¿Ya has hablado con el responsable?",
            answer: "Sì, ho parlato con lui ieri mattina.",
            answerEs: "Sí, hablé con él ayer por la mañana.",
            wrong: "No, sto parlando con lui domani.",
            wrongEs: "No, estoy hablando con él mañana."
          },
          production: {
            title: "Cuenta una gestión reciente",
            prompt: "Escribe tres frases sobre una llamada, una entrevista o un trámite que ya terminaste.",
            frame: "Ieri ho ___. Poi sono andato/a a ___. Finalmente ___.",
            model: "Ieri ho letto un annuncio. Poi sono andata all'ufficio. — Ayer leí un anuncio. Después fui a la oficina."
          },
          quiz: {
            title: "Elige la forma correcta",
            prompt: "Completa: «___ settimana scorsa ho fatto ___ colloquio».",
            options: ["La · un", "Il · una", "Gli · un'"],
            answer: "La · un",
            feedback: "Settimana es femenino singular y colloquio es masculino singular: la settimana, un colloquio."
          }
        }),
        createItalianA2Lesson({
          id: "a2-citta-3",
          title: "Moverse y orientarse en el barrio",
          objective: "Dar indicaciones sencillas y usar preposiciones simples y articuladas.",
          vocabulary: [
            ["l'incrocio", "el cruce", "Gira all'incrocio.", "Gira en el cruce."],
            ["la piazza", "la plaza", "La banca è in piazza.", "El banco está en la plaza."],
            ["il municipio", "el ayuntamiento", "Il municipio è accanto alla posta.", "El ayuntamiento está junto al correo."],
            ["la farmacia", "la farmacia", "La farmacia è davanti al bar.", "La farmacia está delante del bar."],
            ["la strada", "la calle", "Cammina lungo la strada.", "Camina por la calle."],
            ["attraversare", "cruzar", "Attraversa la strada con attenzione.", "Cruza la calle con cuidado."],
            ["svoltare", "girar", "Svolta a destra dopo il ponte.", "Gira a la derecha después del puente."],
            ["il ponte", "el puente", "Passa sotto il ponte.", "Pasa por debajo del puente."],
            ["lontano", "lejos", "La stazione non è lontana.", "La estación no está lejos."],
            ["vicino", "cerca", "Abito vicino al centro.", "Vivo cerca del centro."]
          ],
          grammar: {
            title: "Preposiciones simples y articuladas",
            explanation: "Las preposiciones indican lugar y dirección. Cuando a, di, da, in o su aparecen antes de un artículo determinativo, normalmente se unen: a + il = al; in + la = nella; da + gli = dagli.",
            pattern: "a + il = al · di + la = della · in + i = nei\nsu + lo = sullo · da + le = dalle",
            examples: [
              { target: "La farmacia è vicino alla stazione.", translation: "La farmacia está cerca de la estación." },
              { target: "Cammina fino al ponte e gira a destra.", translation: "Camina hasta el puente y gira a la derecha." }
            ],
            tip: "No todas las preposiciones se contraen: per il y tra la se escriben separadas."
          },
          fill: {
            title: "Indica dónde está",
            prompt: "La farmacia è accanto ___ municipio.",
            answer: "al",
            hint: "Combina a + il."
          },
          dialogue: {
            title: "Pedir una indicación",
            scene: "Estás en una plaza y buscas la estación de autobuses.",
            speaker: "Transeúnte",
            prompt: "La stazione è lontana da qui?",
            promptEs: "¿La estación está lejos de aquí?",
            answer: "No, è vicino al ponte. Vai dritto e poi svolta a sinistra.",
            answerEs: "No, está cerca del puente. Sigue recto y luego gira a la izquierda.",
            wrong: "Sì, ho già spedito il pacco ieri.",
            wrongEs: "Sí, ya envié el paquete ayer."
          },
          production: {
            title: "Explica cómo llegar",
            prompt: "Da indicaciones desde una plaza hasta una farmacia, un municipio u otro lugar público.",
            frame: "Vai fino a ___. Attraversa ___. La/Il ___ è accanto a ___.",
            model: "Vai fino al ponte. Attraversa la piazza. La farmacia è accanto al municipio. — Sigue hasta el puente. Cruza la plaza. La farmacia está junto al ayuntamiento."
          },
          quiz: {
            title: "Forma una preposición articulada",
            prompt: "¿Qué opción completa «Il bar è vicino ___ stazione»?",
            options: ["alla", "a la", "al"],
            answer: "alla",
            feedback: "Stazione es femenino: a + la se une en alla."
          }
        })
      ]
    },
    {
      id: "a2-infanzia",
      title: "Recuerdos y experiencias de infancia",
      lessons: [
        createItalianA2Lesson({
          id: "a2-infanzia-1",
          title: "Describir cómo era antes",
          objective: "Describir personas, lugares y situaciones habituales en el pasado.",
          vocabulary: [
            ["l'infanzia", "la infancia", "La mia infanzia è stata serena.", "Mi infancia fue tranquila."],
            ["il cortile", "el patio", "Giocavamo nel cortile.", "Jugábamos en el patio."],
            ["la campagna", "el campo", "In estate andavo in campagna.", "En verano iba al campo."],
            ["il nonno", "el abuelo", "Mio nonno raccontava storie.", "Mi abuelo contaba historias."],
            ["la maestra", "la maestra", "La maestra era molto gentile.", "La maestra era muy amable."],
            ["tranquillo", "tranquilo", "Da piccolo ero tranquillo.", "De pequeño era tranquilo."],
            ["divertirsi", "divertirse", "Mi divertivo con i miei amici.", "Me divertía con mis amigos."],
            ["andare all'asilo", "ir al jardín infantil", "Andavo all'asilo ogni mattina.", "Iba al jardín infantil cada mañana."],
            ["il fine settimana", "el fin de semana", "Il fine settimana stavamo dai nonni.", "El fin de semana nos quedábamos con los abuelos."],
            ["spesso", "a menudo", "Leggevo spesso prima di dormire.", "A menudo leía antes de dormir."]
          ],
          grammar: {
            title: "Imperfetto para describir y hablar de hábitos",
            explanation: "Imperfetto presenta descripciones, estados y acciones habituales o repetidas en el pasado. Las terminaciones regulares son -vo, -vi, -va, -vamo, -vate, -vano; essere es irregular: ero, eri, era…",
            pattern: "parlavo · leggevi · dormiva · eravamo\nDa piccolo/a + imperfetto",
            examples: [
              { target: "Da bambina abitavo vicino alla scuola.", translation: "De niña vivía cerca de la escuela." },
              { target: "La mia maestra era paziente e sorrideva spesso.", translation: "Mi maestra era paciente y sonreía a menudo." }
            ],
            tip: "Usa imperfetto para el marco y los hábitos, no para enumerar una secuencia terminada."
          },
          fill: {
            title: "Completa la descripción",
            prompt: "Quando ero piccolo, ___ (giocare) spesso in cortile.",
            answer: "giocavo",
            hint: "Con io, el imperfetto regular de giocare termina en -avo."
          },
          dialogue: {
            title: "Preguntar por la infancia",
            scene: "Un compañero quiere saber dónde pasabas las vacaciones.",
            speaker: "Compañero",
            prompt: "Dove passavi le vacanze da bambino?",
            promptEs: "¿Dónde pasabas las vacaciones de niño?",
            answer: "Di solito andavo in campagna dai miei nonni.",
            answerEs: "Normalmente iba al campo con mis abuelos.",
            wrong: "Domani andrò in campagna.",
            wrongEs: "Mañana iré al campo."
          },
          production: {
            title: "Retrato de tu infancia",
            prompt: "Describe cómo eras, dónde vivías y qué hacías habitualmente. Puedes inventar la historia.",
            frame: "Da piccolo/a ero ___. Abitavo a ___. Ogni ___.",
            model: "Da piccolo ero curioso. Abitavo vicino al mare e giocavo spesso con i miei cugini. — De pequeño era curioso. Vivía cerca del mar y jugaba a menudo con mis primos."
          },
          quiz: {
            title: "Identifica una acción habitual",
            prompt: "¿Qué frase describe una costumbre pasada?",
            options: ["Ogni domenica andavo dai nonni.", "Ieri sono andato dai nonni.", "Domani andrò dai nonni."],
            answer: "Ogni domenica andavo dai nonni.",
            feedback: "Ogni domenica expresa repetición; el imperfetto andavo describe ese hábito."
          }
        }),
        createItalianA2Lesson({
          id: "a2-infanzia-2",
          title: "Un recuerdo y una sorpresa",
          objective: "Narrar una acción terminada que ocurrió durante una situación en curso.",
          vocabulary: [
            ["il ricordo", "el recuerdo", "Ho un bel ricordo della scuola.", "Tengo un buen recuerdo de la escuela."],
            ["la sorpresa", "la sorpresa", "È stata una sorpresa inaspettata.", "Fue una sorpresa inesperada."],
            ["mentre", "mientras", "Mentre studiavo, ascoltavo la radio.", "Mientras estudiaba, escuchaba la radio."],
            ["all'improvviso", "de repente", "All'improvviso è iniziato a piovere.", "De repente empezó a llover."],
            ["incontrare", "encontrar", "Ho incontrato un vecchio amico.", "Me encontré con un viejo amigo."],
            ["cadere", "caer", "La palla è caduta in strada.", "La pelota cayó en la calle."],
            ["succedere", "suceder", "Che cosa è successo ieri?", "¿Qué pasó ayer?"],
            ["la festa", "la fiesta", "La festa è finita tardi.", "La fiesta terminó tarde."],
            ["il temporale", "la tormenta", "È arrivato un temporale improvviso.", "Llegó una tormenta repentina."],
            ["ridere", "reír", "Ridevamo quando è arrivato il cane.", "Nos reíamos cuando llegó el perro."]
          ],
          grammar: {
            title: "Imperfetto y passato prossimo en una narración",
            explanation: "Imperfetto describe la acción en curso o el contexto; passato prossimo suele señalar el hecho puntual que la interrumpe o una acción terminada. Mentre introduce con frecuencia el contexto.",
            pattern: "Mentre + imperfetto, passato prossimo\nPioveva quando siamo usciti.",
            examples: [
              { target: "Mentre giocavo, è arrivata mia cugina.", translation: "Mientras jugaba, llegó mi prima." },
              { target: "Camminavamo in piazza quando è iniziato a piovere.", translation: "Caminábamos por la plaza cuando empezó a llover." }
            ],
            tip: "No es una regla mecánica: elige el tiempo según presentes el hecho como fondo o como evento terminado."
          },
          fill: {
            title: "Une el contexto y el acontecimiento",
            prompt: "Mentre ___ (camminare), ___ (incontrare) un amico.",
            answer: "camminavo",
            hint: "El paseo es el contexto continuo; completa el segundo espacio con ho incontrato."
          },
          dialogue: {
            title: "Contar una anécdota",
            scene: "Relatas una pequeña sorpresa que ocurrió durante una actividad.",
            speaker: "Amigo",
            prompt: "Che cosa è successo mentre aspettavi l'autobus?",
            promptEs: "¿Qué pasó mientras esperabas el autobús?",
            answer: "Mentre aspettavo, ho incontrato una mia compagna di scuola.",
            answerEs: "Mientras esperaba, me encontré con una compañera de escuela.",
            wrong: "Aspetterò l'autobus la settimana prossima.",
            wrongEs: "Esperaré el autobús la próxima semana."
          },
          production: {
            title: "Cuenta un recuerdo breve",
            prompt: "Escribe o cuenta qué estabas haciendo cuando ocurrió una sorpresa.",
            frame: "Mentre ___, all'improvviso ___. Poi ___.",
            model: "Mentre tornavo a casa, è iniziato un temporale. Poi ho incontrato un amico. — Mientras volvía a casa, empezó una tormenta. Después me encontré con un amigo."
          },
          quiz: {
            title: "Elige los tiempos adecuados",
            prompt: "Completa: «Mentre ___, il telefono ___».",
            options: ["studiavo · ha squillato", "ho studiato · squillava", "studierò · squilla"],
            answer: "studiavo · ha squillato",
            feedback: "El estudio funciona como contexto y el timbre como acontecimiento puntual."
          }
        }),
        createItalianA2Lesson({
          id: "a2-infanzia-3",
          title: "Hablar de juegos y usar pronombres directos",
          objective: "Evitar repeticiones usando pronombres directos lo, la, li y le.",
          vocabulary: [
            ["il nascondino", "el escondite", "Da bambini giocavamo a nascondino.", "De niños jugábamos al escondite."],
            ["la palla", "la pelota", "La palla è rossa.", "La pelota es roja."],
            ["la bambola", "la muñeca", "La bambola era di mia sorella.", "La muñeca era de mi hermana."],
            ["il giocattolo", "el juguete", "Questo giocattolo era mio.", "Este juguete era mío."],
            ["la corda", "la cuerda", "Saltavamo la corda nel cortile.", "Saltábamos la cuerda en el patio."],
            ["il cartone animato", "los dibujos animados", "Guardavo i cartoni animati.", "Veía dibujos animados."],
            ["nascondere", "esconder", "Nascondevo la palla sotto il letto.", "Escondía la pelota debajo de la cama."],
            ["trovare", "encontrar", "Trovavo sempre i miei amici.", "Siempre encontraba a mis amigos."],
            ["guardare", "mirar", "Guardavamo un programma insieme.", "Veíamos un programa juntos."],
            ["ascoltare", "escuchar", "Ascoltavo le storie di mia nonna.", "Escuchaba las historias de mi abuela."]
          ],
          grammar: {
            title: "Pronombres directos lo, la, li, le",
            explanation: "El pronombre directo sustituye el objeto que recibe la acción y normalmente va antes del verbo conjugado. Concuerda con el objeto: il gioco → lo; la palla → la; i giochi → li; le bambole → le.",
            pattern: "lo / la / li / le + verbo\nCon passato prossimo: l'ho visto · l'ho vista",
            examples: [
              { target: "La palla? La usavo ogni giorno.", translation: "¿La pelota? La usaba todos los días." },
              { target: "I cartoni? Li guardavamo insieme.", translation: "¿Los dibujos? Los veíamos juntos." }
            ],
            tip: "Con un pronombre directo antes de avere en passato prossimo, el participio puede concordar: l'ho vista."
          },
          fill: {
            title: "Sustituye el objeto",
            prompt: "Le bambole? ___ usavo spesso.",
            answer: "Le",
            acceptedAnswers: ["Le", "le"],
            hint: "Bambole es femenino plural; usa el pronombre le antes del verbo."
          },
          dialogue: {
            title: "Adivinar el juguete",
            scene: "Tu compañero describe un juego de infancia y preguntas por el objeto.",
            speaker: "Compañero",
            prompt: "I cartoni animati li guardavi spesso?",
            promptEs: "¿Veías dibujos animados a menudo?",
            answer: "Sì, li guardavo quasi ogni pomeriggio.",
            answerEs: "Sí, los veía casi todas las tardes.",
            wrong: "Sì, le guardavo quasi ogni pomeriggio.",
            wrongEs: "Sí, las veía casi todas las tardes."
          },
          production: {
            title: "Describe un juego que te gustaba",
            prompt: "Habla de un juego, un objeto y un programa de tu infancia; usa al menos dos pronombres directos.",
            frame: "Il/La ___? Lo/La ___. I/Le ___? Li/Le ___.",
            model: "La palla? La usavo ogni giorno. I cartoni? Li guardavo dopo scuola. — ¿La pelota? La usaba todos los días. ¿Los dibujos? Los veía después de la escuela."
          },
          quiz: {
            title: "Haz concordar el pronombre",
            prompt: "Sustituye «le bambole»: «___ compravo al mercato».",
            options: ["Le", "Li", "Lo"],
            answer: "Le",
            feedback: "Le bambole es femenino plural, por eso se usa le."
          }
        })
      ]
    },
    {
      id: "a2-contatti",
      title: "Paquetes, mensajes y contactos",
      lessons: [
        createItalianA2Lesson({
          id: "a2-contatti-1",
          title: "Enviar y recoger un paquete",
          objective: "Explicar qué envías, completar datos básicos y preguntar por una entrega.",
          vocabulary: [
            ["il pacco", "el paquete", "Il pacco è pronto per la spedizione.", "El paquete está listo para el envío."],
            ["la spedizione", "el envío", "La spedizione arriva domani.", "El envío llega mañana."],
            ["il mittente", "el remitente", "Scrivi il nome del mittente.", "Escribe el nombre del remitente."],
            ["il destinatario", "el destinatario", "Il destinatario abita a Bologna.", "El destinatario vive en Bolonia."],
            ["il francobollo", "el sello", "Mi serve un francobollo.", "Necesito un sello."],
            ["la ricevuta", "el recibo", "Conserva la ricevuta.", "Guarda el recibo."],
            ["spedire", "enviar", "Vorrei spedire questo pacco.", "Quisiera enviar este paquete."],
            ["ritirare", "recoger", "Posso ritirare il pacco oggi?", "¿Puedo recoger el paquete hoy?"],
            ["il modulo", "el formulario", "Compilo il modulo allo sportello.", "Completo el formulario en la ventanilla."],
            ["lo sportello", "la ventanilla", "Lo sportello chiude alle quattro.", "La ventanilla cierra a las cuatro."]
          ],
          grammar: {
            title: "Pronombres directos con passato prossimo",
            explanation: "Cuando lo, la, li o le precede a avere en passato prossimo, el participio concuerda a menudo con el objeto sustituido. El pronombre va antes del auxiliar: la lettera → l'ho spedita.",
            pattern: "l'ho spedito · l'ho spedita · li ho spediti · le ho spedite",
            examples: [
              { target: "La ricevuta? L'ho conservata.", translation: "¿El recibo? Lo he guardado." },
              { target: "I pacchi? Li abbiamo spediti stamattina.", translation: "¿Los paquetes? Los enviamos esta mañana." }
            ],
            tip: "Primero identifica el objeto y su género y número; después elige el pronombre y la terminación del participio."
          },
          fill: {
            title: "Completa con pronombre y participio",
            prompt: "La lettera? ___ ho sped___ ieri.",
            answer: "L'",
            acceptedAnswers: ["L'", "L’", "l'", "l’"],
            hint: "Letterа es femenino singular: completa como «L'ho spedita»."
          },
          dialogue: {
            title: "Preguntar por una entrega",
            scene: "En la oficina postal confirmas si el paquete ya salió.",
            speaker: "Empleado",
            prompt: "Ha spedito la scatola?",
            promptEs: "¿Ha enviado la caja?",
            answer: "Sì, l'ho spedita ieri e ho conservato la ricevuta.",
            answerEs: "Sí, la envié ayer y guardé el recibo.",
            wrong: "Sì, l'ho spedito ieri e ho conservato la ricevuta.",
            wrongEs: "Sí, lo envié ayer y guardé el recibo."
          },
          production: {
            title: "Explica el recorrido de un envío",
            prompt: "Describe el paquete, cuándo lo enviaste y qué comprobante conservaste.",
            frame: "Il pacco ___. L'ho ___ ieri. La ricevuta l'ho ___.",
            model: "Il pacco è partito ieri. L'ho spedito allo sportello e ho conservato la ricevuta. — El paquete salió ayer. Lo envié en la ventanilla y guardé el recibo."
          },
          quiz: {
            title: "Comprueba la concordancia",
            prompt: "«Le lettere? ___ ho spedite ieri».",
            options: ["Le", "Li", "La"],
            answer: "Le",
            feedback: "Le lettere es femenino plural; el pronombre es le y el participio termina en -e: spedite."
          }
        }),
        createItalianA2Lesson({
          id: "a2-contatti-2",
          title: "Llamar y pedir un favor",
          objective: "Referirte a la persona destinataria de una llamada o de un mensaje.",
          vocabulary: [
            ["la telefonata", "la llamada", "Aspetto una telefonata importante.", "Espero una llamada importante."],
            ["il messaggio", "el mensaje", "Ti mando un messaggio più tardi.", "Te envío un mensaje más tarde."],
            ["rispondere", "contestar", "Puoi rispondere al telefono?", "¿Puedes contestar el teléfono?"],
            ["richiamare", "devolver la llamada", "La richiamo dopo la riunione.", "La vuelvo a llamar después de la reunión."],
            ["lasciare detto", "dejar dicho", "Le lascio detto che ho chiamato.", "Le dejo dicho que llamé."],
            ["il collega", "el compañero de trabajo", "Il collega è in riunione.", "El compañero está en una reunión."],
            ["la segreteria", "el contestador", "Lascia un messaggio in segreteria.", "Deja un mensaje en el contestador."],
            ["il numero", "el número", "Mi può dare il suo numero?", "¿Me puede dar su número?"],
            ["avvisare", "avisar", "Avviso mia sorella del ritardo.", "Aviso a mi hermana del retraso."],
            ["il ritardo", "el retraso", "Sono in ritardo di dieci minuti.", "Tengo diez minutos de retraso."]
          ],
          grammar: {
            title: "Pronombres indirectos",
            explanation: "Los pronombres indirectos sustituyen a la persona precedida por a: mi, ti, gli, le, ci, vi, gli. Se colocan normalmente antes del verbo conjugado. En el trato formal, Le se escribe con mayúscula en muchos textos.",
            pattern: "a me → mi · a te → ti · a lui → gli\na lei / a Lei → le / Le · a noi → ci",
            examples: [
              { target: "Telefono a Luca. → Gli telefono.", translation: "Llamo a Luca. → Lo llamo por teléfono." },
              { target: "Scrivo a mia sorella. → Le scrivo.", translation: "Escribo a mi hermana. → Le escribo." }
            ],
            tip: "No confundas gli/le indirectos (a él/a ella) con lo/la directos (lo/la)."
          },
          fill: {
            title: "Sustituye a la persona",
            prompt: "Scrivo a mia sorella ogni sera. ___ scrivo ogni sera.",
            answer: "Le",
            acceptedAnswers: ["Le", "le"],
            hint: "A mia sorella indica destinataria femenina singular: le."
          },
          dialogue: {
            title: "Dejar un mensaje",
            scene: "Llamas a una oficina y la persona que buscas no está.",
            speaker: "Recepcionista",
            prompt: "La signora Riva non è in ufficio. Vuole lasciare un messaggio?",
            promptEs: "La señora Riva no está en la oficina. ¿Quiere dejar un mensaje?",
            answer: "Sì, le può dire che la richiamo alle tre?",
            answerEs: "Sí, ¿le puede decir que la vuelvo a llamar a las tres?",
            wrong: "Sì, lo può dire che la richiamo alle tre?",
            wrongEs: "Sí, ¿lo puede decir que la vuelvo a llamar a las tres?"
          },
          production: {
            title: "Redacta un mensaje breve",
            prompt: "Deja un mensaje para un compañero: indica quién llamó, por qué y cuándo devolverás la llamada.",
            frame: "Ciao ___. Ti/Gli/Le scrivo perché ___. Ti/Gli/La richiamo ___.",
            model: "Ciao Paolo, ti scrivo perché la riunione è cambiata. Ti richiamo alle tre. — Hola, Paolo, te escribo porque cambió la reunión. Te llamo a las tres."
          },
          quiz: {
            title: "Distingue complemento indirecto",
            prompt: "¿Qué pronombre sustituye «a Marco» en «Telefono a Marco»?",
            options: ["Gli", "Lo", "La"],
            answer: "Gli",
            feedback: "La persona va precedida por a; el pronombre indirecto para a lui es gli."
          }
        }),
        createItalianA2Lesson({
          id: "a2-contatti-3",
          title: "Pronombres junto a un infinitivo",
          objective: "Colocar pronombres directos o indirectos con verbos modales e infinitivos.",
          vocabulary: [
            ["potere", "poder", "Posso ritirare il pacco?", "¿Puedo recoger el paquete?"],
            ["dovere", "deber", "Devo compilare il modulo.", "Debo completar el formulario."],
            ["volere", "querer", "Voglio chiamare il corriere.", "Quiero llamar al mensajero."],
            ["il corriere", "el mensajero", "Il corriere arriva nel pomeriggio.", "El mensajero llega por la tarde."],
            ["l'indirizzo", "la dirección", "Devo controllare l'indirizzo.", "Debo revisar la dirección."],
            ["la firma", "la firma", "Manca la firma sul modulo.", "Falta la firma en el formulario."],
            ["il contenuto", "el contenido", "Descrivi il contenuto del pacco.", "Describe el contenido del paquete."],
            ["consegnare", "entregar", "Possono consegnarlo domani.", "Pueden entregarlo mañana."],
            ["avere bisogno", "necesitar", "Ho bisogno di un'altra copia.", "Necesito otra copia."],
            ["la copia", "la copia", "Devo farne una copia.", "Debo hacer una copia."]
          ],
          grammar: {
            title: "Pronombres con potere, dovere y volere",
            explanation: "Con potere, dovere y volere, el pronombre puede ir antes del verbo conjugado o unirse al infinitivo, que pierde la -e final: lo posso spedire / posso spedirlo.",
            pattern: "lo devo fare / devo farlo\nle voglio scrivere / voglio scriverle",
            examples: [
              { target: "Devo compilare il modulo. → Devo compilarlo.", translation: "Debo completar el formulario. → Debo completarlo." },
              { target: "Posso telefonarle domani.", translation: "Puedo llamarla mañana." }
            ],
            tip: "Al unir el pronombre, elimina la -e final del infinitivo: consegnare + lo → consegnarlo."
          },
          fill: {
            title: "Une infinitivo y pronombre",
            prompt: "Devo controllare l'indirizzo. Devo controllar__.",
            answer: "lo",
            hint: "Sustituye il indirizzo por lo y únelo al infinitivo."
          },
          dialogue: {
            title: "Resolver un dato incorrecto",
            scene: "Te avisan que la dirección del paquete podría estar incompleta.",
            speaker: "Empleado",
            prompt: "Vuole controllare l'indirizzo?",
            promptEs: "¿Quiere revisar la dirección?",
            answer: "Sì, devo controllarlo prima della consegna.",
            answerEs: "Sí, debo revisarlo antes de la entrega.",
            wrong: "Sì, lo controllato prima della consegna.",
            wrongEs: "Sí, lo revisado antes de la entrega."
          },
          production: {
            title: "Explica qué tienes que hacer",
            prompt: "Enumera tres pasos para enviar un paquete usando al menos dos pronombres unidos a infinitivos.",
            frame: "Devo ___lo/la. Poi posso ___lo/la. Infine voglio ___.",
            model: "Devo compilare il modulo e firmarlo. Poi posso spedirlo. — Debo completar el formulario y firmarlo. Después puedo enviarlo."
          },
          quiz: {
            title: "Coloca correctamente el pronombre",
            prompt: "¿Cuál es una forma correcta de decir «puedo enviarlo»?",
            options: ["Posso spedirlo.", "Posso lo spedire.", "Posso spedire lo."],
            answer: "Posso spedirlo.",
            feedback: "El pronombre se une al infinitivo, que pierde la -e final: spedire + lo → spedirlo."
          }
        })
      ]
    },
    {
      id: "a2-istruzioni",
      title: "Instrucciones, recetas y servicios",
      lessons: [
        createItalianA2Lesson({
          id: "a2-istruzioni-1",
          title: "Seguir una receta",
          objective: "Comprender y dar instrucciones sencillas para preparar un plato.",
          vocabulary: [
            ["l'ingrediente", "el ingrediente", "Prepara tutti gli ingredienti.", "Prepara todos los ingredientes."],
            ["la farina", "la harina", "Aggiungi la farina poco a poco.", "Añade la harina poco a poco."],
            ["l'impasto", "la masa", "Mescola bene l'impasto.", "Mezcla bien la masa."],
            ["bollire", "hervir", "Fai bollire l'acqua.", "Haz hervir el agua."],
            ["mescolare", "mezclar", "Mescola la salsa ogni tanto.", "Mezcla la salsa de vez en cuando."],
            ["aggiungere", "añadir", "Aggiungi un po' di sale.", "Añade un poco de sal."],
            ["il fuoco", "el fuego", "Cuoci la salsa a fuoco lento.", "Cocina la salsa a fuego lento."],
            ["la pentola", "la olla", "Metti la pasta nella pentola.", "Pon la pasta en la olla."],
            ["scolare", "escurrir", "Scola la pasta con attenzione.", "Escurre la pasta con cuidado."],
            ["il cucchiaio", "la cuchara", "Usa un cucchiaio di legno.", "Usa una cuchara de madera."]
          ],
          grammar: {
            title: "Imperativo afirmativo: tu, noi y voi",
            explanation: "El imperativo sirve para dar instrucciones, invitaciones o consejos. Con muchos verbos en -are, tu termina en -a; noi y voi se parecen al presente: mescoliamo, mescolate.",
            pattern: "mescolare: mescola · mescoliamo · mescolate\nprendere: prendi · prendiamo · prendete",
            examples: [
              { target: "Aggiungi il sale e mescola la salsa.", translation: "Añade la sal y mezcla la salsa." },
              { target: "Tagliamo le verdure e accendete il forno.", translation: "Cortemos las verduras y enciendan el horno." }
            ],
            tip: "Los imperativos de andare, fare, dare y stare con tu suelen aparecer como va', fa', da', sta'."
          },
          fill: {
            title: "Da una instrucción",
            prompt: "Tu: ___ (aggiungere) un po' d'acqua e ___ (mescolare).",
            answer: "Aggiungi",
            hint: "Con tu, aggiungere forma aggiungi; el segundo verbo es mescola."
          },
          dialogue: {
            title: "Explicar un paso de cocina",
            scene: "Un amigo te ayuda a preparar una salsa y pregunta qué debe hacer.",
            speaker: "Amigo",
            prompt: "Che cosa faccio con le verdure?",
            promptEs: "¿Qué hago con las verduras?",
            answer: "Tagliale e aggiungile alla pentola.",
            answerEs: "Córtalas y añádelas a la olla.",
            wrong: "Le tagliare e le aggiunge alla pentola.",
            wrongEs: "Cortarlas y añadirlas a la olla."
          },
          production: {
            title: "Escribe una receta sencilla",
            prompt: "Da cuatro instrucciones para preparar una comida que conozcas.",
            frame: "Prima ___. Poi ___. Dopo ___. Infine ___.",
            model: "Prima taglia le verdure. Poi aggiungi l'olio. Dopo mescola tutto. — Primero corta las verduras. Después añade el aceite. Luego mezcla todo."
          },
          quiz: {
            title: "Elige el imperativo de tu",
            prompt: "¿Cómo se da la instrucción informal «habla» a partir de parlare?",
            options: ["Parla!", "Parli!", "Parlate!"],
            answer: "Parla!",
            feedback: "En los verbos regulares en -are, el imperativo de tu termina en -a."
          }
        }),
        createItalianA2Lesson({
          id: "a2-istruzioni-2",
          title: "Dar instrucciones de trabajo",
          objective: "Dar instrucciones a una persona o a un grupo, incluyendo órdenes negativas.",
          vocabulary: [
            ["la cucina", "la cocina", "La cucina deve essere pulita.", "La cocina debe estar limpia."],
            ["la lavastoviglie", "el lavavajillas", "Carica la lavastoviglie.", "Carga el lavavajillas."],
            ["il lavandino", "el fregadero", "Pulisci il lavandino per ultimo.", "Limpia el fregadero al final."],
            ["la spazzatura", "la basura", "Porta fuori la spazzatura.", "Saca la basura."],
            ["il pavimento", "el suelo", "Lava il pavimento con acqua.", "Lava el suelo con agua."],
            ["il disinfettante", "el desinfectante", "Usa il disinfettante sul piano.", "Usa desinfectante en la encimera."],
            ["il turno", "el turno", "Il turno finisce alle sei.", "El turno termina a las seis."],
            ["il collega", "el compañero", "Chiedi aiuto al collega.", "Pide ayuda al compañero."],
            ["riordinare", "ordenar", "Riordina gli attrezzi dopo l'uso.", "Ordena las herramientas después de usarlas."],
            ["vietato", "prohibido", "È vietato fumare in cucina.", "Está prohibido fumar en la cocina."]
          ],
          grammar: {
            title: "Imperativo negativo y formas corteses",
            explanation: "Con tu, la negación suele construirse con non + infinitivo: non toccare. Para usted se usa el presente de subjuntivo con valor de imperativo: apra, pulisca. Para un grupo se usa voi: aprite, pulite.",
            pattern: "tu: Non toccare! · Lei: Apra la porta.\nvoi: Pulite il piano. · noi: Puliamo insieme.",
            examples: [
              { target: "Non lasciare i piatti nel lavandino.", translation: "No dejes los platos en el fregadero." },
              { target: "Signora, aspetti un momento, per favore.", translation: "Señora, espere un momento, por favor." }
            ],
            tip: "No uses el infinitivo negativo con Lei: la forma cortés es Non tocchi, non Non toccare."
          },
          fill: {
            title: "Elige una instrucción negativa",
            prompt: "A un compañero: Non ___ (lasciare) i piatti nel lavandino.",
            answer: "lasciare",
            hint: "Con tu, non va seguido del infinitivo."
          },
          dialogue: {
            title: "Pedir ayuda con cortesía",
            scene: "En una cocina compartida necesitas pedir a una persona desconocida que espere.",
            speaker: "Visitante",
            prompt: "Devo entrare subito?",
            promptEs: "¿Debo entrar enseguida?",
            answer: "No, aspetti un momento, per favore.",
            answerEs: "No, espere un momento, por favor.",
            wrong: "No, aspetta un momento, per favore.",
            wrongEs: "No, espera un momento, por favor (informal)."
          },
          production: {
            title: "Prepara una lista de trabajo",
            prompt: "Escribe cuatro instrucciones para preparar una habitación o un espacio de trabajo.",
            frame: "Prima ___. Non ___. Poi ___. Per favore, ___.",
            model: "Prima aprite le finestre. Non lasciate gli attrezzi sul pavimento. — Primero abran las ventanas. No dejen las herramientas en el suelo."
          },
          quiz: {
            title: "Distingue tú y Lei",
            prompt: "¿Qué instrucción es formal y cortés para una persona desconocida?",
            options: ["Aspetti un momento.", "Aspetta un momento.", "Aspettate un momento."],
            answer: "Aspetti un momento.",
            feedback: "Aspetti es la forma de imperativo cortés de Lei."
          }
        }),
        createItalianA2Lesson({
          id: "a2-istruzioni-3",
          title: "Limpiar una habitación de hotel",
          objective: "Dar instrucciones ordenadas y sustituir objetos por pronombres unidos al imperativo.",
          vocabulary: [
            ["la camera", "la habitación", "La camera è pronta.", "La habitación está lista."],
            ["le lenzuola", "las sábanas", "Cambia le lenzuola ogni giorno.", "Cambia las sábanas cada día."],
            ["l'asciugamano", "la toalla", "Metti un asciugamano pulito.", "Pon una toalla limpia."],
            ["il cuscino", "la almohada", "Sistema il cuscino sul letto.", "Coloca la almohada en la cama."],
            ["il balcone", "el balcón", "Controlla anche il balcone.", "Revisa también el balcón."],
            ["spolverare", "quitar el polvo", "Spolvera i mobili.", "Quita el polvo de los muebles."],
            ["svuotare", "vaciar", "Svuota il cestino.", "Vacía la papelera."],
            ["l'aspirapolvere", "la aspiradora", "Passa l'aspirapolvere sul tappeto.", "Pasa la aspiradora por la alfombra."],
            ["la doccia", "la ducha", "Pulisci la doccia.", "Limpia la ducha."],
            ["la biancheria", "la ropa de cama", "Prepara la biancheria pulita.", "Prepara la ropa de cama limpia."]
          ],
          grammar: {
            title: "Pronombres unidos al imperativo afirmativo",
            explanation: "Con el imperativo afirmativo de tu, noi y voi, los pronombres directos se unen al final: pulisci + la → puliscila; cambiate + le → cambiatele. La forma noi también admite la unión.",
            pattern: "Tu: cambiala! · Noi: cambiamola!\nVoi: cambiatele! · Lei: la cambi, per favore.",
            examples: [
              { target: "Il letto? Rifallo, per favore.", translation: "¿La cama? Hazla de nuevo, por favor." },
              { target: "Le lenzuola? Cambiatele oggi.", translation: "¿Las sábanas? Cámbienlas hoy." }
            ],
            tip: "Con Lei, el pronombre suele ir delante: La cambi, per favore. Con tu afirmativo se une: cambiala."
          },
          fill: {
            title: "Une el pronombre al imperativo",
            prompt: "La camera? ___ (pulire + la) prima delle dieci.",
            answer: "Puliscila",
            acceptedAnswers: ["Puliscila", "puliscila"],
            hint: "Con tu, pulire forma pulisci; al unir la, duplica la consonante del pronombre: puliscila."
          },
          dialogue: {
            title: "Organizar la limpieza",
            scene: "La supervisora reparte las tareas a un equipo.",
            speaker: "Supervisora",
            prompt: "Le lenzuola sono sporche. Che cosa facciamo?",
            promptEs: "Las sábanas están sucias. ¿Qué hacemos?",
            answer: "Cambiamole e prepariamo gli asciugamani puliti.",
            answerEs: "Cambiémoslas y preparemos las toallas limpias.",
            wrong: "Le cambiamo ieri.",
            wrongEs: "Las cambiamos ayer."
          },
          production: {
            title: "Da instrucciones para preparar una habitación",
            prompt: "Escribe una secuencia de cuatro pasos usando al menos dos pronombres unidos al imperativo.",
            frame: "Svuota il cestino: svuotalo. Cambia ___. Poi ___.",
            model: "Spolvera i mobili e puliscili. Cambia le lenzuola e cambiale prima di preparare il letto. — Quita el polvo de los muebles y límpialos. Cambia las sábanas antes de hacer la cama."
          },
          quiz: {
            title: "Forma un imperativo con pronombre",
            prompt: "¿Cómo dices «ordénala» a partir de riordinare + la?",
            options: ["Riordinala!", "La riordina!", "Riordinarela!"],
            answer: "Riordinala!",
            feedback: "El pronombre se une al imperativo afirmativo de tu; el infinitivo pierde la -e."
          }
        })
      ]
    },
    {
      id: "a2-futuro",
      title: "Fiestas, planes y viajes",
      lessons: [
        createItalianA2Lesson({
          id: "a2-futuro-1",
          title: "Hablar de las próximas vacaciones",
          objective: "Describir planes futuros y desplazamientos durante una festividad.",
          vocabulary: [
            ["la festività", "la festividad", "La festività cade di lunedì.", "La festividad cae en lunes."],
            ["le vacanze", "las vacaciones", "Durante le vacanze visiterò mia zia.", "Durante las vacaciones visitaré a mi tía."],
            ["il paese d'origine", "el país de origen", "Tornerò nel mio paese d'origine.", "Volveré a mi país de origen."],
            ["il pullman", "el autobús de larga distancia", "Viaggeremo in pullman.", "Viajaremos en autobús."],
            ["il biglietto", "el billete", "Comprerò il biglietto online.", "Compraré el billete por internet."],
            ["il parente", "el pariente", "Vedrò i miei parenti.", "Veré a mis parientes."],
            ["la settimana", "la semana", "Resteremo una settimana.", "Nos quedaremos una semana."],
            ["la festa", "la celebración", "Organizzeranno una festa in piazza.", "Organizarán una fiesta en la plaza."],
            ["libero", "libre", "Sarò libero sabato.", "Estaré libre el sábado."],
            ["festeggiare", "celebrar", "Festeggeremo con gli amici.", "Celebraremos con los amigos."]
          ],
          grammar: {
            title: "Futuro semplice regular",
            explanation: "El futuro simple expresa planes, predicciones y hechos posteriores. En los verbos en -are, la a cambia a e antes de las terminaciones. En -ere y -ire se mantiene la vocal de la raíz.",
            pattern: "parlare → parlerò · parlerai · parlerà\nleggere → leggerò · dormire → dormirò",
            examples: [
              { target: "Durante le feste tornerò a casa.", translation: "Durante las fiestas volveré a casa." },
              { target: "Visiteremo il centro e mangeremo insieme.", translation: "Visitaremos el centro y comeremos juntos." }
            ],
            tip: "Los pronombres pueden omitirse, pero las terminaciones distinguen la persona: tornerò (yo), torneranno (ellos)."
          },
          fill: {
            title: "Completa un plan",
            prompt: "L'estate prossima noi ___ (visitare) la Sicilia.",
            answer: "visiteremo",
            hint: "En -are, cambia a por e y añade la terminación -emo de noi."
          },
          dialogue: {
            title: "Preguntar por los planes",
            scene: "Un compañero te pregunta qué harás durante las próximas fiestas.",
            speaker: "Compañero",
            prompt: "Che cosa farai durante le vacanze?",
            promptEs: "¿Qué harás durante las vacaciones?",
            answer: "Tornerò nel mio paese e vedrò la mia famiglia.",
            answerEs: "Volveré a mi país y veré a mi familia.",
            wrong: "Tornavo nel mio paese ogni estate.",
            wrongEs: "Volvía a mi país cada verano."
          },
          production: {
            title: "Planifica una festividad",
            prompt: "Cuenta a dónde irás, con quién estarás y qué harás.",
            frame: "Durante le prossime vacanze andrò a ___. Viaggerò in ___. Vedrò ___.",
            model: "Durante le vacanze andrò a Torino in treno e vedrò i miei cugini. — Durante las vacaciones iré a Turín en tren y veré a mis primos."
          },
          quiz: {
            title: "Forma el futuro de un verbo en -are",
            prompt: "Completa «Domani noi ___ (lavorare) fino alle cinque».",
            options: ["lavoreremo", "lavoriamo", "lavoravamo"],
            answer: "lavoreremo",
            feedback: "El futuro de lavorare cambia a por e y usa -emo con noi."
          }
        }),
        createItalianA2Lesson({
          id: "a2-futuro-2",
          title: "Hacer una reserva",
          objective: "Reservar alojamiento y usar formas frecuentes irregulares del futuro.",
          vocabulary: [
            ["prenotare", "reservar", "Vorrei prenotare una camera.", "Quisiera reservar una habitación."],
            ["la pensione", "la pensión", "La pensione è vicino alla stazione.", "La pensión está cerca de la estación."],
            ["la camera doppia", "la habitación doble", "Avete una camera doppia?", "¿Tienen una habitación doble?"],
            ["il bagno in comune", "el baño compartido", "Il bagno è in comune.", "El baño es compartido."],
            ["la colazione", "el desayuno", "La colazione non è inclusa.", "El desayuno no está incluido."],
            ["il prezzo totale", "el precio total", "Qual è il prezzo totale?", "¿Cuál es el precio total?"],
            ["l'acconto", "el anticipo", "È necessario versare un acconto.", "Es necesario pagar un anticipo."],
            ["confermare", "confirmar", "Confermerò la prenotazione domani.", "Confirmaré la reserva mañana."],
            ["il ritardo", "el retraso", "Il treno arriverà in ritardo.", "El tren llegará con retraso."],
            ["la disponibilità", "la disponibilidad", "C'è disponibilità per venerdì?", "¿Hay disponibilidad para el viernes?"]
          ],
          grammar: {
            title: "Futuro irregular frecuente",
            explanation: "Algunos verbos forman el futuro con una raíz irregular: essere → sar-, avere → avr-, andare → andr-, fare → far-, venire → verr-, potere → potr-, volere → vorr-, dovere → dovr-.",
            pattern: "sarò · avrò · andrò · farò · verrò\npotrò · vorrò · dovrò",
            examples: [
              { target: "Arriveremo alle nove e avremo una camera libera.", translation: "Llegaremos a las nueve y tendremos una habitación libre." },
              { target: "Potrò confermare la prenotazione domani.", translation: "Podré confirmar la reserva mañana." }
            ],
            tip: "Aprende la raíz junto con el infinitivo; las terminaciones del futuro siguen siendo regulares."
          },
          fill: {
            title: "Usa una raíz irregular",
            prompt: "Domani ___ (essere) in albergo dopo le otto.",
            answer: "sarò",
            hint: "La raíz futura de essere es sar-."
          },
          dialogue: {
            title: "Confirmar una reserva",
            scene: "Llamas a un alojamiento para confirmar la hora de llegada.",
            speaker: "Recepcionista",
            prompt: "A che ora arriverà?",
            promptEs: "¿A qué hora llegará?",
            answer: "Arriverò verso le nove, ma il treno potrebbe avere un ritardo.",
            answerEs: "Llegaré sobre las nueve, pero el tren podría retrasarse.",
            wrong: "Arrivavo alle nove ogni giorno.",
            wrongEs: "Llegaba a las nueve cada día."
          },
          production: {
            title: "Escribe un diálogo de reserva",
            prompt: "Solicita una habitación, pregunta por el precio y explica a qué hora llegarás.",
            frame: "Vorrei prenotare ___. Arriverò ___. Quanto costerà ___?",
            model: "Vorrei prenotare una camera per due persone. Arriveremo venerdì sera. — Quisiera reservar una habitación para dos personas. Llegaremos el viernes por la noche."
          },
          quiz: {
            title: "Reconoce la raíz irregular",
            prompt: "¿Cuál es el futuro correcto de avere para io?",
            options: ["avrò", "averò", "avevo"],
            answer: "avrò",
            feedback: "Avere pierde la e antes de la r: av- + -rò forma avrò."
          }
        }),
        createItalianA2Lesson({
          id: "a2-futuro-3",
          title: "Usar ci para hablar de lugares y necesidades",
          objective: "Sustituir lugares o asuntos con ci y preguntar cuánto tiempo o qué recursos hacen falta.",
          vocabulary: [
            ["il percorso", "el recorrido", "Il percorso dura un'ora.", "El recorrido dura una hora."],
            ["la durata", "la duración", "Qual è la durata del viaggio?", "¿Cuál es la duración del viaje?"],
            ["il cambio", "el transbordo", "Il cambio è a Firenze.", "El transbordo es en Florencia."],
            ["la coincidenza", "la conexión", "Ho una coincidenza alle dieci.", "Tengo una conexión a las diez."],
            ["il bagaglio", "el equipaje", "Il bagaglio è leggero.", "El equipaje es ligero."],
            ["il posto", "el asiento", "C'è un posto vicino al finestrino?", "¿Hay un asiento junto a la ventana?"],
            ["il tempo", "el tiempo", "Quanto tempo ci vuole?", "¿Cuánto tiempo hace falta?"],
            ["il documento", "el documento", "Ci vuole un documento valido.", "Hace falta un documento válido."],
            ["la pazienza", "la paciencia", "Per organizzare il viaggio ci vuole pazienza.", "Para organizar el viaje hace falta paciencia."],
            ["il chilometro", "el kilómetro", "Ci sono cento chilometri.", "Hay cien kilómetros."]
          ],
          grammar: {
            title: "Ci locativo y ci vuole / ci vogliono",
            explanation: "Ci puede sustituir un lugar ya mencionado (ci vado = voy allí) o aparecer en expresiones como ci vuole/ci vogliono, que concuerdan con lo necesario: ci vuole un documento, ci vogliono due ore.",
            pattern: "Vai a Roma? Sì, ci vado.\nci vuole + singular · ci vogliono + plural",
            examples: [
              { target: "Per arrivare in centro ci vuole mezz'ora.", translation: "Para llegar al centro hace falta media hora." },
              { target: "Ci vogliono due biglietti e un documento.", translation: "Hacen falta dos billetes y un documento." }
            ],
            tip: "Elige vuole o vogliono según el sustantivo: ci vuole pazienza, ci vogliono tre ore."
          },
          fill: {
            title: "Expresa qué hace falta",
            prompt: "Per arrivare alla stazione ___ venti minuti.",
            answer: "ci vogliono",
            hint: "Venti minuti es plural; usa la forma plural."
          },
          dialogue: {
            title: "Preguntar por un recorrido",
            scene: "En una estación quieres saber cuánto dura el trayecto y si hay conexión.",
            speaker: "Viajera",
            prompt: "Quanto tempo ci vuole per arrivare a Roma?",
            promptEs: "¿Cuánto tiempo hace falta para llegar a Roma?",
            answer: "Ci vogliono circa due ore e c'è un cambio a Firenze.",
            answerEs: "Hacen falta unas dos horas y hay un transbordo en Florencia.",
            wrong: "Ci vuole due ore e vado ci.",
            wrongEs: "Hace falta dos horas y voy allí (orden incorrecto)."
          },
          production: {
            title: "Explica un trayecto",
            prompt: "Planea una ruta: di cuánto tiempo hace falta, qué billetes necesitas y dónde harás el transbordo.",
            frame: "Per arrivare a ___ ci vuole/vogliono ___. Ci vado in ___.",
            model: "Per arrivare al mare ci vogliono due ore. Ci vado in treno e faccio un cambio a Bologna. — Para llegar al mar hacen falta dos horas. Voy allí en tren y hago un transbordo en Bolonia."
          },
          quiz: {
            title: "Haz concordar la expresión",
            prompt: "Completa: «Per il viaggio ___ tre biglietti».",
            options: ["ci vogliono", "ci vuole", "ci vado"],
            answer: "ci vogliono",
            feedback: "Tre biglietti es plural; la expresión concuerda en plural."
          }
        })
      ]
    },
    {
      id: "a2-condizionale",
      title: "Deseos, hipótesis y peticiones corteses",
      lessons: [
        createItalianA2Lesson({
          id: "a2-condizionale-1",
          title: "Expresar deseos y posibilidades",
          objective: "Hablar de deseos y situaciones hipotéticas usando el condizionale presente.",
          vocabulary: [
            ["il desiderio", "el deseo", "Il mio desiderio è continuare a studiare.", "Mi deseo es seguir estudiando."],
            ["il progetto", "el proyecto", "Vorrei realizzare un progetto.", "Quisiera realizar un proyecto."],
            ["risparmiare", "ahorrar", "Risparmierei per comprare una casa.", "Ahorraría para comprar una casa."],
            ["viaggiare", "viajar", "Viaggerei per tutta l'Europa.", "Viajaría por toda Europa."],
            ["investire", "invertir", "Investirei in un corso di lingua.", "Invertiría en un curso de idiomas."],
            ["la possibilità", "la posibilidad", "Avremmo una possibilità migliore.", "Tendríamos una posibilidad mejor."],
            ["il denaro", "el dinero", "Userei il denaro con attenzione.", "Usaría el dinero con cuidado."],
            ["la scelta", "la elección", "Sarebbe una scelta difficile.", "Sería una elección difícil."],
            ["smettere", "dejar", "Smetterei di lavorare per un mese.", "Dejaría de trabajar durante un mes."],
            ["dedicarsi", "dedicarse", "Mi dedicherei allo studio.", "Me dedicaría al estudio."]
          ],
          grammar: {
            title: "Condizionale presente regular",
            explanation: "El condizionale expresa deseos, posibilidades e hipótesis. Sus terminaciones son -ei, -esti, -ebbe, -emmo, -este, -ebbero. En los verbos en -are, la a cambia a e.",
            pattern: "parlerei · parleresti · parlerebbe\nleggerei · dormirei",
            examples: [
              { target: "Con più tempo, studierei italiano ogni giorno.", translation: "Con más tiempo, estudiaría italiano todos los días." },
              { target: "Viaggeremmo in treno per tutta la regione.", translation: "Viajaríamos en tren por toda la región." }
            ],
            tip: "El condicional no es un pasado: expresa una posibilidad o deseo desde el presente."
          },
          fill: {
            title: "Completa una hipótesis",
            prompt: "Con più tempo, noi ___ (viaggiare) in Italia.",
            answer: "viaggeremmo",
            hint: "Cambia a por e en -are y añade la terminación -emmo."
          },
          dialogue: {
            title: "Imaginar una posibilidad",
            scene: "Un compañero te pregunta qué harías si tuvieras un mes libre.",
            speaker: "Compañero",
            prompt: "Che cosa faresti con un mese libero?",
            promptEs: "¿Qué harías con un mes libre?",
            answer: "Viaggerei e visiterei la mia famiglia.",
            answerEs: "Viajaría y visitaría a mi familia.",
            wrong: "Ho viaggiato e visitato la mia famiglia.",
            wrongEs: "Viajé y visité a mi familia."
          },
          production: {
            title: "Imagina un proyecto",
            prompt: "Escribe tres cosas que harías si tuvieras más tiempo o una oportunidad nueva.",
            frame: "Con più tempo, ___. Mi piacerebbe ___. Inoltre ___.",
            model: "Con più tempo, studierei musica. Mi piacerebbe anche viaggiare in treno. — Con más tiempo, estudiaría música. También me gustaría viajar en tren."
          },
          quiz: {
            title: "Forma el condicional",
            prompt: "¿Cuál es la forma de noi para viaggiare?",
            options: ["viaggeremmo", "viaggeremo", "viaggiavamo"],
            answer: "viaggeremmo",
            feedback: "Viaggeremmo es condizionale de noi; viaggeremo es futuro."
          }
        }),
        createItalianA2Lesson({
          id: "a2-condizionale-2",
          title: "Pedir información en el municipio",
          objective: "Pedir ayuda y formular preguntas formales sobre documentos y trámites.",
          vocabulary: [
            ["il municipio", "el ayuntamiento", "Il municipio apre alle otto.", "El ayuntamiento abre a las ocho."],
            ["l'ufficio stranieri", "la oficina de extranjería", "L'ufficio stranieri riceve oggi.", "La oficina de extranjería atiende hoy."],
            ["il permesso di soggiorno", "el permiso de residencia", "Il permesso di soggiorno è valido.", "El permiso de residencia es válido."],
            ["la residenza", "la residencia", "Devo aggiornare la residenza.", "Debo actualizar la residencia."],
            ["il certificato", "el certificado", "Serve un certificato di residenza.", "Hace falta un certificado de residencia."],
            ["la richiesta", "la solicitud", "La richiesta è completa.", "La solicitud está completa."],
            ["il documento necessario", "el documento necesario", "Qual è il documento necessario?", "¿Cuál es el documento necesario?"],
            ["l'impiegato", "el empleado", "L'impiegato controlla il modulo.", "El empleado revisa el formulario."],
            ["lo sportello", "la ventanilla", "Prenda un numero allo sportello.", "Tome un número en la ventanilla."],
            ["l'appuntamento", "la cita", "Vorrei fissare un appuntamento.", "Quisiera concertar una cita."]
          ],
          grammar: {
            title: "Condizionale irregular y petición cortés",
            explanation: "El condicional de essere, avere, andare, fare, potere, volere y dovere tiene raíces especiales: sarei, avrei, andrei, farei, potrei, vorrei, dovrei. Vorrei, potrebbe y avrei bisogno hacen más cortés una petición.",
            pattern: "Vorrei un'informazione.\nPotrebbe aiutarmi? · Dovrei compilare il modulo.",
            examples: [
              { target: "Avrei bisogno di un certificato di residenza.", translation: "Necesitaría un certificado de residencia." },
              { target: "Potrebbe spiegarmi quali documenti servono?", translation: "¿Podría explicarme qué documentos hacen falta?" }
            ],
            tip: "Para pedir un servicio, usa vorrei o potrebbe; el tono y la fórmula cortés cuentan tanto como la conjugación."
          },
          fill: {
            title: "Formula una petición cortés",
            prompt: "Buongiorno, ___ bisogno di un'informazione.",
            answer: "avrei",
            hint: "La expresión cortés es avrei bisogno di."
          },
          dialogue: {
            title: "Solicitar información",
            scene: "En una oficina necesitas saber qué documentos llevar para una solicitud.",
            speaker: "Empleado",
            prompt: "Buongiorno, come posso aiutarla?",
            promptEs: "Buenos días, ¿cómo puedo ayudarle?",
            answer: "Buongiorno, vorrei sapere quali documenti dovrei portare.",
            answerEs: "Buenos días, quisiera saber qué documentos debería llevar.",
            wrong: "Dimmi subito quali documenti devo portare!",
            wrongEs: "¡Dime enseguida qué documentos debo llevar!"
          },
          production: {
            title: "Prepara una consulta formal",
            prompt: "Escribe tres preguntas corteses para pedir una cita, conocer los documentos y preguntar el plazo.",
            frame: "Vorrei ___. Potrebbe dirmi ___? Quanto tempo ci vorrebbe per ___?",
            model: "Vorrei fissare un appuntamento. Potrebbe dirmi quali documenti servono? — Quisiera concertar una cita. ¿Podría decirme qué documentos hacen falta?"
          },
          quiz: {
            title: "Elige una petición cortés",
            prompt: "¿Qué frase es adecuada para pedir ayuda en una oficina?",
            options: ["Potrebbe aiutarmi, per favore?", "Aiutami subito!", "Mi aiuti domani ieri."],
            answer: "Potrebbe aiutarmi, per favore?",
            feedback: "Potrebbe + infinitivo es una petición formal y cortés."
          }
        }),
        createItalianA2Lesson({
          id: "a2-condizionale-3",
          title: "Hablar de proyectos familiares",
          objective: "Expresar deseos, sugerencias y posibilidades en un proyecto de vida.",
          vocabulary: [
            ["il ricongiungimento familiare", "la reagrupación familiar", "Chiedo informazioni sul ricongiungimento familiare.", "Pido información sobre la reagrupación familiar."],
            ["il familiare", "el familiar", "Un familiare vive all'estero.", "Un familiar vive en el extranjero."],
            ["il figlio minorenne", "el hijo menor de edad", "Il figlio è minorenne.", "El hijo es menor de edad."],
            ["il requisito", "el requisito", "Quali requisiti devo soddisfare?", "¿Qué requisitos debo cumplir?"],
            ["la pratica", "el expediente", "La pratica è ancora in corso.", "El expediente sigue en trámite."],
            ["il colloquio", "la entrevista", "Avrei un colloquio con l'impiegata.", "Tendría una entrevista con la empleada."],
            ["la famiglia", "la familia", "Vorrei vivere con la mia famiglia.", "Quisiera vivir con mi familia."],
            ["il futuro", "el futuro", "Pensiamo al futuro dei bambini.", "Pensamos en el futuro de los niños."],
            ["la possibilità", "la posibilidad", "Ci sarebbe una possibilità?", "¿Habría una posibilidad?"],
            ["il consiglio", "el consejo", "Accetterei volentieri un consiglio.", "Aceptaría con gusto un consejo."]
          ],
          grammar: {
            title: "Condicional para deseos, dudas y sugerencias",
            explanation: "El condizionale presente también permite expresar una intención no confirmada, una posibilidad o una sugerencia. Puede combinarse con se para presentar una condición hipotética.",
            pattern: "Vorrei far venire la mia famiglia.\nSe fosse possibile, preferirei un appuntamento domani.",
            examples: [
              { target: "Mi piacerebbe vivere vicino ai miei figli.", translation: "Me gustaría vivir cerca de mis hijos." },
              { target: "Potremmo chiedere un consiglio all'ufficio.", translation: "Podríamos pedir consejo a la oficina." }
            ],
            tip: "Con se hipotético, A2 puede practicar el condicional como fórmula; no es necesario adelantar una explicación completa del congiuntivo."
          },
          fill: {
            title: "Expresa una posibilidad",
            prompt: "Con un appuntamento, noi ___ (potere) chiedere informazioni.",
            answer: "potremmo",
            hint: "La raíz condicional de potere es potr-; con noi añade -emmo."
          },
          dialogue: {
            title: "Preguntar por opciones",
            scene: "Conversas con un orientador sobre un trámite familiar.",
            speaker: "Orientador",
            prompt: "Quale soluzione preferirebbe?",
            promptEs: "¿Qué solución preferiría?",
            answer: "Preferirei conoscere prima i requisiti e i tempi.",
            answerEs: "Preferiría conocer primero los requisitos y los plazos.",
            wrong: "Preferisco che lei mi dà tutto.",
            wrongEs: "Prefiero que usted me da todo."
          },
          production: {
            title: "Explica un proyecto y una duda",
            prompt: "Describe un objetivo familiar o personal y formula dos preguntas corteses sobre los próximos pasos.",
            frame: "Vorrei ___. Potrei ___. Avrei bisogno di sapere ___.",
            model: "Vorrei vivere vicino alla mia famiglia. Avrei bisogno di sapere quali documenti servono. — Quisiera vivir cerca de mi familia. Necesitaría saber qué documentos hacen falta."
          },
          quiz: {
            title: "Elige una posibilidad",
            prompt: "Completa: «Con più tempo, ___ visitare l'ufficio domani».",
            options: ["potrei", "potrò", "potevo"],
            answer: "potrei",
            feedback: "Potrei es condizionale: expresa una posibilidad o propuesta."
          }
        })
      ]
    },
    {
      id: "a2-salute",
      title: "Salud, farmacia y pronombres combinados",
      lessons: [
        createItalianA2Lesson({
          id: "a2-salute-1",
          title: "Describir síntomas",
          objective: "Describir síntomas y explicar qué recomendó un profesional de salud.",
          vocabulary: [
            ["la febbre", "la fiebre", "Ho la febbre da ieri.", "Tengo fiebre desde ayer."],
            ["la tosse", "la tos", "La tosse è più forte di notte.", "La tos es más fuerte por la noche."],
            ["il mal di testa", "el dolor de cabeza", "Ho un forte mal di testa.", "Tengo un fuerte dolor de cabeza."],
            ["il raffreddore", "el resfriado", "Ha un raffreddore leggero.", "Tiene un resfriado leve."],
            ["la ricetta medica", "la receta médica", "Il medico mi ha dato la ricetta.", "El médico me dio la receta."],
            ["la farmacia", "la farmacia", "La farmacia è aperta fino alle otto.", "La farmacia está abierta hasta las ocho."],
            ["la medicina", "el medicamento", "Prenda la medicina dopo cena.", "Tome el medicamento después de cenar."],
            ["la dose", "la dosis", "La dose è scritta sulla confezione.", "La dosis está escrita en el envase."],
            ["il medico di base", "el médico de cabecera", "Chiamo il medico di base.", "Llamo al médico de cabecera."],
            ["la visita", "la consulta", "Ho una visita alle dieci.", "Tengo una consulta a las diez."]
          ],
          grammar: {
            title: "Pronombres combinados: me lo, te la, glieli",
            explanation: "Se combinan un pronombre indirecto y uno directo. Mi, ti, ci, vi y si cambian la i final por e: me lo, te la, ce li, ve le. Gli y le se combinan como glielo, gliela, glieli, gliele o gliene.",
            pattern: "mi + lo → me lo · ti + la → te la\n gli/le + li → glieli · gli/le + ne → gliene",
            examples: [
              { target: "Hai dato la medicina a Luca? → Sì, gliel'ho data.", translation: "¿Le diste el medicamento a Luca? → Sí, se lo di." },
              { target: "Porti le ricette a noi? → Ce le porti?", translation: "¿Nos traes las recetas? → ¿Nos las traes?" }
            ],
            tip: "Con un pronombre directo antes de avere en passato prossimo, el participio puede concordar: gliel'ho data."
          },
          fill: {
            title: "Combina dos pronombres",
            prompt: "Hai dato le medicine a tua madre? Sì, ___ ___ ho date.",
            answer: "gliele",
            acceptedAnswers: ["gliele"],
            hint: "A lei + le medicine se combina como gliele; después va ho date."
          },
          dialogue: {
            title: "Hablar con la farmacia",
            scene: "Una persona pregunta si ya entregaste el medicamento a tu familiar.",
            speaker: "Familiar",
            prompt: "Hai dato le medicine a tua sorella?",
            promptEs: "¿Le diste los medicamentos a tu hermana?",
            answer: "Sì, gliele ho date dopo pranzo.",
            answerEs: "Sí, se los di después del almuerzo.",
            wrong: "Sì, le li ho dato dopo pranzo.",
            wrongEs: "Sí, se los di después del almuerzo (pronombres y concordancia incorrectos)."
          },
          production: {
            title: "Explica cómo ayudarás a alguien",
            prompt: "Describe qué comprarás y a quién se lo llevarás. No compartas información médica personal.",
            frame: "Comprerò ___. Poi glielo/gliela/glieli/gliele porterò ___.",
            model: "Comprerò lo sciroppo e glielo porterò stasera. — Compraré el jarabe y se lo llevaré esta noche."
          },
          quiz: {
            title: "Combina los pronombres",
            prompt: "¿Cómo se dice «se las doy» (a ellos, las recetas)?",
            options: ["Gliele do.", "Gli le do.", "Le gli do."],
            answer: "Gliele do.",
            feedback: "Gli + le se fusionan en gliele y se colocan antes del verbo."
          }
        }),
        createItalianA2Lesson({
          id: "a2-salute-2",
          title: "Recibir una indicación médica",
          objective: "Transmitir instrucciones sobre medicamentos usando pronombres combinados y ne.",
          vocabulary: [
            ["l'antibiotico", "el antibiótico", "L'antibiotico va preso secondo le indicazioni.", "El antibiótico debe tomarse según las indicaciones."],
            ["lo sciroppo", "el jarabe", "Prenda lo sciroppo dopo i pasti.", "Tome el jarabe después de las comidas."],
            ["la compressa", "la pastilla", "Prendo una compressa con acqua.", "Tomo una pastilla con agua."],
            ["la confezione", "el envase", "La confezione è quasi finita.", "El envase casi se termina."],
            ["la prescrizione", "la prescripción", "Serve la prescrizione del medico.", "Hace falta la prescripción médica."],
            ["la quantità", "la cantidad", "Quanta medicina devo prendere?", "¿Cuánta medicina debo tomar?"],
            ["un altro", "otro", "Ne prendo un altro domani.", "Tomaré otro mañana."],
            ["finire", "terminarse", "Le compresse stanno per finire.", "Las pastillas están por terminarse."],
            ["consigliare", "recomendar", "Il medico consiglia di riposare.", "El médico recomienda descansar."],
            ["seguire", "seguir", "Segua le indicazioni del medico.", "Siga las indicaciones del médico."]
          ],
          grammar: {
            title: "Pronombres combinados con ne",
            explanation: "Ne puede sustituir una cantidad o una parte de algo. Al combinarse con un pronombre indirecto aparecen formas como me ne, te ne, ce ne y gliene: gliene do una = le doy una cantidad de eso.",
            pattern: "Hai delle compresse? → Sì, ne ho.\nQuante gliene do? → Gliene do una.",
            examples: [
              { target: "Quante compresse devo darle? Gliene dia una.", translation: "¿Cuántas pastillas debo darle? Déle una." },
              { target: "Ne abbiamo ancora due nella confezione.", translation: "Todavía tenemos dos en el envase." }
            ],
            tip: "En asuntos de salud, sigue las indicaciones profesionales reales; estos ejemplos solo practican idioma."
          },
          fill: {
            title: "Expresa una cantidad",
            prompt: "Quante compresse do a Luca? ___ do una.",
            answer: "Gliene",
            acceptedAnswers: ["Gliene", "gliene"],
            hint: "A lui + una cantidad de compresse se expresa con gliene."
          },
          dialogue: {
            title: "Transmitir una indicación",
            scene: "Le explicas a un familiar una indicación que debe confirmar en la receta.",
            speaker: "Familiar",
            prompt: "Quante compresse devo dare a Paolo?",
            promptEs: "¿Cuántas pastillas debo darle a Paolo?",
            answer: "Controlla la prescrizione; lì trovi la dose indicata.",
            answerEs: "Revisa la prescripción; allí encontrarás la dosis indicada.",
            wrong: "Dagli tutte senza leggere la ricetta.",
            wrongEs: "Dáselas todas sin leer la receta."
          },
          production: {
            title: "Resume una indicación con cuidado",
            prompt: "Practica un diálogo neutral de farmacia. Recuerda que las dosis deben confirmarse con el profesional y la receta.",
            frame: "Quante ___? Gliene ___. Prima controlliamo ___.",
            model: "Quante compresse? Ne prendo una solo come indicato nella ricetta. — ¿Cuántas pastillas? Tomo una solo como indica la receta."
          },
          quiz: {
            title: "Reconoce gliene",
            prompt: "¿Qué significa «Gliene do una» en el contexto de unas pastillas?",
            options: ["Le doy una (de ellas).", "Se las doy todas.", "Voy a dárselas mañana."],
            answer: "Le doy una (de ellas).",
            feedback: "Gliene combina a lui/a lei con ne, que expresa una cantidad o parte."
          }
        }),
        createItalianA2Lesson({
          id: "a2-salute-3",
          title: "Dar y recibir objetos con pronombres combinados",
          objective: "Usar pronombres combinados antes del verbo, con infinitivo y con imperativo.",
          vocabulary: [
            ["il certificato", "el certificado", "Il certificato è pronto.", "El certificado está listo."],
            ["la tessera sanitaria", "la tarjeta sanitaria", "Porti la tessera sanitaria alla visita.", "Lleve la tarjeta sanitaria a la consulta."],
            ["il servizio sanitario", "el servicio sanitario", "Il servizio sanitario offre assistenza.", "El servicio sanitario ofrece atención."],
            ["l'ambulatorio", "el centro médico", "L'ambulatorio è vicino alla farmacia.", "El centro médico está cerca de la farmacia."],
            ["il corpo", "el cuerpo", "Indichi la parte del corpo che le fa male.", "Indique la parte del cuerpo que le duele."],
            ["la schiena", "la espalda", "Mi fa male la schiena.", "Me duele la espalda."],
            ["la gola", "la garganta", "Ho mal di gola.", "Me duele la garganta."],
            ["la prenotazione", "la cita/reserva", "Devo spostare la prenotazione.", "Debo cambiar la cita."],
            ["consegnare", "entregar", "Consegni i documenti all'impiegata.", "Entregue los documentos a la empleada."],
            ["spiegare", "explicar", "Mi può spiegare il risultato?", "¿Me puede explicar el resultado?"]
          ],
          grammar: {
            title: "Pronombres combinados con verbo, infinitivo e imperativo",
            explanation: "Los pronombres combinados suelen ir antes del verbo conjugado: te lo porto. Pueden unirse al infinitivo (portartelo) o al imperativo afirmativo (portamelo). Con Lei se colocan antes: me lo porti.",
            pattern: "Te lo porto. · Devo portartelo.\nPortamelo! (tu) · Me lo porti, per favore? (Lei)",
            examples: [
              { target: "La tessera? Devo portargliela domani.", translation: "¿La tarjeta? Debo llevársela mañana." },
              { target: "Il certificato? Me lo consegni, per favore?", translation: "¿El certificado? ¿Me lo entrega, por favor?" }
            ],
            tip: "Las formas imperativas unidas pueden duplicar la consonante: da' + lo → dallo; porta + mi → portami."
          },
          fill: {
            title: "Une dos pronombres al infinitivo",
            prompt: "Devo portare la tessera a mia madre. Devo ___ ___ domani.",
            answer: "portargliela",
            acceptedAnswers: ["portargliela"],
            hint: "Portare + gli + la se une como portargliela."
          },
          dialogue: {
            title: "Entregar un documento",
            scene: "En una recepción te piden la tarjeta sanitaria para registrar la consulta.",
            speaker: "Recepcionista",
            prompt: "Mi porta la tessera sanitaria, per favore?",
            promptEs: "¿Me trae la tarjeta sanitaria, por favor?",
            answer: "Certo, gliela porto subito.",
            answerEs: "Claro, se la traigo enseguida.",
            wrong: "Certo, la gli porto subito.",
            wrongEs: "Claro, se la traigo enseguida (orden incorrecto)."
          },
          production: {
            title: "Representa una gestión en recepción",
            prompt: "Simula la entrega de un documento y pregunta cuándo te lo devolverán.",
            frame: "Ecco ___. Glielo/Gliela consegno. Quando può restituirmelo?",
            model: "Ecco il certificato. Glielo consegno adesso. — Aquí está el certificado. Se lo entrego ahora."
          },
          quiz: {
            title: "Elige el orden correcto",
            prompt: "¿Cómo se dice «se la llevo» (a ella, la tessera)?",
            options: ["Gliela porto.", "La gli porto.", "Le la porto."],
            answer: "Gliela porto.",
            feedback: "Le + la se combina en gliela y va antes del verbo."
          }
        })
      ]
    }
  ]
};

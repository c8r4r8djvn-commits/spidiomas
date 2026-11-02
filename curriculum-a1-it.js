function createPracticeLesson({
  id,
  title,
  objective,
  vocabulary,
  question,
  completion,
  dialogue,
  production
}) {
  const itemIds = vocabulary.map((item) => item.it);
  return {
    id,
    title,
    minutes: 5,
    objective,
    vocabulary,
    steps: [
      {
        type: "vocabulary",
        title: "Escucha y relaciona",
        instruction: "Escucha las expresiones, lee los ejemplos y repite a tu ritmo.",
        itemIds
      },
      {
        type: "multipleChoice",
        title: question.title,
        prompt: question.prompt,
        options: question.options,
        answer: question.answer,
        feedback: question.feedback
      },
      {
        type: "fillBlank",
        title: completion.title,
        prompt: completion.prompt,
        answer: completion.answer,
        acceptedAnswers: completion.acceptedAnswers || [completion.answer],
        options: completion.options,
        hint: completion.hint
      },
      {
        type: "dialogue",
        title: dialogue.title,
        scene: dialogue.scene,
        turns: dialogue.turns
      },
      {
        type: "production",
        title: production.title,
        prompt: production.prompt,
        options: production.options,
        answer: production.answer,
        frame: production.frame,
        model: production.model,
        privacyNote: production.privacyNote
      }
    ]
  };
}

function attachGrammarNotes() {
  function createGrammarNote(title, explanation, pattern, examples, tip) {
    return { type: "grammar", title, explanation, pattern, examples, tip };
  }

  const grammarNotes = {
    "saludos-1": createGrammarNote(
      "Elegir entre trato informal y formal",
      "En italiano cambian el saludo y el verbo según la confianza. Con amigos se suele usar tu; con una persona a quien tratas de usted, Lei. En escritos formales, Lei puede escribirse con mayúscula.",
      "INFORMAL: Ciao! Come stai?  ·  FORMAL: Buongiorno. Come sta?",
      [
        { it: "Ciao, Luca! Come stai?", es: "¡Hola, Luca! ¿Cómo estás? (informal)" },
        { it: "Buongiorno, signora. Come sta?", es: "Buenos días, señora. ¿Cómo está? (formal)" }
      ],
      "Ciao sirve para saludar y despedirse entre personas con confianza. En una oficina, con desconocidos, es más seguro empezar con Buongiorno o Buonasera."
    ),
    "saludos-2": createGrammarNote(
      "Presentarte con essere y chiamarsi",
      "El pronombre sujeto a menudo se omite: la terminación del verbo ya indica quién habla. Chiamarsi significa «llamarse» y cambia como otros verbos; essere sirve para decir origen o nacionalidad.",
      "io mi chiamo · tu ti chiami · lui/lei si chiama\nio sono · tu sei · lui/lei è",
      [
        { it: "Mi chiamo Ana e sono peruviana.", es: "Me llamo Ana y soy peruana." },
        { it: "Vengo dall'Ecuador e abito a Roma.", es: "Vengo de Ecuador y vivo en Roma." }
      ],
      "Las nacionalidades concuerdan con la persona: sono peruviano (masculino) / sono peruviana (femenino). Ante una vocal, da puede contraerse: dall'Ecuador."
    ),
    "saludos-3": createGrammarNote(
      "Pedir ayuda con cortesía",
      "Scusa y Scusi significan «disculpa», pero Scusi es la forma formal. Para pedir algo, coloca per favore al final o al principio; para pedir que repitan, puedes usar el verbo potere en forma formal.",
      "INFORMAL: Scusa, puoi ripetere?\nFORMAL: Scusi, può ripetere, per favore?",
      [
        { it: "Non ho capito. Può ripetere più lentamente?", es: "No he entendido. ¿Puede repetir más despacio?" },
        { it: "Grazie per l'aiuto. Prego!", es: "Gracias por la ayuda. ¡De nada!" }
      ],
      "Non ho capito se usa ho, la forma de io del verbo avere, más capito. La expresión completa se aprende como una frase útil."
    ),
    "saludos-4": createGrammarNote(
      "Leer la C y la G",
      "La C y la G tienen sonido fuerte delante de a, o, u y sonido suave delante de e, i. Se añade una h para conservar el sonido fuerte delante de e, i.",
      "C: CA / CO / CU → fuerte: casa, cosa, cucina · CE / CI → suave: cena, ciao · CHE / CHI → fuerte: che, chi\nG: GA / GO / GU → fuerte: gatto, gomma, gusto · GE / GI → suave: gelato · GHE / GHI → fuerte: spaghetti",
      [
        { it: "Ciao, ci vediamo sabato.", es: "Hola, nos vemos el sábado." },
        { it: "Che giorno è oggi?", es: "¿Qué día es hoy?" }
      ],
      "La h no se pronuncia: cambia el sonido de la letra anterior. Practica la diferencia entre ciao y chi, y entre gelato y spaghetti."
    ),
    "datos-1": createGrammarNote(
      "Preguntar por nombre e idioma",
      "Para preguntar el nombre en confianza se usa Come ti chiami?; en una oficina, Come si chiama? La forma formal usa si, como si hablaras de «usted». Para responder, se usa mi chiamo.",
      "INFORMAL: Come ti chiami? → Mi chiamo Ana.\nFORMAL: Come si chiama? → Mi chiamo Ana.\nChe lingua parli? → Parlo spagnolo.",
      [
        { it: "Come si chiama? Mi chiamo Ana García.", es: "¿Cómo se llama? Me llamo Ana García." },
        { it: "Che lingua parla? Parlo spagnolo.", es: "¿Qué idioma habla? Hablo español." }
      ],
      "No necesitas decir io: Mi chiamo ya indica «me llamo». Cognome es apellido y nome es nombre."
    ),
    "datos-2": createGrammarNote(
      "Dar una dirección y decir números",
      "Los números de teléfono se suelen comunicar cifra por cifra. Para dar una calle, se usa via antes del nombre; l'indirizzo lleva el artículo l' porque la palabra empieza por vocal.",
      "Abito in via + nombre de calle\nil numero → l'indirizzo\nzero · uno · due · tre · quattro · cinque",
      [
        { it: "Abito in via Verdi, al numero dodici.", es: "Vivo en la calle Verdi, en el número doce." },
        { it: "Il mio numero è zero, uno, due…", es: "Mi número es cero, uno, dos…" }
      ],
      "Para proteger tu privacidad, practica con una calle y un número inventados. Si no entiendes una cifra, pide: Può ripetere, cifra per cifra?"
    ),
    "datos-3": createGrammarNote(
      "Usar potere y dovere con otro verbo",
      "Potere expresa posibilidad o permiso; dovere expresa obligación o necesidad. Cuando preceden a otro verbo, este segundo verbo permanece en infinitivo.",
      "potere / dovere conjugado + infinitivo\nPosso firmare? · Devo compilare il modulo.",
      [
        { it: "Può aiutarmi a compilare il modulo?", es: "¿Puede ayudarme a completar el formulario?" },
        { it: "Devo firmare qui?", es: "¿Tengo que firmar aquí?" }
      ],
      "En el trato formal, Può corresponde a Lei. La pregunta cambia la entonación; no hace falta cambiar el orden de las palabras."
    ),
    "datos-4": createGrammarNote(
      "Decir cómo estás y preguntar la hora",
      "Stare se usa en expresiones frecuentes sobre el estado de una persona. Sus formas más útiles son sto, stai, sta, stiamo, state y stanno. Para decir la hora exacta, se suele usar è al singular y sono le en plural.",
      "Come stai? → Sto bene.\nCome sta? (formal) → Sto bene, grazie.\nÈ l'una · Sono le otto.",
      [
        { it: "Ciao, come stai? Sto bene, grazie. E tu?", es: "Hola, ¿cómo estás? Estoy bien, gracias. ¿Y tú?" },
        { it: "Scusi, che ora è? Sono le otto.", es: "Disculpe, ¿qué hora es? Son las ocho." }
      ],
      "Se dice sto bene para el estado de ánimo, pero sono le otto para la hora. A la una se dice è l'una."
    ),
    "datos-5": createGrammarNote(
      "Usar meses, colores y números grandes",
      "Los meses y los días se escriben con minúscula. Para indicar el mes de un evento se usa normalmente a; los colores suelen concordar con el sustantivo en género y número.",
      "a + mes: a maggio\nrosso → rossa → rossi → rosse\n100 cento · 1.000 mille",
      [
        { it: "Il mio compleanno è a maggio.", es: "Mi cumpleaños es en mayo." },
        { it: "Una maglietta rossa, due magliette rosse.", es: "Una camiseta roja, dos camisetas rojas." }
      ],
      "Las cuatro estaciones son la primavera, l'estate, l'autunno y l'inverno. La forma del color cambia para concordar: un libro rosso, una casa rossa."
    ),
    "familia-1": createGrammarNote(
      "Artículos y plurales de la familia",
      "Los nombres italianos tienen género. El artículo ayuda a reconocerlo y también cambia en plural: il suele pasar a i y la a le. Con varios nombres de parentesco en singular, mio o mia aparece sin artículo.",
      "il fratello → i fratelli\nla sorella → le sorelle\nmio padre · mia sorella · i miei genitori",
      [
        { it: "Mio fratello ha una sorella.", es: "Mi hermano tiene una hermana." },
        { it: "I miei genitori e le mie sorelle.", es: "Mis padres y mis hermanas." }
      ],
      "La regla de omitir el artículo con mio/mia se aplica normalmente al familiar singular: mio padre; en plural se usa: i miei genitori. Con loro se mantiene: la loro madre."
    ),
    "familia-2": createGrammarNote(
      "Conjugar verbos en -are",
      "Para conjugar un verbo regular en -are, quita -are y añade la terminación de la persona. Andare y venire son frecuentes pero irregulares, así que conviene aprender sus formas principales.",
      "abitare: io abito · tu abiti · lui/lei abita\nnoi abitiamo · voi abitate · loro abitano\nandare: vado · vai · va · andiamo · andate · vanno",
      [
        { it: "Abito a Torino e vado al lavoro.", es: "Vivo en Turín y voy al trabajo." },
        { it: "Vieni con noi? Sì, veniamo insieme.", es: "¿Vienes con nosotros? Sí, vamos juntos." }
      ],
      "Usa a delante de una ciudad: abito a Torino. La forma del verbo cambia con la persona aunque el pronombre se omita."
    ),
    "familia-3": createGrammarNote(
      "Describir a la familia y sus datos",
      "Essere sirve para identificar y describir: sono ecuatoriano/a, è mia madre. Avere expresa posesión y edad; para decir «tengo veinte años» se usa avere, no essere.",
      "essere: sono · sei · è · siamo · siete · sono\navere: ho · hai · ha · abbiamo · avete · hanno",
      [
        { it: "Mia madre è ecuadoriana e abita a Quito.", es: "Mi madre es ecuatoriana y vive en Quito." },
        { it: "Ho vent'anni. Mio fratello ha ventidue anni.", es: "Tengo veinte años. Mi hermano tiene veintidós años." }
      ],
      "La nacionalidad concuerda con la persona: ecuadoriano/ecuadoriana. Para decir cuántos años tienes, usa avere + número + anni."
    ),
    "lavoro-1": createGrammarNote(
      "Hablar del oficio con fare y lavorare",
      "Faccio il/la + oficio presenta una profesión. Lavoro come + oficio describe en qué trabajas. Con essere, el oficio suele aparecer sin artículo cuando dices simplemente quién eres.",
      "faccio il cuoco / faccio la cuoca\nlavoro come cameriere / cameriera\nsono cuoco / sono cuoca",
      [
        { it: "Faccio la cuoca e lavoro in un ristorante.", es: "Trabajo como cocinera en un restaurante." },
        { it: "Cerco lavoro come aiutante.", es: "Busco trabajo como ayudante." }
      ],
      "El artículo concuerda con el oficio cuando usas fare: il cuoco, la cuoca. No confundas lavoro (trabajo/sustantivo) con lavoro (yo trabajo/verbo)."
    ),
    "lavoro-2": createGrammarNote(
      "Reconocer las terminaciones del presente",
      "En presente, los verbos regulares forman sus terminaciones según el infinitivo. La forma de io normalmente no necesita pronombre porque ya se reconoce por la terminación.",
      "-are: io lavor-o · tu lavor-i · lei lavor-a\n-ere: io prend-o · tu prend-i · lei prend-e\n-ire: io dorm-o · tu dorm-i · lei dorm-e",
      [
        { it: "Lavoro la mattina e prendo l'autobus.", es: "Trabajo por la mañana y tomo el autobús." },
        { it: "Loro dormono; noi finiamo alle cinque.", es: "Ellos duermen; nosotros terminamos a las cinco." }
      ],
      "Algunos verbos en -ire añaden -isc- en ciertas personas: finisco, finisci, finisce, finiamo, finite, finiscono."
    ),
    "lavoro-3": createGrammarNote(
      "Dar y entender instrucciones",
      "Dovere expresa lo que hay que hacer y potere permite pedir permiso o ayuda. Ambos se conjugan y van seguidos directamente de un verbo en infinitivo.",
      "devo / devi / deve + infinitivo\nposso / puoi / può + infinitivo\nDevi pulire. · Può ripetere?",
      [
        { it: "Devo preparare la sala e pulire il tavolo.", es: "Tengo que preparar la sala y limpiar la mesa." },
        { it: "Scusi, può ripetere l'istruzione?", es: "Disculpe, ¿puede repetir la instrucción?" }
      ],
      "Para pedir algo de forma formal se usa può, con Lei: Può aiutarmi? Después del verbo modal se conserva el infinitivo: può ripetere."
    ),
    "lavoro-4": createGrammarNote(
      "Decir qué te gusta y qué hay",
      "Con piacere, la cosa que gusta funciona como sujeto: mi piace se gusta una cosa singular o una actividad; mi piacciono se gustan varias cosas. C'è introduce una cosa; ci sono introduce varias.",
      "mi piace + singular o infinitivo\nmi piacciono + plural\nc'è + singular · ci sono + plural",
      [
        { it: "Mi piace il mio lavoro. Mi piace studiare.", es: "Me gusta mi trabajo. Me gusta estudiar." },
        { it: "Mi piacciono i colleghi. In ufficio ci sono tre persone.", es: "Me gustan los compañeros. En la oficina hay tres personas." }
      ],
      "Fíjate en lo que gusta, no en la persona: la musica mi piace; i libri mi piacciono. C'è un ufficio, pero ci sono due uffici."
    )
  };

  const firstFourUnits = new Set(["saludos", "datos", "familia", "lavoro"]);
  for (const unit of window.ITALIAN_A1_CURRICULUM.units) {
    if (!firstFourUnits.has(unit.id)) continue;
    for (const lesson of unit.lessons) {
      const note = grammarNotes[lesson.id];
      if (!note) throw new Error(`Falta la explicación gramatical para ${lesson.id}.`);
      lesson.steps.splice(1, 0, note);
      lesson.minutes += 2;
    }
  }
  window.ITALIAN_A1_CURRICULUM.metadata.estimatedMinutes += Object.keys(grammarNotes).length * 2;
}

window.ITALIAN_A1_CURRICULUM = {
  metadata: {
    language: "it",
    languageName: "Italiano",
    supportLanguage: "es",
    level: "A1",
    audience: "Hispanohablantes que empiezan desde cero",
    estimatedMinutes: 137,
    design: "Ocho unidades progresivas con comunicación, gramática, pronunciación, léxico y práctica",
    contentNote: "La pronunciación debe ofrecerse con audio y repetición lenta; la escritura aproximada del español no sustituye al audio."
  },
  roadmap: [
    {
      id: "saludos",
      title: "Saludos y presentaciones",
      canDo: "Saludar, presentarte, deletrear tu nombre y manejar intercambios breves.",
      grammar: "pronombres singulares; essere y chiamarsi",
      sounds: "alfabeto y sonido C",
      vocabulary: "saludos, días de la semana y números del 1 al 10",
      game: "reto de nombres y números"
    },
    {
      id: "datos",
      title: "¿Cómo estás? Presentaciones y vida diaria",
      canDo: "Hablar de cómo te sientes, tu origen, la hora y fechas sencillas.",
      grammar: "pronombres plurales; essere, avere, chiamarsi y stare",
      sounds: "sonidos G, gli y gn",
      vocabulary: "números hasta 999, meses, estaciones y colores",
      game: "calendario y reloj"
    },
    {
      id: "familia",
      title: "La familia y los lugares",
      canDo: "Presentar a tu familia, decir de dónde eres y dónde vives.",
      grammar: "presente de los verbos en -are; andare y venire",
      sounds: "sonido SC",
      vocabulary: "familia, domicilio y datos de identidad",
      game: "árbol familiar"
    },
    {
      id: "lavoro",
      title: "¿A qué te dedicas?",
      canDo: "Hablar de oficios, estudios, tareas, horarios y preferencias.",
      grammar: "fare; c'è/ci sono; verbos en -are, -ere e -ire; piacere",
      sounds: "sonido QU",
      vocabulary: "profesiones, lugares de trabajo y estudio",
      game: "mímica de profesiones"
    },
    {
      id: "casa",
      title: "La casa y dónde están las cosas",
      canDo: "Describir una vivienda, ubicar objetos y expresar necesidades.",
      grammar: "dovere, potere, volere; verbos en -isc; artículos indeterminados",
      sounds: "acento de las palabras",
      vocabulary: "habitaciones, muebles y anuncios de vivienda",
      game: "adivina el objeto"
    },
    {
      id: "transporte",
      title: "Desplazamientos y transporte",
      canDo: "Moverte en autobús o tren, preguntar por un billete y describir una rutina.",
      grammar: "verbos reflexivos; sapere, rimanere, uscire y bere; stare + gerundio",
      sounds: "consonantes dobles",
      vocabulary: "estación, billetes y medios de transporte",
      game: "crucigrama de viajes"
    },
    {
      id: "compras",
      title: "Compras, comida y ropa",
      canDo: "Comprar alimentos o ropa, pedir en un bar y seguir una receta sencilla.",
      grammar: "adjetivos calificativos y demostrativos",
      sounds: "ritmo y acentuación en frases cotidianas",
      vocabulary: "alimentos, medidas, prendas y tienda",
      game: "menú y receta"
    },
    {
      id: "storia",
      title: "Historias, pasado y cultura italiana",
      canDo: "Contar hechos pasados sencillos y hablar de personas y lugares.",
      grammar: "passato prossimo, participios irregulares y posesivos",
      sounds: "entonación y fluidez en una narración breve",
      vocabulary: "familia, regiones, ciudades y escuela",
      game: "relato encadenado"
    }
  ],
  units: [
    {
      id: "saludos",
      title: "Saludos y presentaciones",
      lessons: [
        {
          id: "saludos-1",
          title: "Saludar según la situación",
          minutes: 4,
          objective: "Elegir un saludo o despedida adecuado y preguntar cómo está otra persona.",
          vocabulary: [
            { it: "Ciao", es: "Hola / chao (informal)", exampleIt: "Ciao, Luca!", exampleEs: "¡Hola, Luca!" },
            { it: "Buongiorno", es: "Buenos días / buen día", exampleIt: "Buongiorno, signora.", exampleEs: "Buenos días, señora." },
            { it: "Buonasera", es: "Buenas tardes / noches (al saludar)", exampleIt: "Buonasera, signor Rossi.", exampleEs: "Buenas tardes, señor Rossi." },
            { it: "Arrivederci", es: "Adiós (neutral o formal)", exampleIt: "Arrivederci e buona giornata.", exampleEs: "Adiós y que tenga buen día." },
            { it: "Come sta?", es: "¿Cómo está? (formal)", exampleIt: "Buongiorno. Come sta?", exampleEs: "Buenos días. ¿Cómo está?" }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Escucha y conoce",
              instruction: "Escucha cada expresión. Toca una tarjeta para ver su significado y ejemplo.",
              itemIds: ["Ciao", "Buongiorno", "Buonasera", "Arrivederci", "Come sta?"]
            },
            {
              type: "multipleChoice",
              title: "Elige el saludo",
              prompt: "Llegas por la mañana a una oficina y saludas a una persona que no conoces. ¿Qué dices?",
              options: ["Ciao!", "Buongiorno.", "Arrivederci."],
              answer: "Buongiorno.",
              feedback: "Buongiorno funciona en un contexto formal; Ciao es informal y Arrivederci sirve para despedirse."
            },
            {
              type: "fillBlank",
              title: "Completa la frase",
              prompt: "Buongiorno, signora. Come ___?",
              answer: "sta",
              acceptedAnswers: ["sta"],
              hint: "Es la forma formal de preguntar cómo está alguien."
            },
            {
              type: "dialogue",
              title: "En la recepción",
              scene: "Llegas a una oficina por la mañana. La persona de recepción te saluda.",
              turns: [
                {
                  speaker: "Recepcionista",
                  it: "Buongiorno. Come sta?",
                  es: "Buenos días. ¿Cómo está?",
                  options: [
                    { it: "Buongiorno. Bene, grazie.", es: "Buenos días. Bien, gracias.", correct: true },
                    { it: "Arrivederci.", es: "Adiós.", correct: false }
                  ]
                },
                {
                  speaker: "Tú",
                  it: "Arrivederci, buona giornata.",
                  es: "Adiós, que tenga buen día.",
                  learnerAction: "Escucha y repite; repetir es opcional y no se evalúa con micrófono."
                }
              ]
            },
            {
              type: "production",
              title: "Tu turno",
              prompt: "Elige la frase para despedirte con cortesía al salir de una oficina.",
              options: ["Arrivederci, buona giornata.", "Ciao, fratello!", "Come sta?"],
              answer: "Arrivederci, buona giornata.",
              model: "Arrivederci, buona giornata. — Adiós, que tenga buen día."
            }
          ]
        },
        {
          id: "saludos-2",
          title: "Decir quién soy",
          minutes: 4,
          objective: "Decir el nombre, el país o ciudad de origen y los idiomas que hablo.",
          vocabulary: [
            { it: "Mi chiamo…", es: "Me llamo…", exampleIt: "Mi chiamo Ana.", exampleEs: "Me llamo Ana." },
            { it: "Sono…", es: "Soy…", exampleIt: "Sono peruviana.", exampleEs: "Soy peruana." },
            { it: "Vengo da…", es: "Vengo de…", exampleIt: "Vengo dal Perù.", exampleEs: "Vengo de Perú." },
            { it: "Abito a…", es: "Vivo en…", exampleIt: "Abito a Torino.", exampleEs: "Vivo en Turín." },
            { it: "Parlo…", es: "Hablo…", exampleIt: "Parlo spagnolo e un po' d'italiano.", exampleEs: "Hablo español y un poco de italiano." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Presentaciones útiles",
              instruction: "Escucha las expresiones y relaciona cada una con el dato personal correspondiente.",
              itemIds: ["Mi chiamo…", "Sono…", "Vengo da…", "Abito a…", "Parlo…"]
            },
            {
              type: "multipleChoice",
              title: "Comprende la presentación",
              prompt: "¿Qué información da Ana? «Mi chiamo Ana e abito a Torino.»",
              options: ["Su nombre y dónde vive", "Su edad y su trabajo", "Su apellido y su teléfono"],
              answer: "Su nombre y dónde vive",
              feedback: "Mi chiamo indica el nombre; abito a indica dónde vive."
            },
            {
              type: "fillBlank",
              title: "Completa tu presentación",
              prompt: "Mi chiamo Ana. ___ a Torino.",
              answer: "Abito",
              acceptedAnswers: ["Abito", "abito"],
              hint: "Para decir dónde vives, usa abito a + ciudad."
            },
            {
              type: "dialogue",
              title: "Conoces a una vecina",
              scene: "Una vecina te saluda y pregunta tu nombre y de dónde vienes.",
              turns: [
                {
                  speaker: "Vicino",
                  it: "Ciao! Come ti chiami? Di dove sei?",
                  es: "¡Hola! ¿Cómo te llamas? ¿De dónde eres?",
                  options: [
                    { it: "Mi chiamo Ana. Vengo dal Perù.", es: "Me llamo Ana. Vengo de Perú.", correct: true },
                    { it: "Arrivederci. Abito bene.", es: "Adiós. Vivo bien.", correct: false }
                  ]
                },
                {
                  speaker: "Vicino",
                  it: "Piacere!",
                  es: "¡Encantado/a!",
                  options: [
                    { it: "Piacere!", es: "¡Encantado/a!", correct: true },
                    { it: "Ho un appuntamento.", es: "Tengo una cita.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Preséntate",
              prompt: "Completa una presentación con tu nombre y una ciudad. Puedes usar un nombre ficticio.",
              frame: "Mi chiamo ___. Abito a ___.",
              model: "Mi chiamo Ana. Abito a Torino.",
              privacyNote: "No hace falta compartir datos personales reales para practicar."
            }
          ]
        },
        {
          id: "saludos-3",
          title: "Cortesía y pedir que repitan",
          minutes: 4,
          objective: "Agradecer, disculparse y pedir que repitan más despacio.",
          vocabulary: [
            { it: "Grazie", es: "Gracias", exampleIt: "Grazie per l'aiuto.", exampleEs: "Gracias por la ayuda." },
            { it: "Prego", es: "De nada / adelante", exampleIt: "—Grazie. —Prego.", exampleEs: "—Gracias. —De nada." },
            { it: "Scusi", es: "Disculpe (formal)", exampleIt: "Scusi, dov'è l'ufficio?", exampleEs: "Disculpe, ¿dónde está la oficina?" },
            { it: "Non ho capito", es: "No he entendido", exampleIt: "Scusi, non ho capito.", exampleEs: "Disculpe, no he entendido." },
            { it: "Può ripetere, per favore?", es: "¿Puede repetir, por favor?", exampleIt: "Può ripetere più lentamente, per favore?", exampleEs: "¿Puede repetir más despacio, por favor?" }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Frases para seguir la conversación",
              instruction: "Escucha cada frase. Puedes volver a escucharla todas las veces que necesites.",
              itemIds: ["Grazie", "Prego", "Scusi", "Non ho capito", "Può ripetere, per favore?"]
            },
            {
              type: "multipleChoice",
              title: "Elige una frase útil",
              prompt: "No entiendes una indicación en una oficina. ¿Qué puedes decir?",
              options: ["Non ho capito. Può ripetere, per favore?", "Può aiutarmi a compilare il modulo?", "Dov'è la stazione?"],
              answer: "Non ho capito. Può ripetere, per favore?",
              feedback: "Pedir que repitan es una estrategia normal de comunicación; no necesitas disculparte por aprender."
            },
            {
              type: "fillBlank",
              title: "Pide una repetición",
              prompt: "Scusi, non ho ___.",
              answer: "capito",
              acceptedAnswers: ["capito"],
              hint: "La expresión completa es Non ho capito."
            },
            {
              type: "dialogue",
              title: "En una ventanilla",
              scene: "La persona te da una indicación rápida y no la entiendes.",
              turns: [
                {
                  speaker: "Operatore",
                  it: "Deve andare allo sportello numero tre.",
                  es: "Debe ir a la ventanilla número tres.",
                  options: [
                    { it: "Scusi, non ho capito. Può ripetere più lentamente?", es: "Disculpe, no he entendido. ¿Puede repetir más despacio?", correct: true },
                    { it: "Grazie, arrivederci.", es: "Gracias, adiós.", correct: false }
                  ]
                },
                {
                  speaker: "Operatore",
                  it: "Certo. Sportello numero tre.",
                  es: "Claro. Ventanilla número tres.",
                  options: [
                    { it: "Grazie per l'aiuto.", es: "Gracias por la ayuda.", correct: true },
                    { it: "Abito a Torino.", es: "Vivo en Turín.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Tu frase de apoyo",
              prompt: "Escoge y practica una frase que te ayude cuando no entiendas.",
              options: ["Può ripetere, per favore?", "Sono a posto.", "Arrivederci a domani."],
              answer: "Può ripetere, per favore?",
              model: "Scusi, può ripetere più lentamente, per favore?"
            }
          ]
        },
        createPracticeLesson({
          id: "saludos-4",
          title: "Letras, días y números",
          objective: "Reconocer sonidos iniciales, días de la semana y números básicos.",
          vocabulary: [
            { it: "l'alfabeto", es: "el alfabeto", exampleIt: "Come si scrive il tuo nome?", exampleEs: "¿Cómo se escribe tu nombre?" },
            { it: "la lettera C", es: "la letra C", exampleIt: "Ciao e casa iniziano con la lettera C.", exampleEs: "Ciao y casa empiezan por la letra C." },
            { it: "lunedì", es: "lunes", exampleIt: "Oggi è lunedì.", exampleEs: "Hoy es lunes." },
            { it: "sabato", es: "sábado", exampleIt: "Ci vediamo sabato.", exampleEs: "Nos vemos el sábado." },
            { it: "dieci", es: "diez", exampleIt: "Ho dieci anni.", exampleEs: "Tengo diez años." },
            { it: "i giorni della settimana", es: "los días de la semana", exampleIt: "Lunedì, martedì, mercoledì, giovedì, venerdì, sabato e domenica.", exampleEs: "Lunes, martes, miércoles, jueves, viernes, sábado y domingo." },
            { it: "i numeri da uno a dieci", es: "los números del uno al diez", exampleIt: "Uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci.", exampleEs: "Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve y diez." }
          ],
          question: {
            title: "Distingue el sonido C",
            prompt: "¿En cuál de estas palabras la C suena como /k/?",
            options: ["ciao", "casa", "giorno"],
            answer: "casa",
            feedback: "Ante a, o y u, la C suele sonar /k/; en ciao, ante i, suena como «ch»."
          },
          completion: {
            title: "Completa el día",
            prompt: "Dopo domenica viene ___.",
            answer: "lunedì",
            options: ["lunedì", "sabato", "giovedì"],
            hint: "La semana vuelve a empezar el lunes."
          },
          dialogue: {
            title: "Deletrear y quedar",
            scene: "Dices tu nombre despacio y acuerdas un día para volver a encontrarte.",
            turns: [
              {
                speaker: "Nuovo amico",
                it: "Come si scrive il tuo nome?",
                es: "¿Cómo se escribe tu nombre?",
                options: [
                  { it: "Si scrive con la lettera C.", es: "Se escribe con la letra C.", correct: true },
                  { it: "Oggi è lunedì.", es: "Hoy es lunes.", correct: false }
                ]
              },
              {
                speaker: "Nuovo amico",
                it: "Ci vediamo sabato?",
                es: "¿Nos vemos el sábado?",
                options: [
                  { it: "Sì, a sabato!", es: "Sí, ¡hasta el sábado!", correct: true },
                  { it: "Mi chiamo Luca.", es: "Me llamo Luca.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Preséntate con claridad",
            prompt: "Elige la presentación que puedes adaptar con un nombre inventado.",
            options: ["Ciao, mi chiamo Luca. Piacere!", "Arrivederci, sono sabato.", "Come stai, dieci?"],
            answer: "Ciao, mi chiamo Luca. Piacere!",
            model: "Ciao, mi chiamo Luca. Piacere! — Hola, me llamo Luca. ¡Encantado!"
          }
        })
      ]
    },
    {
      id: "datos",
      title: "¿Cómo estás? Presentaciones y vida diaria",
      lessons: [
        {
          id: "datos-1",
          title: "Nombre, origen e idiomas",
          minutes: 4,
          objective: "Responder preguntas sencillas sobre nombre, nacionalidad, lugar de residencia e idiomas.",
          vocabulary: [
            { it: "il nome", es: "el nombre", exampleIt: "Il mio nome è Ana.", exampleEs: "Mi nombre es Ana." },
            { it: "il cognome", es: "el apellido", exampleIt: "Il cognome è García.", exampleEs: "El apellido es García." },
            { it: "la nazionalità", es: "la nacionalidad", exampleIt: "La mia nazionalità è peruviana.", exampleEs: "Mi nacionalidad es peruana." },
            { it: "la lingua", es: "el idioma / la lengua", exampleIt: "La mia lingua è lo spagnolo.", exampleEs: "Mi idioma es el español." },
            { it: "il luogo di nascita", es: "el lugar de nacimiento", exampleIt: "Il luogo di nascita è Lima.", exampleEs: "El lugar de nacimiento es Lima." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Datos que pueden preguntarte",
              instruction: "Escucha las palabras y practica identificar cada dato. Usa información ficticia si lo prefieres.",
              itemIds: ["il nome", "il cognome", "la nazionalità", "la lingua", "il luogo di nascita"]
            },
            {
              type: "multipleChoice",
              title: "Comprende una pregunta",
              prompt: "En un formulario lees «Cognome». ¿Qué dato debes escribir?",
              options: ["Tu apellido", "Tu ciudad actual", "Tu número de teléfono"],
              answer: "Tu apellido",
              feedback: "Cognome significa apellido; nome significa nombre."
            },
            {
              type: "fillBlank",
              title: "Completa el dato",
              prompt: "Mi ___ è García. (apellido)",
              answer: "cognome",
              acceptedAnswers: ["cognome"],
              hint: "Nombre es nome; apellido es cognome."
            },
            {
              type: "dialogue",
              title: "Primera visita a una oficina",
              scene: "Una persona de atención te pide datos básicos. No tienes que usar tus datos reales.",
              turns: [
                {
                  speaker: "Impiegata",
                  it: "Come si chiama?",
                  es: "¿Cómo se llama?",
                  options: [
                    { it: "Mi chiamo Ana García.", es: "Me llamo Ana García.", correct: true },
                    { it: "Abito a Torino.", es: "Vivo en Turín.", correct: false }
                  ]
                },
                {
                  speaker: "Impiegata",
                  it: "Qual è la sua lingua?",
                  es: "¿Cuál es su idioma?",
                  options: [
                    { it: "Parlo spagnolo.", es: "Hablo español.", correct: true },
                    { it: "Via Roma 12.", es: "Calle Roma, número 12.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Responde sin compartir datos reales",
              prompt: "Practica una respuesta breve a «Come si chiama?» y «Che lingua parla?».",
              frame: "Mi chiamo ___. Parlo ___.",
              model: "Mi chiamo Ana. Parlo spagnolo e un po' d'italiano.",
              privacyNote: "Puedes usar un nombre y un idioma inventados."
            }
          ]
        },
        {
          id: "datos-2",
          title: "Números, teléfono y dirección",
          minutes: 5,
          objective: "Reconocer números frecuentes y comunicar un teléfono o una dirección deletreando despacio.",
          vocabulary: [
            { it: "il numero di telefono", es: "el número de teléfono", exampleIt: "Questo è il mio numero di telefono.", exampleEs: "Este es mi número de teléfono." },
            { it: "l'indirizzo", es: "la dirección", exampleIt: "Il mio indirizzo è via Roma 12.", exampleEs: "Mi dirección es calle Roma 12." },
            { it: "la via", es: "la calle", exampleIt: "Abito in via Verdi.", exampleEs: "Vivo en la calle Verdi." },
            { it: "il CAP", es: "el código postal", exampleIt: "Qual è il CAP?", exampleEs: "¿Cuál es el código postal?" },
            { it: "zero, uno, due, tre, quattro", es: "cero, uno, dos, tres, cuatro", exampleIt: "Il numero inizia con zero, uno, due.", exampleEs: "El número empieza por cero, uno, dos." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Números y dirección",
              instruction: "Escucha los números con pausas. Los números de teléfono se pueden decir cifra por cifra.",
              itemIds: ["il numero di telefono", "l'indirizzo", "la via", "il CAP", "zero, uno, due, tre, quattro"]
            },
            {
              type: "multipleChoice",
              title: "Identifica el dato",
              prompt: "¿Qué te preguntan con «Qual è il suo numero di telefono?»",
              options: ["Tu número de teléfono", "Tu fecha de nacimiento", "Tu nacionalidad"],
              answer: "Tu número de teléfono",
              feedback: "Numero di telefono significa número de teléfono."
            },
            {
              type: "fillBlank",
              title: "Completa la dirección",
              prompt: "Abito in ___ Roma, numero 12.",
              answer: "via",
              acceptedAnswers: ["via"],
              hint: "Via se usa delante del nombre de una calle."
            },
            {
              type: "dialogue",
              title: "Confirmar una dirección",
              scene: "En una recepción confirman la dirección de una cita. Practica con datos inventados.",
              turns: [
                {
                  speaker: "Addetta",
                  it: "Qual è il suo indirizzo?",
                  es: "¿Cuál es su dirección?",
                  options: [
                    { it: "Via Roma 12.", es: "Calle Roma, número 12.", correct: true },
                    { it: "Sono peruviana.", es: "Soy peruana.", correct: false }
                  ]
                },
                {
                  speaker: "Addetta",
                  it: "Può ripetere il numero, per favore?",
                  es: "¿Puede repetir el número, por favor?",
                  options: [
                    { it: "Uno, due.", es: "Uno, dos.", correct: true },
                    { it: "Buonasera, grazie.", es: "Buenas tardes, gracias.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Deletrea con calma",
              prompt: "Elige cómo pedir que repitan un número de teléfono.",
              options: ["Può ripetere il numero, per favore?", "Qual è il suo indirizzo?", "Qual è il CAP?"],
              answer: "Può ripetere il numero, per favore?",
              model: "Può ripetere il numero, cifra per cifra, per favore?",
              privacyNote: "No escribas ni compartas tu número real en la aplicación."
            }
          ]
        },
        {
          id: "datos-3",
          title: "Formularios y citas",
          minutes: 5,
          objective: "Pedir ayuda para completar un formulario y preguntar por una cita o los documentos necesarios.",
          vocabulary: [
            { it: "il modulo", es: "el formulario", exampleIt: "Devo compilare questo modulo.", exampleEs: "Tengo que completar este formulario." },
            { it: "compilare", es: "rellenar / completar", exampleIt: "Può aiutarmi a compilare il modulo?", exampleEs: "¿Puede ayudarme a completar el formulario?" },
            { it: "l'appuntamento", es: "la cita", exampleIt: "Ho un appuntamento alle dieci.", exampleEs: "Tengo una cita a las diez." },
            { it: "i documenti", es: "los documentos", exampleIt: "Quali documenti servono?", exampleEs: "¿Qué documentos hacen falta?" },
            { it: "firmare", es: "firmar", exampleIt: "Devo firmare qui?", exampleEs: "¿Tengo que firmar aquí?" }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Palabras para hacer un trámite",
              instruction: "Escucha las palabras y fíjate en las frases completas que podrías usar en una oficina.",
              itemIds: ["il modulo", "compilare", "l'appuntamento", "i documenti", "firmare"]
            },
            {
              type: "multipleChoice",
              title: "Pregunta por los documentos",
              prompt: "Quieres saber qué documentos hacen falta. ¿Qué preguntas?",
              options: ["Quali documenti servono?", "A che ora è l'appuntamento?", "Dove devo firmare?"],
              answer: "Quali documenti servono?",
              feedback: "Quali documenti servono? significa ¿Qué documentos hacen falta?"
            },
            {
              type: "fillBlank",
              title: "Completa la pregunta",
              prompt: "Devo ___ questo modulo.",
              answer: "compilare",
              acceptedAnswers: ["compilare"],
              hint: "El verbo útil para completar un formulario es compilare."
            },
            {
              type: "dialogue",
              title: "Pedir una cita",
              scene: "Te acercas a una oficina y necesitas pedir información. La disponibilidad real depende de cada servicio.",
              turns: [
                {
                  speaker: "Impiegato",
                  it: "Buongiorno, come posso aiutarla?",
                  es: "Buenos días, ¿cómo puedo ayudarle?",
                  options: [
                    { it: "Vorrei prendere un appuntamento, per favore.", es: "Quisiera pedir una cita, por favor.", correct: true },
                    { it: "Vorrei compilare il modulo.", es: "Quisiera completar el formulario.", correct: false }
                  ]
                },
                {
                  speaker: "Impiegato",
                  it: "Ha già un appuntamento?",
                  es: "¿Ya tiene una cita?",
                  options: [
                    { it: "No, vorrei sapere come prenotare.", es: "No, quisiera saber cómo reservar.", correct: true },
                    { it: "Sì, ho un appuntamento alle dieci.", es: "Sí, tengo una cita a las diez.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Pide ayuda con un formulario",
              prompt: "Escoge una frase clara y cortés para pedir ayuda.",
              options: [
                "Mi può aiutare a compilare questo modulo, per favore?",
                "Dove devo firmare?",
                "Quali documenti servono?"
              ],
              answer: "Mi può aiutare a compilare questo modulo, per favore?",
              model: "Mi può aiutare a compilare questo modulo, per favore? Devo firmare qui?"
            }
          ]
        },
        createPracticeLesson({
          id: "datos-4",
          title: "Cómo estás y qué hora es",
          objective: "Preguntar por el estado de otra persona y comprender una hora sencilla.",
          vocabulary: [
            { it: "Come stai?", es: "¿Cómo estás?", exampleIt: "Ciao, come stai?", exampleEs: "Hola, ¿cómo estás?" },
            { it: "Sto bene", es: "Estoy bien", exampleIt: "Sto bene, grazie.", exampleEs: "Estoy bien, gracias." },
            { it: "così così", es: "regular / así así", exampleIt: "Oggi sto così così.", exampleEs: "Hoy estoy regular." },
            { it: "Che ora è?", es: "¿Qué hora es?", exampleIt: "Scusa, che ora è?", exampleEs: "Disculpa, ¿qué hora es?" },
            { it: "Sono le otto", es: "Son las ocho", exampleIt: "Sono le otto di mattina.", exampleEs: "Son las ocho de la mañana." },
            { it: "noi siamo", es: "nosotros/as somos o estamos", exampleIt: "Noi siamo in classe.", exampleEs: "Estamos en clase." },
            { it: "voi avete", es: "vosotros/as tenéis", exampleIt: "Voi avete una lezione oggi.", exampleEs: "Tenéis una clase hoy." },
            { it: "loro stanno bene", es: "ellos/as están bien", exampleIt: "Loro stanno bene, grazie.", exampleEs: "Ellos están bien, gracias." },
            { it: "ci chiamiamo", es: "nos llamamos", exampleIt: "Ci chiamiamo Ana e Luca.", exampleEs: "Nos llamamos Ana y Luca." }
          ],
          question: {
            title: "Responde a un saludo",
            prompt: "Una amiga te pregunta «Come stai?». ¿Qué respuesta dice que estás bien?",
            options: ["Sto bene, grazie.", "Sono le otto.", "Mi chiamo Luca."],
            answer: "Sto bene, grazie.",
            feedback: "Sto bene significa «estoy bien»; puedes devolver la pregunta con «E tu?»."
          },
          completion: {
            title: "Completa la hora",
            prompt: "Sono le ___. (ocho)",
            answer: "otto",
            options: ["otto", "bene", "lunedì"],
            hint: "Ocho se dice otto."
          },
          dialogue: {
            title: "Al comenzar el día",
            scene: "Saludas a un compañero y le preguntas la hora antes de una clase.",
            turns: [
              {
                speaker: "Collega",
                it: "Ciao! Come stai?",
                es: "¡Hola! ¿Cómo estás?",
                options: [
                  { it: "Sto bene, grazie. E tu?", es: "Estoy bien, gracias. ¿Y tú?", correct: true },
                  { it: "Sono le otto.", es: "Son las ocho.", correct: false }
                ]
              },
              {
                speaker: "Collega",
                it: "Bene, grazie. Che ora è?",
                es: "Bien, gracias. ¿Qué hora es?",
                options: [
                  { it: "Sono le otto.", es: "Son las ocho.", correct: true },
                  { it: "Sto così così.", es: "Estoy regular.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Contesta con naturalidad",
            prompt: "Elige una respuesta completa a «Come stai?»",
            options: ["Sto bene, grazie. E tu?", "Sono otto anni.", "Mi chiamo bene."],
            answer: "Sto bene, grazie. E tu?",
            model: "Sto bene, grazie. E tu? — Estoy bien, gracias. ¿Y tú?"
          }
        }),
        createPracticeLesson({
          id: "datos-5",
          title: "Meses, estaciones y números grandes",
          objective: "Reconocer meses, estaciones y números de hasta tres cifras en datos cotidianos.",
          vocabulary: [
            { it: "gennaio", es: "enero", exampleIt: "Il corso inizia a gennaio.", exampleEs: "El curso empieza en enero." },
            { it: "la primavera", es: "la primavera", exampleIt: "A marzo comincia la primavera.", exampleEs: "En marzo empieza la primavera." },
            { it: "il compleanno", es: "el cumpleaños", exampleIt: "Il mio compleanno è a maggio.", exampleEs: "Mi cumpleaños es en mayo." },
            { it: "cento", es: "cien", exampleIt: "Il numero è cento.", exampleEs: "El número es cien." },
            { it: "novecentonovantanove", es: "novecientos noventa y nueve", exampleIt: "Il numero termina con novecentonovantanove.", exampleEs: "El número termina en novecientos noventa y nueve." },
            { it: "l'autunno e l'inverno", es: "el otoño y el invierno", exampleIt: "Dopo l'estate arrivano l'autunno e l'inverno.", exampleEs: "Después del verano llegan el otoño y el invierno." },
            { it: "il blu e il rosso", es: "el azul y el rojo", exampleIt: "Il cielo è blu e il pomodoro è rosso.", exampleEs: "El cielo es azul y el tomate es rojo." }
          ],
          question: {
            title: "Ubica un mes",
            prompt: "¿Qué palabra italiana significa «enero»?",
            options: ["gennaio", "giugno", "agosto"],
            answer: "gennaio",
            feedback: "Gennaio es enero. Los nombres de los meses se escriben normalmente con minúscula."
          },
          completion: {
            title: "Completa un número",
            prompt: "100 in italiano si dice ___.",
            answer: "cento",
            options: ["cento", "dieci", "mille"],
            hint: "Cento equivale a cien."
          },
          dialogue: {
            title: "Hablar de una fecha",
            scene: "Una persona pregunta cuándo es tu cumpleaños. Puedes usar una fecha de ejemplo.",
            turns: [
              {
                speaker: "Amica",
                it: "Quando è il tuo compleanno?",
                es: "¿Cuándo es tu cumpleaños?",
                options: [
                  { it: "È a maggio.", es: "Es en mayo.", correct: true },
                  { it: "È novecentonovantanove.", es: "Es novecientos noventa y nueve.", correct: false }
                ]
              },
              {
                speaker: "Amica",
                it: "In quale stagione?",
                es: "¿En qué estación?",
                options: [
                  { it: "In primavera.", es: "En primavera.", correct: true },
                  { it: "A cento.", es: "A cien.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Di una fecha ficticia",
            prompt: "Escoge un modelo para hablar de un cumpleaños sin compartir una fecha real.",
            options: ["Il mio compleanno è a maggio.", "Il mio compleanno è cento.", "La primavera è gennaio."],
            answer: "Il mio compleanno è a maggio.",
            model: "Il mio compleanno è a maggio. — Mi cumpleaños es en mayo.",
            privacyNote: "Usa un mes inventado si prefieres no compartir tu fecha real."
          }
        })
      ]
    },
    {
      id: "familia",
      title: "La familia y los lugares",
      lessons: [
        createPracticeLesson({
          id: "familia-1",
          title: "Personas de mi familia",
          objective: "Nombrar a familiares cercanos y presentarlos con frases sencillas.",
          vocabulary: [
            { it: "la famiglia", es: "la familia", exampleIt: "La mia famiglia è grande.", exampleEs: "Mi familia es grande." },
            { it: "la madre", es: "la madre", exampleIt: "Mia madre si chiama Elena.", exampleEs: "Mi madre se llama Elena." },
            { it: "il padre", es: "el padre", exampleIt: "Mio padre abita a Lima.", exampleEs: "Mi padre vive en Lima." },
            { it: "il fratello", es: "el hermano", exampleIt: "Ho un fratello.", exampleEs: "Tengo un hermano." },
            { it: "la sorella", es: "la hermana", exampleIt: "Mia sorella studia.", exampleEs: "Mi hermana estudia." }
          ],
          question: {
            title: "Identifica a una persona",
            prompt: "¿Quién es «la sorella»?",
            options: ["La hermana", "La madre", "El padre"],
            answer: "La hermana",
            feedback: "La sorella significa la hermana; il fratello es el hermano."
          },
          completion: {
            title: "Completa una frase",
            prompt: "Mio ___ si chiama Paolo. (padre)",
            answer: "padre",
            hint: "Padre significa padre."
          },
          dialogue: {
            title: "Conocer a una familia",
            scene: "Una compañera te pregunta por tus hermanos. Puedes usar una respuesta inventada.",
            turns: [
              {
                speaker: "Collega",
                it: "Hai fratelli o sorelle?",
                es: "¿Tienes hermanos o hermanas?",
                options: [
                  { it: "Sì, ho un fratello e una sorella.", es: "Sí, tengo un hermano y una hermana.", correct: true },
                  { it: "Abito in centro.", es: "Vivo en el centro.", correct: false }
                ]
              },
              {
                speaker: "Collega",
                it: "Come si chiama tua sorella?",
                es: "¿Cómo se llama tu hermana?",
                options: [
                  { it: "Si chiama Elena.", es: "Se llama Elena.", correct: true },
                  { it: "Vengo da Quito.", es: "Vengo de Quito.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Presenta a alguien",
            prompt: "Elige un modelo para presentar a una persona de tu familia.",
            options: ["Mia sorella si chiama Ana.", "Mia sorella è lunedì.", "Ho una città."],
            answer: "Mia sorella si chiama Ana.",
            model: "Mia sorella si chiama Ana. — Mi hermana se llama Ana.",
            privacyNote: "Puedes inventar los nombres y los parentescos."
          }
        }),
        createPracticeLesson({
          id: "familia-2",
          title: "De dónde soy y dónde vivo",
          objective: "Decir el lugar de origen y residencia y usar formas frecuentes de andare y venire.",
          vocabulary: [
            { it: "Vengo da…", es: "Vengo de…", exampleIt: "Vengo dall'Ecuador.", exampleEs: "Vengo de Ecuador." },
            { it: "Abito a…", es: "Vivo en…", exampleIt: "Abito a Bologna.", exampleEs: "Vivo en Bolonia." },
            { it: "la città", es: "la ciudad", exampleIt: "La città è tranquilla.", exampleEs: "La ciudad es tranquila." },
            { it: "andare", es: "ir", exampleIt: "Vado al mercato.", exampleEs: "Voy al mercado." },
            { it: "venire", es: "venir", exampleIt: "Vieni con noi?", exampleEs: "¿Vienes con nosotros?" }
          ],
          question: {
            title: "Habla de tu residencia",
            prompt: "¿Qué frase indica dónde vive una persona?",
            options: ["Abito a Bologna.", "Vengo dal Perù.", "Vado al lavoro."],
            answer: "Abito a Bologna.",
            feedback: "Abito a… expresa el lugar donde vives."
          },
          completion: {
            title: "Completa con el verbo",
            prompt: "Io ___ a scuola a piedi. (andare)",
            answer: "vado",
            hint: "La forma de io del verbo andare es vado."
          },
          dialogue: {
            title: "Hablar de tu ciudad",
            scene: "En una conversación cuentas de dónde vienes y dónde vives ahora.",
            turns: [
              {
                speaker: "Vicino",
                it: "Di dove sei?",
                es: "¿De dónde eres?",
                options: [
                  { it: "Vengo dall'Ecuador.", es: "Vengo de Ecuador.", correct: true },
                  { it: "Vado alla stazione.", es: "Voy a la estación.", correct: false }
                ]
              },
              {
                speaker: "Vicino",
                it: "Dove abiti adesso?",
                es: "¿Dónde vives ahora?",
                options: [
                  { it: "Abito a Bologna.", es: "Vivo en Bolonia.", correct: true },
                  { it: "Vengo con te.", es: "Voy contigo.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Describe tu lugar",
            prompt: "Elige una frase que puedas completar con datos ficticios.",
            options: ["Vengo da Lima e abito a Roma.", "Vado da famiglia e vengo la città.", "Abito per lunedì."],
            answer: "Vengo da Lima e abito a Roma.",
            model: "Vengo da Lima e abito a Roma. — Vengo de Lima y vivo en Roma."
          }
        }),
        createPracticeLesson({
          id: "familia-3",
          title: "Árbol familiar y documentos",
          objective: "Relacionar parentescos y comprender datos básicos de una tarjeta de identidad.",
          vocabulary: [
            { it: "l'albero genealogico", es: "el árbol familiar", exampleIt: "Disegno il mio albero genealogico.", exampleEs: "Dibujo mi árbol familiar." },
            { it: "la carta d'identità", es: "el documento de identidad", exampleIt: "La carta d'identità è nel portafoglio.", exampleEs: "El documento de identidad está en la cartera." },
            { it: "la data di nascita", es: "la fecha de nacimiento", exampleIt: "Qual è la data di nascita?", exampleEs: "¿Cuál es la fecha de nacimiento?" },
            { it: "mille", es: "mil", exampleIt: "Il numero è mille.", exampleEs: "El número es mil." },
            { it: "un milione", es: "un millón", exampleIt: "Un milione ha sei zeri.", exampleEs: "Un millón tiene seis ceros." },
            { it: "un miliardo", es: "mil millones", exampleIt: "Un miliardo ha nove zeri.", exampleEs: "Mil millones tiene nueve ceros." }
          ],
          question: {
            title: "Lee un dato",
            prompt: "En un documento aparece «data di nascita». ¿Qué dato es?",
            options: ["La fecha de nacimiento", "La dirección actual", "El lugar de trabajo"],
            answer: "La fecha de nacimiento",
            feedback: "Data di nascita es la fecha de nacimiento."
          },
          completion: {
            title: "Completa un número",
            prompt: "1.000 in italiano si dice ___.",
            answer: "mille",
            hint: "Mille equivale a mil."
          },
          dialogue: {
            title: "Completar una ficha familiar",
            scene: "Ayudas a organizar una ficha con información inventada de una familia.",
            turns: [
              {
                speaker: "Insegnante",
                it: "Chi è la madre di Luca?",
                es: "¿Quién es la madre de Luca?",
                options: [
                  { it: "Anna è sua madre.", es: "Anna es su madre.", correct: true },
                  { it: "Luca è la data di nascita.", es: "Luca es la fecha de nacimiento.", correct: false }
                ]
              },
              {
                speaker: "Insegnante",
                it: "Dove scriviamo la data di nascita?",
                es: "¿Dónde escribimos la fecha de nacimiento?",
                options: [
                  { it: "Sulla carta d'identità.", es: "En el documento de identidad.", correct: true },
                  { it: "Nell'albero genealogico.", es: "En el árbol familiar.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Organiza datos de ejemplo",
            prompt: "Elige una frase correcta para describir un árbol familiar.",
            options: ["Nel mio albero genealogico ci sono quattro persone.", "La mia data di nascita è la famiglia.", "Un milione è mio fratello."],
            answer: "Nel mio albero genealogico ci sono quattro persone.",
            model: "Nel mio albero genealogico ci sono quattro persone. — En mi árbol familiar hay cuatro personas.",
            privacyNote: "Practica con personajes inventados; no compartas números ni documentos reales."
          }
        })
      ]
    },
    {
      id: "lavoro",
      title: "¿A qué te dedicas?",
      lessons: [
        {
          id: "lavoro-1",
          title: "Vocabulario de oficios y trabajos comunes",
          minutes: 4,
          objective: "Reconocer oficios frecuentes y decir qué trabajo se busca o se realiza.",
          vocabulary: [
            { it: "il lavoro", es: "el trabajo", exampleIt: "Cerco lavoro a Torino.", exampleEs: "Busco trabajo en Turín." },
            { it: "l'aiutante", es: "el/la ayudante", exampleIt: "Sono un aiutante in cucina.", exampleEs: "Soy ayudante en una cocina." },
            { it: "il cuoco / la cuoca", es: "el cocinero / la cocinera", exampleIt: "Mia sorella è cuoca.", exampleEs: "Mi hermana es cocinera." },
            { it: "il cameriere / la cameriera", es: "el camarero / la camarera", exampleIt: "Lavoro come cameriera.", exampleEs: "Trabajo como camarera." },
            { it: "il lavoro part-time", es: "el trabajo a tiempo parcial", exampleIt: "Cerco un lavoro part-time.", exampleEs: "Busco un trabajo a tiempo parcial." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Oficios y trabajos",
              instruction: "Escucha las palabras y descubre cómo decir qué trabajo buscas o qué oficio tienes.",
              itemIds: ["il lavoro", "l'aiutante", "il cuoco / la cuoca", "il cameriere / la cameriera", "il lavoro part-time"]
            },
            {
              type: "multipleChoice",
              title: "Asocia la palabra",
              prompt: "¿Cómo se dice «el trabajo» en italiano?",
              options: ["Il lavoro", "La casa", "Il cibo"],
              answer: "Il lavoro",
              feedback: "Il lavoro significa el trabajo. Cerco lavoro significa busco trabajo."
            },
            {
              type: "fillBlank",
              title: "Completa la frase",
              prompt: "Io cerco ___.",
              answer: "lavoro",
              acceptedAnswers: ["lavoro"],
              hint: "La frase significa «Yo busco trabajo»."
            },
            {
              type: "dialogue",
              title: "Hablar de tu trabajo",
              scene: "En una conversación breve, una persona te pregunta a qué te dedicas. Puedes usar una respuesta de ejemplo.",
              turns: [
                {
                  speaker: "Collega",
                  it: "Che lavoro fai?",
                  es: "¿De qué trabajas?",
                  options: [
                    { it: "Sono un aiutante.", es: "Soy ayudante.", correct: true },
                    { it: "A che ora cominci?", es: "¿A qué hora empiezas?", correct: false }
                  ]
                },
                {
                  speaker: "Collega",
                  it: "Cerchi lavoro?",
                  es: "¿Buscas trabajo?",
                  options: [
                    { it: "Sì, cerco lavoro.", es: "Sí, busco trabajo.", correct: true },
                    { it: "No, lavoro già come cuoco.", es: "No, ya trabajo como cocinero.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Di qué trabajo buscas",
              prompt: "Elige una frase sencilla que podrías usar al buscar empleo.",
              options: ["Cerco lavoro come aiutante.", "Sono disponibile domani mattina.", "Quanto costa il pane?"],
              answer: "Cerco lavoro come aiutante.",
              model: "Cerco lavoro come aiutante. — Busco trabajo como ayudante.",
              privacyNote: "No incluyas datos de contacto ni documentos personales."
            }
          ]
        },
        {
          id: "lavoro-2",
          title: "Expresar horario y disponibilidad",
          minutes: 4,
          objective: "Comprender expresiones de horario y comunicar disponibilidad para un turno.",
          vocabulary: [
            { it: "l'orario di lavoro", es: "el horario de trabajo", exampleIt: "Qual è l'orario di lavoro?", exampleEs: "¿Cuál es el horario de trabajo?" },
            { it: "il turno di mattina", es: "el turno de mañana", exampleIt: "Lavoro nel turno di mattina.", exampleEs: "Trabajo en el turno de mañana." },
            { it: "il turno di sera", es: "el turno de tarde/noche", exampleIt: "È disponibile il turno di sera?", exampleEs: "¿Está disponible el turno de tarde/noche?" },
            { it: "aperto / chiuso", es: "abierto / cerrado", exampleIt: "Il negozio è aperto fino alle otto.", exampleEs: "La tienda está abierta hasta las ocho." },
            { it: "cominciare", es: "empezar", exampleIt: "Comincio alle otto.", exampleEs: "Empiezo a las ocho." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Horarios y turnos",
              instruction: "Escucha las expresiones. «Di mattina» se refiere a la mañana; pregunta el horario si no está claro.",
              itemIds: ["l'orario di lavoro", "il turno di mattina", "il turno di sera", "aperto / chiuso", "cominciare"]
            },
            {
              type: "multipleChoice",
              title: "Comprende el turno",
              prompt: "¿Qué significa «il turno di mattina»?",
              options: ["El turno de mañana", "El turno de noche", "El día libre"],
              answer: "El turno de mañana",
              feedback: "Mattina significa mañana. Turno di mattina es el turno de mañana."
            },
            {
              type: "fillBlank",
              title: "Completa la disponibilidad",
              prompt: "«Comincio la ___.»",
              answer: "mattina",
              acceptedAnswers: ["mattina"],
              options: ["mattina", "notte", "grazie"],
              hint: "La frase significa «Empiezo por la mañana»."
            },
            {
              type: "dialogue",
              title: "Preguntar por el horario",
              scene: "En una entrevista breve quieres saber a qué hora empieza el turno.",
              turns: [
                {
                  speaker: "Responsabile",
                  it: "A che ora cominci?",
                  es: "¿A qué hora empiezas?",
                  options: [
                    { it: "Comincio alle otto.", es: "Empiezo a las ocho.", correct: true },
                    { it: "Sono la cuoca.", es: "Soy la cocinera.", correct: false }
                  ]
                },
                {
                  speaker: "Responsabile",
                  it: "Sei disponibile la mattina?",
                  es: "¿Estás disponible por la mañana?",
                  options: [
                    { it: "Sì, sono disponibile la mattina.", es: "Sí, estoy disponible por la mañana.", correct: true },
                    { it: "Il negozio costa otto.", es: "La tienda cuesta ocho.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Expresa tu disponibilidad",
              prompt: "Escoge una respuesta sencilla para decir cuándo puedes trabajar.",
              options: ["Sono disponibile la mattina.", "Sono aperto la mattina.", "Cerco la mattina."],
              answer: "Sono disponibile la mattina.",
              model: "Sono disponibile la mattina. A che ora comincio?"
            }
          ]
        },
        {
          id: "lavoro-3",
          title: "Tareas e instrucciones sencillas",
          minutes: 5,
          objective: "Comprender instrucciones laborales frecuentes y pedir que las repitan.",
          vocabulary: [
            { it: "iniziare", es: "empezar", exampleIt: "Iniziamo alle nove.", exampleEs: "Empezamos a las nueve." },
            { it: "pulire", es: "limpiar", exampleIt: "Devo pulire il tavolo.", exampleEs: "Tengo que limpiar la mesa." },
            { it: "preparare", es: "preparar", exampleIt: "Preparo la sala.", exampleEs: "Preparo la sala." },
            { it: "finire", es: "terminar", exampleIt: "Finisco alle cinque.", exampleEs: "Termino a las cinco." },
            { it: "Può ripetere?", es: "¿Puede repetir?", exampleIt: "Scusi, può ripetere?", exampleEs: "Disculpe, ¿puede repetir?" }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Verbos para el trabajo",
              instruction: "Escucha los verbos y una frase cotidiana para cada uno.",
              itemIds: ["iniziare", "pulire", "preparare", "finire", "Può ripetere?"]
            },
            {
              type: "multipleChoice",
              title: "Comprende una instrucción",
              prompt: "Tu responsable dice «Devi pulire il tavolo». ¿Qué tienes que hacer?",
              options: ["Limpiar la mesa", "Preparar la comida", "Terminar el turno"],
              answer: "Limpiar la mesa",
              feedback: "Pulire significa limpiar; tavolo significa mesa."
            },
            {
              type: "fillBlank",
              title: "Completa la instrucción",
              prompt: "Devo ___ la sala. (preparar)",
              answer: "preparare",
              acceptedAnswers: ["preparare"],
              hint: "El infinitivo que significa preparar es preparare."
            },
            {
              type: "dialogue",
              title: "Pedir una aclaración",
              scene: "Recibes una instrucción y quieres confirmar qué debes hacer.",
              turns: [
                {
                  speaker: "Responsabile",
                  it: "Per favore, prepara la sala.",
                  es: "Por favor, prepara la sala.",
                  options: [
                    { it: "Va bene. Preparo la sala.", es: "De acuerdo. Preparo la sala.", correct: true },
                    { it: "Scusi, può ripetere?", es: "Disculpe, ¿puede repetir?", correct: false }
                  ]
                },
                {
                  speaker: "Responsabile",
                  it: "Poi pulisci il tavolo.",
                  es: "Después limpias la mesa.",
                  options: [
                    { it: "Scusi, può ripetere?", es: "Disculpe, ¿puede repetir?", correct: true },
                    { it: "Buongiorno, mi chiamo Anna.", es: "Buenos días, me llamo Anna.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Confirma una tarea",
              prompt: "Elige una frase para confirmar que has entendido una instrucción.",
              options: ["Va bene, preparo la sala.", "Può ripetere l'indirizzo?", "Comincio alle otto."],
              answer: "Va bene, preparo la sala.",
              model: "Va bene, preparo la sala. — De acuerdo, preparo la sala."
            }
          ]
        },
        createPracticeLesson({
          id: "lavoro-4",
          title: "Estudios, profesiones y gustos",
          objective: "Hablar de profesiones y estudios y decir qué actividades te gustan.",
          vocabulary: [
            { it: "Che lavoro fai?", es: "¿A qué te dedicas?", exampleIt: "Che lavoro fai?", exampleEs: "¿A qué te dedicas?" },
            { it: "fare", es: "hacer", exampleIt: "Faccio il cuoco.", exampleEs: "Trabajo como cocinero." },
            { it: "la scuola", es: "la escuela", exampleIt: "La scuola è vicino a casa.", exampleEs: "La escuela está cerca de casa." },
            { it: "piacere", es: "gustar", exampleIt: "Mi piace il mio lavoro.", exampleEs: "Me gusta mi trabajo." },
            { it: "ci sono", es: "hay (plural)", exampleIt: "In ufficio ci sono tre persone.", exampleEs: "En la oficina hay tres personas." },
            { it: "leggere", es: "leer", exampleIt: "Leggo un annuncio di lavoro.", exampleEs: "Leo un anuncio de trabajo." },
            { it: "prendere", es: "tomar", exampleIt: "Prendo un caffè prima del turno.", exampleEs: "Tomo un café antes del turno." },
            { it: "gli articoli determinativi", es: "los artículos determinados", exampleIt: "Il lavoro, lo studio, la scuola, l'ufficio, i colleghi, gli studenti, le professioni.", exampleEs: "El trabajo, los estudios, la escuela, la oficina, los compañeros, los estudiantes, las profesiones." }
          ],
          question: {
            title: "Habla de tu profesión",
            prompt: "¿Qué pregunta sirve para saber a qué se dedica alguien?",
            options: ["Che lavoro fai?", "Dove abiti?", "Che ora è?"],
            answer: "Che lavoro fai?",
            feedback: "Che lavoro fai? significa «¿A qué te dedicas?»."
          },
          completion: {
            title: "Completa con fare",
            prompt: "Io ___ il cameriere. (hacer / trabajar como)",
            answer: "faccio",
            hint: "La forma de io del verbo fare es faccio."
          },
          dialogue: {
            title: "En una clase de italiano",
            scene: "Conoces a otra persona que estudia y hablas de su trabajo.",
            turns: [
              {
                speaker: "Compagno",
                it: "Che lavoro fai?",
                es: "¿A qué te dedicas?",
                options: [
                  { it: "Faccio il cameriere.", es: "Trabajo como camarero.", correct: true },
                  { it: "Sono le otto.", es: "Son las ocho.", correct: false }
                ]
              },
              {
                speaker: "Compagno",
                it: "Ti piace il tuo lavoro?",
                es: "¿Te gusta tu trabajo?",
                options: [
                  { it: "Sì, mi piace molto.", es: "Sí, me gusta mucho.", correct: true },
                  { it: "Ci sono tre sedie.", es: "Hay tres sillas.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Cuenta qué haces",
            prompt: "Elige un modelo para hablar de trabajo o estudios.",
            options: ["Faccio il cuoco e studio italiano.", "Mi piace sono la scuola.", "Ci sono lavoro alle otto."],
            answer: "Faccio il cuoco e studio italiano.",
            model: "Faccio il cuoco e studio italiano. — Trabajo como cocinero y estudio italiano."
          }
        })
      ]
    },
    {
      id: "casa",
      title: "La casa y dónde están las cosas",
      lessons: [
        createPracticeLesson({
          id: "casa-1",
          title: "Habitaciones y muebles",
          objective: "Nombrar habitaciones y ubicar muebles con frases breves.",
          vocabulary: [
            { it: "la cucina", es: "la cocina", exampleIt: "La cucina è luminosa.", exampleEs: "La cocina tiene mucha luz." },
            { it: "la camera da letto", es: "el dormitorio", exampleIt: "La camera da letto è al primo piano.", exampleEs: "El dormitorio está en el primer piso." },
            { it: "il bagno", es: "el baño", exampleIt: "Il bagno è a destra.", exampleEs: "El baño está a la derecha." },
            { it: "il tavolo", es: "la mesa", exampleIt: "Il libro è sul tavolo.", exampleEs: "El libro está sobre la mesa." },
            { it: "la sedia", es: "la silla", exampleIt: "La sedia è vicino alla finestra.", exampleEs: "La silla está cerca de la ventana." }
          ],
          question: {
            title: "Reconoce una habitación",
            prompt: "¿Dónde preparas la comida?",
            options: ["In cucina", "In bagno", "In camera da letto"],
            answer: "In cucina",
            feedback: "La cucina es la cocina."
          },
          completion: {
            title: "Ubica un objeto",
            prompt: "Il libro è sul ___. (la mesa)",
            answer: "tavolo",
            hint: "Mesa en italiano es tavolo."
          },
          dialogue: {
            title: "Preguntar dónde está algo",
            scene: "Una visita llega a una casa y pregunta por una habitación.",
            turns: [
              {
                speaker: "Ospite",
                it: "Scusa, dov'è il bagno?",
                es: "Disculpa, ¿dónde está el baño?",
                options: [
                  { it: "È a destra, vicino alla cucina.", es: "Está a la derecha, cerca de la cocina.", correct: true },
                  { it: "È mio fratello.", es: "Es mi hermano.", correct: false }
                ]
              },
              {
                speaker: "Ospite",
                it: "E la camera da letto?",
                es: "¿Y el dormitorio?",
                options: [
                  { it: "È al primo piano.", es: "Está en el primer piso.", correct: true },
                  { it: "Costa cinque euro.", es: "Cuesta cinco euros.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Describe una habitación",
            prompt: "Elige una frase para ubicar un mueble.",
            options: ["Il tavolo è in cucina.", "Il tavolo è una cucina.", "La cucina è un tavolo."],
            answer: "Il tavolo è in cucina.",
            model: "Il tavolo è in cucina. — La mesa está en la cocina."
          }
        }),
        createPracticeLesson({
          id: "casa-2",
          title: "Buscar una vivienda",
          objective: "Entender un anuncio sencillo y preguntar por habitaciones y alquiler.",
          vocabulary: [
            { it: "un appartamento", es: "un apartamento", exampleIt: "Cerco un appartamento piccolo.", exampleEs: "Busco un apartamento pequeño." },
            { it: "una stanza", es: "una habitación", exampleIt: "L'appartamento ha una stanza libera.", exampleEs: "El apartamento tiene una habitación libre." },
            { it: "l'affitto", es: "el alquiler", exampleIt: "Quanto costa l'affitto?", exampleEs: "¿Cuánto cuesta el alquiler?" },
            { it: "arredato", es: "amueblado", exampleIt: "L'appartamento è arredato.", exampleEs: "El apartamento está amueblado." },
            { it: "l'agenzia immobiliare", es: "la inmobiliaria", exampleIt: "Vado all'agenzia immobiliare.", exampleEs: "Voy a la inmobiliaria." }
          ],
          question: {
            title: "Comprende un anuncio",
            prompt: "¿Qué significa «appartamento arredato»?",
            options: ["Apartamento amueblado", "Apartamento sin cocina", "Habitación compartida"],
            answer: "Apartamento amueblado",
            feedback: "Arredato significa amueblado."
          },
          completion: {
            title: "Elige el artículo",
            prompt: "Cerco ___ appartamento in centro.",
            answer: "un",
            options: ["un", "una", "il"],
            hint: "Appartamento es un sustantivo masculino singular."
          },
          dialogue: {
            title: "En una inmobiliaria",
            scene: "Preguntas por un apartamento anunciado. Puedes practicar con un precio inventado.",
            turns: [
              {
                speaker: "Agente",
                it: "Che cosa cerca?",
                es: "¿Qué busca?",
                options: [
                  { it: "Cerco un appartamento con una stanza.", es: "Busco un apartamento con una habitación.", correct: true },
                  { it: "Cerco un biglietto per il treno.", es: "Busco un billete de tren.", correct: false }
                ]
              },
              {
                speaker: "Agente",
                it: "L'appartamento è arredato.",
                es: "El apartamento está amueblado.",
                options: [
                  { it: "Bene. Quanto costa l'affitto?", es: "Bien. ¿Cuánto cuesta el alquiler?", correct: true },
                  { it: "Dov'è la fermata?", es: "¿Dónde está la parada?", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Explica qué necesitas",
            prompt: "Elige una petición sencilla para buscar vivienda.",
            options: ["Cerco una stanza in un appartamento.", "Voglio un treno arredato.", "Abito un affitto."],
            answer: "Cerco una stanza in un appartamento.",
            model: "Cerco una stanza in un appartamento. — Busco una habitación en un apartamento."
          }
        }),
        createPracticeLesson({
          id: "casa-3",
          title: "Pedir permiso y explicar una necesidad",
          objective: "Usar dovere, potere y volere para pedir algo o explicar una tarea.",
          vocabulary: [
            { it: "dovere", es: "tener que / deber", exampleIt: "Devo parlare con l'agenzia.", exampleEs: "Tengo que hablar con la inmobiliaria." },
            { it: "potere", es: "poder", exampleIt: "Posso vedere la stanza?", exampleEs: "¿Puedo ver la habitación?" },
            { it: "volere", es: "querer", exampleIt: "Voglio affittare un appartamento.", exampleEs: "Quiero alquilar un apartamento." },
            { it: "dire", es: "decir", exampleIt: "Può dire l'indirizzo, per favore?", exampleEs: "¿Puede decir la dirección, por favor?" },
            { it: "pulire", es: "limpiar", exampleIt: "Devo pulire la cucina.", exampleEs: "Tengo que limpiar la cocina." }
          ],
          question: {
            title: "Pide permiso",
            prompt: "¿Qué frase pregunta si puedes ver una habitación?",
            options: ["Posso vedere la stanza?", "Devo la stanza.", "Voglio dire la cucina."],
            answer: "Posso vedere la stanza?",
            feedback: "Posso…? se usa para preguntar «¿Puedo…?»."
          },
          completion: {
            title: "Completa una tarea",
            prompt: "Devo ___ la cucina. (limpiar)",
            answer: "pulire",
            hint: "El infinitivo que significa limpiar es pulire."
          },
          dialogue: {
            title: "Visitar un apartamento",
            scene: "Durante una visita preguntas si puedes ver una habitación y confirmas una tarea.",
            turns: [
              {
                speaker: "Proprietaria",
                it: "Vuole vedere la camera?",
                es: "¿Quiere ver el dormitorio?",
                options: [
                  { it: "Sì, posso vederla, per favore?", es: "Sí, ¿puedo verlo, por favor?", correct: true },
                  { it: "Devo pulire il treno.", es: "Tengo que limpiar el tren.", correct: false }
                ]
              },
              {
                speaker: "Proprietaria",
                it: "Deve lasciare la cucina pulita.",
                es: "Tiene que dejar la cocina limpia.",
                options: [
                  { it: "Va bene, devo pulire la cucina.", es: "De acuerdo, tengo que limpiar la cocina.", correct: true },
                  { it: "Voglio la stazione.", es: "Quiero la estación.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Formula una petición",
            prompt: "Elige una frase cortés para pedir ver una habitación.",
            options: ["Posso vedere la stanza, per favore?", "Devo vedere per favore stanza.", "Voglio una stanza pulire."],
            answer: "Posso vedere la stanza, per favore?",
            model: "Posso vedere la stanza, per favore? — ¿Puedo ver la habitación, por favor?"
          }
        })
      ]
    },
    {
      id: "transporte",
      title: "Desplazamientos y transporte",
      lessons: [
        createPracticeLesson({
          id: "trasporte-1",
          title: "Autobús, tren y estación",
          objective: "Reconocer medios de transporte y comprar un billete en la estación.",
          vocabulary: [
            { it: "l'autobus", es: "el autobús", exampleIt: "Prendo l'autobus numero cinque.", exampleEs: "Tomo el autobús número cinco." },
            { it: "il treno", es: "el tren", exampleIt: "Il treno parte alle nove.", exampleEs: "El tren sale a las nueve." },
            { it: "la stazione", es: "la estación", exampleIt: "La stazione è in centro.", exampleEs: "La estación está en el centro." },
            { it: "il biglietto", es: "el billete", exampleIt: "Vorrei un biglietto per Roma.", exampleEs: "Quisiera un billete a Roma." },
            { it: "la biglietteria", es: "la taquilla", exampleIt: "Compro il biglietto in biglietteria.", exampleEs: "Compro el billete en la taquilla." }
          ],
          question: {
            title: "Elige el transporte",
            prompt: "¿Qué medio de transporte es «il treno»?",
            options: ["El tren", "El autobús", "La bicicleta"],
            answer: "El tren",
            feedback: "Il treno significa el tren."
          },
          completion: {
            title: "Pide un billete",
            prompt: "Vorrei un ___ per Roma. (billete)",
            answer: "biglietto",
            hint: "Billete en italiano es biglietto."
          },
          dialogue: {
            title: "En la taquilla",
            scene: "Quieres viajar a Roma y preguntas por un billete sencillo.",
            turns: [
              {
                speaker: "Addetto",
                it: "Dove vuole andare?",
                es: "¿Adónde quiere ir?",
                options: [
                  { it: "Vorrei andare a Roma.", es: "Quisiera ir a Roma.", correct: true },
                  { it: "Vorrei una camera da letto.", es: "Quisiera un dormitorio.", correct: false }
                ]
              },
              {
                speaker: "Addetto",
                it: "Un biglietto per Roma?",
                es: "¿Un billete a Roma?",
                options: [
                  { it: "Sì, per favore.", es: "Sí, por favor.", correct: true },
                  { it: "No, sono la stazione.", es: "No, soy la estación.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Compra un billete",
            prompt: "Escoge una petición cortés que puedas adaptar a otra ciudad.",
            options: ["Vorrei un biglietto per Roma, per favore.", "Vorrei una stazione per Roma.", "Il treno è una biglietteria."],
            answer: "Vorrei un biglietto per Roma, per favore.",
            model: "Vorrei un biglietto per Roma, per favore. — Quisiera un billete a Roma, por favor."
          }
        }),
        createPracticeLesson({
          id: "trasporte-2",
          title: "Horarios, salidas y llegadas",
          objective: "Preguntar por horarios y comprender frases sencillas sobre salir o quedarse.",
          vocabulary: [
            { it: "partire", es: "salir (un medio de transporte)", exampleIt: "A che ora parte il treno?", exampleEs: "¿A qué hora sale el tren?" },
            { it: "arrivare", es: "llegar", exampleIt: "Il treno arriva alle dieci.", exampleEs: "El tren llega a las diez." },
            { it: "sapere", es: "saber", exampleIt: "Sa dov'è il binario?", exampleEs: "¿Sabe dónde está el andén?" },
            { it: "uscire", es: "salir", exampleIt: "Esco dalla stazione.", exampleEs: "Salgo de la estación." },
            { it: "rimanere", es: "quedarse", exampleIt: "Rimango qui fino alle cinque.", exampleEs: "Me quedo aquí hasta las cinco." }
          ],
          question: {
            title: "Comprende un horario",
            prompt: "¿Qué preguntas con «A che ora parte il treno?»",
            options: ["A qué hora sale el tren", "Cuánto cuesta la estación", "Dónde está la casa"],
            answer: "A qué hora sale el tren",
            feedback: "Partire significa salir o partir, especialmente un tren o un autobús."
          },
          completion: {
            title: "Completa la salida",
            prompt: "Il treno ___ alle nove. (sale)",
            answer: "parte",
            hint: "La forma de lui/lei del verbo partire es parte."
          },
          dialogue: {
            title: "Preguntar por un tren",
            scene: "Quieres confirmar la hora de salida y dónde esperar.",
            turns: [
              {
                speaker: "Viaggiatrice",
                it: "Sa a che ora parte il treno?",
                es: "¿Sabe a qué hora sale el tren?",
                options: [
                  { it: "Sì, parte alle nove.", es: "Sí, sale a las nueve.", correct: true },
                  { it: "Sì, rimane una valigia.", es: "Sí, se queda una maleta.", correct: false }
                ]
              },
              {
                speaker: "Viaggiatrice",
                it: "Dov'è il binario?",
                es: "¿Dónde está el andén?",
                options: [
                  { it: "È il binario due.", es: "Es el andén dos.", correct: true },
                  { it: "Esco alle dieci.", es: "Salgo a las diez.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Confirma un horario",
            prompt: "Elige una respuesta útil para indicar la hora de salida.",
            options: ["Il treno parte alle nove.", "Il treno sa alle nove.", "Il binario arriva alle nove."],
            answer: "Il treno parte alle nove.",
            model: "Il treno parte alle nove. — El tren sale a las nueve."
          }
        }),
        createPracticeLesson({
          id: "trasporte-3",
          title: "Rutinas y acciones en curso",
          objective: "Describir una rutina de viaje y una acción que está ocurriendo ahora.",
          vocabulary: [
            { it: "svegliarsi", es: "despertarse", exampleIt: "Mi sveglio alle sette.", exampleEs: "Me despierto a las siete." },
            { it: "la fermata", es: "la parada", exampleIt: "Aspetto alla fermata dell'autobus.", exampleEs: "Espero en la parada del autobús." },
            { it: "sto aspettando", es: "estoy esperando", exampleIt: "Sto aspettando il treno.", exampleEs: "Estoy esperando el tren." },
            { it: "bere", es: "beber", exampleIt: "Bevo un caffè alla stazione.", exampleEs: "Bebo un café en la estación." },
            { it: "il caffè", es: "el café", exampleIt: "Prendo un caffè prima di partire.", exampleEs: "Tomo un café antes de salir." }
          ],
          question: {
            title: "Identifica una acción en curso",
            prompt: "¿Qué frase significa «Estoy esperando el autobús»?",
            options: ["Sto aspettando l'autobus.", "Mi sveglio l'autobus.", "Bevo la fermata."],
            answer: "Sto aspettando l'autobus.",
            feedback: "Stare + gerundio describe una acción que está ocurriendo ahora."
          },
          completion: {
            title: "Completa una rutina",
            prompt: "Mi ___ alle sette. (despertarse)",
            answer: "sveglio",
            hint: "La forma de io es mi sveglio."
          },
          dialogue: {
            title: "En la parada",
            scene: "Esperas el autobús y cuentas lo que estás haciendo.",
            turns: [
              {
                speaker: "Passeggero",
                it: "Che cosa fai?",
                es: "¿Qué haces?",
                options: [
                  { it: "Sto aspettando l'autobus.", es: "Estoy esperando el autobús.", correct: true },
                  { it: "Mi sveglio la fermata.", es: "Me despierto la parada.", correct: false }
                ]
              },
              {
                speaker: "Passeggero",
                it: "Vuoi un caffè?",
                es: "¿Quieres un café?",
                options: [
                  { it: "Sì, grazie. Vorrei un caffè.", es: "Sí, gracias. Quisiera un café.", correct: true },
                  { it: "Sì, sono un binario.", es: "Sí, soy un andén.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Cuenta qué ocurre ahora",
            prompt: "Elige la frase que describe una acción en curso.",
            options: ["Sto aspettando alla fermata.", "Aspetto la fermata ogni giorno.", "Sono la fermata."],
            answer: "Sto aspettando alla fermata.",
            model: "Sto aspettando alla fermata. — Estoy esperando en la parada."
          }
        })
      ]
    },
    {
      id: "compras",
      title: "Compras, comida y ropa",
      lessons: [
        {
          id: "compras-1",
          title: "Los números del 1 al 10 y el precio",
          minutes: 4,
          objective: "Reconocer los números del uno al diez y preguntar cuánto cuesta un producto.",
          vocabulary: [
            { it: "uno, due, tre, quattro, cinque", es: "uno, dos, tres, cuatro, cinco", exampleIt: "Ho due mele.", exampleEs: "Tengo dos manzanas." },
            { it: "sei, sette, otto, nove, dieci", es: "seis, siete, ocho, nueve, diez", exampleIt: "Il negozio apre alle nove.", exampleEs: "La tienda abre a las nueve." },
            { it: "Quanto costa?", es: "¿Cuánto cuesta?", exampleIt: "Quanto costa il pane?", exampleEs: "¿Cuánto cuesta el pan?" },
            { it: "l'euro", es: "el euro", exampleIt: "Costa cinque euro.", exampleEs: "Cuesta cinco euros." },
            { it: "Costa…", es: "Cuesta…", exampleIt: "Costa due euro.", exampleEs: "Cuesta dos euros." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Números y precios",
              instruction: "Escucha los números con calma y practica preguntar el precio.",
              itemIds: ["uno, due, tre, quattro, cinque", "sei, sette, otto, nove, dieci", "Quanto costa?", "l'euro", "Costa…"]
            },
            {
              type: "multipleChoice",
              title: "Pregunta el precio",
              prompt: "¿Cómo preguntas «¿Cuánto cuesta?» en italiano?",
              options: ["Quanto costa?", "Come stai?", "Dove sei?"],
              answer: "Quanto costa?",
              feedback: "Quanto costa? sirve para preguntar el precio de un producto."
            },
            {
              type: "fillBlank",
              title: "Completa el precio",
              prompt: "Costa ___ euro. (Cuesta cinco euros)",
              answer: "cinque",
              acceptedAnswers: ["cinque"],
              options: ["cinque", "ciao", "lavoro"],
              hint: "El número cinco en italiano es cinque."
            },
            {
              type: "dialogue",
              title: "En la panadería",
              scene: "Preguntas el precio del pan y escuchas la respuesta del vendedor.",
              turns: [
                {
                  speaker: "Cliente",
                  it: "Buonasera, desidera del pane?",
                  es: "Buenas tardes, ¿desea pan?",
                  options: [
                    { it: "Sì, vorrei del pane, per favore.", es: "Sí, quisiera pan, por favor.", correct: true },
                    { it: "No, cerco lavoro.", es: "No, busco trabajo.", correct: false }
                  ]
                },
                {
                  speaker: "Venditore",
                  it: "Costa due euro.",
                  es: "Cuesta dos euros.",
                  options: [
                    { it: "Va bene, grazie.", es: "De acuerdo, gracias.", correct: true },
                    { it: "Sono un aiutante.", es: "Soy ayudante.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Pregunta y responde",
              prompt: "Elige la respuesta que indica que algo cuesta dos euros.",
              options: ["Costa due euro.", "È due euro.", "Quanto costa?"],
              answer: "Costa due euro.",
              model: "Quanto costa? — Costa due euro."
            }
          ]
        },
        {
          id: "compras-2",
          title: "Alimentos básicos y pedir en el mercado",
          minutes: 4,
          objective: "Reconocer alimentos básicos y pedirlos con una frase cortés.",
          vocabulary: [
            { it: "il pane", es: "el pan", exampleIt: "Vorrei del pane, per favore.", exampleEs: "Quisiera pan, por favor." },
            { it: "l'acqua", es: "el agua", exampleIt: "Vorrei dell'acqua, per favore.", exampleEs: "Quisiera agua, por favor." },
            { it: "la frutta", es: "la fruta", exampleIt: "Compro la frutta al mercato.", exampleEs: "Compro la fruta en el mercado." },
            { it: "per favore", es: "por favor", exampleIt: "Un chilo di mele, per favore.", exampleEs: "Un kilo de manzanas, por favor." },
            { it: "Vorrei…", es: "Quisiera…", exampleIt: "Vorrei un panino, per favore.", exampleEs: "Quisiera un bocadillo, por favor." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Comida de todos los días",
              instruction: "Escucha las palabras y las frases para pedir alimentos en una tienda.",
              itemIds: ["il pane", "l'acqua", "la frutta", "per favore", "Vorrei…"]
            },
            {
              type: "multipleChoice",
              title: "Comprende el pedido",
              prompt: "«Un pane, per favore.» ¿Qué está pidiendo la persona?",
              options: ["Un pan, por favor", "Un vaso de agua, gracias", "La cuenta, por favor"],
              answer: "Un pan, por favor",
              feedback: "Pane es pan. Para pedir agua se dice acqua."
            },
            {
              type: "fillBlank",
              title: "Completa el pedido",
              prompt: "Vorrei dell'___, per favore. (agua)",
              answer: "acqua",
              acceptedAnswers: ["acqua"],
              options: ["acqua", "lavoro", "buongiorno"],
              hint: "Agua en italiano es acqua."
            },
            {
              type: "dialogue",
              title: "En el mercado",
              scene: "Pides fruta y agua en un puesto del mercado.",
              turns: [
                {
                  speaker: "Venditrice",
                  it: "Buongiorno, cosa desidera?",
                  es: "Buenos días, ¿qué desea?",
                  options: [
                    { it: "Vorrei della frutta, per favore.", es: "Quisiera fruta, por favor.", correct: true },
                    { it: "Cerco lavoro come cuoco.", es: "Busco trabajo como cocinero.", correct: false }
                  ]
                },
                {
                  speaker: "Venditrice",
                  it: "Desidera anche dell'acqua?",
                  es: "¿También desea agua?",
                  options: [
                    { it: "Sì, dell'acqua, grazie.", es: "Sí, agua, gracias.", correct: true },
                    { it: "No, grazie. Solo la frutta.", es: "No, gracias. Solo la fruta.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Haz un pedido cortés",
              prompt: "Escoge una frase para pedir agua en una tienda.",
              options: ["Vorrei dell'acqua, per favore.", "Vorrei un chilo di mele, per favore.", "Quanto costa l'acqua?"],
              answer: "Vorrei dell'acqua, per favore.",
              model: "Vorrei dell'acqua, per favore. — Quisiera agua, por favor."
            }
          ]
        },
        {
          id: "compras-3",
          title: "Cantidades y pago",
          minutes: 5,
          objective: "Pedir una cantidad sencilla, confirmar el precio y cerrar una compra.",
          vocabulary: [
            { it: "un chilo", es: "un kilo", exampleIt: "Un chilo di mele, per favore.", exampleEs: "Un kilo de manzanas, por favor." },
            { it: "mezzo chilo", es: "medio kilo", exampleIt: "Mezzo chilo di pomodori.", exampleEs: "Medio kilo de tomates." },
            { it: "Quanto costa in tutto?", es: "¿Cuánto cuesta en total?", exampleIt: "Quanto costa in tutto?", exampleEs: "¿Cuánto cuesta en total?" },
            { it: "il contante", es: "el efectivo", exampleIt: "Pago in contanti.", exampleEs: "Pago en efectivo." },
            { it: "il resto", es: "el cambio", exampleIt: "Ecco il resto.", exampleEs: "Aquí tiene el cambio." }
          ],
          steps: [
            {
              type: "vocabulary",
              title: "Cantidades y pago",
              instruction: "Escucha estas expresiones útiles para pedir cantidades y pagar.",
              itemIds: ["un chilo", "mezzo chilo", "Quanto costa in tutto?", "il contante", "il resto"]
            },
            {
              type: "multipleChoice",
              title: "Elige la cantidad",
              prompt: "¿Qué significa «mezzo chilo di mele»?",
              options: ["Medio kilo de manzanas", "Un kilo de peras", "Dos kilos de manzanas"],
              answer: "Medio kilo de manzanas",
              feedback: "Mezzo significa medio; chilo significa kilo."
            },
            {
              type: "fillBlank",
              title: "Completa la compra",
              prompt: "___ chilo di mele, per favore. (medio)",
              answer: "Mezzo",
              acceptedAnswers: ["Mezzo", "mezzo"],
              hint: "La expresión para medio kilo es mezzo chilo."
            },
            {
              type: "dialogue",
              title: "Pagar en una tienda",
              scene: "Terminas la compra y confirmas el total antes de pagar.",
              turns: [
                {
                  speaker: "Cliente",
                  it: "Quanto costa in tutto?",
                  es: "¿Cuánto cuesta en total?",
                  options: [
                    { it: "Sono cinque euro, per favore.", es: "Son cinco euros, por favor.", correct: true },
                    { it: "Il negozio chiude alle otto.", es: "La tienda cierra a las ocho.", correct: false }
                  ]
                },
                {
                  speaker: "Commessa",
                  it: "Sono cinque euro.",
                  es: "Son cinco euros.",
                  options: [
                    { it: "Ecco, cinque euro.", es: "Aquí tiene, cinco euros.", correct: true },
                    { it: "Vorrei mezzo chilo di mele.", es: "Quisiera medio kilo de manzanas.", correct: false }
                  ]
                }
              ]
            },
            {
              type: "production",
              title: "Cierra la compra",
              prompt: "Escoge una frase natural para agradecer al terminar de pagar.",
              options: ["Grazie, buona giornata.", "Vorrei mezzo chilo di mele.", "Quanto costa in tutto?"],
              answer: "Grazie, buona giornata.",
              model: "Grazie, buona giornata. — Gracias, que tenga buen día."
            }
          ]
        },
        createPracticeLesson({
          id: "compras-4",
          title: "Ropa, bar y receta sencilla",
          objective: "Pedir una prenda, ordenar algo en un bar y seguir instrucciones simples de una receta.",
          vocabulary: [
            { it: "la maglietta", es: "la camiseta", exampleIt: "Cerco una maglietta blu.", exampleEs: "Busco una camiseta azul." },
            { it: "la taglia", es: "la talla", exampleIt: "Che taglia porta?", exampleEs: "¿Qué talla usa?" },
            { it: "questa", es: "esta (femenino)", exampleIt: "Vorrei provare questa maglietta.", exampleEs: "Quisiera probarme esta camiseta." },
            { it: "al bar", es: "en el bar / cafetería", exampleIt: "Prendo un caffè al bar.", exampleEs: "Tomo un café en la cafetería." },
            { it: "la ricetta", es: "la receta", exampleIt: "Leggo la ricetta e preparo la pasta.", exampleEs: "Leo la receta y preparo la pasta." }
          ],
          question: {
            title: "Pregunta por una talla",
            prompt: "¿Qué frase puedes usar para preguntar si hay otra talla?",
            options: ["Avete questa in un'altra taglia?", "Quanto costa il treno?", "Dov'è la cucina?"],
            answer: "Avete questa in un'altra taglia?",
            feedback: "Taglia significa talla; questa concuerda con un sustantivo femenino singular."
          },
          completion: {
            title: "Elige el demostrativo",
            prompt: "Vorrei provare ___ maglietta. (esta)",
            answer: "questa",
            options: ["questa", "questo", "questi"],
            hint: "Maglietta es femenino singular: se usa questa."
          },
          dialogue: {
            title: "En un bar y una tienda",
            scene: "Primero pides una bebida y luego consultas por una camiseta.",
            turns: [
              {
                speaker: "Barista",
                it: "Che cosa desidera?",
                es: "¿Qué desea?",
                options: [
                  { it: "Un caffè, per favore.", es: "Un café, por favor.", correct: true },
                  { it: "Una taglia per il treno.", es: "Una talla para el tren.", correct: false }
                ]
              },
              {
                speaker: "Commessa",
                it: "Questa maglietta le piace?",
                es: "¿Le gusta esta camiseta?",
                options: [
                  { it: "Sì, posso provarla?", es: "Sí, ¿puedo probármela?", correct: true },
                  { it: "Sì, leggo la ricetta.", es: "Sí, leo la receta.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Combina una compra",
            prompt: "Elige una frase que incluya una prenda y una preferencia.",
            options: ["Mi piace questa maglietta blu.", "Mi piace questi autobus.", "Questa ricetta è una taglia."],
            answer: "Mi piace questa maglietta blu.",
            model: "Mi piace questa maglietta blu. — Me gusta esta camiseta azul."
          }
        })
      ]
    },
    {
      id: "storia",
      title: "Historias, pasado y cultura italiana",
      lessons: [
        createPracticeLesson({
          id: "storia-1",
          title: "Contar qué hice ayer",
          objective: "Comprender y producir frases breves en passato prossimo con verbos frecuentes.",
          vocabulary: [
            { it: "ieri", es: "ayer", exampleIt: "Ieri ho studiato italiano.", exampleEs: "Ayer estudié italiano." },
            { it: "ho fatto", es: "hice / he hecho", exampleIt: "Ho fatto una passeggiata.", exampleEs: "Di un paseo." },
            { it: "ho visto", es: "vi / he visto", exampleIt: "Ho visto un film.", exampleEs: "Vi una película." },
            { it: "sono andato / andata", es: "fui / he ido", exampleIt: "Sono andata al mercato.", exampleEs: "Fui al mercado." },
            { it: "la mattina", es: "la mañana", exampleIt: "La mattina ho fatto colazione.", exampleEs: "Por la mañana desayuné." }
          ],
          question: {
            title: "Reconoce el pasado",
            prompt: "¿Qué frase significa «Ayer vi una película»?",
            options: ["Ieri ho visto un film.", "Oggi vedo un film.", "Domani vado al cinema."],
            answer: "Ieri ho visto un film.",
            feedback: "Ho visto es el passato prossimo del verbo vedere."
          },
          completion: {
            title: "Completa con un participio",
            prompt: "Ieri ho ___ una pizza. (fare)",
            answer: "fatto",
            hint: "El participio irregular de fare es fatto."
          },
          dialogue: {
            title: "Hablar del fin de semana",
            scene: "Un compañero te pregunta qué hiciste ayer. Puedes escoger una respuesta de ejemplo.",
            turns: [
              {
                speaker: "Collega",
                it: "Che cosa hai fatto ieri?",
                es: "¿Qué hiciste ayer?",
                options: [
                  { it: "Ho visto un film e ho studiato.", es: "Vi una película y estudié.", correct: true },
                  { it: "Sono una mattina.", es: "Soy una mañana.", correct: false }
                ]
              },
              {
                speaker: "Collega",
                it: "Sei andata al cinema?",
                es: "¿Fuiste al cine?",
                options: [
                  { it: "Sì, sono andata al cinema.", es: "Sí, fui al cine.", correct: true },
                  { it: "Sì, ho andato al cinema.", es: "Sí, fui al cine.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Cuenta una actividad",
            prompt: "Elige una frase en pasado que puedas adaptar.",
            options: ["Ieri ho fatto una passeggiata.", "Ieri faccio una passeggiata.", "Ieri sono fatto una passeggiata."],
            answer: "Ieri ho fatto una passeggiata.",
            model: "Ieri ho fatto una passeggiata. — Ayer di un paseo."
          }
        }),
        createPracticeLesson({
          id: "storia-2",
          title: "Hablar de mi familia",
          objective: "Usar posesivos sencillos al hablar de familiares y contar una historia breve.",
          vocabulary: [
            { it: "mio padre", es: "mi padre", exampleIt: "Mio padre è nato a Quito.", exampleEs: "Mi padre nació en Quito." },
            { it: "mia sorella", es: "mi hermana", exampleIt: "Mia sorella studia medicina.", exampleEs: "Mi hermana estudia medicina." },
            { it: "i miei genitori", es: "mis padres", exampleIt: "I miei genitori abitano in Ecuador.", exampleEs: "Mis padres viven en Ecuador." },
            { it: "la storia", es: "la historia", exampleIt: "Racconto la storia della mia famiglia.", exampleEs: "Cuento la historia de mi familia." },
            { it: "insieme", es: "juntos / juntas", exampleIt: "Ieri abbiamo cenato insieme.", exampleEs: "Ayer cenamos juntos." }
          ],
          question: {
            title: "Elige el posesivo",
            prompt: "¿Qué expresión significa «mi hermana»?",
            options: ["mia sorella", "mio sorella", "i miei sorella"],
            answer: "mia sorella",
            feedback: "Mia concuerda en género y número con sorella."
          },
          completion: {
            title: "Completa la expresión",
            prompt: "___ padre si chiama Marco. (mi)",
            answer: "mio",
            options: ["mio", "mia", "miei"],
            hint: "Padre es masculino singular: mio padre."
          },
          dialogue: {
            title: "Compartir una historia familiar",
            scene: "Cuentas a un amigo una anécdota sencilla sobre tu familia.",
            turns: [
              {
                speaker: "Amico",
                it: "Dove abitano i tuoi genitori?",
                es: "¿Dónde viven tus padres?",
                options: [
                  { it: "I miei genitori abitano a Lima.", es: "Mis padres viven en Lima.", correct: true },
                  { it: "Mio padre è ieri.", es: "Mi padre es ayer.", correct: false }
                ]
              },
              {
                speaker: "Amico",
                it: "Che cosa avete fatto insieme?",
                es: "¿Qué hicieron juntos?",
                options: [
                  { it: "Abbiamo cenato insieme.", es: "Cenamos juntos.", correct: true },
                  { it: "Siamo insieme la storia.", es: "Somos juntos la historia.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Presenta a un familiar",
            prompt: "Elige una frase sencilla con un posesivo.",
            options: ["Mia sorella studia italiano.", "Miei sorella studia italiana.", "Mio sorella studiato italiano."],
            answer: "Mia sorella studia italiano.",
            model: "Mia sorella studia italiano. — Mi hermana estudia italiano.",
            privacyNote: "Puedes practicar con personajes ficticios y no compartir información familiar real."
          }
        }),
        createPracticeLesson({
          id: "storia-3",
          title: "Regiones, ciudades y escuela",
          objective: "Reconocer regiones y capitales italianas y hablar de estudios.",
          vocabulary: [
            { it: "la regione", es: "la región", exampleIt: "La Toscana è una regione italiana.", exampleEs: "La Toscana es una región italiana." },
            { it: "il capoluogo", es: "la capital regional", exampleIt: "Firenze è il capoluogo della Toscana.", exampleEs: "Florencia es la capital de Toscana." },
            { it: "la scuola", es: "la escuela", exampleIt: "La scuola è vicino alla stazione.", exampleEs: "La escuela está cerca de la estación." },
            { it: "il corso", es: "el curso", exampleIt: "Frequento un corso di italiano.", exampleEs: "Asisto a un curso de italiano." },
            { it: "studiare", es: "estudiar", exampleIt: "Studio italiano ogni giorno.", exampleEs: "Estudio italiano todos los días." }
          ],
          question: {
            title: "Ubica una ciudad",
            prompt: "¿Cuál es la capital de Italia?",
            options: ["Roma", "Firenze", "Torino"],
            answer: "Roma",
            feedback: "Roma es la capital de Italia; Firenze es la capital de la región Toscana."
          },
          completion: {
            title: "Completa tu actividad",
            prompt: "Io ___ italiano a scuola. (estudiar)",
            answer: "studio",
            hint: "La forma de io del verbo studiare es studio."
          },
          dialogue: {
            title: "En un curso",
            scene: "Conoces a alguien que también estudia italiano.",
            turns: [
              {
                speaker: "Studente",
                it: "Che cosa studi?",
                es: "¿Qué estudias?",
                options: [
                  { it: "Studio italiano.", es: "Estudio italiano.", correct: true },
                  { it: "Sono una regione.", es: "Soy una región.", correct: false }
                ]
              },
              {
                speaker: "Studente",
                it: "In quale città?",
                es: "¿En qué ciudad?",
                options: [
                  { it: "A Roma.", es: "En Roma.", correct: true },
                  { it: "Un corso.", es: "Un curso.", correct: false }
                ]
              }
            ]
          },
          production: {
            title: "Habla de tus estudios",
            prompt: "Elige una frase que puedas completar con una ciudad.",
            options: ["Studio italiano a Roma.", "Studio la regione a italiano.", "Il capoluogo studia a Roma."],
            answer: "Studio italiano a Roma.",
            model: "Studio italiano a Roma. — Estudio italiano en Roma."
          }
        })
      ]
    }
  ]
};

attachGrammarNotes();

function attachRemainingItalianGrammarNotes() {
  const notes = {
    "casa-1": {
      title: "Ubicar objetos con essere y las preposiciones",
      explanation: "Para decir dónde está algo, conjuga essere y añade una preposición como in, su o accanto a. Los artículos il y la cambian con el género del sustantivo.",
      pattern: "Il tavolo è in cucina.\nLa sedia è accanto al tavolo.",
      examples: [
        { it: "Il letto è nella camera.", es: "La cama está en la habitación." },
        { it: "Le sedie sono vicino alla finestra.", es: "Las sillas están cerca de la ventana." }
      ],
      tip: "In + il se contrae en nel; a + la se contrae en alla."
    },
    "casa-2": {
      title: "Describir una vivienda con c'è y ci sono",
      explanation: "C'è presenta una cosa singular y ci sono presenta varias. Para expresar una búsqueda, usa cercare más el sustantivo sin una preposición adicional.",
      pattern: "c'è + singular · ci sono + plural\nCerco un appartamento.",
      examples: [
        { it: "C'è una camera grande.", es: "Hay una habitación grande." },
        { it: "Ci sono due stanze e una cucina.", es: "Hay dos habitaciones y una cocina." }
      ],
      tip: "C'è es la forma contraída de ci è; no se usa ci sono con un sustantivo singular."
    },
    "casa-3": {
      title: "Pedir permiso con potere",
      explanation: "Potere expresa posibilidad o permiso. Va conjugado antes de un segundo verbo en infinitivo; volere expresa deseo y dovere, necesidad u obligación.",
      pattern: "posso + infinitivo · voglio + infinitivo\nDevo aprire la finestra?",
      examples: [
        { it: "Posso aprire la finestra, per favore?", es: "¿Puedo abrir la ventana, por favor?" },
        { it: "Devo pulire la stanza.", es: "Tengo que limpiar la habitación." }
      ],
      tip: "Después de posso o devo, conserva el infinitivo: posso aprire, devo pulire."
    },
    "trasporte-1": {
      title: "Pedir un billete con vorrei",
      explanation: "Vorrei es una petición cortés que significa «quisiera». Para indicar destino se usa per; con los medios de transporte son frecuentes in treno y in autobus.",
      pattern: "Vorrei un biglietto per Roma.\nViaggio in treno / in autobus.",
      examples: [
        { it: "Vorrei un biglietto per Milano, per favore.", es: "Quisiera un billete a Milán, por favor." },
        { it: "Vado alla stazione in autobus.", es: "Voy a la estación en autobús." }
      ],
      tip: "La expresión correcta es in treno, sin artículo, cuando indicas el medio de transporte."
    },
    "trasporte-2": {
      title: "Hablar de horarios y salidas",
      explanation: "El presente sirve para horarios programados. Usa a con una hora concreta; partire significa salir y arrivare, llegar.",
      pattern: "Il treno parte alle nove.\nL'autobus arriva alla stazione.",
      examples: [
        { it: "A che ora parte il treno?", es: "¿A qué hora sale el tren?" },
        { it: "Il treno arriva alle dieci.", es: "El tren llega a las diez." }
      ],
      tip: "Con la una se usa all'una; con otras horas, alle due, alle tre, etc."
    },
    "trasporte-3": {
      title: "Distinguir una rutina de una acción en curso",
      explanation: "El presente simple italiano expresa rutinas. Para una acción en curso puede usarse stare conjugado más gerundio: sto aspettando.",
      pattern: "Di solito prendo l'autobus.\nSto aspettando il treno.",
      examples: [
        { it: "Ogni giorno vado al lavoro in autobus.", es: "Todos los días voy al trabajo en autobús." },
        { it: "Sto aspettando alla fermata.", es: "Estoy esperando en la parada." }
      ],
      tip: "El gerundio de los verbos en -are suele terminar en -ando: aspettare → aspettando."
    },
    "compras-1": {
      title: "Preguntar por un precio",
      explanation: "Quanto costa? pregunta el precio de una cosa; quanto costano? se usa para varias. Quanto concuerda con el verbo en singular o plural.",
      pattern: "Quanto costa? · Costa cinque euro.\nQuanto costano? · Costano dieci euro.",
      examples: [
        { it: "Quanto costa questa maglietta?", es: "¿Cuánto cuesta esta camiseta?" },
        { it: "Quanto costano le mele?", es: "¿Cuánto cuestan las manzanas?" }
      ],
      tip: "Euro no cambia en plural: un euro, cinque euro."
    },
    "compras-2": {
      title: "Pedir alimentos con vorrei",
      explanation: "Vorrei + sustantivo permite hacer un pedido amable. Para un producto singular, conserva el artículo: vorrei una mela; para algunas cantidades se usa del, della o dell'.",
      pattern: "Vorrei una mela.\nVorrei del pane, per favore.",
      examples: [
        { it: "Vorrei dell'acqua, per favore.", es: "Quisiera agua, por favor." },
        { it: "Vorrei due pomodori.", es: "Quisiera dos tomates." }
      ],
      tip: "Dell'acqua se forma con di + l'acqua; el apóstrofo aparece antes de una vocal."
    },
    "compras-3": {
      title: "Expresar cantidades y pagar",
      explanation: "Usa del, della o dei para una cantidad no especificada; usa di después de una cantidad exacta. Pagare in contanti significa pagar en efectivo.",
      pattern: "del pane · della frutta · due chili di mele\nPago con la carta. · Pago in contanti.",
      examples: [
        { it: "Vorrei un chilo di mele.", es: "Quisiera un kilo de manzanas." },
        { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" }
      ],
      tip: "Después de un número o medida, suele usarse di: due bottiglie di acqua."
    },
    "compras-4": {
      title: "Pedir en una tienda o en un bar",
      explanation: "Vorrei es una petición cortés para comida o ropa. Questo y questa señalan un sustantivo masculino o femenino singular.",
      pattern: "questo cappotto · questa maglietta\nVorrei un caffè, per favore.",
      examples: [
        { it: "Vorrei un caffè e un panino, per favore.", es: "Quisiera un café y un sándwich, por favor." },
        { it: "Quanto costa questa camicia?", es: "¿Cuánto cuesta esta camisa?" }
      ],
      tip: "El demostrativo concuerda con el nombre: questo vestito, questa camicia."
    },
    "storia-1": {
      title: "Formar el passato prossimo",
      explanation: "El passato prossimo combina essere o avere en presente con el participio pasado. Muchos verbos usan avere; varios verbos de movimiento usan essere.",
      pattern: "ho visitato · abbiamo mangiato\nsono andato / andata · siamo arrivati / arrivate",
      examples: [
        { it: "Ieri ho visitato il museo.", es: "Ayer visité el museo." },
        { it: "Sono andata a scuola.", es: "Fui a la escuela. (hablante femenina)" }
      ],
      tip: "Con essere, el participio concuerda con la persona: andato, andata, andati, andate."
    },
    "storia-2": {
      title: "Usar los posesivos con la familia",
      explanation: "Los posesivos concuerdan normalmente con el objeto poseído. Con un familiar singular suelen ir sin artículo: mia sorella; con familiares plurales, se usa el artículo.",
      pattern: "mio fratello · mia sorella\nil mio amico · i miei fratelli",
      examples: [
        { it: "Mia sorella studia italiano.", es: "Mi hermana estudia italiano." },
        { it: "I miei genitori vivono a Roma.", es: "Mis padres viven en Roma." }
      ],
      tip: "La excepción común es loro: la loro madre. Con nombres de parentesco modificados también puede aparecer el artículo: la mia sorella maggiore."
    },
    "storia-3": {
      title: "Hablar de estudios y lugares",
      explanation: "Los verbos regulares en presente cambian su terminación según la persona. Para decir dónde estudias, usa a con una ciudad y in con un país.",
      pattern: "studio · studi · studia · studiamo\nstudio a Roma · studio in Italia",
      examples: [
        { it: "Studio italiano a Roma.", es: "Estudio italiano en Roma." },
        { it: "Mio fratello studia in Italia.", es: "Mi hermano estudia en Italia." }
      ],
      tip: "Los nombres de idiomas suelen escribirse con minúscula: italiano, spagnolo, inglese."
    }
  };
  let added = 0;
  for (const lesson of window.ITALIAN_A1_CURRICULUM.units.flatMap((unit) => unit.lessons)) {
    const note = notes[lesson.id];
    if (!note || lesson.steps.some((step) => step.type === "grammar")) continue;
    lesson.steps.splice(1, 0, {
      type: "grammar",
      title: note.title,
      explanation: note.explanation,
      pattern: note.pattern,
      examples: note.examples,
      tip: note.tip
    });
    lesson.minutes += 2;
    added += 1;
  }
  if (added !== Object.keys(notes).length) throw new Error("No se pudieron añadir todas las explicaciones gramaticales finales de italiano.");
  window.ITALIAN_A1_CURRICULUM.metadata.estimatedMinutes += added * 2;
}

attachRemainingItalianGrammarNotes();

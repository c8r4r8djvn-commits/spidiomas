function createEnglishLesson({
  id,
  title,
  objective,
  vocabulary,
  fill,
  conversation,
  practice
}) {
  const [firstWord, secondWord, thirdWord] = vocabulary;
  return {
    id,
    title,
    minutes: 5,
    objective,
    vocabulary: vocabulary.map(([en, es, exampleEn, exampleEs]) => ({
      en,
      es,
      exampleEn,
      exampleEs
    })),
    steps: [
      {
        type: "vocabulary",
        title: "Escucha y relaciona",
        instruction: "Escucha las expresiones, lee los ejemplos y repite a tu ritmo.",
        itemIds: vocabulary.map(([en]) => en)
      },
      {
        type: "multipleChoice",
        title: "Comprende el vocabulario",
        prompt: `¿Qué significa “${firstWord[0]}”?`,
        options: [firstWord[1], secondWord[1], thirdWord[1]],
        answer: firstWord[1],
        feedback: `“${firstWord[0]}” significa «${firstWord[1]}».`
      },
      {
        type: "fillBlank",
        title: "Completa la frase",
        prompt: fill.prompt,
        answer: fill.answer,
        acceptedAnswers: fill.acceptedAnswers || [fill.answer],
        hint: fill.hint
      },
      {
        type: "dialogue",
        title: conversation.title,
        scene: conversation.scene,
        turns: [
          {
            speaker: conversation.speaker,
            en: conversation.prompt,
            es: conversation.promptEs,
            options: [
              { en: conversation.answer, es: conversation.answerEs, correct: true },
              { en: conversation.wrong, es: conversation.wrongEs, correct: false }
            ]
          }
        ]
      },
      {
        type: "production",
        title: "Practica una frase útil",
        prompt: practice.prompt,
        options: [practice.answer, practice.wrong],
        answer: practice.answer,
        model: `${practice.answer} — ${practice.answerEs}`,
        privacyNote: "Puedes practicar en voz alta o en silencio. No compartas datos personales."
      }
    ]
  };
}

function attachEnglishGrammarNotes() {
  const notes = {
    "en-greetings-1": {
      title: "Elegir un saludo según la situación",
      explanation: "En inglés se usa you tanto con amigos como en situaciones formales. El saludo y el tono ayudan a mostrar cortesía: puedes empezar con Hello o Good morning y usar please al pedir algo.",
      pattern: "INFORMAL: Hi, Sam! · NEUTRAL: Hello, Ms. Lee.\nMORNING: Good morning. · EVENING: Good evening.",
      examples: [
        { en: "Hi, Alex! How are you?", es: "¡Hola, Alex! ¿Cómo estás?" },
        { en: "Good morning, Ms. Lee. Nice to meet you.", es: "Buenos días, señora Lee. Encantado/a de conocerla." }
      ],
      tip: "Good night se usa normalmente al despedirse para ir a dormir; para saludar por la noche, usa Good evening."
    },
    "en-greetings-2": {
      title: "Presentarte con el verbo be",
      explanation: "En inglés normalmente se expresa el sujeto: I, you, he, she o they. Be cambia según la persona. Para decir tu nombre, son naturales My name is… e I’m…",
      pattern: "I am (I'm) · you are (you're) · he / she is (he's / she's)\nMy name is Ana. · I'm from Ecuador.",
      examples: [
        { en: "I'm Ana, and I'm from Peru.", es: "Soy Ana y soy de Perú." },
        { en: "He's Leo. He's from Ecuador.", es: "Él es Leo. Es de Ecuador." }
      ],
      tip: "Las formas contraídas I'm, you're y he's son muy frecuentes al hablar. El apóstrofo marca las letras que se omiten."
    },
    "en-greetings-3": {
      title: "Pedir ayuda con cortesía",
      explanation: "Please hace más amable una petición. Could you…? sirve para pedir ayuda o que repitan algo; Excuse me permite llamar la atención con cortesía.",
      pattern: "Excuse me. · Could you repeat that, please?\nCan you speak more slowly, please?",
      examples: [
        { en: "I don't understand. Could you repeat that, please?", es: "No entiendo. ¿Podría repetirlo, por favor?" },
        { en: "Thank you for your help. You're welcome!", es: "Gracias por tu ayuda. ¡De nada!" }
      ],
      tip: "Could you…? es una petición amable. Después de can o could, el verbo va en su forma básica: could repeat, no could to repeat."
    },
    "en-greetings-4": {
      title: "Reconocer letras y sonidos frecuentes",
      explanation: "El alfabeto inglés tiene 26 letras, pero la relación entre letras y sonidos no siempre es directa. Aprende a deletrear tu nombre y presta atención a sonidos frecuentes como th.",
      pattern: "A, B, C… · How do you spell it? → A-N-A\nTH: think /θ/ · this /ð/ · H: hello",
      examples: [
        { en: "How do you spell your name? A-N-A.", es: "¿Cómo se deletrea tu nombre? A-N-A." },
        { en: "Thank you. This is my name.", es: "Gracias. Este es mi nombre." }
      ],
      tip: "La pronunciación de th no tiene un equivalente exacto en español. Escucha el audio y practica think y this por separado."
    },
    "en-details-1": {
      title: "Preguntar el nombre y el origen",
      explanation: "Las preguntas con be suelen poner el verbo antes del sujeto: You are… se convierte en Are you…? Las palabras interrogativas como what y where van al comienzo.",
      pattern: "What is your name? → My name is Ana.\nWhere are you from? → I'm from Chile.",
      examples: [
        { en: "What's your name? My name is Ana García.", es: "¿Cómo te llamas? Me llamo Ana García." },
        { en: "Where is he from? He's from Ecuador.", es: "¿De dónde es él? Es de Ecuador." }
      ],
      tip: "What's es la forma corta de what is. En una conversación también puedes presentarte directamente: I'm Ana."
    },
    "en-details-2": {
      title: "Dar números de teléfono y direcciones",
      explanation: "Los números de teléfono suelen decirse cifra por cifra. Para una dirección se usa street, road o avenue; las direcciones en inglés suelen colocar el número antes del nombre de la calle.",
      pattern: "My phone number is… · My address is…\n25 King Street · zero / oh (0)",
      examples: [
        { en: "I live at 25 King Street.", es: "Vivo en el número 25 de King Street." },
        { en: "My number is 0-7-2…", es: "Mi número es 0-7-2…" }
      ],
      tip: "Usa un número y una dirección inventados para practicar. En algunos países se dice oh para el cero en un teléfono."
    },
    "en-details-3": {
      title: "Completar formularios y pedir aclaraciones",
      explanation: "En formularios, first name es nombre y last name o surname es apellido. Usa can o could para pedir ayuda; el verbo que sigue va sin to.",
      pattern: "first name = nombre · last name = apellido\nCan you help me? · Could you repeat that?",
      examples: [
        { en: "Could you help me complete this form?", es: "¿Podría ayudarme a completar este formulario?" },
        { en: "I don't understand this question.", es: "No entiendo esta pregunta." }
      ],
      tip: "No escribas información real en ejercicios públicos. Puedes inventar tus datos para practicar."
    },
    "en-details-4": {
      title: "Decir cómo estás y preguntar la hora",
      explanation: "Be aparece en preguntas y respuestas sobre estados: How are you? I'm fine. Para decir la hora, se usa It's…; puedes aprender primero la forma digital más directa.",
      pattern: "How are you? → I'm fine, thanks.\nWhat time is it? → It's eight o'clock.",
      examples: [
        { en: "Hi, how are you? I'm fine, thanks. And you?", es: "Hola, ¿cómo estás? Estoy bien, gracias. ¿Y tú?" },
        { en: "Excuse me, what time is it? It's eight o'clock.", es: "Disculpe, ¿qué hora es? Son las ocho." }
      ],
      tip: "En inglés se dice It's one o'clock y It's eight o'clock. El sujeto it forma parte de la expresión."
    },
    "en-details-5": {
      title: "Usar meses, fechas y números grandes",
      explanation: "Los meses y días de la semana empiezan con mayúscula. En fechas, el orden cambia según la variedad: en EE. UU. suele ir mes-día y en Reino Unido día-mes.",
      pattern: "My birthday is in May.\nMonday · January · one hundred (100) · one thousand (1,000)",
      examples: [
        { en: "My birthday is in May.", es: "Mi cumpleaños es en mayo." },
        { en: "The meeting is on Monday, June 12.", es: "La reunión es el lunes 12 de junio." }
      ],
      tip: "Usa in con meses (in May) y on con días o fechas (on Monday, on June 12)."
    },
    "en-family-1": {
      title: "Hablar de la familia con have",
      explanation: "Have got y have expresan posesión. En inglés se suele usar my, your, his o her antes del familiar; el posesivo concuerda con quien posee.",
      pattern: "I have a sister. · She has a brother.\nmy family · his mother · her father",
      examples: [
        { en: "I have one brother and two sisters.", es: "Tengo un hermano y dos hermanas." },
        { en: "Her mother is a teacher.", es: "Su madre (de ella) es profesora." }
      ],
      tip: "Usa has con he o she en presente: He has a sister. Con I, you, we y they, usa have."
    },
    "en-family-2": {
      title: "Decir de dónde eres y dónde vives",
      explanation: "Usa be para nacionalidad y origen (I'm Mexican; I'm from Mexico) y live para decir dónde resides. En presente, he y she suelen añadir -s al verbo.",
      pattern: "I'm from Peru. · I live in Lima.\nHe lives in Quito. · She is Colombian.",
      examples: [
        { en: "I'm from Ecuador, and I live in Quito.", es: "Soy de Ecuador y vivo en Quito." },
        { en: "She lives in London. She's British.", es: "Ella vive en Londres. Es británica." }
      ],
      tip: "Usa in delante de ciudades y países: in Lima, in Peru. Los gentilicios en inglés empiezan con mayúscula."
    },
    "en-family-3": {
      title: "Presentar a alguien y usar el posesivo 's",
      explanation: "Para indicar que algo pertenece a una persona, añade 's al nombre: Ana's brother. Para presentar a varias personas puedes usar this is o these are.",
      pattern: "Ana's brother = el hermano de Ana\nThis is my mother. · These are my parents.",
      examples: [
        { en: "This is my sister, Ana. Her son is two.", es: "Esta es mi hermana, Ana. Su hijo tiene dos años." },
        { en: "These are my parents. Their names are Luis and Marta.", es: "Estos son mis padres. Se llaman Luis y Marta." }
      ],
      tip: "No confundas el posesivo his (de él) con he's (he is). El apóstrofo de he's marca una contracción."
    },
    "en-work-1": {
      title: "Nombrar profesiones con a y an",
      explanation: "Para decir una profesión en singular, normalmente se usa a o an: a teacher, an engineer. Elige a o an según el sonido inicial de la palabra siguiente.",
      pattern: "I am a teacher. · He is an engineer.\nShe works as a cook.",
      examples: [
        { en: "I'm a student, and my sister is a nurse.", es: "Soy estudiante y mi hermana es enfermera." },
        { en: "He's an office assistant.", es: "Él es auxiliar de oficina." }
      ],
      tip: "Usa an antes de sonido vocálico, no simplemente antes de una vocal escrita: an engineer, a university student."
    },
    "en-work-2": {
      title: "Expresar horarios y disponibilidad",
      explanation: "El presente simple describe horarios y rutinas. Usa at con una hora, in con partes del día y on con días. En he o she, el verbo suele terminar en -s.",
      pattern: "I start at eight. · She works in the morning.\nWe are available on Monday.",
      examples: [
        { en: "I start work at eight in the morning.", es: "Empiezo a trabajar a las ocho de la mañana." },
        { en: "He works on Saturdays.", es: "Él trabaja los sábados." }
      ],
      tip: "La -s de tercera persona se aplica al verbo: she works, pero I work."
    },
    "en-work-3": {
      title: "Dar instrucciones con imperativos y can",
      explanation: "El imperativo usa el verbo en forma básica para dar instrucciones: Open the door. Can y could permiten pedir o indicar una habilidad; después va el verbo básico.",
      pattern: "Open the window, please.\nCan you clean the table? · I can help.",
      examples: [
        { en: "Please prepare the room and clean the table.", es: "Por favor, prepara la sala y limpia la mesa." },
        { en: "Could you repeat the instruction, please?", es: "¿Podría repetir la instrucción, por favor?" }
      ],
      tip: "Añade please para suavizar una instrucción. No uses to después de can o could: can help, no can to help."
    },
    "en-work-4": {
      title: "Hablar de estudios, trabajo y gustos",
      explanation: "Usa like + sustantivo para expresar gustos. Si después viene una actividad, es frecuente usar el verbo terminado en -ing: I like reading.",
      pattern: "I like my job. · She likes music.\nWe like studying English.",
      examples: [
        { en: "I like my job, and I like learning English.", es: "Me gusta mi trabajo y me gusta aprender inglés." },
        { en: "He likes his colleagues.", es: "A él le gustan sus compañeros de trabajo." }
      ],
      tip: "Con he y she, añade -s a like: she likes. Después de like, puedes usar un sustantivo o un verbo en -ing."
    }
  };

  const lessonIds = Object.keys(notes);
  for (const unit of window.ENGLISH_A1_CURRICULUM.units) {
    for (const lesson of unit.lessons) {
      const note = notes[lesson.id];
      if (!note) continue;
      lesson.steps.splice(1, 0, {
        type: "grammar",
        title: note.title,
        explanation: note.explanation,
        pattern: note.pattern,
        examples: note.examples,
        tip: note.tip
      });
      lesson.minutes += 2;
    }
  }
  if (lessonIds.length !== 16) throw new Error("El curso de inglés debe tener 16 explicaciones gramaticales iniciales.");
  window.ENGLISH_A1_CURRICULUM.metadata.estimatedMinutes += lessonIds.length * 2;
}

window.ENGLISH_A1_CURRICULUM = {
  metadata: {
    language: "en",
    languageName: "Inglés",
    speechLanguage: "en-US",
    supportLanguage: "es",
    level: "A1",
    audience: "Hispanohablantes que empiezan desde cero",
    estimatedMinutes: 145,
    design: "Ocho unidades progresivas con comunicación, gramática, pronunciación, léxico y práctica"
  },
  roadmap: [
    { id: "en-greetings", title: "Saludos y presentaciones", canDo: "Saludar, presentarte, deletrear tu nombre y manejar intercambios breves.", grammar: "pronombres personales y verbo be", sounds: "alfabeto y sonidos frecuentes", vocabulary: "saludos, cortesía y números del 1 al 10", game: "reto de nombres y números" },
    { id: "en-details", title: "Datos personales y vida diaria", canDo: "Hablar de tu origen, dirección, estado de ánimo, horarios y fechas.", grammar: "preguntas con be, posesivos y preposiciones de tiempo", sounds: "entonación de preguntas", vocabulary: "números, meses, direcciones y formularios", game: "calendario y reloj" },
    { id: "en-family", title: "La familia y los lugares", canDo: "Presentar a tu familia y decir de dónde eres y dónde vives.", grammar: "have/has, posesivos y presente simple", sounds: "terminaciones frecuentes", vocabulary: "familia, países y domicilio", game: "árbol familiar" },
    { id: "en-work", title: "¿A qué te dedicas?", canDo: "Hablar de profesiones, estudios, tareas, horarios y preferencias.", grammar: "presente simple, imperativos, can y like + -ing", sounds: "ritmo y acento de frase", vocabulary: "profesiones, lugares de trabajo y estudio", game: "mímica de profesiones" },
    { id: "en-home", title: "La casa y dónde están las cosas", canDo: "Describir una vivienda, ubicar objetos y expresar necesidades.", grammar: "there is/are, artículos, preposiciones y want to", sounds: "acento de las palabras", vocabulary: "habitaciones, muebles y vivienda", game: "adivina el objeto" },
    { id: "en-travel", title: "Desplazamientos y transporte", canDo: "Moverte en autobús o tren, preguntar por un billete y describir una rutina.", grammar: "presente simple y continuo; can/could", sounds: "consonantes finales", vocabulary: "estación, billetes y medios de transporte", game: "crucigrama de viajes" },
    { id: "en-shopping", title: "Compras, comida y ropa", canDo: "Comprar alimentos o ropa, pedir en un bar y hablar de cantidades.", grammar: "some/any, contables e incontables, this/these", sounds: "ritmo en frases cotidianas", vocabulary: "alimentos, medidas, prendas y tienda", game: "menú y receta" },
    { id: "en-stories", title: "Historias, pasado y cultura", canDo: "Contar hechos pasados sencillos y hablar de personas y lugares.", grammar: "was/were, pasado simple y posesivos", sounds: "entonación y fluidez narrativa", vocabulary: "familia, ciudades y escuela", game: "relato encadenado" }
  ],
  units: [
    {
      id: "en-greetings",
      lessons: [
        createEnglishLesson({ id: "en-greetings-1", title: "Saludar según la situación", objective: "Elegir un saludo o despedida adecuado y preguntar cómo está otra persona.", vocabulary: [
          ["Hi", "hola (informal)", "Hi, Sam!", "¡Hola, Sam!"],
          ["Good morning", "buenos días", "Good morning, Ms. Lee.", "Buenos días, señora Lee."],
          ["Good evening", "buenas tardes/noches (al saludar)", "Good evening, Mr. Brown.", "Buenas tardes, señor Brown."],
          ["Goodbye", "adiós", "Goodbye and have a nice day.", "Adiós y que tengas un buen día."]
        ], fill: { prompt: "Good ___, Ms. Lee. (saludo por la mañana)", answer: "morning", hint: "Usa la palabra para saludar por la mañana." }, conversation: { title: "Saludar a una persona", scene: "Llegas por la mañana a una recepción.", speaker: "Receptionist", prompt: "Good morning. How are you?", promptEs: "Buenos días. ¿Cómo está?", answer: "Good morning. I'm fine, thank you.", answerEs: "Buenos días. Estoy bien, gracias.", wrong: "Good night. I'm a table.", wrongEs: "Buenas noches. Soy una mesa." }, practice: { prompt: "Elige un saludo apropiado para conocer a una persona por la mañana.", answer: "Good morning. Nice to meet you.", answerEs: "Buenos días. Encantado/a de conocerle.", wrong: "Good night. See you yesterday." } }),
        createEnglishLesson({ id: "en-greetings-2", title: "Decir quién soy", objective: "Decir tu nombre, deletrearlo y compartir información personal básica.", vocabulary: [
          ["My name is", "me llamo / mi nombre es", "My name is Ana.", "Me llamo Ana."],
          ["I'm", "soy / estoy", "I'm Leo.", "Soy Leo."],
          ["from", "de (origen)", "I'm from Ecuador.", "Soy de Ecuador."],
          ["Nice to meet you", "encantado/a de conocerte", "Nice to meet you, Ana.", "Encantado/a de conocerte, Ana."]
        ], fill: { prompt: "My name ___ Ana. (Mi nombre es Ana.)", answer: "is", hint: "Completa con la forma de be que acompaña a my name." }, conversation: { title: "Presentarse", scene: "Conoces a alguien en un curso.", speaker: "Alex", prompt: "What's your name?", promptEs: "¿Cómo te llamas?", answer: "My name is Ana.", answerEs: "Me llamo Ana.", wrong: "I'm eight o'clock.", wrongEs: "Soy las ocho en punto." }, practice: { prompt: "Elige una frase para decir tu nombre.", answer: "My name is Ana.", answerEs: "Me llamo Ana.", wrong: "My name are Ana." } }),
        createEnglishLesson({ id: "en-greetings-3", title: "Cortesía y pedir que repitan", objective: "Usar expresiones de cortesía y pedir que hablen más despacio.", vocabulary: [
          ["please", "por favor", "Could you help me, please?", "¿Podrías ayudarme, por favor?"],
          ["thank you", "gracias", "Thank you for your help.", "Gracias por tu ayuda."],
          ["Excuse me", "disculpe / perdona", "Excuse me, where is the door?", "Disculpe, ¿dónde está la puerta?"],
          ["repeat", "repetir", "Could you repeat that?", "¿Podrías repetir eso?"]
        ], fill: { prompt: "Could you ___ that, please? (¿Podría repetir eso?)", answer: "repeat", hint: "Usa el verbo que significa «repetir»." }, conversation: { title: "Pedir una repetición", scene: "No escuchaste bien una indicación.", speaker: "Teacher", prompt: "The class is in room twelve.", promptEs: "La clase es en el aula doce.", answer: "Could you repeat that, please?", answerEs: "¿Podría repetirlo, por favor?", wrong: "You're welcome.", wrongEs: "De nada." }, practice: { prompt: "Elige una petición cortés para pedir ayuda.", answer: "Could you help me, please?", answerEs: "¿Podría ayudarme, por favor?", wrong: "Repeat me now!" } }),
        createEnglishLesson({ id: "en-greetings-4", title: "Letras, días y números", objective: "Deletrear tu nombre y reconocer días de la semana y números básicos.", vocabulary: [
          ["spell", "deletrear", "How do you spell Ana?", "¿Cómo se deletrea Ana?"],
          ["Monday", "lunes", "The class is on Monday.", "La clase es el lunes."],
          ["Tuesday", "martes", "See you on Tuesday.", "Nos vemos el martes."],
          ["eight", "ocho", "My room is number eight.", "Mi habitación es la número ocho."]
        ], fill: { prompt: "How do you ___ your name? (¿Cómo se deletrea tu nombre?)", answer: "spell", hint: "Usa el verbo para decir las letras de una palabra." }, conversation: { title: "Deletrear un nombre", scene: "La profesora confirma cómo se escribe tu nombre.", speaker: "Teacher", prompt: "How do you spell your name?", promptEs: "¿Cómo se deletrea tu nombre?", answer: "A-N-A.", answerEs: "A-N-A.", wrong: "It's Monday.", wrongEs: "Es lunes." }, practice: { prompt: "Elige una respuesta para decir que tu clase es el lunes.", answer: "My class is on Monday.", answerEs: "Mi clase es el lunes.", wrong: "My class are Monday." } })
      ]
    },
    {
      id: "en-details",
      lessons: [
        createEnglishLesson({ id: "en-details-1", title: "Nombre, origen e idiomas", objective: "Preguntar por el nombre, el país de origen y el idioma de otra persona.", vocabulary: [
          ["first name", "nombre", "My first name is Ana.", "Mi nombre es Ana."],
          ["last name", "apellido", "My last name is García.", "Mi apellido es García."],
          ["country", "país", "What country are you from?", "¿De qué país eres?"],
          ["language", "idioma", "I speak Spanish.", "Hablo español."]
        ], fill: { prompt: "Where ___ you from? (¿De dónde eres?)", answer: "are", hint: "En preguntas con you, be adopta la forma are." }, conversation: { title: "Preguntar por el origen", scene: "Conversas con una compañera nueva.", speaker: "Mia", prompt: "Where are you from?", promptEs: "¿De dónde eres?", answer: "I'm from Peru.", answerEs: "Soy de Perú.", wrong: "I'm from Tuesday.", wrongEs: "Soy de martes." }, practice: { prompt: "Elige una respuesta para decir tu país de origen.", answer: "I'm from Peru.", answerEs: "Soy de Perú.", wrong: "I from Peru." } }),
        createEnglishLesson({ id: "en-details-2", title: "Números, teléfono y dirección", objective: "Dar un número de teléfono y decir una dirección sencilla.", vocabulary: [
          ["phone number", "número de teléfono", "What's your phone number?", "¿Cuál es tu número de teléfono?"],
          ["address", "dirección", "What's your address?", "¿Cuál es tu dirección?"],
          ["street", "calle", "I live on King Street.", "Vivo en King Street."],
          ["number", "número", "My number is 072.", "Mi número es 072."]
        ], fill: { prompt: "My phone ___ is 072. (Mi número de teléfono es 072.)", answer: "number", hint: "Completa la expresión «número de teléfono»." }, conversation: { title: "Dar un teléfono", scene: "Practicas cómo decir un número inventado.", speaker: "Receptionist", prompt: "What's your phone number?", promptEs: "¿Cuál es tu número de teléfono?", answer: "It's 0-7-2.", answerEs: "Es 0-7-2.", wrong: "It's King Street.", wrongEs: "Es King Street." }, practice: { prompt: "Elige la frase para compartir un número inventado.", answer: "My phone number is 0-7-2.", answerEs: "Mi número de teléfono es 0-7-2.", wrong: "My phone number are 0-7-2." } }),
        createEnglishLesson({ id: "en-details-3", title: "Formularios y citas", objective: "Reconocer datos de un formulario y pedir ayuda con cortesía.", vocabulary: [
          ["form", "formulario", "Please complete this form.", "Por favor, completa este formulario."],
          ["date", "fecha", "What's the date today?", "¿Qué fecha es hoy?"],
          ["appointment", "cita", "I have an appointment.", "Tengo una cita."],
          ["signature", "firma", "Your signature goes here.", "Tu firma va aquí."]
        ], fill: { prompt: "Could you ___ me with this form? (¿Podría ayudarme con este formulario?)", answer: "help", hint: "Después de could you, usa el verbo básico help." }, conversation: { title: "Pedir ayuda con un formulario", scene: "No entiendes una casilla de un formulario.", speaker: "Assistant", prompt: "Please write your last name here.", promptEs: "Por favor, escribe aquí tu apellido.", answer: "Could you help me, please?", answerEs: "¿Podría ayudarme, por favor?", wrong: "I have a blue appointment.", wrongEs: "Tengo una cita azul." }, practice: { prompt: "Elige una petición para que te expliquen el formulario.", answer: "Could you explain this form, please?", answerEs: "¿Podría explicarme este formulario, por favor?", wrong: "You explain form me." } }),
        createEnglishLesson({ id: "en-details-4", title: "Cómo estás y qué hora es", objective: "Preguntar cómo está alguien y decir la hora de forma sencilla.", vocabulary: [
          ["How are you?", "¿Cómo estás?", "Hi, how are you?", "Hola, ¿cómo estás?"],
          ["fine", "bien", "I'm fine, thanks.", "Estoy bien, gracias."],
          ["time", "hora", "What time is it?", "¿Qué hora es?"],
          ["o'clock", "en punto", "It's seven o'clock.", "Son las siete en punto."]
        ], fill: { prompt: "What time ___ it? (¿Qué hora es?)", answer: "is", hint: "La expresión empieza What time is it?" }, conversation: { title: "Preguntar la hora", scene: "Preguntas la hora en la calle.", speaker: "Passer-by", prompt: "It's eight o'clock.", promptEs: "Son las ocho en punto.", answer: "Thank you very much.", answerEs: "Muchas gracias.", wrong: "I'm eight o'clock.", wrongEs: "Estoy las ocho." }, practice: { prompt: "Elige una pregunta para saber la hora.", answer: "What time is it, please?", answerEs: "¿Qué hora es, por favor?", wrong: "Where time are you?" } }),
        createEnglishLesson({ id: "en-details-5", title: "Meses, estaciones y números grandes", objective: "Decir meses, fechas sencillas y números mayores de cien.", vocabulary: [
          ["January", "enero", "My birthday is in January.", "Mi cumpleaños es en enero."],
          ["summer", "verano", "It's hot in summer.", "Hace calor en verano."],
          ["hundred", "cien", "The school has one hundred students.", "La escuela tiene cien estudiantes."],
          ["birthday", "cumpleaños", "When is your birthday?", "¿Cuándo es tu cumpleaños?"]
        ], fill: { prompt: "My birthday is ___ May. (Mi cumpleaños es en mayo.)", answer: "in", hint: "Usa in delante del nombre de un mes." }, conversation: { title: "Hablar de una fecha", scene: "Una compañera pregunta por tu cumpleaños.", speaker: "Emma", prompt: "When is your birthday?", promptEs: "¿Cuándo es tu cumpleaños?", answer: "It's in May.", answerEs: "Es en mayo.", wrong: "It's in Monday.", wrongEs: "Es en lunes." }, practice: { prompt: "Elige la expresión correcta para hablar de un mes.", answer: "My birthday is in May.", answerEs: "Mi cumpleaños es en mayo.", wrong: "My birthday is on May." } })
      ]
    },
    {
      id: "en-family",
      lessons: [
        createEnglishLesson({ id: "en-family-1", title: "Personas de mi familia", objective: "Nombrar familiares y decir quiénes forman parte de tu familia.", vocabulary: [
          ["mother", "madre", "My mother is kind.", "Mi madre es amable."],
          ["father", "padre", "My father is at home.", "Mi padre está en casa."],
          ["sister", "hermana", "I have one sister.", "Tengo una hermana."],
          ["parents", "padres", "My parents live in Lima.", "Mis padres viven en Lima."]
        ], fill: { prompt: "I ___ one sister. (Tengo una hermana.)", answer: "have", hint: "Con I, usa have para expresar posesión." }, conversation: { title: "Hablar de la familia", scene: "Una amiga pregunta por tu familia.", speaker: "Nora", prompt: "Do you have any brothers or sisters?", promptEs: "¿Tienes hermanos?", answer: "I have one sister.", answerEs: "Tengo una hermana.", wrong: "I am one sister.", wrongEs: "Soy una hermana." }, practice: { prompt: "Elige la frase para decir que tienes dos hermanos.", answer: "I have two brothers.", answerEs: "Tengo dos hermanos.", wrong: "I has two brothers." } }),
        createEnglishLesson({ id: "en-family-2", title: "De dónde soy y dónde vivo", objective: "Decir tu país, ciudad y nacionalidad con frases sencillas.", vocabulary: [
          ["city", "ciudad", "I live in a big city.", "Vivo en una ciudad grande."],
          ["live", "vivir", "We live in Quito.", "Vivimos en Quito."],
          ["from", "de (origen)", "She's from Colombia.", "Ella es de Colombia."],
          ["country", "país", "Peru is a beautiful country.", "Perú es un país bonito."]
        ], fill: { prompt: "I live ___ Quito. (Vivo en Quito.)", answer: "in", hint: "Usa in delante del nombre de una ciudad." }, conversation: { title: "Decir dónde vives", scene: "Alguien te pregunta por tu ciudad.", speaker: "Tom", prompt: "Where do you live?", promptEs: "¿Dónde vives?", answer: "I live in Quito.", answerEs: "Vivo en Quito.", wrong: "I live on Quito.", wrongEs: "Vivo sobre Quito." }, practice: { prompt: "Elige una frase para decir en qué país vives.", answer: "I live in Ecuador.", answerEs: "Vivo en Ecuador.", wrong: "I lives Ecuador." } }),
        createEnglishLesson({ id: "en-family-3", title: "Árbol familiar y documentos", objective: "Presentar a familiares y explicar parentescos básicos.", vocabulary: [
          ["son", "hijo", "Their son is five.", "Su hijo tiene cinco años."],
          ["daughter", "hija", "Her daughter is at school.", "Su hija está en la escuela."],
          ["husband", "esposo", "My husband is a teacher.", "Mi esposo es profesor."],
          ["wife", "esposa", "His wife is from Chile.", "Su esposa es de Chile."]
        ], fill: { prompt: "This is Ana. She is my ___. (Esta es Ana. Es mi hermana.)", answer: "sister", hint: "Completa con el parentesco en inglés." }, conversation: { title: "Presentar a un familiar", scene: "Presentas a alguien de tu familia.", speaker: "Luis", prompt: "Who is that?", promptEs: "¿Quién es esa persona?", answer: "She's my sister.", answerEs: "Es mi hermana.", wrong: "She's my sister's document.", wrongEs: "Es el documento de mi hermana." }, practice: { prompt: "Elige una frase para presentar a tu padre.", answer: "This is my father.", answerEs: "Este es mi padre.", wrong: "These is my father." } })
      ]
    },
    {
      id: "en-work",
      lessons: [
        createEnglishLesson({ id: "en-work-1", title: "Vocabulario de oficios y trabajos", objective: "Decir a qué te dedicas y nombrar profesiones frecuentes.", vocabulary: [
          ["teacher", "profesor/a", "I'm a teacher.", "Soy profesor/a."],
          ["cook", "cocinero/a", "She's a cook.", "Ella es cocinera."],
          ["nurse", "enfermero/a", "He is a nurse.", "Él es enfermero."],
          ["office assistant", "auxiliar de oficina", "I'm an office assistant.", "Soy auxiliar de oficina."]
        ], fill: { prompt: "I'm ___ teacher. (Soy profesor/a.)", answer: "a", hint: "Teacher empieza con sonido consonántico: usa a." }, conversation: { title: "Hablar de tu trabajo", scene: "Una persona te pregunta a qué te dedicas.", speaker: "Colleague", prompt: "What do you do?", promptEs: "¿A qué te dedicas?", answer: "I'm a cook.", answerEs: "Soy cocinero/a.", wrong: "I'm a kitchen.", wrongEs: "Soy una cocina." }, practice: { prompt: "Elige una frase para decir tu profesión.", answer: "I'm a nurse.", answerEs: "Soy enfermero/a.", wrong: "I am nurse a." } }),
        createEnglishLesson({ id: "en-work-2", title: "Expresar horario y disponibilidad", objective: "Comprender expresiones de horario y comunicar disponibilidad.", vocabulary: [
          ["work schedule", "horario de trabajo", "What's your work schedule?", "¿Cuál es tu horario de trabajo?"],
          ["morning shift", "turno de mañana", "I work the morning shift.", "Trabajo en el turno de mañana."],
          ["available", "disponible", "I'm available on Friday.", "Estoy disponible el viernes."],
          ["start", "empezar", "I start at eight.", "Empiezo a las ocho."]
        ], fill: { prompt: "I start work ___ eight. (Empiezo a trabajar a las ocho.)", answer: "at", hint: "Usa at delante de una hora concreta." }, conversation: { title: "Preguntar por el horario", scene: "En una entrevista quieres saber a qué hora empieza el turno.", speaker: "Manager", prompt: "What time do you start?", promptEs: "¿A qué hora empiezas?", answer: "I start at eight.", answerEs: "Empiezo a las ocho.", wrong: "I start on eight.", wrongEs: "Empiezo sobre ocho." }, practice: { prompt: "Elige una frase para decir cuándo estás disponible.", answer: "I'm available on Friday.", answerEs: "Estoy disponible el viernes.", wrong: "I available Friday am." } }),
        createEnglishLesson({ id: "en-work-3", title: "Tareas e instrucciones sencillas", objective: "Entender instrucciones frecuentes y pedir que las repitan.", vocabulary: [
          ["open", "abrir", "Open the door, please.", "Abre la puerta, por favor."],
          ["clean", "limpiar", "I clean the table.", "Limpio la mesa."],
          ["prepare", "preparar", "We prepare the room.", "Preparamos la sala."],
          ["help", "ayudar", "Can you help me?", "¿Puedes ayudarme?"]
        ], fill: { prompt: "Please ___ the table. (Por favor, limpia la mesa.)", answer: "clean", hint: "Usa el verbo que significa «limpiar»." }, conversation: { title: "Pedir que repitan una instrucción", scene: "No escuchas bien una tarea en el trabajo.", speaker: "Manager", prompt: "Please clean the table.", promptEs: "Por favor, limpia la mesa.", answer: "Could you repeat that, please?", answerEs: "¿Podría repetirlo, por favor?", wrong: "You are a table, please.", wrongEs: "Tú eres una mesa, por favor." }, practice: { prompt: "Elige una petición para ofrecer ayuda.", answer: "Can I help you?", answerEs: "¿Puedo ayudarte?", wrong: "Can I to help you?" } }),
        createEnglishLesson({ id: "en-work-4", title: "Estudios, profesiones y gustos", objective: "Hablar de estudios, compañeros y actividades que te gustan.", vocabulary: [
          ["student", "estudiante", "I'm a student.", "Soy estudiante."],
          ["colleague", "compañero/a de trabajo", "My colleague is helpful.", "Mi compañero/a de trabajo es servicial."],
          ["study", "estudiar", "I study English at night.", "Estudio inglés por la noche."],
          ["like", "gustar", "I like my job.", "Me gusta mi trabajo."]
        ], fill: { prompt: "I like ___ English. (Me gusta estudiar inglés.)", answer: "studying", acceptedAnswers: ["studying"], hint: "Después de like, la actividad puede expresarse con un verbo terminado en -ing." }, conversation: { title: "Hablar de lo que te gusta", scene: "Una compañera pregunta por tus estudios.", speaker: "Mia", prompt: "Do you like studying English?", promptEs: "¿Te gusta estudiar inglés?", answer: "Yes, I like studying English.", answerEs: "Sí, me gusta estudiar inglés.", wrong: "Yes, I like study English.", wrongEs: "Sí, me gusta estudiar inglés." }, practice: { prompt: "Elige una frase natural para hablar de un gusto.", answer: "I like learning English.", answerEs: "Me gusta aprender inglés.", wrong: "I likes learning English." } })
      ]
    },
    {
      id: "en-home",
      lessons: [
        createEnglishLesson({ id: "en-home-1", title: "Habitaciones y muebles", objective: "Nombrar espacios y objetos comunes de una vivienda.", vocabulary: [
          ["kitchen", "cocina", "The kitchen is small.", "La cocina es pequeña."],
          ["bedroom", "dormitorio", "My bedroom has a desk.", "Mi dormitorio tiene un escritorio."],
          ["table", "mesa", "The table is in the kitchen.", "La mesa está en la cocina."],
          ["chair", "silla", "There are four chairs.", "Hay cuatro sillas."]
        ], fill: { prompt: "There ___ a table in the kitchen. (Hay una mesa en la cocina.)", answer: "is", hint: "Usa there is delante de un objeto singular." }, conversation: { title: "Describir una habitación", scene: "Tu compañero pregunta qué hay en la cocina.", speaker: "Sam", prompt: "What's in the kitchen?", promptEs: "¿Qué hay en la cocina?", answer: "There is a table and four chairs.", answerEs: "Hay una mesa y cuatro sillas.", wrong: "There are a table.", wrongEs: "Hay una mesa." }, practice: { prompt: "Elige una frase para describir un dormitorio.", answer: "There is a bed in the bedroom.", answerEs: "Hay una cama en el dormitorio.", wrong: "There are a bed in bedroom." } }),
        createEnglishLesson({ id: "en-home-2", title: "Buscar una vivienda", objective: "Preguntar por una vivienda y describir necesidades sencillas.", vocabulary: [
          ["apartment", "apartamento", "I'm looking for an apartment.", "Estoy buscando un apartamento."],
          ["room", "habitación", "The apartment has two rooms.", "El apartamento tiene dos habitaciones."],
          ["rent", "alquiler / alquilar", "How much is the rent?", "¿Cuánto cuesta el alquiler?"],
          ["near", "cerca de", "Is it near the station?", "¿Está cerca de la estación?"]
        ], fill: { prompt: "I'm looking ___ an apartment. (Estoy buscando un apartamento.)", answer: "for", hint: "La expresión es look for: buscar." }, conversation: { title: "Preguntar por un apartamento", scene: "Llamas para preguntar por una vivienda.", speaker: "Agent", prompt: "Are you looking for an apartment?", promptEs: "¿Estás buscando un apartamento?", answer: "Yes, I'm looking for a small apartment.", answerEs: "Sí, busco un apartamento pequeño.", wrong: "Yes, I looking a station.", wrongEs: "Sí, yo buscando una estación." }, practice: { prompt: "Elige una frase para preguntar el precio del alquiler.", answer: "How much is the rent?", answerEs: "¿Cuánto cuesta el alquiler?", wrong: "How many is rent?" } }),
        createEnglishLesson({ id: "en-home-3", title: "Pedir permiso y explicar una necesidad", objective: "Pedir permiso y expresar necesidades básicas en casa.", vocabulary: [
          ["need", "necesitar", "I need a chair.", "Necesito una silla."],
          ["key", "llave", "I need the key.", "Necesito la llave."],
          ["bathroom", "baño", "Where is the bathroom?", "¿Dónde está el baño?"],
          ["Can I…?", "¿Puedo…?", "Can I open the window?", "¿Puedo abrir la ventana?"]
        ], fill: { prompt: "I ___ a key, please. (Necesito una llave, por favor.)", answer: "need", hint: "Completa con «necesitar» en inglés." }, conversation: { title: "Pedir permiso", scene: "Quieres abrir la ventana de una habitación.", speaker: "Host", prompt: "It's a little warm in here.", promptEs: "Aquí hace un poco de calor.", answer: "Can I open the window?", answerEs: "¿Puedo abrir la ventana?", wrong: "I am a window.", wrongEs: "Soy una ventana." }, practice: { prompt: "Elige una frase para pedir una llave.", answer: "Can I have the key, please?", answerEs: "¿Me puede dar la llave, por favor?", wrong: "I can the key, please." } })
      ]
    },
    {
      id: "en-travel",
      lessons: [
        createEnglishLesson({ id: "en-travel-1", title: "Autobús, tren y estación", objective: "Nombrar medios de transporte y pedir un billete sencillo.", vocabulary: [
          ["train", "tren", "The train is at the station.", "El tren está en la estación."],
          ["bus", "autobús", "I go to work by bus.", "Voy al trabajo en autobús."],
          ["ticket", "billete", "One ticket, please.", "Un billete, por favor."],
          ["station", "estación", "Where is the station?", "¿Dónde está la estación?"]
        ], fill: { prompt: "One ___ to London, please. (Un billete a Londres, por favor.)", answer: "ticket", hint: "Usa la palabra para billete." }, conversation: { title: "Comprar un billete", scene: "Pides un billete en la estación.", speaker: "Clerk", prompt: "Where would you like to go?", promptEs: "¿Adónde quiere ir?", answer: "One ticket to London, please.", answerEs: "Un billete a Londres, por favor.", wrong: "One station to ticket.", wrongEs: "Una estación para billete." }, practice: { prompt: "Elige una frase para preguntar por la estación.", answer: "Where is the station, please?", answerEs: "¿Dónde está la estación, por favor?", wrong: "Where the station is?" } }),
        createEnglishLesson({ id: "en-travel-2", title: "Horarios, salidas y llegadas", objective: "Preguntar por horarios y comprender indicaciones básicas de viaje.", vocabulary: [
          ["departure", "salida", "The departure is at nine.", "La salida es a las nueve."],
          ["arrival", "llegada", "The arrival is at eleven.", "La llegada es a las once."],
          ["platform", "andén", "The train leaves from platform two.", "El tren sale del andén dos."],
          ["late", "tarde / con retraso", "The bus is late.", "El autobús tiene retraso."]
        ], fill: { prompt: "What time is the ___? (¿A qué hora es la salida?)", answer: "departure", hint: "Completa con la palabra para «salida»." }, conversation: { title: "Preguntar la hora de salida", scene: "Confirmas cuándo sale el tren.", speaker: "Traveler", prompt: "The train leaves at nine.", promptEs: "El tren sale a las nueve.", answer: "Thank you. What platform?", answerEs: "Gracias. ¿Qué andén?", wrong: "Thank you. What kitchen?", wrongEs: "Gracias. ¿Qué cocina?" }, practice: { prompt: "Elige una pregunta para saber el andén.", answer: "What platform is it?", answerEs: "¿Qué andén es?", wrong: "Where platform it?" } }),
        createEnglishLesson({ id: "en-travel-3", title: "Rutinas y acciones en curso", objective: "Describir cómo viajas habitualmente y qué está pasando ahora.", vocabulary: [
          ["usually", "normalmente", "I usually walk to work.", "Normalmente voy caminando al trabajo."],
          ["every day", "todos los días", "She takes the bus every day.", "Ella toma el autobús todos los días."],
          ["right now", "ahora mismo", "I'm waiting right now.", "Estoy esperando ahora mismo."],
          ["waiting", "esperando", "We are waiting for the train.", "Estamos esperando el tren."]
        ], fill: { prompt: "I ___ waiting for the bus right now. (Estoy esperando el autobús ahora.)", answer: "am", hint: "El presente continuo con I usa am + verbo en -ing." }, conversation: { title: "Decir qué haces ahora", scene: "Un amigo te llama mientras esperas el tren.", speaker: "Alex", prompt: "What are you doing?", promptEs: "¿Qué estás haciendo?", answer: "I'm waiting for the train.", answerEs: "Estoy esperando el tren.", wrong: "I waiting every train.", wrongEs: "Yo esperando cada tren." }, practice: { prompt: "Elige una frase para describir tu rutina de viaje.", answer: "I usually take the bus.", answerEs: "Normalmente tomo el autobús.", wrong: "I am usually take bus." } })
      ]
    },
    {
      id: "en-shopping",
      lessons: [
        createEnglishLesson({ id: "en-shopping-1", title: "Los números del 1 al 10 y el precio", objective: "Preguntar cuánto cuesta algo y comprender precios sencillos.", vocabulary: [
          ["How much?", "¿Cuánto cuesta?", "How much is this?", "¿Cuánto cuesta esto?"],
          ["pound", "libra (moneda)", "It's five pounds.", "Cuesta cinco libras."],
          ["dollar", "dólar", "It's ten dollars.", "Cuesta diez dólares."],
          ["cheap", "barato", "This book is cheap.", "Este libro es barato."]
        ], fill: { prompt: "How ___ is this? (¿Cuánto cuesta esto?)", answer: "much", hint: "Usa much para preguntar el precio." }, conversation: { title: "Preguntar por el precio", scene: "Miras un artículo en una tienda.", speaker: "Shop assistant", prompt: "It's eight pounds.", promptEs: "Cuesta ocho libras.", answer: "Thank you. I'll take it.", answerEs: "Gracias. Me lo llevo.", wrong: "Thank you. I'm eight pounds.", wrongEs: "Gracias. Soy ocho libras." }, practice: { prompt: "Elige una pregunta para saber el precio.", answer: "How much is the bag?", answerEs: "¿Cuánto cuesta el bolso?", wrong: "How many is the bag?" } }),
        createEnglishLesson({ id: "en-shopping-2", title: "Alimentos básicos y pedir en el mercado", objective: "Nombrar alimentos y pedir productos de forma sencilla.", vocabulary: [
          ["bread", "pan", "I'd like some bread, please.", "Quisiera pan, por favor."],
          ["apple", "manzana", "One apple, please.", "Una manzana, por favor."],
          ["milk", "leche", "We need some milk.", "Necesitamos leche."],
          ["market", "mercado", "The market is open.", "El mercado está abierto."]
        ], fill: { prompt: "I'd like ___ apple, please. (Quisiera una manzana, por favor.)", answer: "an", hint: "Apple empieza con sonido vocálico: usa an." }, conversation: { title: "Pedir alimentos", scene: "Compras en un mercado.", speaker: "Shopkeeper", prompt: "What would you like?", promptEs: "¿Qué desea?", answer: "Some bread, please.", answerEs: "Un poco de pan, por favor.", wrong: "A bread, please.", wrongEs: "Un pan, por favor." }, practice: { prompt: "Elige una petición cortés para comprar leche.", answer: "I'd like some milk, please.", answerEs: "Quisiera leche, por favor.", wrong: "I like milk some please." } }),
        createEnglishLesson({ id: "en-shopping-3", title: "Cantidades y pago", objective: "Preguntar por cantidades, pagar y pedir una bolsa.", vocabulary: [
          ["some", "algo de / algunos", "Can I have some water?", "¿Me da algo de agua?"],
          ["any", "algo de / ningún", "Do you have any eggs?", "¿Tiene huevos?"],
          ["cash", "efectivo", "Can I pay in cash?", "¿Puedo pagar en efectivo?"],
          ["card", "tarjeta", "Can I pay by card?", "¿Puedo pagar con tarjeta?"]
        ], fill: { prompt: "Can I pay ___ card? (¿Puedo pagar con tarjeta?)", answer: "by", hint: "La expresión es pay by card." }, conversation: { title: "Preguntar cómo pagar", scene: "Estás en la caja de una tienda.", speaker: "Cashier", prompt: "How would you like to pay?", promptEs: "¿Cómo desea pagar?", answer: "By card, please.", answerEs: "Con tarjeta, por favor.", wrong: "A card of bread.", wrongEs: "Una tarjeta de pan." }, practice: { prompt: "Elige una pregunta para saber si aceptan efectivo.", answer: "Can I pay in cash?", answerEs: "¿Puedo pagar en efectivo?", wrong: "Can I pay cashes?" } }),
        createEnglishLesson({ id: "en-shopping-4", title: "Ropa, bar y receta sencilla", objective: "Pedir una prenda o una bebida y hablar de una preferencia.", vocabulary: [
          ["shirt", "camisa", "This shirt is blue.", "Esta camisa es azul."],
          ["size", "talla", "What size do you need?", "¿Qué talla necesitas?"],
          ["coffee", "café", "A coffee, please.", "Un café, por favor."],
          ["menu", "menú", "Can I see the menu?", "¿Puedo ver el menú?"]
        ], fill: { prompt: "Can I see the ___, please? (¿Puedo ver el menú, por favor?)", answer: "menu", hint: "Completa con la palabra para menú." }, conversation: { title: "Pedir en un bar", scene: "El camarero toma tu pedido.", speaker: "Waiter", prompt: "What would you like to drink?", promptEs: "¿Qué desea beber?", answer: "A coffee, please.", answerEs: "Un café, por favor.", wrong: "A menu, please. I drink menu.", wrongEs: "Un menú, por favor. Bebo menú." }, practice: { prompt: "Elige una frase para preguntar por una talla.", answer: "What size is this shirt?", answerEs: "¿Qué talla es esta camisa?", wrong: "How many size is the shirt?" } })
      ]
    },
    {
      id: "en-stories",
      lessons: [
        createEnglishLesson({ id: "en-stories-1", title: "Contar qué hice ayer", objective: "Hablar de una actividad pasada y mencionar cuándo ocurrió.", vocabulary: [
          ["yesterday", "ayer", "I studied yesterday.", "Estudié ayer."],
          ["visited", "visité", "We visited our friends.", "Visitamos a nuestros amigos."],
          ["watched", "vi / miré", "She watched a film.", "Ella vio una película."],
          ["last night", "anoche", "I cooked last night.", "Cociné anoche."]
        ], fill: { prompt: "I ___ a film yesterday. (Vi una película ayer.)", answer: "watched", hint: "Usa el pasado regular de watch." }, conversation: { title: "Hablar del fin de semana", scene: "Un amigo pregunta por tu día anterior.", speaker: "Nina", prompt: "What did you do yesterday?", promptEs: "¿Qué hiciste ayer?", answer: "I watched a film.", answerEs: "Vi una película.", wrong: "I watch yesterday a film.", wrongEs: "Veo ayer una película." }, practice: { prompt: "Elige una frase para decir qué hiciste ayer.", answer: "I studied English yesterday.", answerEs: "Estudié inglés ayer.", wrong: "I study English yesterday." } }),
        createEnglishLesson({ id: "en-stories-2", title: "Hablar de mi familia", objective: "Describir a familiares y hablar de hechos sencillos en pasado.", vocabulary: [
          ["was", "era / estaba", "My mother was a student.", "Mi madre era estudiante."],
          ["were", "eran / estaban", "We were at home.", "Estábamos en casa."],
          ["young", "joven", "My grandfather was young.", "Mi abuelo era joven."],
          ["child", "niño/a", "I was a happy child.", "Era un niño/a feliz."]
        ], fill: { prompt: "We ___ at home yesterday. (Estábamos en casa ayer.)", answer: "were", hint: "El pasado de be para we es were." }, conversation: { title: "Hablar del pasado", scene: "Una amiga pregunta dónde estabas ayer.", speaker: "Nora", prompt: "Where were you yesterday?", promptEs: "¿Dónde estabas ayer?", answer: "I was at home.", answerEs: "Estaba en casa.", wrong: "I were at home.", wrongEs: "Estaba en casa." }, practice: { prompt: "Elige una frase correcta para describir a tu familia.", answer: "My parents were at home.", answerEs: "Mis padres estaban en casa.", wrong: "My parents was at home." } }),
        createEnglishLesson({ id: "en-stories-3", title: "Regiones, ciudades y escuela", objective: "Hablar de ciudades, lugares y experiencias sencillas de estudio.", vocabulary: [
          ["capital", "capital", "Lima is the capital of Peru.", "Lima es la capital de Perú."],
          ["school", "escuela", "My school is near my home.", "Mi escuela está cerca de mi casa."],
          ["museum", "museo", "The museum is in the city centre.", "El museo está en el centro de la ciudad."],
          ["beautiful", "bonito/a", "It's a beautiful city.", "Es una ciudad bonita."]
        ], fill: { prompt: "Lima is the ___ of Peru. (Lima es la capital de Perú.)", answer: "capital", hint: "Completa con la palabra «capital»." }, conversation: { title: "Describir una ciudad", scene: "Una persona quiere saber sobre tu ciudad.", speaker: "Alex", prompt: "Is your city beautiful?", promptEs: "¿Es bonita tu ciudad?", answer: "Yes, it's a beautiful city.", answerEs: "Sí, es una ciudad bonita.", wrong: "Yes, it's a beautiful school.", wrongEs: "Sí, es una escuela bonita." }, practice: { prompt: "Elige una frase para decir dónde está una escuela.", answer: "The school is near my home.", answerEs: "La escuela está cerca de mi casa.", wrong: "The school are near my home." } })
      ]
    }
  ]
};

attachEnglishGrammarNotes();

function attachRemainingEnglishGrammarNotes() {
  const notes = {
    "en-home-1": {
      title: "Ubicar objetos con there is y there are",
      explanation: "There is presenta una cosa en singular y there are presenta varias. Usa a delante de un sustantivo contable singular que empieza con sonido consonántico.",
      pattern: "There is a table. · There are four chairs.\nThe chair is in the bedroom.",
      examples: [
        { en: "There is a bed in the bedroom.", es: "Hay una cama en el dormitorio." },
        { en: "There are two chairs in the kitchen.", es: "Hay dos sillas en la cocina." }
      ],
      tip: "No digas there are a bed: bed es singular, así que corresponde there is a bed."
    },
    "en-home-2": {
      title: "Preguntar por una vivienda",
      explanation: "Usa el presente continuo be + verbo en -ing para hablar de una búsqueda que ocurre ahora. La preposición forma parte de la expresión look for, «buscar».",
      pattern: "I am looking for an apartment.\nAre you looking for a room?",
      examples: [
        { en: "I'm looking for a small apartment.", es: "Estoy buscando un apartamento pequeño." },
        { en: "Is it near the station?", es: "¿Está cerca de la estación?" }
      ],
      tip: "Apartment empieza con sonido vocálico, por eso se usa an apartment, no a apartment."
    },
    "en-home-3": {
      title: "Pedir permiso con can",
      explanation: "Can + sujeto + verbo básico forma una pregunta de permiso o posibilidad. Para expresar una necesidad usa need + sustantivo o need to + verbo.",
      pattern: "Can I open the window?\nI need a key. · I need to open the door.",
      examples: [
        { en: "Can I open the window, please?", es: "¿Puedo abrir la ventana, por favor?" },
        { en: "I need a key for the room.", es: "Necesito una llave para la habitación." }
      ],
      tip: "Después de can, el verbo no lleva to: can open, no can to open."
    },
    "en-travel-1": {
      title: "Hablar de transporte y pedir un billete",
      explanation: "Para explicar cómo viajas, usa by + medio de transporte: by bus o by train. Puedes pedir algo con One…, please o I'd like…",
      pattern: "by bus · by train · on foot\nOne ticket to London, please.",
      examples: [
        { en: "I go to work by bus.", es: "Voy al trabajo en autobús." },
        { en: "One ticket to London, please.", es: "Un billete a Londres, por favor." }
      ],
      tip: "La expresión es by bus, sin artículo. Para ir caminando se dice on foot."
    },
    "en-travel-2": {
      title: "Preguntar por salidas y andenes",
      explanation: "Usa what time para preguntar la hora y at con una hora concreta. El presente simple sirve para horarios fijados, incluso si el viaje ocurrirá después.",
      pattern: "What time does the train leave?\nIt leaves at nine, from platform two.",
      examples: [
        { en: "The train leaves at nine.", es: "El tren sale a las nueve." },
        { en: "Which platform does it leave from?", es: "¿Desde qué andén sale?" }
      ],
      tip: "Con he, she o it, el verbo afirmativo suele terminar en -s: the train leaves."
    },
    "en-travel-3": {
      title: "Distinguir rutinas y acciones de ahora",
      explanation: "El presente simple describe rutinas y el presente continuo describe lo que sucede ahora: be + verbo terminado en -ing.",
      pattern: "I usually take the bus.\nI'm waiting for the train right now.",
      examples: [
        { en: "She takes the bus every day.", es: "Ella toma el autobús todos los días." },
        { en: "We are waiting for the train now.", es: "Estamos esperando el tren ahora." }
      ],
      tip: "Usa usually o every day con rutinas; now o right now suelen acompañar acciones en curso."
    },
    "en-shopping-1": {
      title: "Preguntar cuánto cuesta algo",
      explanation: "Usa How much is…? con un objeto singular y How much are…? con objetos plurales. El precio se expresa con el verbo be.",
      pattern: "How much is this bag? · It's eight pounds.\nHow much are these shoes? · They're twenty dollars.",
      examples: [
        { en: "How much is this book?", es: "¿Cuánto cuesta este libro?" },
        { en: "It's ten dollars.", es: "Cuesta diez dólares." }
      ],
      tip: "Much se usa para preguntar el precio o por cantidades incontables; many acompaña sustantivos contables plurales."
    },
    "en-shopping-2": {
      title: "Pedir alimentos y usar a o an",
      explanation: "A y an acompañan sustantivos contables singulares. Elige según el sonido inicial; some se usa con cantidades no especificadas, especialmente en peticiones.",
      pattern: "an apple · a banana\nI'd like some bread, please.",
      examples: [
        { en: "I'd like an apple and some bread, please.", es: "Quisiera una manzana y un poco de pan, por favor." },
        { en: "Can I have some milk?", es: "¿Me puede dar leche?" }
      ],
      tip: "Bread y milk suelen tratarse como incontables: no se dice a bread o a milk para una cantidad indefinida."
    },
    "en-shopping-3": {
      title: "Usar some y any al comprar",
      explanation: "Some aparece normalmente en afirmaciones y ofrecimientos; any es común en preguntas y negaciones. Usa pay by card y pay in cash.",
      pattern: "We have some eggs. · Do you have any milk?\nCan I pay by card? · I can pay in cash.",
      examples: [
        { en: "Do you have any apples?", es: "¿Tiene manzanas?" },
        { en: "I'd like some water, please.", es: "Quisiera agua, por favor." }
      ],
      tip: "Some y any no indican un número exacto; el sustantivo y el contexto aclaran de qué cantidad se habla."
    },
    "en-shopping-4": {
      title: "Pedir comida o ropa con cortesía",
      explanation: "Would like es una forma amable de pedir algo. Usa this con un objeto cercano singular y these con varios objetos cercanos.",
      pattern: "I'd like a coffee, please.\nthis shirt · these shirts",
      examples: [
        { en: "Can I see the menu, please?", es: "¿Puedo ver el menú, por favor?" },
        { en: "What size is this shirt?", es: "¿Qué talla es esta camisa?" }
      ],
      tip: "I'd es la forma corta de I would. La petición no se formula como I want en una situación de servicio."
    },
    "en-stories-1": {
      title: "Formar el pasado simple regular",
      explanation: "Para muchos verbos, el pasado se forma añadiendo -ed. Usa did en preguntas; después de did, el verbo vuelve a su forma básica.",
      pattern: "I watched a film yesterday.\nDid you study? · Yes, I studied.",
      examples: [
        { en: "We visited our friends yesterday.", es: "Visitamos a nuestros amigos ayer." },
        { en: "Did she watch the film?", es: "¿Ella vio la película?" }
      ],
      tip: "La forma negativa es didn't + verbo básico: I didn't watch, no I didn't watched."
    },
    "en-stories-2": {
      title: "Usar was y were",
      explanation: "Was y were son el pasado de be. Usa was con I, he, she e it; usa were con you, we y they.",
      pattern: "I / he / she was at home.\nYou / we / they were at home.",
      examples: [
        { en: "My mother was a student.", es: "Mi madre era estudiante." },
        { en: "We were at home yesterday.", es: "Estábamos en casa ayer." }
      ],
      tip: "En preguntas, was o were va antes del sujeto: Were they at school?"
    },
    "en-stories-3": {
      title: "Describir lugares con be y there is",
      explanation: "Usa be para describir una ciudad y there is para presentar un lugar singular. Las preposiciones in y near ubican sitios.",
      pattern: "Lima is the capital of Peru.\nThere is a museum in the city centre.",
      examples: [
        { en: "The school is near my home.", es: "La escuela está cerca de mi casa." },
        { en: "There is a museum in the city.", es: "Hay un museo en la ciudad." }
      ],
      tip: "Se dice in the city centre para indicar que algo está dentro del centro de la ciudad."
    }
  };
  let added = 0;
  for (const lesson of window.ENGLISH_A1_CURRICULUM.units.flatMap((unit) => unit.lessons)) {
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
  if (added !== Object.keys(notes).length) throw new Error("No se pudieron añadir todas las explicaciones gramaticales finales de inglés.");
  window.ENGLISH_A1_CURRICULUM.metadata.estimatedMinutes += added * 2;
}

attachRemainingEnglishGrammarNotes();

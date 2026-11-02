function createPortugueseLesson(spec) {
  const [vocabulary, grammar, choice, fill, dialogue, production] = spec.steps;
  return {
    id: spec.id,
    title: spec.title,
    minutes: 6,
    objective: spec.objective,
    vocabulary: spec.vocabulary.map(([target, translation, exampleTarget, exampleTranslation]) => ({
      target, translation, exampleTarget, exampleTranslation
    })),
    steps: [
      {
        type: "vocabulary",
        title: "Escucha y relaciona",
        instruction: "Escucha las expresiones, lee los ejemplos y repite a tu ritmo.",
        itemIds: spec.vocabulary.map(([target]) => target)
      },
      {
        type: "grammar",
        title: grammar.title,
        explanation: grammar.explanation,
        pattern: grammar.pattern,
        examples: grammar.examples.map(([target, translation]) => ({ target, translation })),
        tip: grammar.tip
      },
      {
        type: "multipleChoice",
        title: choice.title,
        prompt: choice.prompt,
        options: choice.options,
        answer: choice.answer,
        feedback: choice.feedback
      },
      {
        type: "fillBlank",
        title: fill.title,
        prompt: fill.prompt,
        answer: fill.answer,
        ...(fill.acceptedAnswers ? { acceptedAnswers: fill.acceptedAnswers } : {}),
        hint: fill.hint
      },
      {
        type: "dialogue",
        title: dialogue.title,
        scene: dialogue.scene,
        turns: dialogue.turns.map(([speaker, target, translation, options]) => ({
          speaker, target, translation,
          options: options.map(([optionTarget, optionTranslation, correct]) => ({
            target: optionTarget, translation: optionTranslation, correct
          }))
        }))
      },
      {
        type: "production",
        title: production.title,
        prompt: production.prompt,
        options: production.options,
        answer: production.answer,
        model: production.answer,
        translation: production.translation
      }
    ]
  };
}

window.PORTUGUESE_A1_CURRICULUM = {
  metadata: {
    language: "pt",
    languageName: "Portugués",
    speechLanguage: "pt-BR",
    supportLanguage: "es",
    level: "A1",
    audience: "Hispanohablantes que empiezan a comunicarse en portugués brasileño",
    estimatedMinutes: 174
  },
  roadmap: [
    { id: "pt-chegadas", title: "Saludos y primeros encuentros", canDo: "Saludar, despedirte, presentarte y pedir que repitan algo.", grammar: "pronombres, ser y formas de cortesía", sounds: "vocales nasales y ritmo brasileño", vocabulary: "saludos, nombres y cortesía", game: "rueda de presentaciones" },
    { id: "pt-identidade", title: "Datos personales y tiempo", canDo: "Dar tu origen y contacto, decir la edad y entender fechas sencillas.", grammar: "ser, ter, preguntas y contracciones", sounds: "vocales abiertas y cerradas", vocabulary: "países, números, días y meses", game: "ficha de datos" },
    { id: "pt-familia", title: "Familia y descripción", canDo: "Presentar a personas cercanas y describirlas con frases simples.", grammar: "artículos, género, plural y posesivos", sounds: "nasales ão, em y ãe", vocabulary: "familia y adjetivos básicos", game: "álbum familiar" },
    { id: "pt-rotina", title: "Estudio, trabajo y rutina", canDo: "Hablar de ocupación, horarios, actividades y gustos.", grammar: "presente regular e irregular, negación y gostar de", sounds: "nh, lh y r", vocabulary: "profesiones, estudio y rutinas", game: "agenda del día" },
    { id: "pt-casa", title: "La casa y los objetos", canDo: "Nombrar espacios y ubicar objetos en una vivienda.", grammar: "estar, ter, hay/está y preposiciones de lugar", sounds: "s final y contracciones", vocabulary: "habitaciones, muebles y objetos", game: "búsqueda en casa" },
    { id: "pt-cidade", title: "La ciudad y los desplazamientos", canDo: "Preguntar por lugares, indicar cómo llegar y usar transporte.", grammar: "ir, poder, imperativo frecuente y a + artículo", sounds: "d y t antes de i", vocabulary: "lugares, transporte y direcciones", game: "mapa del barrio" },
    { id: "pt-comida", title: "Comida, compras y pedidos", canDo: "Pedir comida, preguntar precios y expresar cantidades sencillas.", grammar: "artículos, este/esse, querer y cuantificadores", sounds: "nasalización y entonación de petición", vocabulary: "alimentos, bebidas y dinero", game: "menú de cafetería" },
    { id: "pt-planos", title: "Tiempo libre, salud y planes", canDo: "Hablar de actividades recientes, preferencias y planes inmediatos.", grammar: "pretérito perfecto simple frecuente, ir + infinitivo y dever", sounds: "contraste entre vocales y habla enlazada", vocabulary: "ocio, clima y bienestar", game: "plan de fin de semana" }
  ],
  units: [
    {
      id: "pt-chegadas",
      lessons: [
        createPortugueseLesson({ id: "pt-chegadas-1", title: "Saludar y despedirse", objective: "Elegir saludos y despedidas naturales según el momento.", vocabulary: [
          ["Oi", "hola (informal y muy común)", "Oi, tudo bem?", "Hola, ¿todo bien?"],
          ["Bom dia", "buenos días", "Bom dia, professora.", "Buenos días, profesora."],
          ["Boa noite", "buenas noches (al saludar o despedirse)", "Boa noite, senhor Paulo.", "Buenas noches, señor Paulo."],
          ["Tchau", "chao / adiós (informal)", "Tchau, até amanhã!", "¡Chao, hasta mañana!"]
        ], steps: [
          null,
          { title: "El saludo depende del momento", explanation: "En portugués brasileño, bom dia se usa por la mañana; boa tarde, por la tarde; boa noite, por la noche, tanto al llegar como al despedirse. Oi es informal y muy habitual.", pattern: "Oi! · Bom dia! · Boa tarde! · Boa noite! · Tchau!", examples: [["Boa tarde, tudo bem?", "Buenas tardes, ¿cómo va todo?"], ["Boa noite, até amanhã.", "Buenas noches; nos vemos mañana."]], tip: "Boa noite sirve para saludar y para despedirse; en español solemos distinguir «buenas noches» del momento de irse a dormir." },
          { title: "Comprende el saludo", prompt: "¿Qué saludo corresponde a la mañana?", options: ["Bom dia!", "Boa noite!", "Tchau!"], answer: "Bom dia!", feedback: "Bom dia se usa para saludar por la mañana." },
          { title: "Completa el saludo", prompt: "___ dia, Ana! (saludo por la mañana)", answer: "Bom", hint: "La expresión brasileña para «buenos días» empieza con esta palabra." },
          { title: "Un primer encuentro", scene: "Llegas por la mañana a una clase de portugués.", turns: [["Colega", "Bom dia! Tudo bem?", "¡Buenos días! ¿Todo bien?", [["Bom dia! Tudo bem, obrigada.", "¡Buenos días! Todo bien, gracias.", true], ["Tchau! Até ontem.", "¡Chao! Hasta ayer.", false]]]] },
          { title: "Elige una frase útil", prompt: "Quieres despedirte de manera informal.", options: ["Tchau, até amanhã!", "Bom dia, até ontem!", "Boa tarde, meu nome é tchau."], answer: "Tchau, até amanhã!", translation: "Te despides con naturalidad y dices que os veis mañana." }
        ] }),
        createPortugueseLesson({ id: "pt-chegadas-2", title: "Decir tu nombre y presentarte", objective: "Decir cómo te llamas y preguntar el nombre de otra persona.", vocabulary: [
          ["Eu me chamo", "me llamo", "Eu me chamo Ana.", "Me llamo Ana."],
          ["Meu nome é", "mi nombre es", "Meu nome é Diego.", "Mi nombre es Diego."],
          ["Prazer", "encantado/a (al conocer a alguien)", "Prazer em conhecer você.", "Encantado/a de conocerte."],
          ["Como você se chama?", "¿cómo te llamas? (trato habitual)", "Olá! Como você se chama?", "¡Hola! ¿Cómo te llamas?"]
        ], steps: [
          null,
          { title: "Presentarse con chamar-se y ser", explanation: "Para decir el nombre se usan Eu me chamo… y Meu nome é…. En Brasil, você es una forma común de «tú» y el verbo que la acompaña va en tercera persona: você se chama.", pattern: "Eu me chamo Ana. · Meu nome é Ana.\nComo você se chama? · Você é a Ana?", examples: [["Eu me chamo Lucas. Prazer!", "Me llamo Lucas. ¡Encantado!"], ["Como você se chama?", "¿Cuál es tu nombre?"]], tip: "Prazer puede decirse solo; la expresión completa é um prazer em conhecer você también es correcta." },
          { title: "Elige una presentación", prompt: "¿Qué frase dice «Me llamo Ana»?", options: ["Eu me chamo Ana.", "Eu te chamas Ana.", "Meu nome são Ana."], answer: "Eu me chamo Ana.", feedback: "Eu me chamo Ana es una manera natural de decir «Me llamo Ana»." },
          { title: "Completa tu presentación", prompt: "Eu me ___ Ana. (Me llamo Ana.)", answer: "chamo", hint: "Con eu, el presente de chamar-se es me chamo." },
          { title: "Conocer a alguien", scene: "Te presentan a una compañera nueva en un curso.", turns: [["Marina", "Oi! Como você se chama?", "¡Hola! ¿Cómo te llamas?", [["Eu me chamo Carla. Prazer!", "Me llamo Carla. ¡Encantada!", true], ["Você me chamo Carla ontem.", "Tú me llamo Carla ayer.", false]]]] },
          { title: "Elige cómo presentarte", prompt: "Preséntate y saluda a una persona que acabas de conocer.", options: ["Oi, eu me chamo Martín. Prazer!", "Tchau, eu se chama Martín.", "Meu nome são Martín, ontem."], answer: "Oi, eu me chamo Martín. Prazer!", translation: "Saludas, dices tu nombre y expresas que te alegra conocer a la persona." }
        ] }),
        createPortugueseLesson({ id: "pt-chegadas-3", title: "Pedir ayuda con cortesía", objective: "Usar por favor, agradecer y pedir que repitan o hablen despacio.", vocabulary: [
          ["Por favor", "por favor", "Pode repetir, por favor?", "¿Puede repetir, por favor?"],
          ["Obrigado / obrigada", "gracias (hablante masculino / femenino)", "Obrigada pela ajuda.", "Gracias por la ayuda."],
          ["Desculpe", "disculpe / perdone", "Desculpe, não entendi.", "Disculpe, no lo entendí."],
          ["Mais devagar", "más despacio", "Fale mais devagar, por favor.", "Hable más despacio, por favor."]
        ], steps: [
          null,
          { title: "La cortesía en una petición", explanation: "Por favor suaviza una petición; obrigado concuerda tradicionalmente con quien agradece (obrigado si habla un hombre, obrigada si habla una mujer). Para pedir que repitan, es común Pode repetir, por favor?", pattern: "Pode repetir, por favor? · Fale mais devagar, por favor.\nObrigado! / Obrigada!", examples: [["Desculpe, pode falar mais devagar?", "Disculpe, ¿puede hablar más despacio?"], ["Obrigada pela explicação.", "Gracias por la explicación."]], tip: "En una conversación informal también se oye valeu, pero obrigado/a es una opción clara y adecuada en cualquier situación." },
          { title: "Pide una repetición", prompt: "¿Qué frase pide cortésmente repetir algo?", options: ["Pode repetir, por favor?", "Eu repito você ontem.", "Obrigado é devagar."], answer: "Pode repetir, por favor?", feedback: "Pode repetir, por favor? es una petición cortés y frecuente." },
          { title: "Completa la petición", prompt: "Pode ___, por favor? (¿Puede repetir, por favor?)", answer: "repetir", hint: "Usa el infinitivo que significa «decir de nuevo»." },
          { title: "No entiendes una indicación", scene: "Una compañera habla rápido y no entendiste la dirección.", turns: [["Colega", "A sala fica no segundo andar.", "El aula está en el segundo piso.", [["Desculpe, pode repetir mais devagar?", "Disculpa, ¿puedes repetirlo más despacio?", true], ["Obrigado, eu sou uma sala.", "Gracias, soy un aula.", false]]]] },
          { title: "Pide ayuda", prompt: "Quieres que te hablen más despacio, de forma cortés.", options: ["Pode falar mais devagar, por favor?", "Fala eu mais devagar ontem.", "Boa noite, mais devagar é obrigado."], answer: "Pode falar mais devagar, por favor?", translation: "Pides con cortesía que la otra persona hable más lentamente." }
        ] }),
        createPortugueseLesson({ id: "pt-chegadas-4", title: "Deletrear y reconocer sonidos", objective: "Preguntar cómo se escribe un nombre y notar sonidos propios del portugués.", vocabulary: [
          ["Como se escreve?", "¿cómo se escribe?", "Como se escreve o seu sobrenome?", "¿Cómo se escribe tu apellido?"],
          ["Letra", "letra", "A primeira letra é A.", "La primera letra es una A."],
          ["Alfabeto", "abecedario / alfabeto", "O alfabeto tem vinte e seis letras.", "El alfabeto tiene veintiséis letras."],
          ["Nasal", "nasal", "O som de ão é nasal.", "El sonido de ão se pronuncia con resonancia nasal."]
        ], steps: [
          null,
          { title: "Preguntar la escritura y escuchar la nasalidad", explanation: "Como se escreve? pregunta cómo se escribe algo. En portugués, ão y muchas vocales antes de m o n pueden sonar nasales; esa resonancia no es una consonante n añadida al final.", pattern: "Como se escreve Ana? · A-N-A.\não: não · pão · irmão", examples: [["Como se escreve o seu nome?", "¿Cómo se escribe tu nombre?"], ["Não falo alemão.", "No hablo alemán."]], tip: "En ão, mantén la vocal nasal y desliza hacia una terminación parecida a «u»; no lo pronuncies como dos sílabas." },
          { title: "Reconoce la nasalidad", prompt: "¿En qué palabra aparece el sonido nasal ão?", options: ["pão", "casa", "livro"], answer: "pão", feedback: "Pão lleva la secuencia nasal ão." },
          { title: "Completa la pregunta", prompt: "Como se ___ o seu nome? (¿Cómo se escribe tu nombre?)", answer: "escreve", hint: "La forma de escribir se dice escrever; aquí se usa se escreve." },
          { title: "Deletrear un apellido", scene: "En recepción quieren anotar correctamente tu apellido.", turns: [["Recepcionista", "Como se escreve seu sobrenome?", "¿Cómo se escribe tu apellido?", [["P-I-N-T-O. Pinto.", "P-I-N-T-O. Pinto.", true], ["Meu sobrenome é pão.", "Mi apellido es pan.", false]]]] },
          { title: "Di cómo se escribe", prompt: "Responde con naturalidad a «Como se escreve Ana?»", options: ["A-N-A.", "Ana se escrevo ontem.", "Não, boa noite, letra."], answer: "A-N-A.", translation: "Das las letras del nombre, una por una." }
        ] })
      ]
    },
    {
      id: "pt-identidade",
      lessons: [
        createPortugueseLesson({ id: "pt-identidade-1", title: "Decir de dónde eres", objective: "Decir tu país de origen y preguntar el de otra persona.", vocabulary: [
          ["De", "de (origen)", "Sou de Quito.", "Soy de Quito."],
          ["Brasil", "Brasil", "Ela é do Brasil.", "Ella es de Brasil."],
          ["País", "país", "Qual é o seu país?", "¿Cuál es tu país?"],
          ["Você é de onde?", "¿de dónde eres?", "Você é de onde?", "¿De dónde eres?"]
        ], steps: [
          null,
          { title: "Origen con ser de", explanation: "Para indicar origen se usa ser + de: Sou de Quito. Con un nombre de país que lleva artículo, de se combina: de + o = do, de + a = da. En Brasil se dice do Brasil.", pattern: "Eu sou de Quito. · Você é do Brasil?\nEle é da Argentina. · Somos do Chile.", examples: [["Sou do México.", "Mi origen es México."], ["Ela é da Colômbia.", "Ella procede de Colombia."]], tip: "No todos los países llevan artículo: de Portugal, de Cuba, pero do Brasil y da Argentina." },
          { title: "Elige la contracción", prompt: "¿Cómo se dice «Soy de Brasil»?", options: ["Sou do Brasil.", "Sou da Brasil.", "Estou o Brasil."], answer: "Sou do Brasil.", feedback: "Brasil se usa con el artículo o: de + o se contrae en do." },
          { title: "Completa el origen", prompt: "Eu sou ___ Brasil. (Soy de Brasil.)", answer: "do", hint: "Brasil lleva el artículo masculino o: de + o." },
          { title: "Preguntar por el origen", scene: "Conoces a alguien durante un intercambio cultural.", turns: [["Rafa", "Você é de onde?", "¿De dónde eres?", [["Sou de Lima, no Peru.", "Soy de Lima, en Perú.", true], ["Estou Lima de ontem.", "Estoy Lima desde ayer.", false]]]] },
          { title: "Di de dónde eres", prompt: "Elige una frase natural para decir que eres de Portugal.", options: ["Sou de Portugal.", "Estou Portugal.", "Sou do Portugal ontem."], answer: "Sou de Portugal.", translation: "Indicas tu lugar de origen con ser de." }
        ] }),
        createPortugueseLesson({ id: "pt-identidade-2", title: "Nacionalidades e lenguas", objective: "Nombrar algunas nacionalidades y decir qué idiomas hablas.", vocabulary: [
          ["Brasileiro / brasileira", "brasileño / brasileña", "A professora é brasileira.", "La profesora es de Brasil."],
          ["Português / portuguesa", "portugués / portuguesa", "Ele é português.", "Él es de Portugal."],
          ["Falar", "hablar", "Eu falo espanhol.", "Hablo español."],
          ["Língua", "idioma / lengua", "O português é uma língua românica.", "El portugués pertenece a las lenguas romances."]
        ], steps: [
          null,
          { title: "Nacionalidad y concordancia", explanation: "Los adjetivos de nacionalidad concuerdan con la persona: brasileiro/brasileira, português/portuguesa. Para idiomas se usa falar + nombre del idioma: Falo espanhol.", pattern: "Ele é brasileiro. · Ela é brasileira.\nEu falo português e espanhol.", examples: [["A médica é portuguesa.", "La médica tiene nacionalidad portuguesa."], ["Nós falamos português.", "Nos comunicamos en portugués."]], tip: "Português también nombra el idioma; el contexto distingue «es portugués» de «habla portugués»." },
          { title: "Haz concordar la nacionalidad", prompt: "¿Cómo describes a una mujer de Brasil?", options: ["Ela é brasileira.", "Ela é brasileiro.", "Ela fala brasileira."], answer: "Ela é brasileira.", feedback: "Brasileira concuerda en femenino con ela." },
          { title: "Completa el idioma", prompt: "Eu ___ espanhol e português. (Hablo español y portugués.)", answer: "falo", hint: "Con eu, el presente de falar termina en -o." },
          { title: "Hablar de idiomas", scene: "En una clase, una compañera pregunta qué idiomas conoces.", turns: [["Bia", "Você fala espanhol?", "¿Hablas español?", [["Sim, falo espanhol e um pouco de português.", "Sí, hablo español y un poco de portugués.", true], ["Sim, sou espanhol de falar.", "Sí, soy español de hablar.", false]]]] },
          { title: "Presenta tu idioma", prompt: "Elige cómo decir «Hablo portugués y español».", options: ["Falo português e espanhol.", "Sou falar português e espanhol.", "Estou português e espanhol."], answer: "Falo português e espanhol.", translation: "Dices qué idiomas puedes hablar usando el verbo falar." }
        ] }),
        createPortugueseLesson({ id: "pt-identidade-3", title: "Edad y datos de contacto", objective: "Decir tu edad y compartir un dato de contacto básico.", vocabulary: [
          ["Quantos anos?", "¿cuántos años?", "Quantos anos você tem?", "¿Qué edad tienes?"],
          ["Ter", "tener", "Tenho vinte anos.", "Tengo veinte años."],
          ["Telefone", "teléfono", "Meu telefone é este.", "Este es mi teléfono."],
          ["E-mail", "correo electrónico", "Meu e-mail está no formulário.", "Mi correo aparece en el formulario."]
        ], steps: [
          null,
          { title: "La edad se expresa con ter", explanation: "En portugués, como en español, la edad se expresa con ter: Tenho vinte anos. La pregunta habitual es Quantos anos você tem?; no se usa ser para la edad.", pattern: "Eu tenho 20 anos. · Quantos anos você tem?\nMeu telefone é… · Meu e-mail é…", examples: [["Ela tem dezoito anos.", "Su edad es de dieciocho años."], ["Quantos anos ele tem?", "¿Qué edad tiene él?"]], tip: "No compartas datos reales en ejercicios; usa números y direcciones inventados para practicar." },
          { title: "Expresa la edad", prompt: "¿Qué frase significa «Tengo 25 años»?", options: ["Tenho vinte e cinco anos.", "Sou vinte e cinco anos.", "Estou vinte e cinco idade."], answer: "Tenho vinte e cinco anos.", feedback: "La edad se expresa con ter: tenho… anos." },
          { title: "Completa la pregunta", prompt: "Quantos anos você ___? (¿Cuántos años tienes?)", answer: "tem", hint: "Você lleva la forma de tercera persona de ter." },
          { title: "Completar una ficha", scene: "En una actividad de clase, intercambias información ficticia.", turns: [["Professor", "Quantos anos você tem?", "¿Cuántos años tienes?", [["Tenho vinte anos.", "Tengo veinte años.", true], ["Sou vinte anos.", "Soy veinte años.", false]]]] },
          { title: "Da un dato ficticio", prompt: "Elige una respuesta correcta a «Quantos anos você tem?»", options: ["Tenho trinta anos.", "Sou trinta anos.", "Estou trinta anos."], answer: "Tenho trinta anos.", translation: "Indicas la edad con el verbo ter." }
        ] }),
        createPortugueseLesson({ id: "pt-identidade-4", title: "Números y teléfono", objective: "Reconocer números y pedir o dar un número de teléfono ficticio.", vocabulary: [
          ["Zero", "cero", "O código começa com zero.", "El código empieza por cero."],
          ["Dez", "diez", "A sala é número dez.", "La sala es la número diez."],
          ["Número", "número", "Qual é o seu número?", "¿Cuál es tu número?"],
          ["Celular", "móvil / teléfono celular", "Meu celular está na bolsa.", "Mi móvil está en el bolso."]
        ], steps: [
          null,
          { title: "Números y preguntas", explanation: "Los números sirven para decir edades, precios y teléfonos. Para preguntar por un teléfono se dice Qual é o seu número?; número de celular es una expresión común en Brasil.", pattern: "Qual é o seu número de celular?\n0 zero · 1 um · 2 dois · 10 dez · 20 vinte", examples: [["Meu número começa com nove.", "La primera cifra de mi número es nueve."], ["O ônibus número dez passa aqui.", "Por aquí pasa el autobús número diez."]], tip: "En un teléfono, di las cifras con claridad y agrúpalas; no hay una única manera obligatoria de hacer las pausas." },
          { title: "Reconoce el número", prompt: "¿Qué palabra significa «cero»?", options: ["zero", "dez", "dois"], answer: "zero", feedback: "Zero significa cero." },
          { title: "Completa el dato", prompt: "Meu número começa com ___. (Mi número empieza por cero.)", answer: "zero", hint: "Escribe el nombre portugués de 0." },
          { title: "Preguntar un número", scene: "Practicas con un número inventado en una actividad de clase.", turns: [["Colega", "Qual é o seu número de celular?", "¿Cuál es tu número de móvil?", [["É 91234-5678; é fictício.", "Es 91234-5678; es inventado.", true], ["Tenho celular dez anos.", "Tengo móvil diez años.", false]]]] },
          { title: "Pregunta por un teléfono", prompt: "Elige la pregunta adecuada para pedir un número de móvil.", options: ["Qual é o seu número de celular?", "Quantos anos é seu celular?", "Onde você fala seu telefone?"], answer: "Qual é o seu número de celular?", translation: "Preguntas cuál es el número de teléfono móvil de la otra persona." }
        ] }),
        createPortugueseLesson({ id: "pt-identidade-5", title: "Días, meses y fechas", objective: "Nombrar días y meses y decir cuándo ocurre una actividad.", vocabulary: [
          ["Hoje", "hoy", "Hoje é segunda-feira.", "Hoy es lunes."],
          ["Amanhã", "mañana", "Amanhã tenho aula.", "Mañana tengo clase."],
          ["Segunda-feira", "lunes", "A reunião é na segunda-feira.", "La reunión es el lunes."],
          ["Janeiro", "enero", "Meu curso começa em janeiro.", "Mi curso empieza en enero."]
        ], steps: [
          null,
          { title: "Decir cuándo", explanation: "Los días de la semana y los meses se escriben normalmente con minúscula. Para un día concreto se usa em; con el artículo contraído, na segunda-feira. Para los meses se usa em janeiro.", pattern: "Hoje é segunda-feira. · Amanhã é terça-feira.\nA aula é na sexta-feira. · O curso começa em janeiro.", examples: [["A prova é na terça-feira.", "El examen se hace el martes."], ["Viajo em julho.", "Mi viaje es durante el mes de julio."]], tip: "En portugués brasileiro, terça-feira significa martes y quinta-feira, jueves." },
          { title: "Elige el día", prompt: "¿Qué palabra significa «mañana»?", options: ["amanhã", "hoje", "janeiro"], answer: "amanhã", feedback: "Amanhã significa el día siguiente: mañana." },
          { title: "Completa la fecha", prompt: "A aula é ___ segunda-feira. (La clase es el lunes.)", answer: "na", hint: "Em + a se contraen en na." },
          { title: "Acordar una clase", scene: "Una compañera pregunta cuándo es la próxima clase.", turns: [["Lia", "A aula é hoje?", "¿La clase es hoy?", [["Não, é amanhã, na terça-feira.", "No, es mañana, el martes.", true], ["Não, é janeiro-feira.", "No, es lunes-enero.", false]]]] },
          { title: "Di cuándo empieza el curso", prompt: "Elige la frase «El curso empieza en enero».", options: ["O curso começa em janeiro.", "O curso começa na janeiro.", "O curso é janeiro-feira."], answer: "O curso começa em janeiro.", translation: "Indicas que el comienzo ocurre durante el mes de enero." }
        ] })
      ]
    },
    {
      id: "pt-familia",
      lessons: [
        createPortugueseLesson({ id: "pt-familia-1", title: "Hablar de la familia", objective: "Nombrar familiares y presentar a una persona cercana.", vocabulary: [
          ["Família", "familia", "Minha família mora em Recife.", "Mi familia vive en Recife."],
          ["Mãe", "madre", "Minha mãe se chama Rosa.", "Mi madre se llama Rosa."],
          ["Irmão / irmã", "hermano / hermana", "Tenho um irmão e uma irmã.", "Tengo un hermano y una hermana."],
          ["Filho / filha", "hijo / hija", "A filha deles estuda aqui.", "Su hija estudia aquí."]
        ], steps: [
          null,
          { title: "Artículos y género", explanation: "Los nombres portugueses tienen género gramatical. O irmão y a irmã muestran que el artículo ayuda a reconocerlo; para hablar de una persona posesivamente, Minha mãe es «mi madre».", pattern: "o irmão · a irmã · o filho · a filha\nminha mãe · meu pai · minha família", examples: [["Minha irmã mora perto.", "Mi hermana vive cerca."], ["O filho deles se chama Caio.", "Su hijo se llama Caio."]], tip: "Família es femenino: a família, aunque termine en -ia." },
          { title: "Elige el artículo", prompt: "¿Cómo se dice «la madre»?", options: ["a mãe", "o mãe", "as mãe"], answer: "a mãe", feedback: "Mãe es femenino y lleva el artículo a." },
          { title: "Completa el posesivo", prompt: "___ mãe se chama Rosa. (Mi madre se llama Rosa.)", answer: "Minha", hint: "Mãe es femenino singular, así que el posesivo concuerda: minha." },
          { title: "Presentar a tu familia", scene: "Muestras una foto familiar a un compañero.", turns: [["Nina", "Quem é esta pessoa?", "¿Quién es esta persona?", [["É minha irmã, a Luísa.", "Es mi hermana, Luísa.", true], ["É meu irmã, o Luísa.", "Es mi hermana (con concordancia incorrecta), Luísa.", false]]]] },
          { title: "Presenta a un familiar", prompt: "Elige una frase natural para presentar a tu padre.", options: ["Este é meu pai.", "Esta é minha pai.", "Meu pai são ela."], answer: "Este é meu pai.", translation: "Presentas a tu padre con el demostrativo y posesivo masculinos." }
        ] }),
        createPortugueseLesson({ id: "pt-familia-2", title: "Describir a las personas", objective: "Describir apariencia y carácter con adjetivos que concuerdan.", vocabulary: [
          ["Alto / alta", "alto / alta", "Minha irmã é alta.", "Mi hermana tiene mucha estatura."],
          ["Baixo / baixa", "bajo / baja", "O menino é baixo.", "El niño no es alto."],
          ["Legal", "simpático/a, agradable (Brasil)", "Meu vizinho é muito legal.", "Mi vecino es muy agradable."],
          ["Amável", "amable, afectuoso/a", "A professora é amável.", "La profesora trata a los demás con amabilidad."]
        ], steps: [
          null,
          { title: "Adjetivos y concordancia", explanation: "Muchos adjetivos cambian la terminación para concordar: alto/alta, baixos/baixas. Legal suele tener la misma forma en masculino y femenino: um amigo legal, uma amiga legal.", pattern: "o irmão alto · a irmã alta\no amigo legal · as amigas legais", examples: [["Meus pais são muito amáveis.", "Mis padres tienen un trato afectuoso."], ["Ela é baixa e muito legal.", "Tiene poca estatura y es muy simpática."]], tip: "En Brasil, legal suele significar «agradable» o «genial», no solo «conforme a la ley»." },
          { title: "Haz concordar el adjetivo", prompt: "Completa mentalmente: «Mi hermana es alta».", options: ["Minha irmã é alta.", "Minha irmã é alto.", "Meu irmã são alta."], answer: "Minha irmã é alta.", feedback: "Irmã y alta concuerdan en femenino singular." },
          { title: "Completa la descripción", prompt: "Meu irmão é ___. (Mi hermano es alto.)", answer: "alto", hint: "Irmão es masculino; el adjetivo también va en masculino." },
          { title: "Describir a una amiga", scene: "Una persona pregunta cómo es tu nueva amiga.", turns: [["Rui", "Como é a sua amiga?", "¿Cómo es tu amiga?", [["Ela é alta e muito legal.", "Es alta y muy simpática.", true], ["Ela são alto e legalmente.", "Ella son alto y legalmente.", false]]]] },
          { title: "Elige una descripción", prompt: "Describe a una profesora amable.", options: ["A professora é amável.", "O professora são amável.", "A professora é amáveis."], answer: "A professora é amável.", translation: "El adjetivo concuerda con profesora en femenino singular." }
        ] }),
        createPortugueseLesson({ id: "pt-familia-3", title: "Describir y contar personas", objective: "Usar plurales frecuentes y posesivos para hablar de varias personas.", vocabulary: [
          ["Pais", "padres", "Meus pais moram no Brasil.", "Mi madre y mi padre viven en Brasil."],
          ["Avós", "abuelos", "Meus avós visitam a família.", "Mi abuelo y mi abuela visitan a la familia."],
          ["Casado / casada", "casado / casada", "Eles são casados.", "Son matrimonio."],
          ["Jovem", "joven", "Minhas primas são jovens.", "Mis primas tienen poca edad."]
        ], steps: [
          null,
          { title: "Plural y posesivos", explanation: "En general, los nombres y adjetivos forman el plural con -s: irmã/irmãs, jovem/jovens. Meu/minha cambia según el nombre poseído; meus/minhas se usan en plural.", pattern: "meu pai → meus pais · minha irmã → minhas irmãs\njovem → jovens · casada → casadas", examples: [["Meus avós são jovens.", "Mis abuelos aún tienen poca edad."], ["Minhas primas são casadas.", "Mis primas están casadas."]], tip: "Pais significa «padres»; pai, en singular, es «padre»." },
          { title: "Elige el plural", prompt: "¿Cómo se dice «mis hermanas»?", options: ["minhas irmãs", "meus irmã", "minha irmãs"], answer: "minhas irmãs", feedback: "Minhas concuerda en femenino plural con irmãs." },
          { title: "Completa el plural", prompt: "Meus avó___ moram aqui. (Mis abuelos viven aquí.)", answer: "s", hint: "Avós es el plural de avô; añade la terminación -s." },
          { title: "Hablar de los abuelos", scene: "Conversas sobre tu familia durante una comida.", turns: [["Beto", "Como são seus avós?", "¿Cómo son tus abuelos?", [["Meus avós são muito jovens e alegres.", "Mis abuelos tienen poca edad y son alegres.", true], ["Minha avós é jovem.", "Mi abuelos es joven.", false]]]] },
          { title: "Cuenta una frase sobre tu familia", prompt: "Elige la frase correcta para «Mis padres son amables».", options: ["Meus pais são amáveis.", "Meu pais é amável.", "Minhas pais são amável."], answer: "Meus pais são amáveis.", translation: "El posesivo, el verbo y el adjetivo están en plural." }
        ] })
      ]
    },
    {
      id: "pt-rotina",
      lessons: [
        createPortugueseLesson({ id: "pt-rotina-1", title: "Ocupaciones y lugares de estudio", objective: "Decir a qué te dedicas y dónde estudias o trabajas.", vocabulary: [
          ["Estudante", "estudiante", "Sou estudante de português.", "Estudio portugués."],
          ["Professor / professora", "profesor / profesora", "Ela é professora.", "Ella enseña."],
          ["Trabalhar", "trabajar", "Trabalho em uma escola.", "Trabajo en una escuela."],
          ["Escola", "escuela", "A escola fica perto.", "La escuela está cerca."]
        ], steps: [
          null,
          { title: "Ser para ocupación; trabajar en un lugar", explanation: "Ser identifica profesión u ocupación: Sou estudante, Ela é professora. Trabalhar en presente regular cambia la terminación según la persona: trabalho, trabalha, trabalhamos.", pattern: "Eu sou estudante. · Ela é professora.\nEu trabalho em uma escola. · Você trabalha?", examples: [["Meu irmão trabalha em um hospital.", "Mi hermano tiene su trabajo en un hospital."], ["Somos estudantes.", "Estamos cursando estudios."]], tip: "Con você se usa trabalha, igual que con ele/ela: você trabalha." },
          { title: "Elige la ocupación", prompt: "¿Cómo dices «Soy estudiante»?", options: ["Sou estudante.", "Estou estudante.", "Tenho estudante."], answer: "Sou estudante.", feedback: "La ocupación se identifica con ser: sou estudante." },
          { title: "Completa el verbo", prompt: "Eu ___ em uma escola. (Trabajo en una escuela.)", answer: "trabalho", hint: "Con eu, trabalhar termina en -o: trabalho." },
          { title: "Hablar de trabajo", scene: "Conoces a alguien en un curso nocturno.", turns: [["Ivo", "Você trabalha ou estuda?", "¿Trabajas o estudias?", [["Estudo de manhã e trabalho à tarde.", "Estudio por la mañana y trabajo por la tarde.", true], ["Sou trabalhar e estudante ontem.", "Soy trabajar y estudiante ayer.", false]]]] },
          { title: "Di a qué te dedicas", prompt: "Elige una frase para decir «Ella es profesora».", options: ["Ela é professora.", "Ela está professora.", "Ela tem professora."], answer: "Ela é professora.", translation: "Identificas su profesión con el verbo ser." }
        ] }),
        createPortugueseLesson({ id: "pt-rotina-2", title: "Rutina y presente", objective: "Describir acciones habituales con verbos regulares en presente.", vocabulary: [
          ["Acordar", "despertarse", "Acordo às sete.", "Me despierto a las siete."],
          ["Tomar café da manhã", "desayunar", "Tomo café da manhã em casa.", "Desayuno en casa."],
          ["Almoçar", "almorzar", "Almoço ao meio-dia.", "Almuerzo al mediodía."],
          ["Dormir", "dormir", "Durmo cedo durante a semana.", "Me acuesto pronto entre semana."]
        ], steps: [
          null,
          { title: "Verbos para hábitos", explanation: "El presente expresa rutinas. En portugués brasileño se suele omitir eu si el contexto es claro: Acordo às sete. Los verbos en -ar tienen terminaciones como acordo/acorda/acordamos.", pattern: "eu acordo · você acorda · nós acordamos\nEu almoço às doze. · Ela dorme cedo.", examples: [["Acordo cedo e tomo café em casa.", "Me despierto pronto y desayuno en casa."], ["Eles almoçam no trabalho.", "Comen al mediodía en el trabajo."]], tip: "Às sete lleva crase (a + as) y significa «a las siete»." },
          { title: "Elige la forma correcta", prompt: "¿Cómo dices «Ella almuerza en casa»?", options: ["Ela almoça em casa.", "Ela almoço em casa.", "Ela almoçar em casa."], answer: "Ela almoça em casa.", feedback: "Con ela, almoçar toma la forma almoça." },
          { title: "Completa la rutina", prompt: "Eu ___ às sete. (Me despierto a las siete.)", answer: "acordo", hint: "El presente de acordar con eu termina en -o." },
          { title: "Hablar de la mañana", scene: "Un compañero te pregunta qué haces antes de clase.", turns: [["Nando", "O que você faz de manhã?", "¿Qué haces por la mañana?", [["Acordo às sete e tomo café da manhã.", "Me despierto a las siete y desayuno.", true], ["Acordar às sete e café ontem.", "Despertarse a las siete y café ayer.", false]]]] },
          { title: "Describe un hábito", prompt: "Elige una rutina habitual y correcta.", options: ["Nós almoçamos ao meio-dia.", "Nós almoça ao meio-dia.", "Nós almoçar ao meio-dia."], answer: "Nós almoçamos ao meio-dia.", translation: "Con nós, el presente de almoçar acaba en -amos." }
        ] }),
        createPortugueseLesson({ id: "pt-rotina-3", title: "Horarios y frecuencia", objective: "Preguntar y responder sobre horarios habituales.", vocabulary: [
          ["Que horas?", "¿a qué hora?", "Que horas são?", "¿Qué hora es?"],
          ["Às oito", "a las ocho", "A aula começa às oito.", "La clase empieza a las ocho."],
          ["Sempre", "siempre", "Sempre estudo à noite.", "Estudio todas las noches."],
          ["Às vezes", "a veces", "Às vezes trabalho em casa.", "Algunas veces trabajo desde casa."]
        ], steps: [
          null,
          { title: "Preguntar la hora y frecuencia", explanation: "Que horas são? pregunta la hora actual. Para un horario habitual, usa às + hora: A aula começa às oito. Siempre y às vezes suelen ir antes del verbo.", pattern: "Que horas são? · São oito horas.\nTrabalho sempre de manhã. · Às vezes estudo à noite.", examples: [["O ônibus passa às seis.", "El autobús pasa a las seis."], ["Às vezes, almoçamos juntos.", "En algunas ocasiones comemos juntos."]], tip: "La hora en punto también puede decirse É uma hora (es la una), pero São duas horas (son las dos)." },
          { title: "Elige el horario", prompt: "¿Cómo dices «La clase empieza a las ocho»?", options: ["A aula começa às oito.", "A aula começa as oito horas é.", "A aula começam à oito."], answer: "A aula começa às oito.", feedback: "Para indicar el horario se dice às oito." },
          { title: "Completa la frecuencia", prompt: "___ vezes estudo à noite. (A veces estudio por la noche.)", answer: "Às", hint: "La expresión portuguesa «a veces» empieza con la contracción às." },
          { title: "Acordar una hora", scene: "Organizas una reunión de estudio.", turns: [["Léo", "Que horas começa a aula?", "¿A qué hora empieza la clase?", [["Começa às nove da manhã.", "Empieza a las nueve de la mañana.", true], ["Começa nove sempre às vezes.", "Empieza nueve siempre a veces.", false]]]] },
          { title: "Pregunta por la hora", prompt: "Elige la pregunta para saber la hora actual.", options: ["Que horas são?", "Que hora você trabalha?", "Quantos horas é?"], answer: "Que horas são?", translation: "Preguntas qué hora es en este momento." }
        ] }),
        createPortugueseLesson({ id: "pt-rotina-4", title: "Gustos y actividades", objective: "Expresar gustos y preferencias con gostar de.", vocabulary: [
          ["Gostar de", "gustar de", "Gosto de música brasileira.", "Me gusta la música brasileña."],
          ["Música", "música", "Ela gosta de música.", "A ella le gusta la música."],
          ["Ler", "leer", "Gosto de ler antes de dormir.", "Me gusta leer antes de acostarme."],
          ["Dançar", "bailar", "Eles gostam de dançar.", "A ellos les gusta bailar."]
        ], steps: [
          null,
          { title: "Gostar siempre lleva de", explanation: "El verbo gostar se construye con de delante de un nombre o de otro verbo: gosto de música, gosto de ler. La forma concuerda con quien siente el gusto: eu gosto, você gosta, nós gostamos.", pattern: "Eu gosto de café. · Ela gosta de ler.\nVocê gosta de dançar? · Nós gostamos de música.", examples: [["Gosto de estudar português.", "Disfruto estudiar portugués."], ["Eles gostam de filmes brasileiros.", "Disfrutan las películas brasileñas."]], tip: "La estructura es distinta del español «me gusta»: en portugués el sujeto es quien gusta de algo." },
          { title: "Elige la frase con gostar", prompt: "¿Qué frase dice «Me gusta leer»?", options: ["Gosto de ler.", "Gosto ler de.", "Me gosto a ler."], answer: "Gosto de ler.", feedback: "Después de gostar se usa de: gosto de ler." },
          { title: "Completa tu gusto", prompt: "Ela gosta ___ dançar. (A ella le gusta bailar.)", answer: "de", hint: "Gostar va seguido de la preposición de." },
          { title: "Hablar de preferencias", scene: "Una compañera pregunta qué te gusta hacer en tu tiempo libre.", turns: [["Duda", "Você gosta de dançar?", "¿Te gusta bailar?", [["Gosto de dançar e de ouvir música.", "Me gusta bailar y escuchar música.", true], ["Gosto dançar ontem.", "Me gusta bailar ayer.", false]]]] },
          { title: "Expresa una preferencia", prompt: "Elige cómo decir «Nos gusta estudiar».", options: ["Gostamos de estudar.", "Gostamos estudar de.", "Somos de estudar."], answer: "Gostamos de estudar.", translation: "Expresas una preferencia con gostar de + infinitivo." }
        ] })
      ]
    },
    {
      id: "pt-casa",
      lessons: [
        createPortugueseLesson({ id: "pt-casa-1", title: "Habitaciones y vivienda", objective: "Nombrar habitaciones y decir dónde vives.", vocabulary: [
          ["Casa", "casa / vivienda", "Minha casa tem dois quartos.", "Mi vivienda tiene dos dormitorios."],
          ["Quarto", "dormitorio / habitación", "O quarto é pequeno.", "El dormitorio tiene poco espacio."],
          ["Cozinha", "cocina", "A cozinha fica ao lado da sala.", "La cocina está junto al salón."],
          ["Banheiro", "baño", "O banheiro está livre.", "El baño no está ocupado."]
        ], steps: [
          null,
          { title: "Artículos y nombres de habitaciones", explanation: "Los nombres de habitaciones llevan artículo: a cozinha, o quarto, o banheiro. Para expresar posesión, meu/minha concuerda con el nombre: minha casa, meu quarto.", pattern: "a casa · o quarto · a cozinha · o banheiro\nMeu quarto é pequeno. · Minha casa é grande.", examples: [["A cozinha é clara.", "La cocina tiene mucha luz."], ["Meu banheiro fica perto do quarto.", "El baño está cerca del dormitorio."]], tip: "En Brasil, banheiro suele nombrar la habitación con lavabo y retrete; quarto es normalmente dormitorio." },
          { title: "Elige el artículo", prompt: "¿Cómo se dice «la cocina»?", options: ["a cozinha", "o cozinha", "as cozinha"], answer: "a cozinha", feedback: "Cozinha es femenino: a cozinha." },
          { title: "Completa la habitación", prompt: "A ___ fica ao lado da sala. (La cocina está junto al salón.)", answer: "cozinha", hint: "Es el lugar donde se prepara la comida." },
          { title: "Hablar de la vivienda", scene: "Una amiga te pregunta cómo es tu casa.", turns: [["Bia", "Sua casa tem cozinha?", "¿Tu casa tiene cocina?", [["Sim, a cozinha é pequena e clara.", "Sí, la cocina es pequeña y luminosa.", true], ["Sim, meu cozinha são pequeno.", "Sí, mi cocina son pequeño.", false]]]] },
          { title: "Nombra una habitación", prompt: "Elige «Mi dormitorio es pequeño».", options: ["Meu quarto é pequeno.", "Minha quarto é pequena.", "Meu quarto são pequeno."], answer: "Meu quarto é pequeno.", translation: "El posesivo, el nombre y el adjetivo concuerdan en masculino singular." }
        ] }),
        createPortugueseLesson({ id: "pt-casa-2", title: "Muebles y ubicación", objective: "Ubicar objetos con estar y preposiciones de lugar.", vocabulary: [
          ["Mesa", "mesa", "A mesa está na cozinha.", "La mesa está en la cocina."],
          ["Cadeira", "silla", "A cadeira está perto da mesa.", "La silla está cerca de la mesa."],
          ["Em cima de", "encima de", "O livro está em cima da mesa.", "El libro está sobre la mesa."],
          ["Debaixo de", "debajo de", "A bolsa está debaixo da cadeira.", "El bolso está bajo la silla."]
        ], steps: [
          null,
          { title: "Estar y ubicación", explanation: "Para localizar un objeto se usa estar: O livro está na mesa. Las expresiones em cima de y debaixo de indican posición; de + a se contraen en da.", pattern: "O livro está em cima da mesa.\nA bolsa está debaixo da cadeira.\nna = em + a · da = de + a", examples: [["A chave está na cadeira.", "La llave se encuentra en la silla."], ["O celular está em cima do sofá.", "El móvil se encuentra sobre el sofá."]], tip: "Estar cambia según el sujeto: o livro está, as chaves estão." },
          { title: "Elige la ubicación", prompt: "¿Cómo dices «El libro está encima de la mesa»?", options: ["O livro está em cima da mesa.", "O livro é cima na mesa.", "O livro está debaixo a mesa."], answer: "O livro está em cima da mesa.", feedback: "Em cima de expresa que algo está encima de otra cosa." },
          { title: "Completa la ubicación", prompt: "A bolsa está ___ da cadeira. (El bolso está debajo de la silla.)", answer: "debaixo", hint: "Usa la palabra que indica que algo está bajo otra cosa." },
          { title: "Buscar las llaves", scene: "No encuentras las llaves y preguntas dónde están.", turns: [["Rafa", "Onde estão as chaves?", "¿Dónde están las llaves?", [["Estão em cima da mesa.", "Están encima de la mesa.", true], ["São em cima mesa.", "Son encima mesa.", false]]]] },
          { title: "Ubica un objeto", prompt: "Elige «La silla está cerca de la mesa».", options: ["A cadeira está perto da mesa.", "O cadeira está perto o mesa.", "A cadeira são perto da mesa."], answer: "A cadeira está perto da mesa.", translation: "Dices dónde se encuentra la silla con estar y perto de." }
        ] }),
        createPortugueseLesson({ id: "pt-casa-3", title: "Hay y necesidades en casa", objective: "Decir qué hay en una habitación y pedir un objeto necesario.", vocabulary: [
          ["Tem", "hay / tiene (uso brasileño coloquial)", "Tem uma janela no quarto.", "Hay una ventana en el dormitorio."],
          ["Janela", "ventana", "A janela está aberta.", "La ventana está abierta."],
          ["Preciso de", "necesito", "Preciso de uma toalha.", "Necesito una toalla."],
          ["Toalha", "toalla", "A toalha está no banheiro.", "La toalla está en el baño."]
        ], steps: [
          null,
          { title: "Tem para decir que hay", explanation: "En el portugués brasileño cotidiano, tem se usa mucho con sentido de «hay»: Tem uma janela. En registros más formales también aparece há. Para expresar necesidad: preciso de + nombre.", pattern: "Tem uma janela no quarto.\nHá duas cadeiras na sala. · Preciso de uma toalha.", examples: [["Tem um mercado perto da minha casa.", "Hay una tienda cerca de mi casa."], ["Preciso de água, por favor.", "Necesito agua, por favor."]], tip: "Tem puede significar «hay» o «tiene» según el contexto; en habla formal, usa há para existencia." },
          { title: "Elige cómo decir «hay»", prompt: "¿Cómo dices de forma cotidiana «Hay una ventana»?", options: ["Tem uma janela.", "É uma janela tem.", "Está uma janela há."], answer: "Tem uma janela.", feedback: "En el portugués brasileño cotidiano, tem se usa para decir «hay»." },
          { title: "Completa la necesidad", prompt: "Preciso ___ uma toalha. (Necesito una toalla.)", answer: "de", hint: "Preciso va seguido de la preposición de." },
          { title: "Pedir algo necesario", scene: "Te alojas en una habitación y necesitas una toalla.", turns: [["Hóspede", "Tem uma toalha no banheiro?", "¿Hay una toalla en el baño?", [["Não tem; preciso de uma, por favor.", "No hay; necesito una, por favor.", true], ["Não sou toalha no banheiro.", "No soy una toalla en el baño.", false]]]] },
          { title: "Di lo que necesitas", prompt: "Elige la frase «Necesito una ventana abierta».", options: ["Preciso de uma janela aberta.", "Sou uma janela abrir.", "Precisa uma aberta janela de."], answer: "Preciso de uma janela aberta.", translation: "Expresas una necesidad con precisar de y describes la ventana." }
        ] })
      ]
    },
    {
      id: "pt-cidade",
      lessons: [
        createPortugueseLesson({ id: "pt-cidade-1", title: "Lugares de la ciudad", objective: "Preguntar dónde queda un lugar y entender respuestas sencillas.", vocabulary: [
          ["Onde fica?", "¿dónde está? (un lugar)", "Onde fica a estação?", "¿Dónde está la estación?"],
          ["Farmácia", "farmacia", "A farmácia fica perto do banco.", "La farmacia está cerca del banco."],
          ["Estação", "estación", "A estação fica no centro.", "La estación está en el centro."],
          ["Perto de", "cerca de", "Moro perto da praça.", "Vivo cerca de la plaza."]
        ], steps: [
          null,
          { title: "Preguntar dónde queda", explanation: "Onde fica? pregunta por la ubicación de un lugar. Ficar suele expresar dónde está un sitio; perto de indica proximidad y puede contraerse con artículos: perto do banco, perto da praça.", pattern: "Onde fica a farmácia?\nFica perto da estação. · Fica no centro.", examples: [["Onde fica o mercado?", "¿En qué lugar se encuentra el mercado?"], ["O hotel fica perto do aeroporto.", "El hotel está a poca distancia del aeropuerto."]], tip: "Para la ubicación de una persona u objeto suele usarse estar; para ubicar establecimientos, ficar es muy frecuente." },
          { title: "Pregunta por un lugar", prompt: "¿Qué pregunta significa «¿Dónde está la estación?»", options: ["Onde fica a estação?", "Quem estação fica?", "Onde é a estação fica?"], answer: "Onde fica a estação?", feedback: "Onde fica? sirve para preguntar dónde se encuentra un lugar." },
          { title: "Completa la ubicación", prompt: "A farmácia fica perto ___ banco. (La farmacia está cerca del banco.)", answer: "do", hint: "De + o se contraen en do." },
          { title: "Buscar una farmacia", scene: "Estás en el centro y necesitas una farmacia.", turns: [["Visitante", "Com licença, onde fica a farmácia?", "Disculpe, ¿dónde está la farmacia?", [["Fica perto da estação, à direita.", "Está cerca de la estación, a la derecha.", true], ["É farmácia de noite ontem.", "Es farmacia de noche ayer.", false]]]] },
          { title: "Pregunta por el mercado", prompt: "Elige una pregunta correcta para saber dónde está el mercado.", options: ["Onde fica o mercado?", "Onde é fica o mercado?", "Quem fica mercado?"], answer: "Onde fica o mercado?", translation: "Preguntas por la ubicación de un establecimiento." }
        ] }),
        createPortugueseLesson({ id: "pt-cidade-2", title: "Direcciones sencillas", objective: "Comprender instrucciones básicas para orientarte a pie.", vocabulary: [
          ["À direita", "a la derecha", "Vire à direita na esquina.", "Gira a la derecha en la esquina."],
          ["À esquerda", "a la izquierda", "A escola fica à esquerda.", "La escuela está a la izquierda."],
          ["Vá", "vaya (instrucción de ir)", "Vá até a praça.", "Vaya hasta la plaza."],
          ["Esquina", "esquina", "Vire na próxima esquina.", "Gire en la próxima esquina."]
        ], steps: [
          null,
          { title: "Instrucciones con ir y virar", explanation: "Para dar una indicación formal o neutral se usa el imperativo de você: vá, vire, siga. Las contracciones à direita y à esquerda incluyen la preposición a y el artículo a.", pattern: "Vá até a praça. · Vire à direita.\nSiga em frente. · Vire na esquina.", examples: [["Vá em frente e vire à esquerda.", "Siga recto y gire hacia el lado izquierdo."], ["A farmácia fica à direita.", "La farmacia se encuentra a mano derecha."]], tip: "En el habla informal de Brasil también se oyen vai y vira para dar indicaciones a você." },
          { title: "Elige la indicación", prompt: "¿Qué instrucción dice «Gire a la derecha»?", options: ["Vire à direita.", "Vire em direita.", "Vão à direito."], answer: "Vire à direita.", feedback: "Vire es una instrucción común; à direita indica hacia dónde." },
          { title: "Completa el recorrido", prompt: "Vá em frente e vire à ___. (Siga recto y gire a la izquierda.)", answer: "esquerda", hint: "La palabra portuguesa para la dirección opuesta a la derecha es esquerda." },
          { title: "Pedir una indicación", scene: "Preguntas cómo llegar caminando a una plaza.", turns: [["Pessoa", "Como chego à praça?", "¿Cómo llego a la plaza?", [["Siga em frente e vire à esquerda.", "Siga recto y gire a la izquierda.", true], ["Vá dormir na estação.", "Vaya a dormir a la estación.", false]]]] },
          { title: "Da una dirección", prompt: "Elige una instrucción para ir hasta la plaza.", options: ["Vá até a praça.", "Vai a praça ontem.", "Fica até praça você."], answer: "Vá até a praça.", translation: "Indicas a la persona que avance hasta la plaza." }
        ] }),
        createPortugueseLesson({ id: "pt-cidade-3", title: "Transporte y posibilidad", objective: "Preguntar cómo ir a un lugar y expresar una posibilidad con poder.", vocabulary: [
          ["Ônibus", "autobús", "Vou de ônibus ao centro.", "Voy en autobús al centro."],
          ["Metrô", "metro", "O metrô chega às oito.", "El metro llega a las ocho."],
          ["Ir de", "ir en (medio de transporte)", "Vou de metrô.", "Me desplazo en metro."],
          ["Pode", "puede / se puede", "Pode me ajudar?", "¿Puede ayudarme?"]
        ], steps: [
          null,
          { title: "Ir en transporte y pedir ayuda", explanation: "Para decir el medio de transporte se usa ir de: vou de ônibus, vou de metrô. Poder expresa capacidad o posibilidad; pode también forma una petición cortés: Pode me ajudar?", pattern: "Vou de ônibus ao centro.\nVocê pode me ajudar? · Pode pegar o metrô.", examples: [["Vamos de metrô até o centro.", "Nos desplazamos en metro hasta el centro."], ["Pode me dizer onde fica a estação?", "¿Me puede indicar dónde está la estación?"]], tip: "No se usa artículo después de de en el medio de transporte genérico: de ônibus, de carro, de metrô." },
          { title: "Elige el transporte", prompt: "¿Cómo dices «Voy en autobús»?", options: ["Vou de ônibus.", "Vou no ônibus de.", "Sou ônibus."], answer: "Vou de ônibus.", feedback: "El medio de transporte se expresa con ir de + transporte." },
          { title: "Completa la pregunta", prompt: "Você ___ me ajudar? (¿Puede ayudarme?)", answer: "pode", hint: "Con você, poder se conjuga pode." },
          { title: "Pedir ayuda en la estación", scene: "Estás en una estación y necesitas encontrar el metro.", turns: [["Viajante", "Pode me dizer onde fica o metrô?", "¿Me puede decir dónde está el metro?", [["Claro. Fica perto da saída.", "Claro. Está cerca de la salida.", true], ["Eu sou o ônibus de metrô.", "Yo soy el autobús de metro.", false]]]] },
          { title: "Explica cómo viajas", prompt: "Elige «Vamos en metro al centro».", options: ["Vamos de metrô ao centro.", "Somos metrô ao centro.", "Vamos no metrô de centro."], answer: "Vamos de metrô ao centro.", translation: "Explicas el medio de transporte y el destino." }
        ] })
      ]
    },
    {
      id: "pt-comida",
      lessons: [
        createPortugueseLesson({ id: "pt-comida-1", title: "Comida y bebidas", objective: "Pedir algo sencillo de comer o beber.", vocabulary: [
          ["Água", "agua", "Uma água, por favor.", "Un agua, por favor."],
          ["Café", "café", "Quero um café.", "Quiero un café."],
          ["Pão de queijo", "panecillo de queso brasileño", "Gosto de pão de queijo.", "Me gusta el panecillo brasileño de queso."],
          ["Suco", "zumo (Brasil)", "Um suco de laranja, por favor.", "Un zumo de naranja, por favor."]
        ], steps: [
          null,
          { title: "Pedir con querer", explanation: "Querer expresa lo que deseas: Quero um café. Para una petición amable, añade por favor o usa Eu gostaria de… (me gustaría…). El nombre suele ir con un artículo o cantidad.", pattern: "Quero um café, por favor.\nEu gostaria de uma água. · Um suco de laranja.", examples: [["Quero pão de queijo e café.", "Me apetece pan de queso y café."], ["Eu gostaria de um suco, por favor.", "Me gustaría tomar un zumo, por favor."]], tip: "En Brasil se dice suco; sumo es más habitual en Portugal." },
          { title: "Elige un pedido", prompt: "¿Qué frase pide un zumo de naranja?", options: ["Quero um suco de laranja.", "Sou um suco laranja.", "Quero de suco uma laranja."], answer: "Quero um suco de laranja.", feedback: "Quero + un artículo + el producto es una petición sencilla." },
          { title: "Completa el pedido", prompt: "Quero ___ café, por favor. (Quiero un café, por favor.)", answer: "um", hint: "Café es masculino singular: um café." },
          { title: "Pedir en una cafetería", scene: "Pides una bebida en una cafetería de Brasil.", turns: [["Atendente", "O que você gostaria?", "¿Qué te gustaría?", [["Eu gostaria de um suco de laranja, por favor.", "Me gustaría un zumo de naranja, por favor.", true], ["Eu gostaria ser uma laranja.", "Me gustaría ser una naranja.", false]]]] },
          { title: "Pide algo de beber", prompt: "Elige una petición cortés de agua.", options: ["Uma água, por favor.", "Sou água e por favor.", "Uma água ontem, quero."], answer: "Uma água, por favor.", translation: "Pides agua con una fórmula breve y cortés." }
        ] }),
        createPortugueseLesson({ id: "pt-comida-2", title: "En una cafetería", objective: "Pedir comida y preguntar cuánto cuesta.", vocabulary: [
          ["Cardápio", "menú / carta (Brasil)", "O cardápio está na mesa.", "La carta está en la mesa."],
          ["Queria", "quería / quisiera (petición amable)", "Queria um sanduíche.", "Quisiera un sándwich."],
          ["Quanto custa?", "¿cuánto cuesta?", "Quanto custa este bolo?", "¿Cuánto cuesta este pastel?"],
          ["Conta", "cuenta", "A conta, por favor.", "La cuenta, por favor."]
        ], steps: [
          null,
          { title: "Queria para pedir con amabilidad", explanation: "Queria, literalmente «quería», funciona muy bien como petición amable en cafeterías: Queria um sanduíche. Para preguntar el precio: Quanto custa?; para pedir la cuenta: A conta, por favor.", pattern: "Queria um café, por favor.\nQuanto custa este bolo? · A conta, por favor.", examples: [["Queria uma mesa para duas pessoas.", "Me gustaría una mesa para dos."], ["Quanto custa o sanduíche?", "¿Qué precio tiene el sándwich?"]], tip: "En portugués de Brasil se dice cardápio para el menú; en Portugal se oye ementa." },
          { title: "Pregunta el precio", prompt: "¿Qué pregunta significa «¿Cuánto cuesta?»", options: ["Quanto custa?", "Quantos custa?", "Como custa é?"], answer: "Quanto custa?", feedback: "Quanto custa? es la pregunta habitual para saber el precio." },
          { title: "Completa el pedido", prompt: "___ um sanduíche, por favor. (Quisiera un sándwich.)", answer: "Queria", hint: "Usa la forma amable del verbo querer que termina en -ia." },
          { title: "Pedir la cuenta", scene: "Terminaste de comer en un restaurante.", turns: [["Garçom", "Deseja mais alguma coisa?", "¿Desea algo más?", [["Não, obrigado. A conta, por favor.", "No, gracias. La cuenta, por favor.", true], ["Sim, eu sou uma conta.", "Sí, soy una cuenta.", false]]]] },
          { title: "Haz un pedido cortés", prompt: "Elige una forma amable de pedir un sándwich.", options: ["Queria um sanduíche, por favor.", "Eu sanduíche queria ontem.", "Sou querer um sanduíche."], answer: "Queria um sanduíche, por favor.", translation: "Pides un sándwich con una fórmula cortés." }
        ] }),
        createPortugueseLesson({ id: "pt-comida-3", title: "Cantidades y preferencias", objective: "Pedir cantidades sencillas y decir qué te gusta comer.", vocabulary: [
          ["Um pouco de", "un poco de", "Quero um pouco de leite.", "Quiero una pequeña cantidad de leche."],
          ["Sem", "sin", "Café sem açúcar, por favor.", "Café sin azúcar, por favor."],
          ["Açúcar", "azúcar", "Não quero açúcar.", "No quiero azúcar."],
          ["Fruta", "fruta", "Como fruta todos os dias.", "Como fruta a diario."]
        ], steps: [
          null,
          { title: "Cantidades y preferencias", explanation: "Um pouco de indica una cantidad pequeña. Sem significa «sin» y va directamente antes del nombre: café sem açúcar. Para decir que algo no te gusta: Não gosto de…", pattern: "um pouco de leite · café sem açúcar\nGosto de fruta. · Não gosto de cebola.", examples: [["Quero um pouco de água sem gelo.", "Quiero poca agua y sin hielo."], ["Não gosto de café com açúcar.", "Prefiero el café sin azúcar."]], tip: "Con sustantivos incontables, um pouco de es muy útil: um pouco de água, de arroz, de leite." },
          { title: "Elige la cantidad", prompt: "¿Cómo pides «un poco de leche»?", options: ["um pouco de leite", "uma pouca leite", "um pouco leite de"], answer: "um pouco de leite", feedback: "Um pouco de + nombre expresa una pequeña cantidad." },
          { title: "Completa tu preferencia", prompt: "Não gosto ___ açúcar no café. (No me gusta el azúcar en el café.)", answer: "de", hint: "La construcción gostar va seguida de de, también en negativo." },
          { title: "Modificar un pedido", scene: "Pides café y aclaras cómo lo prefieres.", turns: [["Atendente", "Quer açúcar no café?", "¿Quiere azúcar en el café?", [["Não, obrigado. Café sem açúcar.", "No, gracias. Café sin azúcar.", true], ["Sim, sou sem açúcar.", "Sí, soy sin azúcar.", false]]]] },
          { title: "Expresa una preferencia", prompt: "Elige «Me gusta la fruta, pero sin azúcar».", options: ["Gosto de fruta, mas sem açúcar.", "Gosto fruta mas açúcar sem de.", "Sou fruta sem gostar."], answer: "Gosto de fruta, mas sem açúcar.", translation: "Expresas una preferencia y aclaras que no quieres azúcar." }
        ] }),
        createPortugueseLesson({ id: "pt-comida-4", title: "Precios y compras", objective: "Preguntar el precio y comprar cantidades simples.", vocabulary: [
          ["Preço", "precio", "O preço está na etiqueta.", "El precio aparece en la etiqueta."],
          ["Reais", "reales brasileños", "Custa vinte reais.", "Cuesta veinte reales."],
          ["Quilo", "kilo", "Um quilo de bananas.", "Un kilo de plátanos."],
          ["Barato / cara", "barato / cara", "A fruta é barata.", "La fruta cuesta poco."]
        ], steps: [
          null,
          { title: "Preguntar precios y cantidades", explanation: "Para preguntar el precio de varios productos, ¿Quanto custa? suele preguntar por el precio de uno; ¿Quanto custam? por varios. Las cantidades se expresan con de: um quilo de bananas.", pattern: "Quanto custa o quilo?\nCusta vinte reais. · um quilo de bananas", examples: [["Quanto custam as maçãs?", "¿Qué precio tienen las manzanas?"], ["Um quilo de arroz custa seis reais.", "El kilo de arroz vale seis reales."]], tip: "Real es singular y reais es plural: um real, dois reais." },
          { title: "Elige la pregunta", prompt: "Vas a comprar un kilo de bananas. ¿Qué pregunta haces por el precio?", options: ["Quanto custa um quilo?", "Quanto custam um quilo?", "Quantos é o quilo custa?"], answer: "Quanto custa um quilo?", feedback: "Um quilo es singular, así que se pregunta quanto custa." },
          { title: "Completa la cantidad", prompt: "Quero um quilo ___ bananas. (Quiero un kilo de plátanos.)", answer: "de", hint: "La cantidad se conecta con el producto usando de." },
          { title: "Comprar en el mercado", scene: "Preguntas el precio de un kilo de naranjas.", turns: [["Feirante", "O quilo custa oito reais.", "El kilo cuesta ocho reales.", [["Está bem. Quero um quilo, por favor.", "De acuerdo. Quiero un kilo, por favor.", true], ["Sou oito real.", "Soy ocho real.", false]]]] },
          { title: "Pregunta el precio de un artículo", prompt: "Elige cómo preguntar cuánto cuesta el café.", options: ["Quanto custa o café?", "Quanto café custa eu?", "Que preço é custam café?"], answer: "Quanto custa o café?", translation: "Preguntas el precio de un producto singular." }
        ] })
      ]
    },
    {
      id: "pt-planos",
      lessons: [
        createPortugueseLesson({ id: "pt-planos-1", title: "Tiempo libre y pasado reciente", objective: "Hablar de una actividad terminada con verbos frecuentes en pasado.", vocabulary: [
          ["Ontem", "ayer", "Ontem fui ao cinema.", "El día anterior fui al cine."],
          ["Fui", "fui", "Fui ao parque com amigos.", "Me desplacé al parque con amigos."],
          ["Assisti a", "vi (una película o programa)", "Assisti a um filme.", "Vi una película."],
          ["Filme", "película", "O filme foi divertido.", "La película resultó entretenida."]
        ], steps: [
          null,
          { title: "Pretérito de verbos frecuentes", explanation: "Para contar algo terminado se usa el pretérito: ontem fui (ir/ser) y assisti (ver una película). Con asistir en portugués se mantiene la preposición a: assistir a um filme.", pattern: "Ontem fui ao cinema.\nAssisti a um filme. · Depois, jantei com amigos.", examples: [["No sábado, fui ao parque.", "El sábado me desplacé al parque."], ["Assistimos a uma série em casa.", "Vimos una serie en casa."]], tip: "Fui puede significar «fui» de ir o «fui» de ser; el contexto aclara cuál." },
          { title: "Elige el pasado", prompt: "¿Cómo dices «Ayer fui al cine»?", options: ["Ontem fui ao cinema.", "Ontem vou ao cinema.", "Ontem ser ao cinema."], answer: "Ontem fui ao cinema.", feedback: "Fui es el pasado de ir; ao resulta de a + o." },
          { title: "Completa lo que hiciste", prompt: "Ontem ___ ao parque. (Ayer fui al parque.)", answer: "fui", hint: "Usa el pasado irregular de ir para eu." },
          { title: "Hablar del fin de semana", scene: "Un amigo pregunta qué hiciste ayer.", turns: [["Caio", "O que você fez ontem?", "¿Qué hiciste ayer?", [["Fui ao cinema e assisti a um filme.", "Fui al cine y vi una película.", true], ["Vou ao filme amanhã ontem.", "Voy a la película mañana ayer.", false]]]] },
          { title: "Cuenta una actividad pasada", prompt: "Elige una frase sobre algo que hiciste ayer.", options: ["Ontem assisti a um filme.", "Ontem assisto a um filme.", "Ontem assistir um filme."], answer: "Ontem assisti a um filme.", translation: "Cuentas una actividad completada ayer en pretérito." }
        ] }),
        createPortugueseLesson({ id: "pt-planos-2", title: "Planes para el fin de semana", objective: "Expresar planes inmediatos con ir + infinitivo.", vocabulary: [
          ["Fim de semana", "fin de semana", "No fim de semana vou descansar.", "Durante el sábado y el domingo voy a descansar."],
          ["Vou", "voy", "Vou visitar minha amiga.", "Voy a visitar a mi amiga."],
          ["Visitar", "visitar", "Vamos visitar o museu.", "Vamos a hacer una visita al museo."],
          ["Depois", "después", "Depois vamos jantar.", "Más tarde vamos a cenar."]
        ], steps: [
          null,
          { title: "Planes con ir + infinitivo", explanation: "Para planes futuros cercanos es muy común ir en presente + infinitivo: vou visitar, vamos jantar. La forma de ir cambia, pero el segundo verbo permanece en infinitivo.", pattern: "Eu vou descansar. · Você vai estudar.\nNós vamos visitar o museu.", examples: [["Amanhã vou encontrar meus amigos.", "Mañana tengo previsto reunirme con mis amigos."], ["Depois vamos jantar em casa.", "Más tarde tenemos previsto cenar en casa."]], tip: "En Brasil se usa mucho essa semana y no fim de semana para situar planes." },
          { title: "Elige el plan", prompt: "¿Cómo dices «Vamos a visitar el museo»?", options: ["Vamos visitar o museu.", "Vamos visitamos o museu.", "Somos visitar o museu."], answer: "Vamos visitar o museu.", feedback: "Después de vamos, el verbo principal queda en infinitivo." },
          { title: "Completa el plan", prompt: "Amanhã eu ___ estudar em casa. (Mañana voy a estudiar en casa.)", answer: "vou", hint: "Con eu, ir se conjuga vou." },
          { title: "Hacer planes", scene: "Una amiga propone una actividad para el sábado.", turns: [["Lia", "O que você vai fazer no sábado?", "¿Qué vas a hacer el sábado?", [["Vou visitar o museu e depois vou almoçar.", "Voy a visitar el museo y después voy a almorzar.", true], ["Vou visitando museu ontem.", "Estoy visitando museo ayer.", false]]]] },
          { title: "Cuenta tu plan", prompt: "Elige cómo decir «Este fin de semana voy a descansar».", options: ["No fim de semana vou descansar.", "No fim de semana descanso vou.", "No fim de semana sou descansar."], answer: "No fim de semana vou descansar.", translation: "Usas ir en presente y el infinitivo para expresar un plan." }
        ] }),
        createPortugueseLesson({ id: "pt-planos-3", title: "Clima y bienestar", objective: "Describir el clima y decir cómo te sientes o qué necesitas.", vocabulary: [
          ["Está calor", "hace calor", "Hoje está calor.", "Hoy la temperatura es alta."],
          ["Está frio", "hace frío", "De manhã está frio.", "Por la mañana la temperatura es baja."],
          ["Cansado / cansada", "cansado / cansada", "Estou cansada hoje.", "Hoy tengo cansancio."],
          ["Preciso descansar", "necesito descansar", "Preciso descansar um pouco.", "Necesito hacer una pausa y descansar."]
        ], steps: [
          null,
          { title: "Estar para estados y clima", explanation: "Estar describe estados temporales: estou cansada. Para el clima, en Brasil se oye está calor o está frio; también hace calor corresponde a está fazendo calor en muchas zonas.", pattern: "Hoje está calor. · Está frio de manhã.\nEstou cansado/a. · Preciso descansar.", examples: [["Estamos cansados depois do trabalho.", "Tenemos cansancio después del trabajo."], ["Está fazendo muito calor hoje.", "La temperatura está muy alta hoy."]], tip: "Calor es masculino: muito calor, no muita calor." },
          { title: "Elige el estado", prompt: "¿Cómo dices «Estoy cansado» (hablante masculino)?", options: ["Estou cansado.", "Sou cansado hoje.", "Tenho cansado."], answer: "Estou cansado.", feedback: "Estar expresa un estado temporal; cansado concuerda con el hablante." },
          { title: "Completa el clima", prompt: "Hoje está ___. (Hoy hace frío.)", answer: "frio", hint: "La palabra opuesta a calor es frio." },
          { title: "Hablar de cómo te sientes", scene: "Una compañera nota que estás cansado después de clase.", turns: [["Mari", "Você está bem?", "¿Estás bien?", [["Estou um pouco cansado, mas vou descansar.", "Estoy algo cansado, pero voy a descansar.", true], ["Sou cansado do frio ontem.", "Soy cansado del frío ayer.", false]]]] },
          { title: "Expresa una necesidad", prompt: "Elige «Necesito descansar un poco».", options: ["Preciso descansar um pouco.", "Sou descansar pouco preciso.", "Preciso de cansado um pouco."], answer: "Preciso descansar um pouco.", translation: "Indicas que necesitas descansar durante un breve rato." }
        ] })
      ]
    }
  ]
};

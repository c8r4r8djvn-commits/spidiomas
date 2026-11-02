function createSpanishLesson(spec) {
  const [, grammar, choice, fill, dialogue, production] = spec.steps;
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

window.SPANISH_A1_CURRICULUM = {
  metadata: {
    language: "es",
    languageName: "Español",
    speechLanguage: "es-ES",
    supportLanguage: "es",
    level: "A1",
    audience: "Personas que ya conocen lo básico y quieren consolidar el español elemental como segunda lengua",
    estimatedMinutes: 174
  },
  roadmap: [
    { id: "es-encuentros", title: "Saludos y presentaciones", canDo: "Saludar, presentarte, deletrear tu nombre y resolver intercambios breves.", grammar: "ser, llamarse, pronombres y cortesía", sounds: "vocales claras, jota y ritmo", vocabulary: "saludos, nombres y expresiones de clase", game: "rueda de presentaciones" },
    { id: "es-datos", title: "Datos personales y tiempo", canDo: "Compartir datos básicos, indicar origen, edad, horarios y fechas.", grammar: "ser/estar/tener, preguntas y género", sounds: "entonación interrogativa y acento", vocabulary: "países, números, días y meses", game: "ficha de datos" },
    { id: "es-familia", title: "Familia y descripción", canDo: "Presentar a personas cercanas y describirlas con frases sencillas.", grammar: "artículos, plural, adjetivos y posesivos", sounds: "r y rr; sílabas tónicas", vocabulary: "familia y rasgos personales", game: "álbum familiar" },
    { id: "es-rutina", title: "Estudio, trabajo y rutina", canDo: "Hablar de ocupación, horarios, actividades y preferencias.", grammar: "presente, verbos irregulares y gustar", sounds: "consonantes finales y ritmo", vocabulary: "profesiones, estudio y hábitos", game: "agenda del día" },
    { id: "es-casa", title: "La casa y los objetos", canDo: "Nombrar espacios y ubicar objetos en una vivienda.", grammar: "hay/estar, posesivos y preposiciones de lugar", sounds: "b/v y enlace entre palabras", vocabulary: "habitaciones, muebles y objetos", game: "búsqueda en casa" },
    { id: "es-ciudad", title: "La ciudad y los desplazamientos", canDo: "Preguntar por lugares, entender indicaciones y hablar de transporte.", grammar: "ir, poder, imperativo y contracciones", sounds: "distinción z/c y s según la zona", vocabulary: "lugares, transporte y direcciones", game: "mapa del barrio" },
    { id: "es-comida", title: "Comida, compras y pedidos", canDo: "Pedir en un bar, preguntar precios y expresar cantidades sencillas.", grammar: "artículos, querer, demostrativos y cantidades", sounds: "entonación de petición", vocabulary: "alimentos, bebidas y dinero", game: "menú de cafetería" },
    { id: "es-planes", title: "Tiempo libre, salud y planes", canDo: "Contar algo reciente, expresar preferencias y proponer planes.", grammar: "pretérito frecuente, ir a + infinitivo y tener que", sounds: "acento de palabra y habla enlazada", vocabulary: "ocio, clima y bienestar", game: "plan de fin de semana" }
  ],
  units: [
    {
      id: "es-encuentros",
      lessons: [
        createSpanishLesson({ id: "es-encuentros-1", title: "Saludar y despedirse", objective: "Escoger saludos y despedidas adecuados para la situación.", vocabulary: [
          ["Hola", "saludo habitual y neutro", "Hola, ¿qué tal?", "Una manera sencilla de iniciar la conversación."],
          ["Buenos días", "saludo de la mañana", "Buenos días, señora Ruiz.", "Un saludo cortés para las primeras horas del día."],
          ["Buenas tardes", "saludo desde el mediodía hasta la noche", "Buenas tardes, ¿cómo está?", "Una fórmula respetuosa para saludar por la tarde."],
          ["Hasta luego", "despedida que deja abierta la posibilidad de volver a verse", "Hasta luego, nos vemos mañana.", "Te despides y propones volver a veros al día siguiente."]
        ], steps: [
          null,
          { title: "Saludar según la hora y el trato", explanation: "Hola funciona a cualquier hora y con distintos grados de confianza. Buenos días y buenas tardes sitúan el saludo; buenas noches suele usarse al llegar o despedirse por la noche. En contextos formales, ¿cómo está? marca distancia.", pattern: "Hola, ¿qué tal? · Buenos días.\nBuenas tardes, señora. · Hasta luego.", examples: [["Buenas noches, ¿cómo está usted?", "Saludo nocturno con tratamiento respetuoso."], ["Hola, Marta. ¡Hasta mañana!", "Saludo cercano y despedida para el día siguiente."]], tip: "«Buenas noches» sirve como saludo nocturno o despedida; no es solo una fórmula para irse a dormir." },
          { title: "Elige el saludo", prompt: "¿Qué saludo es habitual por la mañana?", options: ["Buenos días.", "Buenas noches.", "Hasta luego."], answer: "Buenos días.", feedback: "Buenos días es el saludo de la mañana." },
          { title: "Completa el saludo", prompt: "Buenas ___, señora García. (saludo por la tarde)", answer: "tardes", hint: "La expresión de saludo para el tramo de la tarde es «buenas tardes»." },
          { title: "Llegar a una recepción", scene: "Llegas por la mañana a la recepción de una escuela.", turns: [["Recepcionista", "Buenos días. ¿En qué puedo ayudarle?", "La persona te saluda y ofrece ayuda.", [["Buenos días. Vengo a la clase de español.", "Saludas y explicas por qué has venido.", true], ["Buenas noches. Hasta ayer.", "Mezcla el saludo nocturno con una despedida pasada.", false]]]] },
          { title: "Escoge una despedida", prompt: "Te despides de una compañera y volverás a verla mañana.", options: ["Hasta mañana.", "Buenos días, ayer.", "Buenas tardes de nada."], answer: "Hasta mañana.", translation: "Te despides ahora y dejas claro que os veréis al día siguiente." }
        ] }),
        createSpanishLesson({ id: "es-encuentros-2", title: "Decir tu nombre", objective: "Presentarte y preguntar cómo se llama otra persona.", vocabulary: [
          ["Me llamo", "forma habitual de decir tu nombre", "Me llamo Elena.", "Así digo cuál es mi nombre."],
          ["Mi nombre es", "manera clara de identificarte", "Mi nombre es Pablo.", "Presento mi nombre de forma directa."],
          ["¿Cómo te llamas?", "pregunta informal por el nombre", "Hola, ¿cómo te llamas?", "Pregunto el nombre a alguien con quien tengo confianza."],
          ["Encantado / encantada", "fórmula amable al conocer a alguien", "Encantada de conocerte, Ana.", "Expreso que me alegra conocerte."]
        ], steps: [
          null,
          { title: "Llamarse y el pronombre sujeto", explanation: "Llamarse es un verbo pronominal: el pronombre me acompaña a la forma llamo. El sujeto yo suele omitirse porque la terminación ya lo indica. Para preguntar informalmente usamos te; en una situación formal, puede usar se.", pattern: "Me llamo Ana. · ¿Cómo te llamas?\n¿Cómo se llama usted? · Soy Marcos.", examples: [["Me llamo Lucía. ¿Y tú?", "Digo mi nombre y pregunto por el tuyo."], ["¿Cómo se llama la profesora?", "La pregunta identifica a la profesora por su nombre."]], tip: "En un primer encuentro, «Encantado/a de conocerte» concuerda con quien habla; también puedes decir «Mucho gusto»." },
          { title: "Elige una presentación", prompt: "¿Qué frase significa que dices tu nombre?", options: ["Me llamo Diego.", "Me llamas Diego.", "Me llama Diego tú."], answer: "Me llamo Diego.", feedback: "Con yo, llamarse toma la forma me llamo." },
          { title: "Completa la pregunta", prompt: "¿Cómo te ___? (pregunta informal por el nombre)", answer: "llamas", hint: "Con tú, el verbo llamarse termina en -as: te llamas." },
          { title: "Conocer a una compañera", scene: "Empiezas un curso y saludas a una persona nueva.", turns: [["Nora", "Hola, soy Nora. ¿Cómo te llamas?", "Se presenta y te pregunta tu nombre.", [["Me llamo Andrés. Encantado.", "Digo mi nombre y respondo con cortesía.", true], ["Me llamas Nora, adiós mañana.", "Usa la forma verbal equivocada y una respuesta inconexa.", false]]]] },
          { title: "Preséntate", prompt: "Elige una presentación natural para conocer a alguien.", options: ["Hola, me llamo Sara. Mucho gusto.", "Adiós, me llamas Sara ayer.", "Hola, mi llamo Sara es."], answer: "Hola, me llamo Sara. Mucho gusto.", translation: "Saludas, dices tu nombre y añades una fórmula cordial." }
        ] }),
        createSpanishLesson({ id: "es-encuentros-3", title: "Cortesía y ayuda en clase", objective: "Pedir que repitan o hablen más despacio con educación.", vocabulary: [
          ["Por favor", "fórmula para suavizar una petición", "¿Puede repetirlo, por favor?", "La petición suena más amable."],
          ["Gracias", "expresión de agradecimiento", "Gracias por la explicación.", "Reconozco la ayuda que he recibido."],
          ["Perdón", "palabra para disculparse o llamar la atención", "Perdón, no he entendido.", "Aviso con cortesía de que necesito ayuda."],
          ["Más despacio", "con menor velocidad", "¿Puede hablar más despacio?", "Pido que reduzcan el ritmo al hablar."]
        ], steps: [
          null,
          { title: "Peticiones amables", explanation: "Por favor y gracias aportan cortesía. Para pedir algo a alguien de usted, usa ¿Puede…? seguido del infinitivo: ¿Puede repetirlo? Para tú, se dice ¿Puedes repetirlo?.", pattern: "¿Puede repetirlo, por favor?\n¿Puedes hablar más despacio? · Gracias.", examples: [["Perdón, ¿puede decirlo otra vez?", "Me disculpo y pido escuchar la frase de nuevo."], ["¿Puedes ayudarme, por favor?", "Pido ayuda con trato cercano."]], tip: "En una clase, «No lo entiendo» y «¿Puede repetirlo?» son frases sencillas y naturales." },
          { title: "Pedir que repitan", prompt: "¿Qué frase pide repetir algo con cortesía?", options: ["¿Puede repetirlo, por favor?", "Repites tú ayer.", "Gracias, ¿dónde estoy repetir?"], answer: "¿Puede repetirlo, por favor?", feedback: "Puede + infinitivo forma una petición respetuosa." },
          { title: "Completa la petición", prompt: "¿Puede hablar más ___, por favor? (con menor velocidad)", answer: "despacio", hint: "La palabra significa «con menos rapidez»." },
          { title: "No entiendes una indicación", scene: "La profesora acaba de dar una instrucción demasiado rápido.", turns: [["Profesora", "Abra el libro por la página doce.", "La profesora indica qué página abrir.", [["Perdón, ¿puede repetirlo más despacio?", "Me disculpo y pido escuchar la instrucción otra vez.", true], ["Gracias, soy la página doce.", "La respuesta no pide una repetición y no tiene sentido.", false]]]] },
          { title: "Pide ayuda en clase", prompt: "Elige una petición cortés para una profesora.", options: ["¿Puede ayudarme, por favor?", "Ayúdame ayer, profesora.", "¿Puede yo ayuda?"], answer: "¿Puede ayudarme, por favor?", translation: "Pides ayuda con usted y añades una fórmula de cortesía." }
        ] }),
        createSpanishLesson({ id: "es-encuentros-4", title: "Letras y sonidos", objective: "Deletrear un nombre y reconocer sonidos importantes del español.", vocabulary: [
          ["¿Cómo se escribe?", "pregunta por las letras de una palabra", "¿Cómo se escribe tu apellido?", "Pregunto qué letras forman el apellido."],
          ["Deletrear", "decir las letras una por una", "¿Puedes deletrear tu nombre?", "Pido escuchar las letras en orden."],
          ["Jota", "nombre de la letra j", "Jorge empieza por jota.", "La primera letra de Jorge se llama jota."],
          ["Eñe", "letra ñ del alfabeto español", "España se escribe con eñe.", "El nombre del país contiene la letra ñ."]
        ], steps: [
          null,
          { title: "Deletrear y pronunciar", explanation: "El alfabeto español tiene la letra ñ. La j suele representar un sonido áspero que se produce en la garganta; la pronunciación de c y z cambia según la región. Las vocales se mantienen claras y estables.", pattern: "¿Cómo se escribe? · J: jota · Ñ: eñe\njota: Jorge · eñe: España", examples: [["¿Puedes deletrear «Jorge»?", "Pido que digan sus letras: jota, o, erre, ge, e."], ["España lleva eñe.", "El nombre del país se escribe con ñ."]], tip: "La pronunciación de la z como /θ/ es propia de gran parte de España; en otras zonas suena como /s/." },
          { title: "Reconoce la letra", prompt: "¿Qué palabra contiene la letra eñe?", options: ["España", "mesa", "libro"], answer: "España", feedback: "España se escribe con ñ." },
          { title: "Completa la pregunta", prompt: "¿Cómo se ___ tu apellido? (pregunta por sus letras)", answer: "escribe", hint: "Usa la forma de escribir en tercera persona: se escribe." },
          { title: "Deletrear un apellido", scene: "En la recepción de un hotel anotan tu apellido.", turns: [["Recepcionista", "¿Cómo se escribe su apellido?", "Pregunta por las letras de tu apellido.", [["Se escribe P-I-N-O.", "Doy cada letra de forma clara.", true], ["Se habla Pino de ayer.", "No contesta qué letras forman el apellido.", false]]]] },
          { title: "Responde al deletreo", prompt: "Te preguntan cómo se escribe «Lola».", options: ["Ele, o, ele, a.", "Lola se habla ayer.", "Es una letra eñe."], answer: "Ele, o, ele, a.", translation: "Nombras las cuatro letras de «Lola» en orden." }
        ] })
      ]
    },
    {
      id: "es-datos",
      lessons: [
        createSpanishLesson({ id: "es-datos-1", title: "Origen y nacionalidad", objective: "Decir de dónde eres y preguntar por el origen de otra persona.", vocabulary: [
          ["Ser de", "indicar origen o procedencia", "Soy de Lima, Perú.", "Digo cuál es mi ciudad y mi país de origen."],
          ["País", "territorio con nombre y fronteras", "¿De qué país eres?", "Pregunto por el lugar de procedencia."],
          ["Español / española", "persona o cosa relacionada con España", "Mi vecina es española.", "Mi vecina tiene nacionalidad de España."],
          ["¿De dónde eres?", "pregunta informal por el origen", "¿De dónde eres, Pablo?", "Quiero saber cuál es tu lugar de procedencia."]
        ], steps: [
          null,
          { title: "Ser para origen e identidad", explanation: "Ser expresa origen, nacionalidad e identidad: soy de Lima, es española. Los gentilicios cambian a menudo según género y número: español/española, mexicanos/mexicanas.", pattern: "Soy de Chile. · Ella es chilena.\n¿De dónde eres? · Somos españoles.", examples: [["Mis amigos son de Colombia.", "La procedencia de mis amigos es Colombia."], ["Inés es argentina.", "Inés tiene nacionalidad de Argentina."]], tip: "El nombre de una nacionalidad va en minúscula: española, peruano, brasileñas." },
          { title: "Elige la forma correcta", prompt: "¿Cómo dices que una mujer es de España?", options: ["Es española.", "Es español.", "Está española de."], answer: "Es española.", feedback: "Española concuerda en femenino con la persona." },
          { title: "Completa el origen", prompt: "Soy ___ Argentina. (indica el país de origen)", answer: "de", hint: "La expresión para indicar procedencia es ser de." },
          { title: "Preguntar de dónde es alguien", scene: "Conoces a una persona en un intercambio de idiomas.", turns: [["Leo", "¿De dónde eres?", "Pregunta informalmente por tu procedencia.", [["Soy de Quito, Ecuador.", "Indico mi ciudad y mi país de origen.", true], ["Estoy de Ecuador ayer.", "Confunde estar con origen y añade un tiempo incoherente.", false]]]] },
          { title: "Di tu procedencia", prompt: "Elige una frase para decir que eres de México.", options: ["Soy de México.", "Estoy México de.", "Tengo de México."], answer: "Soy de México.", translation: "Indicas tu lugar de origen con ser de." }
        ] }),
        createSpanishLesson({ id: "es-datos-2", title: "Ser, estar y estados", objective: "Distinguir identidad y origen de estados temporales y ubicación.", vocabulary: [
          ["Ser", "verbo para identidad, origen y características", "Soy estudiante.", "Digo cuál es mi ocupación."],
          ["Estar", "verbo para estados y ubicación", "Estoy en la biblioteca.", "Indico dónde me encuentro ahora."],
          ["Cansado / cansada", "con necesidad de descansar", "Hoy estoy cansada.", "Hoy necesito descansar."],
          ["Contento / contenta", "satisfecho o de buen ánimo", "Está contento con el curso.", "El curso le produce satisfacción."]
        ], steps: [
          null,
          { title: "Una diferencia útil: ser y estar", explanation: "Ser identifica o clasifica: soy estudiante, es de Madrid. Estar expresa ubicación o estado: estoy en casa, está cansado. No es una regla de «permanente frente a temporal» para todos los casos; importa el significado.", pattern: "Soy estudiante. · Estoy en clase.\nElla es de Chile. · Hoy está contenta.", examples: [["El café está frío.", "La bebida ha perdido el calor."], ["Mi hermano es médico y está en el hospital.", "Su profesión es médico; ahora se encuentra en el hospital."]], tip: "Las personas pueden estar en un lugar y ser de otro: «Estoy en Valencia, pero soy de Lima»." },
          { title: "Elige el verbo", prompt: "¿Qué frase indica dónde estás ahora?", options: ["Estoy en casa.", "Soy en casa.", "Tengo en casa."], answer: "Estoy en casa.", feedback: "Estar se usa para indicar ubicación." },
          { title: "Completa el estado", prompt: "Hoy ___ cansado, necesito descansar. (estado de hoy)", answer: "estoy", hint: "Con yo, estar se conjuga estoy." },
          { title: "Hablar de una semana ocupada", scene: "Una amiga te pregunta cómo estás después de trabajar.", turns: [["Marta", "¿Estás bien?", "Pregunta por tu estado actual.", [["Sí, pero estoy un poco cansado.", "Confirmo que estoy bien y explico que necesito descansar.", true], ["Sí, soy en el trabajo contento ayer.", "Mezcla ubicación, identidad y un marcador temporal.", false]]]] },
          { title: "Distingue identidad y estado", prompt: "Elige una frase correcta para «Mi hermana es profesora».", options: ["Mi hermana es profesora.", "Mi hermana está profesora.", "Mi hermana tiene profesora."], answer: "Mi hermana es profesora.", translation: "Nombras una profesión, una categoría que se expresa con ser." }
        ] }),
        createSpanishLesson({ id: "es-datos-3", title: "Edad y datos personales", objective: "Decir la edad con tener y compartir datos ficticios.", vocabulary: [
          ["Tener", "verbo para edad y posesión", "Tengo veintidós años.", "Expreso mi edad con el verbo tener."],
          ["¿Cuántos años?", "pregunta por la edad", "¿Cuántos años tienes?", "Quiero saber la edad de alguien."],
          ["Teléfono", "número para llamar a una persona", "Mi teléfono empieza por seis.", "Doy una pista sobre un número de contacto."],
          ["Correo electrónico", "dirección para enviar mensajes digitales", "Mi correo electrónico es ficticio.", "La dirección sirve como dato de contacto inventado."]
        ], steps: [
          null,
          { title: "La edad con tener", explanation: "En español la edad se expresa con tener: tengo veinte años, no «soy veinte años». La pregunta informal es ¿Cuántos años tienes?; en un trato formal, ¿Cuántos años tiene usted?.", pattern: "Tengo 20 años. · ¿Cuántos años tienes?\nÉl tiene 30 años. · ¿Cuántos años tiene usted?", examples: [["Mi prima tiene dieciocho años.", "La edad de mi prima es dieciocho."], ["¿Cuántos años tiene el niño?", "Pregunto la edad del niño con él/ella."]], tip: "Para estos ejercicios, inventa los números y las direcciones; no hace falta compartir datos privados." },
          { title: "Elige la expresión de edad", prompt: "¿Qué frase significa que tienes 25 años?", options: ["Tengo veinticinco años.", "Soy veinticinco años.", "Estoy veinticinco."], answer: "Tengo veinticinco años.", feedback: "La edad se expresa con tener." },
          { title: "Completa la pregunta", prompt: "¿Cuántos años ___? (pregunta informal a tú)", answer: "tienes", hint: "Con tú, tener toma la forma tienes." },
          { title: "Completar una ficha ficticia", scene: "En una actividad de clase, usas datos inventados.", turns: [["Compañera", "¿Cuántos años tienes?", "Pregunta tu edad.", [["Tengo treinta años. Es un dato inventado.", "Respondo con tener y aclaro que el ejemplo es ficticio.", true], ["Soy treinta años de teléfono.", "No expresa la edad correctamente.", false]]]] },
          { title: "Responde a la pregunta", prompt: "Elige una respuesta gramaticalmente correcta sobre la edad.", options: ["Tengo diecinueve años.", "Estoy diecinueve años.", "Soy de diecinueve años."], answer: "Tengo diecinueve años.", translation: "La edad se dice con tener + número + años." }
        ] }),
        createSpanishLesson({ id: "es-datos-4", title: "Números y precios", objective: "Comprender números frecuentes y preguntar cuánto cuesta algo.", vocabulary: [
          ["Cero", "número que no añade cantidad", "El código empieza por cero.", "La primera cifra del código es 0."],
          ["Quince", "número entre catorce y dieciséis", "La clase empieza a las quince.", "La hora de comienzo es las tres de la tarde."],
          ["Cincuenta", "cinco decenas", "El billete cuesta cincuenta euros.", "El precio equivale a cinco grupos de diez euros."],
          ["¿Cuánto cuesta?", "pregunta por el precio de una cosa", "¿Cuánto cuesta este cuaderno?", "Pregunto el valor del cuaderno."]
        ], steps: [
          null,
          { title: "Números y precios", explanation: "Los números permiten dar la hora, una edad, una cantidad o un precio. ¿Cuánto cuesta? pregunta por un objeto singular; para varios, se dice ¿Cuánto cuestan?.", pattern: "¿Cuánto cuesta el libro? · Cuesta 15 euros.\n¿Cuánto cuestan las entradas? · Cuestan 20 euros.", examples: [["El café cuesta dos euros.", "El precio del café es de dos euros."], ["¿Cuánto cuestan estas manzanas?", "Pregunto el precio de varias manzanas."]], tip: "En España se usa «euros» para la moneda; adapta el nombre de la moneda al lugar donde estés." },
          { title: "Pregunta por un precio", prompt: "Quieres saber el precio de un cuaderno. ¿Qué preguntas?", options: ["¿Cuánto cuesta este cuaderno?", "¿Cuántos cuesta este cuaderno?", "¿Cuánto cuestan este cuaderno?"], answer: "¿Cuánto cuesta este cuaderno?", feedback: "Cuaderno es singular; por eso usamos cuesta." },
          { title: "Completa el número", prompt: "El billete cuesta ___ euros. (5 decenas)", answer: "cincuenta", hint: "Escribe con letras el número 50." },
          { title: "Comprar una entrada", scene: "Preguntas en la taquilla por el precio de una entrada.", turns: [["Taquillera", "La entrada cuesta doce euros.", "La taquillera te da el precio.", [["De acuerdo. Una entrada, por favor.", "Acepto el precio y pido una unidad.", true], ["La entrada tienen doce.", "La respuesta no concuerda y queda incompleta.", false]]]] },
          { title: "Pregunta por varios productos", prompt: "Quieres saber el precio de dos libros.", options: ["¿Cuánto cuestan estos libros?", "¿Cuánto cuesta estos libros?", "¿Cuántos cuestan este libro?"], answer: "¿Cuánto cuestan estos libros?", translation: "Preguntas por el precio de varios libros, así que usas cuestan." }
        ] }),
        createSpanishLesson({ id: "es-datos-5", title: "Días, meses y horarios", objective: "Indicar cuándo ocurre una actividad y decir la hora.", vocabulary: [
          ["Hoy", "el día en curso", "Hoy tengo una clase.", "La clase se celebra en esta fecha."],
          ["Mañana", "el día siguiente", "Mañana trabajo por la tarde.", "Mi trabajo será al día siguiente."],
          ["Lunes", "primer día laborable de la semana en muchos calendarios", "La reunión es el lunes.", "Nos reunimos al comienzo de la semana laboral."],
          ["Enero", "primer mes del año", "El curso empieza en enero.", "El curso comienza al inicio del año."]
        ], steps: [
          null,
          { title: "Fechas y horas", explanation: "Los días y meses se escriben con minúscula: lunes, enero. Para los días decimos el lunes o los lunes; para meses, en enero. Con la hora, usamos a las ocho y a la una.", pattern: "La clase es el martes. · Viajo en julio.\nEmpieza a las ocho. · Es la una.", examples: [["Trabajo los miércoles.", "Mi jornada habitual incluye cada miércoles."], ["La reunión empieza en marzo, a las diez.", "La fecha es marzo y la hora son las diez."]], tip: "En español, «mañana» puede ser el día siguiente o la primera parte del día; el contexto lo aclara." },
          { title: "Elige la fecha", prompt: "¿Cómo dices que el curso comienza durante enero?", options: ["El curso empieza en enero.", "El curso empieza el enero.", "El curso empieza a enero."], answer: "El curso empieza en enero.", feedback: "Con el nombre de un mes se usa en: en enero." },
          { title: "Completa la hora", prompt: "La clase empieza ___ las ocho. (indica la hora)", answer: "a", hint: "La expresión de la hora empieza con la preposición a." },
          { title: "Cambiar la hora de una clase", scene: "Una compañera confirma cuándo es la clase.", turns: [["Compañera", "¿La clase es mañana?", "Pregunta si la clase se celebra al día siguiente.", [["Sí, mañana a las nueve.", "Confirmo el día y añado la hora.", true], ["Sí, en mañana lunes de enero.", "La combinación de preposiciones y fechas no es natural.", false]]]] },
          { title: "Di cuándo empieza", prompt: "Elige la frase «La reunión es el lunes».", options: ["La reunión es el lunes.", "La reunión está lunes.", "La reunión es en lunes mañana ayer."], answer: "La reunión es el lunes.", translation: "Indicas el día concreto de la reunión." }
        ] })
      ]
    },
    {
      id: "es-familia",
      lessons: [
        createSpanishLesson({ id: "es-familia-1", title: "Parentescos y artículos", objective: "Nombrar familiares con artículos y posesivos sencillos.", vocabulary: [
          ["Familia", "personas unidas por parentesco o afecto", "Mi familia vive en Zaragoza.", "Mis familiares comparten vivienda en Zaragoza."],
          ["Madre", "mujer que tiene hijos", "Mi madre se llama Elena.", "El nombre de mi mamá es Elena."],
          ["Hermano / hermana", "hijo o hija de los mismos padres", "Tengo un hermano y una hermana.", "Comparto padres con dos hermanos, uno de cada género."],
          ["Abuelos", "padres de la madre o del padre", "Mis abuelos viven cerca.", "Los padres de mis padres están a poca distancia."]
        ], steps: [
          null,
          { title: "Artículos y posesivos", explanation: "Los nombres comunes suelen aparecer con artículo: la madre, el hermano. Mi y mis concuerdan con lo poseído: mi madre, mis abuelos; no cambian según quién posee.", pattern: "el hermano · la hermana · los abuelos\nmi madre · mis padres · tu familia", examples: [["Mi hermana tiene dos hijos.", "Los hijos de mi hermana son mis sobrinos."], ["Los abuelos de Pablo viven en León.", "Los padres de sus padres viven en León."]], tip: "Familia es femenino singular: la familia, aunque reúna a varias personas." },
          { title: "Elige el artículo", prompt: "¿Qué artículo acompaña a «madre»?", options: ["la madre", "el madre", "los madre"], answer: "la madre", feedback: "Madre es un nombre femenino singular: la madre." },
          { title: "Completa el posesivo", prompt: "___ abuelos viven cerca. (hablo de mis abuelos)", answer: "Mis", hint: "Abuelos es plural; el posesivo también debe serlo." },
          { title: "Presentar a un familiar", scene: "Enseñas una foto a una compañera.", turns: [["Eva", "¿Quién es esta persona?", "Pregunta por la persona que aparece en la foto.", [["Es mi hermana, Clara.", "Identifico a Clara como mi hermana.", true], ["Es el mi hermana de ayer.", "Combina artículos y posesivos de forma incorrecta.", false]]]] },
          { title: "Presenta a tu madre", prompt: "Elige una frase correcta para decir cómo se llama tu madre.", options: ["Mi madre se llama Ana.", "El mi madre se llama Ana.", "Mis madre llaman Ana."], answer: "Mi madre se llama Ana.", translation: "Usas un posesivo singular y el verbo llamarse para dar su nombre." }
        ] }),
        createSpanishLesson({ id: "es-familia-2", title: "Describir a una persona", objective: "Describir aspecto y carácter haciendo concordar el adjetivo.", vocabulary: [
          ["Alto / alta", "de gran estatura", "Mi hermano es alto.", "Mi hermano tiene bastante estatura."],
          ["Bajo / baja", "de poca estatura", "La niña es baja.", "La niña no tiene mucha estatura."],
          ["Simpático / simpática", "agradable en el trato", "La vecina es muy simpática.", "La vecina trata a los demás con amabilidad."],
          ["Joven", "de poca edad", "Mis primos son jóvenes.", "Mis primos aún tienen pocos años."]
        ], steps: [
          null,
          { title: "Concordancia de género y número", explanation: "El adjetivo concuerda normalmente con el nombre: hermano alto, hermana alta, hermanos altos. Los adjetivos terminados en -e suelen tener la misma forma para masculino y femenino: un vecino amable, una vecina amable.", pattern: "el amigo simpático · la amiga simpática\nlos primos jóvenes · las primas jóvenes", examples: [["Mis hermanas son altas.", "Las dos tienen mucha estatura."], ["El profesor es amable.", "El profesor trata bien a los demás."]], tip: "Joven no lleva tilde en singular; jóvenes sí la lleva en plural." },
          { title: "Haz concordar el adjetivo", prompt: "¿Cómo describes a una vecina que resulta agradable?", options: ["La vecina es simpática.", "La vecina es simpático.", "El vecina está simpáticas."], answer: "La vecina es simpática.", feedback: "Simpática concuerda en femenino singular con vecina." },
          { title: "Completa la descripción", prompt: "Mi hermano es ___. (tiene gran estatura)", answer: "alto", hint: "El adjetivo masculino para una persona de gran estatura es alto." },
          { title: "Describir a una amiga", scene: "Un compañero pregunta cómo es tu amiga nueva.", turns: [["Luis", "¿Cómo es tu amiga?", "Pregunta por su aspecto o carácter.", [["Es joven, alta y muy simpática.", "Describo su edad, estatura y trato agradable.", true], ["Son joven y simpático.", "Los adjetivos no concuerdan con el sujeto.", false]]]] },
          { title: "Describe a un grupo", prompt: "Elige «Mis primas son jóvenes».", options: ["Mis primas son jóvenes.", "Mi primas son joven.", "Mis primas está jóvenes."], answer: "Mis primas son jóvenes.", translation: "El posesivo, el sustantivo y el adjetivo están en plural." }
        ] }),
        createSpanishLesson({ id: "es-familia-3", title: "Posesión y relaciones", objective: "Expresar quién tiene algo y hablar de varias personas.", vocabulary: [
          ["Tener", "poseer o contar con algo", "Tengo dos primos.", "En mi familia hay dos primos míos."],
          ["Su", "posesivo de él, ella, usted o ellos", "Su padre vive en Madrid.", "El padre pertenece a esa persona."],
          ["Nuestro / nuestra", "posesivo de nosotros", "Nuestra casa es pequeña.", "La casa pertenece a nuestra familia."],
          ["Casado / casada", "persona que contrajo matrimonio", "Mis tíos están casados.", "Mis tíos son matrimonio."]
        ], steps: [
          null,
          { title: "Tener, posesivos y plural", explanation: "Tener expresa posesión y vínculos: tengo una hermana, tienen dos hijos. Nuestro/nuestra concuerda con el objeto poseído; su puede referirse a varias personas y el contexto aclara de quién hablamos.", pattern: "Tengo dos hermanos. · Nuestra familia es pequeña.\nSu madre · sus primos · están casados", examples: [["Nuestro abuelo vive con su hermana.", "El abuelo de nuestra familia comparte casa con su hermana."], ["Ellas tienen tres hijos.", "En esa familia hay tres hijos."]], tip: "Para evitar dudas sobre su, puedes decir «el padre de Ana» o «la familia de ellos»." },
          { title: "Elige el posesivo", prompt: "¿Qué frase dice que la casa es de nosotros?", options: ["Nuestra casa es pequeña.", "Su casa somos pequeña.", "Nuestro casa está pequeñas."], answer: "Nuestra casa es pequeña.", feedback: "Casa es femenino singular; usamos nuestra." },
          { title: "Completa la posesión", prompt: "Ellos ___ dos hijos. (tienen dos hijos)", answer: "tienen", hint: "Con ellos, tener se conjuga tienen." },
          { title: "Hablar de los tíos", scene: "Una amiga pregunta por tus tíos.", turns: [["Marta", "¿Tienes tíos en Valencia?", "Pregunta si tienes familiares en Valencia.", [["Sí, mis tíos viven allí y están casados.", "Confirmo que viven en Valencia y que son matrimonio.", true], ["Sí, nuestra tíos es casado.", "El posesivo y el adjetivo no concuerdan.", false]]]] },
          { title: "Habla de tu familia", prompt: "Elige una frase correcta sobre tus primos.", options: ["Mis primos tienen dos perros.", "Mi primos tiene dos perro.", "Mis primos está dos perros."], answer: "Mis primos tienen dos perros.", translation: "El sujeto plural exige tienen y el nombre perro también va en plural." }
        ] })
      ]
    },
    {
      id: "es-rutina",
      lessons: [
        createSpanishLesson({ id: "es-rutina-1", title: "Profesiones y estudios", objective: "Decir a qué te dedicas y dónde estudias o trabajas.", vocabulary: [
          ["Estudiante", "persona que cursa estudios", "Soy estudiante de español.", "Estoy aprendiendo español en un curso."],
          ["Médico / médica", "profesional de la medicina", "Mi tía es médica.", "Mi tía trabaja en el cuidado de la salud."],
          ["Trabajar", "realizar una actividad profesional", "Trabajo en una tienda.", "Mi empleo está en una tienda."],
          ["Oficina", "lugar de trabajo administrativo", "La oficina está en el centro.", "El lugar de trabajo se encuentra en el centro."]
        ], steps: [
          null,
          { title: "Ser para profesión, trabajar para actividad", explanation: "Ser identifica una profesión: soy estudiante, es médica. Trabajar indica la actividad laboral y se conjuga en presente: trabajo, trabajas, trabaja. Con usted se usa la forma de tercera persona.", pattern: "Soy estudiante. · Ella es médica.\nTrabajo en una oficina. · Usted trabaja aquí.", examples: [["Mi padre trabaja en un hospital.", "El empleo de mi padre se desarrolla en un hospital."], ["Somos estudiantes de español.", "Estamos cursando español."]], tip: "Las profesiones suelen escribirse en minúscula y normalmente no llevan un/una: «Soy médica»." },
          { title: "Elige la profesión", prompt: "¿Cómo dices «Soy estudiante»?", options: ["Soy estudiante.", "Estoy estudiante.", "Tengo estudiante."], answer: "Soy estudiante.", feedback: "La ocupación se identifica con ser." },
          { title: "Completa el verbo", prompt: "Yo ___ en una oficina. (actividad laboral habitual)", answer: "trabajo", hint: "Con yo, trabajar termina en -o." },
          { title: "Preguntar por el trabajo", scene: "Conoces a alguien durante una pausa del curso.", turns: [["Álex", "¿A qué te dedicas?", "Pregunta por tu trabajo o actividad.", [["Soy estudiante y trabajo en una tienda.", "Digo cuál es mi ocupación y dónde trabajo.", true], ["Estoy estudiante y trabajo de oficina ayer.", "Confunde ser con estar y mezcla el tiempo verbal.", false]]]] },
          { title: "Di tu profesión", prompt: "Elige la frase correcta para decir «Ella es médica».", options: ["Ella es médica.", "Ella está médica.", "Ella tiene médico."], answer: "Ella es médica.", translation: "Nombras la profesión de ella con ser." }
        ] }),
        createSpanishLesson({ id: "es-rutina-2", title: "La rutina diaria", objective: "Describir hábitos con verbos regulares en presente.", vocabulary: [
          ["Levantarse", "salir de la cama", "Me levanto a las siete.", "Empiezo el día a las siete."],
          ["Desayunar", "tomar la primera comida del día", "Desayuno en casa.", "Mi primera comida es en casa."],
          ["Comer", "tomar alimentos; también, almorzar", "Como a las dos.", "Mi comida principal es a las dos."],
          ["Acostarse", "irse a la cama", "Me acuesto temprano.", "Me voy a dormir pronto."]
        ], steps: [
          null,
          { title: "Presente y verbos pronominales", explanation: "El presente expresa rutinas. En levantarse y acostarse, el pronombre concuerda con el sujeto: me levanto, te levantas, se levanta. Comer cambia la vocal en algunas formas: yo como, ellos comen.", pattern: "Me levanto a las siete. · Desayuno en casa.\nMe acuesto pronto. · Ellos comen a las dos.", examples: [["Nos levantamos temprano los lunes.", "Nuestro día empieza pronto cada lunes."], ["Ella se acuesta después de cenar.", "Se va a la cama al terminar la cena."]], tip: "Al conjugar un verbo pronominal, el pronombre va delante del verbo: me levanto, no «levántome» en el habla cotidiana." },
          { title: "Elige la rutina", prompt: "¿Cómo dices que te levantas a las siete?", options: ["Me levanto a las siete.", "Me levantas a las siete.", "Levantarme a las siete."], answer: "Me levanto a las siete.", feedback: "Con yo, el pronombre es me y el verbo termina en -o." },
          { title: "Completa el hábito", prompt: "Ellos ___ a las dos. (comer, hábito)", answer: "comen", hint: "Con ellos, comer termina en -en." },
          { title: "Hablar de la mañana", scene: "Una compañera pregunta a qué hora empiezas el día.", turns: [["Nuria", "¿A qué hora te levantas?", "Pregunta cuándo sales de la cama.", [["Me levanto a las siete y desayuno en casa.", "Digo mi hora de levantarse y dónde desayuno.", true], ["Me levanto a las siete ayer desayuno.", "Mezcla un hábito presente con un marcador pasado.", false]]]] },
          { title: "Cuenta un hábito", prompt: "Elige la frase correcta para «Nos acostamos temprano».", options: ["Nos acostamos temprano.", "Nos acuesta temprano.", "Nos acostar temprano."], answer: "Nos acostamos temprano.", translation: "Con nosotros, acostarse termina en -amos." }
        ] }),
        createSpanishLesson({ id: "es-rutina-3", title: "Horarios y frecuencia", objective: "Preguntar por horarios y expresar con qué frecuencia haces algo.", vocabulary: [
          ["¿A qué hora?", "pregunta por el momento del día", "¿A qué hora empieza la clase?", "Pregunto cuándo comienza la clase."],
          ["A las ocho", "indicación horaria para las ocho", "El tren sale a las ocho.", "La salida del tren será a las ocho."],
          ["Siempre", "en todas las ocasiones", "Siempre estudio por la tarde.", "Estudio por la tarde cada día."],
          ["A veces", "en algunas ocasiones", "A veces voy a pie.", "En ocasiones hago el trayecto caminando."]
        ], steps: [
          null,
          { title: "La hora y la frecuencia", explanation: "Para preguntar por la hora de una actividad, usa ¿A qué hora…?. Se dice a la una, pero a las dos, a las ocho. Los adverbios siempre y a veces suelen ir antes del verbo.", pattern: "¿A qué hora sales? · Salgo a las ocho.\nSiempre desayuno aquí. · A veces ceno tarde.", examples: [["El curso empieza a las nueve.", "La hora de inicio del curso son las nueve."], ["A veces trabajo desde casa.", "En algunas ocasiones hago mi jornada en casa."]], tip: "Para preguntar la hora actual, se dice «¿Qué hora es?»; para un horario, «¿A qué hora…?»." },
          { title: "Pregunta por un horario", prompt: "Quieres saber a qué hora sale el tren.", options: ["¿A qué hora sale el tren?", "¿Qué hora sale el tren?", "¿A cuántas sale el tren?"], answer: "¿A qué hora sale el tren?", feedback: "¿A qué hora…? pregunta por la hora de una actividad." },
          { title: "Completa la hora", prompt: "La clase empieza ___ las nueve. (indica el horario)", answer: "a", hint: "La expresión de la hora empieza con a." },
          { title: "Organizar una cita", scene: "Acordáis a qué hora empieza una reunión.", turns: [["Pablo", "¿A qué hora empieza la reunión?", "Pregunta por el horario de la reunión.", [["Empieza a las seis y media.", "Indico la hora de inicio: las seis y treinta.", true], ["Es siempre a veces nueve.", "La respuesta no da una hora clara.", false]]]] },
          { title: "Expresa frecuencia", prompt: "Elige una frase que signifique que estudias en todas las ocasiones por la noche.", options: ["Siempre estudio por la noche.", "Ayer estudio siempre noche.", "Estudio es siempre la noche."], answer: "Siempre estudio por la noche.", translation: "Siempre indica que el hábito se repite en todas las ocasiones." }
        ] }),
        createSpanishLesson({ id: "es-rutina-4", title: "Gustos y preferencias", objective: "Decir qué actividades y cosas te gustan.", vocabulary: [
          ["Gustar", "expresar que algo resulta agradable", "Me gusta la música.", "La música me resulta agradable."],
          ["Me gustan", "forma plural de gustar", "Me gustan las películas.", "Disfruto las películas."],
          ["Leer", "entender un texto escrito", "Me gusta leer novelas.", "Disfruto la lectura de novelas."],
          ["También", "además; igualmente", "También me gusta cocinar.", "Añado otra actividad que disfruto."]
        ], steps: [
          null,
          { title: "La concordancia con gustar", explanation: "Con gustar, la cosa que agrada es el sujeto: me gusta la música (singular), me gustan las canciones (plural). Me indica quién siente el gusto. Antes de un infinitivo usamos gusta: me gusta leer.", pattern: "Me gusta el café. · Me gustan los libros.\n¿Te gusta bailar? · Nos gusta cocinar.", examples: [["A Marta le gustan los museos.", "Marta disfruta las visitas a los museos."], ["Me gusta caminar por el parque.", "Disfruto los paseos por el parque."]], tip: "No digas «yo gusto la música» para expresar una preferencia; lo natural es «me gusta la música»." },
          { title: "Elige gusta o gustan", prompt: "¿Qué opción completa «Me ___ las novelas»?", options: ["gustan", "gusta", "gustamos"], answer: "gustan", feedback: "Novelas está en plural; por eso usamos gustan." },
          { title: "Completa la preferencia", prompt: "Me ___ cocinar. (actividad que disfruto)", answer: "gusta", hint: "Delante de un infinitivo se usa gusta." },
          { title: "Hablar de aficiones", scene: "Una compañera pregunta qué haces en tu tiempo libre.", turns: [["Celia", "¿Te gusta leer?", "Pregunta si disfrutas la lectura.", [["Sí, me gustan las novelas de viaje.", "Confirmo mi afición y menciono el tipo de novela.", true], ["Sí, me gusto novelas leer.", "La estructura de gustar no se forma así.", false]]]] },
          { title: "Di lo que te gusta", prompt: "Elige «Nos gustan las películas españolas».", options: ["Nos gustan las películas españolas.", "Nos gusta las películas españoles.", "Nos gustamos película española."], answer: "Nos gustan las películas españolas.", translation: "Gustan concuerda con películas; españolas también concuerda en femenino plural." }
        ] })
      ]
    },
    {
      id: "es-casa",
      lessons: [
        createSpanishLesson({ id: "es-casa-1", title: "Habitaciones y vivienda", objective: "Nombrar habitaciones y decir qué espacios tiene una casa.", vocabulary: [
          ["Casa", "vivienda donde vive una persona o familia", "Mi casa tiene dos habitaciones.", "En mi vivienda hay dos espacios para dormir."],
          ["Cocina", "habitación donde se preparan alimentos", "La cocina está al lado del salón.", "El lugar para cocinar queda junto al salón."],
          ["Dormitorio", "habitación destinada a dormir", "El dormitorio es pequeño.", "El espacio para dormir tiene poco tamaño."],
          ["Cuarto de baño", "habitación con lavabo, ducha o bañera", "El cuarto de baño está libre.", "La habitación para asearse no está ocupada."]
        ], steps: [
          null,
          { title: "Género y artículo de las habitaciones", explanation: "Los nombres suelen aparecer con artículo: la cocina, el dormitorio. Para hablar de lo que posee la vivienda, usamos tener: la casa tiene dos habitaciones. Tener no cambia por el objeto: tengo una cocina, tenemos dos dormitorios.", pattern: "la cocina · el dormitorio · el salón\nMi casa tiene un balcón.", examples: [["El dormitorio tiene una ventana grande.", "En la habitación para dormir hay una ventana amplia."], ["Nuestra casa tiene dos baños.", "Disponemos de dos espacios para asearnos."]], tip: "«Cuarto», «habitación» y «dormitorio» pueden variar según el país; en España, dormitorio es muy claro." },
          { title: "Elige el artículo", prompt: "¿Qué forma es correcta?", options: ["la cocina", "el cocina", "los cocina"], answer: "la cocina", feedback: "Cocina es femenino singular: la cocina." },
          { title: "Completa la vivienda", prompt: "Mi casa ___ dos dormitorios. (posee dos dormitorios)", answer: "tiene", hint: "Con mi casa, tener se conjuga tiene." },
          { title: "Describir una casa", scene: "Una amiga te pregunta por las habitaciones de tu vivienda.", turns: [["Amiga", "¿Tu casa tiene balcón?", "Pregunta si hay balcón en tu vivienda.", [["Sí, tiene un balcón pequeño.", "Confirmo que hay balcón y describo su tamaño.", true], ["Sí, está un balcón pequeñas.", "La estructura y la concordancia no son correctas.", false]]]] },
          { title: "Habla de una habitación", prompt: "Elige una frase natural sobre la cocina.", options: ["La cocina está junto al salón.", "El cocina es junto la salón.", "La cocina tienen un salón."], answer: "La cocina está junto al salón.", translation: "Indicas la ubicación de la cocina respecto al salón." }
        ] }),
        createSpanishLesson({ id: "es-casa-2", title: "Muebles y ubicación", objective: "Ubicar objetos con estar y preposiciones de lugar.", vocabulary: [
          ["Mesa", "mueble con una superficie para apoyar objetos", "El libro está sobre la mesa.", "El libro se encuentra encima del mueble."],
          ["Silla", "asiento para una persona", "La silla está junto a la ventana.", "El asiento queda al lado de la ventana."],
          ["Encima de", "en una posición superior a otra cosa", "Las llaves están encima de la mesa.", "Las llaves se encuentran sobre la mesa."],
          ["Debajo de", "en una posición inferior a otra cosa", "La bolsa está debajo de la silla.", "El bolso está en el suelo bajo el asiento."]
        ], steps: [
          null,
          { title: "Estar para localizar objetos", explanation: "Usa estar para decir dónde se encuentra un objeto: el libro está sobre la mesa. Las preposiciones de lugar incluyen encima de, debajo de, junto a y delante de.", pattern: "El libro está encima de la mesa.\nLas llaves están debajo de la silla.", examples: [["El móvil está junto al sofá.", "El teléfono queda al lado del sofá."], ["La mochila está delante de la puerta.", "La mochila se encuentra frente a la puerta."]], tip: "Estar cambia con el sujeto: el libro está, las llaves están." },
          { title: "Elige la ubicación", prompt: "¿Qué frase dice que las llaves están sobre la mesa?", options: ["Las llaves están encima de la mesa.", "Las llaves son encima la mesa.", "La llave está debajo de la mesas."], answer: "Las llaves están encima de la mesa.", feedback: "Usamos están con el sujeto plural las llaves." },
          { title: "Completa la posición", prompt: "El gato está ___ de la mesa. (en una posición inferior)", answer: "debajo", hint: "La expresión para una posición inferior es debajo de." },
          { title: "Buscar el teléfono", scene: "No encuentras el móvil y preguntas dónde lo dejaron.", turns: [["Raúl", "¿Dónde están las llaves?", "Pregunta por la ubicación de las llaves.", [["Están encima de la mesa, junto al teléfono.", "Indico dónde están las llaves con dos referencias.", true], ["Son encima el sofá.", "Estar expresa ubicación y la preposición necesita de.", false]]]] },
          { title: "Ubica la silla", prompt: "Elige «La silla está junto a la ventana».", options: ["La silla está junto a la ventana.", "La silla es junto ventana.", "El silla están junto al ventana."], answer: "La silla está junto a la ventana.", translation: "Localizas la silla con estar y junto a." }
        ] }),
        createSpanishLesson({ id: "es-casa-3", title: "Hay, estar y necesidades", objective: "Distinguir existencia de ubicación y expresar una necesidad sencilla.", vocabulary: [
          ["Hay", "forma impersonal para indicar que algo existe", "Hay una farmacia cerca.", "Existe una farmacia a poca distancia."],
          ["Está", "forma de estar con algo singular", "La llave está en la mesa.", "La llave se encuentra sobre la mesa."],
          ["Necesitar", "tener necesidad de algo", "Necesito una toalla.", "Me hace falta una toalla."],
          ["Toalla", "pieza de tela para secarse", "La toalla está en el baño.", "La pieza para secarse se encuentra en el baño."]
        ], steps: [
          null,
          { title: "Hay presenta; estar localiza", explanation: "Hay presenta la existencia de algo: hay una ventana. Estar ubica algo conocido: la ventana está abierta. Para expresar una necesidad, se usa necesitar + nombre o infinitivo: necesito agua, necesito descansar.", pattern: "Hay una mesa en la sala.\nLa mesa está junto a la ventana. · Necesito una toalla.", examples: [["Hay dos sillas en la cocina.", "En la cocina existen dos asientos."], ["La farmacia está en la esquina.", "La farmacia conocida se encuentra en la esquina."]], tip: "Hay no cambia en singular y plural: hay una silla, hay tres sillas." },
          { title: "Elige entre hay y está", prompt: "¿Cómo presentas la existencia de una ventana?", options: ["Hay una ventana.", "Está una ventana.", "Es una ventana hay."], answer: "Hay una ventana.", feedback: "Hay introduce algo cuya existencia mencionas." },
          { title: "Completa la necesidad", prompt: "___ una toalla, por favor. (me hace falta)", answer: "Necesito", hint: "Usa el verbo que expresa que algo te hace falta." },
          { title: "Pedir una toalla", scene: "En un alojamiento, preguntas por una toalla.", turns: [["Huésped", "¿Hay una toalla en el baño?", "Pregunta si existe una toalla en el baño.", [["No, pero necesito una, por favor.", "Digo que no hay y pido una con educación.", true], ["No, soy una toalla del baño.", "La respuesta confunde la identidad con la necesidad.", false]]]] },
          { title: "Localiza un objeto conocido", prompt: "Ya sabemos que hay una llave. ¿Cómo dices dónde está?", options: ["La llave está en la mesa.", "La llave hay en la mesa.", "La llave es mesa."], answer: "La llave está en la mesa.", translation: "Usas estar para localizar una llave ya identificada." }
        ] })
      ]
    },
    {
      id: "es-ciudad",
      lessons: [
        createSpanishLesson({ id: "es-ciudad-1", title: "Lugares de la ciudad", objective: "Preguntar dónde está un lugar y entender respuestas breves.", vocabulary: [
          ["¿Dónde está?", "pregunta por la ubicación", "¿Dónde está la estación?", "Quiero localizar la estación."],
          ["Farmacia", "establecimiento donde se venden medicamentos", "Hay una farmacia en la plaza.", "En la plaza existe un establecimiento de medicamentos."],
          ["Estación", "lugar donde paran trenes o autobuses", "La estación está en el centro.", "El lugar de salida está en la zona central."],
          ["Cerca de", "a poca distancia de algo", "El hotel está cerca del museo.", "El hotel queda a poca distancia del museo."]
        ], steps: [
          null,
          { title: "Preguntar y responder dónde", explanation: "¿Dónde está…? pregunta por la ubicación de un lugar conocido. Para presentar un lugar nuevo puedes decir hay: «Hay una farmacia en la plaza». Cerca de expresa poca distancia.", pattern: "¿Dónde está la estación? · Está en el centro.\nHay una farmacia cerca del hotel.", examples: [["¿Dónde está el supermercado?", "Quiero saber en qué lugar se encuentra."], ["La parada está cerca de la plaza.", "La parada queda a poca distancia de la plaza."]], tip: "Hay una parada cerca (la presentas); la parada está aquí (ya sabemos cuál es y la localizas)." },
          { title: "Elige la pregunta", prompt: "Quieres localizar una estación concreta.", options: ["¿Dónde está la estación?", "¿Dónde hay está estación?", "¿Quién estación está?"], answer: "¿Dónde está la estación?", feedback: "¿Dónde está…? pregunta por la ubicación de un lugar conocido." },
          { title: "Completa la ubicación", prompt: "La farmacia está ___ de la plaza. (a poca distancia)", answer: "cerca", hint: "La expresión significa que hay poca distancia." },
          { title: "Buscar una parada", scene: "Preguntas a una persona por la parada de autobús.", turns: [["Visitante", "Perdone, ¿dónde está la parada?", "Pide localizar la parada de autobús.", [["Está cerca del banco, a la derecha.", "Doy una referencia y la dirección.", true], ["Hay está parada desde ayer.", "Mezcla dos estructuras y no da una ubicación.", false]]]] },
          { title: "Pregunta por la farmacia", prompt: "Elige una pregunta correcta para localizar una farmacia conocida.", options: ["¿Dónde está la farmacia?", "¿Dónde es la farmacia está?", "¿Qué farmacia dónde?"], answer: "¿Dónde está la farmacia?", translation: "Preguntas la ubicación de una farmacia que ya está identificada." }
        ] }),
        createSpanishLesson({ id: "es-ciudad-2", title: "Dar indicaciones", objective: "Comprender instrucciones cortas para llegar a un lugar.", vocabulary: [
          ["A la derecha", "hacia el lado derecho", "Gira a la derecha en la esquina.", "Cambia de dirección hacia la mano derecha."],
          ["A la izquierda", "hacia el lado izquierdo", "La farmacia queda a la izquierda.", "La farmacia se encuentra en el lado izquierdo."],
          ["Sigue recto", "continúa sin cambiar de dirección", "Sigue recto hasta la plaza.", "Avanza sin girar hasta la plaza."],
          ["Esquina", "punto donde se encuentran dos calles", "Gira en la próxima esquina.", "Cambia de dirección en el siguiente cruce de calles."]
        ], steps: [
          null,
          { title: "Imperativo informal para orientar", explanation: "Con tú, las instrucciones frecuentes son gira, sigue y cruza. El imperativo de ir es ve; en el trato de usted se dice gire, siga, cruce y vaya.", pattern: "Sigue recto. · Gira a la derecha.\nCruza la calle. · Vaya hasta la plaza.", examples: [["Gira en la primera calle a la izquierda.", "Toma la primera calle hacia el lado izquierdo."], ["Sigue todo recto hasta el museo.", "Avanza sin girar hasta llegar al museo."]], tip: "En España se distingue la pronunciación de z/c ante e, i y s; otras variedades pronuncian esos sonidos como s." },
          { title: "Elige la indicación", prompt: "¿Qué instrucción significa «continúa sin girar»?", options: ["Sigue recto.", "Gira a la derecha.", "Vuelve a casa."], answer: "Sigue recto.", feedback: "Sigue recto indica que continúes en la misma dirección." },
          { title: "Completa el giro", prompt: "Gira a la ___. (hacia el lado izquierdo)", answer: "izquierda", hint: "Es la dirección contraria a la derecha." },
          { title: "Llegar a la plaza", scene: "Preguntas cómo llegar andando a la plaza.", turns: [["Vecina", "¿Cómo llego a la plaza?", "Pregunta qué recorrido debe seguir.", [["Sigue recto y gira a la izquierda en la esquina.", "Indico avanzar y luego girar en el cruce.", true], ["Gira ayer y sigue la plaza derecha.", "La instrucción no tiene un orden ni una dirección clara.", false]]]] },
          { title: "Da una instrucción", prompt: "Elige una indicación para avanzar hasta el museo.", options: ["Sigue recto hasta el museo.", "Sigues recto ayer museo.", "Sigue a recto del museo."], answer: "Sigue recto hasta el museo.", translation: "Indicas que continúe en esa dirección hasta llegar al museo." }
        ] }),
        createSpanishLesson({ id: "es-ciudad-3", title: "Transporte y posibilidad", objective: "Decir cómo te desplazas y pedir ayuda en una estación.", vocabulary: [
          ["Autobús", "vehículo de transporte colectivo por carretera", "Voy al centro en autobús.", "Uso el transporte colectivo para llegar al centro."],
          ["Metro", "tren urbano que suele circular bajo tierra", "El metro llega en cinco minutos.", "El tren urbano llegará dentro de cinco minutos."],
          ["Ir en", "desplazarse usando un medio de transporte", "Voy en metro al trabajo.", "Me desplazo al trabajo en metro."],
          ["¿Puede…?", "petición respetuosa con usted", "¿Puede ayudarme?", "Pido ayuda con un trato formal."]
        ], steps: [
          null,
          { title: "Ir en transporte y poder", explanation: "Para el medio de transporte usamos ir en: voy en autobús, vamos en metro. Poder + infinitivo expresa capacidad o posibilidad. Con usted, la pregunta cortés es ¿Puede ayudarme?.", pattern: "Voy en autobús al centro.\n¿Puedes decirme dónde está? · ¿Puede ayudarme?", examples: [["Vamos en metro hasta la estación.", "Nos desplazamos en metro para llegar a la estación."], ["¿Puede indicarme la salida?", "Solicito que me señale dónde se sale."]], tip: "En España se dice coger el autobús; en algunos países se prefiere tomar o agarrar por diferencias regionales." },
          { title: "Elige el transporte", prompt: "¿Cómo dices «Voy en metro»?", options: ["Voy en metro.", "Soy metro.", "Voy a metro en."], answer: "Voy en metro.", feedback: "El medio de transporte se expresa con ir en." },
          { title: "Completa la petición", prompt: "¿___ ayudarme, por favor? (usted)", answer: "Puede", hint: "Con usted, poder se conjuga igual que con él o ella." },
          { title: "Pedir ayuda en la estación", scene: "No encuentras la salida de la estación.", turns: [["Viajera", "Perdone, ¿puede ayudarme?", "Pide ayuda con cortesía.", [["Claro. La salida está al fondo.", "Acepto ayudar e indico dónde está la salida.", true], ["Soy la estación en metro.", "No responde a la petición de ayuda.", false]]]] },
          { title: "Di cómo vas al centro", prompt: "Elige una frase para explicar que usarás el autobús.", options: ["Voy en autobús al centro.", "Soy autobús al centro.", "Voy autobús de el centro."], answer: "Voy en autobús al centro.", translation: "Explicas el medio de transporte y el destino." }
        ] })
      ]
    },
    {
      id: "es-comida",
      lessons: [
        createSpanishLesson({ id: "es-comida-1", title: "Alimentos y bebidas", objective: "Nombrar alimentos y pedir una bebida sencilla.", vocabulary: [
          ["Agua", "líquido transparente que bebemos", "Quiero agua, por favor.", "Pido algo para beber."],
          ["Café", "bebida caliente hecha con granos tostados", "Tomo un café por la mañana.", "Bebo café al empezar el día."],
          ["Pan", "alimento horneado hecho con harina", "Compro pan en la panadería.", "Adquiero una pieza de alimento horneado."],
          ["Zumo", "bebida hecha con fruta exprimida", "Un zumo de naranja, por favor.", "Pido una bebida de naranja exprimida."]
        ], steps: [
          null,
          { title: "Querer y pedir algo", explanation: "Querer expresa lo que deseas: quiero un café, queremos agua. Para suavizar el pedido, puedes añadir por favor o usar «Quería…» como fórmula cortés. El artículo concuerda con el nombre: un café, una botella.", pattern: "Quiero un café, por favor.\nQuería un zumo de naranja. · ¿Me trae agua?", examples: [["Quiero una tostada y un té.", "Pido algo para comer y una bebida."], ["Quería una botella de agua, por favor.", "Hago una petición amable de agua embotellada."]], tip: "En España se dice zumo; en varios países de América se usa jugo." },
          { title: "Elige un pedido", prompt: "¿Qué frase pide un zumo de naranja?", options: ["Quiero un zumo de naranja.", "Soy un zumo de naranja.", "Quiero de una naranja zumo."], answer: "Quiero un zumo de naranja.", feedback: "Quiero + artículo + producto forma un pedido sencillo." },
          { title: "Completa la bebida", prompt: "Quiero ___ café, por favor. (un café)", answer: "un", hint: "Café es masculino singular: un café." },
          { title: "Pedir en un bar", scene: "Pides una bebida antes de entrar a clase.", turns: [["Camarero", "¿Qué desea tomar?", "Pregunta qué quieres beber o comer.", [["Un zumo de naranja y un café, por favor.", "Pido una bebida de fruta y un café.", true], ["Deseo ser un zumo ayer.", "La frase expresa una identidad y no un pedido.", false]]]] },
          { title: "Pide agua", prompt: "Elige una petición clara y cortés.", options: ["Un vaso de agua, por favor.", "Soy un vaso y agua.", "Agua un por favor ayer."], answer: "Un vaso de agua, por favor.", translation: "Pides una cantidad de agua con una fórmula amable." }
        ] }),
        createSpanishLesson({ id: "es-comida-2", title: "En un bar o restaurante", objective: "Pedir comida y solicitar la cuenta.", vocabulary: [
          ["Carta", "lista de platos y bebidas de un restaurante", "La carta está en la mesa.", "Puedes elegir entre los platos que ofrece el local."],
          ["Quería", "forma cortés para pedir algo", "Quería una ensalada.", "Expreso con amabilidad lo que deseo."],
          ["La cuenta", "importe que se paga por una consumición", "La cuenta, por favor.", "Pido el importe final de lo que he tomado."],
          ["¿Qué recomienda?", "pregunta por una sugerencia", "¿Qué recomienda de primero?", "Pregunto cuál es una buena elección."]
        ], steps: [
          null,
          { title: "Quería como petición cortés", explanation: "En un bar, «Quería…» es una fórmula amable aunque hablemos de un deseo actual. También puedes decir «Quiero…» o «Me pone…», según el lugar y el trato.", pattern: "Quería una ensalada, por favor.\n¿Me trae la cuenta? · ¿Qué recomienda?", examples: [["Quería una mesa para dos, si es posible.", "Solicito una mesa de manera cordial."], ["La cuenta, por favor.", "Pido el importe para pagar."]], tip: "En España es habitual pedir «la cuenta»; la palabra «ticket» suele referirse al comprobante." },
          { title: "Pide la cuenta", prompt: "¿Qué frase usas para pagar al terminar?", options: ["La cuenta, por favor.", "La carta, por favor, ayer.", "Quiero una cuenta soy."], answer: "La cuenta, por favor.", feedback: "La cuenta es el importe que se paga al final." },
          { title: "Completa el pedido", prompt: "___ una ensalada, por favor. (petición amable)", answer: "Quería", hint: "Usa la forma amable del verbo querer que termina en -ía." },
          { title: "Elegir un plato", scene: "Estás en un restaurante y preguntas por una recomendación.", turns: [["Camarera", "El pescado del día está muy bueno.", "La camarera recomienda el plato del día.", [["Perfecto, quería ese plato, por favor.", "Acepto la sugerencia y hago un pedido cortés.", true], ["El pescado es una cuenta.", "La respuesta no expresa qué vas a pedir.", false]]]] },
          { title: "Pide algo para comer", prompt: "Elige una petición amable de una ensalada.", options: ["Quería una ensalada, por favor.", "Quiero ensalada soy ayer.", "Quería de ensalada una."], answer: "Quería una ensalada, por favor.", translation: "Pides una ensalada con una fórmula cortés." }
        ] }),
        createSpanishLesson({ id: "es-comida-3", title: "Cantidades y preferencias", objective: "Expresar cantidades pequeñas y decir qué alimentos prefieres.", vocabulary: [
          ["Un poco de", "una cantidad pequeña de algo", "Quiero un poco de leche.", "Pido una cantidad reducida de leche."],
          ["Sin", "indica ausencia de algo", "Café sin azúcar.", "El café no lleva azúcar."],
          ["Azúcar", "sustancia dulce que se añade a alimentos", "No tomo azúcar.", "Evito añadir esta sustancia dulce."],
          ["Fruta", "alimento que producen muchas plantas", "Como fruta todos los días.", "Incluyo fruta en mis comidas diarias."]
        ], steps: [
          null,
          { title: "Cantidades y sin", explanation: "Un poco de expresa una cantidad pequeña y se usa con nombres incontables: un poco de agua, de arroz, de leche. Sin indica que algo no se añade. Para preferencias, gustar concuerda con el alimento: me gusta la fruta.", pattern: "un poco de leche · café sin azúcar\nMe gusta la fruta. · No me gustan las aceitunas.", examples: [["Quiero un poco de agua sin hielo.", "Pido una cantidad pequeña y sin cubitos."], ["No me gusta el café con azúcar.", "Prefiero tomar el café sin endulzarlo."]], tip: "Agua es femenino, pero en singular decimos el agua por comenzar con a tónica: «el agua fría»." },
          { title: "Elige la cantidad", prompt: "¿Cómo pides una cantidad pequeña de leche?", options: ["Un poco de leche.", "Una poco leche.", "Un poco leche de."], answer: "Un poco de leche.", feedback: "La expresión completa es un poco de + nombre." },
          { title: "Completa la preferencia", prompt: "No me gusta el café ___ azúcar. (sin añadir azúcar)", answer: "sin", hint: "Usa la preposición que indica ausencia." },
          { title: "Pedir un café", scene: "Aclaras cómo quieres el café.", turns: [["Camarero", "¿Lo quiere con azúcar?", "Pregunta si quieres añadir azúcar al café.", [["No, gracias. Lo prefiero sin azúcar.", "Rechazo el azúcar y explico mi preferencia.", true], ["Sí, soy sin café.", "La frase no expresa una preferencia natural.", false]]]] },
          { title: "Expresa lo que te gusta", prompt: "Elige «Me gusta la fruta, pero sin azúcar».", options: ["Me gusta la fruta, pero sin azúcar.", "Me gustan la fruta, pero azúcar sin.", "Yo gusto fruta de sin."], answer: "Me gusta la fruta, pero sin azúcar.", translation: "Dices que disfrutas la fruta y que no quieres añadir azúcar." }
        ] }),
        createSpanishLesson({ id: "es-comida-4", title: "Precios y compras", objective: "Preguntar cuánto cuesta algo y comprar una cantidad sencilla.", vocabulary: [
          ["Precio", "cantidad de dinero que cuesta algo", "El precio está en la etiqueta.", "La etiqueta indica cuánto hay que pagar."],
          ["Euro", "unidad monetaria usada en España", "Cuesta cinco euros.", "El importe equivale a cinco unidades de la moneda."],
          ["Kilo", "unidad de peso de mil gramos", "Un kilo de manzanas.", "Una cantidad de manzanas que pesa mil gramos."],
          ["Barato / barata", "que cuesta poco dinero", "La fruta está barata hoy.", "Hoy el precio de la fruta es bajo."]
        ], steps: [
          null,
          { title: "Precio y cantidades", explanation: "¿Cuánto cuesta? pregunta por un producto singular; ¿Cuánto cuestan? por varios. Para una cantidad usamos de: un kilo de manzanas, medio kilo de tomates. Euro cambia a euros en plural.", pattern: "¿Cuánto cuesta el kilo? · Cuesta tres euros.\n¿Cuánto cuestan las manzanas?", examples: [["Un kilo de peras cuesta cuatro euros.", "Cuatro euros es el precio de mil gramos de peras."], ["¿Cuánto cuestan estas naranjas?", "Pregunto el precio de varias naranjas."]], tip: "Di «medio kilo de…» para pedir 500 gramos." },
          { title: "Elige la pregunta", prompt: "Quieres saber el precio de un kilo de manzanas.", options: ["¿Cuánto cuesta un kilo?", "¿Cuánto cuestan un kilo?", "¿Cuántos cuesta un kilo?"], answer: "¿Cuánto cuesta un kilo?", feedback: "Kilo es singular, así que usamos cuesta." },
          { title: "Completa la cantidad", prompt: "Quiero un kilo ___ manzanas. (conecta el peso y el producto)", answer: "de", hint: "Las cantidades se conectan con el producto usando de." },
          { title: "Comprar fruta", scene: "En la frutería preguntas el precio y haces un pedido.", turns: [["Frutero", "El kilo cuesta tres euros.", "El vendedor indica el precio por kilo.", [["Entonces, quiero un kilo, por favor.", "Acepto el precio y pido esa cantidad.", true], ["Quiero tres euros de kilo ayer.", "La combinación de precio y cantidad no es natural.", false]]]] },
          { title: "Pregunta por varias naranjas", prompt: "Elige cómo preguntar el precio de varias naranjas.", options: ["¿Cuánto cuestan las naranjas?", "¿Cuánto cuesta las naranjas?", "¿Cuántas cuesta la naranja?"], answer: "¿Cuánto cuestan las naranjas?", translation: "Cuestan concuerda con el nombre plural naranjas." }
        ] })
      ]
    },
    {
      id: "es-planes",
      lessons: [
        createSpanishLesson({ id: "es-planes-1", title: "Ocio y pasado", objective: "Contar una actividad terminada con formas frecuentes del pasado.", vocabulary: [
          ["Ayer", "el día anterior al de hoy", "Ayer fui al cine.", "La actividad ocurrió el día previo."],
          ["Fui", "pasado de ir o ser con yo", "Fui al parque con amigos.", "Me desplacé al parque acompañado."],
          ["Vi", "pasado de ver con yo", "Vi una película española.", "Disfruté de una película española."],
          ["Película", "obra audiovisual para cine o televisión", "La película fue divertida.", "La historia me resultó entretenida."]
        ], steps: [
          null,
          { title: "Pretérito de verbos frecuentes", explanation: "El pretérito perfecto simple presenta una acción terminada: ayer fui, vi una película. Fui puede ser el pasado de ser o ir; el complemento aclara el sentido. Ver tiene la forma irregular vi.", pattern: "Ayer fui al cine. · Vi una película.\nEl sábado comí con amigos.", examples: [["El domingo fui al parque.", "El domingo hice un paseo hasta el parque."], ["Anoche vimos una serie.", "Ayer por la noche disfrutamos de una serie."]], tip: "En gran parte de España se usa también «he visto» para un pasado reciente; «ayer vi» siempre es natural." },
          { title: "Elige el pasado", prompt: "¿Cómo cuentas que ayer visitaste el cine?", options: ["Ayer fui al cine.", "Ayer voy al cine.", "Ayer ir al cine."], answer: "Ayer fui al cine.", feedback: "Fui es el pasado de ir para yo." },
          { title: "Completa lo que hiciste", prompt: "Ayer ___ una película. (pasado de ver)", answer: "vi", hint: "El pasado de ver con yo tiene dos letras: vi." },
          { title: "Hablar del fin de semana", scene: "Un amigo pregunta qué hiciste ayer.", turns: [["Diego", "¿Qué hiciste ayer?", "Pregunta por tus actividades del día anterior.", [["Fui al cine y vi una película.", "Cuento dos actividades terminadas de ayer.", true], ["Voy al cine mañana ayer.", "Mezcla futuro y pasado.", false]]]] },
          { title: "Cuenta una actividad", prompt: "Elige una frase sobre algo que hiciste ayer.", options: ["Ayer vi una película.", "Ayer veo una película.", "Ayer ver una película."], answer: "Ayer vi una película.", translation: "El verbo ver está en pasado para una actividad terminada." }
        ] }),
        createSpanishLesson({ id: "es-planes-2", title: "Planes y futuro cercano", objective: "Expresar planes con ir a + infinitivo.", vocabulary: [
          ["Fin de semana", "sábado y domingo, o el descanso semanal", "Este fin de semana voy a descansar.", "Durante los días libres tengo previsto descansar."],
          ["Voy a", "forma de ir seguida de un infinitivo para un plan", "Voy a visitar el museo.", "Tengo previsto hacer una visita al museo."],
          ["Quedar", "acordar una cita o encuentro", "He quedado con Ana.", "Tengo una cita acordada con Ana."],
          ["Después", "más tarde; a continuación", "Después vamos a cenar.", "La cena será la actividad siguiente."]
        ], steps: [
          null,
          { title: "Planes con ir a + infinitivo", explanation: "El futuro próximo se forma con ir conjugado + a + infinitivo: voy a estudiar, vamos a salir. El verbo principal permanece en infinitivo. Quedar con alguien sirve para hablar de una cita acordada.", pattern: "Voy a descansar. · Ella va a estudiar.\nVamos a quedar con Ana.", examples: [["Mañana voy a visitar a mis abuelos.", "Tengo previsto hacer mañana una visita familiar."], ["Después vamos a cenar fuera.", "Más tarde tenemos el plan de cenar en un restaurante."]], tip: "En «visitar a mis abuelos», la a aparece porque el complemento son personas concretas." },
          { title: "Elige el plan", prompt: "¿Cómo dices «Voy a visitar el museo»?", options: ["Voy a visitar el museo.", "Voy visito el museo.", "Voy de visitar el museo."], answer: "Voy a visitar el museo.", feedback: "El patrón es ir conjugado + a + infinitivo." },
          { title: "Completa el futuro", prompt: "Mañana ___ a estudiar en casa. (yo, plan)", answer: "voy", hint: "Con yo, el presente de ir es voy." },
          { title: "Hacer planes para el sábado", scene: "Una amiga pregunta por tus planes de fin de semana.", turns: [["Ana", "¿Qué vas a hacer el sábado?", "Pregunta qué tienes previsto hacer.", [["Voy a visitar a mi hermana y después vamos a cenar.", "Explico el plan y lo que haremos más tarde.", true], ["Voy visitar ayer y cenamos mañana.", "La respuesta mezcla infinitivos y tiempos de forma incoherente.", false]]]] },
          { title: "Di un plan", prompt: "Elige la frase «Este fin de semana vamos a descansar».", options: ["Este fin de semana vamos a descansar.", "Este fin de semana vamos descansamos.", "Este fin de semana somos descansar."], answer: "Este fin de semana vamos a descansar.", translation: "El futuro próximo se construye con vamos a + infinitivo." }
        ] }),
        createSpanishLesson({ id: "es-planes-3", title: "Clima, salud y necesidades", objective: "Describir el clima, un estado y una obligación sencilla.", vocabulary: [
          ["Hace calor", "la temperatura es alta", "Hoy hace calor en Madrid.", "La temperatura de hoy en Madrid es elevada."],
          ["Hace frío", "la temperatura es baja", "Por la mañana hace frío.", "La mañana tiene una temperatura baja."],
          ["Cansado / cansada", "que necesita descansar", "Estoy cansada después del trabajo.", "El trabajo me ha dejado con ganas de descansar."],
          ["Tener que", "expresar necesidad u obligación", "Tengo que descansar.", "Necesito hacer una pausa."]
        ], steps: [
          null,
          { title: "Clima, estados y obligación", explanation: "Para el tiempo atmosférico decimos hace calor o hace frío. Estar describe cómo se encuentra una persona: estoy cansado/a. Tener que + infinitivo expresa una obligación o necesidad: tengo que descansar.", pattern: "Hoy hace calor. · Está lloviendo.\nEstoy cansado/a. · Tengo que dormir.", examples: [["Tenemos que salir temprano.", "Es necesario que salgamos pronto."], ["Hace frío y estoy cansada.", "La temperatura es baja y necesito descansar."]], tip: "Se dice «hace calor», pero «el calor»; calor es un nombre masculino." },
          { title: "Elige la frase del clima", prompt: "¿Cómo dices que la temperatura es alta?", options: ["Hace calor.", "Está calor.", "Es frío calor."], answer: "Hace calor.", feedback: "La expresión habitual para una temperatura alta es hace calor." },
          { title: "Completa la necesidad", prompt: "Tengo ___ descansar un poco. (es necesario)", answer: "que", hint: "La estructura de obligación es tener + que + infinitivo." },
          { title: "Hablar de cómo te sientes", scene: "Una compañera nota que estás cansado al salir del trabajo.", turns: [["Compañera", "¿Estás bien?", "Pregunta por tu estado.", [["Sí, pero estoy cansado y tengo que descansar.", "Digo cómo me siento y qué necesito hacer.", true], ["Soy cansado porque hace muy calor.", "Usa ser para un estado y una expresión del clima poco natural.", false]]]] },
          { title: "Expresa una obligación", prompt: "Elige «Tenemos que ir a casa».", options: ["Tenemos que ir a casa.", "Somos que ir a casa.", "Tenemos ir que a casa."], answer: "Tenemos que ir a casa.", translation: "Tener que + infinitivo expresa que es necesario ir a casa." }
        ] })
      ]
    }
  ]
};

(function () {
  const unitsData = [
    {
      id: "hi-greetings",
      title: "Saludos y presentaciones",
      canDo: "Saludar, presentarte, deletrear tu nombre y manejar intercambios breves.",
      grammar: "pronombres, presente de होना, preguntas y formas respetuosas",
      sounds: "escritura devanagari, vocales, मात्रा y sonidos aspirados",
      vocabulary: "saludos, cortesía, nombres y números básicos",
      game: "reto de saludos y nombres",
      lessons: [
        {
          title: "Saludar según la situación",
          objective: "Saludar y despedirte con expresiones habituales y corteses.",
          vocabulary: [
            ["नमस्ते", "hola / buenos días", "नमस्ते, आप कैसे हैं?", "Hola, ¿cómo está usted?"],
            ["शुभ प्रभात", "buenos días (formal)", "शुभ प्रभात, श्री शर्मा।", "Buenos días, señor Sharma."],
            ["शुभ संध्या", "buenas tardes/noches (formal)", "शुभ संध्या, आप कैसे हैं?", "Buenas tardes, ¿cómo está usted?"],
            ["फिर मिलेंगे", "hasta luego", "धन्यवाद, फिर मिलेंगे।", "Gracias, hasta luego."]
          ],
          grammar: {
            title: "Saludos y forma respetuosa",
            explanation: "नमस्ते se usa ampliamente como saludo respetuoso y funciona en distintos momentos del día. आप es el pronombre cortés para «usted/ustedes»; el verbo concuerda en plural aunque se hable con una sola persona. Las fórmulas शुभ प्रभात y शुभ संध्या son formales; los saludos naturales pueden variar por región y situación.",
            pattern: "नमस्ते, आप कैसे हैं? = Hola, ¿cómo está usted?\nआप + हैं (forma respetuosa)",
            examples: [
              { target: "नमस्ते, आप कैसे हैं?", translation: "Hola, ¿cómo está usted?" },
              { target: "शुभ संध्या, फिर मिलेंगे।", translation: "Buenas tardes, hasta luego." }
            ],
            tip: "नमस्ते es una opción segura y habitual; no existe un único saludo que se use igual en todas las regiones y contextos."
          },
          choice: ["¿Qué saludo es habitual y respetuoso?", ["नमस्ते", "फिर मिलेंगे", "शुभ रात्रि"], "नमस्ते"],
          fill: { prompt: "नमस्ते, आप कैसे ___? (Hola, ¿cómo está usted?)", answer: "हैं", hint: "Usa la forma respetuosa del verbo होना." },
          dialogue: { title: "Saludar a una persona", scene: "Llegas por la mañana a una clase de hindi.", speaker: "सीमा", target: "नमस्ते, आप कैसे हैं?", translation: "Hola, ¿cómo está usted?", answer: "मैं ठीक हूँ, धन्यवाद।", answerTranslation: "Estoy bien, gracias.", wrong: "फिर मिलेंगे।", wrongTranslation: "Hasta luego." },
          production: { title: "Saluda con cortesía", prompt: "Saluda a una persona de manera respetuosa.", answer: "नमस्ते।", wrong: "फिर मिलेंगे।", translation: "Hola." }
        },
        {
          title: "Decir quién soy",
          objective: "Decir tu nombre y preguntar el nombre de otra persona con cortesía.",
          vocabulary: [
            ["नाम", "nombre", "मेरा नाम अनिल है।", "Me llamo Anil."],
            ["मैं", "yo", "मैं लीला हूँ।", "Soy Leela."],
            ["आप", "usted / ustedes", "आपका नाम क्या है?", "¿Cómo se llama usted?"],
            ["क्या", "qué", "आपका नाम क्या है?", "¿Cómo se llama usted?"]
          ],
          grammar: {
            title: "Presentarse y preguntar el nombre",
            explanation: "En hindi, el verbo है («es») suele ir al final de una oración sencilla. Para decir «mi nombre», se usa मेरा नाम; मेरा concuerda con नाम, que es masculino. La pregunta formal आपका नाम क्या है? se dirige respetuosamente a una persona.",
            pattern: "मेरा नाम + nombre + है।\nआपका नाम क्या है? → मेरा नाम … है।",
            examples: [
              { target: "मेरा नाम अनिल है।", translation: "Me llamo Anil." },
              { target: "आपका नाम क्या है? मेरा नाम लीला है।", translation: "¿Cómo se llama usted? Me llamo Leela." }
            ],
            tip: "Puedes omitir मैं en «मैं अनिल हूँ» si el contexto ya deja claro quién habla."
          },
          choice: ["¿Qué pregunta significa «¿Cómo se llama usted?»?", ["आपका नाम क्या है?", "आप कहाँ रहते हैं?", "आप कैसे हैं?"], "आपका नाम क्या है?"],
          fill: { prompt: "मेरा ___ अनिल है। (Me llamo Anil.)", answer: "नाम", hint: "Completa con la palabra «nombre»." },
          dialogue: { title: "Preguntar el nombre", scene: "Conoces a una persona en un curso de idiomas.", speaker: "सीमा", target: "आपका नाम क्या है?", translation: "¿Cómo se llama usted?", answer: "मेरा नाम अनिल है।", answerTranslation: "Me llamo Anil.", wrong: "मैं ठीक हूँ।", wrongTranslation: "Estoy bien." },
          production: { title: "Preséntate", prompt: "Di «Me llamo लीला».", answer: "मेरा नाम लीला है।", wrong: "आपका नाम लीला है।", translation: "Me llamo Leela." }
        },
        {
          title: "Cortesía y pedir que repitan",
          objective: "Dar las gracias y pedir que repitan o hablen más despacio.",
          vocabulary: [
            ["धन्यवाद", "gracias", "आपकी मदद के लिए धन्यवाद।", "Gracias por su ayuda."],
            ["कृपया", "por favor", "कृपया फिर से बोलिए।", "Por favor, hable otra vez."],
            ["धीरे", "despacio", "कृपया धीरे बोलिए।", "Por favor, hable despacio."],
            ["दोबारा", "otra vez", "कृपया दोबारा कहिए।", "Por favor, dígalo otra vez."]
          ],
          grammar: {
            title: "Peticiones respetuosas",
            explanation: "Para pedir algo con cortesía, añade कृपया («por favor») y usa una forma respetuosa del verbo. बोलिए («hable») y कहिए («diga») son imperativos corteses; बोलो y कहो son más informales.",
            pattern: "कृपया + verbo respetuoso\nकृपया धीरे बोलिए। = Por favor, hable despacio.",
            examples: [
              { target: "कृपया दोबारा कहिए।", translation: "Por favor, dígalo otra vez." },
              { target: "आपकी मदद के लिए धन्यवाद।", translation: "Gracias por su ayuda." }
            ],
            tip: "आप + forma respetuosa mantiene un tono cortés; con amistades cercanas puede oírse तुम o तू, según la relación y la región."
          },
          choice: ["¿Qué expresión significa «gracias»?", ["धन्यवाद", "धीरे", "दोबारा"], "धन्यवाद"],
          fill: { prompt: "कृपया ___ बोलिए। (Por favor, hable despacio.)", answer: "धीरे", hint: "Completa con el adverbio «despacio»." },
          dialogue: { title: "Pedir que repitan", scene: "No oíste bien una indicación en clase.", speaker: "अनिल", target: "क्या आप समझे?", translation: "¿Entendió? (a un hombre, forma respetuosa)", answer: "कृपया दोबारा कहिए।", answerTranslation: "Por favor, dígalo otra vez.", wrong: "धन्यवाद।", wrongTranslation: "Gracias." },
          production: { title: "Pide que hablen más despacio", prompt: "Pide cortésmente a la otra persona que hable despacio.", answer: "कृपया धीरे बोलिए।", wrong: "कृपया जल्दी बोलिए।", translation: "Por favor, hable despacio." }
        },
        {
          title: "Letras, sonidos y números",
          objective: "Reconocer letras devanagari, vocales y los números del uno al cinco.",
          vocabulary: [
            ["एक", "uno", "मेरे पास एक किताब है।", "Tengo un libro."],
            ["दो", "dos", "मेरे पास दो किताबें हैं।", "Tengo dos libros."],
            ["तीन", "tres", "तीन विद्यार्थी यहाँ हैं।", "Hay tres estudiantes aquí."],
            ["अक्षर", "letra", "यह क अक्षर है।", "Esta es la letra ka."]
          ],
          grammar: {
            title: "Devanagari: स्वर, मात्रा y dirección",
            explanation: "El hindi se escribe en devanagari de izquierda a derecha. Las consonantes suelen llevar una vocal inherente «a»; los signos llamados मात्रा modifican esa vocal. Por ejemplo, क (ka) + ी = की (kī). En los primeros textos, los espacios separan las palabras.",
            pattern: "क = consonante con vocal inherente · कि = मात्रा ि\nकी = मात्रा ी · escritura de izquierda a derecha →",
            examples: [
              { target: "यह क अक्षर है।", translation: "Esta es la letra ka." },
              { target: "मेरे पास एक किताब है।", translation: "Tengo un libro." }
            ],
            tip: "Algunas consonantes tienen formas aspiradas, como क/ख y त/थ; al pronunciarlas, ख y थ llevan una pequeña salida de aire."
          },
          choice: ["¿Qué palabra significa «tres»?", ["एक", "दो", "तीन"], "तीन"],
          fill: { prompt: "यह ___ अक्षर है। (Esta es la letra ka.)", answer: "क", hint: "Escribe la consonante devanagari ka." },
          dialogue: { title: "Reconocer una letra", scene: "Señalas una letra en tu cuaderno.", speaker: "लीला", target: "यह कौन-सा अक्षर है?", translation: "¿Qué letra es esta?", answer: "यह क अक्षर है।", answerTranslation: "Esta es la letra ka.", wrong: "मेरे पास एक किताब है।", wrongTranslation: "Tengo un libro." },
          production: { title: "Di cuántos libros tienes", prompt: "Di «Tengo dos libros».", answer: "मेरे पास दो किताबें हैं।", wrong: "मेरे पास एक किताब है।", translation: "Tengo dos libros." }
        }
      ]
    },
    {
      id: "hi-details",
      title: "Datos personales y vida diaria",
      canDo: "Decir de dónde eres, qué idiomas hablas, datos de contacto sencillos y la hora.",
      grammar: "postposiciones से/में, posesivos, preguntas और marcadores de tiempo",
      sounds: "entonación interrogativa y aspiración",
      vocabulary: "países, idiomas, números, calendario y momentos del día",
      game: "entrevista de datos y calendario",
      lessons: [
        {
          title: "Nombre, origen e idiomas",
          objective: "Preguntar por el origen y decir qué idiomas hablas.",
          vocabulary: [
            ["कहाँ से", "de dónde", "आप कहाँ से हैं?", "¿De dónde es usted?"],
            ["भारत", "India", "मैं भारत से हूँ।", "Soy de India."],
            ["हिंदी", "hindi", "मैं हिंदी बोलता हूँ।", "Hablo hindi. (hablante masculino)"],
            ["स्पेनिश", "español (idioma)", "मैं स्पेनिश बोलती हूँ।", "Hablo español. (hablante femenina)"]
          ],
          grammar: {
            title: "Origen con से y género del verbo",
            explanation: "से significa «de/desde» y expresa origen en भारत से («de India»). El verbo बोलना («hablar») concuerda con quien habla en las formas informales: बोलता हूँ para un hombre y बोलती हूँ para una mujer. Con आप se usa la forma respetuosa plural.",
            pattern: "मैं + país + से हूँ।\nमैं हिंदी बोलता हूँ (hombre) · मैं हिंदी बोलती हूँ (mujer)",
            examples: [
              { target: "आप कहाँ से हैं? मैं भारत से हूँ।", translation: "¿De dónde es usted? Soy de India." },
              { target: "मैं स्पेनिश बोलती हूँ।", translation: "Hablo español. (hablante femenina)" }
            ],
            tip: "स्पेनिश se refiere aquí al idioma; para nacionalidad se usa otro adjetivo."
          },
          choice: ["¿Qué pregunta significa «¿De dónde es usted?»?", ["आप कहाँ से हैं?", "आपका नाम क्या है?", "आप कहाँ रहते हैं?"], "आप कहाँ से हैं?"],
          fill: { prompt: "मैं भारत ___ हूँ। (Soy de India.)", answer: "से", hint: "Completa con la postposición «de / desde»." },
          dialogue: { title: "Preguntar de dónde es alguien", scene: "Conversas con una persona en un curso.", speaker: "रीना", target: "आप कहाँ से हैं?", translation: "¿De dónde es usted?", answer: "मैं भारत से हूँ।", answerTranslation: "Soy de India.", wrong: "मैं हिंदी बोलती हूँ।", wrongTranslation: "Hablo hindi. (hablante femenina)" },
          production: { title: "Di qué idioma hablas", prompt: "Di «Hablo hindi» (forma femenina).", answer: "मैं हिंदी बोलती हूँ।", wrong: "मैं हिंदी बोलता हूँ।", translation: "Hablo hindi." }
        },
        {
          title: "Números, teléfono y dirección",
          objective: "Dar un número de teléfono ficticio y decir dónde vives.",
          vocabulary: [
            ["नंबर", "número", "मेरा फ़ोन नंबर शून्य से शुरू होता है।", "Mi número de teléfono empieza por cero."],
            ["फ़ोन", "teléfono", "यह मेरा फ़ोन है।", "Este es mi teléfono."],
            ["पता", "dirección", "मेरा पता यहाँ है।", "Mi dirección está aquí."],
            ["शून्य", "cero", "मेरा नंबर शून्य से शुरू होता है।", "Mi número empieza por cero."]
          ],
          grammar: {
            title: "Posesivos मेरा y मेरी",
            explanation: "El posesivo मेरा/मेरी/मेरे concuerda con el nombre poseído, no con la persona que habla. फ़ोन y नंबर son masculinos (मेरा फ़ोन); पता también es masculino (मेरा पता). Con आप, el posesivo es आपका/आपकी/आपके según el sustantivo.",
            pattern: "मेरा फ़ोन · मेरा पता · मेरी किताब\nआपका नंबर क्या है? = ¿Cuál es su número?",
            examples: [
              { target: "यह मेरा फ़ोन है।", translation: "Este es mi teléfono." },
              { target: "आपका पता क्या है? मेरा पता यहाँ है।", translation: "¿Cuál es su dirección? Mi dirección está aquí." }
            ],
            tip: "Para practicar, inventa el número y la dirección; no compartas tus datos personales reales."
          },
          choice: ["¿Qué posesivo corresponde a फ़ोन?", ["मेरा", "मेरी", "मेरे"], "मेरा"],
          fill: { prompt: "यह ___ फ़ोन है। (Este es mi teléfono.)", answer: "मेरा", hint: "Usa el posesivo masculino singular." },
          dialogue: { title: "Pedir un número", scene: "Una compañera pide un dato inventado para practicar.", speaker: "रीना", target: "आपका फ़ोन नंबर क्या है?", translation: "¿Cuál es su número de teléfono?", answer: "मेरा नंबर शून्य से शुरू होता है।", answerTranslation: "Mi número empieza por cero.", wrong: "मैं भारत से हूँ।", wrongTranslation: "Soy de India." },
          production: { title: "Comparte un dato ficticio", prompt: "Di «Esta es mi dirección».", answer: "यह मेरा पता है।", wrong: "यह मेरा फ़ोन है।", translation: "Esta es mi dirección." }
        },
        {
          title: "Formularios, citas y ayuda",
          objective: "Reconocer datos básicos de un formulario y pedir ayuda con cortesía.",
          vocabulary: [
            ["नाम", "nombre", "कृपया अपना नाम लिखिए।", "Por favor, escriba su nombre."],
            ["तारीख़", "fecha", "आज की तारीख़ क्या है?", "¿Cuál es la fecha de hoy?"],
            ["मदद", "ayuda", "क्या आप मेरी मदद कर सकते हैं?", "¿Puede ayudarme?"],
            ["लिखिए", "escriba (respetuoso)", "कृपया यहाँ लिखिए।", "Por favor, escriba aquí."]
          ],
          grammar: {
            title: "Pedir ayuda con क्या आप… सकते हैं?",
            explanation: "क्या आप… सकते हैं? es una forma cortés de preguntar «¿puede usted…?». El verbo principal suele ir antes de सकते हैं; सकता हूँ/सकती हूँ cambia según género del hablante, pero con आप se usa सकते हैं para el tratamiento respetuoso.",
            pattern: "क्या आप + verbo + सकते हैं?\nक्या आप मेरी मदद कर सकते हैं? = ¿Puede ayudarme?",
            examples: [
              { target: "क्या आप मेरी मदद कर सकते हैं?", translation: "¿Puede ayudarme?" },
              { target: "कृपया अपना नाम यहाँ लिखिए।", translation: "Por favor, escriba aquí su nombre." }
            ],
            tip: "La forma respetuosa लिखिए se usa en instrucciones amables; लिखो es más informal."
          },
          choice: ["¿Qué expresión significa «¿Puede ayudarme?»?", ["क्या आप मेरी मदद कर सकते हैं?", "आज की तारीख़ क्या है?", "आपका नाम क्या है?"], "क्या आप मेरी मदद कर सकते हैं?"],
          fill: { prompt: "क्या आप मेरी ___ कर सकते हैं? (¿Puede ayudarme?)", answer: "मदद", hint: "Completa con la palabra «ayuda»." },
          dialogue: { title: "Completar un formulario", scene: "No entiendes un campo del formulario de clase.", speaker: "अनिल", target: "क्या आप मेरी मदद कर सकते हैं?", translation: "¿Puede ayudarme?", answer: "हाँ, कृपया अपना नाम यहाँ लिखिए।", answerTranslation: "Sí, por favor, escriba aquí su nombre.", wrong: "आज की तारीख़ क्या है?", wrongTranslation: "¿Cuál es la fecha de hoy?" },
          production: { title: "Pide ayuda", prompt: "Pregunta cortésmente «¿Puede ayudarme?»", answer: "क्या आप मेरी मदद कर सकते हैं?", wrong: "आपका नाम क्या है?", translation: "¿Puede ayudarme?" }
        },
        {
          title: "Cómo estás y qué hora es",
          objective: "Preguntar cómo está alguien y decir una hora en punto.",
          vocabulary: [
            ["कैसे", "cómo", "आप कैसे हैं?", "¿Cómo está usted?"],
            ["ठीक", "bien", "मैं ठीक हूँ।", "Estoy bien."],
            ["समय", "hora / tiempo", "अभी क्या समय है?", "¿Qué hora es ahora?"],
            ["अभी", "ahora", "अभी आठ बजे हैं।", "Ahora son las ocho."]
          ],
          grammar: {
            title: "El verbo होना y la hora",
            explanation: "मैं के साथ हूँ significa «soy/estoy»; आप के trato respetuoso se usa हैं. Para decir la hora, se pone el número + बजे y luego हैं: आठ बजे हैं («son las ocho»).",
            pattern: "मैं ठीक हूँ। · आप ठीक हैं।\nआठ बजे हैं। = Son las ocho.",
            examples: [
              { target: "आप कैसे हैं? मैं ठीक हूँ, धन्यवाद।", translation: "¿Cómo está usted? Estoy bien, gracias." },
              { target: "अभी आठ बजे हैं।", translation: "Ahora son las ocho." }
            ],
            tip: "En preguntas, क्या puede aparecer al comienzo o al final según el estilo; la entonación también ayuda."
          },
          choice: ["¿Qué pregunta significa «¿Qué hora es ahora?»?", ["अभी क्या समय है?", "आप कैसे हैं?", "आपका नाम क्या है?"], "अभी क्या समय है?"],
          fill: { prompt: "अभी आठ बजे ___। (Ahora son las ocho.)", answer: "हैं", hint: "Completa con la forma plural/polida de होना." },
          dialogue: { title: "Preguntar la hora", scene: "Entras a una clase y preguntas por la hora.", speaker: "सीमा", target: "अभी क्या समय है?", translation: "¿Qué hora es ahora?", answer: "अभी आठ बजे हैं।", answerTranslation: "Ahora son las ocho.", wrong: "मैं ठीक हूँ।", wrongTranslation: "Estoy bien." },
          production: { title: "Di cómo estás", prompt: "Responde «Estoy bien, gracias».", answer: "मैं ठीक हूँ, धन्यवाद।", wrong: "अभी आठ बजे हैं।", translation: "Estoy bien, gracias." }
        },
        {
          title: "Meses, días y fechas",
          objective: "Nombrar días y meses y dar una fecha sencilla.",
          vocabulary: [
            ["आज", "hoy", "आज सोमवार है।", "Hoy es lunes."],
            ["महीना", "mes", "यह कौन-सा महीना है?", "¿Qué mes es este?"],
            ["जनवरी", "enero", "मेरा जन्मदिन जनवरी में है।", "Mi cumpleaños es en enero."],
            ["शुक्रवार", "viernes", "शुक्रवार को मेरी छुट्टी है।", "El viernes tengo libre."]
          ],
          grammar: {
            title: "Fechas con में y को",
            explanation: "में significa «en» y se usa para el mes: जनवरी में («en enero»). को puede marcar el día en que ocurre algo: शुक्रवार को («el viernes»). Los días y meses suelen escribirse en devanagari en este curso.",
            pattern: "mes + में · día + को\nजनवरी में = en enero · शुक्रवार को = el viernes",
            examples: [
              { target: "मेरा जन्मदिन जनवरी में है।", translation: "Mi cumpleaños es en enero." },
              { target: "शुक्रवार को मेरी छुट्टी है।", translation: "El viernes tengo libre." }
            ],
            tip: "El orden de la fecha numérica cambia según el país; al hablar, el nombre del mes evita confusiones."
          },
          choice: ["¿Qué palabra significa «enero»?", ["शुक्रवार", "जनवरी", "आज"], "जनवरी"],
          fill: { prompt: "मेरा जन्मदिन जनवरी ___ है। (Mi cumpleaños es en enero.)", answer: "में", hint: "Usa la postposición para «en»." },
          dialogue: { title: "Hablar del calendario", scene: "Una compañera pregunta en qué mes cumples años.", speaker: "सीमा", target: "आपका जन्मदिन किस महीने में है?", translation: "¿En qué mes es su cumpleaños?", answer: "मेरा जन्मदिन जनवरी में है।", answerTranslation: "Mi cumpleaños es en enero.", wrong: "आज शुक्रवार है।", wrongTranslation: "Hoy es viernes." },
          production: { title: "Di un día de la semana", prompt: "Di «El viernes tengo libre».", answer: "शुक्रवार को मेरी छुट्टी है।", wrong: "मेरा जन्मदिन जनवरी में है।", translation: "El viernes tengo libre." }
        }
      ]
    },
    {
      id: "hi-family",
      title: "La familia y los lugares",
      canDo: "Presentar a tu familia, describir relaciones y decir dónde vives y de dónde eres.",
      grammar: "género y concordancia, posesivos, demostrativos y postposiciones",
      sounds: "matras y acento de palabras familiares",
      vocabulary: "familia, países, nacionalidades y domicilio",
      game: "árbol familiar y mapa",
      lessons: [
        {
          title: "Personas de mi familia",
          objective: "Nombrar familiares y decir quiénes forman parte de tu familia.",
          vocabulary: [
            ["पिता", "padre", "ये मेरे पिता हैं।", "Este es mi padre."],
            ["माँ", "madre", "ये मेरी माँ हैं।", "Esta es mi madre."],
            ["भाई", "hermano", "यह मेरा भाई है।", "Este es mi hermano."],
            ["बहन", "hermana", "यह मेरी बहन है।", "Esta es mi hermana."]
          ],
          grammar: {
            title: "Posesivos que concuerdan con el nombre",
            explanation: "मेरा/मेरी/मेरे («mi») concuerda con el género y número del nombre poseído. भाई es masculino singular (मेरा भाई); बहन es femenino singular (मेरी बहन). Para mostrar respeto por una persona mayor se puede decir ये मेरे पिता हैं.",
            pattern: "मेरा + masculino · मेरी + femenino · मेरे + plural/oblicuo\nमेरा भाई · मेरी बहन · मेरे पिता",
            examples: [
              { target: "यह मेरा भाई है।", translation: "Este es mi hermano." },
              { target: "ये मेरी माँ हैं।", translation: "Esta es mi madre. (forma respetuosa)" }
            ],
            tip: "El posesivo concuerda con lo poseído, no con el género de quien habla."
          },
          choice: ["¿Qué posesivo corresponde a बहन?", ["मेरा", "मेरी", "मेरे"], "मेरी"],
          fill: { prompt: "यह ___ बहन है। (Esta es mi hermana.)", answer: "मेरी", hint: "बहन es femenino singular." },
          dialogue: { title: "Presentar a tu familia", scene: "Muestras una foto familiar a una compañera.", speaker: "सीमा", target: "यह कौन हैं?", translation: "¿Quién es esta persona? (forma respetuosa)", answer: "ये मेरे पिता हैं।", answerTranslation: "Este es mi padre.", wrong: "यह मेरी बहन है।", wrongTranslation: "Esta es mi hermana." },
          production: { title: "Presenta a una hermana", prompt: "Di «Esta es mi hermana».", answer: "यह मेरी बहन है।", wrong: "यह मेरा भाई है।", translation: "Esta es mi hermana." }
        },
        {
          title: "De dónde soy y dónde vivo",
          objective: "Decir tu país, ciudad y nacionalidad con frases sencillas.",
          vocabulary: [
            ["शहर", "ciudad", "मैं दिल्ली शहर में रहता हूँ।", "Vivo en la ciudad de Delhi. (hablante masculino)"],
            ["रहना", "vivir", "मैं मुंबई में रहती हूँ।", "Vivo en Bombay. (hablante femenina)"],
            ["भारत", "India", "मैं भारत से हूँ।", "Soy de India."],
            ["भारतीय", "indio/a", "मैं भारतीय हूँ।", "Soy indio/a."]
          ],
          grammar: {
            title: "Ubicación con में y concordancia de रहना",
            explanation: "में significa «en/dentro de» y sigue al lugar: दिल्ली में. El verbo habitual रहना concuerda con el género de quien habla: रहता हूँ para un hombre y रहती हूँ para una mujer. भारतीय no cambia de forma según el género.",
            pattern: "ciudad + में + रहता हूँ (hombre)\nciudad + में + रहती हूँ (mujer)",
            examples: [
              { target: "मैं दिल्ली में रहता हूँ।", translation: "Vivo en Delhi. (hablante masculino)" },
              { target: "मैं मुंबई में रहती हूँ।", translation: "Vivo en Bombay. (hablante femenina)" }
            ],
            tip: "भारतीय es un adjetivo común para ambos géneros: मैं भारतीय हूँ."
          },
          choice: ["¿Qué postposición completa «दिल्ली ___» para decir «en Delhi»?", ["में", "से", "को"], "में"],
          fill: { prompt: "मैं भारत ___ हूँ। (Soy de India.)", answer: "से", hint: "Usa la postposición que indica origen." },
          dialogue: { title: "Decir dónde vives", scene: "Una compañera nueva pregunta por tu ciudad.", speaker: "रीना", target: "आप कहाँ रहते हैं?", translation: "¿Dónde vive usted? (a un hombre)", answer: "मैं दिल्ली में रहता हूँ।", answerTranslation: "Vivo en Delhi. (hablante masculino)", wrong: "मैं भारत से हूँ।", wrongTranslation: "Soy de India." },
          production: { title: "Di tu nacionalidad", prompt: "Di «Soy indio/a».", answer: "मैं भारतीय हूँ।", wrong: "मैं भारत में हूँ।", translation: "Soy indio/a." }
        },
        {
          title: "Árbol familiar y descripciones",
          objective: "Presentar a familiares y describirlos con adjetivos sencillos.",
          vocabulary: [
            ["दादा", "abuelo paterno", "मेरे दादा अच्छे हैं।", "Mi abuelo es amable."],
            ["दादी", "abuela paterna", "मेरी दादी खुश हैं।", "Mi abuela está feliz."],
            ["बड़ा", "mayor / grande (masculino)", "मेरा भाई बड़ा है।", "Mi hermano es mayor."],
            ["छोटी", "pequeña / menor (femenino)", "मेरी बहन छोटी है।", "Mi hermana es menor."]
          ],
          grammar: {
            title: "Adjetivos y género",
            explanation: "Los adjetivos variables concuerdan con el nombre: बड़ा es masculino y बड़ी femenino; छोटा es masculino y छोटी femenino. Algunos adjetivos, como अच्छा/अच्छी, también cambian. Las relaciones familiares distinguen a veces el lado paterno y materno.",
            pattern: "मेरा भाई बड़ा है। · मेरी बहन बड़ी है।\nमेरा भाई छोटा है। · मेरी बहन छोटी है।",
            examples: [
              { target: "मेरा भाई बड़ा है और मेरी बहन छोटी है।", translation: "Mi hermano es mayor y mi hermana es menor." },
              { target: "मेरी दादी खुश हैं।", translation: "Mi abuela está feliz. (forma respetuosa)" }
            ],
            tip: "दादा/दादी se refieren a los abuelos paternos; नाना/नानी son los maternos."
          },
          choice: ["¿Qué forma femenina significa «pequeña/menor»?", ["बड़ा", "छोटी", "दादा"], "छोटी"],
          fill: { prompt: "मेरी बहन ___ है। (Mi hermana es menor.)", answer: "छोटी", hint: "Usa la forma femenina de «pequeño/a»." },
          dialogue: { title: "Describir a la familia", scene: "Hablas de dos familiares en una conversación.", speaker: "अनिल", target: "आपकी बहन कैसी हैं?", translation: "¿Cómo es su hermana? (forma respetuosa)", answer: "मेरी बहन छोटी है।", answerTranslation: "Mi hermana es menor.", wrong: "मेरे दादा अच्छे हैं।", wrongTranslation: "Mi abuelo es amable." },
          production: { title: "Describe a un hermano", prompt: "Di «Mi hermano es mayor».", answer: "मेरा भाई बड़ा है।", wrong: "मेरी बहन छोटी है।", translation: "Mi hermano es mayor." }
        }
      ]
    },
    {
      id: "hi-work",
      title: "¿A qué te dedicas?",
      canDo: "Nombrar profesiones, hablar de horarios, tareas, estudios y preferencias.",
      grammar: "frases con होना, habitual -ता/-ती, imperativos y पसंद",
      sounds: "consonantes aspiradas y ritmo de frase",
      vocabulary: "profesiones, estudios, tareas y tiempo",
      game: "mímica de profesiones y horarios",
      lessons: [
        {
          title: "Vocabulario de oficios y trabajos",
          objective: "Decir a qué te dedicas y nombrar profesiones frecuentes.",
          vocabulary: [
            ["शिक्षक", "profesor", "वह शिक्षक है।", "Él es profesor."],
            ["शिक्षिका", "profesora", "वह शिक्षिका है।", "Ella es profesora."],
            ["डॉक्टर", "médico/a", "मेरी बहन डॉक्टर है।", "Mi hermana es médica."],
            ["विद्यार्थी", "estudiante", "मैं विद्यार्थी हूँ।", "Soy estudiante."]
          ],
          grammar: {
            title: "Profesiones con el presente de होना",
            explanation: "En una frase de profesión se usa el sustantivo seguido de है («es») o हूँ («soy»). Algunas profesiones tienen forma femenina, como शिक्षक/शिक्षिका; डॉक्टर puede usarse para hombres y mujeres.",
            pattern: "मैं + profesión + हूँ। · वह + profesión + है।\nवह शिक्षक है। · वह शिक्षिका है।",
            examples: [
              { target: "वह शिक्षिका है।", translation: "Ella es profesora." },
              { target: "मैं विद्यार्थी हूँ।", translation: "Soy estudiante." }
            ],
            tip: "वह puede significar «él» o «ella»; el contexto y la forma de la profesión aclaran el referente."
          },
          choice: ["¿Qué palabra dice «profesora»?", ["शिक्षक", "शिक्षिका", "विद्यार्थी"], "शिक्षिका"],
          fill: { prompt: "मैं ___ हूँ। (Soy estudiante.)", answer: "विद्यार्थी", hint: "Completa con la palabra «estudiante»." },
          dialogue: { title: "Preguntar por una profesión", scene: "Conoces a alguien durante una pausa de clase.", speaker: "रीना", target: "आप क्या काम करते हैं?", translation: "¿A qué se dedica usted? (a un hombre)", answer: "मैं विद्यार्थी हूँ।", answerTranslation: "Soy estudiante.", wrong: "वह शिक्षिका है।", wrongTranslation: "Ella es profesora." },
          production: { title: "Di a qué te dedicas", prompt: "Di «Soy estudiante».", answer: "मैं विद्यार्थी हूँ।", wrong: "वह डॉक्टर है।", translation: "Soy estudiante." }
        },
        {
          title: "Expresar horario y disponibilidad",
          objective: "Comunicar un horario sencillo y preguntar cuándo trabaja alguien.",
          vocabulary: [
            ["काम करना", "trabajar", "मैं सुबह काम करता हूँ।", "Trabajo por la mañana. (hablante masculino)"],
            ["सुबह", "mañana (parte del día)", "मैं सुबह पढ़ती हूँ।", "Estudio por la mañana. (hablante femenina)"],
            ["शाम", "tarde/noche", "मैं शाम को काम करता हूँ।", "Trabajo por la tarde. (hablante masculino)"],
            ["कब", "cuándo", "आप कब काम करते हैं?", "¿Cuándo trabaja usted? (a un hombre)"]
          ],
          grammar: {
            title: "Presente habitual con -ता/-ती",
            explanation: "El presente habitual combina la raíz del verbo con ता para un hablante masculino singular o ती para uno femenino, y luego हूँ: काम करता हूँ / काम करती हूँ. Con आप se usa करते हैं/करती हैं según la persona a quien se habla.",
            pattern: "masculino: मैं काम करता हूँ।\nfemenino: मैं काम करती हूँ। · आप कब काम करते हैं?",
            examples: [
              { target: "मैं सुबह काम करता हूँ।", translation: "Trabajo por la mañana. (hablante masculino)" },
              { target: "मैं शाम को पढ़ती हूँ।", translation: "Estudio por la tarde. (hablante femenina)" }
            ],
            tip: "सुबह y शाम indican momentos del día; को se añade con frecuencia al expresar «por la tarde/noche»."
          },
          choice: ["¿Qué palabra significa «por la mañana»?", ["शाम", "सुबह", "कब"], "सुबह"],
          fill: { prompt: "मैं सुबह काम ___ हूँ। (Trabajo por la mañana; hablante masculino.)", answer: "करता", hint: "Completa con la forma habitual masculina de करना." },
          dialogue: { title: "Preguntar por el horario", scene: "Una compañera organiza una sesión de estudio.", speaker: "सीमा", target: "आप कब काम करते हैं?", translation: "¿Cuándo trabaja usted? (a un hombre)", answer: "मैं सुबह काम करता हूँ।", answerTranslation: "Trabajo por la mañana. (hablante masculino)", wrong: "मैं विद्यार्थी हूँ।", wrongTranslation: "Soy estudiante." },
          production: { title: "Di cuándo estudias", prompt: "Di «Estudio por la tarde» (hablante femenina).", answer: "मैं शाम को पढ़ती हूँ।", wrong: "मैं सुबह काम करता हूँ।", translation: "Estudio por la tarde." }
        },
        {
          title: "Tareas e instrucciones sencillas",
          objective: "Entender instrucciones frecuentes y pedir que las repitan.",
          vocabulary: [
            ["खोलिए", "abra (respetuoso)", "कृपया किताब खोलिए।", "Por favor, abra el libro."],
            ["लिखिए", "escriba (respetuoso)", "कृपया अपना नाम लिखिए।", "Por favor, escriba su nombre."],
            ["पढ़िए", "lea (respetuoso)", "कृपया वाक्य पढ़िए।", "Por favor, lea la oración."],
            ["दोहराइए", "repita (respetuoso)", "कृपया निर्देश दोहराइए।", "Por favor, repita la instrucción."]
          ],
          grammar: {
            title: "Imperativos respetuosos en -इए",
            explanation: "Los imperativos corteses se forman a menudo con -इए: खोलिए («abra»), लिखिए («escriba»), पढ़िए («lea»). Se usan con आप y pueden acompañarse de कृपया. Las formas informales tienen terminaciones distintas.",
            pattern: "कृपया + verbo en -इए\nकिताब खोलिए। · वाक्य पढ़िए।",
            examples: [
              { target: "कृपया किताब खोलिए।", translation: "Por favor, abra el libro." },
              { target: "कृपया निर्देश दोहराइए।", translation: "Por favor, repita la instrucción." }
            ],
            tip: "La forma -इए suele ser respetuosa; adapta el tratamiento a la relación, evitando usarla como una orden brusca."
          },
          choice: ["¿Qué forma significa «lea» de manera cortés?", ["खोलिए", "लिखिए", "पढ़िए"], "पढ़िए"],
          fill: { prompt: "कृपया किताब ___। (Por favor, abra el libro.)", answer: "खोलिए", hint: "Completa con el imperativo respetuoso de «abrir»." },
          dialogue: { title: "Seguir una instrucción", scene: "La profesora pide que abras el libro.", speaker: "शिक्षिका", target: "कृपया किताब खोलिए।", translation: "Por favor, abra el libro.", answer: "जी, मैं किताब खोलता हूँ।", answerTranslation: "Sí, abro el libro. (hablante masculino)", wrong: "कृपया वाक्य पढ़िए।", wrongTranslation: "Por favor, lea la oración." },
          production: { title: "Da una instrucción cortés", prompt: "Pide que escriban el nombre.", answer: "कृपया अपना नाम लिखिए।", wrong: "कृपया वाक्य पढ़िए।", translation: "Por favor, escriba su nombre." }
        },
        {
          title: "Estudios, profesiones y gustos",
          objective: "Hablar de estudios y expresar algo que te gusta.",
          vocabulary: [
            ["पढ़ना", "estudiar / leer", "मैं हिंदी पढ़ता हूँ।", "Estudio hindi. (hablante masculino)"],
            ["पसंद", "gusto", "मुझे संगीत पसंद है।", "Me gusta la música."],
            ["किताब", "libro", "मुझे किताबें पसंद हैं।", "Me gustan los libros."],
            ["संगीत", "música", "उसे संगीत पसंद है।", "A esa persona le gusta la música."]
          ],
          grammar: {
            title: "Expresar gustos con मुझे पसंद है",
            explanation: "Para decir «me gusta», se usa literalmente «a mí» (मुझे) + cosa + पसंद है. Cuando el objeto está en plural, puede aparecer पसंद हैं: मुझे किताबें पसंद हैं. Para hablar de actividades, el infinitivo también puede preceder a पसंद है.",
            pattern: "मुझे + nombre + पसंद है/हैं\nमुझे पढ़ना पसंद है। = Me gusta estudiar/leer.",
            examples: [
              { target: "मुझे संगीत पसंद है।", translation: "Me gusta la música." },
              { target: "मुझे किताबें पढ़ना पसंद है।", translation: "Me gusta leer libros." }
            ],
            tip: "La estructura no usa un verbo equivalente a «gustar» que concuerde con «yo»; recuerda empezar con मुझे."
          },
          choice: ["¿Qué expresión significa «Me gusta la música»?", ["मुझे संगीत पसंद है।", "मैं संगीत हूँ।", "मुझे किताब है।"], "मुझे संगीत पसंद है।"],
          fill: { prompt: "मुझे ___ पसंद है। (Me gusta la música.)", answer: "संगीत", hint: "Completa con la palabra «música»." },
          dialogue: { title: "Hablar de lo que te gusta", scene: "Una compañera pregunta qué te gusta estudiar.", speaker: "रीना", target: "आपको क्या पसंद है?", translation: "¿Qué le gusta a usted?", answer: "मुझे किताबें पढ़ना पसंद है।", answerTranslation: "Me gusta leer libros.", wrong: "मैं सुबह काम करता हूँ।", wrongTranslation: "Trabajo por la mañana. (hablante masculino)" },
          production: { title: "Di qué estudias", prompt: "Di «Estudio hindi» (hablante masculino).", answer: "मैं हिंदी पढ़ता हूँ।", wrong: "मुझे हिंदी पसंद है।", translation: "Estudio hindi." }
        }
      ]
    },
    {
      id: "hi-home",
      title: "La casa y dónde están las cosas",
      canDo: "Nombrar espacios y muebles, ubicar objetos y expresar necesidades básicas.",
      grammar: "demostrativos, होना, postposiciones y चाहिए",
      sounds: "vocales largas y sonidos aspirados en vocabulario doméstico",
      vocabulary: "habitaciones, muebles y objetos cotidianos",
      game: "ubica los objetos de la casa",
      lessons: [
        {
          title: "Habitaciones y muebles",
          objective: "Nombrar habitaciones y objetos comunes de una vivienda.",
          vocabulary: [
            ["घर", "casa", "यह मेरा घर है।", "Esta es mi casa."],
            ["कमरा", "habitación", "यह कमरा बड़ा है।", "Esta habitación es grande."],
            ["दरवाज़ा", "puerta", "दरवाज़ा खुला है।", "La puerta está abierta."],
            ["कुर्सी", "silla", "यह कुर्सी नई है।", "Esta silla es nueva."]
          ],
          grammar: {
            title: "Demostrativos यह y वह",
            explanation: "यह («este/esta/esto») señala algo cercano; वह («ese/esa/eso») algo más alejado. El verbo है va al final en una oración singular. Los adjetivos concuerdan con el género: बड़ा con घर/कमरा, नई con कुर्सी.",
            pattern: "यह + nombre + है। · वह + nombre + है।\nयह कमरा बड़ा है। · यह कुर्सी नई है।",
            examples: [
              { target: "यह मेरा घर है।", translation: "Esta es mi casa." },
              { target: "वह कुर्सी नई है।", translation: "Esa silla es nueva." }
            ],
            tip: "यह y वह no cambian según el género del nombre que señalan."
          },
          choice: ["¿Qué demostrativo señala algo cercano?", ["यह", "वह", "कहाँ"], "यह"],
          fill: { prompt: "यह ___ बड़ा है। (Esta habitación es grande.)", answer: "कमरा", hint: "Completa con el nombre masculino «habitación»." },
          dialogue: { title: "Nombrar un objeto", scene: "Señalas una silla de la habitación.", speaker: "अनिल", target: "यह क्या है?", translation: "¿Qué es esto?", answer: "यह कुर्सी है।", answerTranslation: "Esta es una silla.", wrong: "मेरा घर बड़ा है।", wrongTranslation: "Mi casa es grande." },
          production: { title: "Nombra una casa", prompt: "Di «Esta es mi casa».", answer: "यह मेरा घर है।", wrong: "वह मेरा घर है।", translation: "Esta es mi casa." }
        },
        {
          title: "Buscar una vivienda",
          objective: "Preguntar por habitaciones y describir dónde está un objeto.",
          vocabulary: [
            ["रसोई", "cocina", "रसोई घर में है।", "La cocina está en la casa."],
            ["सोने का कमरा", "dormitorio", "सोने का कमरा बड़ा है।", "El dormitorio es grande."],
            ["में", "en / dentro de", "किताब कमरे में है।", "El libro está en la habitación."],
            ["कहाँ", "dónde", "रसोई कहाँ है?", "¿Dónde está la cocina?"]
          ],
          grammar: {
            title: "Ubicación con la postposición में",
            explanation: "En hindi, las postposiciones se colocan después del nombre. में significa «en/dentro de»: कमरा + में → कमरे में; el sustantivo puede cambiar a su forma oblicua antes de la postposición. Para preguntar «dónde», usa कहाँ.",
            pattern: "lugar + में · कमरा → कमरे में\nकहाँ + está…? · रसोई कहाँ है?",
            examples: [
              { target: "किताब कमरे में है।", translation: "El libro está en la habitación." },
              { target: "रसोई घर में है।", translation: "La cocina está en la casa." }
            ],
            tip: "El cambio de कमरा a कमरे es un cambio de caso; aprende la expresión completa कमरे में."
          },
          choice: ["¿Qué postposición significa «en»?", ["में", "से", "तक"], "में"],
          fill: { prompt: "किताब कमरे ___ है। (El libro está en la habitación.)", answer: "में", hint: "La postposición se coloca después del lugar." },
          dialogue: { title: "Preguntar por una habitación", scene: "Buscas la cocina en una casa nueva.", speaker: "सीमा", target: "रसोई कहाँ है?", translation: "¿Dónde está la cocina?", answer: "रसोई घर में है।", answerTranslation: "La cocina está en la casa.", wrong: "यह कुर्सी नई है।", wrongTranslation: "Esta silla es nueva." },
          production: { title: "Ubica un libro", prompt: "Di «El libro está en la habitación».", answer: "किताब कमरे में है।", wrong: "किताब घर से है।", translation: "El libro está en la habitación." }
        },
        {
          title: "Pedir permiso y explicar una necesidad",
          objective: "Expresar una necesidad y pedir permiso para usar un objeto.",
          vocabulary: [
            ["पानी", "agua", "मुझे पानी चाहिए।", "Necesito agua."],
            ["चाहिए", "necesitar / querer", "मुझे कुर्सी चाहिए।", "Necesito una silla."],
            ["क्या मैं", "¿puedo yo…?", "क्या मैं अंदर आ सकता हूँ?", "¿Puedo entrar? (hablante masculino)"],
            ["इस्तेमाल", "uso", "क्या मैं यह कुर्सी इस्तेमाल कर सकता हूँ?", "¿Puedo usar esta silla? (hablante masculino)"]
          ],
          grammar: {
            title: "Necesidad con चाहिए y permiso",
            explanation: "चाहिए expresa necesidad: मुझे पानी चाहिए («necesito agua»); literalmente, «a mí agua es necesaria». Para pedir permiso, क्या मैं… सकता हूँ? es la forma masculina y क्या मैं… सकती हूँ? la femenina.",
            pattern: "मुझे + objeto + चाहिए।\nक्या मैं + verbo + सकता/सकती हूँ?",
            examples: [
              { target: "मुझे पानी चाहिए।", translation: "Necesito agua." },
              { target: "क्या मैं यह कुर्सी इस्तेमाल कर सकती हूँ?", translation: "¿Puedo usar esta silla? (hablante femenina)" }
            ],
            tip: "चाहिए no cambia según el género de la persona en esta construcción básica."
          },
          choice: ["¿Qué expresión significa «Necesito agua»?", ["मुझे पानी चाहिए।", "पानी कहाँ है?", "मैं पानी हूँ।"], "मुझे पानी चाहिए।"],
          fill: { prompt: "मुझे पानी ___। (Necesito agua.)", answer: "चाहिए", hint: "Completa con la palabra que expresa necesidad." },
          dialogue: { title: "Pedir permiso para entrar", scene: "Estás frente a una sala de clase.", speaker: "अनिल", target: "क्या मैं अंदर आ सकता हूँ?", translation: "¿Puedo entrar? (hablante masculino)", answer: "हाँ, आइए।", answerTranslation: "Sí, pase. (forma respetuosa)", wrong: "मुझे पानी चाहिए।", wrongTranslation: "Necesito agua." },
          production: { title: "Expresa una necesidad", prompt: "Di «Necesito agua».", answer: "मुझे पानी चाहिए।", wrong: "मुझे चाय चाहिए।", translation: "Necesito agua." }
        }
      ]
    },
    {
      id: "hi-travel",
      title: "Desplazamientos y transporte",
      canDo: "Nombrar medios de transporte, preguntar por un billete y comprender horarios.",
      grammar: "destinos con पर, medio con से, preguntas de horario y habitual",
      sounds: "consonantes aspiradas y pronunciación de grupos consonánticos",
      vocabulary: "estaciones, transporte, billetes y direcciones",
      game: "planifica un viaje corto",
      lessons: [
        {
          title: "Autobús, tren y estación",
          objective: "Nombrar transportes y pedir un billete sencillo.",
          vocabulary: [
            ["बस", "autobús", "मैं बस से जाता हूँ।", "Voy en autobús. (hablante masculino)"],
            ["रेलगाड़ी", "tren", "मैं रेलगाड़ी से जाता हूँ।", "Voy en tren. (hablante masculino)"],
            ["स्टेशन", "estación", "स्टेशन कहाँ है?", "¿Dónde está la estación?"],
            ["टिकट", "billete", "मुझे एक टिकट चाहिए।", "Necesito un billete."]
          ],
          grammar: {
            title: "Medio de transporte con से",
            explanation: "से después de un medio de transporte significa «en/por»: बस से («en autobús»), रेलगाड़ी से («en tren»). Para pedir algo, मुझे… चाहिए («necesito…») es una fórmula clara y cortés.",
            pattern: "transporte + से · बस से / रेलगाड़ी से\nमुझे + objeto + चाहिए।",
            examples: [
              { target: "मैं बस से स्टेशन जाता हूँ।", translation: "Voy a la estación en autobús. (hablante masculino)" },
              { target: "मुझे रेलगाड़ी का टिकट चाहिए।", translation: "Necesito un billete de tren." }
            ],
            tip: "जाता हूँ cambia a जाती हूँ para una hablante; रेलगाड़ी के लिए «रेल से» también es una forma común."
          },
          choice: ["¿Qué palabra significa «tren»?", ["बस", "रेलगाड़ी", "स्टेशन"], "रेलगाड़ी"],
          fill: { prompt: "मैं बस ___ जाता हूँ। (Voy en autobús; hablante masculino.)", answer: "से", hint: "Añade la postposición que marca el medio." },
          dialogue: { title: "Comprar un billete", scene: "En la estación pides un billete de tren.", speaker: "कर्मचारी", target: "आपको कौन-सा टिकट चाहिए?", translation: "¿Qué billete necesita usted?", answer: "मुझे रेलगाड़ी का टिकट चाहिए।", answerTranslation: "Necesito un billete de tren.", wrong: "स्टेशन कहाँ है?", wrongTranslation: "¿Dónde está la estación?" },
          production: { title: "Di cómo viajas", prompt: "Di «Voy en autobús» (hablante masculino).", answer: "मैं बस से जाता हूँ।", wrong: "मैं रेलगाड़ी से जाता हूँ।", translation: "Voy en autobús." }
        },
        {
          title: "Horarios, salidas y llegadas",
          objective: "Preguntar cuándo sale un transporte y entender indicaciones básicas.",
          vocabulary: [
            ["कब", "cuándo", "रेलगाड़ी कब निकलती है?", "¿Cuándo sale el tren?"],
            ["निकलना", "salir", "बस आठ बजे निकलती है।", "El autobús sale a las ocho."],
            ["पहुँचना", "llegar", "रेलगाड़ी शाम को पहुँचती है।", "El tren llega por la tarde."],
            ["बजे", "a las (hora)", "बस दस बजे निकलती है।", "El autobús sale a las diez."]
          ],
          grammar: {
            title: "Preguntar la hora de salida",
            explanation: "कब («cuándo») aparece antes del verbo en una pregunta. Para decir una hora exacta, se pone बजे después del número: आठ बजे («a las ocho»). निकलती है concuerda con बस, que es femenino; निकलती है también se usa con रेलगाड़ी.",
            pattern: "कब + verbo…? · आठ बजे\nबस/रेलगाड़ी निकलती है।",
            examples: [
              { target: "रेलगाड़ी कब निकलती है? यह आठ बजे निकलती है।", translation: "¿Cuándo sale el tren? Sale a las ocho." },
              { target: "बस शाम को पहुँचती है।", translation: "El autobús llega por la tarde." }
            ],
            tip: "Después de una hora también puede aparecer पर: आठ बजे पर no es la forma básica; usa simplemente आठ बजे."
          },
          choice: ["¿Qué palabra pregunta «cuándo»?", ["कहाँ", "कब", "कितना"], "कब"],
          fill: { prompt: "रेलगाड़ी ___ निकलती है? (¿Cuándo sale el tren?)", answer: "कब", hint: "Completa con la palabra interrogativa de tiempo." },
          dialogue: { title: "Consultar una salida", scene: "Miras el horario en la estación y preguntas al personal.", speaker: "यात्री", target: "रेलगाड़ी कब निकलती है?", translation: "¿Cuándo sale el tren?", answer: "यह आठ बजे निकलती है।", answerTranslation: "Sale a las ocho.", wrong: "मुझे टिकट चाहिए।", wrongTranslation: "Necesito un billete." },
          production: { title: "Di una hora de salida", prompt: "Di «El autobús sale a las diez».", answer: "बस दस बजे निकलती है।", wrong: "बस दस बजे पहुँचती है।", translation: "El autobús sale a las diez." }
        },
        {
          title: "Rutinas y acciones en curso",
          objective: "Describir cómo viajas habitualmente y decir a dónde vas ahora.",
          vocabulary: [
            ["जाना", "ir", "मैं रोज़ काम पर जाता हूँ।", "Voy al trabajo todos los días. (hablante masculino)"],
            ["पर", "a / en (destino)", "मैं रोज़ काम पर जाता हूँ।", "Voy al trabajo todos los días. (hablante masculino)"],
            ["रोज़", "cada día", "मैं रोज़ बस से जाता हूँ।", "Voy en autobús todos los días."],
            ["साथ", "con", "मैं अपने भाई के साथ जाता हूँ।", "Voy con mi hermano."]
          ],
          grammar: {
            title: "Acción habitual con जाना",
            explanation: "जाना («ir») forma el habitual जाता हूँ para un hombre y जाती हूँ para una mujer. रोज़ («cada día») indica que se trata de una rutina. En muchos trayectos se nombra el destino sin postposición (मैं स्टेशन जाता हूँ); पर aparece en expresiones como काम पर («al trabajo»).",
            pattern: "मैं रोज़ + destino + जाता/जाती हूँ।\nमैं बस से जाता हूँ। · मैं काम पर जाती हूँ।",
            examples: [
              { target: "मैं रोज़ काम पर बस से जाता हूँ।", translation: "Voy al trabajo en autobús todos los días. (hablante masculino)" },
              { target: "मैं अपने भाई के साथ स्टेशन जाती हूँ।", translation: "Voy a la estación con mi hermano. (hablante femenina)" }
            ],
            tip: "En conversaciones cotidianas, el destino suele ir con पर o तक según el lugar; no añadas को automáticamente a todos los destinos."
          },
          choice: ["¿Qué palabra significa «cada día»?", ["साथ", "रोज़", "कब"], "रोज़"],
          fill: { prompt: "मैं ___ काम पर जाता हूँ। (Voy al trabajo todos los días.)", answer: "रोज़", hint: "Completa con «cada día»." },
          dialogue: { title: "Hablar de tu trayecto", scene: "Una compañera pregunta cómo sueles ir al trabajo.", speaker: "सीमा", target: "आप काम पर कैसे जाते हैं?", translation: "¿Cómo va usted al trabajo? (a un hombre)", answer: "मैं बस से जाता हूँ।", answerTranslation: "Voy en autobús. (hablante masculino)", wrong: "रेलगाड़ी आठ बजे निकलती है।", wrongTranslation: "El tren sale a las ocho." },
          production: { title: "Di con quién vas", prompt: "Di «Voy con mi hermano» (hablante masculino).", answer: "मैं अपने भाई के साथ जाता हूँ।", wrong: "मैं अपनी बहन के साथ जाती हूँ।", translation: "Voy con mi hermano." }
        }
      ]
    },
    {
      id: "hi-shopping",
      title: "Compras, comida y ropa",
      canDo: "Preguntar precios, comprar alimentos, indicar cantidades y pedir prendas o bebidas.",
      grammar: "preguntas con कितना, género, clasificadores y पसंद",
      sounds: "pronunciación de números y ritmo en frases de compra",
      vocabulary: "precios, alimentos, cantidades, ropa y tienda",
      game: "mercado y menú",
      lessons: [
        {
          title: "Números y precios",
          objective: "Preguntar cuánto cuesta algo y entender un precio sencillo.",
          vocabulary: [
            ["कितना", "cuánto (masculino)", "यह कितना है?", "¿Cuánto cuesta esto?"],
            ["कीमत", "precio", "इसकी कीमत क्या है?", "¿Cuál es su precio?"],
            ["एक", "uno", "यह एक रुपया है।", "Esto es una rupia."],
            ["दस", "diez", "यह दस रुपये का है।", "Cuesta diez rupias."]
          ],
          grammar: {
            title: "Preguntar el precio con कितना",
            explanation: "कितना concuerda con el nombre al que se refiere: कितना con un nombre masculino, कितनी con uno femenino. Para preguntar el precio de un objeto, esta expresión es común: यह कितने का है? La forma exacta cambia con el género y el número.",
            pattern: "यह कितना है? · इसकी कीमत क्या है?\nकितने का? (masculino) · कितने की? (femenino)",
            examples: [
              { target: "इसकी कीमत क्या है? यह दस रुपये का है।", translation: "¿Cuál es su precio? Cuesta diez rupias." },
              { target: "यह कितना है?", translation: "¿Cuánto cuesta esto?" }
            ],
            tip: "रुपया es masculino singular; रुपये es una forma plural común para cantidades."
          },
          choice: ["¿Qué pregunta significa «¿Cuál es su precio?»?", ["इसकी कीमत क्या है?", "आप कहाँ रहते हैं?", "यह क्या है?"], "इसकी कीमत क्या है?"],
          fill: { prompt: "यह ___ है? (¿Cuánto cuesta esto?; masculino.)", answer: "कितना", hint: "Completa con la forma masculina de «cuánto»." },
          dialogue: { title: "Preguntar un precio", scene: "En una tienda preguntas cuánto cuesta un objeto.", speaker: "दुकानदार", target: "यह कितना है?", translation: "¿Cuánto cuesta esto?", answer: "यह दस रुपये का है।", answerTranslation: "Cuesta diez rupias.", wrong: "यह मेरा फ़ोन है।", wrongTranslation: "Este es mi teléfono." },
          production: { title: "Pregunta el precio", prompt: "Pregunta «¿Cuál es su precio?»", answer: "इसकी कीमत क्या है?", wrong: "इसका नाम क्या है?", translation: "¿Cuál es su precio?" }
        },
        {
          title: "Alimentos básicos y mercado",
          objective: "Nombrar alimentos básicos y pedir un producto.",
          vocabulary: [
            ["रोटी", "pan / pan plano", "मुझे रोटी चाहिए।", "Quiero pan."],
            ["सेब", "manzana", "मुझे सेब चाहिए।", "Quiero manzanas."],
            ["दूध", "leche", "यह दूध है।", "Esto es leche."],
            ["बाज़ार", "mercado", "मैं बाज़ार जा रहा हूँ।", "Voy al mercado. (hablante masculino)"]
          ],
          grammar: {
            title: "Pedir algo con मुझे चाहिए",
            explanation: "मुझे… चाहिए expresa «quiero/necesito…». El nombre del producto va antes de चाहिए: मुझे दूध चाहिए. रोटी es femenino y दूध es masculino, pero चाहिए se mantiene igual en esta estructura.",
            pattern: "मुझे + alimento + चाहिए।\nमुझे रोटी चाहिए। · मुझे दूध चाहिए।",
            examples: [
              { target: "मुझे रोटी और दूध चाहिए।", translation: "Quiero pan y leche." },
              { target: "मैं बाज़ार जा रहा हूँ।", translation: "Voy al mercado. (hablante masculino)" }
            ],
            tip: "रोटी suele significar pan plano; «pan» puede variar de nombre según la región y el tipo de pan."
          },
          choice: ["¿Qué palabra significa «leche»?", ["रोटी", "सेब", "दूध"], "दूध"],
          fill: { prompt: "मुझे ___ चाहिए। (Quiero leche.)", answer: "दूध", hint: "Completa con «leche»." },
          dialogue: { title: "Pedir en el mercado", scene: "Un vendedor pregunta qué producto quieres.", speaker: "दुकानदार", target: "आपको क्या चाहिए?", translation: "¿Qué desea usted?", answer: "मुझे सेब चाहिए।", answerTranslation: "Quiero manzanas.", wrong: "मैं बाज़ार जा रहा हूँ।", wrongTranslation: "Voy al mercado. (hablante masculino)" },
          production: { title: "Pide un alimento", prompt: "Di «Quiero pan».", answer: "मुझे रोटी चाहिए।", wrong: "मुझे दूध चाहिए।", translation: "Quiero pan." }
        },
        {
          title: "Cantidades y pago",
          objective: "Pedir una cantidad sencilla y preguntar cómo pagar.",
          vocabulary: [
            ["किलो", "kilo", "मुझे एक किलो सेब चाहिए।", "Quiero un kilo de manzanas."],
            ["आधा", "medio (masculino)", "मुझे आधा किलो चाहिए।", "Quiero medio kilo."],
            ["पैसा", "dinero", "मेरे पास पैसे हैं।", "Tengo dinero."],
            ["नकद", "efectivo", "क्या आप नकद लेते हैं?", "¿Acepta efectivo?"]
          ],
          grammar: {
            title: "Cantidades con किलो",
            explanation: "La unidad de medida suele ir después del número y antes del producto: एक किलो सेब («un kilo de manzanas»). आधा concuerda con किलो, que es masculino. Para preguntar por una forma de pago, se usa क्या आप… लेते हैं? («¿acepta…?»).",
            pattern: "एक/आधा + किलो + producto\nक्या आप नकद लेते हैं? = ¿Acepta efectivo?",
            examples: [
              { target: "मुझे एक किलो सेब चाहिए।", translation: "Quiero un kilo de manzanas." },
              { target: "मुझे आधा किलो दूध चाहिए।", translation: "Quiero medio kilo de leche." }
            ],
            tip: "Las cantidades de alimentos se expresan con unidades como किलो; el nombre del producto puede quedar en singular."
          },
          choice: ["¿Qué expresión significa «medio kilo»?", ["एक किलो", "आधा किलो", "नकद"], "आधा किलो"],
          fill: { prompt: "मुझे ___ किलो चाहिए। (Quiero medio kilo.)", answer: "आधा", hint: "Escribe «medio» en masculino." },
          dialogue: { title: "Pedir una cantidad", scene: "En el mercado indicas cuánto producto quieres.", speaker: "दुकानदार", target: "आपको कितना चाहिए?", translation: "¿Cuánto desea usted?", answer: "मुझे आधा किलो चाहिए।", answerTranslation: "Quiero medio kilo.", wrong: "मेरे पास पैसे हैं।", wrongTranslation: "Tengo dinero." },
          production: { title: "Di cuánto quieres", prompt: "Pide un kilo de manzanas.", answer: "मुझे एक किलो सेब चाहिए।", wrong: "मुझे आधा किलो दूध चाहिए।", translation: "Quiero un kilo de manzanas." }
        },
        {
          title: "Ropa, bebidas y preferencias",
          objective: "Pedir una prenda o bebida y expresar una preferencia.",
          vocabulary: [
            ["कमीज़", "camisa", "यह कमीज़ नई है।", "Esta camisa es nueva."],
            ["कपड़ा", "ropa / tela", "मुझे यह कपड़ा पसंद है।", "Me gusta esta ropa/tela."],
            ["चाय", "té", "मुझे चाय चाहिए।", "Quiero té."],
            ["कॉफ़ी", "café", "मुझे कॉफ़ी पसंद है।", "Me gusta el café."]
          ],
          grammar: {
            title: "Preferencias con पसंद",
            explanation: "Para decir que algo te gusta, usa मुझे + objeto + पसंद है. पसंद no cambia con el género del objeto. Para pedir una bebida, मुझे + bebida + चाहिए expresa «quiero…».",
            pattern: "मुझे + वस्तु + पसंद है।\nमुझे चाय चाहिए। = Quiero té.",
            examples: [
              { target: "मुझे कॉफ़ी पसंद है, लेकिन मुझे चाय चाहिए।", translation: "Me gusta el café, pero quiero té." },
              { target: "मुझे यह कमीज़ पसंद है।", translation: "Me gusta esta camisa." }
            ],
            tip: "La estructura con पसंद significa literalmente «a mí, [objeto] gusta»; no uses मैं como sujeto."
          },
          choice: ["¿Qué palabra significa «té»?", ["चाय", "कॉफ़ी", "पानी"], "चाय"],
          fill: { prompt: "मुझे ___ पसंद है। (Me gusta el café.)", answer: "कॉफ़ी", hint: "Completa con la bebida «café»." },
          dialogue: { title: "Pedir algo en una cafetería", scene: "En una cafetería preguntan qué bebida quieres.", speaker: "विक्रेता", target: "आपको क्या चाहिए?", translation: "¿Qué desea usted?", answer: "मुझे चाय चाहिए।", answerTranslation: "Quiero té.", wrong: "मुझे यह कमीज़ पसंद है।", wrongTranslation: "Me gusta esta camisa." },
          production: { title: "Expresa una preferencia", prompt: "Di «Me gusta el café».", answer: "मुझे कॉफ़ी पसंद है।", wrong: "मुझे चाय चाहिए।", translation: "Me gusta el café." }
        }
      ]
    },
    {
      id: "hi-stories",
      title: "Historias, pasado y cultura",
      canDo: "Hablar de ayer con expresiones sencillas y describir personas, lugares y estudios.",
      grammar: "pasado básico, marcadores de tiempo, posesivos y concordancia",
      sounds: "entonación narrativa y pronunciación de grupos consonánticos",
      vocabulary: "actividades pasadas, familia, lugares y escuela",
      game: "relato encadenado de un día",
      lessons: [
        {
          title: "Contar qué hice ayer",
          objective: "Hablar de una actividad pasada y mencionar cuándo ocurrió.",
          vocabulary: [
            ["कल", "ayer / mañana (según contexto)", "मैं कल बाज़ार गया।", "Ayer fui al mercado. (hablante masculino)"],
            ["गया", "fui (masculino)", "वह घर गया।", "Él fue a casa."],
            ["पढ़ा", "estudié / leí (masculino)", "मैंने हिंदी पढ़ी।", "Estudié hindi."],
            ["मिला", "me encontré (masculino)", "मैं अपने दोस्त से मिला।", "Me encontré con mi amigo. (hablante masculino)"]
          ],
          grammar: {
            title: "Pasado masculino y objeto directo",
            explanation: "En pasado, कई verbos cambian según el género: गया para un hombre, गई para una mujer. Con algunos verbos transitivos como पढ़ना, el sujeto lleva ने y el verbo puede concordar con el objeto: मैंने हिंदी पढ़ी, porque हिंदी es femenino.",
            pattern: "masculino: मैं बाज़ार गया। · femenino: मैं बाज़ार गई।\nमैंने हिंदी पढ़ी। = Estudié hindi.",
            examples: [
              { target: "मैं कल बाज़ार गया।", translation: "Ayer fui al mercado. (hablante masculino)" },
              { target: "मैंने कल हिंदी पढ़ी।", translation: "Ayer estudié hindi." }
            ],
            tip: "कल puede significar «ayer» o «mañana»; el verbo y el contexto indican cuál."
          },
          choice: ["¿Qué forma significa «fui» para un hablante masculino?", ["गया", "गई", "जाता"], "गया"],
          fill: { prompt: "मैं कल बाज़ार ___। (Ayer fui al mercado; hablante masculino.)", answer: "गया", hint: "Usa la forma masculina de pasado de जाना." },
          dialogue: { title: "Hablar de ayer", scene: "Una compañera te pregunta qué hiciste ayer.", speaker: "सीमा", target: "आप कल कहाँ गए?", translation: "¿Adónde fue usted ayer? (a un hombre)", answer: "मैं कल बाज़ार गया।", answerTranslation: "Ayer fui al mercado. (hablante masculino)", wrong: "मैं रोज़ बाज़ार जाता हूँ।", wrongTranslation: "Voy al mercado todos los días. (hablante masculino)" },
          production: { title: "Cuenta una acción pasada", prompt: "Di «Ayer estudié hindi».", answer: "मैंने कल हिंदी पढ़ी।", wrong: "मैं कल हिंदी पढ़ता हूँ।", translation: "Ayer estudié hindi." }
        },
        {
          title: "Hablar de mi familia",
          objective: "Describir a familiares y contar una actividad pasada sencilla.",
          vocabulary: [
            ["परिवार", "familia", "मेरा परिवार बड़ा है।", "Mi familia es grande."],
            ["माँ", "madre", "मैंने कल माँ से बात की।", "Ayer hablé con mi madre."],
            ["साथ", "con", "मैं अपनी बहन के साथ गया।", "Fui con mi hermana. (hablante masculino)"],
            ["खुश", "feliz", "मैं अपने परिवार के साथ खुश हूँ।", "Estoy feliz con mi familia."]
          ],
          grammar: {
            title: "Formas posesivas y género",
            explanation: "अपना/अपनी/अपने se refiere a algo propio del sujeto y concuerda con el nombre poseído: अपनी बहन («mi hermana», de quien habla). के साथ significa «con». En pasado, गया/गई concuerda con el género del hablante cuando se usa «ir» sin objeto directo.",
            pattern: "अपना + masculino · अपनी + femenino · अपने + plural\nअपनी बहन के साथ = con mi hermana",
            examples: [
              { target: "मैं अपनी बहन के साथ गया।", translation: "Fui con mi hermana. (hablante masculino)" },
              { target: "मैं अपनी माँ से मिला।", translation: "Me encontré con mi madre. (hablante masculino)" }
            ],
            tip: "अपना suele indicar posesión ligada al sujeto de la oración; मेरा también es posible, pero no siempre se usa igual."
          },
          choice: ["¿Qué forma posesiva concuerda con बहन?", ["अपना", "अपनी", "अपने"], "अपनी"],
          fill: { prompt: "मैं ___ बहन के साथ गया। (Fui con mi hermana; hablante masculino.)", answer: "अपनी", hint: "बहन es femenino; elige el posesivo concordante." },
          dialogue: { title: "Contar una visita", scene: "Una amiga pregunta con quién saliste ayer.", speaker: "रीना", target: "आप किसके साथ गए?", translation: "¿Con quién fue usted? (a un hombre)", answer: "मैं अपनी बहन के साथ गया।", answerTranslation: "Fui con mi hermana. (hablante masculino)", wrong: "मेरा परिवार बड़ा है।", wrongTranslation: "Mi familia es grande." },
          production: { title: "Cuenta con quién fuiste", prompt: "Di «Fui con mi hermana» (hablante masculino).", answer: "मैं अपनी बहन के साथ गया।", wrong: "मैं अपने भाई के साथ गया।", translation: "Fui con mi hermana." }
        },
        {
          title: "Ciudades, lugares y escuela",
          objective: "Describir una ciudad y decir qué aprendiste en la escuela.",
          vocabulary: [
            ["शहर", "ciudad", "मेरा शहर सुंदर है।", "Mi ciudad es bonita."],
            ["स्कूल", "escuela", "यह मेरा स्कूल है।", "Esta es mi escuela."],
            ["सुंदर", "bonito/a", "दिल्ली सुंदर है।", "Delhi es bonita."],
            ["सीखा", "aprendí (masculino)", "मैंने स्कूल में हिंदी सीखी।", "Aprendí hindi en la escuela."]
          ],
          grammar: {
            title: "Pasado con ने y adjetivos",
            explanation: "Para contar lo que aprendiste, se usa मैंने («yo» con ने) + complemento + verbo pasado. सीखी concuerda con हिंदी, un nombre femenino. सुंदर no cambia con el género del nombre, por lo que puede describir ciudad o escuela.",
            pattern: "मैंने + complemento + verbo pasado\nमैंने हिंदी सीखी। = Aprendí hindi.",
            examples: [
              { target: "मेरा शहर सुंदर है।", translation: "Mi ciudad es bonita." },
              { target: "मैंने स्कूल में हिंदी सीखी।", translation: "Aprendí hindi en la escuela." }
            ],
            tip: "Con algunos verbos transitivos en pasado, ने marca al sujeto y el verbo concuerda con el objeto; es un patrón frecuente para aprender como unidad."
          },
          choice: ["¿Qué forma concuerda con हिंदी en «Aprendí hindi»?", ["सीखा", "सीखी", "सीखे"], "सीखी"],
          fill: { prompt: "मैंने स्कूल में हिंदी ___। (Aprendí hindi en la escuela.)", answer: "सीखी", hint: "Usa la forma femenina que concuerda con हिंदी." },
          dialogue: { title: "Describir tu ciudad", scene: "Un compañero pregunta cómo es tu ciudad.", speaker: "अनिल", target: "आपका शहर कैसा है?", translation: "¿Cómo es su ciudad?", answer: "मेरा शहर सुंदर है।", answerTranslation: "Mi ciudad es bonita.", wrong: "मैंने स्कूल में हिंदी सीखी।", wrongTranslation: "Aprendí hindi en la escuela." },
          production: { title: "Di qué aprendiste", prompt: "Di «Aprendí hindi en la escuela».", answer: "मैंने स्कूल में हिंदी सीखी।", wrong: "मैं स्कूल में हिंदी सीखता हूँ।", translation: "Aprendí hindi en la escuela." }
        }
      ]
    }
  ];

  function makeLesson(unitId, spec, index) {
    const first = spec.vocabulary[0];
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
  window.HINDI_A1_CURRICULUM = {
    metadata: {
      language: "hi",
      languageName: "Hindi",
      speechLanguage: "hi-IN",
      supportLanguage: "es",
      level: "A1",
      audience: "Hispanohablantes principiantes; se enseña hindi estándar con devanagari, marcas de género y formas respetuosas.",
      estimatedMinutes: 232
    },
    roadmap: unitsData.map(({ id, title, canDo, grammar, sounds, vocabulary, game }) => ({
      id, title, canDo, grammar, sounds, vocabulary, game
    })),
    units
  };
})();

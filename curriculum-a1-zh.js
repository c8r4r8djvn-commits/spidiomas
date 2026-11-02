function mandarinNativeText(text) {
  return text.replace(/\s*\([A-Za-zĀ-ž][^()]*\)/g, "");
}

function createMandarinLesson(unitId, index, data) {
  const [title, objective, vocabulary, grammar, fill, dialogue, production] = data;
  const [word, alternative, third] = vocabulary;
  return {
    id: `${unitId}-${index}`,
    title,
    minutes: 7,
    objective,
    vocabulary: vocabulary.map(([target, translation, exampleTarget, exampleTranslation]) => ({
      target: mandarinNativeText(target),
      ...(target.match(/\(([^()]*)\)/)?.[1]
        ? { pronunciation: target.match(/\(([^()]*)\)/)[1] }
        : {}),
      translation,
      exampleTarget: mandarinNativeText(exampleTarget),
      exampleTranslation
    })),
    steps: [
      {
        type: "vocabulary",
        title: "Escucha, lee y relaciona",
        instruction: "Lee las palabras, escucha su pronunciación y repite en voz alta.",
        itemIds: vocabulary.map(([target]) => mandarinNativeText(target))
      },
      {
        type: "grammar",
        title: grammar[0],
        explanation: grammar[1],
        pattern: grammar[2],
        examples: grammar[3].map(({ target, translation }) => ({
          target: mandarinNativeText(target),
          translation
        })),
        tip: grammar[4]
      },
      {
        type: "multipleChoice",
        title: "Comprueba el vocabulario",
        prompt: `¿Qué expresión significa «${word[1]}»?`,
        options: [word[0], alternative[0], third[0]].map(mandarinNativeText),
        answer: mandarinNativeText(word[0]),
        feedback: `「${mandarinNativeText(word[0])}」significa «${word[1]}».`
      },
      {
        type: "fillBlank",
        title: "Completa la frase",
        prompt: fill[0],
        answer: fill[1],
        acceptedAnswers: [fill[1]],
        hint: fill[2]
      },
      {
        type: "dialogue",
        title: dialogue[0],
        scene: dialogue[1],
        turns: [{
          speaker: dialogue[2],
          target: mandarinNativeText(dialogue[3]),
          translation: dialogue[4],
          options: [
            { target: mandarinNativeText(dialogue[5]), translation: dialogue[6], correct: true },
            { target: mandarinNativeText(dialogue[7]), translation: dialogue[8], correct: false }
          ]
        }]
      },
      {
        type: "production",
        title: production[0],
        prompt: production[1],
        options: [production[2], production[4]].map(mandarinNativeText),
        answer: mandarinNativeText(production[2]),
        model: mandarinNativeText(production[2]),
        translation: production[3]
      }
    ]
  };
}

window.MANDARIN_A1_CURRICULUM = {
  metadata: {
    language: "zh",
    languageName: "Mandarín",
    speechLanguage: "zh-CN",
    supportLanguage: "es",
    level: "A1",
    audience: "Hispanohablantes que empiezan a estudiar chino mandarín",
    estimatedMinutes: 203
  },
  roadmap: [
    { id: "zh-greetings", title: "Saludos y presentaciones", canDo: "Saludar, despedirte, decir tu nombre y tener un primer intercambio.", grammar: "pronombres, 是, 吗 y saludos sin verbo", sounds: "tonos, iniciales y saludo 你好 (nǐ hǎo)", vocabulary: "saludos, cortesía y nombres", game: "encuentra a tu compañero" },
    { id: "zh-details", title: "Datos personales y números", canDo: "Preguntar por nombre, nacionalidad, edad, teléfono y fecha.", grammar: "preguntas con 什么 y 几, números, 个 y 的", sounds: "números tonales y sílabas claras", vocabulary: "países, idiomas, números y calendario", game: "bingo de números" },
    { id: "zh-family", title: "Familia y vida diaria", canDo: "Presentar a tu familia, decir qué tienes y hablar de rutinas sencillas.", grammar: "有/没有, 的, 都 y presente con verbos frecuentes", sounds: "ritmo de frases y tonos en palabras bisílabas", vocabulary: "familia, casa y actividades cotidianas", game: "árbol familiar" },
    { id: "zh-work", title: "Estudio, trabajo y gustos", canDo: "Hablar de ocupación, habilidades, horarios y preferencias.", grammar: "在, 会/能/可以, 喜欢 y 想", sounds: "entonación de preguntas y pausas", vocabulary: "estudios, profesiones, horarios y aficiones", game: "entrevista por parejas" },
    { id: "zh-home", title: "Mi casa y dónde están las cosas", canDo: "Nombrar habitaciones y ubicar objetos con frases sencillas.", grammar: "在 para ubicación, 这/那, measure words y 有", sounds: "pronunciación de números y clasificadores", vocabulary: "habitaciones, muebles y objetos", game: "¿dónde está?" },
    { id: "zh-travel", title: "Moverse por la ciudad", canDo: "Preguntar dónde queda un lugar, pedir indicaciones y usar transporte.", grammar: "preguntas con 哪儿, 往, 从 y 能/可以", sounds: "entonación ascendente en preguntas", vocabulary: "lugares, direcciones y transporte", game: "mapa de la ciudad" },
    { id: "zh-shopping", title: "Comida, compras y restaurante", canDo: "Pedir comida, preguntar precios y comprar cantidades sencillas.", grammar: "cuánto 多少, clasificadores, 想要 y 不要", sounds: "tonos en cantidades y expresiones corteses", vocabulary: "comida, bebidas, precios y cantidades", game: "mercado de clase" },
    { id: "zh-stories", title: "Planes, tiempo y experiencias", canDo: "Hablar de planes inmediatos, el tiempo, una salida y algo que hiciste.", grammar: "了 para acciones terminadas, 过 introductorio y conectores", sounds: "entonación narrativa y pausas", vocabulary: "tiempo, ocio, lugares y expresiones temporales", game: "plan de fin de semana" }
  ],
  units: [
    {
      id: "zh-greetings",
      lessons: [
        createMandarinLesson("zh-greetings", 1, [
          "Saludar y despedirse", "Saludar según la situación y despedirte con cortesía.",
          [["你好 (nǐ hǎo)", "hola", "你好！(Nǐ hǎo!)", "¡Hola!"], ["再见 (zàijiàn)", "adiós / hasta luego", "老师，再见！(Lǎoshī, zàijiàn!)", "¡Hasta luego, profesor/a!"], ["早上好 (zǎoshang hǎo)", "buenos días", "早上好！(Zǎoshang hǎo!)", "¡Buenos días!"], ["谢谢 (xièxie)", "gracias", "谢谢你。(Xièxie nǐ.)", "Gracias."]],
          ["El saludo 你好 y los tonos", "你好 (nǐ hǎo) es el saludo más común. El mandarín distingue palabras por el tono; en el habla, el tercer tono de nǐ cambia antes de hǎo y se pronuncia parecido a ní hǎo.", "你好！→ ¡Hola!\n再见！→ ¡Adiós!\n早上好！→ ¡Buenos días!", [{ target: "你好！(Nǐ hǎo!)", translation: "¡Hola!" }, { target: "谢谢，再见！(Xièxie, zàijiàn!)", translation: "Gracias, ¡hasta luego!" }], "Escucha el audio e imita el contorno de los tonos; no añadas una vocal al final de las sílabas.",],
          ["早上___！", "好", "Completa el saludo: 早上___！", "好", "La expresión completa es 早上好 (buenos días)."],
          ["Conocer a alguien", "Te presentan a una persona en un curso por la mañana.", "小李", "你好！(Nǐ hǎo!)", "¡Hola!", "你好！早上好！(Nǐ hǎo! Zǎoshang hǎo!)", "¡Hola! ¡Buenos días!", "再见！(Zàijiàn!)", "¡Adiós!"],
          ["Elegir un saludo", "Saluda a una compañera al llegar por la mañana.", "你好！早上好！(Nǐ hǎo! Zǎoshang hǎo!)", "¡Hola! ¡Buenos días!", "再见！(Zàijiàn!)"]
        ]),
        createMandarinLesson("zh-greetings", 2, [
          "Presentarte con tu nombre", "Decir tu nombre y preguntar cómo se llama otra persona.",
          [["我叫…… (wǒ jiào…)", "me llamo…", "我叫安娜。(Wǒ jiào Ānnà.)", "Me llamo Ana."], ["你 (nǐ)", "tú", "你好吗？(Nǐ hǎo ma?)", "¿Cómo estás?"], ["名字 (míngzi)", "nombre", "你的名字是什么？(Nǐ de míngzi shì shénme?)", "¿Cómo te llamas?"], ["请问 (qǐngwèn)", "disculpa / una pregunta", "请问，你叫什么？(Qǐngwèn, nǐ jiào shénme?)", "Disculpa, ¿cómo te llamas?"]],
          ["叫 para decir el nombre", "Para presentarte, di 我叫 (wǒ jiào) y después tu nombre. La forma amable de preguntar es 你叫什么名字？(Nǐ jiào shénme míngzi?)", "我叫 + nombre。\n你叫什么名字？→ ¿Cómo te llamas?", [{ target: "我叫马可。(Wǒ jiào Mǎkě.)", translation: "Me llamo Marco." }, { target: "你叫什么名字？(Nǐ jiào shénme míngzi?)", translation: "¿Cómo te llamas?" }], "En una presentación breve, 我叫… suena natural; no hace falta traducir literalmente «mi nombre es».",],
          ["我___王芳。", "叫", "El verbo 叫 (llamarse) va antes del nombre.",],
          ["En un curso", "Conoces a alguien durante la primera clase.", "王芳", "你叫什么名字？(Nǐ jiào shénme míngzi?)", "¿Cómo te llamas?", "我叫安娜。你呢？(Wǒ jiào Ānnà. Nǐ ne?)", "Me llamo Ana. ¿Y tú?", "我很好，谢谢。 (Wǒ hěn hǎo, xièxie.)", "Estoy muy bien, gracias."],
          ["Decir tu nombre", "Elige cómo presentarte. Puedes usar un nombre inventado.", "我叫安娜。(Wǒ jiào Ānnà.)", "Me llamo Ana.", "再见，安娜。(Zàijiàn, Ānnà.)"]
        ]),
        createMandarinLesson("zh-greetings", 3, [
          "Preguntar cómo está alguien", "Preguntar y responder de manera sencilla cómo está otra persona.",
          [["好吗 (hǎo ma)", "¿estás bien? / ¿cómo estás?", "你好吗？(Nǐ hǎo ma?)", "¿Cómo estás?"], ["很好 (hěn hǎo)", "muy bien / bien", "我很好。(Wǒ hěn hǎo.)", "Estoy muy bien."], ["也 (yě)", "también", "我也很好。(Wǒ yě hěn hǎo.)", "Yo también estoy bien."], ["呢 (ne)", "¿y…? / partícula para devolver la pregunta", "我很好，你呢？(Wǒ hěn hǎo, nǐ ne?)", "Estoy bien, ¿y tú?"]],
          ["La pregunta con 吗 y la partícula 呢", "Añade 吗 al final de una afirmación para convertirla en pregunta de sí o no. 呢 permite devolver una pregunta: 我很好，你呢？", "你好吗？→ ¿Cómo estás?\n我很好。你呢？→ Estoy bien. ¿Y tú?", [{ target: "你好吗？(Nǐ hǎo ma?)", translation: "¿Cómo estás?" }, { target: "我也很好。(Wǒ yě hěn hǎo.)", translation: "Yo también estoy bien." }], "吗 siempre va al final de la pregunta; no cambia el orden de las palabras.",],
          ["你___？ (¿Cómo estás?)", "好吗", "Usa 好吗 al final de la afirmación 你好.",],
          ["Al comienzo de la clase", "Una compañera te pregunta cómo estás.", "同学", "你好吗？(Nǐ hǎo ma?)", "¿Cómo estás?", "我很好，谢谢。你呢？(Wǒ hěn hǎo, xièxie. Nǐ ne?)", "Estoy bien, gracias. ¿Y tú?", "我叫小王。(Wǒ jiào Xiǎo Wáng.)", "Me llamo Wang."],
          ["Responder y devolver la pregunta", "Responde que estás bien y pregunta por la otra persona.", "我很好，谢谢。你呢？(Wǒ hěn hǎo, xièxie. Nǐ ne?)", "Estoy bien, gracias. ¿Y tú?", "再见，谢谢。 (Zàijiàn, xièxie.)"]
        ]),
        createMandarinLesson("zh-greetings", 4, [
          "Decir de dónde eres", "Nombrar tu país y preguntar por el origen de alguien.",
          [["中国 (Zhōngguó)", "China", "我是中国人。(Wǒ shì Zhōngguó rén.)", "Soy chino/a."], ["西班牙 (Xībānyá)", "España", "我是西班牙人。(Wǒ shì Xībānyá rén.)", "Soy español/a."], ["人 (rén)", "persona / gentilicio", "他是中国人。(Tā shì Zhōngguó rén.)", "Él es chino."], ["哪里 (nǎlǐ)", "dónde", "你是哪里人？(Nǐ shì nǎlǐ rén?)", "¿De dónde eres?"]],
          ["是 para identificar", "是 (shì) equivale a «ser» cuando identificas a una persona o su nacionalidad. Para preguntar «¿de dónde eres?» se usa 你是哪里人？", "我是 + país + 人。\n你是哪里人？→ ¿De dónde eres?", [{ target: "我是西班牙人。(Wǒ shì Xībānyá rén.)", translation: "Soy español/a." }, { target: "你是哪里人？(Nǐ shì nǎlǐ rén?)", translation: "¿De dónde eres?" }], "No uses 是 delante de adjetivos como 好; para decir «estoy bien» di 我很好.",],
          ["我___西班牙人。", "是", "是 conecta el sujeto con su nacionalidad.",],
          ["En una presentación", "Tu compañero quiere saber de dónde eres.", "老师", "你是哪里人？(Nǐ shì nǎlǐ rén?)", "¿De dónde eres?", "我是西班牙人。(Wǒ shì Xībānyá rén.)", "Soy español/a.", "我叫西班牙。(Wǒ jiào Xībānyá.)", "Me llamo España."],
          ["Decir tu nacionalidad", "Elige una frase para decir que eres de España.", "我是西班牙人。(Wǒ shì Xībānyá rén.)", "Soy español/a.", "我叫西班牙人。(Wǒ jiào Xībānyá rén.)"]
        ])
      ]
    },
    {
      id: "zh-details",
      lessons: [
        createMandarinLesson("zh-details", 1, [
          "Nombres y apellidos", "Preguntar y decir nombre y apellido en una presentación sencilla.",
          [["姓 (xìng)", "apellidarse / apellido", "我姓王。(Wǒ xìng Wáng.)", "Me apellido Wang."], ["什么 (shénme)", "qué", "你叫什么名字？(Nǐ jiào shénme míngzi?)", "¿Cómo te llamas?"], ["名字 (míngzi)", "nombre", "我的名字是小林。(Wǒ de míngzi shì Xiǎolín.)", "Me llamo Xiaolin."], ["老师 (lǎoshī)", "profesor/a", "她是王老师。(Tā shì Wáng lǎoshī.)", "Ella es la profesora Wang."]],
          ["姓 y 叫", "El apellido suele decirse primero: 我姓王 (Wǒ xìng Wáng). Para el nombre completo o nombre de pila, usa 叫. En chino el apellido normalmente precede al nombre.", "我姓 + apellido。\n我叫 + nombre.", [{ target: "我姓李，叫小明。(Wǒ xìng Lǐ, jiào Xiǎomíng.)", translation: "Me apellido Li y me llamo Xiaoming." }, { target: "你姓什么？(Nǐ xìng shénme?)", translation: "¿Cuál es tu apellido?" }], "Para dirigirte a un profesor, el apellido va antes de 老师: 王老师.",],
          ["我___李，叫小美。", "姓", "El espacio pide el verbo que introduce el apellido.",],
          ["Conocer a una profesora", "La profesora se presenta y te pregunta por tu apellido.", "王老师", "你姓什么？(Nǐ xìng shénme?)", "¿Cuál es tu apellido?", "我姓李，叫安娜。(Wǒ xìng Lǐ, jiào Ānnà.)", "Me apellido Li y me llamo Ana.", "我叫老师。(Wǒ jiào lǎoshī.)", "Me llamo profesora."],
          ["Presentar nombre y apellido", "Elige una respuesta con apellido y nombre.", "我姓李，叫安娜。(Wǒ xìng Lǐ, jiào Ānnà.)", "Me apellido Li y me llamo Ana.", "我叫姓李。(Wǒ jiào xìng Lǐ.)"]
        ]),
        createMandarinLesson("zh-details", 2, [
          "Preguntar por idioma y nacionalidad", "Decir qué idioma hablas y preguntar si alguien habla chino.",
          [["说 (shuō)", "hablar / decir", "我说西班牙语。(Wǒ shuō Xībānyáyǔ.)", "Hablo español."], ["中文 (Zhōngwén)", "chino", "我会说中文。(Wǒ huì shuō Zhōngwén.)", "Sé hablar chino."], ["英语 (Yīngyǔ)", "inglés", "她说英语。(Tā shuō Yīngyǔ.)", "Ella habla inglés."], ["会 (huì)", "saber hacer / saber hablar", "你会说中文吗？(Nǐ huì shuō Zhōngwén ma?)", "¿Sabes hablar chino?"]],
          ["会 + verbo para habilidades", "会 antes de un verbo expresa una habilidad aprendida: 会说中文 es «saber hablar chino». La pregunta de sí o no termina en 吗.", "我会说 + idioma。\n你会说中文吗？", [{ target: "我会说一点儿中文。(Wǒ huì shuō yìdiǎnr Zhōngwén.)", translation: "Sé hablar un poco de chino." }, { target: "她会说英语。(Tā huì shuō Yīngyǔ.)", translation: "Ella sabe hablar inglés." }], "会 también puede indicar algo que sabes hacer; para permiso o posibilidad suele usarse 可以.",],
          ["我会___中文。", "说", "Después de 会 va el verbo «hablar».",],
          ["En el intercambio de idiomas", "Una compañera quiere saber si hablas chino.", "小林", "你会说中文吗？(Nǐ huì shuō Zhōngwén ma?)", "¿Sabes hablar chino?", "我会说一点儿中文。(Wǒ huì shuō yìdiǎnr Zhōngwén.)", "Sé hablar un poco de chino.", "我姓中文。(Wǒ xìng Zhōngwén.)", "Me apellido Chino."],
          ["Decir qué idioma hablas", "Elige una frase para decir que hablas español.", "我说西班牙语。(Wǒ shuō Xībānyáyǔ.)", "Hablo español.", "我姓西班牙语。(Wǒ xìng Xībānyáyǔ.)"]
        ]),
        createMandarinLesson("zh-details", 3, [
          "Números del cero al diez", "Reconocer números y decir una edad sencilla.",
          [["零 (líng)", "cero", "我的电话号码有零。(Wǒ de diànhuà hàomǎ yǒu líng.)", "Mi número de teléfono tiene un cero."], ["三 (sān)", "tres", "我三十岁。(Wǒ sānshí suì.)", "Tengo treinta años."], ["八 (bā)", "ocho", "我有八本书。(Wǒ yǒu bā běn shū.)", "Tengo ocho libros."], ["岁 (suì)", "años de edad", "她十岁。(Tā shí suì.)", "Ella tiene diez años."]],
          ["Números y edad", "Forma los números del 11 al 99 con decenas y unidades. Para la edad, se dice número + 岁; no se usa un verbo equivalente a «tener».", "十一 = 十 + 一\n我二十岁。→ Tengo veinte años.", [{ target: "他二十五岁。(Tā èrshíwǔ suì.)", translation: "Tiene veinticinco años." }, { target: "你几岁？(Nǐ jǐ suì?)", translation: "¿Cuántos años tienes?" }], "几岁 suele usarse con niños; para una persona adulta es más natural preguntarlo con cortesía o evitar la pregunta.",],
          ["我二十___。", "岁", "岁 indica la edad después del número.",],
          ["En una clase", "Un compañero te pregunta cuántos años tienes.", "同学", "你几岁？(Nǐ jǐ suì?)", "¿Cuántos años tienes?", "我二十岁。(Wǒ èrshí suì.)", "Tengo veinte años.", "我有二十。(Wǒ yǒu èrshí.)", "Tengo veinte."],
          ["Decir una edad", "Elige una respuesta completa: tienes veinte años.", "我二十岁。(Wǒ èrshí suì.)", "Tengo veinte años.", "我二十是。(Wǒ èrshí shì.)"]
        ]),
        createMandarinLesson("zh-details", 4, [
          "Teléfono y números de contacto", "Preguntar y decir un número de teléfono usando cifras.",
          [["电话 (diànhuà)", "teléfono", "我的电话在这里。(Wǒ de diànhuà zài zhèlǐ.)", "Mi teléfono está aquí."], ["号码 (hàomǎ)", "número", "你的号码是多少？(Nǐ de hàomǎ shì duōshao?)", "¿Cuál es tu número?"], ["多少 (duōshao)", "cuánto / cuántos", "电话号码是多少？(Diànhuà hàomǎ shì duōshao?)", "¿Cuál es el número de teléfono?"], ["请 (qǐng)", "por favor", "请说慢一点儿。(Qǐng shuō màn yìdiǎnr.)", "Por favor, habla un poco más despacio."]],
          ["Preguntar un número con 多少", "多少 se usa para preguntar por una cantidad no conocida. Para el teléfono, di 你的电话号码是多少？; es natural leer los dígitos uno por uno.", "电话号码是多少？→ ¿Cuál es el número de teléfono?\n请 + petición cortés", [{ target: "我的电话号码是……(Wǒ de diànhuà hàomǎ shì…)", translation: "Mi número de teléfono es…" }, { target: "请再说一遍。(Qǐng zài shuō yí biàn.)", translation: "Por favor, repítelo una vez más." }], "Usa un número ficticio en los ejercicios y evita compartir datos personales reales.",],
          ["你的电话号码是___？", "多少", "Pregunta «cuál es» con 多少.",],
          ["Intercambiar contactos", "Te piden tu teléfono en una actividad de clase.", "同学", "你的电话号码是多少？(Nǐ de diànhuà hàomǎ shì duōshao?)", "¿Cuál es tu número de teléfono?", "我的号码是……(Wǒ de hàomǎ shì…)", "Mi número es…", "我电话多少岁？(Wǒ diànhuà duōshao suì?)", "¿Cuántos años tiene mi teléfono?"],
          ["Pedir que repitan", "Elige una petición cortés si no oíste el número.", "请再说一遍。(Qǐng zài shuō yí biàn.)", "Por favor, repítelo una vez más.", "你叫什么名字？(Nǐ jiào shénme míngzi?)"]
        ]),
        createMandarinLesson("zh-details", 5, [
          "Días, meses y fechas sencillas", "Nombrar días de la semana y decir una fecha básica.",
          [["星期一 (xīngqīyī)", "lunes", "星期一我上课。(Xīngqīyī wǒ shàngkè.)", "El lunes tengo clase."], ["今天 (jīntiān)", "hoy", "今天星期五。(Jīntiān xīngqīwǔ.)", "Hoy es viernes."], ["月 (yuè)", "mes", "五月很暖和。(Wǔ yuè hěn nuǎnhuo.)", "Mayo es cálido."], ["号 (hào)", "día del mes", "今天是十号。(Jīntiān shì shí hào.)", "Hoy es día diez."]],
          ["Orden de la fecha en chino", "La fecha va de mayor a menor: año + mes + día. Los días de la semana se forman con 星期 y el número; domingo suele ser 星期日 o 星期天.", "五月十号 = 10 de mayo\n星期三 = miércoles", [{ target: "今天是六月五号。(Jīntiān shì liù yuè wǔ hào.)", translation: "Hoy es cinco de junio." }, { target: "明天星期二。(Míngtiān xīngqī'èr.)", translation: "Mañana es martes." }], "Después del número del día se usa 号; después del número del mes se usa 月.",],
          ["今天是五月十___。", "号", "El número del día del mes lleva 号.",],
          ["Organizar una clase", "Una compañera pregunta qué día es la clase.", "小王", "今天星期几？(Jīntiān xīngqī jǐ?)", "¿Qué día de la semana es hoy?", "今天星期三。(Jīntiān xīngqīsān.)", "Hoy es miércoles.", "今天三月星期。(Jīntiān sān yuè xīngqī.)", "Hoy es marzo semana."],
          ["Decir la fecha", "Elige cómo decir «hoy es diez de mayo».", "今天是五月十号。(Jīntiān shì wǔ yuè shí hào.)", "Hoy es diez de mayo.", "今天是十五月号。(Jīntiān shì shí wǔ yuè hào.)"]
        ])
      ]
    },
    {
      id: "zh-family",
      lessons: [
        createMandarinLesson("zh-family", 1, [
          "Personas de mi familia", "Nombrar familiares y decir quiénes están en tu familia.",
          [["爸爸 (bàba)", "papá", "我爸爸是老师。(Wǒ bàba shì lǎoshī.)", "Mi papá es profesor."], ["妈妈 (māma)", "mamá", "我妈妈很好。(Wǒ māma hěn hǎo.)", "Mi mamá está muy bien."], ["哥哥 (gēge)", "hermano mayor", "我有一个哥哥。(Wǒ yǒu yí ge gēge.)", "Tengo un hermano mayor."], ["妹妹 (mèimei)", "hermana menor", "她是我的妹妹。(Tā shì wǒ de mèimei.)", "Ella es mi hermana menor."]],
          ["有 para hablar de la familia", "有 (yǒu) significa «tener» o «haber». Para decir que tienes un familiar, usa 我有 + número/clasificador + familiar. La negación es 没有 (méiyǒu).", "我有一个哥哥。\n我没有妹妹。", [{ target: "我有一个妹妹。(Wǒ yǒu yí ge mèimei.)", translation: "Tengo una hermana menor." }, { target: "他没有哥哥。(Tā méiyǒu gēge.)", translation: "Él no tiene un hermano mayor." }], "Ante 有, se niega con 没有, no con 不有.",],
          ["我___一个哥哥。", "有", "Usa 有 para decir que tienes un hermano.",],
          ["Hablar de la familia", "Una amiga pregunta si tienes hermanas.", "朋友", "你有妹妹吗？(Nǐ yǒu mèimei ma?)", "¿Tienes una hermana menor?", "我有一个妹妹。(Wǒ yǒu yí ge mèimei.)", "Tengo una hermana menor.", "我不有妹妹。(Wǒ bù yǒu mèimei.)", "No tengo una hermana menor."],
          ["Contar quiénes forman tu familia", "Elige una frase para decir que tienes un hermano mayor.", "我有一个哥哥。(Wǒ yǒu yí ge gēge.)", "Tengo un hermano mayor.", "我有哥哥是。(Wǒ yǒu gēge shì.)"]
        ]),
        createMandarinLesson("zh-family", 2, [
          "Decir quién es quién", "Presentar a un familiar y expresar relaciones con 的.",
          [["的 (de)", "partícula posesiva", "这是我的妈妈。(Zhè shì wǒ de māma.)", "Esta es mi mamá."], ["姐姐 (jiějie)", "hermana mayor", "我姐姐住在北京。(Wǒ jiějie zhù zài Běijīng.)", "Mi hermana mayor vive en Pekín."], ["弟弟 (dìdi)", "hermano menor", "这是我弟弟。(Zhè shì wǒ dìdi.)", "Este es mi hermano menor."], ["孩子 (háizi)", "niño/a, hijo/a", "他们有两个孩子。(Tāmen yǒu liǎng ge háizi.)", "Tienen dos hijos."]],
          ["La partícula 的", "的 une un poseedor con algo o alguien: 我的姐姐 significa «mi hermana mayor». Con familiares cercanos a menudo se omite 的: 我妈妈.", "我 + 的 + familiar\n这是我的姐姐。", [{ target: "这是我的弟弟。(Zhè shì wǒ de dìdi.)", translation: "Este es mi hermano menor." }, { target: "我妈妈很好。(Wǒ māma hěn hǎo.)", translation: "Mi mamá está muy bien." }], "Con mamá, papá y hermanos suele sonar natural omitir 的 cuando el sentido es claro.",],
          ["这是___姐姐。", "我的", "Usa 我 + 的 para decir «mi».",],
          ["Mostrar una foto", "Enseñas una foto de tu hermana mayor.", "朋友", "照片里是谁？(Zhàopiàn li shì shéi?)", "¿Quién está en la foto?", "这是我的姐姐。(Zhè shì wǒ de jiějie.)", "Esta es mi hermana mayor.", "这是我有姐姐。(Zhè shì wǒ yǒu jiějie.)", "Esta es yo tengo hermana."],
          ["Presentar un familiar", "Elige la frase para decir «este es mi hermano menor».", "这是我的弟弟。(Zhè shì wǒ de dìdi.)", "Este es mi hermano menor.", "这是弟弟我。(Zhè shì dìdi wǒ.)"]
        ]),
        createMandarinLesson("zh-family", 3, [
          "Rutinas y horarios", "Hablar de actividades cotidianas y de cuándo las haces.",
          [["每天 (měitiān)", "todos los días", "我每天学习中文。(Wǒ měitiān xuéxí Zhōngwén.)", "Estudio chino todos los días."], ["起床 (qǐchuáng)", "levantarse de la cama", "我七点起床。(Wǒ qī diǎn qǐchuáng.)", "Me levanto a las siete."], ["吃饭 (chīfàn)", "comer", "我们中午吃饭。(Wǒmen zhōngwǔ chīfàn.)", "Comemos al mediodía."], ["晚上 (wǎnshang)", "por la noche", "晚上我看书。(Wǎnshang wǒ kàn shū.)", "Por la noche leo."]],
          ["Orden de tiempo y verbo", "Las expresiones de tiempo suelen ir antes del verbo: 我每天学习 (estudio todos los días), 我七点起床 (me levanto a las siete).", "Sujeto + tiempo + verbo。\n我晚上看书。", [{ target: "我每天早上喝水。(Wǒ měitiān zǎoshang hē shuǐ.)", translation: "Bebo agua cada mañana." }, { target: "她晚上八点回家。(Tā wǎnshang bā diǎn huí jiā.)", translation: "Ella vuelve a casa a las ocho de la noche." }], "En una frase sencilla, coloca la hora antes de la acción; no necesitas conjugar el verbo.",],
          ["我晚上___书。", "看", "看书 significa leer.",],
          ["Hablar de la rutina", "Un compañero pregunta qué haces por la noche.", "同学", "你晚上做什么？(Nǐ wǎnshang zuò shénme?)", "¿Qué haces por la noche?", "我晚上看书。(Wǒ wǎnshang kàn shū.)", "Por la noche leo.", "我看晚上书。(Wǒ kàn wǎnshang shū.)", "Yo leo libro de noche."],
          ["Decir una rutina", "Elige una frase para decir «me levanto a las siete».", "我七点起床。(Wǒ qī diǎn qǐchuáng.)", "Me levanto a las siete.", "我起床七点吗。(Wǒ qǐchuáng qī diǎn ma.)"]
        ])
      ]
    },
    {
      id: "zh-work",
      lessons: [
        createMandarinLesson("zh-work", 1, [
          "Estudios y profesiones", "Decir qué estudias y nombrar una profesión frecuente.",
          [["学生 (xuésheng)", "estudiante", "我是学生。(Wǒ shì xuésheng.)", "Soy estudiante."], ["工作 (gōngzuò)", "trabajo / trabajar", "我在学校工作。(Wǒ zài xuéxiào gōngzuò.)", "Trabajo en una escuela."], ["医生 (yīshēng)", "médico/a", "她是医生。(Tā shì yīshēng.)", "Ella es médica."], ["学校 (xuéxiào)", "escuela", "我在学校学习。(Wǒ zài xuéxiào xuéxí.)", "Estudio en la escuela."]],
          ["是 para profesiones", "Con un sustantivo de profesión, usa 是: 我是学生 (soy estudiante). En mandarín no se añade un artículo equivalente a «un/una».", "我是 + profesión。\n他是医生。", [{ target: "她是老师。(Tā shì lǎoshī.)", translation: "Ella es profesora." }, { target: "我是学生。(Wǒ shì xuésheng.)", translation: "Soy estudiante." }], "No digas 我是一个学生 salvo que quieras enfatizar la cantidad; normalmente basta 我是学生.",],
          ["我___学生。", "是", "El verbo de identificación es 是.",],
          ["Conocer a alguien en el trabajo", "Una compañera te pregunta a qué te dedicas.", "同事", "你做什么工作？(Nǐ zuò shénme gōngzuò?)", "¿En qué trabajas?", "我是医生。(Wǒ shì yīshēng.)", "Soy médico/a.", "我有医生。(Wǒ yǒu yīshēng.)", "Tengo un médico."],
          ["Decir tu ocupación", "Elige una frase para decir que eres estudiante.", "我是学生。(Wǒ shì xuésheng.)", "Soy estudiante.", "我在学生。(Wǒ zài xuésheng.)"]
        ]),
        createMandarinLesson("zh-work", 2, [
          "Lugares y horarios de trabajo", "Decir dónde trabajas o estudias y mencionar una hora.",
          [["公司 (gōngsī)", "empresa", "我在公司工作。(Wǒ zài gōngsī gōngzuò.)", "Trabajo en una empresa."], ["上午 (shàngwǔ)", "por la mañana", "我上午有课。(Wǒ shàngwǔ yǒu kè.)", "Tengo clase por la mañana."], ["八点 (bā diǎn)", "las ocho", "我八点上班。(Wǒ bā diǎn shàngbān.)", "Empiezo a trabajar a las ocho."], ["下班 (xiàbān)", "terminar la jornada", "我五点下班。(Wǒ wǔ diǎn xiàbān.)", "Termino de trabajar a las cinco."]],
          ["En y 在", "在 (zài) delante de un lugar indica dónde sucede una acción: 我在公司工作. La hora suele colocarse antes del verbo: 我八点上班.", "我在 + lugar + verbo。\n我八点上班。", [{ target: "她在学校学习。(Tā zài xuéxiào xuéxí.)", translation: "Ella estudia en la escuela." }, { target: "我下午五点下班。(Wǒ xiàwǔ wǔ diǎn xiàbān.)", translation: "Termino de trabajar a las cinco de la tarde." }], "在 + lugar suele ir antes de la acción; la hora también se coloca antes del verbo.",],
          ["我___公司工作。", "在", "在 introduce el lugar donde trabajas.",],
          ["Hablar del horario", "Un compañero quiere saber dónde trabajas.", "同事", "你在哪儿工作？(Nǐ zài nǎr gōngzuò?)", "¿Dónde trabajas?", "我在公司工作。(Wǒ zài gōngsī gōngzuò.)", "Trabajo en una empresa.", "我公司是工作。(Wǒ gōngsī shì gōngzuò.)", "Mi empresa es trabajar."],
          ["Decir dónde estudias", "Elige una frase para decir que estudias en la escuela.", "我在学校学习。(Wǒ zài xuéxiào xuéxí.)", "Estudio en la escuela.", "我学校在学习是。(Wǒ xuéxiào zài xuéxí shì.)"]
        ]),
        createMandarinLesson("zh-work", 3, [
          "Habilidades y permisos", "Expresar una habilidad y pedir permiso de manera sencilla.",
          [["可以 (kěyǐ)", "poder / tener permiso", "我可以进来吗？(Wǒ kěyǐ jìnlái ma?)", "¿Puedo pasar?"], ["能 (néng)", "poder / ser capaz", "你能帮我吗？(Nǐ néng bāng wǒ ma?)", "¿Puedes ayudarme?"], ["写 (xiě)", "escribir", "我会写汉字。(Wǒ huì xiě Hànzì.)", "Sé escribir caracteres chinos."], ["汉字 (Hànzì)", "caracteres chinos", "这个汉字很简单。(Zhège Hànzì hěn jiǎndān.)", "Este carácter chino es muy sencillo."]],
          ["会, 能 y 可以", "会 se usa para una destreza aprendida; 能 expresa capacidad o posibilidad; 可以 suele pedir o conceder permiso. Las tres van antes del verbo.", "会写汉字 = saber escribir caracteres\n可以进来吗？= ¿Puedo pasar?", [{ target: "我会说中文。(Wǒ huì shuō Zhōngwén.)", translation: "Sé hablar chino." }, { target: "我可以坐这儿吗？(Wǒ kěyǐ zuò zhèr ma?)", translation: "¿Puedo sentarme aquí?" }], "El contexto importa: para pedir permiso en clase, 可以 suele ser la opción más natural.",],
          ["我___写汉字。", "会", "Elige el modal de una habilidad aprendida.",],
          ["En el aula", "Quieres pedir permiso para sentarte.", "老师", "我可以坐这儿吗？(Wǒ kěyǐ zuò zhèr ma?)", "¿Puedo sentarme aquí?", "可以，请坐。(Kěyǐ, qǐng zuò.)", "Sí, por favor, siéntate.", "我姓坐这儿。(Wǒ xìng zuò zhèr.)", "Me apellido sentarse aquí."],
          ["Pedir permiso", "Elige una pregunta para pedir permiso para entrar.", "我可以进来吗？(Wǒ kěyǐ jìnlái ma?)", "¿Puedo pasar?", "我会进来吗？(Wǒ huì jìnlái ma?)"]
        ]),
        createMandarinLesson("zh-work", 4, [
          "Aficiones y preferencias", "Hablar de una afición y decir qué te gusta hacer.",
          [["喜欢 (xǐhuan)", "gustar", "我喜欢看电影。(Wǒ xǐhuan kàn diànyǐng.)", "Me gusta ver películas."], ["听音乐 (tīng yīnyuè)", "escuchar música", "她喜欢听音乐。(Tā xǐhuan tīng yīnyuè.)", "A ella le gusta escuchar música."], ["运动 (yùndòng)", "hacer deporte", "我喜欢运动。(Wǒ xǐhuan yùndòng.)", "Me gusta hacer deporte."], ["看电影 (kàn diànyǐng)", "ver películas", "我们周末看电影。(Wǒmen zhōumò kàn diànyǐng.)", "Vemos películas el fin de semana."]],
          ["喜欢 + sustantivo o acción", "喜欢 va antes de lo que te gusta. Si es una acción, se conserva el verbo: 我喜欢听音乐. Para negar, usa 不喜欢.", "我喜欢 + actividad。\n我不喜欢喝咖啡。", [{ target: "他喜欢踢足球。(Tā xǐhuan tī zúqiú.)", translation: "A él le gusta jugar al fútbol." }, { target: "你喜欢什么？(Nǐ xǐhuan shénme?)", translation: "¿Qué te gusta?" }], "A diferencia del español, no se invierte el orden: primero la persona, luego 喜欢 y después la actividad.",],
          ["我喜欢___音乐。", "听", "La expresión es 听音乐, «escuchar música».",],
          ["Conversar en el descanso", "Un compañero pregunta qué afición tienes.", "同学", "你喜欢做什么？(Nǐ xǐhuan zuò shénme?)", "¿Qué te gusta hacer?", "我喜欢听音乐。(Wǒ xǐhuan tīng yīnyuè.)", "Me gusta escuchar música.", "我听喜欢音乐。(Wǒ tīng xǐhuan yīnyuè.)", "Yo escucho gustar música."],
          ["Expresar una preferencia", "Elige una frase para decir que te gusta ver películas.", "我喜欢看电影。(Wǒ xǐhuan kàn diànyǐng.)", "Me gusta ver películas.", "我看电影喜欢吗？(Wǒ kàn diànyǐng xǐhuan ma?)"]
        ])
      ]
    },
    {
      id: "zh-home",
      lessons: [
        createMandarinLesson("zh-home", 1, [
          "Habitaciones y muebles", "Nombrar habitaciones y muebles de una vivienda.",
          [["家 (jiā)", "casa / hogar", "我家很小。(Wǒ jiā hěn xiǎo.)", "Mi casa es pequeña."], ["房间 (fángjiān)", "habitación", "我的房间很干净。(Wǒ de fángjiān hěn gānjìng.)", "Mi habitación está muy limpia."], ["桌子 (zhuōzi)", "mesa", "桌子在房间里。(Zhuōzi zài fángjiān lǐ.)", "La mesa está en la habitación."], ["椅子 (yǐzi)", "silla", "这里有一把椅子。(Zhèlǐ yǒu yì bǎ yǐzi.)", "Aquí hay una silla."]],
          ["Clasificadores 个 y 把", "En chino, los sustantivos suelen llevar un clasificador después del número. 个 es muy general; 把 se usa con objetos que se agarran, como una silla.", "一个房间 = una habitación\n一把椅子 = una silla", [{ target: "房间里有一张桌子。(Fángjiān lǐ yǒu yì zhāng zhuōzi.)", translation: "Hay una mesa en la habitación." }, { target: "这里有两个椅子。(Zhèlǐ yǒu liǎng ge yǐzi.)", translation: "Aquí hay dos sillas." }], "Para una mesa plana suele usarse 张; memoriza cada clasificador junto con el sustantivo.",],
          ["一___椅子", "把", "El clasificador habitual de 椅子 es 把.",],
          ["Describir una habitación", "Alguien pregunta qué hay en tu habitación.", "朋友", "你的房间里有什么？(Nǐ de fángjiān lǐ yǒu shénme?)", "¿Qué hay en tu habitación?", "房间里有一张桌子和一把椅子。(Fángjiān lǐ yǒu yì zhāng zhuōzi hé yì bǎ yǐzi.)", "Hay una mesa y una silla en la habitación.", "我房间是桌子。(Wǒ fángjiān shì zhuōzi.)", "Mi habitación es una mesa."],
          ["Decir qué hay en casa", "Elige cómo decir «hay una silla en mi habitación».", "我的房间里有一把椅子。(Wǒ de fángjiān lǐ yǒu yì bǎ yǐzi.)", "Hay una silla en mi habitación.", "我的房间是一个椅子。(Wǒ de fángjiān shì yí ge yǐzi.)"]
        ]),
        createMandarinLesson("zh-home", 2, [
          "Ubicar objetos", "Decir dónde están objetos usando 这, 那 y 在.",
          [["这里 (zhèlǐ)", "aquí", "书在这里。(Shū zài zhèlǐ.)", "El libro está aquí."], ["那里 (nàlǐ)", "allí", "椅子在那里。(Yǐzi zài nàlǐ.)", "La silla está allí."], ["书 (shū)", "libro", "桌子上有一本书。(Zhuōzi shàng yǒu yì běn shū.)", "Hay un libro encima de la mesa."], ["上 (shàng)", "encima / arriba", "手机在桌子上。(Shǒujī zài zhuōzi shàng.)", "El móvil está encima de la mesa."]],
          ["在 para ubicación", "Para decir dónde está algo, usa sustantivo + 在 + lugar. Una palabra de posición como 上 puede ir detrás del objeto de referencia: 桌子上 (encima de la mesa).", "书在桌子上。\n杯子在这里。", [{ target: "手机在椅子上。(Shǒujī zài yǐzi shàng.)", translation: "El móvil está encima de la silla." }, { target: "那本书在那里。(Nà běn shū zài nàlǐ.)", translation: "Ese libro está allí." }], "在 también puede indicar el lugar de una acción; en esta estructura describe dónde se encuentra un objeto.",],
          ["书___桌子上。", "在", "Usa 在 para indicar dónde está el libro.",],
          ["Buscar un libro", "Preguntas dónde está el libro de la clase.", "同学", "书在哪里？(Shū zài nǎlǐ?)", "¿Dónde está el libro?", "书在桌子上。(Shū zài zhuōzi shàng.)", "El libro está encima de la mesa.", "书有桌子在。(Shū yǒu zhuōzi zài.)", "El libro tiene mesa en."],
          ["Ubicar un objeto", "Elige cómo decir que el teléfono está aquí.", "手机在这里。(Shǒujī zài zhèlǐ.)", "El teléfono está aquí.", "手机这里有。(Shǒujī zhèlǐ yǒu.)"]
        ]),
        createMandarinLesson("zh-home", 3, [
          "Describir una vivienda", "Describir una vivienda y decir si algo es grande o pequeño.",
          [["大 (dà)", "grande", "我家很大。(Wǒ jiā hěn dà.)", "Mi casa es grande."], ["小 (xiǎo)", "pequeño/a", "房间不小。(Fángjiān bù xiǎo.)", "La habitación no es pequeña."], ["干净 (gānjìng)", "limpio/a", "厨房很干净。(Chúfáng hěn gānjìng.)", "La cocina está muy limpia."], ["厨房 (chúfáng)", "cocina", "厨房在这里。(Chúfáng zài zhèlǐ.)", "La cocina está aquí."]],
          ["很 con adjetivos", "En una frase descriptiva, 很 suele ir entre el sujeto y el adjetivo: 房间很大. A menudo funciona como enlace natural y no significa «muy» con énfasis.", "房间很大。→ La habitación es grande.\n房间不大。→ La habitación no es grande.", [{ target: "我的家很干净。(Wǒ de jiā hěn gānjìng.)", translation: "Mi casa está muy limpia." }, { target: "厨房不大。(Chúfáng bú dà.)", translation: "La cocina no es grande." }], "Para negar un adjetivo usa 不 antes de él: 不大. Antes de un cuarto tono, 不 se pronuncia bú.",],
          ["我的房间___大。", "很", "En la descripción afirmativa se usa 很 antes del adjetivo.",],
          ["Visitar una casa", "Tu amiga pregunta cómo es tu casa.", "朋友", "你的家大吗？(Nǐ de jiā dà ma?)", "¿Tu casa es grande?", "我家不大，但是很干净。(Wǒ jiā bú dà, dànshì hěn gānjìng.)", "Mi casa no es grande, pero está muy limpia.", "我家不是很。(Wǒ jiā bú shì hěn.)", "Mi casa no es muy."],
          ["Describir tu hogar", "Elige una frase para decir que tu habitación es pequeña.", "我的房间很小。(Wǒ de fángjiān hěn xiǎo.)", "Mi habitación es pequeña.", "我的房间有小。(Wǒ de fángjiān yǒu xiǎo.)"]
        ])
      ]
    },
    {
      id: "zh-travel",
      lessons: [
        createMandarinLesson("zh-travel", 1, [
          "Lugares de la ciudad", "Preguntar por un lugar y nombrar destinos frecuentes.",
          [["地铁站 (dìtiězhàn)", "estación de metro", "地铁站在哪里？(Dìtiězhàn zài nǎlǐ?)", "¿Dónde está la estación de metro?"], ["学校 (xuéxiào)", "escuela", "学校在那儿。(Xuéxiào zài nàr.)", "La escuela está allí."], ["商店 (shāngdiàn)", "tienda", "商店在这儿。(Shāngdiàn zài zhèr.)", "La tienda está aquí."], ["医院 (yīyuàn)", "hospital", "医院在前面。(Yīyuàn zài qiánmiàn.)", "El hospital está adelante."]],
          ["Preguntar con 哪里", "哪里 (nǎlǐ) pregunta «dónde». En una pregunta sencilla conserva el orden: lugar + 在 + 哪里. También se oye 哪儿 (nǎr), especialmente en el norte.", "地铁站在哪里？\n商店在哪儿？", [{ target: "请问，医院在哪里？(Qǐngwèn, yīyuàn zài nǎlǐ?)", translation: "Disculpe, ¿dónde está el hospital?" }, { target: "学校在前面。(Xuéxiào zài qiánmiàn.)", translation: "La escuela está adelante." }], "这儿 y 那儿 son formas habladas de 这里 y 那里.",],
          ["地铁站在___？", "哪里", "El interrogativo para preguntar dónde es 哪里.",],
          ["En la calle", "Necesitas encontrar la estación de metro.", "路人", "请问，地铁站在哪里？(Qǐngwèn, dìtiězhàn zài nǎlǐ?)", "Disculpe, ¿dónde está la estación de metro?", "地铁站在前面。(Dìtiězhàn zài qiánmiàn.)", "La estación de metro está adelante.", "地铁站是星期几？(Dìtiězhàn shì xīngqī jǐ?)", "¿Qué día de la semana es la estación de metro?"],
          ["Preguntar por un lugar", "Elige la pregunta para encontrar la tienda.", "请问，商店在哪里？(Qǐngwèn, shāngdiàn zài nǎlǐ?)", "Disculpe, ¿dónde está la tienda?", "商店叫什么名字？(Shāngdiàn jiào shénme míngzi?)"]
        ]),
        createMandarinLesson("zh-travel", 2, [
          "Direcciones sencillas", "Comprender indicaciones sencillas para ir a un lugar.",
          [["左边 (zuǒbian)", "lado izquierdo", "银行在左边。(Yínháng zài zuǒbian.)", "El banco está a la izquierda."], ["右边 (yòubian)", "lado derecho", "商店在右边。(Shāngdiàn zài yòubian.)", "La tienda está a la derecha."], ["前面 (qiánmiàn)", "delante / adelante", "学校在前面。(Xuéxiào zài qiánmiàn.)", "La escuela está adelante."], ["走 (zǒu)", "caminar / ir", "一直走。(Yìzhí zǒu.)", "Sigue recto."]],
          ["Indicaciones con palabras de posición", "Usa 在 antes de una ubicación: 在左边, 在前面. Para dar una instrucción breve, el verbo puede ir solo: 一直走 (sigue recto).", "一直走，然后向右。\n银行在左边。", [{ target: "请一直走。(Qǐng yìzhí zǒu.)", translation: "Por favor, sigue recto." }, { target: "咖啡店在右边。(Kāfēidiàn zài yòubian.)", translation: "La cafetería está a la derecha." }], "Añade 请 para hacer más amable una indicación o instrucción.",],
          ["银行在___边。", "左", "左边 significa «a la izquierda».",],
          ["Pedir direcciones", "Preguntas cómo llegar a la escuela.", "路人", "学校怎么走？(Xuéxiào zěnme zǒu?)", "¿Cómo se va a la escuela?", "一直走，学校在左边。(Yìzhí zǒu, xuéxiào zài zuǒbian.)", "Sigue recto; la escuela está a la izquierda.", "学校在你叫什么？(Xuéxiào zài nǐ jiào shénme?)", "La escuela está cómo te llamas."],
          ["Dar una indicación", "Elige una indicación para que alguien siga recto.", "请一直走。(Qǐng yìzhí zǒu.)", "Por favor, sigue recto.", "请一直左边。(Qǐng yìzhí zuǒbian.)"]
        ]),
        createMandarinLesson("zh-travel", 3, [
          "Transporte y planes de viaje", "Nombrar transportes y decir cómo vas a un lugar.",
          [["公共汽车 (gōnggòngqìchē)", "autobús", "我坐公共汽车去学校。(Wǒ zuò gōnggòngqìchē qù xuéxiào.)", "Voy a la escuela en autobús."], ["坐 (zuò)", "tomar / ir en transporte", "我坐地铁回家。(Wǒ zuò dìtiě huí jiā.)", "Vuelvo a casa en metro."], ["去 (qù)", "ir", "我去商店。(Wǒ qù shāngdiàn.)", "Voy a la tienda."], ["回家 (huí jiā)", "volver a casa", "她晚上回家。(Tā wǎnshang huí jiā.)", "Ella vuelve a casa por la noche."]],
          ["坐 + transporte + 去", "Para decir cómo te desplazas, usa 坐 + transporte + 去 + destino. Para volver a casa, se dice 回家, sin añadir 在.", "我坐地铁去公司。\n他坐公共汽车回家。", [{ target: "我们坐地铁去学校。(Wǒmen zuò dìtiě qù xuéxiào.)", translation: "Vamos a la escuela en metro." }, { target: "她坐公共汽车回家。(Tā zuò gōnggòngqìchē huí jiā.)", translation: "Ella vuelve a casa en autobús." }], "坐 es sentarse o tomar un transporte según el contexto; caminar se expresa con 走.",],
          ["我___地铁去学校。", "坐", "Antes del transporte se usa 坐.",],
          ["Organizar el trayecto", "Una amiga pregunta cómo vas a la estación.", "朋友", "你怎么去地铁站？(Nǐ zěnme qù dìtiězhàn?)", "¿Cómo vas a la estación de metro?", "我坐公共汽车去。(Wǒ zuò gōnggòngqìchē qù.)", "Voy en autobús.", "我叫公共汽车。(Wǒ jiào gōnggòngqìchē.)", "Me llamo autobús."],
          ["Decir cómo viajas", "Elige cómo decir «voy a casa en metro».", "我坐地铁回家。(Wǒ zuò dìtiě huí jiā.)", "Vuelvo a casa en metro.", "我地铁坐家去。(Wǒ dìtiě zuò jiā qù.)"]
        ])
      ]
    },
    {
      id: "zh-shopping",
      lessons: [
        createMandarinLesson("zh-shopping", 1, [
          "Comida y bebidas", "Nombrar comida y decir qué quieres comer o beber.",
          [["水 (shuǐ)", "agua", "请给我一杯水。(Qǐng gěi wǒ yì bēi shuǐ.)", "Por favor, dame un vaso de agua."], ["米饭 (mǐfàn)", "arroz cocido", "我喜欢吃米饭。(Wǒ xǐhuan chī mǐfàn.)", "Me gusta comer arroz."], ["茶 (chá)", "té", "她喝茶。(Tā hē chá.)", "Ella bebe té."], ["吃 (chī)", "comer", "我们中午吃面条。(Wǒmen zhōngwǔ chī miàntiáo.)", "Comemos fideos al mediodía."]],
          ["吃 y 喝", "吃 (chī) se usa para comer y 喝 (hē) para beber. Si dices lo que quieres, 想 va antes del verbo: 我想喝茶.", "我想吃米饭。\n我想喝水。", [{ target: "我想喝一杯茶。(Wǒ xiǎng hē yì bēi chá.)", translation: "Quiero beber una taza de té." }, { target: "她想吃面条。(Tā xiǎng chī miàntiáo.)", translation: "Ella quiere comer fideos." }], "想 + verbo expresa deseo; para una petición cortés en un restaurante, puedes decir 我想要…",],
          ["我想___水。", "喝", "Para beber agua se usa 喝.",],
          ["En un restaurante", "El camarero pregunta qué quieres beber.", "服务员", "你想喝什么？(Nǐ xiǎng hē shénme?)", "¿Qué quieres beber?", "我想喝一杯水。(Wǒ xiǎng hē yì bēi shuǐ.)", "Quiero un vaso de agua.", "我想吃一杯水。(Wǒ xiǎng chī yì bēi shuǐ.)", "Quiero comer un vaso de agua."],
          ["Pedir algo de beber", "Elige cómo pedir un té.", "我想喝茶。(Wǒ xiǎng hē chá.)", "Quiero beber té.", "我喝想茶。(Wǒ hē xiǎng chá.)"]
        ]),
        createMandarinLesson("zh-shopping", 2, [
          "Pedir en un restaurante", "Pedir un plato y usar una expresión cortés.",
          [["请给我 (qǐng gěi wǒ)", "por favor, deme", "请给我菜单。(Qǐng gěi wǒ càidān.)", "Por favor, deme el menú."], ["菜单 (càidān)", "menú", "请给我菜单。(Qǐng gěi wǒ càidān.)", "Por favor, deme el menú."], ["面条 (miàntiáo)", "fideos", "我要一碗面条。(Wǒ yào yì wǎn miàntiáo.)", "Quiero un tazón de fideos."], ["好吃 (hǎochī)", "rico/a (de comida)", "这个菜很好吃。(Zhège cài hěn hǎochī.)", "Este plato está muy rico."]],
          ["Peticiones con 请给我", "请给我… significa «por favor, deme…». Para pedir comida también es natural 我要…; el clasificador depende del recipiente: 一碗面条 (un tazón de fideos).", "请给我菜单。\n我要一碗面条。", [{ target: "请给我一杯茶。(Qǐng gěi wǒ yì bēi chá.)", translation: "Por favor, deme una taza de té." }, { target: "我要一个苹果。(Wǒ yào yí ge píngguǒ.)", translation: "Quiero una manzana." }], "En una situación de servicio, 请 y 谢谢 hacen que la petición suene cortés.",],
          ["请给我一___面条。", "碗", "面条 se sirve habitualmente en un tazón: 一碗.",],
          ["Pedir la comida", "Estás en un restaurante y quieres un tazón de fideos.", "服务员", "您想吃什么？(Nín xiǎng chī shénme?)", "¿Qué desea comer?", "请给我一碗面条。(Qǐng gěi wǒ yì wǎn miàntiáo.)", "Por favor, deme un tazón de fideos.", "请给我一杯面条。(Qǐng gěi wǒ yì bēi miàntiáo.)", "Por favor, deme una taza de fideos."],
          ["Pedir con cortesía", "Elige una frase natural para pedir el menú.", "请给我菜单。(Qǐng gěi wǒ càidān.)", "Por favor, deme el menú.", "我菜单是给。(Wǒ càidān shì gěi.)"]
        ]),
        createMandarinLesson("zh-shopping", 3, [
          "Comprar y preguntar el precio", "Preguntar cuánto cuesta algo y comprar una cantidad.",
          [["多少钱 (duōshao qián)", "cuánto cuesta", "这个多少钱？(Zhège duōshao qián?)", "¿Cuánto cuesta esto?"], ["钱 (qián)", "dinero", "我没有很多钱。(Wǒ méiyǒu hěn duō qián.)", "No tengo mucho dinero."], ["块 (kuài)", "yuan (coloquial)", "一杯茶十块。(Yì bēi chá shí kuài.)", "Un té cuesta diez yuanes."], ["苹果 (píngguǒ)", "manzana", "我要两个苹果。(Wǒ yào liǎng ge píngguǒ.)", "Quiero dos manzanas."]],
          ["Preguntar cuánto cuesta", "Para preguntar el precio, di 多少钱 al final: 这个多少钱？块 es una forma coloquial de contar yuanes.", "这个多少钱？\n十块 = diez yuanes", [{ target: "这个苹果多少钱？(Zhège píngguǒ duōshao qián?)", translation: "¿Cuánto cuesta esta manzana?" }, { target: "两个苹果，十块。(Liǎng ge píngguǒ, shí kuài.)", translation: "Dos manzanas, diez yuanes." }], "Después de 两 se usa un clasificador: 两个苹果 (dos manzanas).",],
          ["这个苹果多少___？", "钱", "Completa la expresión para preguntar el precio.",],
          ["En el mercado", "Quieres comprar dos manzanas y preguntar el precio.", "店员", "你要几个苹果？(Nǐ yào jǐ ge píngguǒ?)", "¿Cuántas manzanas quieres?", "我要两个苹果。(Wǒ yào liǎng ge píngguǒ.)", "Quiero dos manzanas.", "我要两块苹果。(Wǒ yào liǎng kuài píngguǒ.)", "Quiero dos trozos de dinero de manzana."],
          ["Comprar fruta", "Elige cómo pedir dos manzanas.", "我要两个苹果。(Wǒ yào liǎng ge píngguǒ.)", "Quiero dos manzanas.", "我想两苹果钱。(Wǒ xiǎng liǎng píngguǒ qián.)"]
        ]),
        createMandarinLesson("zh-shopping", 4, [
          "Cantidades y clasificadores", "Contar objetos sencillos usando el clasificador adecuado.",
          [["一个 (yí ge)", "uno/a (clasificador general)", "我要一个苹果。(Wǒ yào yí ge píngguǒ.)", "Quiero una manzana."], ["两本 (liǎng běn)", "dos (libros)", "我有两本书。(Wǒ yǒu liǎng běn shū.)", "Tengo dos libros."], ["一杯 (yì bēi)", "un vaso / una taza", "请给我一杯水。(Qǐng gěi wǒ yì bēi shuǐ.)", "Por favor, deme un vaso de agua."], ["一张 (yì zhāng)", "una hoja / superficie plana", "桌子上有一张纸。(Zhuōzi shàng yǒu yì zhāng zhǐ.)", "Hay una hoja de papel en la mesa."]],
          ["Número + clasificador + sustantivo", "Coloca un clasificador entre el número y el sustantivo. 本 se usa con libros; 杯 con bebidas; 张 con papel y superficies planas; 个 es el general.", "两本书 = dos libros\n一杯茶 = una taza de té", [{ target: "我有三本书。(Wǒ yǒu sān běn shū.)", translation: "Tengo tres libros." }, { target: "请给我两杯水。(Qǐng gěi wǒ liǎng bēi shuǐ.)", translation: "Por favor, deme dos vasos de agua." }], "Con dos objetos se usa normalmente 两 (liǎng) antes del clasificador, no 二 (èr).",],
          ["两___书", "本", "El clasificador para libros es 本.",],
          ["En una librería", "La dependienta pregunta cuántos libros necesitas.", "店员", "你要几本书？(Nǐ yào jǐ běn shū?)", "¿Cuántos libros quieres?", "我要两本书。(Wǒ yào liǎng běn shū.)", "Quiero dos libros.", "我要两杯书。(Wǒ yào liǎng bēi shū.)", "Quiero dos tazas de libros."],
          ["Contar libros", "Elige la frase correcta para decir «tengo tres libros».", "我有三本书。(Wǒ yǒu sān běn shū.)", "Tengo tres libros.", "我有三张书。(Wǒ yǒu sān zhāng shū.)"]
        ])
      ]
    },
    {
      id: "zh-stories",
      lessons: [
        createMandarinLesson("zh-stories", 1, [
          "El tiempo y las estaciones", "Describir el tiempo con adjetivos sencillos.",
          [["天气 (tiānqì)", "tiempo (atmosférico)", "今天天气很好。(Jīntiān tiānqì hěn hǎo.)", "Hoy hace muy buen tiempo."], ["热 (rè)", "caluroso", "今天很热。(Jīntiān hěn rè.)", "Hoy hace mucho calor."], ["冷 (lěng)", "frío", "冬天很冷。(Dōngtiān hěn lěng.)", "En invierno hace mucho frío."], ["下雨 (xiàyǔ)", "llover", "今天下雨。(Jīntiān xiàyǔ.)", "Hoy llueve."]],
          ["Describir el tiempo", "Para describir el tiempo usa 天气 + 很 + adjetivo. Para decir que llueve, el verbo es 下雨; no necesita un sujeto equivalente a «está».", "今天天气很热。\n明天下雨。", [{ target: "今天不冷。(Jīntiān bù lěng.)", translation: "Hoy no hace frío." }, { target: "冬天天气很冷。(Dōngtiān tiānqì hěn lěng.)", translation: "En invierno hace mucho frío." }], "El tiempo puede describirse directamente con un verbo: 下雨 significa «llover».",],
          ["今天天气很___。", "热", "热 describe un día caluroso.",],
          ["Hacer planes", "Una amiga pregunta cómo está el tiempo hoy.", "朋友", "今天天气怎么样？(Jīntiān tiānqì zěnmeyàng?)", "¿Qué tiempo hace hoy?", "今天很热。(Jīntiān hěn rè.)", "Hoy hace mucho calor.", "今天很喝。(Jīntiān hěn hē.)", "Hoy bebe mucho."],
          ["Describir el clima", "Elige cómo decir «hoy llueve».", "今天下雨。(Jīntiān xiàyǔ.)", "Hoy llueve.", "今天有下雨很。(Jīntiān yǒu xiàyǔ hěn.)"]
        ]),
        createMandarinLesson("zh-stories", 2, [
          "Planes para el fin de semana", "Decir qué quieres hacer y proponer un plan sencillo.",
          [["周末 (zhōumò)", "fin de semana", "周末我想休息。(Zhōumò wǒ xiǎng xiūxi.)", "Quiero descansar el fin de semana."], ["想 (xiǎng)", "querer / tener ganas de", "我想去公园。(Wǒ xiǎng qù gōngyuán.)", "Quiero ir al parque."], ["公园 (gōngyuán)", "parque", "我们去公园吧。(Wǒmen qù gōngyuán ba.)", "Vamos al parque."], ["一起 (yìqǐ)", "juntos", "我们一起吃饭。(Wǒmen yìqǐ chīfàn.)", "Comemos juntos."]],
          ["想 + verbo y la partícula 吧", "想 expresa un deseo antes de un verbo: 我想去公园. Al final, 吧 suaviza una propuesta: 我们去公园吧 (vamos al parque).", "我想看电影。\n我们一起去吧。", [{ target: "周末我想休息。(Zhōumò wǒ xiǎng xiūxi.)", translation: "Quiero descansar el fin de semana." }, { target: "我们一起吃饭吧。(Wǒmen yìqǐ chīfàn ba.)", translation: "Comamos juntos." }], "吧 convierte una idea en propuesta amable; no se usa como verbo.",],
          ["我想___公园。", "去", "去 significa «ir»; sigue a 想.",],
          ["Proponer una salida", "Invitas a un compañero a ir al parque el fin de semana.", "同学", "周末你想做什么？(Zhōumò nǐ xiǎng zuò shénme?)", "¿Qué quieres hacer el fin de semana?", "我们一起去公园吧。(Wǒmen yìqǐ qù gōngyuán ba.)", "Vamos juntos al parque.", "我们一起公园是。(Wǒmen yìqǐ gōngyuán shì.)", "Nosotros juntos parque somos."],
          ["Hacer una propuesta", "Elige cómo proponer que vayan juntos al parque.", "我们一起去公园吧。(Wǒmen yìqǐ qù gōngyuán ba.)", "Vamos juntos al parque.", "我们公园一起吗？(Wǒmen gōngyuán yìqǐ ma?)"]
        ]),
        createMandarinLesson("zh-stories", 3, [
          "Contar una actividad terminada", "Decir que hiciste una actividad sencilla recientemente.",
          [["昨天 (zuótiān)", "ayer", "昨天我去学校。(Zuótiān wǒ qù xuéxiào.)", "Ayer fui a la escuela."], ["看了 (kàn le)", "vi / miré (acción terminada)", "我看了电影。(Wǒ kàn le diànyǐng.)", "Vi una película."], ["吃了 (chī le)", "comí (acción terminada)", "我们吃了米饭。(Wǒmen chī le mǐfàn.)", "Comimos arroz."], ["电影 (diànyǐng)", "película", "这部电影很好看。(Zhè bù diànyǐng hěn hǎokàn.)", "Esta película es muy buena."]],
          ["了 para una acción terminada", "了 después del verbo puede indicar una acción completada: 我看了电影 (vi una película). La expresión de tiempo, como 昨天, suele ir antes del sujeto o del verbo.", "昨天我看了电影。\n我吃了饭。", [{ target: "昨天她喝了茶。(Zuótiān tā hē le chá.)", translation: "Ayer ella bebió té." }, { target: "我昨天去了商店。(Wǒ zuótiān qù le shāngdiàn.)", translation: "Ayer fui a la tienda." }], "了 no equivale automáticamente al pasado en español; marca aspecto terminado y su uso depende del contexto.",],
          ["昨天我看___电影。", "了", "Coloca 了 después del verbo para indicar la acción terminada.",],
          ["Hablar del fin de semana", "Un amigo pregunta qué hiciste ayer.", "朋友", "你昨天做什么了？(Nǐ zuótiān zuò shénme le?)", "¿Qué hiciste ayer?", "我看了电影。(Wǒ kàn le diànyǐng.)", "Vi una película.", "我电影是很好。(Wǒ diànyǐng shì hěn hǎo.)", "Yo película soy buena."],
          ["Contar algo que hiciste", "Elige cómo decir «ayer comí arroz».", "昨天我吃了米饭。(Zuótiān wǒ chī le mǐfàn.)", "Ayer comí arroz.", "昨天我米饭吃是。(Zuótiān wǒ mǐfàn chī shì.)"]
        ])
      ]
    }
  ]
};

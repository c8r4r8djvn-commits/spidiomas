function createJapaneseLesson(unitId, index, data) {
  const [title, objective, vocabulary, grammar, fill, dialogue, production] = data;
  const [word, alternative, third] = vocabulary;
  return {
    id: `${unitId}-${index}`,
    title,
    minutes: 7,
    objective,
    vocabulary: vocabulary.map(([target, translation, exampleTarget, exampleTranslation, pronunciation]) => ({
      target,
      ...(pronunciation ? { pronunciation } : {}),
      translation,
      exampleTarget,
      exampleTranslation
    })),
    steps: [
      {
        type: "vocabulary",
        title: "Escucha, lee y relaciona",
        instruction: "Lee las expresiones, escucha su pronunciación y repite en voz alta.",
        itemIds: vocabulary.map(([target]) => target)
      },
      {
        type: "grammar",
        title: grammar[0],
        explanation: grammar[1],
        pattern: grammar[2],
        examples: grammar[3],
        tip: grammar[4]
      },
      {
        type: "multipleChoice",
        title: "Comprueba el vocabulario",
        prompt: `¿Qué expresión significa «${word[1]}»?`,
        options: [word[0], alternative[0], third[0]],
        answer: word[0],
        feedback: `「${word[0]}」significa «${word[1]}».`
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
          target: dialogue[3],
          translation: dialogue[4],
          options: [
            { target: dialogue[5], translation: dialogue[6], correct: true },
            { target: dialogue[7], translation: dialogue[8], correct: false }
          ]
        }]
      },
      {
        type: "production",
        title: production[0],
        prompt: production[1],
        options: [production[2], production[4]],
        answer: production[2],
        model: production[2],
        translation: production[3]
      }
    ]
  };
}

window.JAPANESE_A1_CURRICULUM = {
  metadata: {
    language: "ja",
    languageName: "Japonés",
    speechLanguage: "ja-JP",
    supportLanguage: "es",
    level: "A1",
    audience: "Hispanohablantes que empiezan a estudiar japonés",
    estimatedMinutes: 203
  },
  roadmap: [
    { id: "ja-greetings", title: "Saludos y presentaciones", canDo: "Saludar, presentarte, decir de dónde eres y tener un primer intercambio.", grammar: "です, は, か y despedidas", sounds: "vocales, ritmo silábico y saludos", vocabulary: "saludos, cortesía y nombres", game: "parejas de presentación" },
    { id: "ja-details", title: "Datos personales y números", canDo: "Preguntar por nombre, país, edad, teléfono y fecha.", grammar: "preguntas con 何/どこ, números y の", sounds: "números y vocales largas", vocabulary: "países, idiomas, números y calendario", game: "bingo de números" },
    { id: "ja-family", title: "Familia y vida diaria", canDo: "Presentar a tu familia y hablar de lo que haces durante el día.", grammar: "これ/それ, の, います y verbos en ます", sounds: "ritmo de frases y vocales", vocabulary: "familia, personas y actividades cotidianas", game: "árbol familiar" },
    { id: "ja-work", title: "Estudio, trabajo y gustos", canDo: "Hablar de ocupación, habilidades, horarios y preferencias.", grammar: "で, に, できます, 好きです y たいです", sounds: "entonación de preguntas y ritmo", vocabulary: "estudios, profesiones, horarios y aficiones", game: "entrevista por parejas" },
    { id: "ja-home", title: "Mi casa y dónde están las cosas", canDo: "Nombrar habitaciones y ubicar objetos y personas.", grammar: "あります/います y partículas de lugar", sounds: "lectura de kana y palabras compuestas", vocabulary: "habitaciones, muebles y objetos", game: "¿dónde está?" },
    { id: "ja-travel", title: "Moverse por la ciudad", canDo: "Preguntar dónde queda un lugar, pedir indicaciones y usar transporte.", grammar: "へ, で, から, まで y ください", sounds: "entonación ascendente en preguntas", vocabulary: "lugares, direcciones y transporte", game: "mapa de la ciudad" },
    { id: "ja-shopping", title: "Comida, compras y restaurante", canDo: "Pedir comida, preguntar precios y comprar cantidades sencillas.", grammar: "contadores básicos, を, いくら y ほしいです", sounds: "ritmo cortés y vocales largas", vocabulary: "comida, bebidas, precios y cantidades", game: "mercado de clase" },
    { id: "ja-stories", title: "Planes, tiempo y experiencias", canDo: "Hablar del tiempo, proponer un plan y contar una actividad pasada.", grammar: "ました, ませんでした, たいです y conectores", sounds: "entonación narrativa y pausas", vocabulary: "tiempo, ocio, lugares y expresiones temporales", game: "plan de fin de semana" }
  ],
  units: [
    {
      id: "ja-greetings",
      lessons: [
        createJapaneseLesson("ja-greetings", 1, [
          "Saludar y despedirse", "Elegir saludos y despedidas sencillas según el momento.",
          [["こんにちは", "hola / buenas tardes", "こんにちは。", "Hola."], ["おはようございます", "buenos días (cortés)", "おはようございます。", "Buenos días."], ["こんばんは", "buenas tardes/noches (al saludar)", "こんばんは。", "Buenas tardes."], ["さようなら", "adiós", "さようなら。また明日。", "Adiós. Hasta mañana."]],
          ["Saludos según el momento", "こんにちは es un saludo habitual durante el día. おはようございます se usa por la mañana y es cortés; con amigos se suele decir おはよう. こんばんは se usa al saludar por la tarde-noche.", "おはようございます。→ Buenos días.\nこんにちは。→ Hola.\nこんばんは。→ Buenas tardes/noches.", [{ target: "こんにちは。", translation: "Hola." }, { target: "さようなら。", translation: "Adiós." }], "さようなら puede sonar a despedida definitiva; entre conocidos también se usan また明日 (hasta mañana) o じゃあね (hasta luego, informal)."],
          ["おはようございま___。", "す", "Completa la forma cortés del saludo de la mañana.",],
          ["Llegar a clase", "Llegas por la mañana a tu primera clase de japonés.", "先生", "おはようございます。", "Buenos días.", "おはようございます。", "Buenos días.", "さようなら。", "Adiós."],
          ["Saludar por la mañana", "Elige un saludo cortés para llegar por la mañana.", "おはようございます。", "Buenos días.", "おやすみなさい。"]
        ]),
        createJapaneseLesson("ja-greetings", 2, [
          "Decir tu nombre", "Presentarte y preguntar el nombre de otra persona.",
          [["はじめまして", "encantado/a de conocerte", "はじめまして。", "Encantado/a de conocerte."], ["わたし", "yo", "わたしはマリアです。", "Soy María."], ["名前", "nombre", "お名前は何ですか。", "¿Cómo se llama?", "なまえ"], ["どうぞよろしく", "mucho gusto / cuento contigo", "どうぞよろしくお願いします。", "Mucho gusto.", "どうぞよろしく"]],
          ["Presentarse con は y です", "Para presentarte, usa わたしは + nombre + です. La partícula は marca el tema y se pronuncia wa. En una primera presentación, はじめまして y どうぞよろしくお願いします son fórmulas naturales.", "わたしはマリアです。\nはじめまして。", [{ target: "わたしはルイスです。", translation: "Soy Luis." }, { target: "お名前は何ですか。", translation: "¿Cómo se llama?" }], "En japonés suele omitirse わたし cuando el contexto ya deja claro quién habla.",],
          ["わたしはマリア___。", "です", "です cierra una presentación cortés.",],
          ["Conocer a una compañera", "Te presentan a alguien en un curso.", "ゆき", "お名前は何ですか。", "¿Cómo se llama?", "わたしはマリアです。はじめまして。", "Soy María. Encantada de conocerte.", "さようなら、先生。", "Adiós, profesor/a."],
          ["Presentarte", "Elige una frase natural para decir tu nombre.", "わたしはマリアです。", "Soy María.", "わたしマリアはです。"]
        ]),
        createJapaneseLesson("ja-greetings", 3, [
          "Preguntar cómo está alguien", "Preguntar cómo está una persona y responder con cortesía.",
          [["お元気ですか", "¿cómo está?", "お元気ですか。", "¿Cómo está?", "おげんきですか"], ["元気です", "estoy bien / está bien", "はい、元気です。", "Sí, estoy bien.", "げんきです"], ["はい", "sí", "はい、そうです。", "Sí, así es."], ["いいえ", "no", "いいえ、ちがいます。", "No, no es así."]],
          ["Preguntas corteses con か", "Añade か al final de una frase cortés con です para hacer una pregunta: 元気ですか. はい es «sí» e いいえ es «no».", "元気です。→ Estoy bien.\n元気ですか。→ ¿Está bien?", [{ target: "はい、元気です。", translation: "Sí, estoy bien." }, { target: "いいえ、元気ではありません。", translation: "No, no estoy bien." }], "En una conversación cercana puede omitirse お元気ですか; la versión completa suena cortés.",],
          ["元気です___。", "か", "La partícula de pregunta va al final.",],
          ["Al comenzar una reunión", "Una compañera te pregunta cortésmente cómo estás.", "同僚", "お元気ですか。", "¿Cómo está?", "はい、元気です。ありがとうございます。", "Sí, estoy bien. Gracias.", "さようなら。", "Adiós."],
          ["Responder cómo estás", "Elige una respuesta positiva y cortés.", "はい、元気です。", "Sí, estoy bien.", "いいえ、元気です。"]
        ]),
        createJapaneseLesson("ja-greetings", 4, [
          "Dar las gracias y pedir disculpas", "Usar expresiones básicas de agradecimiento y disculpa.",
          [["ありがとうございます", "muchas gracias", "ありがとうございます。", "Muchas gracias."], ["すみません", "disculpe / lo siento", "すみません、もう一度お願いします。", "Disculpe, una vez más, por favor."], ["お願いします", "por favor / se lo pido", "よろしくお願いします。", "Mucho gusto / cuento con usted."], ["どういたしまして", "de nada", "どういたしまして。", "De nada."]],
          ["Expresiones de cortesía", "ありがとうございます expresa agradecimiento cortés. すみません sirve para disculparse o llamar la atención. お願いします se usa al pedir algo o al cerrar una presentación.", "ありがとうございます。→ Muchas gracias.\nすみません。→ Disculpe / lo siento.", [{ target: "ありがとうございます。", translation: "Muchas gracias." }, { target: "すみません。", translation: "Disculpe." }], "En una tienda, すみません puede servir para llamar amablemente al personal.",],
          ["ありがとうございま___。", "す", "La forma cortés completa termina en ございます.",],
          ["Pedir ayuda", "Quieres llamar la atención de una persona para pedir ayuda.", "店員", "はい、何でしょうか。", "Sí, ¿qué necesita?", "すみません、お願いします。", "Disculpe, por favor.", "どういたしまして。", "De nada."],
          ["Dar las gracias", "Elige la expresión cortés para agradecer.", "ありがとうございます。", "Muchas gracias.", "お元気ですか。"]
        ])
      ]
    },
    {
      id: "ja-details",
      lessons: [
        createJapaneseLesson("ja-details", 1, [
          "Países y nacionalidades", "Decir de dónde eres y preguntar por el país de alguien.",
          [["スペイン", "España", "スペインから来ました。", "Vengo de España."], ["日本", "Japón", "日本はきれいです。", "Japón es bonito.", "にほん"], ["国", "país", "お国はどちらですか。", "¿De qué país es?", "くに"], ["来ました", "vine / he venido", "スペインから来ました。", "Vengo de España.", "きました"]],
          ["País + 人 y から来ました", "Para decir nacionalidad, añade 人 al país: スペイン人. Para decir de dónde vienes, usa país + から来ました. から marca el origen.", "スペイン人です。→ Soy español/a.\nスペインから来ました。→ Vengo de España.", [{ target: "日本人です。", translation: "Soy japonés/a." }, { target: "メキシコから来ました。", translation: "Vengo de México." }], "Los nombres de muchos países se escriben en katakana; 人 se lee じん en los gentilicios.",],
          ["スペイン___来ました。", "から", "から marca el lugar de origen.",],
          ["Presentaciones internacionales", "Una compañera pregunta de dónde vienes.", "クラスメート", "どちらから来ましたか。", "¿De dónde viene?", "スペインから来ました。", "Vengo de España.", "スペインに住みました。", "Viví en España."],
          ["Decir tu país", "Elige cómo decir que eres de Japón.", "日本から来ました。", "Vengo de Japón.", "日本を来ました。"]
        ]),
        createJapaneseLesson("ja-details", 2, [
          "Idiomas y estudios", "Decir qué idioma estudias y preguntar si alguien habla japonés.",
          [["日本語", "idioma japonés", "日本語を勉強します。", "Estudio japonés.", "にほんご"], ["スペイン語", "idioma español", "スペイン語を話します。", "Hablo español.", "スペインご"], ["勉強します", "estudiar", "毎日、日本語を勉強します。", "Estudio japonés todos los días.", "べんきょうします"], ["話します", "hablar", "日本語を話します。", "Hablo japonés.", "はなします"]],
          ["を con actividades", "La partícula を marca el objeto directo de un verbo. Se escribe を y normalmente se pronuncia o: 日本語を勉強します (estudio japonés).", "日本語を勉強します。\nスペイン語を話します。", [{ target: "英語を勉強します。", translation: "Estudio inglés." }, { target: "日本語を話しますか。", translation: "¿Habla japonés?" }], "La partícula を se escribe con を aunque su sonido moderno sea o.",],
          ["日本語___勉強します。", "を", "Marca lo que estudias con la partícula de objeto.",],
          ["En una escuela de idiomas", "Una compañera quiere saber qué idioma estudias.", "先生", "何語を勉強しますか。", "¿Qué idioma estudia?", "日本語を勉強します。", "Estudio japonés.", "日本語が勉強です。", "El japonés es estudio."],
          ["Decir qué estudias", "Elige cómo decir «estudio japonés».", "日本語を勉強します。", "Estudio japonés.", "日本語に勉強します。"]
        ]),
        createJapaneseLesson("ja-details", 3, [
          "Números y edad", "Contar hasta cien y decir tu edad de manera sencilla.",
          [["一", "uno", "一つください。", "Uno, por favor.", "ひとつ"], ["三", "tres", "三人います。", "Hay tres personas.", "さん"], ["二十歳", "veinte años de edad", "二十歳です。", "Tengo veinte años.", "はたち"], ["何歳", "cuántos años", "何歳ですか。", "¿Cuántos años tiene?", "なんさい"]],
          ["Números y edad", "Para preguntar la edad se dice 何歳ですか. La respuesta se forma con número + 歳 + です. Veinte años tiene una lectura especial: 二十歳 (はたち).", "二十歳です。→ Tengo veinte años.\n何歳ですか。→ ¿Cuántos años tiene?", [{ target: "十八歳です。", translation: "Tengo dieciocho años." }, { target: "何歳ですか。", translation: "¿Cuántos años tiene?" }], "Al preguntar a una persona adulta, puede ser más cortés no preguntar la edad si no hace falta.",],
          ["二十___です。", "歳", "El contador de edad es 歳.",],
          ["En una conversación", "Tu compañero te pregunta la edad.", "クラスメート", "何歳ですか。", "¿Cuántos años tienes?", "二十歳です。", "Tengo veinte años.", "二十人です。", "Son veinte personas."],
          ["Decir tu edad", "Elige cómo decir «tengo veinte años».", "二十歳です。", "Tengo veinte años.", "二十人です。"]
        ]),
        createJapaneseLesson("ja-details", 4, [
          "Teléfono y datos de contacto", "Preguntar un número de teléfono y pedir que lo repitan.",
          [["電話番号", "número de teléfono", "電話番号は何ですか。", "¿Cuál es su número de teléfono?", "でんわばんごう"], ["電話", "teléfono", "電話があります。", "Tengo teléfono.", "でんわ"], ["番号", "número", "番号を書いてください。", "Escriba el número, por favor.", "ばんごう"], ["もう一度", "una vez más", "もう一度お願いします。", "Una vez más, por favor.", "もういちど"]],
          ["の para unir sustantivos", "La partícula の une dos sustantivos y expresa relación: 電話番号 es literalmente «número de teléfono». Para preguntar, usa 何ですか; para pedir repetición, もう一度お願いします.", "電話 + 番号 = 電話番号\nもう一度お願いします。", [{ target: "お電話番号は何ですか。", translation: "¿Cuál es su número de teléfono?" }, { target: "もう一度言ってください。", translation: "Dígalo una vez más, por favor." }], "Al practicar, inventa el número de teléfono; no compartas tus datos reales.",],
          ["電話___番号", "の", "の puede conectar dos sustantivos: teléfono + número.",],
          ["En recepción", "La persona de recepción te pide el número de teléfono.", "受付", "電話番号は何ですか。", "¿Cuál es su número de teléfono?", "電話番号は……です。", "Mi número de teléfono es…", "電話番号は何歳ですか。", "¿Cuántos años tiene el número de teléfono?"],
          ["Pedir que repitan", "Elige cómo pedir que repitan el número.", "もう一度お願いします。", "Una vez más, por favor.", "電話番号はどこですか。"]
        ]),
        createJapaneseLesson("ja-details", 5, [
          "Días, meses y fechas", "Nombrar un día de la semana y decir una fecha sencilla.",
          [["月曜日", "lunes", "月曜日に学校へ行きます。", "El lunes voy a la escuela.", "げつようび"], ["今日", "hoy", "今日は月曜日です。", "Hoy es lunes.", "きょう"], ["五月", "mayo", "五月に日本へ行きます。", "Voy a Japón en mayo.", "ごがつ"], ["何日", "qué día del mes", "今日は何日ですか。", "¿Qué fecha es hoy?", "なんにち"]],
          ["Fechas y partícula に", "En japonés, el año va primero, luego el mes y el día. Para indicar cuándo ocurre algo, に puede ir después de la fecha o el día: 月曜日に行きます.", "五月五日 = 5 de mayo\n月曜日に行きます。", [{ target: "今日は六月三日です。", translation: "Hoy es tres de junio." }, { target: "日曜日に休みます。", translation: "Descanso el domingo." }], "Algunas fechas tienen lecturas especiales; aprende las más frecuentes como expresiones completas.",],
          ["月曜日___学校へ行きます。", "に", "に marca el día en que ocurre la acción.",],
          ["Organizar una cita", "Una amiga pregunta qué día es hoy.", "友だち", "今日は何曜日ですか。", "¿Qué día de la semana es hoy?", "今日は月曜日です。", "Hoy es lunes.", "今日は何歳ですか。", "¿Cuántos años tiene hoy?"],
          ["Decir el día", "Elige cómo decir «voy el lunes».", "月曜日に行きます。", "Voy el lunes.", "月曜日を行きます。"]
        ])
      ]
    },
    {
      id: "ja-family",
      lessons: [
        createJapaneseLesson("ja-family", 1, [
          "Personas de mi familia", "Nombrar familiares y decir quiénes están en tu familia.",
          [["母", "mi madre", "母は先生です。", "Mi madre es profesora.", "はは"], ["父", "mi padre", "父は会社員です。", "Mi padre es empleado de oficina.", "ちち"], ["兄", "mi hermano mayor", "兄がいます。", "Tengo un hermano mayor.", "あに"], ["妹", "mi hermana menor", "妹は学生です。", "Mi hermana menor es estudiante.", "いもうと"]],
          ["Hablar de la familia propia", "Al hablar de tu propia familia con otras personas, suelen usarse formas como 母 y 父. Para decir que tienes un familiar, puedes usar がいます, que indica que una persona existe.", "兄がいます。→ Tengo un hermano mayor.\n妹がいます。→ Tengo una hermana menor.", [{ target: "姉がいます。", translation: "Tengo una hermana mayor." }, { target: "弟がいます。", translation: "Tengo un hermano menor." }], "Las palabras para tu familia y para la familia de otra persona pueden cambiar; primero aprende 母 y 父 para hablar de la tuya.",],
          ["兄___います。", "が", "が marca a la persona que existe o está presente.",],
          ["Hablar de la familia", "Una amiga te pregunta si tienes una hermana menor.", "友だち", "妹がいますか。", "¿Tienes una hermana menor?", "はい、妹がいます。", "Sí, tengo una hermana menor.", "はい、妹です。", "Sí, soy hermana menor."],
          ["Presentar a tu familia", "Elige cómo decir «tengo un hermano mayor».", "兄がいます。", "Tengo un hermano mayor.", "兄をいます。"]
        ]),
        createJapaneseLesson("ja-family", 2, [
          "Familia y posesión", "Presentar a un familiar y decir a quién pertenece algo.",
          [["家族", "familia", "家族は四人です。", "Somos cuatro en mi familia.", "かぞく"], ["母", "madre", "母の名前はゆきです。", "Mi madre se llama Yuki.", "はは"], ["名前", "nombre", "母の名前です。", "Es el nombre de mi madre.", "なまえ"], ["写真", "foto", "家族の写真です。", "Es una foto de mi familia.", "しゃしん"]],
          ["La partícula の", "の conecta sustantivos y expresa posesión o relación: 家族の写真 (foto de la familia), 母の名前 (nombre de mi madre).", "わたしの家族。\n母の写真。", [{ target: "これは家族の写真です。", translation: "Esta es una foto de mi familia." }, { target: "母の名前はゆきです。", translation: "Mi madre se llama Yuki." }], "El sustantivo que va antes de の especifica o posee el que aparece después.",],
          ["家族___写真です。", "の", "Usa の para conectar «familia» y «foto».",],
          ["Enseñar una foto", "Muestras una foto de tu familia.", "友だち", "これは何の写真ですか。", "¿De qué es esta foto?", "家族の写真です。", "Es una foto de mi familia.", "家族を写真です。", "La familia es una foto."],
          ["Decir de quién es la foto", "Elige «foto de mi familia».", "わたしの家族の写真です。", "Es una foto de mi familia.", "わたしは家族の写真です。"]
        ]),
        createJapaneseLesson("ja-family", 3, [
          "Actividades cotidianas", "Hablar de una rutina con verbos corteses en presente.",
          [["起きます", "levantarse", "七時に起きます。", "Me levanto a las siete.", "おきます"], ["食べます", "comer", "朝ごはんを食べます。", "Desayuno.", "たべます"], ["学校", "escuela", "学校へ行きます。", "Voy a la escuela.", "がっこう"], ["毎日", "todos los días", "毎日勉強します。", "Estudio todos los días.", "まいにち"]],
          ["Verbos corteses en ます", "La forma ます expresa presente o futuro de manera cortés. El verbo no cambia según la persona: わたしは食べます y 友だちは食べます.", "毎日、学校へ行きます。\n朝ごはんを食べます。", [{ target: "七時に起きます。", translation: "Me levanto a las siete." }, { target: "毎日、日本語を勉強します。", translation: "Estudio japonés todos los días." }], "El contexto indica si la forma ます habla del presente habitual o de un futuro próximo.",],
          ["毎日、日本語を勉強しま___。", "す", "La forma cortés del verbo termina en ます.",],
          ["Hablar de la mañana", "Una compañera pregunta qué haces cada mañana.", "同僚", "朝、何をしますか。", "¿Qué haces por la mañana?", "朝ごはんを食べます。", "Desayuno.", "朝ごはんを行きます。", "Voy el desayuno."],
          ["Contar tu rutina", "Elige cómo decir «me levanto a las siete».", "七時に起きます。", "Me levanto a las siete.", "七時を起きます。"]
        ])
      ]
    },
    {
      id: "ja-work",
      lessons: [
        createJapaneseLesson("ja-work", 1, [
          "Estudios y profesiones", "Decir qué estudias y nombrar una profesión frecuente.",
          [["学生", "estudiante", "わたしは学生です。", "Soy estudiante.", "がくせい"], ["先生", "profesor/a", "田中先生です。", "Es el profesor Tanaka.", "せんせい"], ["会社員", "empleado/a de empresa", "父は会社員です。", "Mi padre es empleado de oficina.", "かいしゃいん"], ["学校", "escuela", "学校で勉強します。", "Estudio en la escuela.", "がっこう"]],
          ["Sustantivo + です", "Para decir profesión u ocupación, usa sustantivo + です. No hay artículo: 学生です significa «soy estudiante».", "学生です。→ Soy estudiante.\n先生です。→ Es profesor/a.", [{ target: "わたしは学生です。", translation: "Soy estudiante." }, { target: "田中さんは先生です。", translation: "El señor Tanaka es profesor." }], "El tema puede omitirse si ya se entiende por el contexto.",],
          ["わたしは学生___。", "です", "Cierra la frase con la cópula cortés.",],
          ["En una entrevista", "Una persona te pregunta a qué te dedicas.", "面接官", "お仕事は何ですか。", "¿A qué se dedica?", "学生です。", "Soy estudiante.", "学校です。", "Es una escuela."],
          ["Decir tu ocupación", "Elige cómo decir «soy estudiante».", "わたしは学生です。", "Soy estudiante.", "わたしは学生をです。"]
        ]),
        createJapaneseLesson("ja-work", 2, [
          "Dónde estudias o trabajas", "Decir el lugar donde estudias o trabajas.",
          [["会社", "empresa", "会社で働きます。", "Trabajo en una empresa.", "かいしゃ"], ["働きます", "trabajar", "会社で働きます。", "Trabajo en una empresa.", "はたらきます"], ["勉強します", "estudiar", "家で勉強します。", "Estudio en casa.", "べんきょうします"], ["図書館", "biblioteca", "図書館で勉強します。", "Estudio en la biblioteca.", "としょかん"]],
          ["で para el lugar de una acción", "La partícula で marca el lugar donde se realiza una actividad: 図書館で勉強します (estudio en la biblioteca). No se usa で para indicar dónde está una cosa.", "学校で勉強します。\n会社で働きます。", [{ target: "家で日本語を勉強します。", translation: "Estudio japonés en casa." }, { target: "会社で働きます。", translation: "Trabajo en una empresa." }], "Usa で con actividades; para ubicación o existencia usa に o で según el verbo y la frase.",],
          ["図書館___勉強します。", "で", "La biblioteca es el lugar donde realizas la acción.",],
          ["Hablar de estudios", "Tu compañera quiere saber dónde estudias.", "クラスメート", "どこで勉強しますか。", "¿Dónde estudias?", "図書館で勉強します。", "Estudio en la biblioteca.", "図書館に勉強します。", "Estudio a la biblioteca."],
          ["Decir dónde trabajas", "Elige cómo decir «trabajo en una empresa».", "会社で働きます。", "Trabajo en una empresa.", "会社を働きます。"]
        ]),
        createJapaneseLesson("ja-work", 3, [
          "Habilidades y actividades", "Decir qué sabes hacer con una expresión sencilla.",
          [["できます", "poder / saber hacer", "日本語が少しできます。", "Sé un poco de japonés.", "できます"], ["料理", "cocina / cocinar", "料理ができます。", "Sé cocinar.", "りょうり"], ["泳ぎます", "nadar", "泳ぐことができます。", "Sé nadar.", "およぎます"], ["少し", "un poco", "少し話せます。", "Puedo hablar un poco.", "すこし"]],
          ["Expresar habilidad con できます", "できます expresa que puedes hacer algo. Para una habilidad, usa sustantivo + ができます; con una acción, puedes usar la forma de diccionario + ことができます.", "料理ができます。\n泳ぐことができます。", [{ target: "日本語が少しできます。", translation: "Sé un poco de japonés." }, { target: "料理をすることができます。", translation: "Puedo cocinar." }], "En una conversación inicial, 日本語ができます es una forma sencilla de decir que sabes japonés.",],
          ["料理が___。", "できます", "El verbo cortés que expresa habilidad es できます.",],
          ["Hablar de habilidades", "Una compañera pregunta si sabes cocinar.", "友だち", "料理ができますか。", "¿Sabes cocinar?", "はい、少しできます。", "Sí, un poco.", "はい、料理です。", "Sí, soy cocina."],
          ["Decir qué sabes hacer", "Elige cómo decir «sé nadar».", "泳ぐことができます。", "Sé nadar.", "泳ぐことをあります。"]
        ]),
        createJapaneseLesson("ja-work", 4, [
          "Aficiones y gustos", "Hablar de algo que te gusta y proponer una actividad.",
          [["好きです", "gustar", "音楽が好きです。", "Me gusta la música.", "すきです"], ["音楽", "música", "音楽を聞きます。", "Escucho música.", "おんがく"], ["映画", "película", "映画が好きです。", "Me gustan las películas.", "えいが"], ["聞きます", "escuchar", "音楽を聞きます。", "Escucho música.", "ききます"]],
          ["好きです y が", "Para expresar gustos, se usa sustantivo + が好きです. Aunque en español decimos «me gusta», en japonés la cosa que gusta se marca con が.", "音楽が好きです。\n映画が好きです。", [{ target: "日本の映画が好きです。", translation: "Me gustan las películas japonesas." }, { target: "音楽を聞きます。", translation: "Escucho música." }], "好きです es un adjetivo; para negar, di 好きではありません.",],
          ["映画___好きです。", "が", "La cosa que gusta lleva が en esta estructura.",],
          ["Conversar durante el descanso", "Una compañera pregunta qué tipo de música te gusta.", "同僚", "音楽が好きですか。", "¿Te gusta la música?", "はい、音楽が好きです。", "Sí, me gusta la música.", "はい、音楽を好きです。", "Sí, escucho música gustar."],
          ["Hablar de tus gustos", "Elige cómo decir «me gustan las películas».", "映画が好きです。", "Me gustan las películas.", "映画を好きです。"]
        ])
      ]
    },
    {
      id: "ja-home",
      lessons: [
        createJapaneseLesson("ja-home", 1, [
          "Habitaciones y muebles", "Nombrar habitaciones y muebles de una vivienda.",
          [["家", "casa / hogar", "家は小さいです。", "Mi casa es pequeña.", "いえ"], ["部屋", "habitación", "部屋はきれいです。", "La habitación está limpia.", "へや"], ["机", "escritorio", "机があります。", "Hay un escritorio.", "つくえ"], ["いす", "silla", "いすがあります。", "Hay una silla."]],
          ["Describir con あります", "あります indica que existe o hay una cosa. La cosa suele llevar が: 机があります (hay un escritorio). Para una descripción sencilla, 小さいです significa «es pequeño/a».", "部屋に机があります。\n家は小さいです。", [{ target: "部屋にいすがあります。", translation: "Hay una silla en la habitación." }, { target: "机があります。", translation: "Hay un escritorio." }], "あります se usa con objetos y plantas; para personas y animales usa います.",],
          ["机がありま___。", "す", "La forma cortés de あります termina en ます.",],
          ["Describir la habitación", "Una amiga pregunta qué hay en tu habitación.", "友だち", "部屋に何がありますか。", "¿Qué hay en la habitación?", "机といすがあります。", "Hay un escritorio y una silla.", "机といすですか。", "¿Es un escritorio y una silla?"],
          ["Decir qué hay en casa", "Elige cómo decir «hay una silla».", "いすがあります。", "Hay una silla.", "いすがいます。"]
        ]),
        createJapaneseLesson("ja-home", 2, [
          "Dónde están las cosas", "Ubicar un objeto dentro o encima de un lugar.",
          [["上", "encima", "机の上に本があります。", "Hay un libro encima del escritorio.", "うえ"], ["中", "dentro", "かばんの中に本があります。", "Hay un libro dentro del bolso.", "なか"], ["本", "libro", "本は机の上です。", "El libro está encima del escritorio.", "ほん"], ["かばん", "bolso / mochila", "かばんはここです。", "El bolso está aquí."]],
          ["Partículas de lugar に y の", "La estructura lugar + に + objeto + が + あります indica dónde hay algo. の une el lugar con una posición: 机の上 (encima del escritorio).", "机の上に本があります。\nかばんの中に本があります。", [{ target: "いすの下にかばんがあります。", translation: "Hay un bolso debajo de la silla." }, { target: "箱の中に本があります。", translation: "Hay un libro dentro de la caja." }], "上, 中 y 下 van después del nombre del lugar y の.",],
          ["机の上___本があります。", "に", "La partícula に marca el lugar donde está el libro.",],
          ["Buscar un libro", "Preguntas dónde está el libro.", "友だち", "本はどこにありますか。", "¿Dónde está el libro?", "机の上にあります。", "Está encima del escritorio.", "机の上をあります。", "Está el encima del escritorio."],
          ["Ubicar un objeto", "Elige cómo decir «el libro está dentro del bolso».", "かばんの中に本があります。", "Hay un libro dentro del bolso.", "かばんの中で本がいます。"]
        ]),
        createJapaneseLesson("ja-home", 3, [
          "Personas y animales en casa", "Decir dónde está una persona o una mascota.",
          [["います", "estar / haber (seres vivos)", "猫がいます。", "Hay un gato.", "います"], ["猫", "gato", "猫は部屋にいます。", "El gato está en la habitación.", "ねこ"], ["子ども", "niño/a", "子どもがいます。", "Hay un niño.", "こども"], ["庭", "jardín", "庭に猫がいます。", "Hay un gato en el jardín.", "にわ"]],
          ["います para seres vivos", "Usa います para personas y animales; usa あります para objetos. El lugar va con に y el ser vivo suele llevar が: 庭に猫がいます.", "猫がいます。\n庭に子どもがいます。", [{ target: "部屋に子どもがいます。", translation: "Hay un niño en la habitación." }, { target: "庭に犬がいます。", translation: "Hay un perro en el jardín." }], "La distinción es sencilla: います para seres vivos y あります para cosas.",],
          ["庭に猫がいま___。", "す", "Para un gato se usa います.",],
          ["En casa de una amiga", "Tu amiga pregunta si hay una mascota en el jardín.", "友だち", "庭に何がいますか。", "¿Qué ser vivo hay en el jardín?", "猫がいます。", "Hay un gato.", "机がいます。", "Hay un escritorio (con います)."],
          ["Hablar de una mascota", "Elige cómo decir «hay un gato en la habitación».", "部屋に猫がいます。", "Hay un gato en la habitación.", "部屋に猫があります。"]
        ])
      ]
    },
    {
      id: "ja-travel",
      lessons: [
        createJapaneseLesson("ja-travel", 1, [
          "Lugares de la ciudad", "Preguntar dónde está un lugar frecuente.",
          [["駅", "estación", "駅はどこですか。", "¿Dónde está la estación?", "えき"], ["学校", "escuela", "学校はあそこです。", "La escuela está allí.", "がっこう"], ["銀行", "banco", "銀行はどこですか。", "¿Dónde está el banco?", "ぎんこう"], ["病院", "hospital", "病院は駅の近くです。", "El hospital está cerca de la estación.", "びょういん"]],
          ["Preguntar dónde está algo", "どこ significa «dónde». Para preguntar por un lugar, di lugar + はどこですか. あそこ señala un lugar alejado de quien habla y de quien escucha.", "駅はどこですか。\n学校はあそこです。", [{ target: "銀行はどこですか。", translation: "¿Dónde está el banco?" }, { target: "病院は駅の近くです。", translation: "El hospital está cerca de la estación." }], "La partícula は se escribe は y se pronuncia wa cuando marca el tema.",],
          ["駅は___ですか。", "どこ", "どこ pregunta por un lugar.",],
          ["En la calle", "Buscas la estación y preguntas a una persona.", "通行人", "駅はどこですか。", "¿Dónde está la estación?", "あそこです。", "Está allí.", "何時ですか。", "¿Qué hora es?"],
          ["Preguntar por un lugar", "Elige cómo preguntar dónde está el hospital.", "病院はどこですか。", "¿Dónde está el hospital?", "病院は何歳ですか。"]
        ]),
        createJapaneseLesson("ja-travel", 2, [
          "Transporte y desplazamientos", "Decir a dónde vas y qué transporte usas.",
          [["電車", "tren", "電車で行きます。", "Voy en tren.", "でんしゃ"], ["バス", "autobús", "バスで学校へ行きます。", "Voy a la escuela en autobús."], ["行きます", "ir", "駅へ行きます。", "Voy a la estación.", "いきます"], ["駅", "estación", "駅へ行きます。", "Voy a la estación.", "えき"]],
          ["へ y で para desplazarse", "へ marca el destino y se pronuncia e. で indica el medio de transporte: バスで駅へ行きます (voy a la estación en autobús).", "駅へ行きます。\n電車で学校へ行きます。", [{ target: "バスで会社へ行きます。", translation: "Voy a la empresa en autobús." }, { target: "電車で帰ります。", translation: "Vuelvo en tren." }], "へ marca dirección o destino; で marca el medio que utilizas.",],
          ["電車___学校へ行きます。", "で", "La partícula で introduce el transporte.",],
          ["Organizar el trayecto", "Una compañera te pregunta cómo vas a la estación.", "同僚", "何で駅へ行きますか。", "¿En qué vas a la estación?", "電車で行きます。", "Voy en tren.", "電車を行きます。", "Voy el tren."],
          ["Decir cómo viajas", "Elige cómo decir «voy a la escuela en autobús».", "バスで学校へ行きます。", "Voy a la escuela en autobús.", "バスに学校を行きます。"]
        ]),
        createJapaneseLesson("ja-travel", 3, [
          "Pedir indicaciones y ayuda", "Pedir ayuda y entender una indicación breve.",
          [["まっすぐ", "todo recto", "まっすぐ行ってください。", "Siga todo recto, por favor."], ["右", "derecha", "右へ行ってください。", "Vaya a la derecha, por favor.", "みぎ"], ["左", "izquierda", "左へ行ってください。", "Vaya a la izquierda, por favor.", "ひだり"], ["ください", "por favor, deme / haga", "もう一度言ってください。", "Dígalo una vez más, por favor."]],
          ["Peticiones con てください", "Para pedir una acción de manera cortés, se usa el verbo en forma て + ください. En instrucciones iniciales puedes aprender frases completas como まっすぐ行ってください.", "右へ行ってください。\nもう一度言ってください。", [{ target: "まっすぐ行ってください。", translation: "Siga todo recto, por favor." }, { target: "ゆっくり話してください。", translation: "Hable despacio, por favor." }], "行ってください es una expresión muy útil para pedir direcciones.",],
          ["まっすぐ行って___。", "ください", "La petición cortés termina en ください.",],
          ["Pedir direcciones", "No conoces el camino y preguntas cómo llegar.", "駅員", "駅はどちらですか。", "¿Dónde está la estación?", "まっすぐ行ってください。", "Siga todo recto, por favor.", "駅で食べてください。", "Coma en la estación, por favor."],
          ["Pedir una indicación", "Elige cómo pedir que hablen despacio.", "ゆっくり話してください。", "Hable despacio, por favor.", "ゆっくり話します。"]
        ])
      ]
    },
    {
      id: "ja-shopping",
      lessons: [
        createJapaneseLesson("ja-shopping", 1, [
          "Comida y bebidas", "Nombrar alimentos y pedir algo para comer o beber.",
          [["水", "agua", "水をください。", "Agua, por favor.", "みず"], ["お茶", "té", "お茶を飲みます。", "Bebo té.", "おちゃ"], ["ごはん", "arroz cocido / comida", "ごはんを食べます。", "Como arroz.", "ごはん"], ["食べます", "comer", "パンを食べます。", "Como pan.", "たべます"]],
          ["を con comida y bebida", "La partícula を marca lo que comes o bebes: 水を飲みます, ごはんを食べます. Para pedir algo de forma sencilla, sustantivo + をください.", "水をください。\nお茶を飲みます。", [{ target: "パンを食べます。", translation: "Como pan." }, { target: "お茶をください。", translation: "Té, por favor." }], "飲みます significa beber; 食べます significa comer.",],
          ["水___ください。", "を", "La partícula de objeto va después de 水.",],
          ["En una cafetería", "El camarero pregunta qué quieres beber.", "店員", "何を飲みますか。", "¿Qué va a beber?", "お茶をください。", "Té, por favor.", "お茶がください。", "El té, por favor (partícula incorrecta)."],
          ["Pedir una bebida", "Elige cómo pedir agua.", "水をください。", "Agua, por favor.", "水が飲みます。"]
        ]),
        createJapaneseLesson("ja-shopping", 2, [
          "Comprar y preguntar el precio", "Preguntar cuánto cuesta algo y comprarlo.",
          [["いくら", "cuánto cuesta", "これはいくらですか。", "¿Cuánto cuesta esto?"], ["これ", "esto", "これは本です。", "Esto es un libro."], ["円", "yen", "百円です。", "Cuesta cien yenes.", "えん"], ["買います", "comprar", "本を買います。", "Compro un libro.", "かいます"]],
          ["Preguntar el precio con いくら", "いくら pregunta el precio. Usa これはいくらですか (¿cuánto cuesta esto?). La moneda se nombra con 円; el precio va antes de です.", "これはいくらですか。\n五百円です。", [{ target: "この本はいくらですか。", translation: "¿Cuánto cuesta este libro?" }, { target: "千円です。", translation: "Cuesta mil yenes." }], "これ significa «esto»; この va delante de un sustantivo: この本 (este libro).",],
          ["これは___ですか。", "いくら", "いくら pregunta cuánto cuesta.",],
          ["En una tienda", "Quieres saber cuánto cuesta este libro.", "店員", "この本はいくらですか。", "¿Cuánto cuesta este libro?", "千円です。", "Cuesta mil yenes.", "この本は何歳ですか。", "¿Cuántos años tiene este libro?"],
          ["Preguntar un precio", "Elige cómo preguntar cuánto cuesta esto.", "これはいくらですか。", "¿Cuánto cuesta esto?", "これはどこですか。"]
        ]),
        createJapaneseLesson("ja-shopping", 3, [
          "Cantidades y contadores", "Pedir cantidades pequeñas de alimentos y bebidas.",
          [["一つ", "uno (objeto)", "りんごを一つください。", "Una manzana, por favor.", "ひとつ"], ["二つ", "dos (objetos)", "パンを二つください。", "Dos panes, por favor.", "ふたつ"], ["一杯", "una taza / vaso", "水を一杯ください。", "Un vaso de agua, por favor.", "いっぱい"], ["りんご", "manzana", "りんごを買います。", "Compro manzanas."]],
          ["Contadores básicos", "Los objetos se cuentan con un contador. 一つ y 二つ sirven para muchas cosas; 杯 cuenta vasos o tazas. El contador va después del número.", "りんごを一つ。\n水を一杯。", [{ target: "りんごを二つください。", translation: "Dos manzanas, por favor." }, { target: "コーヒーを一杯ください。", translation: "Un café, por favor." }], "一杯 se lee いっぱい y 二杯 se lee にはい; aprende primero las expresiones más comunes.",],
          ["水を一___ください。", "杯", "El contador para vasos y tazas es 杯.",],
          ["En la frutería", "Quieres comprar dos manzanas.", "店員", "りんごはいくつですか。", "¿Cuántas manzanas?", "二つください。", "Dos, por favor.", "二杯ください。", "Dos tazas, por favor."],
          ["Pedir una cantidad", "Elige cómo pedir una manzana.", "りんごを一つください。", "Una manzana, por favor.", "りんごを一杯ください。"]
        ]),
        createJapaneseLesson("ja-shopping", 4, [
          "Restaurante y preferencias", "Pedir comida y expresar qué quieres comer.",
          [["メニュー", "menú", "メニューをお願いします。", "El menú, por favor."], ["ください", "deme / por favor", "水をください。", "Agua, por favor."], ["食べたいです", "quiero comer", "すしを食べたいです。", "Quiero comer sushi.", "たべたいです"], ["すし", "sushi", "すしが好きです。", "Me gusta el sushi."]],
          ["たいです para expresar deseos", "Para decir que quieres hacer algo, usa la raíz del verbo + たいです: 食べます → 食べたいです (quiero comer). El objeto suele llevar を.", "すしを食べたいです。\n水を飲みたいです。", [{ target: "ラーメンを食べたいです。", translation: "Quiero comer ramen." }, { target: "お茶を飲みたいです。", translation: "Quiero beber té." }], "たいです expresa el deseo de quien habla; para una petición cortés, también puedes usar ください.",],
          ["すしを食べ___です。", "たい", "Añade たい para decir que quieres comer.",],
          ["En un restaurante", "El camarero pregunta qué quieres comer.", "店員", "何を食べたいですか。", "¿Qué quiere comer?", "すしを食べたいです。", "Quiero comer sushi.", "すしを食べますか。", "¿Come sushi?"],
          ["Expresar qué quieres", "Elige cómo decir «quiero comer sushi».", "すしを食べたいです。", "Quiero comer sushi.", "すしが食べます。"]
        ])
      ]
    },
    {
      id: "ja-stories",
      lessons: [
        createJapaneseLesson("ja-stories", 1, [
          "El tiempo y las estaciones", "Describir el tiempo con adjetivos sencillos.",
          [["天気", "tiempo (atmosférico)", "今日の天気はいいです。", "Hoy hace buen tiempo.", "てんき"], ["暑い", "caluroso", "今日は暑いです。", "Hoy hace calor.", "あつい"], ["寒い", "frío", "冬は寒いです。", "En invierno hace frío.", "さむい"], ["雨", "lluvia", "雨です。", "Está lloviendo.", "あめ"]],
          ["Adjetivos y tiempo", "暑い y 寒い son adjetivos que terminan en い; pueden ir antes de です: 今日は暑いです. Para hablar de lluvia, 雨です significa que llueve o que está lluvioso.", "今日は暑いです。\n冬は寒いです。", [{ target: "天気はいいです。", translation: "Hace buen tiempo." }, { target: "今日は寒いです。", translation: "Hoy hace frío." }], "La forma negativa de un adjetivo en い se forma normalmente cambiando い por くない; por ahora practica las frases afirmativas.",],
          ["今日は暑___です。", "い", "暑い es un adjetivo que termina en い.",],
          ["Hacer planes", "Una amiga pregunta qué tiempo hace hoy.", "友だち", "今日の天気はどうですか。", "¿Qué tiempo hace hoy?", "今日は暑いです。", "Hoy hace calor.", "今日は食べます。", "Hoy como."],
          ["Describir el tiempo", "Elige cómo decir «en invierno hace frío».", "冬は寒いです。", "En invierno hace frío.", "冬は寒いでした。"]
        ]),
        createJapaneseLesson("ja-stories", 2, [
          "Planes para el fin de semana", "Proponer un plan y decir qué quieres hacer.",
          [["週末", "fin de semana", "週末に映画を見ます。", "El fin de semana veo una película.", "しゅうまつ"], ["映画", "película", "映画を見たいです。", "Quiero ver una película.", "えいが"], ["見たいです", "quiero ver", "映画を見たいです。", "Quiero ver una película.", "みたいです"], ["いっしょに", "juntos", "いっしょに行きましょう。", "Vamos juntos.", "いっしょに"]],
          ["Invitar con ましょう", "ましょう se añade a la raíz del verbo para hacer una propuesta: 行きましょう (vamos). Para decir lo que quieres hacer, usa la forma たいです.", "映画を見ましょう。\nいっしょに行きましょう。", [{ target: "週末に映画を見たいです。", translation: "Quiero ver una película el fin de semana." }, { target: "いっしょに行きましょう。", translation: "Vamos juntos." }], "ましょう expresa una invitación o propuesta; puedes responder はい, そうしましょう (sí, hagámoslo).",],
          ["いっしょに行きま___。", "しょう", "La propuesta cortés con 行きます termina en ましょう.",],
          ["Organizar una salida", "Invitas a una amiga a ver una película el fin de semana.", "友だち", "週末、何をしますか。", "¿Qué harás el fin de semana?", "いっしょに映画を見ましょう。", "Veamos una película juntos.", "いっしょに映画を食べます。", "Comamos una película juntos."],
          ["Proponer una actividad", "Elige una invitación para ir juntos.", "いっしょに行きましょう。", "Vamos juntos.", "いっしょに行きました。"]
        ]),
        createJapaneseLesson("ja-stories", 3, [
          "Contar una actividad pasada", "Decir qué hiciste ayer y negar una actividad pasada.",
          [["昨日", "ayer", "昨日、学校へ行きました。", "Ayer fui a la escuela.", "きのう"], ["見ました", "vi", "映画を見ました。", "Vi una película.", "みました"], ["食べました", "comí", "すしを食べました。", "Comí sushi.", "たべました"], ["行きませんでした", "no fui", "昨日は学校へ行きませんでした。", "Ayer no fui a la escuela.", "いきませんでした"]],
          ["Pasado cortés: ました", "Para expresar una acción pasada, cambia la forma ます a ました: 見ます → 見ました. Para negar en pasado, usa ませんでした: 行きませんでした.", "昨日、映画を見ました。\n昨日、学校へ行きませんでした。", [{ target: "昨日、すしを食べました。", translation: "Ayer comí sushi." }, { target: "昨日、家にいました。", translation: "Ayer estuve en casa." }], "El tiempo 昨日 indica pasado, y la forma verbal también cambia a ました o ませんでした.",],
          ["昨日、映画を見まし___。", "た", "El pasado afirmativo cortés termina en ました.",],
          ["Hablar del fin de semana", "Un compañero te pregunta qué hiciste ayer.", "同僚", "昨日、何をしましたか。", "¿Qué hiciste ayer?", "映画を見ました。", "Vi una película.", "映画を見ます。", "Veo una película."],
          ["Contar algo que hiciste", "Elige cómo decir «ayer comí sushi».", "昨日、すしを食べました。", "Ayer comí sushi.", "昨日、すしを食べます。"]
        ])
      ]
    }
  ]
};

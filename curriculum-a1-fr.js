(function () {
  const lessonCounts = [4, 5, 3, 4, 3, 3, 4, 3];
  const unitsData = [
    {
      id: "fr-saludos",
      title: "Saludos y presentaciones",
      canDo: "Saludar, presentarte, decir de dónde eres y manejar intercambios breves.",
      grammar: "Pronombres sujeto, être, artículos y cortesía",
      sounds: "Alfabeto, vocales nasales y enlaces frecuentes",
      vocabulary: "Saludos, identidad, países y expresiones de cortesía",
      game: "Reto de saludos y nombres",
      lessons: [
        {
          title: "Saludar según la situación",
          objective: "Saludar y despedirte con expresiones naturales en contextos informales y formales.",
          v: [
            ["Bonjour", "buenos días / hola", "Bonjour, Madame.", "Buenos días, señora."],
            ["Salut", "hola / chao (informal)", "Salut, Paul !", "¡Hola, Paul!"],
            ["Bonsoir", "buenas tardes / noches (al saludar)", "Bonsoir, Monsieur.", "Buenas tardes, señor."],
            ["À bientôt", "hasta pronto", "Merci, à bientôt !", "¡Gracias, hasta pronto!"]
          ],
          g: ["Elegir un saludo según la hora y el trato", "Bonjour sirve durante el día y también como saludo general. Bonsoir se usa al llegar por la tarde o por la noche. Salut es informal; para despedirte son naturales Au revoir y À bientôt. En bonjour, on representa una vocal nasal /ɔ̃/: el aire sale también por la nariz y no se pronuncia una n final separada.", "FORMAL / NEUTRO: Bonjour, Madame. · INFORMAL: Salut, Paul !\nDESPEDIDA: Au revoir. · Bonsoir al llegar.", [["Bonjour, Monsieur.", "Buenos días, señor."], ["Salut, Léa !", "¡Hola, Léa!"]], "Bonne nuit se dice principalmente al irse a dormir; no suele usarse para saludar al llegar por la noche."],
          fill: ["___, Madame. (saludo formal durante el día)", "Bonjour", "Completa con el saludo francés más habitual durante el día."],
          d: ["Llegas por la tarde a una cafetería.", "Camille", "Bonsoir !", "¡Buenas tardes!", [["Bonsoir !", "¡Buenas tardes!", true], ["Bonne nuit !", "¡Buenas noches! (al ir a dormir)", false], ["À demain !", "¡Hasta mañana!", false]]],
          p: ["Elige un saludo informal para una amiga.", "Salut, Léa !", "¡Hola, Léa!", "Bonjour, Madame."]
        },
        {
          title: "Decir quién eres",
          objective: "Decir tu nombre y presentar a otra persona con el verbo être.",
          v: [
            ["Je m'appelle", "me llamo", "Je m'appelle Ana.", "Me llamo Ana."],
            ["Je suis", "soy / estoy", "Je suis Luis.", "Soy Luis."],
            ["Il s'appelle", "se llama (él)", "Il s'appelle Marc.", "Se llama Marc."],
            ["Enchanté(e)", "encantado/a", "Enchantée, Léa !", "¡Encantada, Léa!"]
          ],
          g: ["Usar être y los pronombres sujeto", "En francés el pronombre sujeto normalmente se expresa. Être cambia con la persona: je suis, tu es, il/elle est. Para decir el nombre, la expresión idiomática es Je m'appelle…; el participio Enchanté(e) concuerda con quien habla.", "je suis · tu es · il / elle est\nJe m'appelle Ana. · Elle est française.", [["Je suis Karim.", "Soy Karim."], ["Elle est Léa.", "Ella es Léa."]], "Ante una vocal, je se convierte en j’ en j’habite y j’aime; m’appelle conserva su apóstrofo por elisión."],
          fill: ["Je ___ Sofia. (Me llamo Sofia.)", "m'appelle", "La expresión francesa para decir «me llamo» comienza con m'appelle."],
          d: ["Conoces a alguien en un curso de idiomas.", "Hugo", "Comment tu t'appelles ?", "¿Cómo te llamas?", [["Je m'appelle Ana.", "Me llamo Ana.", true], ["Il s'appelle Marc.", "Él se llama Marc.", false], ["Au revoir, Ana.", "Adiós, Ana.", false]]],
          p: ["Elige una frase para presentarte.", "Je m'appelle Ana.", "Me llamo Ana.", "Elle s'appelle Ana."]
        },
        {
          title: "Decir de dónde eres",
          objective: "Decir tu nacionalidad y preguntar por el origen de otra persona.",
          v: [
            ["Je viens de", "vengo de / soy de", "Je viens du Chili.", "Soy de Chile."],
            ["français / française", "francés / francesa", "Elle est française.", "Ella es francesa."],
            ["espagnol / espagnole", "español / española", "Il est espagnol.", "Él es español."],
            ["un pays", "un país", "Le Pérou est un pays.", "Perú es un país."]
          ],
          g: ["Preguntar por el origen y usar de", "La pregunta habitual es Tu viens d'où ? o Vous venez d'où ? El nombre del país va después de de, du, de la o des según su género y número: de France, du Chili, des États-Unis. Las nacionalidades suelen concordar en género.", "Tu viens d'où ? · Je viens du Chili.\nIl est espagnol. · Elle est espagnole.", [["Vous venez d'où ?", "¿De dónde viene usted?"], ["Je viens de France.", "Soy de Francia."]], "Ante vocal, de se elide en d’ : d’Italie. Aprende cada país con su artículo."],
          fill: ["Je viens ___ France. (Soy de Francia.)", "de", "France es un país femenino y aquí se usa de."],
          d: ["Una compañera nueva se presenta en clase.", "Nora", "Tu viens d'où ?", "¿De dónde eres?", [["Je viens d'Espagne.", "Soy de España.", true], ["Je m'appelle Espagne.", "Me llamo España.", false], ["Je suis au revoir.", "Soy adiós.", false]]],
          p: ["Elige una frase para decir que eres de Francia.", "Je viens de France.", "Soy de Francia.", "Je viens du France."]
        },
        {
          title: "Pedir ayuda y deletrear",
          objective: "Pedir que repitan o deletreen una palabra con cortesía.",
          v: [
            ["S'il vous plaît", "por favor (formal)", "Un café, s'il vous plaît.", "Un café, por favor."],
            ["Merci", "gracias", "Merci beaucoup !", "¡Muchas gracias!"],
            ["Répétez, s'il vous plaît", "Repita, por favor", "Répétez, s'il vous plaît.", "Repita, por favor."],
            ["Comment ça s'écrit ?", "¿Cómo se escribe?", "Comment ça s'écrit, « Léa » ?", "¿Cómo se escribe «Léa»?"]
          ],
          g: ["Usar preguntas y fórmulas de cortesía", "S'il vous plaît acompaña una petición formal; s'il te plaît es informal. Para solicitar una repetición se usa Répétez… y para preguntar la escritura, Comment ça s'écrit ? El imperativo formal de répéter conserva la terminación -ez.", "Excusez-moi. · Répétez, s'il vous plaît.\nComment ça s'écrit ? · Merci !", [["Excusez-moi, où est la gare ?", "Disculpe, ¿dónde está la estación?"], ["Comment ça s'écrit ?", "¿Cómo se escribe?"]], "La cedilla de ça indica que c suena como /s/ ante a. En s'il vous plaît se produce el enlace natural vous‿plaît."],
          fill: ["Répétez, ___ vous plaît. (Repita, por favor.)", "s'il", "La fórmula fija es «s'il vous plaît»."],
          d: ["No entiendes el apellido de una persona en la recepción.", "L'employée", "Vous pouvez répéter, s'il vous plaît ?", "¿Puede repetirlo, por favor?", [["Oui, bien sûr.", "Sí, por supuesto.", true], ["Je viens de Paris.", "Soy de París.", false], ["À tout à l'heure.", "Hasta luego.", false]]],
          p: ["Elige una petición formal para pedir una repetición.", "Répétez, s'il vous plaît.", "Repita, por favor.", "Répète, s'il vous plaît."]
        }
      ]
    },
    {
      id: "fr-datos",
      title: "Datos personales y vida diaria",
      canDo: "Dar datos básicos, hablar de edad y horarios, y preguntar información sencilla.",
      grammar: "Preguntas, avoir, números y expresiones de tiempo",
      sounds: "Números, acento de frase y consonantes finales",
      vocabulary: "Edad, teléfono, fechas, días y hora",
      game: "Calendario y reloj",
      lessons: [
        {
          title: "Los números y la edad",
          objective: "Decir tu edad y preguntar la edad de otra persona.",
          v: [
            ["un", "uno", "Un, deux, trois.", "Uno, dos, tres."],
            ["dix-huit", "dieciocho", "J'ai dix-huit ans.", "Tengo dieciocho años."],
            ["Quel âge ?", "¿qué edad?", "Quel âge as-tu ?", "¿Qué edad tienes?"],
            ["avoir", "tener", "J'ai vingt ans.", "Tengo veinte años."]
          ],
          g: ["Expresar la edad con avoir", "En francés, la edad se expresa con avoir («tener»), no con être. Se usa avoir + número + ans: J'ai vingt ans. La pregunta informal es Quel âge as-tu ?; en trato formal, Quel âge avez-vous ?", "J'ai 18 ans. · Tu as 20 ans.\nQuel âge avez-vous ?", [["J'ai vingt ans.", "Tengo veinte años."], ["Quel âge as-tu ?", "¿Qué edad tienes?"]], "En j'ai y vingt ans suele haber enlace entre la consonante t y la vocal inicial de ans."],
          fill: ["J'___ vingt ans. (Tengo veinte años.)", "ai", "La forma de avoir con je es ai; se escribe j'ai ante vocal."],
          d: ["Hablas con un compañero al inicio de un curso.", "Léo", "Quel âge as-tu ?", "¿Qué edad tienes?", [["J'ai dix-huit ans.", "Tengo dieciocho años.", true], ["Je suis dix-huit ans.", "Soy dieciocho años.", false], ["J'ai dix-huit heures.", "Tengo las dieciocho horas.", false]]],
          p: ["Elige una respuesta natural a «Quel âge as-tu ?».", "J'ai vingt ans.", "Tengo veinte años.", "Je suis vingt ans."]
        },
        {
          title: "Preguntar y responder datos personales",
          objective: "Preguntar el nombre, la profesión y el lugar de residencia.",
          v: [
            ["Comment ?", "¿cómo?", "Comment vous appelez-vous ?", "¿Cómo se llama usted?"],
            ["Où ?", "¿dónde?", "Où habites-tu ?", "¿Dónde vives?"],
            ["habiter", "vivir", "J'habite à Lyon.", "Vivo en Lyon."],
            ["une adresse", "una dirección", "Mon adresse est à Lyon.", "Mi dirección está en Lyon."]
          ],
          g: ["Formar preguntas con palabras interrogativas", "Las palabras interrogativas suelen ir al comienzo: où (dónde), comment (cómo), qui (quién). Para una pregunta sencilla también se conserva el orden sujeto-verbo y se usa la entonación; est-ce que permite marcar claramente la pregunta.", "Où habites-tu ? · Tu habites où ?\nEst-ce que vous travaillez ici ?", [["Où habitez-vous ?", "¿Dónde vive usted?"], ["Comment tu t'appelles ?", "¿Cómo te llamas?"]], "Habiter empieza con h muda, por eso je se elide: j'habite. En ciudades se usa habitualmente à: à Lyon."],
          fill: ["Où ___-vous ? (¿Dónde vive usted?)", "habitez", "Con vous, el verbo habiter termina en -ez."],
          d: ["Completa una ficha de inscripción en una escuela.", "La secrétaire", "Où habitez-vous ?", "¿Dónde vive usted?", [["J'habite à Nantes.", "Vivo en Nantes.", true], ["J'ai Nantes ans.", "Tengo Nantes años.", false], ["À bientôt, merci.", "Hasta pronto, gracias.", false]]],
          p: ["Elige una frase para decir dónde vives.", "J'habite à Lyon.", "Vivo en Lyon.", "Je habite à Lyon."]
        },
        {
          title: "Decir el teléfono y los números",
          objective: "Dar un número de teléfono ficticio y pedir que lo repitan.",
          v: [
            ["un numéro", "un número", "Quel est votre numéro ?", "¿Cuál es su número?"],
            ["un téléphone", "un teléfono", "Mon téléphone est ici.", "Mi teléfono está aquí."],
            ["zéro", "cero", "Le numéro commence par zéro.", "El número empieza por cero."],
            ["un chiffre", "una cifra", "Répétez le dernier chiffre.", "Repita la última cifra."]
          ],
          g: ["Decir números de teléfono cifra por cifra", "En francés los números de teléfono suelen pronunciarse en grupos de dos cifras. Para aprenderlos al comienzo, se pueden decir cifra por cifra. La pregunta es Quel est votre numéro de téléphone ?; est concuerda con numéro.", "Quel est votre numéro ?\nMon numéro est le 06 12 34 56 78.", [["Quel est votre numéro de téléphone ?", "¿Cuál es su número de teléfono?"], ["Mon numéro commence par zéro.", "Mi número empieza por cero."]], "Practica con números inventados y evita compartir datos personales reales."],
          fill: ["Mon numéro commence par ___. (Mi número empieza por cero.)", "zéro", "Escribe la palabra francesa para el número 0."],
          d: ["La recepcionista confirma un número de práctica.", "La réceptionniste", "Quel est votre numéro ?", "¿Cuál es su número?", [["C'est le 06 12 34 56 78.", "Es el 06 12 34 56 78.", true], ["J'ai zéro ans.", "Tengo cero años.", false], ["Je viens de zéro.", "Soy de cero.", false]]],
          p: ["Elige cómo iniciar la respuesta a «Quel est votre numéro ?».", "Mon numéro, c'est le 06 12 34 56 78.", "Mi número es el 06 12 34 56 78.", "Mon âge, c'est le 06."]
        },
        {
          title: "Los días y las fechas",
          objective: "Decir el día de la semana y preguntar por una fecha sencilla.",
          v: [
            ["lundi", "lunes", "Le cours est lundi.", "La clase es el lunes."],
            ["aujourd'hui", "hoy", "Aujourd'hui, c'est lundi.", "Hoy es lunes."],
            ["demain", "mañana", "À demain !", "¡Hasta mañana!"],
            ["la date", "la fecha", "Quelle est la date ?", "¿Qué fecha es?"]
          ],
          g: ["Usar días y fechas", "Los días de la semana son masculinos y normalmente no llevan mayúscula en francés. Para decir «el lunes» como día concreto se usa lundi; para una acción habitual, le lundi. La fecha suele llevar le: Nous sommes le 2 mai.", "lundi · mardi · mercredi\nQuelle est la date ? · Nous sommes le 2 mai.", [["Le cours est lundi.", "La clase es el lunes."], ["Aujourd'hui, c'est le 2 mai.", "Hoy es 2 de mayo."]], "Los meses y días se escriben en minúscula, salvo al comienzo de una frase."],
          fill: ["Aujourd'hui, c'est ___. (Hoy es lunes.)", "lundi", "Completa con el día de la semana que aparece en la traducción."],
          d: ["Organizas una clase con una compañera.", "Maya", "On se voit demain ?", "¿Nos vemos mañana?", [["Oui, à demain !", "¡Sí, hasta mañana!", true], ["Oui, à hier !", "¡Sí, hasta ayer!", false], ["J'ai vingt ans.", "Tengo veinte años.", false]]],
          p: ["Elige una despedida para alguien a quien verás mañana.", "À demain !", "¡Hasta mañana!", "À hier !"]
        },
        {
          title: "Decir la hora y organizarse",
          objective: "Preguntar la hora y decir cuándo empieza una actividad.",
          v: [
            ["Quelle heure ?", "¿qué hora?", "Quelle heure est-il ?", "¿Qué hora es?"],
            ["Il est", "son las / es la hora", "Il est neuf heures.", "Son las nueve."],
            ["à neuf heures", "a las nueve", "Le cours commence à neuf heures.", "La clase empieza a las nueve."],
            ["maintenant", "ahora", "C'est maintenant.", "Es ahora."]
          ],
          g: ["Expresar la hora con il est", "Para preguntar la hora se usa Quelle heure est-il ? y se responde Il est + hora. La hora de una cita se introduce con à: à neuf heures. En francés se usa heures en plural excepto con une heure.", "Quelle heure est-il ?\nIl est une heure. · Il est neuf heures.\nLe cours commence à neuf heures.", [["Il est huit heures.", "Son las ocho."], ["Le train part à midi.", "El tren sale al mediodía."]], "La expresión «il est» es impersonal; no se traduce literalmente como «él es»."],
          fill: ["Le cours commence ___ neuf heures. (La clase empieza a las nueve.)", "à", "Para indicar a qué hora ocurre algo, usa la preposición à."],
          d: ["Preguntas en la escuela antes de una clase.", "Nina", "Quelle heure est-il ?", "¿Qué hora es?", [["Il est neuf heures.", "Son las nueve.", true], ["J'ai neuf heures.", "Tengo nueve horas.", false], ["C'est neuf ans.", "Son nueve años.", false]]],
          p: ["Elige una respuesta para decir que la clase empieza a las nueve.", "Le cours commence à neuf heures.", "La clase empieza a las nueve.", "Le cours commence de neuf heures."]
        }
      ]
    },
    {
      id: "fr-familia",
      title: "La familia y la rutina",
      canDo: "Presentar a tu familia, describir personas y hablar de actividades cotidianas.",
      grammar: "Artículos y género, posesivos y presente de verbos regulares",
      sounds: "Vocales finales y consonantes que no se pronuncian",
      vocabulary: "Familia, descripciones y actividades diarias",
      game: "Árbol familiar",
      lessons: [
        {
          title: "Presentar a la familia",
          objective: "Nombrar familiares y presentar a una persona de tu familia.",
          v: [
            ["la mère", "la madre", "Ma mère s'appelle Ana.", "Mi madre se llama Ana."],
            ["le père", "el padre", "Mon père est gentil.", "Mi padre es amable."],
            ["la sœur", "la hermana", "J'ai une sœur.", "Tengo una hermana."],
            ["le frère", "el hermano", "Mon frère habite à Paris.", "Mi hermano vive en París."]
          ],
          g: ["Reconocer género y artículos", "Los sustantivos franceses tienen género gramatical. Aprende cada palabra con su artículo: le père (masculino), la mère (femenino). Un y une son artículos indefinidos. El artículo no siempre indica el sexo de una persona, sino el género de la palabra.", "le père · la mère · un frère · une sœur\nJ'ai un frère et une sœur.", [["La mère de Léa est française.", "La madre de Léa es francesa."], ["J'ai un frère.", "Tengo un hermano."]], "Le y la se convierten en l' ante vocal o h muda: l'école, l'homme. Este fenómeno se llama elisión."],
          fill: ["J'ai ___ sœur. (Tengo una hermana.)", "une", "Sœur es una palabra femenina; acompáñala con el artículo indefinido femenino."],
          d: ["Una amiga te muestra una foto familiar.", "Léa", "C'est ma sœur.", "Es mi hermana.", [["Elle s'appelle Emma.", "Se llama Emma.", true], ["Il s'appelle Emma.", "Se llama Emma (él).", false], ["Nous sommes une sœur.", "Somos una hermana.", false]]],
          p: ["Elige la frase correcta para decir «una hermana».", "J'ai une sœur.", "Tengo una hermana.", "J'ai un sœur."]
        },
        {
          title: "Describir a las personas",
          objective: "Describir de forma sencilla el aspecto y el carácter de alguien.",
          v: [
            ["grand / grande", "alto/a, grande", "Mon frère est grand.", "Mi hermano es alto."],
            ["petit / petite", "pequeño/a, bajo/a", "Elle est petite.", "Ella es bajita."],
            ["sympathique", "simpático/a", "Il est très sympathique.", "Es muy simpático."],
            ["fatigué / fatiguée", "cansado/a", "Je suis fatiguée.", "Estoy cansada."]
          ],
          g: ["Hacer concordar los adjetivos", "El adjetivo suele concordar en género y número con el sustantivo o la persona descrita. A menudo se añade -e en femenino: grand, grande. Muchos adjetivos terminados en -e no cambian: sympathique.", "Il est grand. · Elle est grande.\nIls sont petits. · Elles sont petites.", [["Mon frère est grand.", "Mi hermano es alto."], ["Ma sœur est sympathique.", "Mi hermana es simpática."]], "La -e final suele ser muda, pero puede cambiar la pronunciación de la consonante que la precede."],
          fill: ["Ma sœur est ___. (Mi hermana es pequeña.)", "petite", "Usa la forma femenina de petit para describir a una hermana."],
          d: ["Describes a una persona en una foto.", "Hugo", "Comment est ta sœur ?", "¿Cómo es tu hermana?", [["Elle est petite et sympathique.", "Es bajita y simpática.", true], ["Il est petite et sympathique.", "Él es bajita y simpática.", false], ["Elle a petite.", "Ella tiene pequeña.", false]]],
          p: ["Elige una frase correcta para describir a una mujer.", "Elle est grande.", "Ella es alta.", "Elle est grand."]
        },
        {
          title: "Hablar de la rutina",
          objective: "Decir qué haces cada día y a qué hora empiezas una actividad.",
          v: [
            ["travailler", "trabajar", "Je travaille à Paris.", "Trabajo en París."],
            ["étudier", "estudiar", "J'étudie le français.", "Estudio francés."],
            ["commencer", "empezar", "Le travail commence à huit heures.", "El trabajo empieza a las ocho."],
            ["tous les jours", "todos los días", "J'étudie tous les jours.", "Estudio todos los días."]
          ],
          g: ["Conjugar verbos regulares en -er", "En presente, los verbos regulares en -er suelen usar las terminaciones -e, -es, -e, -ons, -ez, -ent. La terminación -ent de ils/elles no se pronuncia. Ante vocal, je se convierte en j': j'étudie.", "je travaille · tu travailles · il travaille\nnous travaillons · vous travaillez · ils travaillent", [["J'étudie le français.", "Estudio francés."], ["Nous travaillons à Lyon.", "Trabajamos en Lyon."]], "La mayoría de los verbos frecuentes siguen este patrón, pero être, avoir y aller son irregulares."],
          fill: ["J'___ le français tous les jours. (Estudio francés todos los días.)", "étudie", "Con je, étudier tiene la forma étudie y se elide el pronombre je."],
          d: ["Una compañera te pregunta por tu rutina de estudio.", "Emma", "Tu étudies le français ?", "¿Estudias francés?", [["Oui, j'étudie tous les jours.", "Sí, estudio todos los días.", true], ["Oui, je étudies tous les jours.", "Sí, estudio todos los días.", false], ["Oui, je suis le français.", "Sí, soy el francés.", false]]],
          p: ["Elige una frase para hablar de tu rutina.", "Je travaille tous les jours.", "Trabajo todos los días.", "Je travaille tous les jour."]
        }
      ]
    },
    {
      id: "fr-etudes",
      title: "Estudios, trabajo y preferencias",
      canDo: "Decir a qué te dedicas, hablar de horarios y expresar gustos y capacidades.",
      grammar: "C'est / il est, negación, preguntas y verbos modales",
      sounds: "Ritmo, vocales nasales y entonación",
      vocabulary: "Profesiones, estudios, tareas y preferencias",
      game: "Adivina la profesión",
      lessons: [
        {
          title: "Hablar de profesiones",
          objective: "Decir tu profesión o la profesión de otra persona.",
          v: [
            ["un professeur", "un profesor", "Il est professeur.", "Él es profesor."],
            ["une étudiante", "una estudiante", "Elle est étudiante.", "Ella es estudiante."],
            ["un médecin", "un médico / una médica", "Mon père est médecin.", "Mi padre es médico."],
            ["un travail", "un trabajo", "J'aime mon travail.", "Me gusta mi trabajo."]
          ],
          g: ["Distinguir c'est e il/elle est", "C'est presenta o identifica algo y suele ir seguido de un artículo: C'est un professeur. Il est / Elle est presenta una profesión sin artículo o describe a alguien: Elle est médecin. En francés, las profesiones sin artículo son habituales tras être.", "C'est un professeur.\nIl est professeur. · Elle est médecin.", [["C'est une étudiante.", "Es una estudiante."], ["Elle est médecin.", "Ella es médica."]], "Un même puede usarse para hombre o mujer en algunas profesiones; el artículo y el contexto aclaran el género."],
          fill: ["Elle ___ médecin. (Ella es médica.)", "est", "Con elle, el presente de être es est."],
          d: ["Te presentan a una persona en una clínica.", "Lina", "C'est un médecin ?", "¿Es médico/a?", [["Oui, elle est médecin.", "Sí, es médica.", true], ["Oui, elle est une médecin.", "Sí, ella es una médica.", false], ["Oui, elle a médecin.", "Sí, ella tiene médico.", false]]],
          p: ["Elige la forma natural para decir que él es profesor.", "Il est professeur.", "Él es profesor.", "Il est un professeur."]
        },
        {
          title: "Decir lo que no haces",
          objective: "Negar una actividad o decir que no entiendes una frase.",
          v: [
            ["ne… pas", "no", "Je ne travaille pas le dimanche.", "No trabajo los domingos."],
            ["comprendre", "entender", "Je comprends la question.", "Entiendo la pregunta."],
            ["parler", "hablar", "Je parle un peu français.", "Hablo un poco de francés."],
            ["un peu", "un poco", "Je parle un peu.", "Hablo un poco."]
          ],
          g: ["Formar la negación ne… pas", "La negación básica rodea al verbo conjugado con ne… pas: Je ne parle pas. Ante vocal o h muda, ne se convierte en n': Je n'habite pas. En el habla informal, se suele omitir ne, pero conviene reconocer y usar la forma completa.", "Je ne comprends pas.\nElle n'habite pas à Paris.", [["Je ne parle pas allemand.", "No hablo alemán."], ["Nous ne travaillons pas aujourd'hui.", "No trabajamos hoy."]], "En una frase negativa, un/une/des y du/de la suelen convertirse en de: Je n'ai pas de voiture."],
          fill: ["Je ne ___ pas la question. (No entiendo la pregunta.)", "comprends", "Completa con la forma de comprendre que acompaña a je."],
          d: ["La profesora pregunta si entendiste una indicación.", "La professeure", "Vous comprenez ?", "¿Entiende?", [["Non, je ne comprends pas.", "No, no entiendo.", true], ["Non, je comprends pas ne.", "No, no entiendo.", false], ["Non, je ne suis pas comprends.", "No, no soy entiendo.", false]]],
          p: ["Elige una frase para decir que no hablas alemán.", "Je ne parle pas allemand.", "No hablo alemán.", "Je parle ne pas allemand."]
        },
        {
          title: "Preguntar por los horarios",
          objective: "Preguntar cuándo empieza una actividad y responder con un horario.",
          v: [
            ["à quelle heure", "a qué hora", "À quelle heure commence le cours ?", "¿A qué hora empieza la clase?"],
            ["le matin", "por la mañana", "Je travaille le matin.", "Trabajo por la mañana."],
            ["l'après-midi", "por la tarde", "Le cours est l'après-midi.", "La clase es por la tarde."],
            ["tard", "tarde", "Le magasin ferme tard.", "La tienda cierra tarde."]
          ],
          g: ["Preguntar con est-ce que y palabras interrogativas", "Est-ce que convierte una oración en pregunta sin cambiar el orden sujeto-verbo: Est-ce que le cours commence à neuf heures ? Si hay una palabra interrogativa, va delante: À quelle heure est-ce que le cours commence ?", "Est-ce que tu travailles ?\nÀ quelle heure est-ce que le cours commence ?", [["Est-ce que vous étudiez le matin ?", "¿Estudia por la mañana?"], ["À quelle heure est-ce que le train part ?", "¿A qué hora sale el tren?"]], "En preguntas cotidianas se puede usar solo la entonación: Tu travailles demain ?"],
          fill: ["___ quelle heure commence le cours ? (¿A qué hora empieza la clase?)", "À", "La expresión fija para «a qué hora» comienza con À."],
          d: ["Quieres saber cuándo comienza la clase de francés.", "Paul", "À quelle heure est-ce que le cours commence ?", "¿A qué hora empieza la clase?", [["Il commence à neuf heures.", "Empieza a las nueve.", true], ["Il est neuf ans.", "Tiene nueve años.", false], ["Je viens de cours.", "Soy de clase.", false]]],
          p: ["Elige cómo preguntar por el horario.", "À quelle heure est-ce que le cours commence ?", "¿A qué hora empieza la clase?", "Quelle heure le cours commence est ?"]
        },
        {
          title: "Expresar gustos y capacidades",
          objective: "Decir qué te gusta y qué puedes hacer en francés.",
          v: [
            ["aimer", "gustar / amar", "J'aime le café.", "Me gusta el café."],
            ["préférer", "preferir", "Je préfère le thé.", "Prefiero el té."],
            ["pouvoir", "poder", "Je peux parler français.", "Puedo hablar francés."],
            ["un cours", "una clase / un curso", "Le cours est intéressant.", "El curso es interesante."]
          ],
          g: ["Usar aimer y pouvoir", "Aimer va seguido de un sustantivo con artículo: J'aime le café. Para expresar una actividad, se usa el infinitivo: J'aime étudier. Pouvoir se conjuga peux, peux, peut, pouvons, pouvez, peuvent y va seguido de otro infinitivo.", "J'aime le français. · J'aime parler français.\nJe peux étudier ce soir.", [["J'aime apprendre.", "Me gusta aprender."], ["Nous pouvons commencer.", "Podemos empezar."]], "En francés se conserva el artículo definido con los gustos generales: J'aime le chocolat."],
          fill: ["Je ___ parler français. (Puedo hablar francés.)", "peux", "Con je, pouvoir se conjuga peux."],
          d: ["Una amiga te pregunta si puedes ayudarla en francés.", "Zoé", "Tu peux m'aider ?", "¿Puedes ayudarme?", [["Oui, je peux t'aider.", "Sí, puedo ayudarte.", true], ["Oui, je peux t'aides.", "Sí, puedo ayudas.", false], ["Oui, je suis aider.", "Sí, soy ayudar.", false]]],
          p: ["Elige una frase para decir que te gusta estudiar.", "J'aime étudier.", "Me gusta estudiar.", "J'aime étudies."]
        }
      ]
    },
    {
      id: "fr-maison",
      title: "La casa y la ciudad",
      canDo: "Describir dónde vives, ubicar lugares y hablar de objetos cotidianos.",
      grammar: "Il y a, preposiciones de lugar y concordancia de adjetivos",
      sounds: "Enlaces, vocales nasales y terminaciones silenciosas",
      vocabulary: "Casa, muebles, barrio y lugares de la ciudad",
      game: "Plano del barrio",
      lessons: [
        {
          title: "Describir una vivienda",
          objective: "Decir qué habitaciones y objetos hay en casa.",
          v: [
            ["une maison", "una casa", "J'habite dans une maison.", "Vivo en una casa."],
            ["un appartement", "un apartamento", "Mon appartement est petit.", "Mi apartamento es pequeño."],
            ["une chambre", "una habitación", "La chambre est grande.", "La habitación es grande."],
            ["une cuisine", "una cocina", "La cuisine est à droite.", "La cocina está a la derecha."]
          ],
          g: ["Expresar existencia con il y a", "Il y a significa «hay» y no cambia en singular o plural: Il y a une chambre. Il y a deux chambres. Para hablar de posesión se usa avoir: J'ai un appartement.", "Il y a une cuisine.\nIl y a deux chambres.", [["Il y a un salon.", "Hay una sala."], ["Il y a trois fenêtres.", "Hay tres ventanas."]], "No confundas il y a («hay») con c'est («es / esto es»)."],
          fill: ["___ y a une chambre. (Hay una habitación.)", "Il", "La expresión francesa para «hay» comienza por il."],
          d: ["Una persona pregunta por tu apartamento.", "Marc", "Il y a une cuisine ?", "¿Hay una cocina?", [["Oui, il y a une cuisine.", "Sí, hay una cocina.", true], ["Oui, c'est une cuisine deux.", "Sí, es una cocina dos.", false], ["Oui, je suis une cuisine.", "Sí, soy una cocina.", false]]],
          p: ["Elige una frase para decir que hay dos habitaciones.", "Il y a deux chambres.", "Hay dos habitaciones.", "Il sont deux chambres."]
        },
        {
          title: "Ubicar objetos y lugares",
          objective: "Decir dónde está un objeto con preposiciones sencillas.",
          v: [
            ["sur", "sobre / encima de", "Le livre est sur la table.", "El libro está sobre la mesa."],
            ["sous", "debajo de", "Le sac est sous la chaise.", "El bolso está debajo de la silla."],
            ["devant", "delante de", "La voiture est devant la maison.", "El coche está delante de la casa."],
            ["près de", "cerca de", "La gare est près du café.", "La estación está cerca del café."]
          ],
          g: ["Usar preposiciones para situar", "Las preposiciones de lugar van antes del grupo nominal: sur la table, sous la chaise, devant la maison. De se combina con le en du y con les en des: près du café, près des écoles.", "sur la table · sous la chaise\ndevant la maison · près du café", [["Le livre est sur la table.", "El libro está sobre la mesa."], ["La gare est près du café.", "La estación está cerca del café."]], "Con la se conserva de la: près de la gare. Ante vocal, de se elide: près de l'école."],
          fill: ["Le sac est ___ la chaise. (El bolso está debajo de la silla.)", "sous", "Completa con la preposición que significa «debajo de»."],
          d: ["Buscas tus llaves en una sala.", "Léa", "Où sont les clés ?", "¿Dónde están las llaves?", [["Elles sont sur la table.", "Están sobre la mesa.", true], ["Elles sont sur le table.", "Están sobre la mesa.", false], ["Elles sont à table.", "Están a la mesa.", false]]],
          p: ["Elige cómo decir que el libro está sobre la mesa.", "Le livre est sur la table.", "El libro está sobre la mesa.", "Le livre est sous la table."]
        },
        {
          title: "Hablar del barrio",
          objective: "Nombrar lugares del barrio y decir cómo es tu ciudad.",
          v: [
            ["une rue", "una calle", "La rue est calme.", "La calle es tranquila."],
            ["un magasin", "una tienda", "Le magasin est ouvert.", "La tienda está abierta."],
            ["une gare", "una estación", "La gare est près d'ici.", "La estación está cerca de aquí."],
            ["beau / belle", "bonito/a", "C'est une belle ville.", "Es una ciudad bonita."]
          ],
          g: ["Concordar adjetivos y usar c'est", "C'est sirve para presentar una cosa o dar una valoración: C'est une belle ville. El adjetivo suele concordar con el sustantivo. Beau se convierte en bel ante un sustantivo masculino singular que empieza con vocal: un bel appartement.", "C'est un beau quartier.\nC'est une belle rue.\nC'est un bel appartement.", [["C'est une belle ville.", "Es una ciudad bonita."], ["Le quartier est calme.", "El barrio es tranquilo."]], "Belle se pronuncia con consonante final audible; la -e final marca el femenino."],
          fill: ["C'est une ___ ville. (Es una ciudad bonita.)", "belle", "Usa la forma femenina de beau con ville."],
          d: ["Una visitante quiere saber cómo es tu barrio.", "Nora", "Ton quartier est comment ?", "¿Cómo es tu barrio?", [["C'est un quartier calme.", "Es un barrio tranquilo.", true], ["C'est une quartier calme.", "Es un barrio tranquilo.", false], ["Il y a calme quartier.", "Hay tranquilo barrio.", false]]],
          p: ["Elige la forma correcta para describir una ciudad.", "C'est une belle ville.", "Es una ciudad bonita.", "C'est un beau ville."]
        }
      ]
    },
    {
      id: "fr-repas",
      title: "Comida y cafetería",
      canDo: "Pedir una bebida o comida, expresar preferencias y hablar de cantidades simples.",
      grammar: "Artículos partitivos, aimer y expresiones de cantidad",
      sounds: "Vocales nasales en alimentos y ritmo en pedidos",
      vocabulary: "Comida, bebidas, pedidos y cantidades",
      game: "Menú de cafetería",
      lessons: [
        {
          title: "Nombrar alimentos y bebidas",
          objective: "Nombrar alimentos cotidianos y decir qué hay en una comida.",
          v: [
            ["du pain", "pan / algo de pan", "Je mange du pain.", "Como pan."],
            ["de l'eau", "agua / algo de agua", "Je bois de l'eau.", "Bebo agua."],
            ["du fromage", "queso / algo de queso", "Il mange du fromage.", "Él come queso."],
            ["une pomme", "una manzana", "Je mange une pomme.", "Como una manzana."]
          ],
          g: ["Usar artículos partitivos", "Para una cantidad no especificada se usan du con sustantivos masculinos, de la con femeninos y de l' ante vocal o h muda. Des se usa en plural. Para una unidad contable se emplea un/une: une pomme.", "du pain · de la salade · de l'eau · des pommes\nJe mange du fromage.", [["Je bois de l'eau.", "Bebo agua."], ["Elle mange une pomme.", "Ella come una manzana."]], "En una negación, du, de la, de l' y des suelen cambiar a de: Je ne bois pas de café."],
          fill: ["Je bois ___eau. (Bebo agua.)", "de l'", "Ante vocal se usa la forma partitiva elidida de l'."],
          d: ["Pides algo para comer en una cafetería.", "Le serveur", "Vous désirez quelque chose ?", "¿Desea algo?", [["Oui, du pain et de l'eau, s'il vous plaît.", "Sí, pan y agua, por favor.", true], ["Oui, une pain et un eau.", "Sí, un pan y un agua.", false], ["Oui, je suis de l'eau.", "Sí, soy agua.", false]]],
          p: ["Elige una frase correcta para decir «como pan».", "Je mange du pain.", "Como pan.", "Je mange de la pain."]
        },
        {
          title: "Pedir en un café",
          objective: "Pedir una bebida de manera amable y comprender una pregunta del camarero.",
          v: [
            ["Je voudrais", "quisiera", "Je voudrais un café.", "Quisiera un café."],
            ["un thé", "un té", "Un thé, s'il vous plaît.", "Un té, por favor."],
            ["un café", "un café", "Je prends un café.", "Tomo un café."],
            ["l'addition", "la cuenta", "L'addition, s'il vous plaît.", "La cuenta, por favor."]
          ],
          g: ["Pedir con je voudrais", "Je voudrais («quisiera») es una fórmula cortés muy frecuente para pedir. Se usa con un sustantivo: Je voudrais un thé. También es natural Je prends… («tomo…»). En francés, un café y un thé son masculinos.", "Je voudrais un café, s'il vous plaît.\nJe prends un thé.", [["Je voudrais un thé.", "Quisiera un té."], ["L'addition, s'il vous plaît.", "La cuenta, por favor."]], "Voudrais es una forma cortés de vouloir; memoriza Je voudrais como expresión completa de nivel inicial."],
          fill: ["Je ___ un café, s'il vous plaît. (Quisiera un café, por favor.)", "voudrais", "Usa la fórmula amable que significa «quisiera»."],
          d: ["El camarero toma tu pedido.", "Le serveur", "Et comme boisson ?", "¿Y para beber?", [["Je voudrais un thé, s'il vous plaît.", "Quisiera un té, por favor.", true], ["Je suis un thé, s'il vous plaît.", "Soy un té, por favor.", false], ["Je voudrais de thé, s'il vous plaît.", "Quisiera de té, por favor.", false]]],
          p: ["Elige una petición amable de un café.", "Je voudrais un café, s'il vous plaît.", "Quisiera un café, por favor.", "Je veux un café, s'il vous plaît."]
        },
        {
          title: "Hablar de gustos y cantidades",
          objective: "Expresar qué te gusta y pedir una cantidad sencilla.",
          v: [
            ["J'aime", "me gusta", "J'aime le chocolat.", "Me gusta el chocolate."],
            ["beaucoup", "mucho", "J'aime beaucoup le thé.", "Me gusta mucho el té."],
            ["un verre", "un vaso", "Un verre d'eau, s'il vous plaît.", "Un vaso de agua, por favor."],
            ["sans sucre", "sin azúcar", "Un café sans sucre.", "Un café sin azúcar."]
          ],
          g: ["Expresar gustos y cantidades", "Para gustos generales se usa aimer + artículo definido: J'aime le chocolat. La cantidad se expresa con un nombre de medida y de: un verre d'eau, une tasse de café. Sans («sin») va seguido directamente del sustantivo.", "J'aime le thé.\nun verre d'eau · une tasse de café\nun café sans sucre", [["J'aime beaucoup le chocolat.", "Me gusta mucho el chocolate."], ["Un verre d'eau, s'il vous plaît.", "Un vaso de agua, por favor."]], "Tras aimer, el sustantivo suele llevar le, la o les para expresar una preferencia general."],
          fill: ["J'aime ___ chocolat. (Me gusta el chocolate.)", "le", "Con aimer y un gusto general, usa el artículo definido masculino."],
          d: ["Pides una bebida con una preferencia.", "La serveuse", "Avec du sucre ?", "¿Con azúcar?", [["Non, un café sans sucre, s'il vous plaît.", "No, un café sin azúcar, por favor.", true], ["Non, un café pas sucre.", "No, un café no azúcar.", false], ["Non, je suis sans sucre.", "No, soy sin azúcar.", false]]],
          p: ["Elige cómo pedir un vaso de agua.", "Un verre d'eau, s'il vous plaît.", "Un vaso de agua, por favor.", "Un verre de l'eau, s'il vous plaît."]
        }
      ]
    },
    {
      id: "fr-achats",
      title: "Compras y desplazamientos",
      canDo: "Preguntar precios, comprar algo, pedir indicaciones y hablar de desplazamientos.",
      grammar: "Demostrativos, aller, artículos y preguntas de cortesía",
      sounds: "Enlaces en los números y vocales nasales",
      vocabulary: "Precios, ropa, transporte y direcciones",
      game: "Mercado y mapa",
      lessons: [
        {
          title: "Preguntar el precio",
          objective: "Preguntar cuánto cuesta un objeto y comprender el precio.",
          v: [
            ["Combien ça coûte ?", "¿Cuánto cuesta?", "Combien ça coûte, ce sac ?", "¿Cuánto cuesta este bolso?"],
            ["un euro", "un euro", "C'est dix euros.", "Son diez euros."],
            ["cher / chère", "caro/a", "Ce manteau est cher.", "Este abrigo es caro."],
            ["un prix", "un precio", "Le prix est affiché.", "El precio está indicado."]
          ],
          g: ["Preguntar cuánto cuesta", "La pregunta más común es Ça coûte combien ? o Combien ça coûte ? Para preguntar por un objeto concreto, se puede añadir un demostrativo: Combien coûte ce sac ? El precio se expresa con coûter y euros.", "Combien ça coûte ?\nÇa coûte dix euros.\nCombien coûte ce sac ?", [["Ça coûte cinq euros.", "Cuesta cinco euros."], ["Combien coûte ce livre ?", "¿Cuánto cuesta este libro?"]], "En habla cotidiana, Ça coûte combien ? suena natural y directo; s'il vous plaît suaviza la pregunta."],
          fill: ["Combien ça ___ ? (¿Cuánto cuesta?)", "coûte", "Completa con la forma de coûter que aparece en la expresión de precio."],
          d: ["Preguntas el precio de un libro en una tienda.", "Le vendeur", "Combien coûte ce livre ?", "¿Cuánto cuesta este libro?", [["Il coûte huit euros.", "Cuesta ocho euros.", true], ["Il est huit ans.", "Tiene ocho años.", false], ["Il coûte de livre.", "Cuesta de libro.", false]]],
          p: ["Elige una pregunta natural para saber el precio.", "Combien ça coûte ?", "¿Cuánto cuesta?", "Combien ça coûtent ?"]
        },
        {
          title: "Elegir ropa y colores",
          objective: "Nombrar prendas, indicar un color y elegir una talla.",
          v: [
            ["un pantalon", "un pantalón", "Je cherche un pantalon noir.", "Busco un pantalón negro."],
            ["une robe", "un vestido", "Cette robe est jolie.", "Este vestido es bonito."],
            ["bleu / bleue", "azul", "Je voudrais la chemise bleue.", "Quisiera la camisa azul."],
            ["une taille", "una talla", "Vous avez cette taille ?", "¿Tiene esta talla?"]
          ],
          g: ["Usar demostrativos y concordancia", "Ce acompaña a un sustantivo masculino singular, cette a uno femenino y ces al plural: ce pantalon, cette robe, ces chaussures. El adjetivo de color normalmente va después del sustantivo y concuerda: une chemise bleue.", "ce pantalon · cette robe · ces chaussures\nune chemise bleue · des pantalons noirs", [["Cette robe est jolie.", "Este vestido es bonito."], ["Je cherche des chaussures noires.", "Busco zapatos negros."]], "Delante de un sustantivo masculino que comienza por vocal se usa cet: cet article."],
          fill: ["___ robe est jolie. (Este vestido es bonito.)", "Cette", "Robe es femenino; el demostrativo femenino singular es cette."],
          d: ["Pides una prenda de otro color en una tienda.", "La vendeuse", "Vous cherchez quelle couleur ?", "¿Qué color busca?", [["Je voudrais cette chemise bleue.", "Quisiera esta camisa azul.", true], ["Je voudrais ce chemise bleu.", "Quisiera este camisa azul.", false], ["Je voudrais ces chemise bleue.", "Quisiera estas camisa azul.", false]]],
          p: ["Elige la frase correcta para «este vestido».", "Cette robe est jolie.", "Este vestido es bonito.", "Ce robe est joli."]
        },
        {
          title: "Ir a lugares de la ciudad",
          objective: "Decir adónde vas y preguntar cómo llegar a un lugar.",
          v: [
            ["aller", "ir", "Je vais au marché.", "Voy al mercado."],
            ["la gare", "la estación", "Je vais à la gare.", "Voy a la estación."],
            ["le marché", "el mercado", "Le marché est ouvert.", "El mercado está abierto."],
            ["tout droit", "todo recto", "Allez tout droit.", "Siga todo recto."]
          ],
          g: ["Conjugar aller y usar à", "Aller es irregular: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont. Para indicar destino se usa à, que se contrae con le en au y con les en aux: à la gare, au marché, aux magasins.", "Je vais à la gare.\nTu vas au marché.\nNous allons aux magasins.", [["Je vais au marché.", "Voy al mercado."], ["Nous allons à la gare.", "Vamos a la estación."]], "Para dar una indicación formal puedes usar el imperativo: Allez tout droit, puis tournez à gauche."],
          fill: ["Je vais ___ marché. (Voy al mercado.)", "au", "À + le se contrae en au."],
          d: ["Preguntas a una persona cómo llegar a la estación.", "Un passant", "Où est la gare ?", "¿Dónde está la estación?", [["Allez tout droit, puis à gauche.", "Siga todo recto y luego a la izquierda.", true], ["Je vais à la gare hier.", "Voy a la estación ayer.", false], ["La gare est un marché.", "La estación es un mercado.", false]]],
          p: ["Elige una frase para decir que vas a la estación.", "Je vais à la gare.", "Voy a la estación.", "Je va à la gare."]
        },
        {
          title: "Comprar un billete",
          objective: "Pedir un billete y preguntar por el transporte a una ciudad.",
          v: [
            ["un billet", "un billete", "Un billet pour Lille, s'il vous plaît.", "Un billete para Lille, por favor."],
            ["un train", "un tren", "Le train part à midi.", "El tren sale al mediodía."],
            ["un aller simple", "un billete de ida", "Un aller simple pour Lyon.", "Un billete de ida a Lyon."],
            ["à quelle heure", "a qué hora", "À quelle heure part le train ?", "¿A qué hora sale el tren?"]
          ],
          g: ["Pedir un billete y preguntar la salida", "Para pedir un billete se usa Un billet pour…, s'il vous plaît. Aller simple es de ida y aller-retour, de ida y vuelta. El verbo partir es irregular: je pars, tu pars, il part; la pregunta puede mantener el orden y usar entonación.", "Un aller simple pour Lille, s'il vous plaît.\nÀ quelle heure part le train ?", [["Le train part à midi.", "El tren sale al mediodía."], ["Un aller-retour pour Lyon.", "Un billete de ida y vuelta a Lyon."]], "La contracción pour + nombre de ciudad no cambia; para destinos, pour es habitual al comprar billetes."],
          fill: ["Un ___ pour Lille, s'il vous plaît. (Un billete para Lille, por favor.)", "billet", "Completa con el sustantivo masculino que significa «billete»."],
          d: ["Compras un billete en la estación.", "L'employée", "Pour quelle ville ?", "¿Para qué ciudad?", [["Un aller simple pour Lille, s'il vous plaît.", "Un billete de ida a Lille, por favor.", true], ["Je suis Lille, s'il vous plaît.", "Soy Lille, por favor.", false], ["Une billet à Lille.", "Una billete a Lille.", false]]],
          p: ["Elige una petición de billete cortés.", "Un billet pour Lyon, s'il vous plaît.", "Un billete a Lyon, por favor.", "Un billet de Lyon, s'il vous plaît."]
        }
      ]
    },
    {
      id: "fr-loisirs",
      title: "Tiempo libre, clima y planes",
      canDo: "Hablar del tiempo, contar una actividad reciente y proponer un plan sencillo.",
      grammar: "Expresiones impersonales, passé composé y futur proche",
      sounds: "Entonación narrativa, sonidos nasales y ritmo",
      vocabulary: "Clima, ocio, días y planes",
      game: "Plan para el fin de semana",
      lessons: [
        {
          title: "Hablar del clima",
          objective: "Describir el clima con expresiones frecuentes y preguntar qué tiempo hace.",
          v: [
            ["Quel temps fait-il ?", "¿Qué tiempo hace?", "Quel temps fait-il aujourd'hui ?", "¿Qué tiempo hace hoy?"],
            ["Il fait beau", "hace buen tiempo", "Il fait beau à Nice.", "Hace buen tiempo en Niza."],
            ["Il pleut", "llueve", "Aujourd'hui, il pleut.", "Hoy llueve."],
            ["Il fait froid", "hace frío", "Il fait froid le matin.", "Hace frío por la mañana."]
          ],
          g: ["Usar expresiones impersonales del clima", "El tiempo se describe con expresiones impersonales: Il fait beau / froid / chaud y Il pleut. El pronombre il es obligatorio aunque no se refiera a una persona. Para preguntar, se usa Quel temps fait-il ? o Quel temps fait-il aujourd'hui ?", "Il fait beau. · Il fait chaud.\nIl pleut. · Il neige.", [["Il fait froid aujourd'hui.", "Hoy hace frío."], ["Quel temps fait-il ?", "¿Qué tiempo hace?"]], "En Il fait, fait es la forma de faire; la t final no se pronuncia."],
          fill: ["Aujourd'hui, il ___. (Hoy llueve.)", "pleut", "Completa con la forma impersonal de pleuvoir."],
          d: ["Una amiga te pregunta si necesita paraguas.", "Emma", "Quel temps fait-il ?", "¿Qué tiempo hace?", [["Il pleut, prends un parapluie !", "Llueve, ¡lleva un paraguas!", true], ["Il fait une pluie.", "Hace una lluvia.", false], ["Je pleut aujourd'hui.", "Yo lluevo hoy.", false]]],
          p: ["Elige la expresión que significa «hace frío».", "Il fait froid.", "Hace frío.", "Il est froid."]
        },
        {
          title: "Contar lo que hiciste",
          objective: "Contar una actividad terminada con una expresión temporal sencilla.",
          v: [
            ["hier", "ayer", "J'ai étudié hier.", "Estudié ayer."],
            ["visiter", "visitar", "Nous avons visité le musée.", "Visitamos el museo."],
            ["regarder", "mirar / ver", "J'ai regardé un film.", "Vi una película."],
            ["un film", "una película", "Le film est intéressant.", "La película es interesante."]
          ],
          g: ["Formar el passé composé con avoir", "Para hablar de una acción terminada se usa a menudo avoir en presente + participio pasado: j'ai regardé, nous avons visité. En los verbos regulares en -er, el participio suele terminar en -é. El auxiliar se elide con je: j'ai.", "J'ai regardé un film.\nTu as visité le musée.\nNous avons étudié hier.", [["J'ai regardé un film hier.", "Vi una película ayer."], ["Nous avons visité le musée.", "Visitamos el museo."]], "El passé composé con être tiene reglas de concordancia propias; por ahora aprende las expresiones frecuentes con avoir."],
          fill: ["Hier, j'___ regardé un film. (Ayer vi una película.)", "ai", "El passé composé de regarder se forma con j'ai + regardé."],
          d: ["Un compañero pregunta qué hiciste ayer.", "Nina", "Qu'est-ce que tu as fait hier ?", "¿Qué hiciste ayer?", [["J'ai regardé un film.", "Vi una película.", true], ["Je regarde un film hier.", "Veo una película ayer.", false], ["J'ai regarder un film.", "Vi una película.", false]]],
          p: ["Elige la frase correcta para decir «ayer estudié».", "J'ai étudié hier.", "Estudié ayer.", "Je suis étudié hier."]
        },
        {
          title: "Proponer un plan",
          objective: "Invitar a alguien a realizar una actividad y aceptar una propuesta.",
          v: [
            ["ce soir", "esta noche", "On sort ce soir ?", "¿Salimos esta noche?"],
            ["demain", "mañana", "Tu es libre demain ?", "¿Estás libre mañana?"],
            ["aller au cinéma", "ir al cine", "On va au cinéma ?", "¿Vamos al cine?"],
            ["avec plaisir", "con mucho gusto", "Oui, avec plaisir !", "¡Sí, con mucho gusto!"]
          ],
          g: ["Hablar de planes con futur proche", "El futur proche expresa un plan cercano: aller en presente + infinitivo. Je vais sortir significa «voy a salir». En el habla cotidiana, on va… ? es una invitación natural y on equivale aquí a «nosotros».", "Je vais étudier ce soir.\nOn va au cinéma ?\nNous allons visiter le musée.", [["Je vais travailler demain.", "Voy a trabajar mañana."], ["On va au cinéma ?", "¿Vamos al cine?"]], "No añadas una terminación al segundo verbo: je vais sortir, no je vais sors."],
          fill: ["Nous ___ visiter le musée demain. (Vamos a visitar el museo mañana.)", "allons", "El futur proche usa el presente de aller; con nous es allons."],
          d: ["Invitas a una amiga a salir esta noche.", "Léa", "On va au cinéma ce soir ?", "¿Vamos al cine esta noche?", [["Oui, avec plaisir !", "¡Sí, con mucho gusto!", true], ["Oui, je vais cinéma hier.", "Sí, voy cine ayer.", false], ["Non, je suis un cinéma.", "No, soy un cine.", false]]],
          p: ["Elige una invitación natural para ir al cine.", "On va au cinéma ce soir ?", "¿Vamos al cine esta noche?", "On allons au cinéma ce soir ?"]
        }
      ]
    }
  ];

  function makeLesson(unit, data, index) {
    const vocabulary = data.v.map(([target, translation, exampleTarget, exampleTranslation]) => ({
      target,
      translation,
      exampleTarget,
      exampleTranslation
    }));
    const [grammarTitle, explanation, pattern, examples, tip] = data.g;
    const [scene, speaker, dialogueTarget, dialogueTranslation, dialogueOptions] = data.d;
    const [productionPrompt, productionAnswer, productionTranslation, productionWrong] = data.p;
    const first = vocabulary[0];
    return {
      id: `${unit.id}-${index + 1}`,
      title: data.title,
      minutes: 7,
      objective: data.objective,
      vocabulary,
      steps: [
        {
          type: "vocabulary",
          title: "Escucha y relaciona",
          instruction: "Escucha las expresiones, lee los ejemplos y repite a tu ritmo.",
          itemIds: vocabulary.map((item) => item.target)
        },
        {
          type: "grammar",
          title: grammarTitle,
          explanation,
          pattern,
          examples: examples.map(([target, translation]) => ({ target, translation })),
          tip
        },
        {
          type: "multipleChoice",
          title: "Comprende el vocabulario",
          prompt: `¿Qué expresión significa «${first.translation}»?`,
          options: [vocabulary[0].target, vocabulary[1].target, vocabulary[2].target],
          answer: first.target,
          feedback: `«${first.target}» significa «${first.translation}».`
        },
        {
          type: "fillBlank",
          title: "Completa la frase",
          prompt: data.fill[0],
          answer: data.fill[1],
          acceptedAnswers: [data.fill[1]],
          hint: data.fill[2]
        },
        {
          type: "dialogue",
          title: "Practica la conversación",
          scene,
          turns: [{
            speaker,
            target: dialogueTarget,
            translation: dialogueTranslation,
            options: dialogueOptions.map(([target, translation, correct]) => ({ target, translation, correct }))
          }]
        },
        {
          type: "production",
          title: "Practica una frase útil",
          prompt: productionPrompt,
          options: [productionAnswer, productionWrong],
          answer: productionAnswer,
          model: productionAnswer,
          translation: productionTranslation
        }
      ]
    };
  }

  const units = unitsData.map((unit) => ({
    id: unit.id,
    lessons: unit.lessons.map((lesson, index) => makeLesson(unit, lesson, index))
  }));
  window.FRENCH_A1_CURRICULUM = {
    metadata: {
      language: "fr",
      languageName: "Francés",
      speechLanguage: "fr-FR",
      supportLanguage: "es",
      level: "A1",
      audience: "Hispanohablantes que empiezan desde cero",
      estimatedMinutes: units.flatMap((unit) => unit.lessons).reduce((total, lesson) => total + lesson.minutes, 0)
    },
    roadmap: unitsData.map(({ id, title, canDo, grammar, sounds, vocabulary, game }) => ({
      id, title, canDo, grammar, sounds, vocabulary, game
    })),
    units
  };
})();

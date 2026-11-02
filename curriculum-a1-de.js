(function () {
  const unitsData = [
    {
      id: "de-saludos",
      title: "Saludos y presentaciones",
      canDo: "Saludar, presentarte, decir tu nombre y manejar intercambios breves.",
      grammar: "Pronombres sujeto, sein, heißen y trato formal e informal",
      sounds: "Alfabeto, vocales largas y cortas, ich-Laut y ach-Laut",
      vocabulary: "Saludos, identidad, cortesía y países",
      game: "Reto de saludos y nombres",
      lessons: [
        {
          title: "Saludar según la situación",
          objective: "Saludar y despedirte con fórmulas naturales en situaciones formales e informales.",
          v: [
            ["Guten Morgen", "buenos días (por la mañana)", "Guten Morgen, Frau Klein.", "Buenos días, señora Klein."],
            ["Hallo", "hola", "Hallo, Tom!", "¡Hola, Tom!"],
            ["Guten Abend", "buenas tardes / noches (al saludar)", "Guten Abend, Herr Wolf.", "Buenas tardes, señor Wolf."],
            ["Auf Wiedersehen", "adiós (formal)", "Auf Wiedersehen und danke.", "Adiós y gracias."]
          ],
          g: ["Elegir saludo y despedida según el contexto", "Guten Morgen se usa por la mañana y Guten Abend al llegar por la tarde o noche. Hallo es informal. Auf Wiedersehen es una despedida formal; Tschüss es informal. Guten Tag funciona como saludo neutro durante el día.", "FORMAL: Guten Tag, Frau Klein. · INFORMAL: Hallo, Tom!\nDESPEDIDA: Auf Wiedersehen. · Tschüss.", [["Guten Abend, Herr Wolf.", "Buenas tardes, señor Wolf."], ["Tschüss, Anna!", "¡Chao, Anna!"]], "Gute Nacht se dice normalmente al despedirse para dormir; no es el saludo habitual al llegar por la noche."],
          fill: ["___ Morgen, Frau Klein. (Buenos días, señora Klein.)", "Guten", "Completa la fórmula alemana que se usa por la mañana."],
          d: ["Llegas a una recepción por la mañana.", "Frau Klein", "Guten Morgen!", "¡Buenos días!", [["Guten Morgen!", "¡Buenos días!", true], ["Gute Nacht!", "¡Buenas noches! (al ir a dormir)", false], ["Bis gestern!", "¡Hasta ayer!", false]]],
          p: ["Elige un saludo formal para la mañana.", "Guten Morgen, Frau Klein.", "Buenos días, señora Klein.", "Tschüss, Frau Klein."]
        },
        {
          title: "Decir quién eres",
          objective: "Decir tu nombre y presentar a otra persona con sein.",
          v: [
            ["Ich bin", "soy / estoy", "Ich bin Ana.", "Soy Ana."],
            ["du bist", "tú eres / estás", "Du bist Luis.", "Tú eres Luis."],
            ["er ist", "él es / está", "Er ist Tom.", "Él es Tom."],
            ["Sie sind", "usted es / está", "Sie sind Frau Klein.", "Usted es la señora Klein."]
          ],
          g: ["Conjugar sein y usar el pronombre", "El pronombre sujeto normalmente se expresa y sein es irregular: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. Sie con mayúscula significa usted/ustedes y lleva la forma sind.", "ich bin · du bist · er ist\nwir sind · ihr seid · Sie sind", [["Ich bin Ana.", "Soy Ana."], ["Sie sind Herr Wolf.", "Usted es el señor Wolf."]], "Presta atención a la mayúscula de Sie (usted) frente a sie (ella / ellos / ellas)."],
          fill: ["Ich ___ Ana. (Soy Ana.)", "bin", "Con ich, el verbo sein se conjuga bin."],
          d: ["Conoces a alguien en un curso.", "Tom", "Wer sind Sie?", "¿Quién es usted?", [["Ich bin Ana.", "Soy Ana.", true], ["Du bist Ana.", "Tú eres Ana.", false], ["Ich ist Ana.", "Yo es Ana.", false]]],
          p: ["Elige una frase para decir quién eres.", "Ich bin Ana.", "Soy Ana.", "Ich bist Ana."]
        },
        {
          title: "Decir tu nombre",
          objective: "Decir cómo te llamas y preguntar el nombre de otra persona.",
          v: [
            ["Ich heiße", "me llamo", "Ich heiße Maria.", "Me llamo Maria."],
            ["Wie heißt du?", "¿Cómo te llamas?", "Hallo! Wie heißt du?", "¡Hola! ¿Cómo te llamas?"],
            ["Wie heißen Sie?", "¿Cómo se llama usted?", "Guten Tag. Wie heißen Sie?", "Buenos días. ¿Cómo se llama usted?"],
            ["Freut mich", "encantado/a", "Freut mich, Anna.", "Encantado/a, Anna."]
          ],
          g: ["Usar heißen para decir el nombre", "El verbo heißen («llamarse») cambia según la persona: ich heiße, du heißt, er/sie heißt, wir heißen, ihr heißt, Sie heißen. En la pregunta, el verbo va antes del pronombre: Wie heißt du? El trato formal usa Sie.", "Ich heiße Maria. · Wie heißt du?\nWie heißen Sie, bitte?", [["Wie heißt du?", "¿Cómo te llamas?"], ["Ich heiße David.", "Me llamo David."]], "La combinación ei suena aproximadamente como «ai»; heißen se pronuncia parecido a «jáisən»."],
          fill: ["Wie ___ du? (¿Cómo te llamas?)", "heißt", "La forma de heißen que acompaña a du termina en -ßt."],
          d: ["Te presentan a una compañera nueva.", "Lea", "Wie heißt du?", "¿Cómo te llamas?", [["Ich heiße Maria.", "Me llamo Maria.", true], ["Ich bin heißen Maria.", "Soy llamarse Maria.", false], ["Wie du heißt?", "¿Cómo tú llamas?", false]]],
          p: ["Elige una respuesta natural a «Wie heißt du?».", "Ich heiße Maria.", "Me llamo Maria.", "Ich heißen Maria."]
        },
        {
          title: "Pedir ayuda y deletrear",
          objective: "Pedir que repitan o deletreen una palabra con cortesía.",
          v: [
            ["Bitte", "por favor / de nada", "Ein Wasser, bitte.", "Un agua, por favor."],
            ["Danke", "gracias", "Danke schön!", "¡Muchas gracias!"],
            ["Noch einmal, bitte", "otra vez, por favor", "Sagen Sie das noch einmal, bitte.", "Diga eso otra vez, por favor."],
            ["Wie schreibt man das?", "¿Cómo se escribe eso?", "Wie schreibt man Ihren Namen?", "¿Cómo se escribe su nombre?"]
          ],
          g: ["Usar bitte y el imperativo formal", "Bitte significa «por favor» y también puede responder a Danke. Para pedir una repetición de forma formal se usa Sagen Sie das bitte noch einmal. En una petición formal, Sie precede al verbo en imperativo. En pronunciación, w suena /v/, ei suele sonar /aɪ/ y ie indica una i larga. El sonido ch de ich es suave /ç/; el de ach es posterior /x/.", "Entschuldigung. · Noch einmal, bitte.\nSagen Sie das bitte langsamer.", [["Wie schreibt man das?", "¿Cómo se escribe eso?"], ["Können Sie das wiederholen?", "¿Puede repetirlo?"]], "Practica la diferencia entre ich (/ç/) y ach (/x/); evita pronunciar ch como la jota española."],
          fill: ["Ein Wasser, ___. (Un agua, por favor.)", "bitte", "Completa con la palabra alemana para «por favor»."],
          d: ["No entendiste el apellido en una recepción.", "Der Mitarbeiter", "Können Sie das bitte wiederholen?", "¿Puede repetirlo, por favor?", [["Ja, natürlich.", "Sí, por supuesto.", true], ["Ich heiße natürlich.", "Me llamo por supuesto.", false], ["Auf morgen!", "¡Hasta mañana!", false]]],
          p: ["Elige una petición cortés para pedir que repitan.", "Noch einmal, bitte.", "Otra vez, por favor.", "Noch einmal, danke."]
        }
      ]
    },
    {
      id: "de-datos",
      title: "Datos personales y vida diaria",
      canDo: "Dar datos personales, decir la edad y el teléfono, y hablar de días y horarios.",
      grammar: "Preguntas W, haben, números y expresiones de tiempo",
      sounds: "Números, acento de palabra y consonantes finales",
      vocabulary: "Edad, teléfono, dirección, días y hora",
      game: "Calendario y reloj",
      lessons: [
        {
          title: "Preguntar por datos personales",
          objective: "Preguntar el nombre, el lugar de residencia y el origen.",
          v: [
            ["Wo?", "¿dónde?", "Wo wohnen Sie?", "¿Dónde vive usted?"],
            ["Woher?", "¿de dónde?", "Woher kommst du?", "¿De dónde eres?"],
            ["wohnen", "vivir / residir", "Ich wohne in Berlin.", "Vivo en Berlín."],
            ["kommen aus", "ser / venir de", "Ich komme aus Chile.", "Soy de Chile."]
          ],
          g: ["Formar preguntas con W-Wörter", "Las preguntas con wo («dónde») y woher («de dónde») comienzan con la palabra interrogativa, seguida del verbo y el sujeto: Wo wohnst du? Woher kommen Sie? En una respuesta, el verbo conjugado suele ocupar la segunda posición.", "Wo wohnst du? · Ich wohne in Berlin.\nWoher kommen Sie? · Ich komme aus Chile.", [["Woher kommst du?", "¿De dónde eres?"], ["Wo wohnen Sie?", "¿Dónde vive usted?"]], "En kommen aus, el nombre del país no lleva artículo en muchos casos: Ich komme aus Chile; hay excepciones como aus der Schweiz."],
          fill: ["Wo ___ du? (¿Dónde vives?)", "wohnst", "Con du, wohnen termina en -st."],
          d: ["Conoces a un compañero nuevo.", "Ben", "Woher kommst du?", "¿De dónde eres?", [["Ich komme aus Chile.", "Soy de Chile.", true], ["Ich wohne Chile.", "Vivo Chile.", false], ["Ich bin aus kommen.", "Soy de venir.", false]]],
          p: ["Elige una frase para decir que vives en Berlín.", "Ich wohne in Berlin.", "Vivo en Berlín.", "Ich wohnen in Berlin."]
        },
        {
          title: "Los números y la edad",
          objective: "Decir tu edad y preguntar la edad de otra persona.",
          v: [
            ["null", "cero", "Die Nummer beginnt mit null.", "El número empieza por cero."],
            ["achtzehn", "dieciocho", "Ich bin achtzehn Jahre alt.", "Tengo dieciocho años."],
            ["Wie alt?", "¿qué edad?", "Wie alt bist du?", "¿Qué edad tienes?"],
            ["Jahre alt", "años de edad", "Sie ist zwanzig Jahre alt.", "Ella tiene veinte años."]
          ],
          g: ["Expresar la edad con sein", "En alemán, la edad se expresa con sein («ser/estar») + número + Jahre alt: Ich bin zwanzig Jahre alt. Jahre suele omitirse con eins: Ich bin ein Jahr alt. La pregunta habitual es Wie alt bist du? o Wie alt sind Sie?", "Ich bin 18 Jahre alt.\nWie alt bist du? · Wie alt sind Sie?", [["Ich bin zwanzig Jahre alt.", "Tengo veinte años."], ["Wie alt ist deine Schwester?", "¿Qué edad tiene tu hermana?"]], "No uses haben para la edad: en alemán se «es» una cantidad de años."],
          fill: ["Ich ___ achtzehn Jahre alt. (Tengo dieciocho años.)", "bin", "La edad se expresa con la forma bin del verbo sein."],
          d: ["Hablas con una compañera en clase.", "Mia", "Wie alt bist du?", "¿Qué edad tienes?", [["Ich bin achtzehn Jahre alt.", "Tengo dieciocho años.", true], ["Ich habe achtzehn Jahre.", "Tengo dieciocho años.", false], ["Ich ist achtzehn Jahre.", "Yo es dieciocho años.", false]]],
          p: ["Elige la forma correcta para decir «tengo veinte años».", "Ich bin zwanzig Jahre alt.", "Tengo veinte años.", "Ich habe zwanzig Jahre alt."]
        },
        {
          title: "Decir el teléfono y deletrear",
          objective: "Dar un número ficticio y pedir que deletreen un nombre.",
          v: [
            ["die Telefonnummer", "el número de teléfono", "Meine Telefonnummer ist kurz.", "Mi número de teléfono es corto."],
            ["die Nummer", "el número", "Wie ist Ihre Nummer?", "¿Cuál es su número?"],
            ["die Null", "el cero", "Die Nummer beginnt mit null.", "El número empieza por cero."],
            ["buchstabieren", "deletrear", "Können Sie das buchstabieren?", "¿Puede deletrearlo?"]
          ],
          g: ["Formar preguntas con sein y können", "En una pregunta cerrada, el verbo conjugado va primero: Ist das Ihre Nummer? Con el modal können, el modal ocupa la segunda posición y el infinitivo va al final: Können Sie das buchstabieren?", "Ist das Ihre Telefonnummer?\nKönnen Sie Ihren Namen buchstabieren?", [["Wie ist Ihre Telefonnummer?", "¿Cuál es su número de teléfono?"], ["Können Sie das buchstabieren?", "¿Puede deletrearlo?"]], "Practica con números inventados; no compartas tu número real en ejercicios públicos."],
          fill: ["Können Sie das ___? (¿Puede deletrearlo?)", "buchstabieren", "Después del modal können, el verbo principal queda en infinitivo."],
          d: ["La recepcionista te pide confirmar un número de práctica.", "Die Rezeptionistin", "Können Sie Ihre Nummer wiederholen?", "¿Puede repetir su número?", [["Ja, null, sechs, zwölf, vierunddreißig.", "Sí: cero, seis, doce, treinta y cuatro.", true], ["Ja, ich bin Nummer.", "Sí, soy número.", false], ["Nein, ich buchstabiere null Jahre.", "No, deletreo cero años.", false]]],
          p: ["Elige cómo preguntar si alguien puede deletrear su nombre.", "Können Sie Ihren Namen buchstabieren?", "¿Puede deletrear su nombre?", "Können Sie buchstabiert Ihren Namen?"]
        },
        {
          title: "Los días y las fechas",
          objective: "Nombrar días de la semana y proponer una cita para mañana.",
          v: [
            ["Montag", "lunes", "Der Kurs ist am Montag.", "El curso es el lunes."],
            ["heute", "hoy", "Heute ist Montag.", "Hoy es lunes."],
            ["morgen", "mañana", "Bis morgen!", "¡Hasta mañana!"],
            ["das Datum", "la fecha", "Was ist heute für ein Datum?", "¿Qué fecha es hoy?"]
          ],
          g: ["Usar días y fechas con am", "Los días y meses son sustantivos y llevan mayúscula. Para decir que algo ocurre un día se usa am + día: am Montag. Morgen («mañana») y heute («hoy») suelen ocupar la primera posición; el verbo conjugado permanece en segunda posición: Morgen arbeite ich.", "am Montag · am Dienstag\nMorgen arbeite ich. · Heute ist der 3. Mai.", [["Der Kurs ist am Montag.", "El curso es el lunes."], ["Heute ist Freitag.", "Hoy es viernes."]], "La preposición an se contrae con dem en am: an dem Montag → am Montag."],
          fill: ["Der Kurs ist ___ Montag. (El curso es el lunes.)", "am", "Antes de un día de la semana se usa am."],
          d: ["Organizas una reunión con un compañero.", "Lena", "Hast du morgen Zeit?", "¿Tienes tiempo mañana?", [["Ja, bis morgen!", "¡Sí, hasta mañana!", true], ["Ja, bis gestern!", "¡Sí, hasta ayer!", false], ["Nein, ich bin Montag.", "No, soy lunes.", false]]],
          p: ["Elige cómo decir «El curso es el lunes».", "Der Kurs ist am Montag.", "El curso es el lunes.", "Der Kurs am Montag ist."]
        },
        {
          title: "Decir la hora y organizarse",
          objective: "Preguntar la hora y decir a qué hora empieza una actividad.",
          v: [
            ["Wie spät ist es?", "¿Qué hora es?", "Entschuldigung, wie spät ist es?", "Disculpe, ¿qué hora es?"],
            ["Es ist", "son las / es la hora", "Es ist neun Uhr.", "Son las nueve."],
            ["um neun Uhr", "a las nueve", "Der Kurs beginnt um neun Uhr.", "El curso empieza a las nueve."],
            ["die Uhr", "el reloj / la hora", "Der Bus kommt um acht Uhr.", "El autobús llega a las ocho."]
          ],
          g: ["Expresar la hora con um", "Para preguntar la hora se usa Wie spät ist es? o Wie viel Uhr ist es? La hora se expresa con Es ist + hora. Para indicar a qué hora sucede algo, se usa um: um neun Uhr.", "Wie spät ist es? · Es ist neun Uhr.\nDer Kurs beginnt um neun Uhr.", [["Es ist sieben Uhr.", "Son las siete."], ["Der Zug fährt um zwölf Uhr.", "El tren sale a las doce."]], "En el sistema de 24 horas, 18 Uhr equivale a las seis de la tarde."],
          fill: ["Der Kurs beginnt ___ neun Uhr. (El curso empieza a las nueve.)", "um", "Para indicar una hora concreta, coloca um delante de la hora."],
          d: ["Preguntas la hora antes de entrar a clase.", "Paul", "Wie spät ist es?", "¿Qué hora es?", [["Es ist neun Uhr.", "Son las nueve.", true], ["Ich bin neun Uhr.", "Soy las nueve.", false], ["Es sind neun Jahre.", "Son nueve años.", false]]],
          p: ["Elige una frase para decir que el tren sale a las ocho.", "Der Zug fährt um acht Uhr.", "El tren sale a las ocho.", "Der Zug um acht Uhr fährt."]
        }
      ]
    },
    {
      id: "de-familia",
      title: "La familia y la rutina",
      canDo: "Presentar a tu familia, describir personas y hablar de actividades cotidianas.",
      grammar: "Género y artículos, posesivos, presente y negación",
      sounds: "Vocales finales, diéresis y consonantes finales",
      vocabulary: "Familia, descripciones y rutina",
      game: "Árbol familiar",
      lessons: [
        {
          title: "Presentar a la familia",
          objective: "Nombrar familiares y decir quién pertenece a tu familia.",
          v: [
            ["die Mutter", "la madre", "Meine Mutter heißt Anna.", "Mi madre se llama Anna."],
            ["der Vater", "el padre", "Mein Vater wohnt in Bonn.", "Mi padre vive en Bonn."],
            ["die Schwester", "la hermana", "Ich habe eine Schwester.", "Tengo una hermana."],
            ["der Bruder", "el hermano", "Mein Bruder ist nett.", "Mi hermano es simpático."]
          ],
          g: ["Aprender el género con el artículo", "Los sustantivos alemanes se escriben con mayúscula y tienen género gramatical. Aprende cada palabra con su artículo: der Vater (masculino), die Mutter (femenino), das Kind (neutro). El artículo indefinido es ein para masculino/neutro y eine para femenino.", "der Vater · die Mutter · das Kind\nEin Bruder · eine Schwester", [["Meine Mutter heißt Anna.", "Mi madre se llama Anna."], ["Ich habe einen Bruder.", "Tengo un hermano."]], "El género gramatical no siempre coincide con el sexo; memoriza el artículo junto a cada sustantivo."],
          fill: ["Das ist ___ Schwester. (Esta es una hermana.)", "eine", "Schwester es femenino: usa el artículo indefinido femenino."],
          d: ["Una amiga te muestra una foto familiar.", "Lena", "Wer ist das?", "¿Quién es?", [["Das ist meine Schwester.", "Es mi hermana.", true], ["Das ist mein Schwester.", "Es mi hermana.", false], ["Das sind meine Schwester.", "Son mi hermana.", false]]],
          p: ["Elige cómo decir «mi madre».", "meine Mutter", "mi madre", "mein Mutter"]
        },
        {
          title: "Describir a las personas",
          objective: "Describir a un familiar con adjetivos sencillos.",
          v: [
            ["groß", "alto/a, grande", "Mein Vater ist groß.", "Mi padre es alto."],
            ["klein", "pequeño/a, bajo/a", "Meine Schwester ist klein.", "Mi hermana es bajita."],
            ["freundlich", "amable", "Der Lehrer ist freundlich.", "El profesor es amable."],
            ["müde", "cansado/a", "Ich bin heute müde.", "Hoy estoy cansado/a."]
          ],
          g: ["Usar adjetivos después de sein", "Después de sein, el adjetivo predicativo no recibe una terminación: Der Vater ist groß. Die Mutter ist groß. El sujeto determina el verbo sein, pero el adjetivo mantiene su forma.", "Der Bruder ist freundlich.\nDie Schwester ist freundlich.\nIch bin müde.", [["Meine Mutter ist klein.", "Mi madre es bajita."], ["Die Kinder sind müde.", "Los niños están cansados."]], "No añadas una terminación al adjetivo después de sein: die Mutter ist klein, no kleine."],
          fill: ["Mein Vater ist ___. (Mi padre es alto.)", "groß", "Después de ist, usa el adjetivo predicativo sin terminación."],
          d: ["Presentas a tu familia a un compañero.", "Tim", "Wie ist deine Schwester?", "¿Cómo es tu hermana?", [["Sie ist freundlich und klein.", "Es amable y bajita.", true], ["Sie ist freundliche und kleine.", "Es amable y bajita.", false], ["Er ist freundlich und klein.", "Él es amable y bajito.", false]]],
          p: ["Elige la frase correcta para decir «Mi hermana es amable».", "Meine Schwester ist freundlich.", "Mi hermana es amable.", "Meine Schwester ist freundliche."]
        },
        {
          title: "Hablar de la rutina",
          objective: "Decir qué haces cada día y negar una actividad sencilla.",
          v: [
            ["arbeiten", "trabajar", "Ich arbeite in Berlin.", "Trabajo en Berlín."],
            ["lernen", "aprender / estudiar", "Ich lerne Deutsch.", "Estudio alemán."],
            ["jeden Tag", "todos los días", "Wir lernen jeden Tag.", "Estudiamos todos los días."],
            ["nicht", "no", "Ich arbeite heute nicht.", "Hoy no trabajo."]
          ],
          g: ["Conjugar verbos y colocar nicht", "En presente, muchos verbos añaden -e con ich, -st con du y -t con er/sie/es: ich lerne, du lernst, sie lernt. Nicht suele ir después del verbo conjugado o cerca del elemento que se niega: Ich arbeite heute nicht.", "ich lerne · du lernst · sie lernt\nIch arbeite heute nicht.", [["Ich lerne jeden Tag Deutsch.", "Estudio alemán todos los días."], ["Er arbeitet heute nicht.", "Él no trabaja hoy."]], "El verbo conjugado suele estar en segunda posición, incluso si empiezas con una expresión temporal: Heute arbeite ich nicht."],
          fill: ["Ich ___ Deutsch. (Estudio alemán.)", "lerne", "Con ich, lernen termina en -e."],
          d: ["Una compañera pregunta qué haces a diario.", "Mia", "Lernst du jeden Tag?", "¿Estudias todos los días?", [["Ja, ich lerne jeden Tag Deutsch.", "Sí, estudio alemán todos los días.", true], ["Ja, ich jeden Tag lerne Deutsch.", "Sí, yo todos los días estudio alemán.", false], ["Ja, ich lernst jeden Tag.", "Sí, estudias todos los días.", false]]],
          p: ["Elige una frase para decir que hoy no trabajas.", "Ich arbeite heute nicht.", "Hoy no trabajo.", "Ich nicht arbeite heute."]
        }
      ]
    },
    {
      id: "de-estudios",
      title: "Estudios, trabajo y preferencias",
      canDo: "Hablar de profesiones, idiomas, horarios y capacidades.",
      grammar: "Profesiones, orden verbal, können y preguntas cerradas",
      sounds: "Acento de frase, ch y vocales con diéresis",
      vocabulary: "Profesiones, escuela, idiomas y actividades",
      game: "Adivina la profesión",
      lessons: [
        {
          title: "Hablar de profesiones",
          objective: "Decir a qué te dedicas y preguntar por la profesión de otra persona.",
          v: [
            ["der Lehrer", "el profesor", "Er ist Lehrer.", "Él es profesor."],
            ["die Ärztin", "la médica", "Sie ist Ärztin.", "Ella es médica."],
            ["der Student", "el estudiante universitario", "Ich bin Student.", "Soy estudiante universitario."],
            ["der Beruf", "la profesión", "Was ist Ihr Beruf?", "¿Cuál es su profesión?"]
          ],
          g: ["Hablar de profesiones con sein", "Después de sein, muchas profesiones se dicen sin artículo: Ich bin Lehrer. Sie ist Ärztin. En la pregunta, Was sind Sie von Beruf? es una forma natural y cortés de preguntar la profesión. Algunas profesiones tienen formas femeninas en -in.", "Ich bin Lehrer. · Sie ist Ärztin.\nWas sind Sie von Beruf?", [["Er ist Arzt.", "Él es médico."], ["Sie ist Studentin.", "Ella es estudiante universitaria."]], "No uses un artículo indefinido tras sein al indicar profesión de manera general: Ich bin Lehrer."],
          fill: ["Sie ist ___. (Ella es médica.)", "Ärztin", "Completa con la profesión femenina que empieza por Ä."],
          d: ["Te presentan a una persona en un hospital.", "Paul", "Was ist Frau Klein von Beruf?", "¿Cuál es la profesión de la señora Klein?", [["Sie ist Ärztin.", "Es médica.", true], ["Sie hat Ärztin.", "Tiene médica.", false], ["Sie ist eine Ärztin von Beruf.", "Es una médica de profesión.", false]]],
          p: ["Elige una frase natural para decir «Soy profesor».", "Ich bin Lehrer.", "Soy profesor.", "Ich bin ein Lehrer."]
        },
        {
          title: "Hablar de idiomas y actividades",
          objective: "Decir qué idiomas hablas y qué estudias.",
          v: [
            ["Deutsch", "alemán", "Ich lerne Deutsch.", "Estudio alemán."],
            ["Englisch", "inglés", "Sie spricht Englisch.", "Ella habla inglés."],
            ["sprechen", "hablar", "Wir sprechen Spanisch.", "Hablamos español."],
            ["die Sprache", "el idioma", "Deutsch ist eine Sprache.", "El alemán es un idioma."]
          ],
          g: ["Conjugar sprechen y mantener el verbo en segunda posición", "Sprechen es irregular en du y er/sie: ich spreche, du sprichst, er spricht. En una oración principal, el verbo conjugado ocupa la segunda posición: Heute spreche ich Deutsch. Si un infinitivo acompaña un modal, queda al final.", "Ich spreche Deutsch.\nHeute spricht sie Englisch.\nIch kann Deutsch sprechen.", [["Wir sprechen Spanisch.", "Hablamos español."], ["Heute lerne ich Deutsch.", "Hoy estudio alemán."]], "Deutsch, Englisch y Spanisch se escriben con mayúscula porque son sustantivos cuando nombran idiomas."],
          fill: ["Heute ___ ich Deutsch. (Hoy estudio alemán.)", "lerne", "El verbo conjugado va en segunda posición; con ich, lernen es lerne."],
          d: ["Una compañera pregunta qué idioma estudias.", "Anna", "Lernst du Deutsch?", "¿Estudias alemán?", [["Ja, ich lerne Deutsch.", "Sí, estudio alemán.", true], ["Ja, ich Deutsch lerne.", "Sí, alemán estudio.", false], ["Ja, ich lernt Deutsch.", "Sí, estudias alemán.", false]]],
          p: ["Elige cómo decir «Hoy hablo alemán».", "Heute spreche ich Deutsch.", "Hoy hablo alemán.", "Heute ich spreche Deutsch."]
        },
        {
          title: "Decir lo que puedes hacer",
          objective: "Expresar una capacidad y pedir ayuda de forma sencilla.",
          v: [
            ["können", "poder", "Ich kann gut kochen.", "Puedo cocinar bien."],
            ["helfen", "ayudar", "Kannst du mir helfen?", "¿Puedes ayudarme?"],
            ["kochen", "cocinar", "Wir kochen heute zusammen.", "Hoy cocinamos juntos."],
            ["gut", "bien", "Sie spricht gut Deutsch.", "Ella habla bien alemán."]
          ],
          g: ["Usar el modal können", "Können se conjuga ich kann, du kannst, er/sie kann, wir können, ihr könnt, Sie können. El modal se conjuga en segunda posición y el verbo principal va en infinitivo al final: Ich kann Deutsch sprechen.", "Ich kann kochen.\nKannst du mir helfen?\nWir können heute lernen.", [["Sie kann gut Deutsch sprechen.", "Ella puede hablar bien alemán."], ["Können Sie mir helfen?", "¿Puede ayudarme?"]], "En una pregunta cerrada, el modal va primero: Kannst du…? El verbo principal permanece en infinitivo al final."],
          fill: ["Ich ___ gut kochen. (Puedo cocinar bien.)", "kann", "La forma de können con ich es kann."],
          d: ["Estás en clase y necesitas ayuda.", "Der Lehrer", "Kann ich Ihnen helfen?", "¿Puedo ayudarle?", [["Ja, bitte. Können Sie das wiederholen?", "Sí, por favor. ¿Puede repetirlo?", true], ["Ja, ich kann wiederholen Sie.", "Sí, puedo repetir usted.", false], ["Ja, ich bin helfen.", "Sí, soy ayudar.", false]]],
          p: ["Elige una frase correcta para decir que puedes cocinar.", "Ich kann kochen.", "Puedo cocinar.", "Ich kann koche."]
        },
        {
          title: "Preguntar por los horarios",
          objective: "Preguntar a qué hora empieza el trabajo o una clase.",
          v: [
            ["Wann?", "¿cuándo?", "Wann beginnt der Kurs?", "¿Cuándo empieza el curso?"],
            ["beginnen", "empezar", "Die Arbeit beginnt um acht.", "El trabajo empieza a las ocho."],
            ["am Morgen", "por la mañana", "Ich arbeite am Morgen.", "Trabajo por la mañana."],
            ["spät", "tarde", "Der Kurs endet spät.", "El curso termina tarde."]
          ],
          g: ["Preguntar cuándo y colocar el verbo", "Wann («cuándo») va al inicio; el verbo conjugado ocupa inmediatamente la segunda posición: Wann beginnt der Kurs? Si la pregunta empieza con una expresión temporal, el verbo sigue en segunda posición y el sujeto va después: Am Morgen beginnt der Kurs.", "Wann beginnt die Arbeit?\nAm Morgen beginnt der Kurs.\nDer Kurs beginnt um acht Uhr.", [["Wann beginnt der Unterricht?", "¿Cuándo empieza la clase?"], ["Am Morgen arbeite ich.", "Trabajo por la mañana."]], "En preguntas con W, no inviertas el orden como en una pregunta sí/no: Wann beginnt…?; sí/no: Beginnt…?"],
          fill: ["Wann ___ der Kurs? (¿Cuándo empieza el curso?)", "beginnt", "Con el sujeto masculino der Kurs, beginnen toma la terminación -t."],
          d: ["Quieres saber a qué hora empieza el turno.", "Der Kollege", "Wann beginnt die Arbeit?", "¿Cuándo empieza el trabajo?", [["Die Arbeit beginnt um acht Uhr.", "El trabajo empieza a las ocho.", true], ["Die Arbeit um acht beginnt.", "El trabajo a las ocho empieza.", false], ["Die Arbeit bin acht Uhr.", "El trabajo soy ocho horas.", false]]],
          p: ["Elige cómo decir que la clase empieza por la mañana.", "Am Morgen beginnt der Kurs.", "La clase empieza por la mañana.", "Am Morgen der Kurs beginnt."]
        }
      ]
    },
    {
      id: "de-casa",
      title: "La casa y la ciudad",
      canDo: "Describir una vivienda, ubicar objetos y preguntar por lugares del barrio.",
      grammar: "Es gibt con acusativo, preposiciones de lugar y pronombres demostrativos",
      sounds: "Consonantes compuestas, ch y vocales largas",
      vocabulary: "Habitaciones, muebles y lugares de la ciudad",
      game: "Plano del barrio",
      lessons: [
        {
          title: "Describir una vivienda",
          objective: "Decir qué habitaciones y muebles hay en casa.",
          v: [
            ["die Wohnung", "el apartamento", "Meine Wohnung ist klein.", "Mi apartamento es pequeño."],
            ["das Zimmer", "la habitación", "Das Zimmer ist hell.", "La habitación es luminosa."],
            ["die Küche", "la cocina", "Die Küche ist modern.", "La cocina es moderna."],
            ["der Tisch", "la mesa", "Der Tisch steht hier.", "La mesa está aquí."]
          ],
          g: ["Decir qué hay con es gibt", "Es gibt significa «hay» y va seguido de un complemento en acusativo. En masculino cambia el artículo: der Tisch → einen Tisch. En femenino y neutro el artículo indefinido mantiene su forma: eine Küche, ein Zimmer.", "Es gibt einen Tisch.\nEs gibt eine Küche und ein Zimmer.", [["Es gibt einen Balkon.", "Hay un balcón."], ["Es gibt eine Küche.", "Hay una cocina."]], "Después de es gibt, piensa «¿qué hay?»; el objeto es acusativo, aunque en español digamos «hay»."],
          fill: ["Es gibt ___ Tisch. (Hay una mesa.)", "einen", "Tisch es masculino y con es gibt va en acusativo: einen."],
          d: ["Preguntas por los muebles de un apartamento.", "Der Makler", "Gibt es einen Tisch?", "¿Hay una mesa?", [["Ja, es gibt einen Tisch.", "Sí, hay una mesa.", true], ["Ja, es gibt ein Tisch.", "Sí, hay una mesa.", false], ["Ja, einen Tisch gibt es?", "Sí, una mesa hay?", false]]],
          p: ["Elige una frase correcta para decir que hay un sofá.", "Es gibt ein Sofa.", "Hay un sofá.", "Es gibt einen Sofa."]
        },
        {
          title: "Ubicar objetos",
          objective: "Decir dónde está un objeto con preposiciones frecuentes.",
          v: [
            ["auf", "sobre / encima de", "Das Buch liegt auf dem Tisch.", "El libro está sobre la mesa."],
            ["unter", "debajo de", "Die Tasche ist unter dem Stuhl.", "El bolso está debajo de la silla."],
            ["neben", "al lado de", "Der Stuhl steht neben dem Tisch.", "La silla está al lado de la mesa."],
            ["hier", "aquí", "Die Schlüssel sind hier.", "Las llaves están aquí."]
          ],
          g: ["Usar dativo con ubicación", "Para indicar una ubicación fija (wo? «¿dónde?»), auf, unter y neben rigen dativo. El artículo masculino/neutro dem y el femenino der aparecen en expresiones como auf dem Tisch y neben der Tür. Los verbos stehen, liegen y sitzen describen posición.", "Das Buch liegt auf dem Tisch.\nDie Tasche ist unter dem Stuhl.\nDer Stuhl steht neben der Tür.", [["Die Schlüssel liegen auf dem Tisch.", "Las llaves están sobre la mesa."], ["Der Stuhl steht neben der Tür.", "La silla está al lado de la puerta."]], "Estas preposiciones de dos casos llevan acusativo con destino/movimiento (wohin?) y dativo con lugar (wo?). Aquí expresamos lugar fijo."],
          fill: ["Das Buch liegt auf ___ Tisch. (El libro está sobre la mesa.)", "dem", "Tisch es masculino; para una ubicación fija se usa el dativo dem."],
          d: ["Buscas tus llaves en una sala.", "Lena", "Wo sind die Schlüssel?", "¿Dónde están las llaves?", [["Sie liegen auf dem Tisch.", "Están sobre la mesa.", true], ["Sie liegen auf den Tisch.", "Están sobre la mesa.", false], ["Sie sind in dem Tisch.", "Están dentro de la mesa.", false]]],
          p: ["Elige cómo decir que el bolso está debajo de la silla.", "Die Tasche ist unter dem Stuhl.", "El bolso está debajo de la silla.", "Die Tasche ist unter den Stuhl."]
        },
        {
          title: "Hablar del barrio",
          objective: "Nombrar lugares del barrio y decir dónde están.",
          v: [
            ["die Straße", "la calle", "Die Straße ist ruhig.", "La calle es tranquila."],
            ["der Bahnhof", "la estación de tren", "Der Bahnhof ist nah.", "La estación está cerca."],
            ["der Supermarkt", "el supermercado", "Der Supermarkt ist hier.", "El supermercado está aquí."],
            ["in der Nähe", "cerca", "Der Park ist in der Nähe.", "El parque está cerca."]
          ],
          g: ["Usar sein y expresiones de lugar", "Para describir un lugar se usa sein seguido del adjetivo: Die Straße ist ruhig. In der Nähe significa «cerca». Para indicar ubicación se usa in + dativo: Der Supermarkt ist in der Stadt; la forma de ciudad suele llevar in der.", "Der Bahnhof ist in der Nähe.\nDer Supermarkt ist in der Stadt.\nDer Park ist neben dem Bahnhof.", [["Die Straße ist ruhig.", "La calle es tranquila."], ["Der Park ist in der Nähe.", "El parque está cerca."]], "Stadt es femenino: in der Stadt. Aprende las preposiciones junto con los artículos que las acompañan."],
          fill: ["Der Park ist in ___ Nähe. (El parque está cerca.)", "der", "La expresión fija es «in der Nähe»."],
          d: ["Una visitante pregunta si hay un supermercado cerca.", "Ein Passant", "Ist hier ein Supermarkt in der Nähe?", "¿Hay un supermercado cerca de aquí?", [["Ja, der Supermarkt ist neben dem Bahnhof.", "Sí, el supermercado está al lado de la estación.", true], ["Ja, die Supermarkt ist neben Bahnhof.", "Sí, el supermercado está al lado de estación.", false], ["Ja, ich bin Supermarkt.", "Sí, soy supermercado.", false]]],
          p: ["Elige cómo decir «La estación está cerca».", "Der Bahnhof ist in der Nähe.", "La estación está cerca.", "Der Bahnhof sind in der Nähe."]
        }
      ]
    },
    {
      id: "de-comida",
      title: "Comida y cafetería",
      canDo: "Nombrar alimentos, pedir en un café y expresar gustos y cantidades sencillas.",
      grammar: "Acusativo, möchten y nombres de medidas",
      sounds: "Vocales largas y cortas, ü y ö",
      vocabulary: "Alimentos, bebidas, pedidos y cantidades",
      game: "Menú de cafetería",
      lessons: [
        {
          title: "Nombrar alimentos y bebidas",
          objective: "Nombrar alimentos cotidianos y pedir algo sencillo.",
          v: [
            ["das Brot", "el pan", "Ich esse Brot.", "Como pan."],
            ["das Wasser", "el agua", "Ich trinke Wasser.", "Bebo agua."],
            ["der Käse", "el queso", "Der Käse ist lecker.", "El queso está rico."],
            ["der Apfel", "la manzana", "Ich esse einen Apfel.", "Como una manzana."]
          ],
          g: ["Usar acusativo con objetos directos", "El complemento directo va en acusativo. El cambio más visible es el artículo masculino: der Apfel → einen Apfel. Los artículos femeninos y neutros permanecen iguales: die Banane, das Brot. Con cantidades generales sin artículo, se puede decir Ich esse Brot.", "Ich esse einen Apfel.\nIch trinke das Wasser.\nSie kauft eine Banane.", [["Ich esse einen Apfel.", "Como una manzana."], ["Ich kaufe das Brot.", "Compro el pan."]], "El acusativo responde a «¿qué?» o «¿a quién?» recibe directamente la acción."],
          fill: ["Ich esse ___ Apfel. (Como una manzana.)", "einen", "Apfel es masculino y es objeto directo; usa el artículo masculino en acusativo."],
          d: ["Pides un tentempié en una cafetería.", "Der Verkäufer", "Möchten Sie etwas essen?", "¿Desea comer algo?", [["Ja, einen Apfel, bitte.", "Sí, una manzana, por favor.", true], ["Ja, ein Apfel, bitte.", "Sí, una manzana, por favor.", false], ["Ja, ich esse ein Apfel.", "Sí, como una manzana.", false]]],
          p: ["Elige cómo decir «Bebo agua».", "Ich trinke Wasser.", "Bebo agua.", "Ich trinkt Wasser."]
        },
        {
          title: "Pedir en un café",
          objective: "Pedir una bebida de manera amable y comprender una oferta.",
          v: [
            ["Ich möchte", "quisiera", "Ich möchte einen Tee.", "Quisiera un té."],
            ["der Kaffee", "el café", "Einen Kaffee, bitte.", "Un café, por favor."],
            ["der Tee", "el té", "Ich trinke gern Tee.", "Me gusta beber té."],
            ["die Rechnung", "la cuenta", "Die Rechnung, bitte.", "La cuenta, por favor."]
          ],
          g: ["Pedir con möchte", "Möchten es una forma cortés para pedir: Ich möchte einen Kaffee. El verbo möchte se conjuga y el infinitivo, si aparece, va al final. El objeto masculino lleva acusativo: der Kaffee → einen Kaffee.", "Ich möchte einen Kaffee.\nMöchten Sie einen Tee?\nIch möchte bezahlen.", [["Ich möchte einen Tee.", "Quisiera un té."], ["Die Rechnung, bitte.", "La cuenta, por favor."]], "Gern o bitte hacen que el pedido suene amable: Einen Kaffee, bitte."],
          fill: ["Ich ___ einen Kaffee. (Quisiera un café.)", "möchte", "Con ich, la forma cortés de möchten es möchte."],
          d: ["El camarero toma tu pedido.", "Der Kellner", "Was möchten Sie trinken?", "¿Qué desea beber?", [["Ich möchte einen Tee, bitte.", "Quisiera un té, por favor.", true], ["Ich möchte ein Tee, bitte.", "Quisiera un té, por favor.", false], ["Ich bin einen Tee.", "Soy un té.", false]]],
          p: ["Elige cómo pedir un café de forma amable.", "Ich möchte einen Kaffee, bitte.", "Quisiera un café, por favor.", "Ich möchte ein Kaffee, bitte."]
        },
        {
          title: "Hablar de gustos y cantidades",
          objective: "Decir qué comida te gusta y pedir una cantidad sencilla.",
          v: [
            ["gern", "con gusto / gustar hacer algo", "Ich trinke gern Tee.", "Me gusta beber té."],
            ["ein Glas", "un vaso", "Ein Glas Wasser, bitte.", "Un vaso de agua, por favor."],
            ["ohne Zucker", "sin azúcar", "Kaffee ohne Zucker, bitte.", "Café sin azúcar, por favor."],
            ["lecker", "rico / delicioso", "Die Suppe ist lecker.", "La sopa está rica."]
          ],
          g: ["Expresar gustos con gern y cantidades", "Gern suele acompañar al verbo para decir que algo te gusta: Ich trinke gern Tee. Un recipiente se expresa con su artículo: ein Glas Wasser. Ohne («sin») va seguido del sustantivo; Zucker es masculino, pero aquí no lleva artículo.", "Ich esse gern Brot.\nein Glas Wasser · eine Tasse Tee\nKaffee ohne Zucker", [["Ich trinke gern Kaffee.", "Me gusta beber café."], ["Ein Glas Wasser, bitte.", "Un vaso de agua, por favor."]], "Gern no cambia; se coloca normalmente después del verbo conjugado o al final de la frase."],
          fill: ["Ein Glas ___, bitte. (Un vaso de agua, por favor.)", "Wasser", "Completa con el sustantivo neutro que significa «agua»."],
          d: ["La camarera te pregunta si quieres azúcar.", "Die Kellnerin", "Mit Zucker?", "¿Con azúcar?", [["Nein, Kaffee ohne Zucker, bitte.", "No, café sin azúcar, por favor.", true], ["Nein, Kaffee nicht Zucker.", "No, café no azúcar.", false], ["Nein, ich bin Zucker.", "No, soy azúcar.", false]]],
          p: ["Elige una frase correcta para decir que te gusta el té.", "Ich trinke gern Tee.", "Me gusta beber té.", "Ich gern trinke Tee."]
        }
      ]
    },
    {
      id: "de-compras",
      title: "Compras y desplazamientos",
      canDo: "Preguntar precios, comprar ropa o billetes y pedir indicaciones sencillas.",
      grammar: "Dieser, acusativo, verbos separables y movimiento frente a ubicación",
      sounds: "Números, consonantes y acento de compuestos",
      vocabulary: "Precios, ropa, transporte y direcciones",
      game: "Mercado y mapa",
      lessons: [
        {
          title: "Preguntar el precio",
          objective: "Preguntar cuánto cuesta un objeto y comprender el precio.",
          v: [
            ["Wie viel kostet das?", "¿Cuánto cuesta esto?", "Wie viel kostet das Buch?", "¿Cuánto cuesta el libro?"],
            ["der Euro", "el euro", "Das kostet zehn Euro.", "Cuesta diez euros."],
            ["teuer", "caro", "Der Mantel ist teuer.", "El abrigo es caro."],
            ["kosten", "costar", "Wie viel kostet die Tasche?", "¿Cuánto cuesta el bolso?"]
          ],
          g: ["Preguntar el precio con wie viel", "Wie viel kostet…? pregunta por el precio; kosten concuerda con un objeto plural. El objeto es sujeto de kosten, por lo que permanece en nominativo: Wie viel kostet der Mantel?; Wie viel kosten die Schuhe?", "Wie viel kostet das?\nWie viel kostet die Tasche?\nWie viel kosten die Schuhe?", [["Das kostet fünf Euro.", "Cuesta cinco euros."], ["Wie viel kostet der Mantel?", "¿Cuánto cuesta el abrigo?"]], "Euro no suele llevar una terminación plural audible en los precios: fünf Euro."],
          fill: ["Wie viel ___ die Tasche? (¿Cuánto cuesta el bolso?)", "kostet", "Tasche es singular; usa la forma de kosten con la tercera persona singular."],
          d: ["Preguntas el precio de un abrigo.", "Der Verkäufer", "Wie viel kostet der Mantel?", "¿Cuánto cuesta el abrigo?", [["Er kostet achtzig Euro.", "Cuesta ochenta euros.", true], ["Er kosten achtzig Euro.", "Cuesta ochenta euros.", false], ["Er ist achtzig Jahre.", "Tiene ochenta años.", false]]],
          p: ["Elige una pregunta correcta para saber el precio.", "Wie viel kostet das Buch?", "¿Cuánto cuesta el libro?", "Wie viel kosten das Buch?"]
        },
        {
          title: "Elegir ropa y colores",
          objective: "Nombrar prendas, indicar colores y elegir una talla.",
          v: [
            ["das Hemd", "la camisa", "Das Hemd ist blau.", "La camisa es azul."],
            ["die Hose", "el pantalón", "Die Hose ist schwarz.", "El pantalón es negro."],
            ["blau", "azul", "Ich möchte das blaue Hemd.", "Quisiera la camisa azul."],
            ["die Größe", "la talla", "Welche Größe haben Sie?", "¿Qué talla tiene usted?"]
          ],
          g: ["Usar dieser y los adjetivos", "Dieser («este») concuerda con el género y caso del sustantivo: dieser Mantel (masculino nominativo), diese Hose (femenino), dieses Hemd (neutro). Antes del sustantivo, el adjetivo recibe una terminación; con el artículo definido, suele ser -e en nominativo singular: das blaue Hemd.", "dieser Mantel · diese Hose · dieses Hemd\ndas blaue Hemd · die schwarze Hose", [["Das blaue Hemd ist schön.", "La camisa azul es bonita."], ["Diese Hose ist sehr bequem.", "Este pantalón es muy cómodo."]], "Los colores después de sein no llevan terminación: Das Hemd ist blau; antes del sustantivo sí: das blaue Hemd."],
          fill: ["Das ___ Hemd ist schön. (La camisa azul es bonita.)", "blaue", "Antes del sustantivo con artículo definido, el adjetivo lleva la terminación -e."],
          d: ["Buscas una camisa de otro color.", "Die Verkäuferin", "Welche Farbe möchten Sie?", "¿Qué color desea?", [["Ich möchte das blaue Hemd.", "Quisiera la camisa azul.", true], ["Ich möchte der blaue Hemd.", "Quisiera el camisa azul.", false], ["Ich möchte das blau Hemd.", "Quisiera la camisa azul.", false]]],
          p: ["Elige la frase correcta para «La camisa azul es bonita».", "Das blaue Hemd ist schön.", "La camisa azul es bonita.", "Das blau Hemd ist schön."]
        },
        {
          title: "Ir a lugares de la ciudad",
          objective: "Decir adónde vas y pedir indicaciones en una ciudad.",
          v: [
            ["gehen", "ir / caminar", "Ich gehe zum Bahnhof.", "Voy a la estación."],
            ["der Bahnhof", "la estación de tren", "Der Bahnhof ist hier.", "La estación está aquí."],
            ["geradeaus", "todo recto", "Gehen Sie geradeaus.", "Siga todo recto."],
            ["links", "a la izquierda", "Dann gehen Sie links.", "Después vaya a la izquierda."]
          ],
          g: ["Expresar destino con zu y zum", "Zu suele indicar desplazamiento hacia personas o lugares. Se contrae con dem en zum y con der en zur: zum Bahnhof, zur Schule. Para dar instrucciones formales se usa el imperativo de cortesía con Sie: Gehen Sie geradeaus.", "Ich gehe zum Bahnhof.\nSie geht zur Schule.\nGehen Sie geradeaus.", [["Wir gehen zum Bahnhof.", "Vamos a la estación."], ["Gehen Sie dann nach links.", "Después vaya a la izquierda."]], "Bahnhof es masculino y Schule femenino; por eso decimos zum Bahnhof y zur Schule."],
          fill: ["Ich gehe ___ Bahnhof. (Voy a la estación.)", "zum", "Zu + dem se contrae en zum; Bahnhof es masculino."],
          d: ["Preguntas cómo llegar a la estación.", "Ein Passant", "Entschuldigung, wo ist der Bahnhof?", "Disculpe, ¿dónde está la estación?", [["Gehen Sie geradeaus und dann links.", "Siga todo recto y después a la izquierda.", true], ["Gehen Sie geradeaus und dann gestern.", "Siga todo recto y después ayer.", false], ["Ich bin der Bahnhof.", "Soy la estación.", false]]],
          p: ["Elige una indicación formal para seguir recto.", "Gehen Sie geradeaus.", "Siga todo recto.", "Du gehen geradeaus."]
        },
        {
          title: "Comprar un billete",
          objective: "Pedir un billete de tren y preguntar a qué hora sale.",
          v: [
            ["die Fahrkarte", "el billete de transporte", "Eine Fahrkarte nach Köln, bitte.", "Un billete a Colonia, por favor."],
            ["der Zug", "el tren", "Der Zug fährt um zwölf Uhr.", "El tren sale a las doce."],
            ["nach", "a (ciudades y países)", "Ich fahre nach Hamburg.", "Viajo a Hamburgo."],
            ["abfahren", "salir (un transporte)", "Der Zug fährt um acht ab.", "El tren sale a las ocho."]
          ],
          g: ["Usar nach y verbos separables", "Nach se usa normalmente con ciudades y muchos países sin artículo para indicar destino: nach Köln. Abfahren es separable: la parte conjugada fährt ocupa la segunda posición y ab va al final: Der Zug fährt um acht ab.", "Ich fahre nach Berlin.\nDer Zug fährt um acht Uhr ab.\nWann fährt der Bus ab?", [["Eine Fahrkarte nach Köln, bitte.", "Un billete a Colonia, por favor."], ["Der Zug fährt um acht ab.", "El tren sale a las ocho."]], "El infinitivo separable se escribe junto: abfahren; en una oración principal se separa: Der Zug fährt ab."],
          fill: ["Der Zug fährt um acht ___. (El tren sale a las ocho.)", "ab", "Abfahren es separable; coloca ab al final de la oración principal."],
          d: ["Compras un billete en la estación.", "Der Mitarbeiter", "Wohin möchten Sie fahren?", "¿Adónde desea viajar?", [["Eine Fahrkarte nach Köln, bitte.", "Un billete a Colonia, por favor.", true], ["Eine Fahrkarte von Köln gestern.", "Un billete desde Colonia ayer.", false], ["Ich bin nach Köln Fahrkarte.", "Soy a Colonia billete.", false]]],
          p: ["Elige una petición cortés de billete a Berlín.", "Eine Fahrkarte nach Berlin, bitte.", "Un billete a Berlín, por favor.", "Ein Fahrkarte nach Berlin, bitte."]
        }
      ]
    },
    {
      id: "de-freizeit",
      title: "Tiempo libre, clima y planes",
      canDo: "Hablar del clima, contar actividades pasadas y proponer planes sencillos.",
      grammar: "Expresiones del clima, Perfekt y verbos modales",
      sounds: "Entonación narrativa, consonantes y acento verbal",
      vocabulary: "Clima, ocio, días y actividades",
      game: "Plan para el fin de semana",
      lessons: [
        {
          title: "Hablar del clima",
          objective: "Describir el clima con expresiones frecuentes y preguntar qué tiempo hace.",
          v: [
            ["Wie ist das Wetter?", "¿Qué tiempo hace?", "Wie ist das Wetter heute?", "¿Qué tiempo hace hoy?"],
            ["Es ist sonnig", "está soleado", "Heute ist es sonnig.", "Hoy está soleado."],
            ["Es regnet", "llueve", "Es regnet am Morgen.", "Llueve por la mañana."],
            ["kalt", "frío", "Heute ist es kalt.", "Hoy hace frío."]
          ],
          g: ["Usar es en expresiones del clima", "El clima suele describirse con es impersonal: Es ist kalt, Es ist sonnig, Es regnet. La pregunta común es Wie ist das Wetter? También se pregunta Wie ist das Wetter heute? El verbo conjugado mantiene su segunda posición.", "Es ist kalt. · Es ist warm.\nEs regnet. · Es schneit.", [["Heute ist es sonnig.", "Hoy está soleado."], ["Es regnet am Abend.", "Llueve por la tarde."]], "Cuando hoy ocupa la primera posición, el verbo sigue en segunda: Heute ist es sonnig."],
          fill: ["Heute ___ es. (Hoy llueve.)", "regnet", "Completa con la forma de regnen para la expresión impersonal."],
          d: ["Una compañera pregunta si hace falta un paraguas.", "Lea", "Wie ist das Wetter heute?", "¿Qué tiempo hace hoy?", [["Es regnet. Nimm einen Schirm mit!", "Llueve. ¡Lleva un paraguas!", true], ["Ich regne heute.", "Yo lluevo hoy.", false], ["Es ist ein Regen.", "Es es una lluvia.", false]]],
          p: ["Elige la expresión que significa «Hoy hace frío».", "Heute ist es kalt.", "Hoy hace frío.", "Heute es ist kalt."]
        },
        {
          title: "Contar lo que hiciste",
          objective: "Contar una actividad pasada y mencionar cuándo ocurrió.",
          v: [
            ["gestern", "ayer", "Ich habe gestern gelernt.", "Ayer estudié."],
            ["machen", "hacer", "Was hast du gemacht?", "¿Qué hiciste?"],
            ["lernen", "estudiar / aprender", "Wir haben Deutsch gelernt.", "Estudiamos alemán."],
            ["der Film", "la película", "Ich habe einen Film gesehen.", "Vi una película."]
          ],
          g: ["Formar el Perfekt con haben", "El Perfekt es muy común al hablar del pasado. Se forma con haben o sein conjugado y un participio al final. Muchos verbos regulares usan ge-…-t: lernen → gelernt. El auxiliar ocupa la segunda posición y el participio va al final.", "Ich habe Deutsch gelernt.\nWir haben einen Film gesehen.\nWas hast du gemacht?", [["Ich habe gestern gelernt.", "Ayer estudié."], ["Sie hat einen Film gesehen.", "Ella vio una película."]], "Algunos verbos forman el participio de modo irregular y otros usan sein; por ahora aprende estas formas frecuentes."],
          fill: ["Ich habe Deutsch ___. (Estudié alemán.)", "gelernt", "El participio de lernen es gelernt y se coloca al final."],
          d: ["Un amigo pregunta qué hiciste ayer.", "Ben", "Was hast du gestern gemacht?", "¿Qué hiciste ayer?", [["Ich habe einen Film gesehen.", "Vi una película.", true], ["Ich habe sehen einen Film.", "He ver una película.", false], ["Ich sehe gestern einen Film.", "Veo ayer una película.", false]]],
          p: ["Elige una frase correcta para decir «Ayer estudié».", "Ich habe gestern gelernt.", "Ayer estudié.", "Ich bin gestern gelernt."]
        },
        {
          title: "Proponer un plan",
          objective: "Invitar a alguien a realizar una actividad y responder a una propuesta.",
          v: [
            ["heute Abend", "esta noche", "Gehen wir heute Abend ins Kino?", "¿Vamos al cine esta noche?"],
            ["morgen", "mañana", "Hast du morgen Zeit?", "¿Tienes tiempo mañana?"],
            ["ins Kino", "al cine", "Wir gehen ins Kino.", "Vamos al cine."],
            ["gern", "con gusto", "Ja, gern!", "¡Sí, con gusto!"]
          ],
          g: ["Proponer planes con wollen y preguntas", "Wollen expresa intención: ich will, du willst, er/sie will, wir wollen. En una oración principal, el modal conjugado ocupa la segunda posición y el infinitivo va al final: Wir wollen heute ins Kino gehen. Una invitación también puede formarse con el verbo primero: Gehen wir…?", "Wir wollen heute ins Kino gehen.\nWillst du morgen kommen?\nGehen wir heute Abend ins Kino?", [["Wir wollen heute kochen.", "Queremos cocinar hoy."], ["Hast du morgen Zeit?", "¿Tienes tiempo mañana?"]], "Ins es la contracción de in das; aquí indica destino: ins Kino gehen."],
          fill: ["Wir wollen heute ins Kino ___. (Queremos ir al cine hoy.)", "gehen", "Después del modal wollen, coloca el infinitivo gehen al final."],
          d: ["Invitas a un amigo al cine.", "Mia", "Gehen wir heute Abend ins Kino?", "¿Vamos al cine esta noche?", [["Ja, gern!", "¡Sí, con gusto!", true], ["Ja, ich gehe gern gestern.", "Sí, voy con gusto ayer.", false], ["Ja, ich bin Kino.", "Sí, soy cine.", false]]],
          p: ["Elige una invitación natural para ir al cine.", "Gehen wir heute Abend ins Kino?", "¿Vamos al cine esta noche?", "Wir gehen heute Abend ins Kino gehen?"]
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
  window.GERMAN_A1_CURRICULUM = {
    metadata: {
      language: "de",
      languageName: "Alemán",
      speechLanguage: "de-DE",
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

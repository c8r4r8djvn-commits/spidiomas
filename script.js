const languages = [
  { id: "en", name: "Inglés", flag: "🇬🇧", available: true },
  { id: "es", name: "Español", flag: "🇪🇸", available: true },
  { id: "pt", name: "Portugués", flag: "🇧🇷", available: true },
  { id: "fr", name: "Francés", flag: "🇫🇷", available: true },
  { id: "it", name: "Italiano", flag: "🇮🇹", available: true },
  { id: "de", name: "Alemán", flag: "🇩🇪", available: true },
  { id: "zh", name: "Mandarín", flag: "🇨🇳", available: true },
  { id: "ja", name: "Japonés", flag: "🇯🇵", available: true },
  { id: "ar", name: "Árabe", flag: "🇸🇦", available: true },
  { id: "hi", name: "Hindi", flag: "🇮🇳", available: true }
];

const cefrLevels = [
  {
    id: "A1",
    name: "Acceso · Principiante",
    focus: "Supervivencia: presentarte, usar frases cotidianas, describir tu entorno cercano y expresar necesidades inmediatas."
  },
  {
    id: "A2",
    name: "Plataforma · Elemental",
    focus: "Rutinas, pasado básico, transacciones cotidianas y descripciones de personas y lugares familiares."
  },
  {
    id: "B1",
    name: "Umbral · Intermedio",
    focus: "Viajar con autonomía, narrar experiencias y acontecimientos, hablar de aspiraciones y justificar opiniones brevemente."
  },
  {
    id: "B2",
    name: "Avanzado · Independiente",
    focus: "Interactuar con fluidez, comprender textos complejos y argumentar y defender puntos de vista con detalle."
  },
  {
    id: "C1",
    name: "Dominio operativo eficaz",
    focus: "Usar el idioma con flexibilidad en contextos sociales, académicos y profesionales; comprender textos exigentes e ideas implícitas."
  },
  {
    id: "C2",
    name: "Maestría",
    focus: "Comprender prácticamente todo lo oído o leído y expresarte con precisión, matices y naturalidad en cualquier contexto."
  }
];

const lessonStepOrder = ["vocabulary", "grammar", "fillBlank", "dialogue", "production", "multipleChoice"];
const lessonBlockLabels = {
  vocabulary: "02 · Vocabulario clave",
  grammar: "03 · Gramática en contexto",
  fillBlank: "04 · Práctica guiada",
  dialogue: "05 · Producción libre",
  production: "05 · Producción libre",
  multipleChoice: "06 · Autoevaluación · Mini-quiz"
};

const curricula = {
  it: window.ITALIAN_A1_CURRICULUM,
  itA2: window.ITALIAN_A2_CURRICULUM,
  en: window.ENGLISH_A1_CURRICULUM,
  es: window.SPANISH_A1_CURRICULUM,
  pt: window.PORTUGUESE_A1_CURRICULUM,
  fr: window.FRENCH_A1_CURRICULUM,
  de: window.GERMAN_A1_CURRICULUM,
  zh: window.MANDARIN_A1_CURRICULUM,
  ja: window.JAPANESE_A1_CURRICULUM,
  ar: window.ARABIC_A1_CURRICULUM,
  hi: window.HINDI_A1_CURRICULUM
};
for (const [languageId, course] of Object.entries(window.MULTILINGUAL_A2_CURRICULA)) {
  curricula[`${languageId}A2`] = course;
}
for (const [languageId, course] of Object.entries(window.MULTILINGUAL_B1_CURRICULA)) {
  curricula[`${languageId}B1`] = course;
}
for (const [languageId, levels] of Object.entries(window.MULTILINGUAL_ADVANCED_CURRICULA)) {
  for (const [level, course] of Object.entries(levels)) {
    curricula[`${languageId}${level}`] = course;
  }
}
for (const [languageId, course] of Object.entries(curricula)) {
  const expectedLanguage = languageId.replace(/(?:A2|B1|B2|C1|C2)$/u, "");
  if (!course || course.metadata?.language !== expectedLanguage ||
      !Array.isArray(course.roadmap) || !Array.isArray(course.units)) {
    throw new Error(`El currículo de ${languageId} no está completo o no coincide con su idioma.`);
  }
}
let curriculum = curricula.it;
let curriculumKey = "it";
let storageKey = "idiomas-sp-progress-v3";
let legacyStorageKey = "idiomas-sp-progress-v2";
const screens = {
  home: document.getElementById("homeScreen"),
  course: document.getElementById("courseScreen"),
  lesson: document.getElementById("lessonScreen")
};
const languageGrid = document.getElementById("languageGrid");
const lessonList = document.getElementById("lessonList");
const levelPath = document.getElementById("levelPath");
const courseProgressText = document.getElementById("courseProgressText");
const courseProgressBar = document.getElementById("courseProgressBar");
const courseProgressFill = document.getElementById("courseProgressFill");
const reviewCount = document.getElementById("reviewCount");
const questionText = document.getElementById("questionText");
const exerciseType = document.getElementById("exerciseType");
const optionsContainer = document.getElementById("optionsContainer");
const answerArea = document.getElementById("answerArea");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const stepCount = document.getElementById("stepCount");
const feedbackText = document.getElementById("feedbackText");
const checkBtn = document.getElementById("checkBtn");
const continueBtn = document.getElementById("continueBtn");
const audioBtn = document.getElementById("audioBtn");
const offlineNote = document.getElementById("offlineNote");

let availableLessons = [];
let lessonById = new Map();
let progress = { completedLessons: [], reviewIds: [] };
let activeSteps = [];
let currentStepIndex = 0;
let selectedAnswer = null;
let answeredCorrectly = false;
let dialogueTurnIndex = 0;
let isReviewSession = false;
let assessmentQuestions = [];
let assessmentResponses = [];
let assessmentQuestionIndex = 0;
let selectedAssessmentAnswer = null;
let currentAssessmentId = "";
let currentAssessmentTitle = "";
let currentAssessmentKind = "";

function getStep(key) {
  const [lessonId, rawIndex] = key.split(":");
  const lesson = lessonById.get(lessonId);
  const index = Number(rawIndex);
  const step = lesson?.steps[index];
  return lesson && step ? { lesson, step, index, key } : null;
}

function getTargetText(item) {
  return item.target ?? item[curriculum.metadata.language] ?? item.it;
}

function getTranslation(item) {
  return item.translation ?? item.es ?? "";
}

function getUnitTitle(unit) {
  return curriculum.roadmap.find((roadmapUnit) => roadmapUnit.id === unit.id)?.title ??
    unit.title ?? unit.id;
}

function getPronunciation(item) {
  return item.pronunciation ?? item.transliteration ?? item.pinyin ?? item.romaji ?? "";
}

function standardizeUnitVocabulary(unit) {
  const vocabularyByTarget = new Map();
  unit.lessons.forEach((lesson) => {
    lesson.vocabulary.forEach((item) => {
      const target = getTargetText(item);
      if (target && !vocabularyByTarget.has(target.trim().toLocaleLowerCase())) {
        vocabularyByTarget.set(target.trim().toLocaleLowerCase(), item);
      }
    });
  });
  const vocabulary = [...vocabularyByTarget.values()];
  if (vocabulary.length < 10) {
    throw new Error(`La unidad "${unit.title}" necesita al menos 10 términos distintos para su vocabulario clave.`);
  }

  unit.lessons.forEach((lesson, lessonIndex) => {
    const count = Math.min(15, vocabulary.length);
    const lastStart = vocabulary.length - count;
    const start = unit.lessons.length > 1
      ? Math.round((lessonIndex / (unit.lessons.length - 1)) * lastStart)
      : 0;
    lesson.vocabulary = vocabulary.slice(start, start + count);
    const vocabularyStep = lesson.steps.find((step) => step.type === "vocabulary");
    if (!vocabularyStep) {
      throw new Error(`La lección "${lesson.title}" no tiene una actividad de vocabulario.`);
    }
    vocabularyStep.itemIds = lesson.vocabulary.map(getTargetText);
  });
}

function setCurriculum(languageId) {
  curriculum = curricula[languageId];
  if (!curriculum) throw new Error(`No hay un curso disponible para ${languageId}.`);
  curriculumKey = languageId;
  const resourceKey = `${curriculum.metadata.language}-${curriculum.metadata.level.toLowerCase()}`;
  if (!window.LEARNING_RESOURCES?.[resourceKey] &&
      !window.LEARNING_RESOURCES?.[curriculum.metadata.language]) {
    throw new Error(`Faltan recursos de aprendizaje para ${curriculum.metadata.languageName}.`);
  }
  curriculum.units.forEach(standardizeUnitVocabulary);
  availableLessons = curriculum.units.flatMap((unit) =>
    unit.lessons.map((lesson) => ({ unit, lesson }))
  );
  lessonById = new Map(availableLessons.map(({ lesson }) => [lesson.id, lesson]));
  const language = languageId.replace(/(?:A2|B1|B2|C1|C2)$/u, "");
  storageKey = languageId === "it"
    ? "idiomas-sp-progress-v3"
    : curriculum.metadata.level !== "A1"
      ? `idiomas-sp-progress-${language}-${curriculum.metadata.level.toLowerCase()}-v1`
      : `idiomas-sp-progress-${language}-v1`;
  legacyStorageKey = languageId === "it" ? "idiomas-sp-progress-v2" : null;
  progress = loadProgress();
  document.getElementById("courseEyebrow").textContent = `Curso ${curriculum.metadata.level} · ${curriculum.metadata.languageName}`;
  document.getElementById("courseTitle").textContent = curriculum.metadata.level === "A1"
    ? `${curriculum.metadata.languageName} desde cero`
    : `${curriculum.metadata.languageName} ${curriculum.metadata.level} · ${
      { A2: "Elemental", B1: "Intermedio", B2: "Avanzado", C1: "Dominio", C2: "Maestría" }[curriculum.metadata.level]
    }`;
}

function loadProgress() {
  try {
    const savedProgress = localStorage.getItem(storageKey);
    const legacyProgress = legacyStorageKey ? localStorage.getItem(legacyStorageKey) : null;
    const isLegacyProgress = savedProgress === null && legacyProgress !== null;
    const stored = JSON.parse(savedProgress || legacyProgress || "null");
    if (!stored || !Array.isArray(stored.completedLessons) || !Array.isArray(stored.reviewIds)) {
      return { completedLessons: [], reviewIds: [], assessmentResults: {} };
    }
    const completedLessons = stored.completedLessons.filter((id) => lessonById.has(id));
    const grammarLessonIds = new Set(curriculum.units
      .filter((unit) => ["saludos", "datos", "familia", "lavoro"].includes(unit.id))
      .flatMap((unit) => unit.lessons.map((lesson) => lesson.id)));
    const reviewIds = [...new Set(stored.reviewIds)].map((key) => {
      if (!isLegacyProgress) return key;
      const [lessonId, rawIndex] = key.split(":");
      const index = Number(rawIndex);
      return grammarLessonIds.has(lessonId) && index >= 1 ? `${lessonId}:${index + 1}` : key;
    }).filter((key) => getStep(key));
    if (isLegacyProgress && savedProgress === null) {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ completedLessons, reviewIds }));
      } catch (error) {
        console.error("No se pudo actualizar el formato del progreso guardado:", error);
      }
    }
    return {
      completedLessons,
      reviewIds,
      assessmentResults: stored.assessmentResults && typeof stored.assessmentResults === "object"
        ? stored.assessmentResults
        : {}
    };
  } catch (error) {
    console.error("No se pudo leer el progreso guardado:", error);
    return { completedLessons: [], reviewIds: [], assessmentResults: {} };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("No se pudo guardar el progreso:", error);
    offlineNote.textContent = "No se pudo guardar el progreso en este dispositivo.";
    return false;
  }
}

function showScreen(name) {
  Object.entries(screens).forEach(([screenName, element]) => {
    element.hidden = screenName !== name;
  });
  window.scrollTo(0, 0);
}

function renderLanguages() {
  languageGrid.replaceChildren();
  languages.forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `language-card${language.available ? " available" : ""}`;
    button.disabled = !language.available;
    button.innerHTML = `<span class="language-flag" aria-hidden="true">${language.flag}</span><span class="language-name">${language.name}</span><span class="language-status">${language.available ? "Empezar" : "Próximamente"}</span>`;
    if (language.available) button.addEventListener("click", () => openCourse(language.id));
    languageGrid.append(button);
  });
}

function renderCourse() {
  const completedCount = progress.completedLessons.length;
  const percent = Math.round((completedCount / availableLessons.length) * 100);
  courseProgressText.textContent = `${completedCount} de ${availableLessons.length} lecciones`;
  courseProgressBar.setAttribute("aria-valuenow", String(percent));
  courseProgressFill.style.width = `${percent}%`;
  renderLevelPath();
  renderLearningTools();
  document.getElementById("startDiagnostic").textContent =
    `Hacer diagnóstico ${curriculum.metadata.level}`;
  lessonList.replaceChildren();

  curriculum.roadmap.forEach((roadmapUnit, unitIndex) => {
    const unit = curriculum.units.find((item) => item.id === roadmapUnit.id);
    const section = document.createElement("section");
    section.className = `unit-card${unit ? " unit-available" : " unit-upcoming"}`;
    const heading = document.createElement("div");
    heading.className = "unit-heading";
    const number = document.createElement("span");
    number.className = "unit-number";
    number.textContent = String(unitIndex + 1);
    const copy = document.createElement("span");
    copy.className = "unit-copy";
    const title = document.createElement("strong");
    title.textContent = roadmapUnit.title;
    const objective = document.createElement("small");
    objective.textContent = roadmapUnit.canDo;
    copy.append(title, objective);
    heading.append(number, copy);
    const syllabus = document.createElement("p");
    syllabus.className = "unit-syllabus";
    syllabus.textContent = `Gramática: ${roadmapUnit.grammar}. Sonidos: ${roadmapUnit.sounds}. Léxico: ${roadmapUnit.vocabulary}. Práctica: ${roadmapUnit.game}.`;
    section.append(heading, syllabus);

    if (unit) {
      unit.lessons.forEach((lesson) => {
        const completed = progress.completedLessons.includes(lesson.id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lesson-card";
        const marker = document.createElement("span");
        marker.className = "lesson-number";
        marker.textContent = completed ? "✓" : "›";
        const lessonCopy = document.createElement("span");
        lessonCopy.className = "lesson-copy";
        const lessonTitle = document.createElement("strong");
        lessonTitle.textContent = lesson.title;
        const details = document.createElement("small");
        details.textContent = `${lesson.minutes} min · ${lesson.steps.length} actividades`;
        const objective = document.createElement("small");
        objective.className = "lesson-objective";
        objective.textContent = lesson.objective;
        lessonCopy.append(lessonTitle, details, objective);
        button.append(marker, lessonCopy);
        button.addEventListener("click", () => startLesson(lesson.id));
        section.append(button);
      });
      section.append(renderUnitResources(unit, unitIndex));
    } else {
      const notice = document.createElement("p");
      notice.className = "unit-coming-soon";
      notice.textContent = "Contenido en preparación";
      section.append(notice);
    }
    lessonList.append(section);
  });

  const count = progress.reviewIds.length;
  reviewCount.textContent = count
    ? `${count} ${count === 1 ? "actividad pendiente" : "actividades pendientes"}`
    : "Aún no tienes actividades para repasar";
  document.getElementById("startReview").disabled = count === 0;
}

function renderLearningTools() {
  const level = curriculum.metadata.level;
  const resources = window.LEARNING_RESOURCES[
    `${curriculum.metadata.language}-${level.toLowerCase()}`
  ] || window.LEARNING_RESOURCES[curriculum.metadata.language];
  const diagnosticResult = progress.assessmentResults?.[`diagnostic:${level}`];
  document.getElementById("resourceStatus").textContent = diagnosticResult
    ? `Último diagnóstico ${level}: ${diagnosticResult.score}% · ${new Date(diagnosticResult.completedAt).toLocaleDateString("es")}`
    : "";
  document.getElementById("pronunciationNotes").textContent = resources.pronunciation;
  document.getElementById("ipaNotes").textContent = `Guía fonética (IPA): ${resources.ipa}`;
  document.getElementById("listeningInstructions").textContent = resources.listening;
  document.getElementById("commonPitfalls").replaceChildren();
  resources.pitfalls.forEach(([term, explanation]) => {
    const item = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = `${term}: `;
    item.append(label, document.createTextNode(explanation));
    document.getElementById("commonPitfalls").append(item);
  });

  const examples = curriculum.units.flatMap((unit) => unit.lessons)
    .slice(0, 3)
    .map((lesson) => {
      const item = lesson.vocabulary[0];
      return item?.exampleTarget ?? item?.exampleEn ?? item?.exampleIt ?? getTargetText(item || {});
    }).filter(Boolean);
  const listeningSample = examples.join(". ");
  document.getElementById("listeningScript").textContent = `Guion de escucha: ${listeningSample}`;
  document.getElementById("playListeningSample").onclick = () => speakTargetLanguage(listeningSample);

  const guide = document.getElementById("teacherGuide");
  guide.replaceChildren();
  const intro = document.createElement("p");
  intro.textContent = "Propuesta flexible para una clase de 45 minutos; ajusta el ritmo al grupo y evita corregir cada error durante la primera intervención oral.";
  const stages = document.createElement("ol");
  [
    "5 min · Activación: recuperar vocabulario previo con imágenes o preguntas breves.",
    "10 min · Modelado: escuchar un ejemplo, identificar la estructura y practicar pronunciación.",
    "15 min · Práctica guiada: resolver ejercicios en parejas y comparar respuestas explicando la regla.",
    "10 min · Tarea comunicativa: representar la situación de la unidad con información ficticia.",
    "5 min · Salida: cada estudiante produce una frase y anota una duda para la siguiente sesión."
  ].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    stages.append(item);
  });
  const keyNote = document.createElement("p");
  keyNote.textContent = "Claves explicadas: las evaluaciones muestran la respuesta correcta y su explicación gramatical o contextual tras cada intento.";
  guide.append(intro, stages, keyNote);

  const promptLessonSelect = document.getElementById("promptLessonSelect");
  const previousLessonId = promptLessonSelect.value;
  promptLessonSelect.replaceChildren();
  availableLessons.forEach(({ unit, lesson }) => {
    const option = document.createElement("option");
    option.value = lesson.id;
    option.textContent = `${unit.title} · ${lesson.title}`;
    promptLessonSelect.append(option);
  });
  promptLessonSelect.value = lessonById.has(previousLessonId)
    ? previousLessonId
    : availableLessons[0]?.lesson.id || "";
  updateMasterPrompt();
}

function renderUnitResources(unit, unitIndex) {
  const resources = document.createElement("div");
  resources.className = "unit-resources";
  const questions = buildAssessmentQuestions(unit.lessons);
  const saved = progress.assessmentResults?.[`unit:${unit.id}`];
  const assessmentButton = makeButton(
    `${saved ? `Último resultado: ${saved.score}% · ` : ""}Evaluación del módulo (${questions.length} preguntas)`,
    "secondary-button",
    () => startAssessment("unit", unit.id)
  );
  const projects = curriculum.metadata.level === "A2"
    ? curriculum.metadata.language === "it" ? window.A2_PROJECTS : window.GENERAL_A2_PROJECTS
    : curriculum.metadata.level === "B1"
      ? window.GENERAL_B1_PROJECTS
      : ["B2", "C1", "C2"].includes(curriculum.metadata.level)
        ? window.GENERAL_ADVANCED_PROJECTS[curriculum.metadata.level]
        : window.A1_PROJECTS;
  const project = projects[unitIndex];
  const promptButton = makeButton("Preparar prompt IA para esta unidad", "secondary-button", () => {
    const lesson = unit.lessons[0];
    document.getElementById("promptLessonSelect").value = lesson.id;
    updateMasterPrompt();
    const promptPanel = [...document.querySelectorAll(".resource-panel summary")]
      .find((summary) => summary.textContent.includes("Prompt maestro"));
    promptPanel.parentElement.open = true;
    promptPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  const projectCard = document.createElement("article");
  projectCard.className = "project-card";
  const projectTitle = document.createElement("strong");
  projectTitle.textContent = `Tarea de producción: ${project.title}`;
  const task = document.createElement("p");
  task.textContent = project.task;
  const evidence = document.createElement("p");
  evidence.textContent = `Producto: ${project.evidence}`;
  const checklist = document.createElement("ul");
  checklist.className = "resource-list";
  project.checklist.forEach((criterion) => {
    const item = document.createElement("li");
    item.textContent = criterion;
    checklist.append(item);
  });
  projectCard.append(projectTitle, task, evidence, checklist);
  resources.append(assessmentButton, promptButton, projectCard);
  return resources;
}

function updateMasterPrompt() {
  const lesson = lessonById.get(document.getElementById("promptLessonSelect").value);
  const unit = curriculum.units.find((item) => item.lessons.includes(lesson));
  if (!lesson || !unit) return;
  const grammar = lesson.steps.find((step) => step.type === "grammar");
  const vocabulary = lesson.vocabulary.map((item) => getTargetText(item)).join(", ");
  const grammarSummary = grammar
    ? `${grammar.title}. ${grammar.explanation}`
    : "Usa solo estructuras ya presentadas en el material de la unidad.";
  document.getElementById("masterPrompt").value =
    `Actúa como especialista en enseñanza de idiomas y crea material complementario para ${curriculum.metadata.languageName}, nivel ${curriculum.metadata.level} del MCER.\n\n` +
    `UNIDAD: ${getUnitTitle(unit)}\nLECCIÓN: ${lesson.title}\nOBJETIVO: ${lesson.objective}\nGRAMÁTICA/FUNCIONES: ${grammarSummary}\nVOCABULARIO YA ENSEÑADO: ${vocabulary}\n\n` +
    `Entrega: (1) dos ejercicios de práctica guiada con instrucciones, respuestas y explicación, (2) una tarea comunicativa con contexto y criterios de logro, y (3) una lectura breve adaptada a ${curriculum.metadata.level} con preguntas de comprensión y clave explicada. ` +
    `Mantén las instrucciones en español y las actividades meta en el idioma estudiado. Limita la lectura al vocabulario proporcionado y a estructuras ${curriculum.metadata.level}; si necesitas una palabra nueva, inclúyela en un glosario breve. ` +
    "No adelantes gramática de niveles superiores. No inventes reglas, traducciones ni datos culturales; señala cualquier incertidumbre.";
}

function buildAssessmentQuestions(lessons) {
  return lessons.flatMap((lesson) => {
    const grammar = lesson.steps.find((step) => step.type === "grammar");
    const quizQuestions = lesson.steps.filter((step) => step.type === "multipleChoice").map((step) => ({
      prompt: step.prompt,
      options: step.options,
      answer: step.answer,
      explanation: [
        step.feedback || `La respuesta correcta es «${step.answer}».`,
        grammar?.explanation,
        grammar?.tip ? `Recuerda: ${grammar.tip}` : ""
      ].filter(Boolean).join(" ")
    }));
    const vocabulary = lesson.vocabulary || [];
    const vocabularyQuestion = vocabulary.length >= 3
      ? (() => {
          const correct = vocabulary[0];
          const distractors = vocabulary.slice(1)
            .filter((item) => item.translation !== correct.translation)
            .map((item) => item.translation)
            .filter((translation, index, list) => list.indexOf(translation) === index)
            .slice(0, 2);
          if (distractors.length !== 2) return [];
          const options = [correct.translation, ...distractors];
          return [{
            prompt: `¿Qué significa «${getTargetText(correct)}»?`,
            options,
            answer: correct.translation,
            explanation: `«${getTargetText(correct)}» significa «${correct.translation}». Repasa el vocabulario de esta lección.`
          }];
        })()
      : [];
    return [...quizQuestions, ...vocabularyQuestion];
  });
}

function startAssessment(kind, unitId = "") {
  const units = kind === "diagnostic"
    ? curriculum.units
    : curriculum.units.filter((unit) => unit.id === unitId);
  const questions = kind === "diagnostic"
    ? units.map((unit) => buildAssessmentQuestions(unit.lessons)[0]).filter(Boolean)
    : buildAssessmentQuestions(units.flatMap((unit) => unit.lessons));
  if (questions.length === 0) {
    throw new Error("No hay preguntas disponibles para esta evaluación.");
  }
  currentAssessmentKind = kind;
  currentAssessmentId = kind === "diagnostic"
    ? `diagnostic:${curriculum.metadata.level}`
    : `unit:${unitId}`;
  currentAssessmentTitle = kind === "diagnostic"
    ? `Diagnóstico de ${curriculum.metadata.languageName} ${curriculum.metadata.level}`
    : `Evaluación · ${getUnitTitle(units[0])}`;
  assessmentQuestions = questions;
  assessmentResponses = [];
  assessmentQuestionIndex = 0;
  selectedAssessmentAnswer = null;
  document.getElementById("assessmentTitle").textContent = currentAssessmentTitle;
  document.getElementById("assessmentEyebrow").textContent =
    kind === "diagnostic"
      ? "Orientación inicial · No califica"
      : `Evaluación formativa · ${curriculum.metadata.level}`;
  document.getElementById("assessmentQuestionArea").hidden = false;
  document.getElementById("assessmentResults").hidden = true;
  document.getElementById("checkAssessmentAnswer").hidden = false;
  document.getElementById("checkAssessmentAnswer").disabled = true;
  document.getElementById("nextAssessmentQuestion").hidden = true;
  document.getElementById("finishAssessment").hidden = true;
  renderAssessmentQuestion();
  document.getElementById("assessmentDialog").showModal();
}

function renderAssessmentQuestion() {
  const question = assessmentQuestions[assessmentQuestionIndex];
  selectedAssessmentAnswer = null;
  document.getElementById("assessmentProgress").textContent =
    `Pregunta ${assessmentQuestionIndex + 1} de ${assessmentQuestions.length}`;
  document.getElementById("assessmentQuestion").textContent = question.prompt;
  document.getElementById("assessmentFeedback").textContent = "";
  const options = document.getElementById("assessmentOptions");
  options.replaceChildren();
  question.options.forEach((option) => {
    const button = makeButton(option, "option-btn", () => {
      selectedAssessmentAnswer = option;
      options.querySelectorAll("button").forEach((candidate) => {
        candidate.setAttribute("aria-pressed", String(candidate === button));
      });
      document.getElementById("checkAssessmentAnswer").disabled = false;
    });
    button.setAttribute("aria-pressed", "false");
    button.lang = curriculum.metadata.language;
    button.dir = "auto";
    options.append(button);
  });
  document.getElementById("checkAssessmentAnswer").hidden = false;
  document.getElementById("checkAssessmentAnswer").disabled = true;
  document.getElementById("nextAssessmentQuestion").hidden = true;
}

function checkAssessmentAnswer() {
  if (selectedAssessmentAnswer === null) return;
  const question = assessmentQuestions[assessmentQuestionIndex];
  const correct = normalizeAnswer(selectedAssessmentAnswer) === normalizeAnswer(question.answer);
  assessmentResponses.push({ selected: selectedAssessmentAnswer, correct });
  const feedback = document.getElementById("assessmentFeedback");
  feedback.className = `assessment-feedback ${correct ? "correct" : "incorrect"}`;
  feedback.textContent = `${correct ? "Correcto." : `Respuesta: ${question.answer}.`} ${question.explanation}`;
  document.querySelectorAll("#assessmentOptions button").forEach((button) => {
    button.disabled = true;
  });
  document.getElementById("checkAssessmentAnswer").hidden = true;
  const next = document.getElementById("nextAssessmentQuestion");
  next.hidden = false;
  next.textContent = assessmentQuestionIndex === assessmentQuestions.length - 1
    ? "Ver resultados"
    : "Siguiente pregunta";
}

function nextAssessmentQuestion() {
  if (assessmentQuestionIndex < assessmentQuestions.length - 1) {
    assessmentQuestionIndex += 1;
    renderAssessmentQuestion();
  } else {
    finishAssessment();
  }
}

function finishAssessment() {
  const score = Math.round(
    (assessmentResponses.filter((response) => response.correct).length / assessmentQuestions.length) * 100
  );
  progress.assessmentResults = progress.assessmentResults || {};
  progress.assessmentResults[currentAssessmentId] = {
    score,
    total: assessmentQuestions.length,
    completedAt: new Date().toISOString()
  };
  saveProgress();
  document.getElementById("assessmentQuestionArea").hidden = true;
  document.getElementById("assessmentResults").hidden = false;
  document.getElementById("assessmentProgress").textContent = "Evaluación completada";
  const results = document.getElementById("assessmentResults");
  results.replaceChildren();
  const summary = document.createElement("h3");
  summary.textContent = `Resultado: ${score}% (${assessmentResponses.filter((response) => response.correct).length}/${assessmentQuestions.length})`;
  const recommendation = document.createElement("p");
  recommendation.textContent = currentAssessmentKind === "diagnostic"
    ? curriculum.metadata.level === "A1"
      ? score >= 80
        ? curricula[`${curriculum.metadata.language}A2`]
          ? `Tienes una base sólida para comenzar A1. Si ya estudiaste estos contenidos, puedes explorar ${curriculum.metadata.languageName} A2.`
          : "Tienes una base sólida para comenzar A1; el siguiente nivel todavía está en preparación."
        : score >= 50
          ? "Tienes algunos conocimientos previos; empieza A1 y presta atención a los temas que te resultaron difíciles."
          : "Te recomendamos empezar por las primeras lecciones de A1 y avanzar a tu ritmo."
      : score >= 80
          ? curriculum.metadata.level === "A2" && curricula[`${curriculum.metadata.language}B1`]
            ? `Tienes una base sólida en A2; puedes explorar ${curriculum.metadata.languageName} B1. Este diagnóstico no certifica el nivel ni recomienda saltar etapas.`
            : `Tienes una base sólida en ${curriculum.metadata.level}; puedes continuar con el siguiente nivel cuando esté disponible. Este curso no certifica el nivel ni recomienda saltar etapas.`
        : score >= 50
            ? `Tienes algunos conocimientos previos de ${curriculum.metadata.level}; revisa las unidades correspondientes a las preguntas que te resultaron difíciles.`
            : `Te recomendamos avanzar por las primeras lecciones de ${curriculum.metadata.level} y usar las explicaciones para afianzar cada tema.`
    : score >= 70
      ? "Módulo superado como referencia formativa. Continúa con la siguiente unidad y repasa las respuestas que te costaron."
      : "Usa las explicaciones para repasar y vuelve a intentar la evaluación cuando te sientas preparado.";
  results.append(summary, recommendation);
  const review = document.createElement("details");
  review.className = "answer-key";
  const summaryLabel = document.createElement("summary");
  summaryLabel.textContent = "Ver clave de respuestas explicada";
  const list = document.createElement("ol");
  assessmentQuestions.forEach((question, index) => {
    const item = document.createElement("li");
    item.textContent = `${question.prompt} Respuesta: ${question.answer}. ${question.explanation}`;
    list.append(item);
  });
  review.append(summaryLabel, list);
  results.append(review);
  document.getElementById("nextAssessmentQuestion").hidden = true;
  document.getElementById("finishAssessment").hidden = false;
  renderCourse();
}

function exportFlashcards() {
  const rows = [];
  let keywordCount = 0;
  curriculum.units.forEach((unit) => {
    unit.lessons.forEach((lesson) => {
      lesson.vocabulary.forEach((item) => {
        const target = getTargetText(item);
        const pronunciation = getPronunciation(item);
        const example = item.exampleTarget ?? item.exampleEn ?? item.exampleIt ?? "";
        const explanation = [getTranslation(item), pronunciation ? `Pronunciación: ${pronunciation}` : "", example]
          .filter(Boolean).join("<br>");
        const tag = `${curriculum.metadata.language}_${curriculum.metadata.level}_${unit.id}_${lesson.id}`;
        const addCard = (front, back, cardType) => {
          rows.push([front, back, `${tag} ${cardType}`].map((value) =>
            String(value).replace(/\t/g, " ").replace(/\r?\n/g, " ").replace(/"/g, '""')
          ).map((value) => `"${value}"`).join("\t"));
        };
        addCard(target, explanation, "recognition");
        addCard(getTranslation(item), [target, pronunciation ? `Pronunciación: ${pronunciation}` : "", example]
          .filter(Boolean).join("<br>"), "production");
        keywordCount += 1;
      });
    });
  });
  const content = `#separator:tab\n#html:true\n${rows.join("\n")}`;
  const blob = new Blob([content], { type: "text/tab-separated-values;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sp-idiomas-${curriculum.metadata.language}-${curriculum.metadata.level.toLowerCase()}-anki.tsv`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.getElementById("resourceStatus").textContent =
    `Mazo exportado: ${rows.length} fichas Anki en TSV (${keywordCount} términos en reconocimiento y producción, con ejemplos, pronunciación disponible y etiquetas por lección).`;
}

function renderLevelPath() {
  levelPath.replaceChildren();
  const language = curriculum.metadata.language;
  const currentOrder = cefrLevels.findIndex((level) => level.id === curriculum.metadata.level);
  cefrLevels.forEach((level) => {
    const isCurrent = level.id === curriculum.metadata.level;
    const levelOrder = cefrLevels.indexOf(level);
    const targetCourseId = level.id === "A1" ? language : `${language}${level.id}`;
    const hasCourse = Boolean(curricula[targetCourseId]);
    const isAvailable = isCurrent || hasCourse;
    const card = document.createElement("article");
    card.className = `level-card${isCurrent ? " level-current" : isAvailable ? " level-available" : " level-upcoming"}`;
    const heading = document.createElement("div");
    heading.className = "level-card-heading";
    const badge = document.createElement("span");
    badge.className = "level-badge";
    badge.textContent = level.id;
    const title = document.createElement("strong");
    title.textContent = level.name;
    heading.append(badge, title);
    const focus = document.createElement("p");
    focus.textContent = level.focus;
    const status = document.createElement("small");
    status.textContent = isCurrent
      ? "Nivel actual"
      : hasCourse
        ? levelOrder < currentOrder
          ? `Volver a ${curriculum.metadata.languageName} ${level.id}`
          : `Disponible · ${curriculum.metadata.languageName} ${level.id}`
          : level.id === "A1"
            ? "Disponible ahora"
            : "Siguiente etapa · En preparación";
    card.append(heading, focus, status);
    if (hasCourse && !isCurrent) {
      const button = makeButton(
        level.id === "A1"
          ? `Volver a ${curriculum.metadata.languageName} A1`
          : `Entrar al curso ${level.id} de ${curriculum.metadata.languageName}`,
        "secondary-button",
        () => openCourse(language, level.id)
      );
      card.append(button);
    }
    levelPath.append(card);
  });
}

function openCourse(languageId, level = "A1") {
  const courseId = level === "A1" ? languageId : `${languageId}${level}`;
  setCurriculum(courseId);
  renderCourse();
  showScreen("course");
}

function startLesson(lessonId) {
  const lesson = lessonById.get(lessonId);
  if (!lesson) return;
  isReviewSession = false;
  activeSteps = lesson.steps.map((step, index) => ({
    lesson,
    step,
    index,
    key: `${lesson.id}:${index}`
  })).sort((left, right) =>
    lessonStepOrder.indexOf(left.step.type) - lessonStepOrder.indexOf(right.step.type)
  );
  currentStepIndex = 0;
  showScreen("lesson");
  renderStep();
}

function startReview() {
  isReviewSession = true;
  activeSteps = progress.reviewIds.map(getStep).filter(Boolean);
  if (!activeSteps.length) {
    renderCourse();
    return;
  }
  currentStepIndex = 0;
  showScreen("lesson");
  renderStep();
}

function makeButton(label, className, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  if (onClick) button.addEventListener("click", onClick);
  return button;
}

function renderStep() {
  const current = activeSteps[currentStepIndex];
  if (!current) return;
  const { lesson, step } = current;
  screens.lesson.classList.toggle("grammar-step", step.type === "grammar");
  document.getElementById("lessonObjective").textContent = lesson.objective;
  selectedAnswer = null;
  answeredCorrectly = false;
  dialogueTurnIndex = 0;
  questionText.textContent = step.prompt || step.title;
  exerciseType.textContent = `${isReviewSession ? "Repaso · " : ""}${lessonBlockLabels[step.type]} · ${step.title}`;
  stepCount.textContent = `${currentStepIndex + 1}/${activeSteps.length}`;
  answerArea.replaceChildren();
  optionsContainer.replaceChildren();
  optionsContainer.hidden = true;
  audioBtn.hidden = true;
  feedbackText.textContent = "";
  feedbackText.className = "feedback";
  checkBtn.disabled = true;
  checkBtn.hidden = true;
  continueBtn.hidden = false;
  continueBtn.textContent = currentStepIndex === activeSteps.length - 1 ? "Terminar lección" : "Continuar";

  switch (step.type) {
    case "vocabulary":
      renderVocabulary(lesson, step);
      continueBtn.textContent = "Ya lo vi · Continuar";
      break;
    case "grammar":
      renderGrammar(step);
      continueBtn.textContent = "Ya lo entendí · Continuar";
      break;
    case "multipleChoice":
      renderMultipleChoice(step);
      break;
    case "fillBlank":
      renderFillBlank(step);
      break;
    case "dialogue":
      renderDialogue(step);
      break;
    case "production":
      renderProduction(step);
      break;
    default:
      throw new Error(`Tipo de actividad no reconocido: ${step.type}`);
  }

  const percent = Math.round((currentStepIndex / activeSteps.length) * 100);
  progressBar.setAttribute("aria-valuenow", String(percent));
  progressFill.style.width = `${percent}%`;
}

function renderVocabulary(lesson, step) {
  const cards = document.createElement("div");
  cards.className = "vocabulary-list";
  const items = step.itemIds.map((id) =>
    lesson.vocabulary.find((entry) => getTargetText(entry) === id)
  ).filter(Boolean);
  items.forEach((item) => {
    const targetText = getTargetText(item);
    const card = document.createElement("article");
    card.className = "vocabulary-card";
    const top = document.createElement("div");
    top.className = "vocabulary-top";
    const italian = document.createElement("strong");
    italian.lang = curriculum.metadata.language;
    italian.dir = "auto";
    italian.textContent = targetText;
    const speak = makeButton("🔊", "vocabulary-audio", () => speakTargetLanguage(targetText));
    speak.setAttribute("aria-label", `Escuchar ${targetText}`);
    const pronunciationText = getPronunciation(item);
    const pronunciation = document.createElement("small");
    pronunciation.className = "pronunciation";
    pronunciation.lang = "es";
    pronunciation.dir = "ltr";
    pronunciation.textContent = pronunciationText ? `Pronunciación: ${pronunciationText}` : "";
    const translation = document.createElement("span");
    translation.textContent = getTranslation(item);
    top.append(italian, speak);
    card.append(top);
    if (pronunciationText) card.append(pronunciation);
    card.append(translation);
    const exampleTarget = item.exampleTarget ??
      item[`example${curriculum.metadata.language === "en" ? "En" : "It"}`] ?? item.exampleIt ?? "";
    const exampleTranslation = item.exampleTranslation ?? item.exampleEs ?? "";
    if (exampleTarget || exampleTranslation) {
      const example = document.createElement("p");
      example.className = "vocabulary-example";
      const targetExample = document.createElement("span");
      targetExample.lang = curriculum.metadata.language;
      targetExample.dir = "auto";
      targetExample.textContent = exampleTarget;
      const translatedExample = document.createElement("small");
      translatedExample.textContent = exampleTranslation;
      example.append(targetExample, translatedExample);
      card.append(example);
    }
    cards.append(card);
  });
  const instruction = document.createElement("p");
  instruction.className = "step-instruction";
  instruction.textContent = step.instruction;
  answerArea.append(instruction, cards);
}

function renderGrammar(step) {
  const explanation = document.createElement("p");
  explanation.className = "grammar-explanation";
  explanation.textContent = step.explanation;

  const patternLabel = document.createElement("strong");
  patternLabel.className = "grammar-label";
  patternLabel.textContent = "Regla";
  const pattern = document.createElement("p");
  pattern.className = "grammar-pattern";
  pattern.lang = step.patternLanguage ?? curriculum.metadata.language;
  pattern.dir = "auto";
  pattern.textContent = step.pattern;

  const examples = document.createElement("div");
  examples.className = "grammar-examples";
  step.examples.forEach((example) => {
    const card = document.createElement("article");
    card.className = "grammar-example";
    const italian = document.createElement("p");
    italian.className = "grammar-italian";
    const targetText = getTargetText(example);
    italian.textContent = targetText;
    italian.lang = curriculum.metadata.language;
    italian.dir = "auto";
    const translation = document.createElement("p");
    translation.className = "grammar-spanish";
    translation.textContent = getTranslation(example);
    const speak = makeButton("🔊 Escuchar", "grammar-audio", () => speakTargetLanguage(targetText));
    speak.setAttribute("aria-label", `Escuchar ${targetText}`);
    card.append(italian, translation, speak);
    examples.append(card);
  });

  const tip = document.createElement("aside");
  tip.className = "grammar-tip";
  const tipLabel = document.createElement("strong");
  tipLabel.textContent = "Recuerda";
  const tipText = document.createElement("p");
  tipText.textContent = step.tip;
  tip.append(tipLabel, tipText);

  answerArea.append(explanation, patternLabel, pattern, examples, tip);
}

function renderMultipleChoice(step) {
  questionText.textContent = step.prompt;
  optionsContainer.hidden = false;
  step.options.forEach((option) => {
    const button = makeButton(option, "option-btn", () => {
      selectOption(button, option, step.answer, step.feedback);
    });
    button.lang = curriculum.metadata.language;
    button.dir = "auto";
    button.setAttribute("aria-pressed", "false");
    optionsContainer.append(button);
  });
  answerArea.append(optionsContainer);
  checkBtn.hidden = false;
}

function renderFillBlank(step) {
  questionText.textContent = step.prompt;
  if (step.options) {
    optionsContainer.hidden = false;
    step.options.forEach((option) => {
      const button = makeButton(option, "option-btn", () => selectOption(button, option, step.answer));
      button.lang = curriculum.metadata.language;
      button.dir = "auto";
      button.setAttribute("aria-pressed", "false");
      optionsContainer.append(button);
    });
    answerArea.append(optionsContainer);
    checkBtn.hidden = false;
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.className = "writing-input";
  input.autocomplete = "off";
  input.autocapitalize = "none";
  input.setAttribute("aria-label", `Completa la frase en ${curriculum.metadata.languageName.toLocaleLowerCase("es")}`);
  input.placeholder = "Escribe la palabra";
  input.addEventListener("input", () => {
    selectedAnswer = input.value.trim();
    checkBtn.disabled = !selectedAnswer;
  });
  const hint = document.createElement("p");
  hint.className = "writing-hint";
  hint.textContent = step.hint;
  answerArea.append(input, hint);
  checkBtn.hidden = false;
}

function renderDialogue(step) {
  questionText.textContent = step.title;
  const scene = document.createElement("p");
  scene.className = "step-instruction";
  scene.textContent = step.scene;
  answerArea.append(scene);
  renderDialogueTurn(step);
}

function renderDialogueTurn(step) {
  const previous = answerArea.querySelector(".dialogue-turn");
  if (previous) previous.remove();
  const turn = step.turns[dialogueTurnIndex];
  const panel = document.createElement("div");
  panel.className = "dialogue-turn";
  const speaker = document.createElement("strong");
  speaker.className = "dialogue-speaker";
  speaker.textContent = turn.speaker;
  const italian = document.createElement("p");
  italian.className = "dialogue-italian";
  italian.lang = curriculum.metadata.language;
  italian.dir = "auto";
  italian.textContent = getTargetText(turn);
  const translation = document.createElement("p");
  translation.className = "dialogue-spanish";
  translation.textContent = getTranslation(turn);
  panel.append(speaker, italian, translation);

  if (turn.learnerAction) {
    const action = document.createElement("p");
    action.className = "step-instruction";
    action.textContent = turn.learnerAction;
    panel.append(action);
    answerArea.append(panel);
    checkBtn.hidden = true;
    continueBtn.hidden = false;
    continueBtn.textContent = dialogueTurnIndex === step.turns.length - 1 ? "Terminar diálogo" : "Siguiente";
    return;
  }

  optionsContainer.replaceChildren();
  optionsContainer.hidden = false;
  turn.options.forEach((option) => {
    const targetText = getTargetText(option);
    const button = makeButton(targetText, "option-btn", () => {
      const buttons = optionsContainer.querySelectorAll(".option-btn");
      buttons.forEach((candidate) => candidate.setAttribute("aria-pressed", String(candidate === button)));
      selectedAnswer = option.correct ? "correct" : `incorrect:${targetText}`;
      feedbackText.textContent = "";
      checkBtn.disabled = false;
    });
    button.setAttribute("aria-pressed", "false");
    button.lang = curriculum.metadata.language;
    button.dir = "auto";
    optionsContainer.append(button);
  });
  panel.append(optionsContainer);
  answerArea.append(panel);
  checkBtn.hidden = false;
  continueBtn.hidden = true;
}

function renderProduction(step) {
  questionText.textContent = step.prompt;
  const frame = document.createElement("p");
  frame.className = "production-frame";
  frame.lang = curriculum.metadata.language;
  frame.dir = "auto";
  frame.textContent = step.frame || "";
  frame.hidden = !step.frame;
  const model = document.createElement("p");
  model.className = "step-instruction";
  model.lang = curriculum.metadata.language;
  model.dir = "auto";
  const [targetModel, modelTranslation] = String(step.model || "").split(/\s+—\s+/, 2);
  model.textContent = targetModel || "";
  model.hidden = !targetModel;
  const translation = document.createElement("p");
  translation.className = "step-instruction";
  translation.textContent = step.translation || modelTranslation || "";
  translation.hidden = !translation.textContent;
  const practice = document.createElement("p");
  practice.className = "step-instruction";
  practice.textContent = step.privacyNote || "Puedes practicar en voz alta o en silencio. No es necesario grabarte.";
  const input = document.createElement("input");
  input.type = "text";
  input.className = "writing-input";
  input.autocomplete = "off";
  input.lang = curriculum.metadata.language;
  input.dir = "auto";
  input.setAttribute("aria-label", "Escribe tu respuesta para practicar (opcional)");
  input.placeholder = "Escribe tu frase (opcional)";
  const hearModel = makeButton("🔊 Escuchar ejemplo", "audio-btn model-audio", () => speakTargetLanguage(targetModel));
  if (!frame.hidden) answerArea.append(frame);
  answerArea.append(model);
  if (!translation.hidden) answerArea.append(translation);
  answerArea.append(practice, input);
  if (!model.hidden) answerArea.append(hearModel);
  continueBtn.textContent = currentStepIndex === activeSteps.length - 1 ? "Terminar lección" : "He practicado · Continuar";
}

function selectOption(button, answer, expected, feedback) {
  optionsContainer.querySelectorAll(".option-btn").forEach((optionButton) => {
    optionButton.setAttribute("aria-pressed", String(optionButton === button));
  });
  selectedAnswer = answer;
  checkBtn.disabled = false;
  if (feedback) button.dataset.feedback = feedback;
}

function verifyAnswer() {
  if (selectedAnswer === null || answeredCorrectly) return;
  const current = activeSteps[currentStepIndex];
  if (current.step.type === "dialogue") {
    if (selectedAnswer !== "correct") {
      addToReview(current.key);
      feedbackText.textContent = "Esa respuesta no encaja en esta situación. Prueba otra opción.";
      feedbackText.className = "feedback incorrect";
      selectedAnswer = null;
      checkBtn.disabled = true;
      optionsContainer.querySelectorAll(".option-btn").forEach((button) => {
        button.setAttribute("aria-pressed", "false");
      });
      return;
    }
    answeredCorrectly = true;
    feedbackText.textContent = "¡Bien! Esa respuesta encaja. 🎉";
  } else {
    const expected = current.step.answer;
    const accepted = current.step.acceptedAnswers || [expected];
    if (!accepted.some((answer) => normalizeAnswer(answer) === normalizeAnswer(selectedAnswer))) {
      addToReview(current.key);
      feedbackText.textContent = current.step.feedback || "Casi. Revisa la frase e inténtalo otra vez.";
      feedbackText.className = "feedback incorrect";
      selectedAnswer = null;
      optionsContainer.querySelectorAll(".option-btn").forEach((button) => {
        button.setAttribute("aria-pressed", "false");
      });
      const input = answerArea.querySelector("input");
      if (input) input.value = "";
      checkBtn.disabled = true;
      return;
    }
    answeredCorrectly = true;
    feedbackText.textContent = current.step.feedback || "¡Correcto! Muy bien. 🎉";
  }

  feedbackText.className = "feedback correct";
  clearReview(current.key);
  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
  answerArea.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
  });
  checkBtn.hidden = true;
  checkBtn.disabled = true;
  continueBtn.hidden = false;
  continueBtn.textContent = current.step.type === "dialogue"
    ? (dialogueTurnIndex === current.step.turns.length - 1 ? "Terminar diálogo" : "Siguiente")
    : (currentStepIndex === activeSteps.length - 1 ? "Terminar lección" : "Continuar");
  continueBtn.focus();
}

function normalizeAnswer(value) {
  return String(value).trim().replace(/\s+/g, " ").toLocaleLowerCase(curriculum.metadata.language);
}

function addToReview(key) {
  if (!progress.reviewIds.includes(key)) {
    progress.reviewIds.push(key);
    saveProgress();
  }
}

function clearReview(key) {
  const updated = progress.reviewIds.filter((item) => item !== key);
  if (updated.length !== progress.reviewIds.length) {
    progress.reviewIds = updated;
    saveProgress();
  }
}

function continueLesson() {
  const current = activeSteps[currentStepIndex];
  if (!current) return;

  if (current.step.type === "vocabulary" || current.step.type === "production") {
    clearReview(current.key);
  }

  if (current.step.type === "dialogue") {
    const turn = current.step.turns[dialogueTurnIndex];
    if (!turn.learnerAction && !answeredCorrectly) return;
    if (dialogueTurnIndex < current.step.turns.length - 1) {
      dialogueTurnIndex += 1;
      answeredCorrectly = false;
      selectedAnswer = null;
      feedbackText.textContent = "";
      feedbackText.className = "feedback";
      renderDialogueTurn(current.step);
      return;
    }
    clearReview(current.key);
  } else if (current.step.type === "multipleChoice" || current.step.type === "fillBlank") {
    if (!answeredCorrectly) return;
  }

  if (currentStepIndex < activeSteps.length - 1) {
    currentStepIndex += 1;
    renderStep();
    questionText.focus();
    return;
  }

  if (!isReviewSession) {
    const lessonId = current.lesson.id;
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      saveProgress();
    }
  }
  showScreen("course");
  renderCourse();
}

function speakTargetLanguage(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    feedbackText.textContent = "La reproducción de voz no está disponible en este dispositivo.";
    feedbackText.className = "feedback";
    return;
  }
  const speech = window.speechSynthesis;
  const language = curriculum.metadata.speechLanguage ||
    `${curriculum.metadata.language}-${curriculum.metadata.language.toUpperCase()}`;
  const targetText = String(text).split(/\s+—\s+/u, 1)[0].trim();
  const voices = speech.getVoices();
  const preferredVoice = chooseSpeechVoice(voices, language);
  const utterance = new SpeechSynthesisUtterance(targetText);
  utterance.lang = language;
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (preferredVoice) utterance.voice = preferredVoice;
  utterance.onerror = (event) => {
    if (event.error === "canceled" || event.error === "interrupted") return;
    feedbackText.textContent = "No se pudo reproducir el audio. Comprueba las voces y el sonido de tu dispositivo.";
    feedbackText.className = "feedback";
  };
  speech.cancel();
  speech.speak(utterance);
}

function chooseSpeechVoice(voices, language) {
  const normalizedLanguage = language.toLocaleLowerCase("en");
  const languagePrefix = normalizedLanguage.split("-")[0];
  const candidates = voices.filter((voice) =>
    voice.lang.toLocaleLowerCase("en").split("-")[0] === languagePrefix
  );
  if (!candidates.length) return null;

  const qualityVoiceNames = /enhanced|premium|natural|neural/i;
  return candidates.reduce((best, voice) => {
    const score = (voice.lang.toLocaleLowerCase("en") === normalizedLanguage ? 100 : 0) +
      (qualityVoiceNames.test(`${voice.name} ${voice.voiceURI}`) ? 40 : 0) +
      (voice.default ? 20 : 0);
    const bestScore = (best.lang.toLocaleLowerCase("en") === normalizedLanguage ? 100 : 0) +
      (qualityVoiceNames.test(`${best.name} ${best.voiceURI}`) ? 40 : 0) +
      (best.default ? 20 : 0);
    return score > bestScore ? voice : best;
  });
}

function playAudio() {
  const current = activeSteps[currentStepIndex];
  if (!current) return;
  const text = current.step.speak || current.step.model ||
    (current.step.type === "vocabulary" ? current.step.itemIds.join(". ") : "");
  if (text) speakTargetLanguage(text);
}

document.getElementById("homeLink").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen("home");
});
document.getElementById("backToLanguages").addEventListener("click", () => showScreen("home"));
document.getElementById("exitLesson").addEventListener("click", () => {
  showScreen("course");
  renderCourse();
});
document.getElementById("startReview").addEventListener("click", startReview);
document.getElementById("startDiagnostic").addEventListener("click", () => startAssessment("diagnostic"));
document.getElementById("exportFlashcards").addEventListener("click", exportFlashcards);
document.getElementById("checkAssessmentAnswer").addEventListener("click", checkAssessmentAnswer);
document.getElementById("nextAssessmentQuestion").addEventListener("click", nextAssessmentQuestion);
document.getElementById("finishAssessment").addEventListener("click", () => {
  document.getElementById("assessmentDialog").close();
});
document.getElementById("closeAssessment").addEventListener("click", () => {
  document.getElementById("assessmentDialog").close();
});
document.getElementById("copyMasterPrompt").addEventListener("click", async () => {
  const prompt = document.getElementById("masterPrompt").value;
  const status = document.getElementById("resourceStatus");
  try {
    await navigator.clipboard.writeText(prompt);
    status.textContent = "Prompt copiado. Puedes adaptar el contexto y formato antes de usarlo.";
  } catch (error) {
    console.error("No se pudo copiar el prompt:", error);
    status.textContent = "No se pudo copiar automáticamente. Selecciona y copia el texto del prompt.";
    document.getElementById("masterPrompt").focus();
    document.getElementById("masterPrompt").select();
  }
});
document.getElementById("promptLessonSelect").addEventListener("change", updateMasterPrompt);
checkBtn.addEventListener("click", verifyAnswer);
continueBtn.addEventListener("click", continueLesson);
audioBtn.addEventListener("click", playAudio);

setCurriculum("it");
renderLanguages();
showScreen("home");

if ("serviceWorker" in navigator) {
  if (window.isSecureContext) {
    navigator.serviceWorker.register("./sw.js").then(() => navigator.serviceWorker.ready)
      .then(() => {
        offlineNote.textContent = "Modo sin conexión listo después de cargar la app una vez.";
      })
      .catch((error) => {
        console.error("No se pudo activar el modo sin conexión:", error);
        offlineNote.textContent = "No se pudo activar el modo sin conexión en este momento.";
      });
  } else {
    offlineNote.textContent = "Para usar el modo sin conexión, abre la app desde localhost o una dirección HTTPS.";
  }
} else {
  offlineNote.textContent = "Este navegador no permite activar el modo sin conexión.";
}

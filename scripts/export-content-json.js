#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const outputPath = path.join(root, "database", "content.normalized.json");
const context = vm.createContext({ console, window: {} });
const sourceFiles = [
  ...["it", "en", "pt", "es", "fr", "de", "zh", "ja", "ar", "hi"]
    .map((language) => `curriculum-a1-${language}.js`),
  "curriculum-a2-it.js",
  "curriculum-a2-other.js",
  "curriculum-b1.js",
  "curriculum-b2-c2.js",
  "learning-resources.js"
];

for (const filename of sourceFiles) {
  const source = fs.readFileSync(path.join(root, filename), "utf8");
  vm.runInContext(source, context, { filename });
}

const { window } = context;
const coursesByLanguage = {
  it: window.ITALIAN_A1_CURRICULUM,
  en: window.ENGLISH_A1_CURRICULUM,
  pt: window.PORTUGUESE_A1_CURRICULUM,
  es: window.SPANISH_A1_CURRICULUM,
  fr: window.FRENCH_A1_CURRICULUM,
  de: window.GERMAN_A1_CURRICULUM,
  zh: window.MANDARIN_A1_CURRICULUM,
  ja: window.JAPANESE_A1_CURRICULUM,
  ar: window.ARABIC_A1_CURRICULUM,
  hi: window.HINDI_A1_CURRICULUM
};

for (const [language, curriculum] of Object.entries(window.MULTILINGUAL_A2_CURRICULA)) {
  coursesByLanguage[`${language}-a2`] = curriculum;
}
coursesByLanguage["it-a2"] = window.ITALIAN_A2_CURRICULUM;
for (const [language, curriculum] of Object.entries(window.MULTILINGUAL_B1_CURRICULA)) {
  coursesByLanguage[`${language}-b1`] = curriculum;
}
for (const [language, levels] of Object.entries(window.MULTILINGUAL_ADVANCED_CURRICULA)) {
  for (const [level, curriculum] of Object.entries(levels)) {
    coursesByLanguage[`${language}-${level.toLowerCase()}`] = curriculum;
  }
}

const languageNames = Object.fromEntries(
  Object.entries(coursesByLanguage).map(([key, curriculum]) => [
    key,
    curriculum.metadata.languageName
  ])
);
const normalized = {
  schema_version: 1,
  source_language: "es",
  courses: [],
  levels: [],
  units: [],
  lessons: [],
  vocabularies: [],
  exercises: [],
  course_resources: [],
  projects: []
};
const idSet = new Map();

function assertUniqueId(table, id) {
  const key = `${table}:${id}`;
  if (idSet.has(key)) throw new Error(`ID duplicado en ${table}: ${id}`);
  idSet.set(key, true);
}

function targetText(value, language) {
  return value?.target ?? value?.[language] ?? value?.it ?? value?.en ?? "";
}

function translatedText(value) {
  return value?.translation ?? value?.es ?? "";
}

function exerciseType(type) {
  const types = {
    vocabulary: null,
    grammar: "grammar",
    fillBlank: "fill_blank",
    dialogue: "dialogue",
    production: "production",
    multipleChoice: "multiple_choice",
    matching: "matching",
    listening: "listening"
  };
  return Object.hasOwn(types, type) ? types[type] : "other";
}

for (const [courseKey, curriculum] of Object.entries(coursesByLanguage)) {
  if (!curriculum?.metadata || !Array.isArray(curriculum.units)) {
    throw new Error(`Currículo incompleto: ${courseKey}`);
  }
  const language = curriculum.metadata.language;
  const levelCode = curriculum.metadata.level;
  const courseId = `course-${language}-es`;
  const levelId = `${courseId}-${levelCode.toLowerCase()}`;
  const resources = window.LEARNING_RESOURCES[`${language}-${levelCode.toLowerCase()}`] ??
    window.LEARNING_RESOURCES[language];
  const projectList = levelCode === "A1"
    ? window.A1_PROJECTS
    : levelCode === "A2"
      ? language === "it" ? window.A2_PROJECTS : window.GENERAL_A2_PROJECTS
      : levelCode === "B1"
        ? window.GENERAL_B1_PROJECTS
        : window.GENERAL_ADVANCED_PROJECTS[levelCode];

  if (!normalized.courses.some((course) => course.id === courseId)) {
    assertUniqueId("courses", courseId);
    normalized.courses.push({
      id: courseId,
      title: `${languageNames[courseKey]} para hispanohablantes`,
      source_language: "es",
      target_language: language,
      metadata: { language_name: languageNames[courseKey] }
    });
  }

  assertUniqueId("levels", levelId);
  normalized.levels.push({
    id: levelId,
    course_id: courseId,
    code: levelCode,
    orden: Number(levelCode.slice(1)),
    metadata: {
      audience: curriculum.metadata.audience ?? "",
      estimated_minutes: curriculum.metadata.estimatedMinutes ?? null,
      design: curriculum.metadata.design ?? "",
      content_note: curriculum.metadata.contentNote ?? ""
    }
  });

  curriculum.units.forEach((unit, unitIndex) => {
    const roadmap = curriculum.roadmap.find((item) => item.id === unit.id) ?? {};
    const unitId = `${levelId}-${unit.id}`;
    assertUniqueId("units", unitId);
    normalized.units.push({
      id: unitId,
      level_id: levelId,
      titulo: roadmap.title ?? unit.title ?? unit.id,
      orden: unitIndex + 1,
      can_do: roadmap.canDo ?? "",
      metadata: {
        grammar: roadmap.grammar ?? "",
        sounds: roadmap.sounds ?? "",
        vocabulary: roadmap.vocabulary ?? "",
        activity: roadmap.game ?? ""
      }
    });

    unit.lessons.forEach((lesson, lessonIndex) => {
      const lessonId = `${unitId}-${lesson.id}`;
      const grammar = lesson.steps.find((step) => step.type === "grammar");
      assertUniqueId("lessons", lessonId);
      normalized.lessons.push({
        id: lessonId,
        unit_id: unitId,
        titulo: lesson.title,
        contenido_md: [
          `## ${lesson.title}`,
          "",
          `**Objetivo:** ${lesson.objective}`,
          grammar ? "" : null,
          grammar ? `### ${grammar.title}` : null,
          grammar?.explanation ?? null,
          grammar?.pattern ? `\n**Patrón:**\n\n${grammar.pattern}` : null
        ].filter((line) => line !== null).join("\n"),
        objetivo: lesson.objective,
        orden: lessonIndex + 1,
        minutos: lesson.minutes ?? null,
        metadata: { source_curriculum_key: courseKey }
      });

      lesson.vocabulary.forEach((item, vocabularyIndex) => {
        const vocabularyId = `${lessonId}-vocab-${vocabularyIndex + 1}`;
        assertUniqueId("vocabularies", vocabularyId);
        normalized.vocabularies.push({
          id: vocabularyId,
          lesson_id: lessonId,
          termino: targetText(item, language),
          traduccion: translatedText(item),
          fonetica: item.pronunciation ?? item.transliteration ?? item.pinyin ?? item.romaji ?? null,
          audio_url: item.audioUrl ?? item.audio_url ?? null,
          ejemplo: item.exampleTarget ?? item.exampleEn ?? item.exampleIt ?? "",
          ejemplo_traduccion: item.exampleTranslation ?? item.exampleEs ?? "",
          orden: vocabularyIndex + 1,
          metadata: {}
        });
      });

      let exerciseOrder = 0;
      for (const step of lesson.steps) {
        const tipo = exerciseType(step.type);
        if (!tipo) continue;
        exerciseOrder += 1;
        const options = step.options ?? step.turns?.flatMap((turn) => turn.options ?? []) ?? [];
        const correctDialogueOption = step.turns?.flatMap((turn) =>
          turn.options ?? []
        ).find((option) => option.correct);
        const answer = step.answer ?? (correctDialogueOption
          ? targetText(correctDialogueOption, language)
          : null);
        const question = step.prompt ?? step.title ?? step.instruction ?? "";
        const exerciseId = `${lessonId}-exercise-${exerciseOrder}`;
        assertUniqueId("exercises", exerciseId);
        normalized.exercises.push({
          id: exerciseId,
          lesson_id: lessonId,
          tipo,
          pregunta: question,
          opciones: options,
          respuesta_correcta: answer,
          contenido: step,
          orden: exerciseOrder
        });
      }

      const vocabularyQuestion = createVocabularyAssessmentQuestion(lesson, language);
      if (vocabularyQuestion) {
        exerciseOrder += 1;
        const exerciseId = `${lessonId}-exercise-${exerciseOrder}`;
        assertUniqueId("exercises", exerciseId);
        normalized.exercises.push({
          id: exerciseId,
          lesson_id: lessonId,
          tipo: "multiple_choice",
          pregunta: vocabularyQuestion.prompt,
          opciones: vocabularyQuestion.options,
          respuesta_correcta: vocabularyQuestion.answer,
          contenido: {
            type: "multipleChoice",
            title: "Evaluación de vocabulario",
            feedback: vocabularyQuestion.explanation,
            generated_from: "lesson.vocabulary"
          },
          orden: exerciseOrder
        });
      }
    });

    const project = projectList?.[unitIndex];
    if (project) {
      const projectId = `${unitId}-project-1`;
      assertUniqueId("projects", projectId);
      normalized.projects.push({
        id: projectId,
        unit_id: unitId,
        titulo: project.title,
        tarea: project.task,
        evidencia: project.evidence,
        criterios: project.checklist,
        orden: 1
      });
    }
  });

  if (resources) {
    const resourceEntries = [
      ["pronunciation", { notes: resources.pronunciation, ipa: resources.ipa }],
      ["listening", { instructions: resources.listening }],
      ["pitfalls", { items: resources.pitfalls }],
      ["teacher_guide", {
        session_minutes: 45,
        stages: [
          { minutes: 5, name: "Activación" },
          { minutes: 10, name: "Modelado y pronunciación" },
          { minutes: 15, name: "Práctica guiada" },
          { minutes: 10, name: "Tarea comunicativa" },
          { minutes: 5, name: "Autoevaluación y cierre" }
        ],
        answer_key: "Las evaluaciones muestran la respuesta correcta y su explicación tras cada intento."
      }]
    ];
    for (const [type, content] of resourceEntries) {
      const id = `${levelId}-${type}`;
      assertUniqueId("course_resources", id);
      normalized.course_resources.push({
        id,
        level_id: levelId,
        tipo: type,
        contenido: content
      });
    }
  }
}

function createVocabularyAssessmentQuestion(lesson, language) {
  const vocabulary = lesson.vocabulary ?? [];
  const correct = vocabulary[0];
  if (!correct) return null;
  const distractors = vocabulary.slice(1)
    .filter((item) => translatedText(item) && translatedText(item) !== translatedText(correct))
    .map(translatedText)
    .filter((value, index, list) => list.indexOf(value) === index)
    .slice(0, 2);
  if (distractors.length !== 2) return null;
  const term = targetText(correct, language);
  return {
    prompt: `¿Qué significa «${term}»?`,
    options: [translatedText(correct), ...distractors],
    answer: translatedText(correct),
    explanation: `«${term}» significa «${translatedText(correct)}».`
  };
}

const expectedCounts = {
  courses: 10,
  levels: 60,
  units: 430,
  lessons: 1340,
  vocabularies: 16846,
  exercises: 8040,
  course_resources: 240,
  projects: 430
};
for (const [table, expected] of Object.entries(expectedCounts)) {
  if (normalized[table].length !== expected) {
    throw new Error(`${table}: se esperaban ${expected} filas y se obtuvieron ${normalized[table].length}.`);
  }
}

for (const unit of normalized.units) {
  const lessonIds = normalized.lessons
    .filter((lesson) => lesson.unit_id === unit.id)
    .map((lesson) => lesson.id);
  const assessmentQuestionCount = lessonIds.reduce((total, lessonId) =>
    total + normalized.exercises.filter((exercise) =>
      exercise.lesson_id === lessonId && exercise.tipo === "multiple_choice"
    ).length, 0);
  if (assessmentQuestionCount < 5 || assessmentQuestionCount > 10) {
    throw new Error(
      `La evaluación de "${unit.titulo}" debe tener entre 5 y 10 preguntas; tiene ${assessmentQuestionCount}.`
    );
  }
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(normalized, null, 2)}\n`);
const counts = Object.fromEntries(
  Object.keys(normalized).filter((key) => Array.isArray(normalized[key]))
    .map((key) => [key, normalized[key].length])
);
console.log(`Exportación completada: ${outputPath}`);
console.log(JSON.stringify(counts, null, 2));

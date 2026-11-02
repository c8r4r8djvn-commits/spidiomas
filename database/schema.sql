CREATE TABLE IF NOT EXISTS courses (
  id text PRIMARY KEY,
  title text NOT NULL,
  source_language text NOT NULL,
  target_language text NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (source_language, target_language)
);

CREATE TABLE IF NOT EXISTS levels (
  id text PRIMARY KEY,
  course_id text NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  code text NOT NULL CHECK (code IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  orden smallint NOT NULL CHECK (orden BETWEEN 1 AND 6),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (course_id, code),
  UNIQUE (course_id, orden)
);

CREATE TABLE IF NOT EXISTS units (
  id text PRIMARY KEY,
  level_id text NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
  titulo text NOT NULL,
  orden smallint NOT NULL CHECK (orden > 0),
  can_do text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (level_id, orden)
);

CREATE TABLE IF NOT EXISTS lessons (
  id text PRIMARY KEY,
  unit_id text NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  titulo text NOT NULL,
  contenido_md text NOT NULL DEFAULT '',
  objetivo text NOT NULL DEFAULT '',
  orden smallint NOT NULL CHECK (orden > 0),
  minutos smallint CHECK (minutos IS NULL OR minutos > 0),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (unit_id, orden)
);

CREATE TABLE IF NOT EXISTS vocabularies (
  id text PRIMARY KEY,
  lesson_id text NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  termino text NOT NULL,
  traduccion text NOT NULL DEFAULT '',
  fonetica text,
  audio_url text,
  ejemplo text,
  ejemplo_traduccion text,
  orden smallint NOT NULL CHECK (orden > 0),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  UNIQUE (lesson_id, orden)
);

CREATE TABLE IF NOT EXISTS exercises (
  id text PRIMARY KEY,
  lesson_id text NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  tipo text NOT NULL CHECK (
    tipo IN (
      'grammar',
      'fill_blank',
      'dialogue',
      'production',
      'multiple_choice',
      'matching',
      'listening',
      'other'
    )
  ),
  pregunta text NOT NULL DEFAULT '',
  opciones jsonb NOT NULL DEFAULT '[]'::jsonb,
  respuesta_correcta jsonb,
  contenido jsonb NOT NULL DEFAULT '{}'::jsonb,
  orden smallint NOT NULL CHECK (orden > 0),
  UNIQUE (lesson_id, orden)
);

CREATE TABLE IF NOT EXISTS course_resources (
  id text PRIMARY KEY,
  level_id text NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
  tipo text NOT NULL CHECK (tipo IN ('pronunciation', 'listening', 'pitfalls', 'teacher_guide')),
  contenido jsonb NOT NULL,
  UNIQUE (level_id, tipo)
);

CREATE TABLE IF NOT EXISTS projects (
  id text PRIMARY KEY,
  unit_id text NOT NULL REFERENCES units(id) ON DELETE CASCADE,
  titulo text NOT NULL,
  tarea text NOT NULL,
  evidencia text NOT NULL DEFAULT '',
  criterios jsonb NOT NULL DEFAULT '[]'::jsonb,
  orden smallint NOT NULL CHECK (orden > 0),
  UNIQUE (unit_id, orden)
);

CREATE TABLE IF NOT EXISTS learner_progress (
  user_id uuid NOT NULL,
  lesson_id text NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  completed_at timestamptz,
  review_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  assessment_results jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_levels_course_order ON levels(course_id, orden);
CREATE INDEX IF NOT EXISTS idx_units_level_order ON units(level_id, orden);
CREATE INDEX IF NOT EXISTS idx_lessons_unit_order ON lessons(unit_id, orden);
CREATE INDEX IF NOT EXISTS idx_vocabularies_lesson_order ON vocabularies(lesson_id, orden);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson_order ON exercises(lesson_id, orden);
CREATE INDEX IF NOT EXISTS idx_projects_unit_order ON projects(unit_id, orden);
CREATE INDEX IF NOT EXISTS idx_learner_progress_user ON learner_progress(user_id);

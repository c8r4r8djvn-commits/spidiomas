# Datos normalizados para SP Idiomas

## Contenido

`content.normalized.json` contiene los diez cursos, los niveles A1/A2/B1/B2/C1/C2, unidades,
lecciones, vocabulario, actividades, recursos y proyectos en arreglos separados.
Los IDs son estables para que el archivo se pueda volver a exportar e importar
sin cambiar las relaciones existentes.
La exportación actual reúne 10 cursos, 60 niveles, 430 unidades, 1.340
lecciones, 16.846 términos de vocabulario, 8.040 actividades, 240 recursos y
430 proyectos.

## Regenerar el archivo

Desde la raíz del proyecto:

```sh
node scripts/export-content-json.js
```

El exportador valida los recuentos generales y que cada evaluación de unidad
tenga entre 5 y 10 preguntas de selección múltiple.

## Crear las tablas

Ejecuta `schema.sql` en PostgreSQL o en el SQL Editor de Supabase. Luego importa
los arreglos del JSON respetando las dependencias:

1. `courses`
2. `levels`
3. `units`
4. `lessons`
5. `vocabularies`, `exercises`, `course_resources` y `projects`

Los campos JSON se conservan como `jsonb`; `answer` no se aplana para que las
opciones y las respuestas de cada tipo de actividad mantengan su estructura.

## Supabase y progreso

El esquema es portable y no presupone autenticación. Antes de exponer
`learner_progress` mediante la API de Supabase, vincula `user_id` con
`auth.users(id)`, activa Row Level Security y crea políticas que permitan a cada
persona leer y modificar solo sus propias filas. No habilites acceso público a
datos de progreso.

El exportador no conecta con servicios externos y no sube ni sincroniza datos de
estudiantes.

# DIRECTRICES GENERALES DE ARQUITECTURA Y PROCESOS (FLAMINGOS)

## 1. Misión del Proyecto
Estandarizar, digitalizar y formalizar los diagramas de flujo y modelos BPMN 2.0 en fichas técnicas de proceso, matrices de riesgos e inventarios consolidados de alta calidad, garantizando estricta compatibilidad con exportación y estilos en Google Docs.

## 2. Estructura de Directorios Estándar
- `.agents/`: Reglas del sistema, coreografía de agentes (`AGENTS.md`) y habilidades (`skills/`).
- `docs/assets/`: Archivos visuales fuente (diagramas PNG, diagramas PDF, mockups).
- `docs/specs/templates/`: Plantillas base normalizadas (`Plantilla_Ficha_de_Proceso.md`, etc.).
- `docs/specs/procesos/`: Fichas de proceso y matrices de riesgo generadas (`SOP_[Proceso]_Ficha_de_Proceso.md`).
- `docs/output/`: Entregables consolidados finales (`SOP_Inventario_de_Procesos.md`, PDFs).
- `scripts/`: Scripts de automatización y formateo de estilos para Google Apps Script.

## 3. Convenciones de Nomenclatura y Redacción
1. **Verbos en Infinitivo:** Todas las actividades y tareas en las tablas deben iniciar con verbos en infinitivo (*Verificar*, *Calcular*, *Aprobar*, *Notificar*).
2. **Roles Válidos:** Los responsables deben ser cargos/roles organizacionales (ej. *Coordinador de Operaciones*, *Gerente de Finanzas*), nunca nombres de personas.
3. **Nomenclatura de Archivos:**
   - Ficha de Proceso: `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md`
   - Matriz de Riesgos: `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md`
   - Inventario: `SOP_Inventario_de_Procesos.md`
   - Scripts: Sin espacios en blanco (ej. `Ficha_de_Proceso_Style.js`).
4. **Compatibilidad con Google Docs:**
   - Tablas en Markdown puro sin etiquetas genéricas innecesarias (`Etiqueta | Dato`).
   - Jerarquía clara de títulos (`#`, `##`, `###`).
   - Evitar emojis y caracteres que rompan parsers de Google Apps Script.
5. **Estándar de Maquetación HTML para Google Sites ("PAPUOOL CORPORATE AGILE"):**
   - **Tokens:** Azul Marino Profundo (`#16255C`), Cyan Turquesa (`#00A9B5`), Dorado (`#E5A823`), Alerta Rosa/Coral (`#FFF0F1` / `#E54747`).
   - **Tipografía:** *Plus Jakarta Sans* vía Google Fonts.
   - **Autocontención:** Código 100% autocontenido (HTML, CSS y JS inline), sin dependencias locales como `sheet.css`.
   - **Iconos:** 100% SVG inline.
   - **Skills Asignadas:**
     - `maquetar-ficha-proceso`: Para `Plantilla_Ficha_de_Proceso.html`.
     - `maquetar-matriz-riesgos`: Para `Plantilla_Matriz_de_Riesgos.html`.
     - `maquetar-inventario-procesos`: Para `Plantilla_Inventario_de_Procesos.html`.


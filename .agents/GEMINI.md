# DIRECTRICES GENERALES DE ARQUITECTURA Y PROCESOS (FLAMINGOS)

## 1. Misión del Proyecto
Estandarizar, digitalizar y formalizar diagramas de flujo, diagramas UML y modelos BPMN 2.0 en documentación de procesos empresariales de alta calidad bajo una arquitectura dual Modelo-Vista (MVC):
- **Modelo de Datos (.md):** Markdown estructurado, limpio y compatible al 100% con exportación y estilización en Google Docs mediante scripts en `scripts/`.
- **Vista Gráfica Ejecutiva (.html):** Widgets web autocontenidos, responsivos y optimizados para visualización e integración en Google Sites mediante embeds, siguiendo a cabalidad el sistema de diseño corporativo "PAPUOOL CORPORATE AGILE".

---

## 2. Estructura de Directorios Estándar
- `.agents/`: Reglas del sistema, directrices generales (`GEMINI.md`), coreografía de agentes (`AGENTS.md`) y habilidades operativas (`skills/`).
- `docs/assets/`: Archivos visuales fuente de entrada (diagramas BPMN, flujogramas PNG/JPG, diagramas PDF, mapas de procesos o matrices visuales).
- `docs/specs/templates/`: **Plantillas base maestras, normalizadas y canónicas por componente** (`Plantilla_Ficha_de_Proceso/`, `Plantilla_Inventario_de_Procesos/`, `Plantilla_Matriz_de_Riesgos/`), conteniendo cada una su respectivo `.md` (modelo) y `.html` (vista).
  - **MANDATO DE PLANTILLA ÚNICA Y HOMOGÉNEA:** Toda Ficha de Proceso y Matriz de Riesgo generada o editada DEBE basarse estricta y obligatoriamente en estas plantillas maestras. Queda estrictamente prohibido crear diseños alternativos, esquemas de CSS divergentes (como layouts legacy con `:root` o contenedores `.container` no estándar), o tablas con estructuras de columnas distintas a las oficiales.
- `docs/output/`: Directorio central y único de entregables finales (Fichas de Proceso, Matrices de Riesgo e Inventario Consolidado).
  - **REGLA DE DOBLE ENTREGABLE OBLIGATORIA (.html + .md):** Toda salida generada o consolidada por el sistema (sea Ficha de Proceso, Matriz de Riesgos o Inventario de Procesos) **DEBE entregarse siempre y sin excepción en ambos formatos dentro de esta carpeta**:
    1. **Archivo `.md`:** Modelo de datos estructurado para lectura, versionado y formateo en Google Docs según la plantilla canónica (`.md`).
    2. **Archivo `.html`:** Vista ejecutiva autocontenida para embeber en Google Sites según la plantilla canónica (`.html`).
  - Entregables generados en esta carpeta:
    - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md` y `SOP_[Nombre_Proceso]_Ficha_de_Proceso.html`
    - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md` y `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.html`
    - `SOP_Inventario_de_Procesos.md` y `SOP_Inventario_de_Procesos.html`
    - Paquetes de exportación consolidados y documentación ejecutiva final.
- `scripts/`: Scripts de Google Apps Script (`Ficha_de_Proceso_Style.js`, `Inventario_de_Procesos_Style.js`, `Matriz_de_Riesgos_Style.js`) para formatear documentos en Google Docs con la misma paleta y lineamientos.

---

## 3. Homologación de Fabricación a Partir de Imágenes (Pipeline de Digitalización)
Al analizar cualquier imagen o archivo fuente proveniente de `docs/assets/`, el sistema identificará la naturaleza del diagrama y generará obligatoriamente la pareja de archivos correspondiente en `docs/output/`, clonando fielmente las plantillas de `docs/specs/templates/`:

### A. Si la imagen es un Diagrama de Proceso (BPMN / UML / Flujograma):
Se extrae la lógica secuencial (Eventos, Tareas, Compuertas, Roles/Lanes) y se generan dos pares de entregables en `docs/output/`:
1. **Ficha Técnica de Proceso (SIPOC + KPIs):**
   - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md` (idéntica estructura a `docs/specs/templates/Plantilla_Ficha_de_Proceso/Plantilla_Ficha_de_Proceso.md`)
   - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.html` (usando skill `maquetar-ficha-proceso` y molde canónico de `Plantilla_Ficha_de_Proceso.html`)
2. **Matriz de Riesgos Operativos (AS IS):**
   - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md` (idéntica estructura a `docs/specs/templates/Plantilla_Matriz_de_Riesgos/Plantilla_Matriz_de_Riesgos.md`)
   - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.html` (usando skill `maquetar-matriz-riesgos` y molde canónico de `Plantilla_Matriz_de_Riesgos.html`)

### B. Si la imagen es un Inventario de Procesos o Mapa de Macroprocesos:
Se extrae la jerarquía de procesos (Nivel 0, Nivel 1, Subprocesos, Dueños y Vínculos) y se genera en `docs/output/`:
- `SOP_Inventario_de_Procesos.md`
- `SOP_Inventario_de_Procesos.html` (usando skill `maquetar-inventario-procesos` y molde de `Plantilla_Inventario_de_Procesos.html`)

### C. Si la imagen es una Matriz o Mapa de Riesgos:
Se digitaliza la matriz operativa con identificación de peligros, impactos, controles y niveles de riesgo, generando en `docs/output/`:
- `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md`
- `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.html` (usando skill `maquetar-matriz-riesgos` y molde de `Plantilla_Matriz_de_Riesgos.html`)

---

## 4. Convenciones de Nomenclatura y Redacción
1. **Verbos en Infinitivo Obligatorios:** Todas las actividades y tareas en las tablas de procesos (SIPOC) y matrices de riesgo deben iniciar con verbos en infinitivo (*Verificar*, *Calcular*, *Aprobar*, *Notificar*, *Conciliar*).
2. **Roles Organizacionales Formales:** Los responsables deben ser cargos de la estructura organizativa (ej. *Coordinador de Tesorería*, *Gerente de Operaciones*), nunca nombres de personas físicas.
3. **Nomenclatura Estándar de Archivos:**
   - Ficha de Proceso: `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md` y `.html`
   - Matriz de Riesgos: `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md` y `.html`
   - Inventario: `SOP_Inventario_de_Procesos.md` y `.html`
   - Scripts: Sin espacios (ej. `Ficha_de_Proceso_Style.js`).
4. **Compatibilidad Estricta con Google Docs:**
   - Tablas en Markdown puro sin etiquetas genéricas innecesarias (`Etiqueta | Dato`).
   - Fichas de Proceso: Tabla SIPOC de 5 columnas obligatorias (`Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes`).
   - Matrices de Riesgo: Tabla de Evaluación de 5 columnas obligatorias (`Actividad | Peligro | Riesgo | Control | Tipo de Control`).
   - Jerarquía clara de títulos (`#`, `##`, `###`).
   - Cero caracteres especiales o emojis que rompan parsers de Google Apps Script.

---

## 5. Estándar de Maquetación HTML ("PAPUOOL CORPORATE AGILE")
Todas las vistas `.html` deben ser 100% homogéneas y compatibles para embed en **Google Sites** cumpliendo las siguientes reglas:
- **Estructura Arquitectónica Mandatoria:**
  - Contenedor raíz `.widget-container` (máximo 1240px, centrado).
  - Trama superior decorativa `.top-strip` con patrón `.strip-pattern`.
  - Encabezado `.header-bar` con `.eyebrow` dorado (`#E5A823`), `.main-title` bicolor (Azul `#16255C` y Cyan `#00A9B5`) y logotipo corporativo.
  - Tarjetas de metadatos (`.doc-meta-card` o `.control-doc-card`) con campos estandarizados y badges.
  - Sección de objetivo/advertencia con bordes de 4px acentuados.
  - Tablas interactivas con encabezados en Azul Marino `#16255C`, badges de colores para estatus/roles/tipos de control, y scripts de filtrado/búsqueda en vivo integrados.
  - Sección de KPIs o resumen con diseño modular tipo tarjetas (`.kpi-card`).
  - Pie de página `.footer-note-box` con acento azul marino y barra dorada inferior `.bottom-gold-bar`.
- **Tokens Oficiales de Color:**
  - `Azul Marino Profundo (#16255C):` Encabezados principales, banner Nivel 0, títulos de sección y bordes de acento.
  - `Cyan Turquesa Vibrante (#00A9B5):` Columna de Proceso en SIPOC, enlaces interactivos, badges preventivos y acentos visuales.
  - `Cyan Translúcido (#F0FDFA / #E6FBFB):` Fondo de actividades en SIPOC y badges de riesgo bajo/preventivo.
  - `Dorado Corporativo (#E5A823 / #B8860B):` Badges de control detectivo y riesgo medio.
  - `Amarillo Pastel Cálido (#FDF5D8):` Fondo de proceso padre Nivel 1 en el inventario.
  - `Coral / Alerta (#E54747 / #FFF0F1):` Controles correctivos, riesgos críticos/altos y cajas de advertencia metodológica.
  - `Neutros Corporativos:` `#FFFFFF` (fondo base), `#F4F7FB` / `#F8FAFC` (zebra striping), `#334155` (texto lectura), `#64748B` (texto muted), `#CBD5E1` (bordes de 1px).
- **Tipografía:** *Plus Jakarta Sans* cargada vía Google Fonts.
- **Autocontención Absoluta:** Código 100% autocontenido en el archivo `.html` (CSS inline en `<style>`, scripts inline en `<script>`), sin dependencias externas locales como `sheet.css`.
- **Iconografía:** 100% SVG inline escalable y responsivo.
- **Interactividad en Google Sites:** Buscadores en vivo, filtros de badges y tarjetas de métricas integradas directamente en el DOM.
- **Skills Vinculadas:**
  - `maquetar-ficha-proceso`: Para la generación de la vista de Ficha de Proceso.
  - `maquetar-matriz-riesgos`: Para la generación de la vista de Matriz de Riesgos.
  - `maquetar-inventario-procesos`: Para la generación de la vista de Inventario de Procesos.

# DIRECTRICES GENERALES DE ARQUITECTURA Y PROCESOS (FLAMINGOS)

## 1. Misión del Proyecto
Estandarizar, digitalizar y formalizar diagramas de flujo, diagramas UML y modelos BPMN 2.0 en documentación de procesos empresariales de alta calidad bajo una arquitectura dual Modelo-Vista (MVC) y publicación multicanal:
- **Modelo de Datos (.md):** Markdown estructurado, limpio y compatible al 100% con exportación y estilización en Google Docs mediante scripts en `scripts/`.
- **Vista Gráfica Ejecutiva (.html):** Widgets web autocontenidos, responsivos y optimizados para:
  1. **Portal Web en GitHub Pages:** Alojamiento y navegación web centralizada bajo el dominio corporativo personalizado `https://procesos.desarrollo-flamingos.com.mx/`.
  2. **Integración en Google Sites:** Visualización e incrustación directa mediante widgets embed, siguiendo a cabalidad el sistema de diseño corporativo "PAPUOOL CORPORATE AGILE".

---

## 2. Estructura de Directorios Estándar y Publicación Web (GitHub Pages)
- `.agents/`: Reglas del sistema, directrices generales (`GEMINI.md`), coreografía de agentes (`AGENTS.md`) y habilidades operativas (`skills/`).
- `docs/`: **Directorio Raíz de Publicación Web para GitHub Pages** (Rama: `main`, Carpeta: `/docs`):
  - `docs/index.html`: **Gateway / Enrutador Principal de GitHub Pages.** Redirige de inmediato el tráfico de la raíz (`/`) hacia `output/SOP_Inventario_de_Procesos.html`. **MANDATO: Queda terminantemente prohibido eliminar, renombrar o sobrescribir este archivo.**
  - `docs/CNAME`: Archivo de configuración de dominio personalizado para GitHub Pages (`procesos.desarrollo-flamingos.com.mx`). **MANDATO: Preservar intacto.**
  - `docs/.nojekyll`: Archivo de bypass para que GitHub Pages sirva archivos estáticos directamente sin procesamiento de Jekyll. **MANDATO: Preservar intacto.**
  - `docs/assets/`: Archivos visuales fuente de entrada y diagramas BPMN/PDF descargables vinculados desde el inventario.
  - `docs/specs/templates/`: **Plantillas base maestras, normalizadas y canónicas por componente** (`Plantilla_Ficha_de_Proceso/`, `Plantilla_Inventario_de_Procesos/`, `Plantilla_Matriz_de_Riesgos/`), conteniendo cada una su respectivo `.md` (modelo) y `.html` (vista).
    - **MANDATO DE PLANTILLA ÚNICA Y HOMOGÉNEA:** Toda Ficha de Proceso y Matriz de Riesgo generada o editada DEBE basarse estricta y obligatoriamente en estas plantillas maestras. Queda estrictamente prohibido crear diseños alternativos, esquemas de CSS divergentes (como layouts legacy con `:root` o contenedores `.container` no estándar), o tablas con estructuras de columnas distintas a las oficiales.
  - `docs/output/`: Directorio central y único de entregables finales (Fichas de Proceso, Matrices de Riesgo e Inventario Consolidado).
    - **REGLA DE DOBLE ENTREGABLE OBLIGATORIA (.html + .md):** Toda salida generada o consolidada por el sistema (sea Ficha de Proceso, Matriz de Riesgos o Inventario de Procesos) **DEBE entregarse siempre y sin excepción en ambos formatos dentro de esta carpeta**:
      1. **Archivo `.md`:** Modelo de datos estructurado para lectura, versionado y formateo en Google Docs según la plantilla canónica (`.md`).
      2. **Archivo `.html`:** Vista ejecutiva autocontenida para embeber en Google Sites y desplegar en GitHub Pages según la plantilla canónica (`.html`).
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
  - Tarjetas de metadatos (`.doc-meta-card` o `.control-doc-card`) con campos estandarizados. **La etiqueta de Revisión (.badge-rev) es obligatoriamente amarilla** (fondo `#FEF7E6`, texto `#D99E1A`, borde `rgba(229, 168, 35, 0.4)`). Prohibido usar badges cian para la revisión.
  - **Cuadro de Objetivo y Alcance (.process-summary-card):** Modelo canónico con **borde izquierdo sólido de 4px en Cyan (`border-left: 4px solid #00A9B5`)**, borde perimetral `1px solid #E2E8F0`, y sombra suave `box-shadow: 0 2px 8px rgba(0,0,0,0.02)`. Queda terminantemente prohibido usar bordes superiores azul marino (`border-top: 4px solid #16255C`). Debe incluir división interna de alcance con `Punto de Inicio` y `Punto de Término`.
  - Tablas interactivas con encabezados en Azul Marino `#16255C`, badges de colores para estatus/roles/tipos de control, y scripts de filtrado/búsqueda en vivo integrados.
  - Sección de KPIs o resumen con diseño modular tipo tarjetas (`.kpi-card`) con acento izquierdo en Cyan `#00A9B5`.
  - Pie de página `.footer-note-box` con acento azul marino y barra dorada inferior `.bottom-gold-bar`.
- **Tokens Oficiales de Color:**
  - `Azul Marino Profundo (#16255C):` Encabezados principales, banner Nivel 0, títulos de sección y bordes de acento.
  - `Cyan Turquesa Vibrante (#00A9B5):` Borde izquierdo del Cuadro de Objetivos (`.process-summary-card`), columna de Proceso en SIPOC, enlaces interactivos, badges preventivos y acentos visuales.
  - `Cyan Translúcido (#F0FDFA / #E6FBFB):` Fondo de actividades en SIPOC y badges de riesgo bajo/preventivo.
  - `Dorado Corporativo (#E5A823 / #B8860B) y Amarillo Pastel (#FEF7E6 / #D99E1A):` Eyebrows, badges de Revisión (`.badge-rev`), control detectivo y riesgo medio.
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

---

## 6. Arquitectura de Despliegue y Publicación en GitHub Pages
La documentación de procesos cuenta con despliegue automático mediante **GitHub Pages** sirviendo estáticamente la carpeta `/docs` de la rama `main`:
- **Dominio y URL Oficial:** `https://procesos.desarrollo-flamingos.com.mx/` (configurado en `docs/CNAME`).
- **Enrutamiento y Landing Page:**
  - El visitante que accede a la raíz (`https://procesos.desarrollo-flamingos.com.mx/`) es recibido por `docs/index.html`, el cual ejecuta una redirección inmediata (`<meta http-equiv="refresh" content="0; url=output/SOP_Inventario_de_Procesos.html">`) hacia el Catálogo Consolidado de Procesos.
  - **Archivos de Infraestructura Críticos:** `docs/.nojekyll`, `docs/CNAME` y `docs/index.html` son componentes permanentes del despliegue. Ningún agente, script o refactorización debe borrarlos, moverlos o alterarlos indebidamente.
- **Lineamientos Mandatorios para Prevención de Enlaces Rotos en GitHub Pages:**
  1. **Rutas Relativas Universales:** Todos los enlaces entre páginas HTML en `docs/output/` y diagramas en `docs/assets/` deben utilizar rutas relativas estáticas (`../assets/...`). Queda estrictamente prohibido usar rutas absolutas locales tipo `file:///` o rutas del sistema operativo (`/Users/...`) tanto en archivos `.html` como en `.md`.
  2. **Normalización Unicode NFC Obligatoria (Precomposed):** 
     - *Causa Raíz de Enlaces Rotos 404:* macOS (sistema APFS) descompone los caracteres acentuados en **NFD** (`o` + `\u0301`, codificado en URL como `%CC%81`), mientras que el árbol de Git y los servidores Linux de GitHub Pages almacenan los nombres en **NFC** (`\u00f3`, codificado en URL como `%C3%B3`). Dado que Linux es estrictamente sensible a la secuencia binaria de bytes, solicitar una URL en NFD genera un error **404 Not Found**.
     - *Mandato:* Todo agente, script o generador DEBE normalizar los nombres a **NFC** (`unicodedata.normalize('NFC', nombre)`) antes de codificar la URL (`urllib.parse.quote`).
  3. **Codificación URL Completa:** Además de acentos, caracteres como espacios (`%20`), paréntesis (`%28` y `%29`), y dos puntos (`%3A`) deben codificarse según el estándar web para evitar fallos de resolución en servidores Linux.
  4. **Apertura de Diagramas en Pestaña Nueva:** Todo enlace a diagramas BPMN o archivos PDF debe incluir `target="_blank"` y `rel="noopener noreferrer"`.
  5. **Exactitud de Mayúsculas/Minúsculas (Case Sensitivity):** Los nombres de archivos y rutas relativas deben coincidir con absoluta exactitud con los nombres físicos en el repositorio.
  6. **Previsualización Enriquecida en Redes y WhatsApp (Open Graph & Favicon):**
     - Tanto el gateway raíz `docs/index.html` como `docs/output/SOP_Inventario_de_Procesos.html` deben incluir obligatoriamente metaetiquetas Open Graph (`og:image`, `og:title`, `og:description`, `og:url`, `og:type`) y Twitter Cards.
     - **Requisitos Críticos de WhatsApp:**
       - La imagen DEBE especificarse con **URL absoluta HTTPS** (`https://procesos.desarrollo-flamingos.com.mx/assets/og_flamingos_preview.png`); WhatsApp rechaza URLs relativas.
       - El formato debe ser **PNG o JPEG** (WhatsApp ignora imágenes en SVG).
       - El peso del archivo debe ser estrictamente **inferior a 300 KB** (si excede 300 KB, WhatsApp descarta el logo en el preview).
       - Se debe incluir `<link rel="icon" type="image/png" href="https://procesos.desarrollo-flamingos.com.mx/assets/favicon.png">` como fallback y para favicon de pestañas del navegador.



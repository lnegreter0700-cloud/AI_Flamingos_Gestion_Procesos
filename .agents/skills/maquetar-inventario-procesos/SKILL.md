---
name: maquetar-inventario-procesos
description: Aplica a raja tabla el Look and Feel corporativo "PAPUOOL CORPORATE AGILE" para generar y mantener el Inventario General de Procesos (Nivel 0 y 1) en HTML compatible con embeds de Google Sites.
---

# SKILL: Maquetar Inventario de Procesos (HTML / Google Sites)

Esta habilidad norma la construcción, edición y aseguramiento gráfico del **Inventario General de Procesos**, garantizando cumplimiento estricto del sistema de diseño **"PAPUOOL CORPORATE AGILE"** y compatibilidad nativa en el embed de **Google Sites**.

---

## 1. Tokens de Color y Especificaciones Visuales (HEX)

* **Canvas / Fondo Base:** Blanco puro (`#FFFFFF`) con padding contenedor de 16px.
* **Banner de Macroproceso:** Degradado Azul Marino (`linear-gradient(135deg, #16255C 0%, #1A3678 100%)`) con sombra suave y texto blanco.
* **Color Primario (Títulos & Badges de Proceso):** Azul Marino Profundo (`#16255C` / `#111A44`).
* **Acento Tecnológico (Palabras Clave & Botones):** Cyan Turquesa Vibrante (`#00A9B5` / `#0B9EA8`).
* **Acento Secundario (Eyebrows, Badges, Nodos):** Amarillo Mostaza / Dorado (`#E5A823` / `#D99E1A`).
* **Badges de Código:** Monospace cyan (`#00A9B5`) con fondo `#F0FDFA`.
* **Tarjetas y Paneles:** Borde sutil de 1px en `#E2E8F0`, fondo blanco o `#F8FAFC`, radio de curvatura de 14px.
* **Texto de Cuerpo:** Gris Pizarra Oscuro (`#334155` / `#475569`).

---

## 2. Requisitos Mandatorios de Compatibilidad Dual (Google Sites & GitHub Pages)

Cualquier entregable HTML de Inventario de Procesos debe operar a la perfección tanto como landing page del portal web corporativo en **GitHub Pages** (`https://procesos.desarrollo-flamingos.com.mx/`) como incrustado en el modal **"Insertar código / Embed code"** de **Google Sites**:

1. **100% Autocontenido:** Cero dependencias locales (`sheet.css` proscrito). Todos los estilos en `<style>`.
2. **Tipografía Web:** Plus Jakarta Sans vía Google Fonts CDN.
3. **Iconografía SVG Inline:** Todos los pictogramas vectorizados en código SVG puro.
4. **Buscador en Tiempo Real:** JavaScript ligero para filtrar subprocesos al escribir en la barra de búsqueda.
5. **Rutas Relativas Web Universales y Normalización Unicode NFC:**
   - Enlaces a Fichas y Matrices: rutas relativas directas dentro de `docs/output/` (`href="SOP_[Nombre]_[Tipo].html"`).
   - Enlaces a Diagramas en `docs/assets/`: rutas relativas universales (`href="../assets/[Archivo_Codificado].pdf"`), con `target="_blank"` y `rel="noopener noreferrer"`.
   - **Normalización Unicode NFC Obligatoria:** En macOS, los nombres de archivos con tildes se leen como NFD (`%CC%81`), lo que rompe los enlaces (404) en GitHub Pages (Linux). Se DEBE normalizar siempre a NFC (`unicodedata.normalize('NFC', archivo)`) antes de codificar (`urllib.parse.quote`), asegurando bytes precompuestos (`%C3%B3`, `%C3%AD`, etc.).
   - Codificación URL estricta de espacios (`%20`), paréntesis (`%28`, `%29`) y dos puntos (`%3A`).
6. **Enrutamiento desde la Raíz:** `docs/output/SOP_Inventario_de_Procesos.html` es el destino al que apunta el enrutador `docs/index.html`. Los archivos de infraestructura (`index.html`, `CNAME`, `.nojekyll`) deben preservarse intactos.
7. **Metaetiquetas Open Graph & Favicon (Previsualización WhatsApp):**
   - Para que WhatsApp, Slack y redes sociales muestren la tarjeta con logotipo, título y descripción:
     - `og:image`: URL absoluta HTTPS obligatoria (`https://procesos.desarrollo-flamingos.com.mx/assets/og_flamingos_preview.png`), formato PNG/JPEG, <300 KB.
     - `og:title`, `og:description`, `og:site_name`, `twitter:card`.
     - `link rel="icon"` hacia `https://procesos.desarrollo-flamingos.com.mx/assets/favicon.png`.


---

## 3. Estructura de Componentes del Inventario

### A. Encabezado de Marca
* **Trama Superior Decorativa:** Contenedor `.top-strip` con textura diagonal de 45°.
* **Eyebrow:** `[ARQUITECTURA DE PROCESOS | NIVEL 0 & 1]` en dorado (`#E5A823`).
* **Título Bimodal:** `Inventario General de Procesos y ` en Azul Marino (`#16255C`) + `<span class="highlight">Subprocesos</span>` en Cyan (`#00A9B5`).
* **Logotipo PapuOol (Top-Right):** Isotipo geodésico vectorizado + texto corporativo.

### B. Banner del Macroproceso (Nivel 0)
* Contenedor con degradado azul oscuro, icono de arquitectura de procesos en caja cyan translúcida.
* Título del Macroproceso evaluado con su etiqueta superior en tono pastel cálido (`#FCEBA7`).
* Badges de acompañamiento: `Nivel 0 (BPMN 2.0)` en dorado y `Catálogo AS IS` en cyan.

### C. Columna Lateral de Métricas y Filtros
* **Caja de Búsqueda:** Input con icono SVG para filtrar subprocesos en vivo.
* **Panel de Métricas:** Contador de Procesos Base, Subprocesos Totales y estado de formalización.
* **Caja de Reglas de Estandarización:** Viñetas resumen con los criterios BPMN 2.0 y normalización de nombres.

### D. Catálogo Modular de Procesos
* Agrupación por **Procesos (Nivel 0/1)**:
  * Encabezado con badge del proceso (`PROC-01`, `PROC-02`), nombre en Azul Marino `#16255C` y contador de subprocesos.
  * Tabla limpia de **Subprocesos**:
    1. `ID` en código monospace cyan (ej. `1.1`, `1.2`).
    2. `Nombre del Subproceso` en negrita pizarra `#1E293B`.
    3. `Nivel` (etiqueta `Nivel 1 (Operativo)`).
    4. `Documentación Dual & Diagrama` (trío de botones compactos: `Ficha` [cian], `Riesgos` [cian] y `Diagrama` [dorado/amarillo `#FEF7E6`/`#D99E1A` con enlace directo al PDF en `assets`]).

### E. Cierre
* **Footer Note Box:** Fondo `#F8FAFC`, borde izquierdo de 4px en `#16255C`, prefijo `[CONTROL DE INVENTARIO]`.
* **Barra Dorada Inferior:** Línea de 3px en `#E5A823`.

---

## 4. Checklist de Validación Gráfica ("A Raja Tabla")

- [ ] ¿El archivo es totalmente autocontenido y no requiere `resources/sheet.css`?
- [ ] ¿El banner del macroproceso usa el degradado `#16255C` a `#1A3678` con badges dorado y cyan?
- [ ] ¿Cada subproceso cuenta con su código ID en tipografía monospace cyan (`#00A9B5`)?
- [ ] ¿El buscador filtra dinámicamente los subprocesos en tiempo real al teclear?
- [ ] ¿Todos los botones de acción usan `target="_blank"` y `rel="noopener noreferrer"`?
- [ ] ¿El logotipo institucional PapuOol está posicionado en la esquina superior derecha en SVG inline?

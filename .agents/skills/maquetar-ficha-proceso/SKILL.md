---
name: maquetar-ficha-proceso
description: Aplica a raja tabla el Look and Feel corporativo "PAPUOOL CORPORATE AGILE" para generar y mantener la Ficha Técnica de Proceso en HTML compatible con embeds de Google Sites.
---

# SKILL: Maquetar Ficha de Proceso (HTML / Google Sites)

Esta habilidad norma la construcción, edición y aseguramiento gráfico de la **Ficha Técnica de Proceso**, garantizando cumplimiento estricto del sistema de diseño **"PAPUOOL CORPORATE AGILE"** y compatibilidad nativa en el embed de **Google Sites**.

---

## 1. Tokens de Color y Especificaciones Visuales (HEX)

* **Canvas / Fondo Base:** Blanco puro (`#FFFFFF`) con padding contenedor de 16px.
* **Color Primario (Títulos & Encabezados):** Azul Marino Profundo (`#16255C` / `#111A44`).
* **Acento Tecnológico (Acciones & Destacados):** Cyan Turquesa Vibrante (`#00A9B5` / `#0B9EA8`).
* **Acento Secundario (Eyebrows, Badges, Nodos):** Amarillo Mostaza / Dorado (`#E5A823` / `#D99E1A`).
* **Badge de Revisión (Estandarizado):** Fondo amarillo pastel (`#FEF7E6`), texto amarillo dorado (`#D99E1A`), borde `1px solid rgba(229, 168, 35, 0.4)` y `border-radius: 6px`.
* **Fondo de Tarjetas & Paneles:** Blanco puro (`#FFFFFF`) o Azul Hielo (`#F8FAFC`), borde de 1px en `#E2E8F0` y curvatura `border-radius: 14px`.
* **Caja de Objetivo y Alcance (.process-summary-card):** Fondo blanco (`#FFFFFF`), borde perimetral `1px solid #E2E8F0`, **borde izquierdo sólido obligatorio de 4px en Cyan (`border-left: 4px solid #00A9B5`)**, curvatura `border-radius: 12px`, y sombra suave `box-shadow: 0 2px 8px rgba(0,0,0,0.02)`. Incluye desglose de alcance en dos cajas con `Punto de Inicio` y `Punto de Término`.
* **Texto de Cuerpo y Listas:** Gris Pizarra Oscuro (`#334155` / `#475569`).

---

## 2. Requisitos Mandatorios de Compatibilidad con Google Sites

Cualquier entregable HTML de Ficha de Proceso debe poder pegarse directamente en el modal **"Insertar código / Embed code"** de Google Sites:

1. **100% Autocontenido:** Todo el CSS en `<style>` en el `<head>`. Prohibido enlazar hojas externas locales (`sheet.css` proscrito).
2. **Tipografía Web:** Importar vía CDN: `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">`.
3. **Iconografía SVG Inline:** Todos los iconos deben estar vectorizados directamente en el código (`<svg viewBox="...">`), nunca fuentes tipográficas externas como FontAwesome.
4. **Layout Fluido:** `box-sizing: border-box`, `max-width: 1240px; margin: 0 auto;`, `overflow-x: hidden`.

---

## 3. Estructura de Componentes de la Ficha Técnica

### A. Encabezado de Marca
* **Trama Superior Decorativa:** Contenedor `.top-strip` con trama de líneas diagonales grises de 45°.
* **Eyebrow:** `Macroproceso: [Nombre del Macroproceso]` en dorado (`#E5A823`).
* **Título Bimodal:** Prefijo en Azul Marino (`#16255C`) + nombre del proceso destacado en Cyan (`#00A9B5`).
* **Logotipo Institucional (Top-Right):** Texto tipográfico dual `DESARROLLO` (Azul Marino) / `FLAMINGOS` (Cyan).

### B. Cinta de Metadatos Documentales (.doc-meta-card)
Disposición en cuadrícula responsiva con:
* `Clave Documento`
* `Revisión`: Etiqueta `.badge-rev` obligatoria en **amarillo** (`#FEF7E6` / `#D99E1A`).
* `Organización`: *Grupo Flamingos*
* `Tipo de Formato`: *Ficha Técnica de Proceso*
* `Clave del Proceso`
* `Nivel del Proceso`
* `Responsable` (cargo organizacional formal)
* `Herramienta Oficial`

### C. Caja de Objetivo y Alcance (.process-summary-card)
* **Estilo Visual Mandatorio:** Borde izquierdo de 4px en Cyan (`#00A9B5`), borde general en `#E2E8F0` y sombra sutil `box-shadow: 0 2px 8px rgba(0,0,0,0.02)`.
* **Título de Sección:** `1. Objetivo del Proceso` acompañado de icono vectorial circular `(i)` en `#16255C`.
* **Texto de Propósito:** Resumen ejecutivo de la función del proceso en tiempo presente o infinitivo.
* **Alcance Dividido (.scope-grid):**
  * `Punto de Inicio`: Con icono vectorial play (`>`) en Cyan `#00A9B5`.
  * `Punto de Término`: Con icono vectorial cuadro (`[]`) en Cyan `#00A9B5`.

### D. Matriz SIPOC Operativa (.sipoc-card)
Tabla estructurada en `.sipoc-table` con:
* **Cabecera Azul Marino (#16255C):** Para Proveedores, Entradas, Salidas y Clientes.
* **Columna Central Proceso (#00A9B5):** Cabecera en Cyan `#00A9B5`, fondo de celdas alternado en cyan pastel (`#F0FDFA` / `#E6FBFB`) con bordes laterales de 2px en `#00A9B5`.
* **Actividades Numeradas:** Insignia circular `.step-number` en Cyan con texto blanco + verbo en infinitivo (*Verificar*, *Validar*, *Registrar*).
* **O (Salidas / Outputs):** Encabezado Azul Marino `#16255C`, entregables resultantes.
* **C (Clientes / Customers):** Encabezado Azul Marino `#16255C`, receptores del valor generado.

### E. Indicadores Clave de Desempeño (KPIs)
Grilla de 2 columnas con tarjetas para **Indicador 1** e **Indicador 2**:
* Nombre del Indicador con badge `KPI 01` / `KPI 02`.
* Recuadro de fórmula con fondo `#F8FAFC` y etiqueta `<code>` estilizada en monospace cyan.
* Matriz 2x2 de atributos: *Unidad de Medida*, *Frecuencia*, *Responsable*, *Origen de Datos*.

### F. Cierre
* **Footer Note Box:** Fondo `#F8FAFC`, borde izquierdo de 4px en `#16255C`, prefijo en negrita `[FICHA TÉCNICA AS IS]`.
* **Barra Dorada Inferior:** Línea de 3px en `#E5A823` como límite del componente.

---

## 4. Checklist de Validación Gráfica ("A Raja Tabla")

- [ ] ¿El archivo no tiene enlaces a `resources/sheet.css`?
- [ ] ¿El título combina Azul Marino (`#16255C`) con Cyan (`#00A9B5`)?
- [ ] ¿El logo PapuOol con esfera geodésica está vectorizado en la esquina superior derecha?
- [ ] ¿Las actividades de la columna 'P' inician todas con verbos en infinitivo?
- [ ] ¿La fórmula de los KPIs está encerrada en una etiqueta `<code>` legible?
- [ ] ¿El layout se adapta correctamente al ancho de pantalla sin scroll horizontal no deseado?

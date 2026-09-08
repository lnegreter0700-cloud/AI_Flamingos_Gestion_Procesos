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
* **Fondo de Tarjetas & Paneles:** Blanco puro (`#FFFFFF`) o Azul Hielo (`#F8FAFC`), borde de 1px en `#E2E8F0` y curvatura `border-radius: 14px`.
* **Caja de Objetivo:** Fondo translúcido Cyan/Menta (`#F0FDFA`), borde izquierdo sólido de 4px en Cyan (`#00A9B5`).
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
* **Eyebrow:** `[DOCUMENTACIÓN TÉCNICA | MODELADO AS IS]` en dorado (`#E5A823`).
* **Título Bimodal:** Sujeto en Azul Marino (`#16255C`) + concepto clave en Cyan (`#00A9B5`).
* **Logotipo PapuOol (Top-Right):** Isotipo nodal reticular geodésico en SVG inline + texto `PAPUOOL / CONSULTORÍA`.

### B. Cinta de Metadatos Documentales
Disposición en tarjetas compactas con:
* `Organización`
* `Nombre del Proceso`
* `Clave del Documento` con badge de `REV [No. Rev]`
* `Nivel Operativo` en badge cyan
* `Responsable del Proceso` (cargo organizacional)
* `Tipo de Formato`

### C. Caja de Objetivo del Proceso
Contenedor destacado con icono de diana/objetivo vectorial y texto sintético de propósito de negocio.

### D. Matriz SIPOC Visual (5 Columnas)
* **S (Proveedores / Suppliers):** Encabezado Azul Marino `#16255C`, tarjeta con lista de proveedores.
* **I (Entradas / Inputs):** Encabezado Azul Marino `#16255C`, tarjeta con insumos requeridos.
* **P (Proceso / Actividades):** **Columna Central Destacada** con borde y cabecera en Cyan `#00A9B5`.
  * **Regla de Oro:** Cada actividad debe iniciar estrictamente con un verbo en infinitivo (*Verificar*, *Calcular*, *Generar*).
  * Viñetas numeradas correlativamente (1., 2., 3...).
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

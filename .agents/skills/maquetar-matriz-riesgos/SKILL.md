---
name: maquetar-matriz-riesgos
description: Aplica a raja tabla el Look and Feel corporativo "PAPUOOL CORPORATE AGILE" para generar y mantener la Matriz de Riesgos Operativos (AS IS) en HTML compatible con embeds de Google Sites.
---

# SKILL: Maquetar Matriz de Riesgos (HTML / Google Sites)

Esta habilidad norma la construcción, edición y aseguramiento gráfico de la **Matriz de Riesgos Operativos AS IS**, garantizando cumplimiento estricto del sistema de diseño **"PAPUOOL CORPORATE AGILE"** y compatibilidad nativa en el embed de **Google Sites**.

---

## 1. Tokens de Color y Especificaciones Visuales (HEX)

* **Canvas / Fondo Base:** Blanco puro (`#FFFFFF`) con padding contenedor de 16px.
* **Color Primario (Títulos & Encabezados de Tabla):** Azul Marino Profundo (`#16255C` / `#111A44`).
* **Acento Tecnológico (Acciones & Destacados):** Cyan Turquesa Vibrante (`#00A9B5` / `#0B9EA8`).
* **Acento Secundario (Eyebrows, Badges, Nodos):** Amarillo Mostaza / Dorado (`#E5A823` / `#D99E1A`).
* **Caja de Alerta / Riesgo (Warning Box):** Fondo Rosa/Rojo suave (`#FFF0F1`), borde izquierdo sólido de 4px en Rojo Coral (`#E54747`), título e icono en `#E54747`.
* **Badges de Tipo de Control:**
  * **Preventivo:** Fondo `#E6FBFB`, texto y borde en Cyan `#00A9B5`.
  * **Detectivo:** Fondo `#FEF7E6`, texto y borde en Dorado `#D99E1A`.
  * **Correctivo:** Fondo `#FFF0F1`, texto y borde en Coral `#E54747`.
* **Badge de Nivel de Riesgo Crítico:** Fondo `#FEE2E2`, texto en Rojo Oscuro `#991B1B`.
* **Texto de Cuerpo y Celdas:** Gris Pizarra Oscuro (`#334155` / `#475569`).

---

## 2. Requisitos Mandatorios de Compatibilidad Dual (Google Sites & GitHub Pages)

Cualquier entregable HTML de Matriz de Riesgos debe operar de forma óptima tanto como página del portal web corporativo en **GitHub Pages** (`https://procesos.desarrollo-flamingos.com.mx/`) como incrustado en el modal **"Insertar código / Embed code"** de **Google Sites**:

1. **100% Autocontenido:** Cero dependencias locales (`sheet.css` proscrito). Todos los estilos encapsulados en `<style>`.
2. **Tipografía Web:** Plus Jakarta Sans vía Google Fonts CDN.
3. **Iconografía SVG Inline:** Todos los pictogramas (alerta, lupa, flechas, logo) vectorizados en código SVG puro.
4. **Filtros y Búsqueda en Vivo:** JavaScript ligero vanilla para búsqueda en tiempo real por texto y filtrado por categoría de control sin recargar la página.
5. **Compatibilidad con Servidores Web Estáticos:** Código autocontenido, sin rutas dependientes de localhost y con nombres de archivo rigurosamente exactos.

---

## 3. Estructura de Componentes de la Matriz de Riesgos

### A. Encabezado de Marca
* **Trama Superior Decorativa:** Contenedor `.top-strip` con trama diagonal gris de 45°.
* **Eyebrow:** `[SISTEMA DE CONTROL INTERNO | AS IS]` en dorado (`#E5A823`).
* **Título Bimodal:** `Matriz de Riesgos y ` en Azul Marino (`#16255C`) + `<span class="highlight">Controles Operativos</span>` en Cyan (`#00A9B5`).
* **Logotipo Institucional (Top-Right):** Texto tipográfico dual `DESARROLLO` (Azul Marino) / `FLAMINGOS` (Cyan).

### B. Cinta de Control Documental (FR-MC-02)
Tarjeta modular superior con:
* `Organización`
* `Formato & Revisión` (`FR-MC-02` / `REV: 00`)
* `Clave del Proceso`
* `Elaboró`
* `Autorizó AS IS`
* `Fecha de Emisión`

### C. Caja de Advertencia Operativa (Warning Box)
Componente mandatorio con fondo `#FFF0F1`, borde coral de 4px `#E54747`, icono vectorial de advertencia y directriz clara sobre la correlación estricta entre Peligro, Riesgo y Tipo de Control.

### D. Barra de Búsqueda y Filtros Rápidos
* Campo de búsqueda con icono de lupa SVG para filtrar cualquier término en la tabla.
* Botones pill interactivos: `Todos`, `Preventivos`, `Detectivos`, `Correctivos`.

### E. Tabla Técnica de Evaluación
* Encabezados con fondo Azul Marino `#16255C` y texto blanco negrita:
  1. `Actividad Operativa` (con indicador visual `▶` y texto en infinitivo).
  2. `Peligro Detectado`.
  3. `Riesgo / Impacto` (con badge de criticidad si aplica).
  4. `Control Mitigante`.
  5. `Tipo de Control` (con píldora de color correspondiente).
* Filas pares con sombreado tenue `#F8FAFC` y efecto hover `#F0FDFA`.

### F. Cierre
* **Footer Note Box:** Fondo `#F8FAFC`, borde izquierdo de 4px en `#16255C`, prefijo `[MATRIZ AS IS]`.
* **Barra Dorada Inferior:** Línea de 3px en `#E5A823`.

---

## 4. Checklist de Validación Gráfica ("A Raja Tabla")

- [ ] ¿El archivo es 100% autónomo y carece de enlaces a archivos locales como `resources/sheet.css`?
- [ ] ¿La caja de advertencia operativa usa fondo `#FFF0F1` con borde izquierdo sólido de 4px en `#E54747`?
- [ ] ¿Los encabezados de la tabla usan Azul Marino `#16255C` con texto blanco?
- [ ] ¿Los controles Preventivos, Detectivos y Correctivos tienen sus badges diferenciados por color?
- [ ] ¿El buscador y los botones de filtro funcionan de manera instantánea y sin errores en consola?
- [ ] ¿El diseño es fluido y soporta visualización en pantallas móviles mediante scroll horizontal suave en la tabla?

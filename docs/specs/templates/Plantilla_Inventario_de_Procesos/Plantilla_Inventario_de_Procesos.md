# Inventario General de Procesos y Subprocesos

## Información del Macroproceso
* **Macroproceso:** [Título del Macroproceso]
* **Nivel Operativo:** Nivel 0 (BPMN 2.0)
* **Estado del Catálogo:** Catálogo AS IS

---

## Métricas del Catálogo
* **Procesos Base:** 2
* **Subprocesos Totales:** 7
* **Fichas Formalizadas:** 100%
* **Matrices de Riesgo:** Vigentes

---

## Catálogo Detallado de Procesos y Subprocesos

### PROC-01: [Proceso 1]
* **Conteo:** 4 Subprocesos

| ID | Nombre del Subproceso | Nivel | Documentación |
| :--- | :--- | :--- | :--- |
| 1.1 | [Subproceso 1.1] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |
| 1.2 | [Subproceso 1.2] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |
| 1.3 | [Subproceso 1.3] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |
| 1.4 | [Subproceso 1.4] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |

### PROC-02: [Proceso 2]
* **Conteo:** 3 Subprocesos

| ID | Nombre del Subproceso | Nivel | Documentación |
| :--- | :--- | :--- | :--- |
| 2.1 | [Subproceso 2.1] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |
| 2.2 | [Subproceso 2.2] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |
| 2.3 | [Subproceso 2.3] | Nivel 1 (Operativo) | SOP_[Nombre_Proceso]_Ficha_de_Proceso.md |

---

## Estructura Tabular para Google Docs

| [Título del Macroproceso] | |
| :--- | :--- |
| **Proceso** | **Subproceso** |
| **[Proceso 1]** | [Subproceso 1.1] |
| | [Subproceso 1.2] |
| | [Subproceso 1.3] |
| | [Subproceso 1.4] |
| **[Proceso 2]** | [Subproceso 2.1] |
| | [Subproceso 2.2] |
| | [Subproceso 2.3] |

---

## Reglas o Guidelines

1. **Estructura Consolidada:** El Inventario de Procesos debe recopilar de manera estructurada y exhaustiva todos los procesos y subprocesos identificados y formalizados en las fichas de proceso contenidas en `docs/output/`.
2. **Jerarquía Clara:** Se debe definir el Macroproceso general en la parte superior y estructurar la tabla en dos niveles: `Proceso` (para agrupar las categorías principales de negocio) y `Subproceso` (para listar los flujos específicos).
3. **Estructura de Tablas sin Encabezado Genérico (Fix de Google Docs):** No incluir filas con etiquetas genéricas de cabecera como `Etiqueta | Dato` para evitar que la importación en Google Docs dibuje filas vacías o con texto de relleno. La primera fila útil debe ser la cabecera real de la tabla.
4. **Compatibilidad con Google Apps Script:** Las cabeceras `Proceso` y `Subproceso` serán automáticamente identificadas por el script de Google Docs para recibir fondo Cian y texto Blanco Negrita, manteniendo el resto de las celdas con el diseño de datos estándar.

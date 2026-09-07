# Inventario de Procesos

**Macroproceso:** [Título del Macroproceso]

| Proceso | Subproceso |
| :--- | :--- |
| **[Proceso 1]** | [Subproceso 1.1] |
| | [Subproceso 1.2] |
| | [Subproceso 1.3] |
| | [Subproceso 1.4] |
| **[Proceso 2]** | [Subproceso 2.1] |
| | [Subproceso 2.2] |
| | [Subproceso 2.3] |

---

## Reglas o Guidelines

1. **Estructura Consolidada:** El Inventario de Procesos debe recopilar de manera estructurada y exhaustiva todos los procesos y subprocesos identificados y formalizados en las fichas de proceso contenidas en `docs/specs/procesos/`.
2. **Jerarquía Clara:** Se debe definir el Macroproceso general en la parte superior y estructurar la tabla en dos columnas: `Proceso` (para agrupar las categorías principales de negocio) y `Subproceso` (para listar los flujos específicos).
3. **Estructura de Tablas sin Encabezado Genérico (Fix de Google Docs):** No incluir filas con etiquetas genéricas de cabecera como `Etiqueta | Dato` para evitar que la importación en Google Docs dibuje filas vacías o con texto de relleno. La primera fila útil debe ser la cabecera real de la tabla.
4. **Compatibilidad con Google Apps Script:** Las cabeceras `Proceso` y `Subproceso` serán automáticamente identificadas por el script de Google Docs para recibir fondo Cian y texto Blanco Negrita, manteniendo el resto de las celdas con el diseño de datos estándar.
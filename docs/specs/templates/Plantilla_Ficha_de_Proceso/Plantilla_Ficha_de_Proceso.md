# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** [Nombre de la Organización]
**Tipo de Formato:** [Tipo de Formato]
**Título del Documento:** [Título del Documento]
**Clave del Documento:** [Clave del Documento]
**Revisión (No. Rev):** [No. Rev]

---

## Información del Proceso
* **Nombre del Proceso:** [Nombre del Proceso]
* **Clave del Proceso:** [Clave del Proceso]
* **Nivel del Proceso:** [Nivel]
* **Responsable:** [Cargo del Responsable]
* **Objetivo del Proceso:** [Objetivo del Proceso]

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| [Proveedor 1] | [Entrada 1] | 1. [Actividad del Proceso 1] | [Salida 1] | [Cliente 1] |
| [Proveedor 2] | [Entrada 2] | 2. [Actividad del Proceso 2] | [Salida 2] | [Cliente 2] |
| [Proveedor 3] | [Entrada 3] | 3. [Actividad del Proceso 3] | [Salida 3] | [Cliente 3] |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: [Nombre del Indicador 1]
* **Fórmula de Cálculo:** [Fórmula de Cálculo 1]
* **Unidad de Medida:** [Unidad de Medida 1]
* **Frecuencia del Cálculo:** [Frecuencia 1]
* **Responsable del Cálculo:** [Responsable del Cálculo 1]
* **Origen de los Datos:** [Origen de los Datos 1]

### Indicador 2: [Nombre del Indicador 2]
* **Fórmula de Cálculo:** [Fórmula de Cálculo 2]
* **Unidad de Medida:** [Unidad de Medida 2]
* **Frecuencia del Cálculo:** [Frecuencia 2]
* **Responsable del Cálculo:** [Responsable del Cálculo 2]
* **Origen de los Datos:** [Origen de los Datos 2]

---

## Reglas o Guidelines

1. **Normalización de Tareas (Infinitivos):** Todas las actividades operativas dentro de la columna de Proceso (Actividad) del SIPOC deben iniciar estrictamente con verbos en infinitivo (ej. "Ingresar", "Seleccionar", "Validar", "Actualizar", "Registrar").
2. **Roles Válidos y Actores:** Los actores y responsables definidos en el SIPOC y metadatos del proceso deben corresponder a roles de negocio estructurados dentro de la organización (ej. "Gestor de Efectivo", "Analista de Ventas / Contable").
3. **Estructura de Tablas sin Encabezado Genérico (Fix de Google Docs):** Para evitar que al importar el archivo Markdown a Google Docs se genere una fila visible redundante e innecesaria con las palabras `Etiqueta | Dato`, **no** se debe incluir esa cabecera en el Markdown en las tablas de Información del Proceso e Indicadores. La primera fila de datos reales debe ser la que inicie la tabla Markdown actuando como cabecera sintáctica.
4. **Compatibilidad con Google Apps Script (Formateo Automático):** Las tablas en Google Docs son formateadas mediante Apps Script en base al contenido de las celdas:
   * **Celdas con Fondo Cian y Texto Blanco/Centrado:** Se aplica de manera automática a celdas cuyo texto termine en `:` (dos puntos), o que coincida exactamente con `CLAVE`, `REVISION`, `REVISIÓN`, `Organizacion`, `Organización`, `Tipo de Formato`, `Titulo del Documento`, `Título del Documento`, `Proveedores`, `Entradas`, `Proceso`, `Proceso (Actividad)`, `Salidas` o `Clientes`.
   * **Celdas con Fondo Blanco y Texto Negro/Izquierda:** Se aplica a las celdas que contienen datos generales y que no cumplen con los criterios anteriores.
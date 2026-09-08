# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** [Nombre de la Organización]
* **Formato de Operación:** FR-MC-02
* **Revisión:** 00
* **Clave del Proceso:** [Clave del proceso]
* **Elaboró:** [Nombre de quien elabora]
* **Fecha de Elaboración:** [Fecha de elaboración]
* **Autorizó AS IS:** [Nombre de quien autoriza]
* **Observaciones:** [Ingresar observaciones]

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada debe iniciar obligatoriamente con un verbo en infinitivo y mapear de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| [Describa la actividad 1] | [Describa el peligro 1] | [Describa el riesgo 1] (Crítico) | [Describa el control 1] | Preventivo / Manual |
| [Describa la actividad 2] | [Describa el peligro 2] | [Describa el riesgo 2] | [Describa el control 2] | Detectivo / Automático |
| [Describa la actividad 3] | [Describa el peligro 3] | [Describa el riesgo 3] | [Describa el control 3] | Correctivo / Manual |

---

## Reglas o Guidelines

1. **Alineación de Actividades con SIPOC:** Las actividades analizadas en la primera columna de la tabla de Evaluación de Riesgos deben corresponder directamente a los pasos operativos críticos documentados en la Ficha de Proceso correspondiente. Deben iniciar estrictamente con verbos en infinitivo.
2. **Clasificación de Controles:** Los controles deben clasificarse de forma clara por su tipo (Preventivo, Detectivo, Mitigante) y su modalidad (Manual o Automático), asegurando un balance en la mitigación de riesgos críticos.
3. **Estructura de Tablas sin Encabezado Genérico (Fix de Google Docs):** La tabla de Control Documental no debe incluir filas con etiquetas genéricas de cabecera como `Etiqueta | Dato` para evitar que Google Docs importe una fila visible vacía o incorrecta. La primera fila de datos reales (ej. `Clave del Proceso`) debe actuar directamente como la cabecera en el Markdown.
4. **Compatibilidad con Google Apps Script:** Las cabeceras de columna específicas como `Actividad`, `Peligro`, `Riesgo`, `Control` y `Tipo de Control` recibirán de forma automática un fondo Cian y texto Blanco Negrita mediante la ejecución del script de Google Docs. Las celdas de descripción general se mantendrán con fondo Blanco y texto Negro.

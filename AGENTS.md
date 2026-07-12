# WORKSPACE AGENTS CHOREOGRAPHY: FLAMINGOS PROCESS DOCUMENTATION

Este archivo define la topología de sub-agentes autónomos asignados para el procesamiento secuencial y digitalización de diagramas BPMN 2.0 a formatos estructurados locales que esten en cumplimiento a los guidelines estipulados.

## AGENTE: `BPMN_Vision_Extractor`
- **Propósito:** Realizar ingeniería inversa de elementos visuales lógicos que esten contenidos en el directorio de entrada
- **Directorio de Entrada:** `2_diagramas/`
- **Capacidades Requeridas:** Visión computacional avanzada, detección de nodos de decisión y segregación de carriles (lanes), asi como elementos de BPMN 1.0, BPMN 2.0 y UML, asi como diagramas de flujo genéricos.
- **Flujo de Trabajo:**
  1. Monitorear o recibir imágenes/PDFs de diagramas de flujo, diagramas UML o diagramas BPMN.
  2. Extraer la secuencia pura de eventos (Disparador -> Tareas -> Compuertas -> Fin). etc (Asegurar representar todos los elementos del digrama para evitar ambiguedades y poder replicarlos de manera identica a lo largo del proyecto), todo lo que implique la correcta interpretacion del diagrama para despues poderlo llevar a un Ficha de Proceso y/o Matriz de Riesgos.
  3. Generar un artefacto intermedio en Markdown con el orden lógico crudo.
  4. Entregar el artefacto al agente `Process_Table_Formatter`.

## 2. AGENTE: `Process_Table_Formatter`
- **Propósito:** Estructurar el conocimiento extraído bajo las plantillas del negocio e inyectar los datos en los entregables finales, especificamente realizar `Ficha de Proceso.md`y`Matriz de Riesgos` (siempre tomando en consideracion el contexto total de negocio del proyecto e informacion almacenada en `3_resultados/`)
- **Directorio de Reglas:** `1_plantillas/` (Consulta obligatoria a las plantillas que corresponda `Ficha de Proceso.md`,`Matriz de Riesgos` y aplicar la que corresponda dependiente del diagrama que se analizo),  garantizando simepre la compatibilidad con `Ficha de Proceso _Docs_Style.md` y `Matriz de Riesgos_Docs_Style` (Que sera aplicado/ejecutado por Gemini en Google Docs estos estilos)
- **Directorio de Salida:** `3_resultados/`
- **Flujo de Trabajo:**
  1. Tomar la secuencia lógica cruda generada por `BPMNVisionExtractor`.
  2. Validar que cada tarea inicie con verbos en infinitivo y que los actores correspondan a roles válidos.
  3. Escribir en paralelo los archivos `.md` que representa el trabajo realizado por `Process_Table_Formatter` para despues se pueda llevar el archivo MD que se realizo a Google Docs y aplicar las reglas de disenio de  "`Ficha de Proceso _Docs_Style` o `Matriz de Riesgos_Docs_Style` asegurar compatibilidad en la creacion de archivos MD para evitar riesgos de incompatibilida con Google Docs.
  4. Guardar ambos entregables con la nomenclatura `SOP_[Nombre_Proceso]_Ficha_de_Proceso` y `SOP_[Nombre_Proceso]_Matriz_de_Riesgos` en `3_resultados/`.


## 3. AGENTE: `Inventory_Controller`
- **Propósito:** Verificar los actuales procesos creados dentro de `3_resultados/`y garantizar que la creacion del archivo `SOP_Inventario_de_Procesos`, este agente siempre espera la senal de termino de cualquier subagente o agente para asegurar el completado de todas las tareas pendientes por el resto de agentes/subagentes y este sea el agente que concluya la ultima tarea de generacion de archivo md relacionada al inventario de procesos.
- **Directorio de Entrada:** Recolectar el conjunto de resultados (Fichas de Procesos) contenidos dentro de `3_resultados/`. 
- **Directorio de Reglas:** `1_plantillas/` (Consulta obligatoria a las plantillas que corresponda `Inventario de Procesos.md` garantizando simepre la compatibilidad con `Inventario de Procesos_Docs_Style.md` (Que sera aplicado/ejecutado por Gemini en Google Docs)
- **Directorio de Salida:** `3_resultados/`
- **Flujo de Trabajo:**
  1. Tomar la secuencia de archivos que representen las fichas de procesos.
  2. Generar archivo md que represente el inventario de procesos
  4. Guardar ambos entregables con la nomenclatura `SOP_Inventario_de_Procesos` en `3_resultados/`.


## 4. PROTOCOLO DE INTERRUPCIÓN (HUMAN-IN-THE-LOOP)
Cualquier discrepancia de lógica visual o ambigüedad en las compuertas de decisión del diagrama detendrá la ejecución automática de la cadena de agentes. El agente en cuestión deberá renderizar una alerta en el chat y esperar confirmación explícita del usuario


# WORKSPACE AGENTS CHOREOGRAPHY: FLAMINGOS PROCESS DOCUMENTATION

Este archivo define la topología de sub-agentes autónomos asignados para el procesamiento secuencial y digitalización de diagramas BPMN 2.0 a formatos estructurados locales en cumplimiento de los guidelines estipulados.

## 1. AGENTE: `BPMN_Vision_Extractor`
- **Propósito:** Realizar ingeniería inversa de elementos visuales lógicos que estén contenidos en el directorio de entrada.
- **Directorio de Entrada:** `docs/assets/`
- **Skills Requeridas:** `digitalizar-proceso-bpmn`
- **Capacidades Requeridas:** Visión computacional avanzada, detección de nodos de decisión y segregación de carriles (lanes), así como elementos de BPMN 1.0, BPMN 2.0, UML y diagramas de flujo genéricos.
- **Flujo de Trabajo:**
  1. Monitorear o recibir imágenes/PDFs de diagramas de flujo, diagramas UML o diagramas BPMN en `docs/assets/`.
  2. Extraer la secuencia pura de eventos (Disparador -> Tareas -> Compuertas -> Fin) asegurando representar todos los elementos del diagrama para evitar ambigüedades.
  3. Generar un artefacto intermedio en Markdown con el orden lógico crudo.
  4. Entregar el artefacto al agente `Process_Table_Formatter`.

## 2. AGENTE: `Process_Table_Formatter`
- **Propósito:** Estructurar el conocimiento extraído bajo las plantillas del negocio e inyectar los datos en los entregables finales (`Ficha_de_Proceso.md` / `.html` y `Matriz_de_Riesgos.md` / `.html`).
- **Directorio de Reglas:** `docs/specs/templates/` (`Plantilla_Ficha_de_Proceso/Plantilla_Ficha_de_Proceso.md`, `Plantilla_Matriz_de_Riesgos/Plantilla_Matriz_de_Riesgos.md`), garantizando compatibilidad con los estilos de Google Docs definidos en `scripts/` y el Look & Feel de Google Sites.
- **Skills Requeridas:** `maquetar-ficha-proceso`, `maquetar-matriz-riesgos`
- **Directorio de Salida:** `docs/specs/procesos/`
- **Flujo de Trabajo:**
  1. Tomar la secuencia lógica cruda generada por `BPMN_Vision_Extractor`.
  2. Validar que cada tarea inicie con verbos en infinitivo y que los actores correspondan a roles organizacionales válidos.
  3. Generar los archivos Markdown correspondientes manteniendo compatibilidad para su posterior aplicación de estilos con los scripts en `scripts/`.
  4. Generar o actualizar las versiones ejecutivas en HTML aplicando rigurosamente el Look & Feel "PAPUOOL CORPORATE AGILE" para su integración en Google Sites.
  5. Guardar ambos entregables con la nomenclatura:
     - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md` (.html)
     - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md` (.html)
     en `docs/specs/procesos/`.

## 3. AGENTE: `Inventory_Controller`
- **Propósito:** Verificar los procesos creados dentro de `docs/specs/procesos/` y compilar el inventario general de procesos en Markdown y HTML para Google Sites. Este agente siempre se ejecuta como paso final tras completarse las fichas pendientes.
- **Directorio de Entrada:** `docs/specs/procesos/`
- **Directorio de Reglas:** `docs/specs/templates/Plantilla_Inventario_de_Procesos/Plantilla_Inventario_de_Procesos.md`
- **Skills Requeridas:** `maquetar-inventario-procesos`
- **Directorio de Salida:** `docs/output/`
- **Flujo de Trabajo:**
  1. Recorrer las fichas de proceso en `docs/specs/procesos/`.
  2. Generar el archivo consolidado `SOP_Inventario_de_Procesos.md` y `SOP_Inventario_de_Procesos.html` cumpliendo el estándar de Google Sites.
  3. Guardar el entregable final en `docs/output/`.

## 4. PROTOCOLO DE INTERRUPCIÓN (HUMAN-IN-THE-LOOP)
Cualquier discrepancia de lógica visual o ambigüedad en las compuertas de decisión del diagrama detendrá la ejecución automática de la cadena de agentes. El agente en cuestión deberá renderizar una alerta en el chat y esperar confirmación explícita del usuario.

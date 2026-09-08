# WORKSPACE AGENTS CHOREOGRAPHY: FLAMINGOS PROCESS DOCUMENTATION

Este archivo define la topología de sub-agentes autónomos asignados para el procesamiento secuencial, ingeniería inversa y digitalización de diagramas visuales (BPMN 2.0, UML, flujos, mapas de procesos y matrices de riesgo) a formatos estructurados duales (Markdown + HTML) en cumplimiento de los guidelines corporativos.

---

## 1. AGENTE: `BPMN_Vision_Extractor`
- **Propósito:** Realizar ingeniería inversa de los elementos visuales de entrada contenidos en `docs/assets/` (diagramas BPMN/UML de procesos, mapas o inventarios visuales de procesos, y matrices o mapas de riesgos).
- **Directorio de Entrada:** `docs/assets/`
- **Skills Requeridas:** `digitalizar-proceso-bpmn`
- **Capacidades Requeridas:** Visión computacional avanzada, clasificación del tipo de diagrama, detección de nodos de decisión, compuertas lógicas, segregación de carriles (lanes), relaciones jerárquicas y clasificación de riesgos.
- **Flujo de Trabajo:**
  1. Identificar la naturaleza del archivo en `docs/assets/` (Diagrama de Proceso, Mapa/Inventario de Procesos, o Matriz de Riesgos).
  2. Extraer la secuencia y relaciones lógicas crudas (Disparador -> Tareas -> Compuertas -> Fin / Jerarquías / Riesgos-Controles).
  3. Generar un artefacto intermedio en Markdown con el orden lógico sin ambigüedades.
  4. Entregar el artefacto al agente formateador correspondiente (`Process_Table_Formatter` o `Inventory_Controller`).

---

## 2. AGENTE: `Process_Table_Formatter`
- **Propósito:** Estructurar el conocimiento extraído bajo las plantillas maestras e inyectar los datos en los entregables finales inseparables (`.md` y `.html`) para Fichas de Proceso y Matrices de Riesgos.
- **Directorio de Reglas:** `docs/specs/templates/` (`Plantilla_Ficha_de_Proceso/`, `Plantilla_Matriz_de_Riesgos/`), garantizando compatibilidad con los estilos de Google Docs definidos en `scripts/` y el Look & Feel de Google Sites.
- **Skills Requeridas:** `maquetar-ficha-proceso`, `maquetar-matriz-riesgos`
- **Directorio de Salida:** `docs/output/`
- **Flujo de Trabajo:**
  1. Tomar la secuencia lógica generada por `BPMN_Vision_Extractor`.
  2. Validar que cada actividad inicie obligatoriamente con verbos en infinitivo (*Verificar*, *Calcular*, *Aprobar*, etc.) y que los responsables correspondan a roles organizacionales válidos.
  3. Generar la Ficha Técnica de Proceso en formato dual:
     - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.md` (Modelo de datos compatible con Google Docs)
     - `SOP_[Nombre_Proceso]_Ficha_de_Proceso.html` (Vista ejecutiva para Google Sites vía `maquetar-ficha-proceso`)
  4. Generar la Matriz de Riesgos Operativos (AS IS) en formato dual:
     - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.md` (Modelo de datos)
     - `SOP_[Nombre_Proceso]_Matriz_de_Riesgos.html` (Vista ejecutiva con badges vía `maquetar-matriz-riesgos`)
  5. Guardar ambos pares directamente en `docs/output/`.

---

## 3. AGENTE: `Inventory_Controller`
- **Propósito:** Compilar y mantener el Inventario General de Procesos (Nivel 0 y 1) integrando todos los procesos existentes en `docs/output/`, o digitalizar directamente mapas e inventarios provenientes de `docs/assets/`.
- **Directorio de Entrada:** `docs/output/` y/o `docs/assets/`
- **Directorio de Reglas:** `docs/specs/templates/Plantilla_Inventario_de_Procesos/`
- **Skills Requeridas:** `maquetar-inventario-procesos`
- **Directorio de Salida:** `docs/output/`
- **Flujo de Trabajo:**
  1. Recorrer o extraer la matriz consolidada de procesos (Macroprocesos, Procesos Padre, Subprocesos, IDs, Responsables y Enlaces) presentes en `docs/output/`.
  2. Generar obligatoriamente la entrega en formato dual:
     - `SOP_Inventario_de_Procesos.md` (Modelo consolidado)
     - `SOP_Inventario_de_Procesos.html` (Vista interactiva con buscador en vivo para Google Sites vía `maquetar-inventario-procesos`)
  3. Guardar el entregable consolidado en `docs/output/`.

---

## 4. PROTOCOLO DE INTERRUPCIÓN (HUMAN-IN-THE-LOOP)
Cualquier discrepancia de lógica visual, ilegibilidad en el texto del diagrama o ambigüedad en las compuertas de decisión detendrá inmediatamente la ejecución automática. El agente activo renderizará una alerta estructurada en el chat y esperará confirmación explícita del usuario antes de proseguir.

# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-FIN-002
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 08/09/2026
* **Autorizó AS IS:** Gerente de Operaciones y Finanzas
* **Observaciones:** Levantamiento inicial AS IS derivado del diagrama de cancelación manual de lotes. Enfatiza el control de devoluciones indebidas, conciliación de remanentes positivos y liberación transparente del inventario.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Seleccionar lote en estatus "Vendido" o "En Financiamiento" | Selección errónea de lote homónimo o con proceso de escrituración ya iniciado | Cancelación indebida de un lote al corriente o con derechos reales consolidados (Crítico) | Verificación de identificador único catastral y confirmación en dos pasos antes de abrir el módulo | Preventivo / Manual |
| Ingresar monto a devolver o porcentaje de devolución | Captura de un monto superior a los fondos efectivamente recaudados del cliente | Pérdida financiera directa por dispersión de fondos inexistentes o desfalco (Crítico) | Bloqueo sistémico paramétrico inquebrantable (`Monto a Devolver <= Cantidad Total Ingresada`) con alerta de error | Preventivo / Automático |
| Asentar egreso contable y generar remanente positivo | Omisión en el registro contable de la penalización o clasificación errónea del remanente | Distorsión del resultado fiscal y financiero de la inmobiliaria por ingresos no reconocidos (Alto) | Generación automática en base de datos de la póliza de remanente positivo por la diferencia aritmética | Preventivo / Automático |
| Desvincular al cliente y cancelar contrato | Mantener activos derechos del cliente en CRM o plataforma de cobranza tras rescisión | Reclamaciones improcedentes, intentos de cobro indebidos a clientes cancelados o fuga de datos (Medio) | Desvinculación automática en cascada de contratos, estados de cuenta y accesos al portal | Correctivo / Automático |
| Actualizar estatus del lote a "Disponible" | Demora en la actualización del catálogo o bloqueo residual en el mapa interactivo | Pérdida de oportunidad comercial de reventa del lote recuperado (Medio) | Cambio de estatus inmediato y sincronizado en el catálogo comercial tras confirmación de la baja | Detectivo / Automático |

---

## Reglas o Guidelines

1. **Alineación con el SIPOC:** Todas las actividades coinciden con las tareas operativas de `SOP-FIN-02`.
2. **Candados Aritméticos:** El sistema prohíbe de forma estricta cualquier egreso que supere el capital histórico recaudado.
3. **Compatibilidad con Google Apps Script:** Documento estructurado para aplicación de estilos con `Matriz_de_Riesgos_Style.js`.

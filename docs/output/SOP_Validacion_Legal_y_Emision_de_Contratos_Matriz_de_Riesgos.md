# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-LEG-001
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 07/09/2026
* **Autorizó AS IS:** Gerente de Operaciones y Finanzas
* **Observaciones:** Levantamiento inicial AS IS derivado del diagrama de validación legal y emisión de contratos. Enfatiza la mitigación de riesgos de suplantación de identidad, certeza jurídica en cláusulas contractuales y prevención de doble venta en inventario.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Recolectar y enviar documentos de identidad del cliente | Uso de canales no seguros (chats personales) o recepción de documentos incompletos e ilegibles | Vulneración de datos confidenciales (Ley de Protección de Datos) y retrasos críticos en dictamen (Alto) | Carga obligatoria en repositorio digital seguro en App Web bajo checklist estandarizado de admisión | Preventivo / Manual |
| Auditar veracidad, vigencia y legibilidad documental | Presentación de identificaciones vencidas, documentos alterados o suplantación de identidad | Nulidad del contrato de compraventa, controversias legales y pérdidas patrimoniales (Crítico) | Verificación formal en listas nominales oficiales (INE/SAT) y auditoría de firmas por el Área Legal | Preventivo / Manual |
| Generar contrato de compraventa y anexos paramétricos | Modificación no autorizada de cláusulas, error en montos pactados o lote incorrecto | Contingencias legales por vicios del consentimiento y afectación financiera al negocio (Crítico) | Generación automatizada de contratos desde plantillas paramétricas bloqueadas ligadas al CRM | Preventivo / Automático |
| Realizar acto protocolario de firma de contrato | Firma por apoderado sin facultades vigentes o ausencia de ratificación de firmas del comprador | Inoponibilidad del contrato ante tribunales o autoridades del Registro Público (Crítico) | Verificación de poderes notariales vigentes previa a la firma y presencia obligatoria de testigos | Detectivo / Manual |
| Bloquear lote y actualizar a "Venta Financiada" en App | Demora u omisión en la formalización digital del contrato en la plataforma inmobiliaria | Riesgo de doble venta o sobreventa del mismo lote a un segundo comprador interesado (Crítico) | Bloqueo automático provisional del lote desde emisión de contrato y cierre definitivo tras firma | Preventivo / Automático |

---

## Reglas o Guidelines

1. **Alineación con el SIPOC:** Todas las actividades de la primera columna coinciden de forma estricta con las tareas de la Ficha Técnica de Proceso `SOP-LEG-01`.
2. **Candados Críticos de Inventario:** El control de bloqueo automático en sistema previene incidentes de sobreventa inmobiliaria que conllevan sanciones legales y comerciales severas.
3. **Compatibilidad con Google Apps Script:** Documento normalizado para su formato automático con `Matriz_de_Riesgos_Style.js`.

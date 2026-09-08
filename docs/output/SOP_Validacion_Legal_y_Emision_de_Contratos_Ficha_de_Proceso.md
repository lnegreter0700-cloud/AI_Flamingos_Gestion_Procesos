# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Validación Legal y Emisión de Contratos  
**Clave del Documento:** SOP-LEG-01  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Validación Legal y Emisión de Contratos
* **Clave del Proceso:** PROC-LEG-001
* **Nivel del Proceso:** Nivel 1
* **Responsable:** Coordinador Jurídico y de Regularización
* **Objetivo del Proceso:** Garantizar la debida diligencia en la recolección, auditoría y validación jurídica de la documentación de identidad de clientes y lotes, normando la confección, firma y resguardo físico de contratos legales de compraventa, así como su formalización digital en la App Web Flamingos con estatus de venta financiada y habilitación condicionada de comisiones.
* **Alcance del Proceso:**
  * **Inicio:** Cierre de la operación comercial y recolección de documentos de identidad del cliente por parte del Asesor de Ventas.
  * **Fin:** Firma de contrato, archivo físico en bóveda legal, carga digital de expediente en la App Web Flamingos y actualización del lote a estatus de "Venta Financiada".

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Cliente | Documentación de identidad oficial | 1. Recolectar documentos oficiales de identidad y comprobantes del cliente (INE, RFC, Domicilio) | Expediente preliminar del cliente | Asesor de Ventas |
| Asesor de Ventas | Expediente preliminar | 2. Enviar información y expediente al equipo legal y solicitar emisión formal de contrato | Solicitud formal de contrato | Área Legal |
| Área Legal | Solicitud formal de contrato | 3. Confirmar recepción formal de la solicitud y apertura de expediente | Folio de trámite legal asignado | Asesor de Ventas |
| Área Legal | Documentos del expediente | 4. Auditar veracidad, vigencia, legibilidad y consistencia de documentos compartidos | Dictamen de auditoría jurídica | Área Legal |
| Área Legal | Dictamen de auditoría | 5. Evaluar completitud y calidad documental mediante compuerta de decisión técnica | Estatus de aprobación documental | Área Legal / Asesor |
| Área Legal | Inconsistencias detectadas | 6. Notificar al asesor los errores y faltantes presentes en la documentación para subsanación | Requerimiento de subsanación | Asesor de Ventas |
| Área Legal | Expediente dictaminado y conforme | 7. Generar contrato de compraventa y anexos paramétricos con cláusulas aprobadas | Contrato legal en borrador oficial | Dirección Jurídica |
| Área Legal | Contrato aprobado | 8. Conciliar agenda y notificar al cliente y asesor la fecha y sede de firma de contrato | Convocatoria protocolaria de firma | Cliente / Asesor |
| Cliente / Apoderado Legal | Ejemplares impresos de contrato | 9. Realizar firma presencial o digital del contrato entre cliente y apoderado legal | Contrato legal firmado y rubricado | Área Legal |
| Área Legal | Contrato original firmado | 10. Archivar y resguardar expediente físico original en bóveda documental de custodia | Expediente bajo custodia en bóveda | Archivo General |
| Asesor / Analista de Ventas | Parámetros del lote | 11. Consultar inventario de lotes y confirmar disponibilidad en el módulo de listado | Lote seleccionado verificado | App Web Flamingos |
| Asesor / Analista de Ventas | Datos generales del cliente | 12. Dar de alta o localizar perfil del cliente en el Directorio de Clientes (CRM) | Perfil digital del cliente activo | App Web Flamingos |
| Asesor / Analista de Ventas | Contrato escaneado y anexos | 13. Cargar documentación oficial digital y contrato firmado en el módulo de ventas | Expediente digital completo en nube | App Web Flamingos |
| App Web Flamingos | Expediente cargado y validado | 14. Bloquear lote, actualizar a "Venta Financiada" y evaluar desbloqueo de comisión del Asesor | Lote bloqueado y comisión resuelta | Ventas / Finanzas |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Tiempo de Ciclo de Emisión de Contratos (TCEC)
* **Fórmula de Cálculo:** `Sumatoria de días hábiles desde recepción de expediente completo hasta contrato listo para firma / Total de contratos emitidos`
* **Unidad de Medida:** Días hábiles
* **Meta:** <= 3 días hábiles
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Coordinador Jurídico y de Regularización
* **Origen de los Datos:** Módulo de Gestión de Contratos y CRM

### Indicador 2: Índice de Expedientes Conformes a la Primera (ICEP)
* **Fórmula de Cálculo:** `(Total de expedientes aprobados sin requerimiento de subsanación / Total de expedientes recibidos por Legal) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** >= 90%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Coordinador de Ventas
* **Origen de los Datos:** Bitácora de Auditoría Documental Legal

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician con verbos en infinitivo (*Recolectar*, *Enviar*, *Confirmar*, *Auditar*, *Evaluar*, *Notificar*, *Generar*, *Conciliar*, *Realizar*, *Archivar*, *Consultar*, *Dar de alta*, *Cargar*, *Bloquear*).
2. **Roles Válidos Organizacionales:** *Asesor de Ventas / Regularizador*, *Área Legal*, *Coordinador Jurídico*, *App Web Flamingos*.
3. **Puntos Críticos de Control (TBC):**
   * Migración de canales informales (WhatsApp/Email) hacia el canal oficial seguro dentro de la App Web para resguardo de datos sensibles.
   * La comisión comercial se mantiene bloqueada hasta que legal certifique la firma del contrato y Finanzas confirme el enganche mínimo requerido.

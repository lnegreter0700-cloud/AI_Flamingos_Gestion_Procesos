# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Gestión y Dispersión de Comisiones  
**Clave del Documento:** SOP-FIN-03  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Gestión y Dispersión de Comisiones
* **Clave del Proceso:** PROC-FIN-003
* **Nivel del Proceso:** Nivel 1 (Operativo)
* **Responsable:** Analista de Ventas / Contable y Coordinador de Tesorería
* **Objetivo del Proceso:** Estandarizar el cálculo, control y dispersión escalonada de comisiones a los asesores comerciales y comisionistas, aplicando la restricción inquebrantable de cobertura previa de enganche recaudado en caja, la emisión automatizada de recibos oficiales en PDF y la carga obligatoria del recibo físico debidamente firmado por el beneficiario.
* **Alcance del Proceso:**
  * **Inicio:** Consulta de la tabla de avances de comisiones y verificación de pagos de enganche en la App Web Flamingos.
  * **Fin:** Dispersión del abono o liquidación total, carga obligatoria del recibo firmado en PDF, asiento de egreso contable y actualización del estatus definitivo a "Pagado" o "Pagado parcialmente".

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Analista Contable | Credenciales y rol asignado | 1. Ingresar a la interfaz de Gestión de Comisiones en la App Web Flamingos | Interfaz de comisiones activa | App Web Flamingos |
| App Web Flamingos | Base de datos comercial | 2. Visualizar tabla principal de avances priorizando estatus "Por pagar" y "Pagado parcialmente" | Listado priorizado en pantalla | Analista Contable |
| Analista Contable | Folio de comisión | 3. Consultar historial inalterable de pagos y abonos previos (fechas, recibos y saldo remanente) | Historial de amortización de comisión | Analista Contable |
| Analista Contable | Solicitud de dispersión | 4. Ingresar monto específico a abonar o liquidar a favor del asesor comercial | Importe de pago propuesto | App Web Flamingos |
| App Web Flamingos | Saldo de enganche en caja | 5. Validar que el monto a pagar sea menor o igual a la suma de parcialidades del enganche liquidadas | Validación de cobertura aprobada | App Web Flamingos |
| Analista Contable | Validación aprobada | 6. Confirmar operación de pago en la interfaz tras superar la validación de fondos | Instrucción de dispersión firme | App Web Flamingos |
| App Web Flamingos | Transacción confirmada | 7. Generar recibo de pago oficial en PDF con desglose exacto de retenciones y percepciones | Recibo oficial emitido | Asesor / Comisionista |
| Asesor Comercial | Recibo firmado y rubricado | 8. Cargar recibo físico debidamente firmado en el módulo documental obligatorio | Acuse digitalizado almacenado | Auditoría / Finanzas |
| App Web Flamingos | Acuse firmado en sistema | 9. Actualizar saldo acumulado y asignar estatus definitivo ("Pagado" al 100% o "Pagado parcialmente") | Estatus de comisión actualizado | Ventas / Comisiones |
| App Web Flamingos | Póliza de pago | 10. Asentar registro automático de egreso contable bajo el concepto "Pago de comisión a agente" | Póliza de egreso contable firme | Tesorería / Contabilidad |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Índice de Cumplimiento de Cobertura de Enganche (ICCE)
* **Fórmula de Cálculo:** `(Total de comisiones dispersadas con cobertura de enganche validada / Total de comisiones pagadas) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Semanal
* **Responsable del Cálculo:** Coordinador de Tesorería
* **Origen de los Datos:** Módulo de Comisiones y Pagos de Clientes (App Web)

### Indicador 2: Cumplimiento de Recibos Físicos Firmados (CRFF)
* **Fórmula de Cálculo:** `(Total de recibos físicos firmados cargados en <48 hrs / Total de recibos de comisión generados) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Quincenal
* **Responsable del Cálculo:** Analista de Ventas / Contable
* **Origen de los Datos:** Repositorio documental de la App Web Flamingos

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades inician con verbos en infinitivo (*Ingresar*, *Visualizar*, *Consultar*, *Validar*, *Confirmar*, *Generar*, *Cargar*, *Actualizar*, *Asentar*).
2. **Candado de Cobertura de Enganche (Regla Estricta):** El sistema bloquea de manera automática cualquier pago que exceda la suma de los enganches reales ya cobrados en caja al cliente.
3. **Carga Documental Obligatoria:** No se autoriza una segunda dispersión a un asesor si este adeuda la carga digital del recibo físico firmado de la dispersión previa.

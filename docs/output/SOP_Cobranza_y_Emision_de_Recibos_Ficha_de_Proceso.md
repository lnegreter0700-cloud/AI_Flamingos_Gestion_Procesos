# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Cobranza y Emisión de Recibos  
**Clave del Documento:** SOP-FIN-01  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Cobranza y Emisión de Recibos (Finanzas)
* **Clave del Proceso:** PROC-FIN-001
* **Nivel del Proceso:** Nivel 1
* **Responsable:** Coordinador de Cobranza y Tesorería
* **Objetivo del Proceso:** Estandarizar la recepción, validación contable y registro en sistema de los abonos de clientes (mensualidades, enganches y liquidaciones), garantizando la emisión automatizada de recibos oficiales en PDF, la actualización inmediata de la cartera y la liberación condicionada de comisiones de venta.
* **Alcance del Proceso:**
  * **Inicio:** Recepción del comprobante de depósito bancario o pago físico en efectivo entregado por el cliente.
  * **Fin:** Emisión y envío del recibo oficial en PDF al cliente, actualización del saldo del lote y desbloqueo o mantenimiento de bloqueo de comisiones al asesor.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Cliente | Comprobante de pago o efectivo | 1. Recibir comprobante de depósito o recepción física de efectivo del cliente | Notificación de pago recibido | Analista de Cobranza |
| Analista de Cobranza | Nombre o ID del cliente | 2. Buscar perfil del cliente en el Directorio de Clientes (CRM) | Expediente digital del cliente activo | App Web Flamingos |
| App Web Flamingos | Expediente digital | 3. Consultar radiografía de deuda y estado de cuenta del lote en tiempo real | Saldo exigible y detalle de cuotas | Analista de Cobranza |
| Analista de Cobranza | Selección de método | 4. Seleccionar método de pago en el catálogo paramétrico (Efectivo / Transferencia / Tarjeta) | Parámetro contable asignado | Módulo de Pagos |
| Analista de Cobranza | Datos del abono | 5. Registrar y validar abono con número de autorización bancaria y fecha valor | Registro de abono validado | App Web Flamingos |
| App Web Flamingos | Abono validado | 6. Actualizar saldo y aplicar amortización a la deuda del lote en base de datos | Cartera de cobranza actualizada | Tesorería / Contabilidad |
| App Web Flamingos | Saldo actualizado | 7. Generar Recibo Oficial en PDF automáticamente y habilitar para descarga | Recibo Oficial en PDF generado | Analista de Cobranza / Cliente |
| App Web Flamingos | Importe acumulado de enganche | 8. Evaluar condición de abono para dispersión de comisiones al Asesor | Estatus de comisión determinado | Módulo de Comisiones |
| Módulo de Comisiones | Regla de comisión aprobada/rechazada | 9. Desbloquear comisión para el Asesor o mantener comisión bloqueada en sistema | Comisión liberada o retenida en sistema | Coordinador de Ventas / Asesor |
| Analista de Cobranza | Recibo PDF generado | 10. Entregar o enviar recibo oficial en PDF al cliente vía WhatsApp corporativo y correo | Recibo entregado con acuse | Cliente |
| App Web Flamingos | Parámetro de fecha (Día 12) | 11. Ejecutar envío automatizado de recordatorio de pago a clientes el día 12 de cada mes | Notificación de cobranza preventiva | Cliente |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Tasa de Eficacia en Conciliación de Pagos (TECP)
* **Fórmula de Cálculo:** `(Total de pagos conciliados y registrados en <24 hrs / Total de pagos recibidos en el periodo) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** >= 98%
* **Frecuencia del Cálculo:** Semanal
* **Responsable del Cálculo:** Analista de Cobranza
* **Origen de los Datos:** Módulo de Gestión de Pagos de Clientes (App Web)

### Indicador 2: Tiempo Promedio de Entrega de Recibo Oficial (TPER)
* **Fórmula de Cálculo:** `Sumatoria de horas transcurridas desde validación de pago hasta entrega de PDF al cliente / Total de recibos emitidos`
* **Unidad de Medida:** Horas (hrs)
* **Meta:** < 4 horas
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Coordinador de Cobranza y Tesorería
* **Origen de los Datos:** Logs de auditoría de la App Web Flamingos y CRM

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician estrictamente con verbos en infinitivo (*Recibir*, *Buscar*, *Consultar*, *Seleccionar*, *Registrar*, *Actualizar*, *Generar*, *Evaluar*, *Desbloquear*, *Entregar*, *Ejecutar*).
2. **Roles Válidos de Negocio:** Todos los responsables corresponden a cargos funcionales definidos (*Analista de Cobranza*, *Coordinador de Cobranza y Tesorería*, *App Web Flamingos*).
3. **Puntos Críticos de Control (TBC):**
   * El sistema registra obligatoriamente el usuario que realizó la carga y validación del comprobante.
   * La liberación de comisiones al asesor está supeditada a la cobertura de las reglas de enganche mínimo configuradas paramétricamente.

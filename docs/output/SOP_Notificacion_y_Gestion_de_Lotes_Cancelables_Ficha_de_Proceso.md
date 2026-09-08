# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Notificación y Gestión de Lotes Cancelables  
**Clave del Documento:** SOP-COB-01  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Notificación y Gestión de Lotes Cancelables por Impago (Cobranza)
* **Clave del Proceso:** PROC-COB-001
* **Nivel del Proceso:** Nivel 1 (Subproceso)
* **Responsable:** Analista de Ventas / Contable
* **Objetivo del Proceso:** Monitorear, identificar y alertar sistemáticamente los lotes comercializados que superen el límite de mensualidades vencidas (meses de gracia), garantizando la gestión preventiva de cobranza mediante notificaciones oficiales por WhatsApp con plantilla homologada y registro inalterable en base de datos para sustento del deslinde o eventual rescisión contractual.
* **Alcance del Proceso:**
  * **Inicio:** Ejecución programada del JOB mensual de barrido de cartera O acceso del Analista de Ventas / Contable al submódulo en la App Web Flamingos.
  * **Fin:** Envío auditado de la notificación por WhatsApp con registro en base de datos O actualización de los parámetros de tolerancia y calendario por el Administrador.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| App Web Flamingos | Cron / Planificador de tareas mensual | 1. Ejecutar el barrido automático de cartera vencida según día parametrizado | Listado depurado de contratos que exceden el límite de gracia | Analista de Cobranza |
| App Web Flamingos | Base de datos transaccional de pagos | 2. Identificar clientes con morosidad máxima y disparar alerta global en dashboard | Banners y contadores críticos en interfaz de cobranza | Gerente de Finanzas |
| Cliente / Caja | Pago parcial o liquidación de adeudo | 3. Retirar automáticamente del catálogo de cancelables a clientes regularizados | Depuración en vivo de la lista de mora crítica | Analista de Ventas / Contable |
| Administrador del Sistema | Parámetros de política de cobranza | 4. Acceder al panel de configuración para definir meses de gracia y día del JOB | Parámetros institucionales de tolerancia editados | App Web Flamingos |
| Analista de Ventas / Contable | Necesidad de revisión operativa | 5. Ingresar al submódulo de "Lotes Cancelables" en la plataforma digital | Solicitud de consulta en panel de morosidad extrema | App Web Flamingos |
| App Web Flamingos | Solicitud de apertura de módulo | 6. Forzar la verificación dinámica en tiempo real contra los últimos pagos registrados | Tabla consolidada y recalculada al instante | Analista de Ventas / Contable |
| Analista de Ventas / Contable | Lote en estatus crítico desplegado | 7. Seleccionar el lote en mora y accionar la opción de envío de WhatsApp | Disparo del modal de confirmación de mensaje | App Web Flamingos |
| App Web Flamingos | Variables del contrato y adeudo | 8. Cargar el modal con la plantilla homologada de cobranza y variables de saldo | Texto legalmente aprobado listo para transmisión | Analista de Ventas / Contable |
| Analista de Ventas / Contable | Plantilla verificada en pantalla | 9. Confirmar la transmisión del mensaje canalizando a la interfaz de mensajería | Mensaje formal de advertencia entregado al cliente | Cliente Titular |
| App Web Flamingos | Transmisión confirmada del mensaje | 10. Registrar en base de datos la fecha, hora, usuario y número de aviso enviado | Historial inalterable de requerimientos de pago con validez de auditoría | Coordinación Legal / Cobranza |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Oportunidad de Notificación Preventiva (ONP)
* **Fórmula de Cálculo:** `(Lotes Notificados en < 48h / Total Lotes Cancelables) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** ≥ 95%
* **Frecuencia del Cálculo:** Quincenal
* **Responsable del Cálculo:** Analista de Cobranza
* **Origen de los Datos:** Módulo de Lotes Cancelables (App Web Flamingos)

### Indicador 2: Tasa de Recuperación por Alerta WhatsApp (TRAW)
* **Fórmula de Cálculo:** `(Lotes Regularizados tras Notificación / Total Notificados) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** ≥ 40%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Analista de Ventas / Contable
* **Origen de los Datos:** Base de Datos Transaccional Flamingos

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician estrictamente con verbos en infinitivo (*Ejecutar*, *Identificar*, *Retirar*, *Acceder*, *Ingresar*, *Forzar*, *Seleccionar*, *Cargar*, *Confirmar*, *Registrar*).
2. **Roles Válidos de Negocio:** Todos los responsables corresponden a cargos funcionales definidos (*Analista de Ventas / Contable*, *Administrador del Sistema*, *Analista de Cobranza*, *Gerente de Finanzas*, *App Web Flamingos*).
3. **Puntos Críticos de Control (TBC):**
   * El barrido automatizado del JOB mensual está supeditado a los parámetros de tolerancia configurados exclusivamente por el Administrador.
   * La consulta en tiempo real verifica la recepción síncrona de pagos antes de renderizar y disparar cualquier mensaje de advertencia.
   * El sistema genera un acuse inalterable con folio de aviso consecutivo para dar sustento ante una eventual rescisión legal del contrato.

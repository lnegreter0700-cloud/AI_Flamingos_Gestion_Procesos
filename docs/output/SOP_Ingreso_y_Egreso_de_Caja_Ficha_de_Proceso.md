# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Ingreso y Egreso de Caja Chica  
**Clave del Documento:** SOP-TES-02  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Ingreso y Egreso de Caja Chica (Tesorería)
* **Clave del Proceso:** PROC-TES-002
* **Nivel del Proceso:** Nivel 1 (Subproceso)
* **Responsable:** Analista de Ventas / Contable
* **Objetivo del Proceso:** Normar la captura, autorización, reversión y control de las operaciones de ingresos menores y gastos operativos de caja chica en la App Web Flamingos, asegurando la integridad del saldo disponible, la validación estricta de temporalidad contable mediante candados para fechas futuras y la inalterabilidad de los registros en los logs de auditoría.
* **Alcance del Proceso:**
  * **Inicio:** Acceso del Analista de Ventas / Contable al panel de gestión de caja en la App Web Flamingos.
  * **Fin:** Generación del folio de transacción con afectación de saldo y timestamp O eliminación física con reversión contable y registro en bitácora de auditoría.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Analista de Ventas / Contable | Credenciales de acceso a plataforma | 1. Ingresar al módulo de caja chica y tesorería en la App Web Flamingos | Sesión habilitada en panel de caja chica | Analista de Ventas / Contable |
| Analista de Ventas / Contable | Solicitud o necesidad operativa | 2. Seleccionar la opción requerida entre "Nueva Transacción" o "Eliminar Transacción" | Disparo de formulario de captura o modal de borrado | App Web Flamingos |
| Analista de Ventas / Contable | Folio de movimiento a cancelar | 3. Identificar la transacción errónea y confirmar la solicitud de eliminación | Solicitud de baja transaccional confirmada | App Web Flamingos |
| App Web Flamingos | Confirmación de baja confirmada | 4. Ejecutar el borrado profundo del registro revirtiendo el saldo en tiempo real | Saldo recalculado y bitácora de auditoría registrada | Coordinador de Tesorería |
| Analista de Ventas / Contable | Comprobantes y recibos de soporte | 5. Capturar los datos del movimiento (fecha, monto mayor a cero, tipo y origen de caja) | Formulario cumplimentado con adjuntos opcionales | App Web Flamingos |
| App Web Flamingos | Fecha ingresada en formulario | 6. Evaluar la temporalidad de la fecha contra la fecha actual del servidor | Determinación de fecha presente/pasada o fecha futura | Analista de Ventas / Contable |
| App Web Flamingos | Detección de fecha futura | 7. Solicitar contraseña de Super Administrador para desbloquear la transacción posfechada | Modal de validación de credenciales elevadas | Super Administrador |
| Super Administrador | Clave criptográfica de seguridad | 8. Validar las credenciales de autorización especial para permitir la captura extraordinaria | Autorización concedida o rechazo por clave inválida | App Web Flamingos |
| App Web Flamingos | Transacción validada y autorizada | 9. Persistir la transacción en base de datos emitiendo folio y timestamp inalterable | Balance de caja chica actualizado y comprobante digital | Coordinación de Contabilidad |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Cuadratura de Caja Chica (CCC)
* **Fórmula de Cálculo:** `(Saldo en Arqueo Físico / Saldo Registrado en Sistema) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Semanal / Quincenal
* **Responsable del Cálculo:** Coordinador de Tesorería
* **Origen de los Datos:** Módulo de Caja Chica (App Web Flamingos)

### Indicador 2: Índice de Transacciones Eliminadas (ITE)
* **Fórmula de Cálculo:** `(Transacciones Eliminadas / Total de Transacciones Creadas) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** < 1.0%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Auditor Interno
* **Origen de los Datos:** Logs de Auditoría y Bitácora de Base de Datos

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician estrictamente con verbos en infinitivo (*Ingresar*, *Seleccionar*, *Identificar*, *Ejecutar*, *Capturar*, *Evaluar*, *Solicitar*, *Validar*, *Persistir*).
2. **Roles Válidos de Negocio:** Todos los responsables corresponden a cargos funcionales definidos (*Analista de Ventas / Contable*, *Super Administrador*, *Coordinador de Tesorería*, *Auditor Interno*, *App Web Flamingos*).
3. **Puntos Críticos de Control (TBC):**
   * El sistema bloquea de origen cualquier intento de captura con montos iguales o menores a cero.
   * La temporalidad posfechada (fecha futura) exige obligatoriamente autorización criptográfica de Super Administrador.
   * La eliminación de registros revierte saldos automáticamente y emite alerta a Coordinación de Tesorería y Auditoría.

# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Cancelación Manual de Lotes (Finanzas / Operaciones)  
**Clave del Documento:** SOP-FIN-02  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Cancelación Manual de Lotes
* **Clave del Proceso:** PROC-FIN-002
* **Nivel del Proceso:** Nivel 1 (Operativo)
* **Responsable:** Analista de Ventas / Contable y Coordinador de Operaciones
* **Objetivo del Proceso:** Normar la cancelación manual de contratos y lotes inmobiliarios en estatus "Vendido" o "En Financiamiento", calculando con exactitud matemática el capital aportado, la retención aplicable, el remanente positivo en favor de la inmobiliaria y la devolución al cliente, garantizando la liberación inmediata del lote a estatus "Disponible" en el inventario.
* **Alcance del Proceso:**
  * **Inicio:** Solicitud formal de cancelación por rescisión contractual o impago acumulado del cliente.
  * **Fin:** Asiento de egreso contable por devolución, registro de remanente positivo a favor de la empresa, desvinculación del cliente y actualización del lote a estatus "Disponible" en la App Web Flamingos.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Cliente / Finanzas | Solicitud formal de rescisión o dictamen de impago | 1. Ingresar al submódulo de Cancelaciones en la App Web Flamingos | Interfaz de cancelación activa | Analista de Ventas / Contable |
| Analista de Ventas / Contable | Clave o identificador del lote | 2. Seleccionar lote en estatus "Vendido" o "En Financiamiento" | Expediente comercial del lote cargado | App Web Flamingos |
| App Web Flamingos | Base de datos de pagos | 3. Visualizar desglose de capital ingresado y cuotas amortizadas (modo solo lectura) | Historial financiero del lote desplegado | Analista de Ventas / Contable |
| Analista de Ventas / Contable | Política de retención contractual | 4. Ingresar "Monto a Devolver" o porcentaje de devolución pactado y justificación en comentarios | Parámetros de liquidación ingresados | App Web Flamingos |
| Analista de Ventas / Contable | Parámetros verificados | 5. Confirmar ejecución de cancelación tras validación con gerencia | Instrucción de cancelación ejecutada | App Web Flamingos |
| App Web Flamingos | Datos de la transacción | 6. Validar que el monto a devolver sea menor o igual al capital total efectivamente ingresado | Validación aritmética de fondos | App Web Flamingos |
| App Web Flamingos | Validación aprobada | 7. Asentar egreso contable en tesorería por concepto de devolución pactada al cliente | Asiento contable de egreso registrado | Contabilidad / Tesorería |
| App Web Flamingos | Diferencia aritmética calculada | 8. Generar ingreso automático por "Remanente Positivo" a favor de la inmobiliaria por penalización | Póliza de ingreso por remanente | Contabilidad |
| App Web Flamingos | Cancelación financiera firme | 9. Desvincular al cliente del expediente del lote y del contrato activo | Cliente dado de baja del lote | CRM / Ventas |
| App Web Flamingos | Lote desvinculado | 10. Actualizar estatus del lote a "Disponible" en el mapa maestro de inventario | Lote liberado para venta inmediata | Coordinación de Ventas / Asesores |
| Analista Contable / App | Expediente cancelado | 11. Notificar al cliente la rescisión formal y finiquito vía WhatsApp corporativo y correo | Notificación oficial de rescisión entregada | Cliente |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Tiempo de Procesamiento de Cancelación y Liberación (TPCL)
* **Fórmula de Cálculo:** `Sumatoria de horas desde solicitud de cancelación hasta lote en estatus "Disponible" / Total de cancelaciones ejecutadas`
* **Unidad de Medida:** Horas (hrs)
* **Meta:** <= 24 horas
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Analista de Ventas / Contable
* **Origen de los Datos:** Logs de auditoría de la App Web Flamingos

### Indicador 2: Precisión en Cálculo de Devolución y Retención (PCDR)
* **Fórmula de Cálculo:** `(Total de cancelaciones con montos y remanentes conciliados sin discrepancia / Total de cancelaciones procesadas) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Coordinador de Operaciones y Contabilidad
* **Origen de los Datos:** Pólizas contables de egreso y remanente vs. Estado de cuenta del lote

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas inician con verbos en infinitivo (*Ingresar*, *Seleccionar*, *Visualizar*, *Confirmar*, *Validar*, *Asentar*, *Generar*, *Desvincular*, *Actualizar*, *Notificar*).
2. **Candados de Seguridad (TBC):**
   * El sistema bloquea de manera automática cualquier intento de registrar un monto a devolver superior a la cantidad total efectivamente recaudada.
   * La penalización por rescisión se calcula automáticamente como "Remanente Positivo" integrándose a los ingresos no operativos de la empresa.
   * La notificación de cancelación se envía automáticamente con plantilla oficial por correo y WhatsApp con registro inalterable.

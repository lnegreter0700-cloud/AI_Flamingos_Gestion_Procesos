# Ficha de Proceso: Flujo de Comisiones

<!-- GOOGLE DOCS STYLE DIRECTIVES:
- Font: Arial, 10pts
- Primary Color (Labels): Dark Cyan (#0097A7) with White Text (#FFFFFF), Bold
- Background (Data): White (#FFFFFF) with Black Text (#000000)
- Table Borders: Black, solid, 1pt
-->

<div align="right">

| Organización | Flamingos |
| :--- | :--- |
| **Tipo de Formato** | Ficha de Proceso |
| **Título del Documento** | SOP_Flujo_de_Comisiones_Ficha_de_Proceso |
| **CLAVE** | **REVISIÓN** |
| SOP-FCOM-01 | 01 |

</div>

---

## Información del Proceso

| **Nombre del Proceso:** | Flujo de Comisiones | **Clave del Proceso:** | FCOM-01 |
| :--- | :--- | :--- | :--- |
| **Nivel del Proceso:** | Subproceso (Macroproceso: Gestión Comercial) | **Responsable:** | Analista de Ventas / Contable |
| **Objetivo:** | Gestionar de manera eficiente el pago de comisiones a los agentes de venta, asegurando que las sumas abonadas estén debidamente respaldadas por los enganches efectivamente cobrados y validadas mediante soportes documentales. | | |

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Analista de Ventas/Contable | Petición de acceso a UI | **Ingresar** a la Interfaz de Gestión de Comisiones | Interfaz de comisiones cargada | App Web Flamingos |
| App Web Flamingos | Estado de registros de comisiones | **Desplegar** Tabla Principal de Avances (priorizando estados 'Por pagar' y 'Pagado parcialmente') | Tabla principal visualizada | Analista de Ventas/Contable |
| Analista de Ventas/Contable | Registro seleccionado de la tabla | **Seleccionar** una acción en la UI (Historial o Abonar) | Opción elegida por el analista | App Web Flamingos |
| Analista de Ventas/Contable | Opción de Historial seleccionada | **Seleccionar** registro y presionar botón de Historial | Orden de consulta de historial | App Web Flamingos |
| App Web Flamingos | Orden de consulta de historial | **Desplegar** Historial de pagos y abonos parciales | Historial detallado e inalterable visible | Analista de Ventas/Contable |
| Analista de Ventas/Contable | Opción de abono seleccionada | **Seleccionar** "Abonar a Comisión" | Interfaz de captura de abono abierta | Analista de Ventas/Contable |
| Analista de Ventas/Contable | Interfaz de captura abierta | **Ingresar** el monto específico a pagar | Monto a pagar capturado | App Web Flamingos |
| App Web Flamingos | Monto capturado y registros de enganche | **Validar** si el monto es menor o igual al total del enganche liquidado (Límite de Liberación) | Estatus de la validación obtenido | App Web Flamingos |
| App Web Flamingos | Estatus de la validación: NO | **Bloquear** operación y **mostrar** alerta: "El monto supera lo captado por el cliente" | Operación interrumpida y alerta visualizada | Analista de Ventas/Contable |
| Analista de Ventas/Contable | Estatus de la validación: SÍ | **Confirmar** operación de pago | Confirmación del pago registrada | App Web Flamingos |
| App Web Flamingos | Confirmación registrada | **Generar** recibo de pago oficial en PDF | Archivo PDF del recibo creado | App Web Flamingos |
| App Web Flamingos | Recibo PDF creado | **Habilitar** UI de carga documental | Módulo de carga documental activo | Analista de Ventas/Contable |
| Analista de Ventas/Contable | Módulo de carga activo y recibo físico | **Cargar** recibo físico firmado (Carga obligatoria digitalizada) | Recibo físico digitalizado guardado | App Web Flamingos |
| App Web Flamingos | Recibo guardado | **Actualizar** saldo pendiente y acumulado | Saldos del registro modificados | App Web Flamingos |
| App Web Flamingos | Saldos modificados | **Validar** si la suma de abonos cubre el 100% de la comisión | Estatus de cobertura obtenido | App Web Flamingos |
| App Web Flamingos | Estatus de cobertura: SÍ | **Cambiar** estado definitivo a "Pagado" | Estado "Pagado" asignado | App Web Flamingos |
| App Web Flamingos | Estatus de cobertura: NO | **Cambiar** estado a "Pagado parcialmente" | Estado "Pagado parcialmente" asignado | App Web Flamingos |
| App Web Flamingos | Estado de la comisión actualizado | **Actualizar** subregistro histórico | Bitácora histórica actualizada | App Web Flamingos |
| App Web Flamingos | Bitácora actualizada | **Generar** registro automático de Egreso (Concepto: 'Pago de comisiones a agente') | Registro de egreso emitido | Analista de Ventas/Contable |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Oportunidad de Pago de Comisiones
| **Nombre:** | Oportunidad de Pago de Comisiones | **Fórmula de Cálculo:** | `(Total de Comisiones Pagadas a Tiempo / Total de Comisiones Devengadas) * 100` |
| :--- | :--- | :--- | :--- |
| **Unidad de Medida:** | Porcentaje (%) | **Responsable del Cálculo:** | Analista de Ventas / Contable |
| **Origen de los Datos:** | App Web Flamingos (Egresos y Fechas de Cobro) | **Frecuencia del Cálculo:** | Mensual |

### Indicador 2: Tasa de Cumplimiento de Carga Documental
| **Nombre:** | Tasa de Cumplimiento de Carga Documental | **Fórmula de Cálculo:** | `(Total de Recibos Físicos Cargados / Total de Egresos de Comisiones) * 100` |
| :--- | :--- | :--- | :--- |
| **Unidad de Medida:** | Porcentaje (%) | **Responsable del Cálculo:** | Coordinador de Auditoría Interna |
| **Origen de los Datos:** | App Web Flamingos (Carga Documental) | **Frecuencia del Cálculo:** | Semanal |

# Matriz de Riesgos: Flujo de Comisiones

<!-- GOOGLE DOCS STYLE DIRECTIVES:
- Font: Arial, 9 or 10pts (Landscape recommended)
- Colors: Dark Cyan (#0097A7) for labels (White Text #FFFFFF), White (#FFFFFF) for data (Black Text)
- Table Borders: Black, solid, 1pt
-->

<div align="right">

| Organización | Flamingos |
| :--- | :--- |
| **Formato de Operación** | FR-MC-02 |
| **Revisión** | 00 |

</div>

---

## Control Documental

| **Clave del Proceso:** | FCOM-01 | **Fecha de Elaboración:** | 2026-07-11 |
| :--- | :--- | :--- | :--- |
| **Elaboró:** | Arquitecto Híbrido de Procesos | **Autorizó AS IS:** | L. Negrete (Director de Finanzas) |
| **Observaciones:** | Esta matriz se enfoca en mitigar riesgos de sobrepago de comisiones, egresos sin sustento documental y falta de trazabilidad en el flujo de pagos a agentes de ventas. | | |

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| **Ingresar** el monto específico a pagar | Pago de comisión sin que el cliente haya cubierto el enganche correspondiente. | Salida de efectivo no respaldada por ingresos reales en caja (pérdida financiera). | Restricción estricta validada por el sistema que limita el monto a pagar al total del enganche liquidado al momento. | Preventivo / Automático |
| **Confirmar** operación de pago | Duplicidad en el registro o procesamiento del pago de la comisión. | Doble egreso de efectivo de la empresa para una misma venta. | El sistema deshabilita temporalmente el botón de confirmación de pago tras el primer clic y bloquea transacciones concurrentes sobre el registro. | Preventivo / Automático |
| **Cargar** recibo físico firmado | Omisión de la carga del documento digital firmado por el comisionista. | Falta de soporte legal-documental ante revisiones fiscales e internas. | Bloqueo de la actualización de saldo definitivo a "Pagado" en el sistema si no se ha adjuntado el archivo digital PDF correspondiente. | Detectivo / Automático |
| **Generar** registro automático de Egreso | Desfase temporal entre el pago real del abono y el registro contable en el subregistro histórico. | Inconsistencia entre estados de cuenta bancarios y registros contables auxiliares. | Generación automática e inmediata del egreso en el backend en el momento exacto en que se confirma el pago en la UI. | Correctivo / Automático |

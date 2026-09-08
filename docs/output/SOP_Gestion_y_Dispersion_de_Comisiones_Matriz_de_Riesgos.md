# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-FIN-003
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 08/09/2026
* **Autorizó AS IS:** Gerente de Operaciones y Finanzas
* **Observaciones:** Levantamiento inicial AS IS derivado del diagrama de comisiones. Contempla el candado de dispersión supeditado al enganche captado y la trazabilidad obligatoria de recibos firmados.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Ingresar monto específico de comisión a dispersar | Solicitud o captura de pagos que superan los ingresos reales por enganche del lote | Descapitalización y pago de comisiones no devengadas sobre contratos con riesgo de cancelación (Crítico) | Bloqueo automático inquebrantable en sistema (`Monto a Pagar <= Suma de Enganche Pagado`) con alerta | Preventivo / Automático |
| Confirmar operación de pago y generar recibo PDF | Generación de dispersión sin comprobante fiscal o soporte documental de retenciones | Contingencias fiscales ante autoridades hacendarias y falta de soporte de deducibilidad (Alto) | Emisión automatizada de recibo oficial en PDF con desglose de retenciones y percepciones | Preventivo / Automático |
| Cargar recibo físico firmado por el comisionista | Negativa, extravío o demora del comisionista en devolver el recibo firmado en papel | Falta de prueba jurídica de entrega de fondos ante demandas laborales o mercantiles (Crítico) | Condicionamiento del siguiente pago en sistema a la carga del recibo firmado anterior en <48 hrs | Detectivo / Manual |
| Actualizar saldo y asignar estatus de comisión | Error manual en el marcado de estatus de comisión ("Pagado" vs "Pagado parcialmente") | Duplicidad en el pago de saldos remanentes de comisión o inconformidad de agentes (Alto) | Cálculo algorítmico del saldo acumulado con cambio automático de estatus a "Pagado" al 100% | Preventivo / Automático |
| Asentar registro automático de egreso contable | Omisión o retraso en la integración del egreso en las cuentas bancarias de la empresa | Descuadre entre el flujo de caja operativo y el balance contable mensual (Medio) | Generación inmediata de póliza contable automática vinculada a la cuenta de comisiones | Preventivo / Automático |

---

## Reglas o Guidelines

1. **Alineación con el SIPOC:** Las actividades corresponden de forma biunívoca con `SOP-FIN-03`.
2. **Candado de Cobertura de Enganche:** La regla de validación matemática en la App Web elimina de raíz el riesgo de sobrepago de comisiones.
3. **Compatibilidad con Google Apps Script:** Preparado para su formateo automático con `Matriz_de_Riesgos_Style.js`.

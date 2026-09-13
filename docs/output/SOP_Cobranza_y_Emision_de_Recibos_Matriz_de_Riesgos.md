# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-FIN-001
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 07/09/2026
* **Autorizó AS IS:** Gerente de Operaciones y Finanzas
* **Observaciones:** Levantamiento inicial AS IS derivado del diagrama de cobranza y emisión de recibos. Se incorporan controles de auditoría por usuario y validación estricta de parcialización de enganche.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Recibir comprobante de depósito o pago en efectivo | Recepción de fichas de depósito apócrifas, transferencias retenidas o efectivo no validado | Fraude financiero y expedición de recibos sin respaldo de fondos en cuentas corporativas (Crítico) | Cotejo estricto en portal bancario en tiempo real de fecha valor y número de autorización previo al ingreso en sistema | Preventivo / Manual |
| Buscar y seleccionar perfil del cliente en el CRM | Homonimia de clientes o asignación cruzada de números de lote en cartera activa | Registro de amortización a favor de un tercero ajeno con afectación a saldos reales (Alto) | Validación obligatoria de ID de cliente y número de contrato desplegado en pantalla con confirmación visual | Detectivo / Automático |
| Registrar y validar abono en el módulo de pagos | Captura manual errónea de montos o duplicidad en la captura del mismo folio de transferencia | Descuadre contable de cartera, afectación al estado de cuenta e inconformidad de clientes (Alto) | Doble verificación manual (double check) del comprobante bancario para confirmar la coincidencia exacta del monto y folio de transferencia previo a su registro en sistema | Preventivo / Manual |
| Evaluar y desbloquear comisión para el Asesor | Liberación anticipada de comisiones sobre ventas con enganche incompleto o cheques no cobrados | Pérdida de capital por dispersión de comisiones no devengadas en contratos no formalizados (Crítico) | Bloqueo sistémico paramétrico de comisiones hasta comprobar saldo acumulado de enganche igual o mayor al porcentaje requerido | Preventivo / Automático |
| Entregar o enviar recibo oficial en PDF al cliente | Envío de comprobantes a teléfonos o correos no verificados o desvío de documentos oficiales | Vulneración de datos personales confidenciales y falta de validez jurídica del comprobante entregado (Medio) | Doble verificación manual (double check) de los datos de contacto (correo y WhatsApp) para confirmar que correspondan estrictamente a los titulares registrados en el CRM antes de enviar el recibo en PDF | Preventivo / Manual |

---

## Reglas o Guidelines

1. **Alineación de Actividades con SIPOC:** Las actividades analizadas en la primera columna corresponden con exactitud a los pasos operativos críticos documentados en la Ficha Técnica de Proceso `SOP-FIN-01`.
2. **Clasificación de Controles:** Los controles se distribuyen entre modalidades preventivas y detectivas, garantizando que los riesgos críticos cuenten con candados paramétricos en el software `App Web Flamingos`.
3. **Compatibilidad con Google Apps Script:** Las cabeceras y clasificaciones de control están preparadas para la aplicación de estilos automáticos mediante `Matriz_de_Riesgos_Style.js` en Google Docs.

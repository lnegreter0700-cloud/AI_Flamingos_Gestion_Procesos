# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-TES-001
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 08/09/2026
* **Autorizó AS IS:** Coordinador de Tesorería y Finanzas
* **Observaciones:** Levantamiento AS IS enfocado en el arqueo diario, validación de sumatorias en efectivo y mitigación de desfalcos o descuadres en bóveda.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Cotejar inventario físico vs digital de efectivo | Faltante físico de dinero en caja/bóveda por robo hormiga o extravío durante el turno | Faltante de dinero y daño patrimonial directo con descuadre contable en tesorería (Crítico) | Recuento físico obligatorio con doble firma y custodia bajo caja de seguridad con registro de acceso | Detectivo / Manual |
| Filtrar concepto y método de pago en sistema | Registro erróneo del método de pago como "Efectivo" cuando correspondió a transferencia | Distorsión en saldos de bóveda e inflado ficticio de dinero físico exigible en arqueo (Alto) | Validación cruzada con recibo provisional emitido y cotejo de cuenta receptora en App Web | Preventivo / Automático |
| Modificar estado de conciliación ante diferencias | Alteración indebida de estatus a "En Averiguación" sin sustento para encubrir faltantes | Pérdida de visibilidad gerencial de faltantes y ocultamiento de desfalcos internos (Alto) | Exigencia obligatoria de firma digital de acuse de auditoría y congelamiento del saldo observado | Preventivo / Automático |
| Exportar corte y listado de conciliación diaria | Omisión del arqueo diario por sobrecarga operativa acumulando saldos sin corte formal | Pérdida de deslinde de responsabilidad entre custodios de turno e imposibilidad de rastreo (Crítico) | Bloqueo automático del módulo en App Web al inicio de la jornada si el corte previo no está cerrado | Preventivo / Automático |

---

## Reglas o Guidelines

1. **Alineación de Actividades con SIPOC:** Las actividades analizadas en la primera columna corresponden con exactitud a los pasos operativos documentados en la Ficha Técnica de Proceso `SOP-TES-01`.
2. **Clasificación de Controles:** Los controles se distribuyen entre modalidades preventivas y detectivas, garantizando candados paramétricos en el software `App Web Flamingos`.
3. **Compatibilidad con Google Apps Script:** Las cabeceras y clasificaciones de control están preparadas para la aplicación de estilos automáticos mediante `Matriz_de_Riesgos_Style.js` en Google Docs.

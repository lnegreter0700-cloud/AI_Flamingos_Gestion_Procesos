# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-TES-002
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 08/09/2026
* **Autorizó AS IS:** Coordinador de Tesorería y Finanzas
* **Observaciones:** Levantamiento AS IS enfocado en el fondo fijo de caja chica, reversión de movimientos, control de fechas futuras y comprobación fiscal.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Ejecutar borrado profundo y reversión de saldo | Eliminación no justificada o maliciosa de movimientos para encubrir faltantes de efectivo | Alteración ficticia del balance de caja y daño patrimonial por desvío de recursos (Crítico) | Bitácora inalterable de auditoría en BD y reversión automática con alerta a Coordinador de Tesorería | Detectivo / Automático |
| Capturar datos del movimiento en formulario | Registro de montos iguales a cero o negativos por error de tipeo del operador | Distorsión en fórmulas de saldo y errores aritméticos en reportes contables (Medio) | Validación lógica estricta a nivel cliente y servidor bloqueando valores menores o iguales a cero | Preventivo / Automático |
| Evaluar temporalidad de fecha de operación | Registro de transacciones con fecha futura para anticipar gastos sin comprobante devengado | Inconsistencia temporal en cierres contables y vulneración de normas fiscales (Crítico) | Candado de seguridad que exige obligatoriamente credenciales activas de Super Administrador | Preventivo / Automático |
| Capturar y adjuntar comprobantes de soporte | Omisión de adjuntar facturas o tickets válidos que amparen el desembolso de efectivo | Gastos no deducibles, rechazo fiscal y potencial uso indebido del fondo fijo (Crítico) | Auditoría física de notas y comprobantes fiscales por Coordinador de Tesorería | Detectivo / Manual |

---

## Reglas o Guidelines

1. **Alineación de Actividades con SIPOC:** Las actividades analizadas en la primera columna corresponden con exactitud a los pasos operativos documentados en la Ficha Técnica de Proceso `SOP-TES-02`.
2. **Clasificación de Controles:** Los controles combinan validaciones algorítmicas en la `App Web Flamingos` con auditoría física de comprobantes fiscales.
3. **Compatibilidad con Google Apps Script:** Las cabeceras y clasificaciones de control están preparadas para la aplicación de estilos automáticos mediante `Matriz_de_Riesgos_Style.js` en Google Docs.

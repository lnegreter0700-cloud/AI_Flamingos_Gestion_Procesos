# Matriz de Riesgos y Controles Operativos (AS IS)

## Control Documental
* **Organización:** Grupo Flamingos
* **Formato de Operación:** FR-MC-02
* **Revisión:** 01
* **Clave del Proceso:** PROC-COB-001
* **Elaboró:** Especialista de Procesos
* **Fecha de Elaboración:** 08/09/2026
* **Autorizó AS IS:** Gerente de Finanzas y Cobranza
* **Observaciones:** Levantamiento AS IS enfocado en el barrido automático de cartera, parámetros de meses de gracia y prevención de controversias legales por notificaciones erróneas.

---

## Lineamiento de Mitigación y Auditoría AS IS
> Cada actividad evaluada inicia obligatoriamente con un verbo en infinitivo y mapea de forma inequívoca el peligro intrínseco, el riesgo financiero u operativo resultante, y la tipología del control de mitigación aplicado (Preventivo, Detectivo o Correctivo).

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| Ejecutar barrido automático mensual de cartera | Falla o caída en la ejecución del JOB mensual de servidor por timeout de base de datos | Retraso en la detección de clientes en mora crítica y acumulación de pasivos incobrables (Alto) | Alerta por excepción a soporte y revalidación dinámica forzada en tiempo real al abrir módulo | Preventivo / Automático |
| Confirmar transmisión de WhatsApp al titular | Envío de advertencia de rescisión a clientes con abonos recién efectuados no sincronizados | Conflicto comercial severo con el titular, daño reputacional y quejas ante instancias de defensa (Crítico) | Verificación dinámica síncrona en base de datos antes de renderizar la plantilla y enviar mensaje | Preventivo / Automático |
| Parametrizar meses de gracia y reglas de JOB | Modificación indiscriminada de meses de gracia o día del barrido sin autorización directiva | Distorsión masiva en la clasificación de cartera y retraso inducido de rescisiones legítimas (Alto) | Restricción de acceso exclusiva al rol de Administrador con log inalterable de auditoría | Preventivo / Automático |
| Registrar aviso y folio en base de datos | Cierre prematuro del navegador sin asentar en la base de datos el envío del mensaje de aviso | Carencia de evidencia documental cronológica ante controversias legales de rescisión de lote (Crítico) | Asentamiento síncrono en BD con número de aviso, usuario y timestamp previo a la apertura de chat | Preventivo / Automático |

---

## Reglas o Guidelines

1. **Alineación de Actividades con SIPOC:** Las actividades analizadas en la primera columna corresponden con exactitud a los pasos operativos documentados en la Ficha Técnica de Proceso `SOP-COB-01`.
2. **Clasificación de Controles:** Los controles se basan en validaciones síncronas de base de datos y control de accesos por roles administrativos en la `App Web Flamingos`.
3. **Compatibilidad con Google Apps Script:** Las cabeceras y clasificaciones de control están preparadas para la aplicación de estilos automáticos mediante `Matriz_de_Riesgos_Style.js` en Google Docs.

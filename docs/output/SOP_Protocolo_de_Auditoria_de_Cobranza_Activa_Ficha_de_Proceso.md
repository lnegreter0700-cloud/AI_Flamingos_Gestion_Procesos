# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Protocolo de Auditoría de Cobranza Activa  
**Clave del Documento:** SOP-COB-02  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Protocolo de Gestión y Auditoría de Cobranza Activa (Cobranza)
* **Clave del Proceso:** PROC-COB-002
* **Nivel del Proceso:** Nivel 1 (Subproceso)
* **Responsable:** Analista de Cobranza
* **Objetivo del Proceso:** Estandarizar y disciplinar el protocolo de cobranza preventiva y correctiva durante la ventana mensual obligatoria (días 20 al fin de mes), asegurando la integración irrefutable de la tríada de evidencias (Correo con BCC, WhatsApp con marcas de entrega y Registro de Llamada telefónica) reportadas en el canal institucional de Pumble, permitiendo el control de auditoría gerencial y el deslinde de responsabilidades operativas.
* **Alcance del Proceso:**
  * **Inicio:** Llegada de la ventana operativa obligatoria del día 20 de cada mes y descarga de estados de cuenta en PDF desde la App Web Flamingos.
  * **Fin:** Validación y cierre del ciclo mensual de cobranza por parte de Gerencia O aplicación de falta administrativa por expedientes con evidencia faltante.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Calendario Operativo | Día 20 del mes calendario | 1. Iniciar la ventana operativa mensual de cobranza activa (días 20 al 30/31) | Apertura formal del periodo de cobranza | Analista de Cobranza |
| App Web Flamingos | Base de deudores del periodo | 2. Descargar el reporte de deudores y los estados de cuenta individuales en formato PDF | Expedientes de cobranza digitalizados en PDF | Analista de Cobranza |
| Analista de Cobranza | Estados de cuenta y contactos | 3. Ejecutar un máximo de dos (2) toques de contacto por cliente para evitar hostigamiento | Intentos de localización y cobro canalizados | Cliente Titular |
| Analista de Cobranza | Cuenta de correo corporativo | 4. Enviar correo electrónico con PDF adjunto y copia oculta obligatoria (BCC) a gerencia | Evidencia A: Mensaje formal emitido y verificado | Gerente de Operaciones |
| Analista de Cobranza | WhatsApp Business corporativo | 5. Capturar pantalla del mensaje de cobro con confirmación de lectura o entrega | Evidencia B: Captura con doble palomita azul/gris | Analista de Cobranza |
| Analista de Cobranza | Telefonía corporativa | 6. Capturar registro de llamada telefónica con duración efectiva o constancia de buzón | Evidencia C: Captura con duración > 00:00 o intento | Analista de Cobranza |
| Analista de Cobranza | Tríada de evidencias (A, B y C) | 7. Consolidar el collage probatorio estructurado por cada lote y contrato asignado | Expediente gráfico probatorio unificado | Analista de Cobranza |
| Analista de Cobranza | Collage probatorio y datos del lote | 8. Publicar el reporte en el canal oficial de Pumble (`#auditoria-cobranza`) | Notificación institucional de gestión asentada | Gerente de Operaciones |
| Gerente de Operaciones | Publicaciones en Pumble y App Web | 9. Cotejar las evidencias reportadas contra la lista de lotes críticos en la App Web | Dictamen de completitud probatoria mensual | Analista de Cobranza |
| Gerente de Operaciones | Omisión de evidencia en lote crítico | 10. Aplicar sanción de falta administrativa al analista por incumplimiento del estándar | Acta administrativa y sanción laboral asentada | Recursos Humanos |
| Gerente de Operaciones | Evidencias 100% completas | 11. Aprobar el expediente y cerrar formalmente el ciclo mensual de cobranza activa | Acta de cierre de ciclo de auditoría de cobranza | Dirección General |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Cumplimiento de Evidencia Tripartita (CET)
* **Fórmula de Cálculo:** `(Expedientes con Tríada Completa / Total Lotes Asignados) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Gerente de Operaciones
* **Origen de los Datos:** Canal de Pumble y Logs de Auditoría

### Indicador 2: Efectividad de Contacto en Ventana (ECV)
* **Fórmula de Cálculo:** `(Clientes Localizados Efectivamente / Total Deudores Gestionados) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** ≥ 85%
* **Frecuencia del Cálculo:** Mensual
* **Responsable del Cálculo:** Analista de Cobranza
* **Origen de los Datos:** Registros de Gestión Multicanal

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician estrictamente con verbos en infinitivo (*Iniciar*, *Descargar*, *Ejecutar*, *Enviar*, *Capturar*, *Consolidar*, *Publicar*, *Cotejar*, *Aplicar*, *Aprobar*).
2. **Roles Válidos de Negocio:** Todos los responsables corresponden a cargos funcionales definidos (*Analista de Cobranza*, *Gerente de Operaciones*, *Recursos Humanos*, *Dirección General*, *App Web Flamingos*).
3. **Puntos Críticos de Control (TBC):**
   * Límite estricto institucional de 2 toques por cliente para evitar contingencias legales por acoso.
   * Es mandatorio incluir en BCC la cuenta de auditoría gerencial en todos los correos de cobranza.
   * La falta de evidencia en cualquiera de los 3 canales de la tríada invalida el expediente y genera falta administrativa.

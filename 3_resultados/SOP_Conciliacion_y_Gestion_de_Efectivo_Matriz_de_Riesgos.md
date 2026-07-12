# Matriz de Riesgos: Conciliación y Gestión de Efectivo

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

| **Clave del Proceso:** | CGE-01 | **Fecha de Elaboración:** | 2026-07-11 |
| :--- | :--- | :--- | :--- |
| **Elaboró:** | Arquitecto Híbrido de Procesos | **Autorizó AS IS:** | L. Negrete (Director de Finanzas) |
| **Observaciones:** | Esta matriz detalla los riesgos inherentes al manejo físico de efectivo y la conciliación en la plataforma de tesorería, enfocada en la detección oportuna de faltantes y trazabilidad. | | |

---

## Evaluación de Riesgos

| Actividad | Peligro | Riesgo | Control | Tipo de Control |
| :--- | :--- | :--- | :--- | :--- |
| **Revisar** el listado contra el dinero físico entregado por los cajeros | Omisión de discrepancias menores por fatiga o prisa de operación. | Falta de cuadre en caja física no detectado oportunamente. | Validación dual o doble conteo por el Gestor de Efectivo y firma obligatoria del acta de entrega. | Preventivo / Manual |
| **Modificar** el "Estado de Conciliación" en la fila correspondiente | Clasificación errónea de una discrepancia (ej. registrar como 'Reportado' en lugar de 'Averiguación'). | Ocultamiento involuntario de faltantes de dinero y distorsión de reportes financieros. | El sistema bloquea la conciliación automática si la diferencia es distinta de cero, requiriendo justificación y aprobación superior. | Preventivo / Automático |
| **Finalizar** auditoría o exportar listado | Pérdida de conexión a internet o cierre abrupto del navegador antes de persistir los cambios. | Pérdida de datos del trabajo de conciliación del día y necesidad de reproceso operativo. | Guardado automático y constante de borradores en la base de datos local de la App Web Flamingos. | Mitigante / Automático |
| **Grabar** trazabilidad en auditoría (Firma de acuse) | Falta de registro de qué usuario modificó los estados de conciliación. | Imposibilidad de realizar auditorías forenses o revisiones contables posteriores por falta de pista de auditoría. | El sistema registra de manera obligatoria y encriptada el ID de usuario, fecha, hora, IP y estado anterior/nuevo en cada cambio. | Detectivo / Automático |

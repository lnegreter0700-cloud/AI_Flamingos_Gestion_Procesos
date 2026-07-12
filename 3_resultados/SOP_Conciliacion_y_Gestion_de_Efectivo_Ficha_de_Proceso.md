# Ficha de Proceso: Conciliación y Gestión de Efectivo

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
| **Título del Documento** | SOP_Conciliacion_y_Gestion_de_Efectivo_Ficha_de_Proceso |
| **CLAVE** | **REVISIÓN** |
| SOP-CGE-01 | 01 |

</div>

---

## Información del Proceso

| **Nombre del Proceso:** | Conciliación y Gestión de Efectivo | **Clave del Proceso:** | CGE-01 |
| :--- | :--- | :--- | :--- |
| **Nivel del Proceso:** | Subproceso (Macroproceso: Caja/Tesorería) | **Responsable:** | Gestor de Efectivo |
| **Objetivo:** | Asegurar la consistencia y veracidad del efectivo recibido mediante la validación sistemática de los logs de tesorería contra los depósitos físicos, identificando discrepancias de forma oportuna. | | |

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Cajeros | Dinero físico y reportes de caja | **Ingresar** al módulo de Gestión de Caja en Efectivo | Módulo de caja activo | Gestor de Efectivo |
| Gestor de Efectivo | Filtro de fechas seleccionado | **Seleccionar** Fecha Única o Rango de Fechas | Petición de consulta enviada | App Web Flamingos |
| App Web Flamingos | Petición de consulta | **Consultar** log general de tesorería | Registros generales cargados | App Web Flamingos |
| App Web Flamingos | Registros cargados | **Filtrar** exclusivamente concepto "Pago por financimento de lote" y método "Efectivo" | Registros depurados y listos | App Web Flamingos |
| App Web Flamingos | Registros depurados | **Calcular** sumatorias para el Panel de Resumen | Sumatorias del día obtenidas | App Web Flamingos |
| App Web Flamingos | Sumatorias obtenidas | **Desplegar** Panel Superior y Tabla de Registros | Panel de Resumen y listado visibles | Gestor de Efectivo |
| Gestor de Efectivo | Panel visible y dinero físico | **Revisar** el listado contra el dinero físico entregado por los cajeros | Diagnóstico preliminar de caja | Gestor de Efectivo |
| Gestor de Efectivo | Diagnóstico con discrepancia | **Modificar** el "Estado de Conciliación" en la fila correspondiente (Reportado, Averiguación, Por Reportar) | Fila de registro actualizada temporalmente | Gestor de Efectivo |
| Gestor de Efectivo | Diagnóstico conforme o estado modificado | **Visualizar** reporte sin realizar cambios | Reporte validado listo para cierre | Gestor de Efectivo |
| Gestor de Efectivo | Reporte validado | **Finalizar** auditoría o exportar listado | Cierre de auditoría y orden de persistencia | App Web Flamingos / Base de Datos |
| App Web Flamingos | Cierre de auditoría | **Guardar** nuevo estado en Base de Datos | Registros actualizados en base de datos | App Web Flamingos |
| App Web Flamingos | Registros persistidos | **Grabar** trazabilidad en auditoría (Firma de acuse) | Pista de auditoría registrada | App Web Flamingos |
| App Web Flamingos | Pista de auditoría | **Recalcular** contadores del Panel de Resumen en tiempo real | Contadores y métricas actualizadas | Gestor de Efectivo |
| Gestor de Efectivo | Contadores actualizados | **Continuar** revisando el resto de los registros | Registros procesados y auditoría cerrada | Gestor de Efectivo |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Eficacia de Conciliación de Efectivo
| **Nombre:** | Eficacia de Conciliación de Efectivo | **Fórmula de Cálculo:** | `(Registros Conciliados sin Discrepancia / Total de Registros Revisados) * 100` |
| :--- | :--- | :--- | :--- |
| **Unidad de Medida:** | Porcentaje (%) | **Responsable del Cálculo:** | Gestor de Efectivo / Coordinador de Tesorería |
| **Origen de los Datos:** | App Web Flamingos (Logs de Caja) | **Frecuencia del Cálculo:** | Diario / Semanal |

### Indicador 2: Tasa de Incidencias en Averiguación
| **Nombre:** | Tasa de Incidencias en Averiguación | **Fórmula de Cálculo:** | `(Total de Registros en Estado "Averiguación" / Total de Registros Procesados) * 100` |
| :--- | :--- | :--- | :--- |
| **Unidad de Medida:** | Porcentaje (%) | **Responsable del Cálculo:** | Gestor de Efectivo |
| **Origen de los Datos:** | App Web Flamingos (BBDD) | **Frecuencia del Cálculo:** | Mensual |

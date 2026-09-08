# Ficha Técnica de Proceso y Matriz SIPOC

**Organización:** Grupo Flamingos  
**Tipo de Formato:** Ficha Técnica de Proceso  
**Título del Documento:** Conciliación y Gestión de Efectivo  
**Clave del Documento:** SOP-TES-01  
**Revisión (No. Rev):** 01  

---

## Información del Proceso
* **Nombre del Proceso:** Conciliación y Gestión de Efectivo (Tesorería)
* **Clave del Proceso:** PROC-TES-001
* **Nivel del Proceso:** Nivel 1 (Subproceso)
* **Responsable:** Gestor de Efectivo
* **Objetivo del Proceso:** Garantizar la concordancia absoluta y trazabilidad íntegra entre el dinero físico recaudado en ventanilla/oficina y los registros contables digitales de pagos por financiamiento de lotes en la App Web Flamingos, mediante un protocolo riguroso de arqueo diario, validación de sumatorias y tipificación inmediata de discrepancias con acuse de auditoría.
* **Alcance del Proceso:**
  * **Inicio:** Ingreso del Gestor de Efectivo al módulo de caja en efectivo de la App Web Flamingos.
  * **Fin:** Exportación del corte de caja con conformidad contable O registro formal de discrepancias en base de datos con firma de auditoría y recalculo de balance en tiempo real.

---

## SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes)

| Proveedores | Entradas | Proceso (Actividad) | Salidas | Clientes |
| :--- | :--- | :--- | :--- | :--- |
| Analista de Cobranza / Caja | Turno operativo abierto y dinero recaudado | 1. Ingresar al módulo de caja en efectivo en la plataforma digital | Sesión activa en módulo de arqueo | Gestor de Efectivo |
| Gestor de Efectivo | Parámetros de consulta operativa | 2. Filtrar el concepto "Pago por financiamiento de lote" y método "Efectivo" | Consulta delimitada en tabla transaccional | App Web Flamingos |
| App Web Flamingos | Transacciones registradas en BD | 3. Calcular automáticamente las sumatorias y contadores en el Panel Superior | Indicadores de saldo acumulado y cantidad de cobros | Gestor de Efectivo |
| Gestor de Efectivo | Dinero físico en bóveda / caja | 4. Cotejar el recuento físico de efectivo contra el listado desplegado en pantalla | Tabla comparativa de valores físicos vs digitales | Gestor de Efectivo |
| Gestor de Efectivo | Resultado del arqueo físico | 5. Evaluar la cuadratura exacta del balance para clasificar conformidad o descuadre | Dictamen de coincidencia o detección de diferencia | Gestor de Efectivo |
| Gestor de Efectivo | Balances idénticos sin varianza | 6. Exportar el listado definitivo de conciliación para resguardo contable | Archivo digital de arqueo cuadrado (Excel/PDF) | Coordinación de Contabilidad |
| Gestor de Efectivo | Transacción con diferencia física | 7. Modificar el estado de conciliación a "Reportado", "En Averiguación" o "Por Reportar" | Estatus transaccional modificado en interfaz | App Web Flamingos |
| Gestor de Efectivo | Motivo de discrepancia y acuse | 8. Registrar la firma de acuse de auditoría y guardar el registro en base de datos | Log inalterable de auditoría con firma y timestamp | Auditoría Interna / Tesorería |
| App Web Flamingos | Evento de persistencia en BD | 9. Recalcular en tiempo real los totales del panel discriminando montos observados | Dashboard de saldos actualizados en tiempo real | Coordinador de Tesorería |

---

## Indicadores de Desempeño (KPIs)

### Indicador 1: Efectividad de Conciliación Diaria (ECD)
* **Fórmula de Cálculo:** `(Transacciones Cuadradas / Total Transacciones) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 100%
* **Frecuencia del Cálculo:** Diaria
* **Responsable del Cálculo:** Gestor de Efectivo
* **Origen de los Datos:** Módulo de Caja y Arqueo (App Web Flamingos)

### Indicador 2: Tasa de Descuadre en Efectivo (TDE)
* **Fórmula de Cálculo:** `(Monto Total de Discrepancias / Monto Total Recaudado) * 100`
* **Unidad de Medida:** Porcentaje (%)
* **Meta:** 0.00%
* **Frecuencia del Cálculo:** Diaria / Semanal
* **Responsable del Cálculo:** Coordinador de Tesorería
* **Origen de los Datos:** Reportes de Arqueo y Logs de Auditoría

---

## Reglas y Lineamientos Operativos

1. **Verbos en Infinitivo Obligatorios:** Todas las actividades operativas del SIPOC inician estrictamente con verbos en infinitivo (*Ingresar*, *Filtrar*, *Calcular*, *Cotejar*, *Evaluar*, *Exportar*, *Modificar*, *Registrar*, *Recalcular*).
2. **Roles Válidos de Negocio:** Todos los responsables corresponden a cargos funcionales definidos (*Gestor de Efectivo*, *Coordinador de Tesorería*, *Auditor Interno*, *App Web Flamingos*).
3. **Puntos Críticos de Control (TBC):**
   * El sistema bloquea el módulo al inicio de jornada si el corte del día anterior no cuenta con cierre formal.
   * Toda modificación de estatus a transacción observada exige firma obligatoria de acuse de auditoría.

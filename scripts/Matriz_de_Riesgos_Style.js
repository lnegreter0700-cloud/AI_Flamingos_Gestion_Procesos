/**
 * ============================================================================
 * SISTEMA DE DISEÑO: "PAPUOOL CORPORATE AGILE"
 * SCRIPT: Matriz_de_Riesgos_Style.js
 * PROPÓSITO: Formatear la Matriz de Riesgos Operativos y Control Doc. en Docs
 * COMPATIBILIDAD: 100% Homólogo a Plantilla_Matriz_de_Riesgos.html y .md
 * ============================================================================
 * 
 * INSTRUCCIONES DE USO EN GOOGLE DOCS:
 * 1. En tu documento de Google Docs, ve al menú superior: Extensiones > Apps Script.
 * 2. Borra cualquier código existente y pega este script completo.
 * 3. Haz clic en "Guardar" (icono de disquete) y luego en "Ejecutar" (función aplicarDisenoCorporativo).
 * 4. Alternativamente, recarga tu Google Doc y usa el nuevo menú "🎨 Flamingos - Diseño".
 */

// Menú interactivo automático al abrir el documento
function onOpen() {
  DocumentApp.getUi()
    .createMenu('🎨 Flamingos - Diseño')
    .addItem('Aplicar Estilo Matriz de Riesgos', 'aplicarDisenoCorporativo')
    .addToUi();
}

function aplicarDisenoCorporativo() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // PALETA CROMÁTICA OFICIAL: "PAPUOOL CORPORATE AGILE"
  var COLOR_NAVY         = "#16255C"; // Azul Marino Profundo (Cabeceras y Bloques)
  var COLOR_CYAN         = "#00A9B5"; // Cyan Turquesa (Acentos)
  var COLOR_PREV_BG      = "#E6FBFB"; // Fondo Preventivo / Riesgo Bajo (Cyan suave)
  var COLOR_PREV_TEXT    = "#00A9B5"; // Texto Preventivo
  var COLOR_DETEC_BG     = "#FEF7E6"; // Fondo Detectivo / Riesgo Medio (Dorado suave)
  var COLOR_DETEC_TEXT   = "#D99E1A"; // Texto Detectivo
  var COLOR_CORAL_BG     = "#FFF0F1"; // Fondo Correctivo / Riesgo Crítico/Alto (Rosa suave)
  var COLOR_CORAL_TEXT   = "#E54747"; // Texto Correctivo / Alerta
  var COLOR_ICE_BLUE     = "#F8FAFC"; // Fondo alterno suave (Zebra)
  var COLOR_WHITE        = "#FFFFFF"; // Fondo blanco puro
  var COLOR_DARK_SLATE   = "#334155"; // Texto principal de lectura
  var COLOR_MUTED_SLATE  = "#64748B"; // Notas y metadatos secundarios
  var COLOR_BORDER       = "#CBD5E1"; // Borde sutil corporativo (1px)
  var FONT_FAMILY        = "Plus Jakarta Sans";

  // 1. FORMATEO TIPOGRÁFICO DE PÁRRAFOS Y ENCABEZADOS
  aplicarEstilosTexto(body, COLOR_NAVY, COLOR_CYAN, COLOR_DARK_SLATE, FONT_FAMILY);

  // 2. FORMATEO DE TABLAS (Control Documental, Banner de Alerta, Matriz de Riesgos)
  var tables = body.getTables();
  for (var t = 0; t < tables.length; t++) {
    var table = tables[t];

    // Configuración general de bordes y tipografía
    try {
      table.setBorderColor(COLOR_BORDER);
      table.setBorderWidth(1);
    } catch(e) {}

    var estiloBase = {};
    try {
      estiloBase[DocumentApp.Attribute.FONT_FAMILY] = FONT_FAMILY;
    } catch(e) {
      estiloBase[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
    }
    estiloBase[DocumentApp.Attribute.FONT_SIZE] = 9.5;
    table.setAttributes(estiloBase);

    // Detección de tabla tipo "Callout / Banner de Advertencia" (1 sola celda)
    if (table.getNumRows() === 1 && table.getRow(0).getNumCells() === 1) {
      var calloutCell = table.getRow(0).getCell(0);
      calloutCell.setBackgroundColor(COLOR_CORAL_BG);
      ajustarPaddingCelda(calloutCell, 10, 14, 10, 14);
      formatearTextoCelda(calloutCell, COLOR_CORAL_TEXT, true, 9.5, DocumentApp.HorizontalAlignment.LEFT);
      continue;
    }

    var numCols = table.getRow(0).getNumCells();

    for (var r = 0; r < table.getNumRows(); r++) {
      var row = table.getRow(r);

      for (var c = 0; c < row.getNumCells(); c++) {
        var cell = row.getCell(c);
        var texto = cell.getText().trim();
        var textoLimpio = texto.replace(/\*/g, "");

        // Aplicar padding profesional
        ajustarPaddingCelda(cell, 6, 8, 6, 8);

        // A. CABECERA GENERAL DE TABLA DE RIESGOS (Fila 0 con múltiples columnas)
        if (r === 0 && numCols > 2) {
          cell.setBackgroundColor(COLOR_NAVY);
          formatearTextoCelda(cell, COLOR_WHITE, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);
          continue;
        }

        // B. ETIQUETAS DE CONTROL DOCUMENTAL
        var esEtiqueta = textoLimpio.endsWith(":") ||
          textoLimpio === "CLAVE" ||
          textoLimpio === "REVISION" ||
          textoLimpio === "REVISIÓN" ||
          textoLimpio === "Organizacion" ||
          textoLimpio === "Organización" ||
          textoLimpio === "Formato de Operación" ||
          textoLimpio === "Formato de Operacion" ||
          textoLimpio === "Clave del Proceso" ||
          textoLimpio === "Fecha de Elaboración" ||
          textoLimpio === "Fecha de Elaboracion" ||
          textoLimpio === "Elaboró" ||
          textoLimpio === "Elaboro" ||
          textoLimpio === "Autorizó AS IS" ||
          textoLimpio === "Autorizo AS IS" ||
          textoLimpio === "Observaciones" ||
          textoLimpio === "Actividad Operativa" ||
          textoLimpio === "Peligro Detectado" ||
          textoLimpio === "Riesgo / Impacto" ||
          textoLimpio === "Nivel de Riesgo" ||
          textoLimpio === "Control Mitigante" ||
          textoLimpio === "Tipo de Control";

        if (esEtiqueta) {
          cell.setBackgroundColor(COLOR_NAVY);
          formatearTextoCelda(cell, COLOR_WHITE, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // C. BADGE TIPO DE CONTROL: PREVENTIVO
        } else if (textoLimpio === "Preventivo" || textoLimpio.indexOf("Preventivo") !== -1) {
          cell.setBackgroundColor(COLOR_PREV_BG);
          formatearTextoCelda(cell, COLOR_PREV_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // D. BADGE TIPO DE CONTROL: DETECTIVO
        } else if (textoLimpio === "Detectivo" || textoLimpio.indexOf("Detectivo") !== -1) {
          cell.setBackgroundColor(COLOR_DETEC_BG);
          formatearTextoCelda(cell, COLOR_DETEC_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // E. BADGE TIPO DE CONTROL: CORRECTIVO
        } else if (textoLimpio === "Correctivo" || textoLimpio.indexOf("Correctivo") !== -1) {
          cell.setBackgroundColor(COLOR_CORAL_BG);
          formatearTextoCelda(cell, COLOR_CORAL_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // F. BADGE NIVEL DE RIESGO: CRÍTICO O ALTO
        } else if (textoLimpio === "Crítico" || textoLimpio === "Critico" || textoLimpio === "Alto") {
          cell.setBackgroundColor(COLOR_CORAL_BG);
          formatearTextoCelda(cell, COLOR_CORAL_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // G. BADGE NIVEL DE RIESGO: MEDIO
        } else if (textoLimpio === "Medio") {
          cell.setBackgroundColor(COLOR_DETEC_BG);
          formatearTextoCelda(cell, COLOR_DETEC_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // H. BADGE NIVEL DE RIESGO: BAJO
        } else if (textoLimpio === "Bajo") {
          cell.setBackgroundColor(COLOR_PREV_BG);
          formatearTextoCelda(cell, COLOR_PREV_TEXT, true, 9, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // I. ID DE RIESGO (Centrado, negrita marino)
        } else if (textoLimpio.indexOf("RSK-") !== -1 || (c === 0 && r > 0 && numCols > 2)) {
          var fondoZebra = (r % 2 === 0) ? COLOR_ICE_BLUE : COLOR_WHITE;
          cell.setBackgroundColor(fondoZebra);
          formatearTextoCelda(cell, COLOR_NAVY, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // J. CELDAS DE DATOS GENERALES
        } else {
          var fondoDato = (r % 2 === 0 && r > 0) ? COLOR_ICE_BLUE : COLOR_WHITE;
          cell.setBackgroundColor(fondoDato);
          formatearTextoCelda(cell, COLOR_DARK_SLATE, false, 9.5, DocumentApp.HorizontalAlignment.LEFT);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);
        }
      }
    }
  }
}

/**
 * Aplica estilos corporativos a encabezados y párrafos del documento
 */
function aplicarEstilosTexto(body, colorNavy, colorCyan, colorSlate, font) {
  var paragraphs = body.getParagraphs();
  for (var i = 0; i < paragraphs.length; i++) {
    var p = paragraphs[i];
    var heading = p.getHeading();

    if (p.getParent().getType() === DocumentApp.ElementType.TABLE_CELL) {
      continue;
    }

    try { p.setFontFamily(font); } catch(e) {}

    if (heading === DocumentApp.ParagraphHeading.TITLE) {
      p.setFontSize(22);
      p.setForegroundColor(colorNavy);
      p.setBold(true);
    } else if (heading === DocumentApp.ParagraphHeading.HEADING1) {
      p.setFontSize(14);
      p.setForegroundColor(colorNavy);
      p.setBold(true);
      p.setSpacingBefore(12);
      p.setSpacingAfter(6);
    } else if (heading === DocumentApp.ParagraphHeading.HEADING2) {
      p.setFontSize(12);
      p.setForegroundColor(colorCyan);
      p.setBold(true);
      p.setSpacingBefore(8);
      p.setSpacingAfter(4);
    } else if (heading === DocumentApp.ParagraphHeading.HEADING3) {
      p.setFontSize(11);
      p.setForegroundColor(colorNavy);
      p.setBold(true);
    } else if (heading === DocumentApp.ParagraphHeading.NORMAL) {
      p.setFontSize(10);
      p.setForegroundColor(colorSlate);
    }
  }
}

function formatearTextoCelda(cell, color, bold, size, alineacion) {
  var textoCelda = cell.editAsText();
  if (textoCelda.getText().length > 0) {
    textoCelda.setForegroundColor(color);
    textoCelda.setBold(bold);
    if (size) textoCelda.setFontSize(size);
  }
  alinearParrafos(cell, alineacion);
}

function alinearParrafos(cell, alineacion) {
  for (var i = 0; i < cell.getNumChildren(); i++) {
    var child = cell.getChild(i);
    if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
      child.asParagraph().setAlignment(alineacion);
    }
  }
}

function alinearVertical(cell, alineacion) {
  try {
    cell.setVerticalAlignment(alineacion);
  } catch(e) {}
}

function ajustarPaddingCelda(cell, top, right, bottom, left) {
  try {
    cell.setPaddingTop(top);
    cell.setPaddingRight(right);
    cell.setPaddingBottom(bottom);
    cell.setPaddingLeft(left);
  } catch(e) {}
}

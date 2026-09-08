/**
 * ============================================================================
 * SISTEMA DE DISEÑO: "PAPUOOL CORPORATE AGILE"
 * SCRIPT: Inventario_de_Procesos_Style.js
 * PROPÓSITO: Formatear el Inventario General de Procesos y Macroprocesos en Docs
 * COMPATIBILIDAD: 100% Homólogo a Plantilla_Inventario_de_Procesos.html y .md
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
    .addItem('Aplicar Estilo Inventario de Procesos', 'aplicarDisenoCorporativo')
    .addToUi();
}

function aplicarDisenoCorporativo() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // PALETA CROMÁTICA OFICIAL: "PAPUOOL CORPORATE AGILE"
  var COLOR_NAVY         = "#16255C"; // Azul Marino Profundo (Banner del Macroproceso Nivel 0)
  var COLOR_CYAN         = "#00A9B5"; // Cyan Turquesa Vibrante (Cabeceras de Columnas y Enlaces)
  var COLOR_GOLD_LIGHT   = "#FDF5D8"; // Fondo Amarillo Pastel Cálido (Proceso Padre Nivel 1)
  var COLOR_GOLD_TEXT    = "#B8860B"; // Dorado Acento
  var COLOR_ICE_BLUE     = "#F4F7FB"; // Azul Hielo para Filas Pares (Zebra suave)
  var COLOR_WHITE        = "#FFFFFF"; // Blanco Puro para Filas Impares
  var COLOR_DARK_SLATE   = "#334155"; // Texto principal de lectura
  var COLOR_MUTED_SLATE  = "#64748B"; // Niveles y metadatos secundarios
  var COLOR_BORDER       = "#CBD5E1"; // Borde sutil corporativo (1px)
  var FONT_FAMILY        = "Plus Jakarta Sans";

  // 1. FORMATEO TIPOGRÁFICO DE PÁRRAFOS Y ENCABEZADOS
  aplicarEstilosTexto(body, COLOR_NAVY, COLOR_CYAN, COLOR_DARK_SLATE, FONT_FAMILY);

  // 2. FORMATEO DE TABLAS DEL CATÁLOGO DE PROCESOS
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
    estiloBase[DocumentApp.Attribute.FONT_SIZE] = 10;
    table.setAttributes(estiloBase);

    for (var r = 0; r < table.getNumRows(); r++) {
      var row = table.getRow(r);
      var numCells = row.getNumCells();

      for (var c = 0; c < numCells; c++) {
        var cell = row.getCell(c);
        var texto = cell.getText().trim();
        var textoLimpio = texto.replace(/\*/g, "");

        // Aplicar padding profesional
        ajustarPaddingCelda(cell, 6, 8, 6, 8);

        // FILA 0: Título General / Banner del Macroproceso Nivel 0 (Azul Marino Profundo)
        if (r === 0) {
          cell.setBackgroundColor(COLOR_NAVY);
          formatearTextoCelda(cell, COLOR_WHITE, true, 11, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // FILA 1: Cabeceras de Columna (Cyan Turquesa Vibrante)
        } else if (r === 1) {
          cell.setBackgroundColor(COLOR_CYAN);
          formatearTextoCelda(cell, COLOR_WHITE, true, 10, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // FILAS DE DATOS (r >= 2): Catálogo de Procesos y Subprocesos
        } else {
          var colorZebra = (r % 2 === 0) ? COLOR_ICE_BLUE : COLOR_WHITE;

          // COLUMNA 0: Proceso Padre Nivel 1 (Amarillo Pastel Cálido, Texto Marino, Negrita)
          if (c === 0) {
            cell.setBackgroundColor(COLOR_GOLD_LIGHT);
            formatearTextoCelda(cell, COLOR_NAVY, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
            alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

          // COLUMNA 1: ID Subproceso (Centrado, Marino)
          } else if (c === 1) {
            cell.setBackgroundColor(colorZebra);
            formatearTextoCelda(cell, COLOR_NAVY, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
            alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

          // COLUMNA 3: Nivel (Centrado, Texto Muted)
          } else if (c === 3) {
            cell.setBackgroundColor(colorZebra);
            formatearTextoCelda(cell, COLOR_MUTED_SLATE, false, 9, DocumentApp.HorizontalAlignment.CENTER);
            alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

          // COLUMNAS 5 y 6: Enlaces a Fichas y Matrices
          } else if (c >= 5 || textoLimpio.indexOf("Ver Ficha") !== -1 || textoLimpio.indexOf("Ver Matriz") !== -1 || textoLimpio.indexOf("SOP_") !== -1) {
            cell.setBackgroundColor(colorZebra);
            var textoCelda = cell.editAsText();
            if (textoCelda.getText().length > 0) {
              textoCelda.setForegroundColor(COLOR_CYAN);
              textoCelda.setBold(true);
              textoCelda.setUnderline(true);
              textoCelda.setFontSize(9);
            }
            alinearParrafos(cell, DocumentApp.HorizontalAlignment.CENTER);
            alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

          // COLUMNAS RESTANTES (Nombre, Responsable): Izquierda
          } else {
            cell.setBackgroundColor(colorZebra);
            formatearTextoCelda(cell, COLOR_DARK_SLATE, false, 9.5, DocumentApp.HorizontalAlignment.LEFT);
            alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);
          }
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

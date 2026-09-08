/**
 * ============================================================================
 * SISTEMA DE DISEÑO: "PAPUOOL CORPORATE AGILE"
 * SCRIPT: Ficha_de_Proceso_Style.js
 * PROPÓSITO: Formatear Fichas Técnicas de Proceso y Matriz SIPOC en Google Docs
 * COMPATIBILIDAD: 100% Homólogo a Plantilla_Ficha_de_Proceso.html y .md
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
    .addItem('Aplicar Estilo Ficha de Proceso (SIPOC)', 'aplicarDisenoCorporativo')
    .addToUi();
}

function aplicarDisenoCorporativo() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();

  // PALETA CROMÁTICA OFICIAL: "PAPUOOL CORPORATE AGILE"
  var COLOR_NAVY         = "#16255C"; // Azul Marino Profundo (Títulos, Cabeceras Principales)
  var COLOR_CYAN         = "#00A9B5"; // Cyan Turquesa Vibrante (Columna Proceso SIPOC y Acentos)
  var COLOR_CYAN_LIGHT   = "#F0FDFA"; // Cyan translúcido (Fondo de actividades en proceso SIPOC)
  var COLOR_GOLD_LIGHT   = "#FDF5D8"; // Amarillo pastel cálido
  var COLOR_GOLD_TEXT    = "#B8860B"; // Dorado oscuro para texto
  var COLOR_ICE_BLUE     = "#F4F7FB"; // Azul hielo sutil para filas alternadas (zebra)
  var COLOR_WHITE        = "#FFFFFF"; // Blanco puro
  var COLOR_DARK_SLATE   = "#334155"; // Texto principal de lectura
  var COLOR_MUTED_SLATE  = "#64748B"; // Metadatos y notas secundarias
  var COLOR_BORDER       = "#CBD5E1"; // Borde corporativo sutil (1px)
  var FONT_FAMILY        = "Plus Jakarta Sans";

  // 1. FORMATEO TIPOGRÁFICO DE PÁRRAFOS Y ENCABEZADOS
  aplicarEstilosTexto(body, COLOR_NAVY, COLOR_CYAN, COLOR_DARK_SLATE, FONT_FAMILY);

  // 2. FORMATEO DE TABLAS (Control Documental, SIPOC, KPIs)
  var tables = body.getTables();
  for (var t = 0; t < tables.length; t++) {
    var table = tables[t];

    // Configuración general de la tabla
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

    // Detectar si la tabla es la Matriz SIPOC (5 columnas)
    var numColumnas = table.getRow(0).getNumCells();
    var esSipoc = (numColumnas === 5);
    var colProcesoIndex = 2; // Por estándar SIPOC: Proveedores(0), Entradas(1), Proceso(2), Salidas(3), Clientes(4)

    for (var r = 0; r < table.getNumRows(); r++) {
      var row = table.getRow(r);

      for (var c = 0; c < row.getNumCells(); c++) {
        var cell = row.getCell(c);
        var texto = cell.getText().trim();
        var textoLimpio = texto.replace(/\*/g, "");

        // Aplicar padding profesional a celdas
        ajustarPaddingCelda(cell, 6, 8, 6, 8);

        // A. CABECERA DE LA COLUMNA "PROCESO" EN SIPOC
        var esHeaderProceso = (r === 0 && (textoLimpio.indexOf("Proceso") !== -1 || (esSipoc && c === colProcesoIndex)));
        if (esHeaderProceso) {
          cell.setBackgroundColor(COLOR_CYAN);
          formatearTextoCelda(cell, COLOR_WHITE, true, 10, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);
          continue;
        }

        // B. CABECERA GENERAL DE TABLA (Fila 0 de tablas de datos)
        if (r === 0 && numColumnas > 2) {
          cell.setBackgroundColor(COLOR_NAVY);
          formatearTextoCelda(cell, COLOR_WHITE, true, 10, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);
          continue;
        }

        // C. ETIQUETAS DE METADATOS / CONTROL DOCUMENTAL
        var esEtiqueta = textoLimpio.endsWith(":") ||
          textoLimpio === "CLAVE" ||
          textoLimpio === "REVISION" ||
          textoLimpio === "REVISIÓN" ||
          textoLimpio === "Organizacion" ||
          textoLimpio === "Organización" ||
          textoLimpio === "Tipo de Formato" ||
          textoLimpio === "Titulo del Documento" ||
          textoLimpio === "Título del Documento" ||
          textoLimpio === "Clave del Documento" ||
          textoLimpio === "Nombre del Proceso" ||
          textoLimpio === "Clave del Proceso" ||
          textoLimpio === "Nivel del Proceso" ||
          textoLimpio === "Responsable" ||
          textoLimpio === "Responsable del Proceso" ||
          textoLimpio === "Proveedores" ||
          textoLimpio === "Entradas" ||
          textoLimpio === "Salidas" ||
          textoLimpio === "Clientes" ||
          textoLimpio === "Indicador / KPI" ||
          textoLimpio === "Fórmula de Cálculo" ||
          textoLimpio === "Meta" ||
          textoLimpio === "Frecuencia" ||
          textoLimpio === "Unidad de Medida";

        if (esEtiqueta) {
          cell.setBackgroundColor(COLOR_NAVY);
          formatearTextoCelda(cell, COLOR_WHITE, true, 9.5, DocumentApp.HorizontalAlignment.CENTER);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // D. FILAS DE DATOS EN LA COLUMNA "PROCESO" (SIPOC)
        } else if (esSipoc && c === colProcesoIndex && r > 0) {
          cell.setBackgroundColor(COLOR_CYAN_LIGHT);
          formatearTextoCelda(cell, COLOR_NAVY, false, 9.5, DocumentApp.HorizontalAlignment.LEFT);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // E. CELDAS DE FÓRMULAS DE CÁLCULO (KPIs)
        } else if (textoLimpio.indexOf("(") !== -1 && textoLimpio.indexOf(")") !== -1 && (textoLimpio.indexOf("*") !== -1 || textoLimpio.indexOf("/") !== -1)) {
          cell.setBackgroundColor(COLOR_ICE_BLUE);
          var textoCelda = cell.editAsText();
          if (textoCelda.getText().length > 0) {
            try {
              textoCelda.setFontFamily("Consolas");
            } catch(e) {}
            textoCelda.setForegroundColor(COLOR_CYAN);
            textoCelda.setBold(true);
            textoCelda.setFontSize(9);
          }
          alinearParrafos(cell, DocumentApp.HorizontalAlignment.LEFT);
          alinearVertical(cell, DocumentApp.VerticalAlignment.CENTER);

        // F. CELDAS DE DATOS GENERALES (Con zebra striping sutil)
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

    // Solo aplicar a párrafos fuera de tablas
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

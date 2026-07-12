function aplicarDisenoCorporativo() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var tables = body.getTables();

    // Paleta de Colores de acuerdo a los Guidelines
    var colorCian = "#0097A7";

    for (var t = 0; t < tables.length; t++) {
        var table = tables[t];

        // Definir atributos base (Arial, 10pts)
        var estiloBase = {};
        estiloBase[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
        estiloBase[DocumentApp.Attribute.FONT_SIZE] = 10;
        table.setAttributes(estiloBase);

        for (var r = 0; r < table.getNumRows(); r++) {
            var row = table.getRow(r);

            for (var c = 0; c < row.getNumCells(); c++) {
                var cell = row.getCell(c);
                var texto = cell.getText().trim();

                // Limpiar texto para remover la sintaxis de negritas de Markdown y espacios
                var textoLimpio = texto.replace(/\*/g, "");

                // Condición para celdas de encabezado o etiquetas
                if (textoLimpio.endsWith(":") ||
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
                    textoLimpio === "Actividad" ||
                    textoLimpio === "Peligro" ||
                    textoLimpio === "Riesgo" ||
                    textoLimpio === "Control" ||
                    textoLimpio === "Tipo de Control") {

                    cell.setBackgroundColor(colorCian);
                    var textoCelda = cell.editAsText();
                    if (textoCelda.getText().length > 0) {
                        textoCelda.setForegroundColor("#FFFFFF");
                        textoCelda.setBold(true);
                    }

                    // Alinear al centro
                    for (var i = 0; i < cell.getNumChildren(); i++) {
                        var child = cell.getChild(i);
                        if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
                            child.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
                        }
                    }

                } else {
                    // Celdas de datos generales
                    cell.setBackgroundColor("#FFFFFF");
                    var textoCelda = cell.editAsText();
                    if (textoCelda.getText().length > 0) {
                        textoCelda.setForegroundColor("#000000");
                        // No forzamos unbold total para conservar las negritas parciales del Markdown (ej. **Revisar**)
                    }

                    // Alinear a la izquierda
                    for (var i = 0; i < cell.getNumChildren(); i++) {
                        var child = cell.getChild(i);
                        if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
                            child.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.LEFT);
                        }
                    }
                }
            }
        }
    }
}

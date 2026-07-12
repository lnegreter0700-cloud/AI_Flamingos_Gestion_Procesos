function aplicarDisenoCorporativo() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var tables = body.getTables();

    var colorCian = "#0097A7";

    for (var t = 0; t < tables.length; t++) {
        var table = tables[t];

        var estiloBase = {};
        estiloBase[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
        table.setAttributes(estiloBase);

        for (var r = 0; r < table.getNumRows(); r++) {
            var row = table.getRow(r);

            for (var c = 0; c < row.getNumCells(); c++) {
                var cell = row.getCell(c);
                var texto = cell.getText().trim();

                if (texto.endsWith(":") ||
                    texto == "CLAVE" ||
                    texto == "REVISION" ||
                    texto == "REVISI\u00d3N" ||
                    texto == "Organizacion" ||
                    texto == "Organizaci\u00f3n" ||
                    texto == "Tipo de Formato" ||
                    texto == "Titulo del Documento" ||
                    texto == "T\u00edtulo del Documento" ||
                    texto == "Proveedores" ||
                    texto == "Entradas" ||
                    texto == "Proceso" ||
                    texto == "Proceso (Actividad)" ||
                    texto == "Salidas" ||
                    texto == "Clientes") {

                    cell.setBackgroundColor(colorCian);
                    var textoCelda = cell.editAsText();
                    if (textoCelda.getText().length > 0) {
                        textoCelda.setForegroundColor("#FFFFFF");
                        textoCelda.setBold(true);
                    }

                    for (var i = 0; i < cell.getNumChildren(); i++) {
                        var child = cell.getChild(i);
                        if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
                            child.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
                        }
                    }

                } else {
                    cell.setBackgroundColor("#FFFFFF");
                    var textoCelda = cell.editAsText();
                    if (textoCelda.getText().length > 0) {
                        textoCelda.setForegroundColor("#000000");
                        textoCelda.setBold(false);
                    }

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
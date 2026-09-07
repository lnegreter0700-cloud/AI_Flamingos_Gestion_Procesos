function aplicarDisenoCorporativo() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
    var tables = body.getTables();

    // Paleta de Colores de acuerdo a los Guidelines
    var colorCian = "#0097A7";       // Header principal
    var colorAmarillo = "#FDD835";   // Columna de Procesos (Padre)
    var colorGrisClaro = "#E0E0E0";  // Subprocesos - Filas Impares
    var colorAzulClaro = "#29B6F6";  // Subprocesos - Filas Pares

    for (var t = 0; t < tables.length; t++) {
        var table = tables[t];

        // Definir atributos base (Arial, 10pts)
        var estiloBase = {};
        estiloBase[DocumentApp.Attribute.FONT_FAMILY] = 'Arial';
        estiloBase[DocumentApp.Attribute.FONT_SIZE] = 10;
        table.setAttributes(estiloBase);

        for (var r = 0; r < table.getNumRows(); r++) {
            var row = table.getRow(r);

            // Fila 0: Título General (APPACCOUNTING FLAMINGOS...)
            // Fila 1: Cabeceras de columna (Proceso | Subproceso)
            if (r === 0 || r === 1) {
                for (var c = 0; c < row.getNumCells(); c++) {
                    var cell = row.getCell(c);
                    cell.setBackgroundColor(colorCian);
                    
                    var cellText = cell.editAsText();
                    if (cellText.getText().length > 0) {
                        cellText.setForegroundColor("#FFFFFF");
                        cellText.setBold(true);
                    }

                    // Alinear al centro el párrafo del encabezado
                    for (var i = 0; i < cell.getNumChildren(); i++) {
                        var child = cell.getChild(i);
                        if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
                            child.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
                        }
                    }
                }
            } else {
                // Filas de datos (r >= 2)
                for (var c = 0; c < row.getNumCells(); c++) {
                    var cell = row.getCell(c);
                    var cellText = cell.editAsText();
                    var textoLimpio = cell.getText().trim().replace(/\*/g, "");

                    if (c === 0) {
                        // Columna 0: Proceso Padre (Amarillo, Texto Negro, Negrita, Centrado)
                        cell.setBackgroundColor(colorAmarillo);
                        if (cellText.getText().length > 0) {
                            cellText.setForegroundColor("#000000");
                            cellText.setBold(true);
                        }

                        // Centrar texto del proceso padre
                        for (var i = 0; i < cell.getNumChildren(); i++) {
                            var child = cell.getChild(i);
                            if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
                                child.asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);
                            }
                        }

                        // Alinear verticalmente al centro si es posible
                        try {
                            cell.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER);
                        } catch(e) {
                            // Ignorar si no está soportado en este entorno de Apps Script
                        }

                    } else if (c === 1) {
                        // Columna 1: Subproceso (Zebra Striping con Texto Negro, Sin Negrita, Alineación Izquierda)
                        // De acuerdo a la regla:
                        // - Filas impares (r = 3, 5, 7...): Gris Claro (#E0E0E0)
                        // - Filas pares (r = 2, 4, 6...): Azul Claro (#29B6F6)
                        var colorFondo = (r % 2 === 0) ? colorAzulClaro : colorGrisClaro;
                        cell.setBackgroundColor(colorFondo);

                        if (cellText.getText().length > 0) {
                            cellText.setForegroundColor("#000000");
                            cellText.setBold(false);
                        }

                        // Alinear a la izquierda el subproceso
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
}

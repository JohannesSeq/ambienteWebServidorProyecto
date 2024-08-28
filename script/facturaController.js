//import { dispararAlertaExito,dispararAlertaError } from './script.js';

$(document).ready(function () {
    $('#formAgregarFactura').submit(function (e) {
        e.preventDefault();
        let datos = $('#formAgregarFactura').serialize();
        alert(datos);
        $.ajax({
            type: "POST",
            url: "../php/AgregarFactura_process.php",
            data: datos,
            success: function (response) {
                //dispararAlertaExito("Factura agregada correctamente");
                alert(response);
            }
        });
    });
});

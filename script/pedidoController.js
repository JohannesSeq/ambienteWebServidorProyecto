import { dispararAlertaExito,dispararAlertaError } from './script.js';
$(document).ready(function(){

    $('#Agregar_Pedido_Form').submit(function(e){

        e.preventDefault();
        let nombre = $('#nombre').val();
        let direccion = $('#direccion').val();
        let telefono = $('#telefono').val();
        let Detallespedido = $('#pedido').val();
        $.ajax({
            url: '../php/AgregarPedido_Process.php',
            method: 'POST',

            data: {
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                Detallespedido: Detallespedido
            },

            success: function(response){
                dispararAlertaExito("Pedido agregado correctamente").then(() => {
                    location.reload();
                });
            }
        });
    });

    $('#Modificar_Pedido_Form').submit(function(e) {
        e.preventDefault();

        // Collecting values from the form
        let id = $('#id_pedido').val();
        let nombre = $('#nombre').val();
        let direccion = $('#direccion').val();
        let telefono = $('#telefono').val();
        let Detallespedido = $('#pedido').val();
        let estado = $('#estado').val();

        // AJAX request to the update process PHP script
        $.ajax({
            url: '../php/ModificarPedido_Process.php',
            method: 'POST',
            data: {
                id: id,
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                Detallespedido: Detallespedido,
                estado: estado
            },
            success: function(response) {
                // Handling response and refreshing the page or showing a success message
                if (response.includes("actualizado")) {
                    dispararAlertaExito("Pedido actualizado correctamente").then(() => {
                        location.reload();
                    });
                } else {
                    // Handling different types of errors that might occur and show them to the user
                    dispararAlertaError("Error al actualizar el pedido: " + response);
                }
            },
            error: function() {
                // Handling unexpected AJAX errors
                dispararAlertaError("Error en la conexión con el servidor al intentar actualizar el pedido.");
            }
        });
    });

});
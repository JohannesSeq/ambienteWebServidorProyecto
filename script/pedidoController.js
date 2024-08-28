import { dispararAlertaExito,dispararAlertaError } from './script.js';
$(document).ready(function(){

    $('#Agregar_Pedido_Form').submit(function(e){

        e.preventDefault();
        var nombre = $('#nombre').val();
        var direccion = $('#direccion').val();
        var telefono = $('#telefono').val();
        var Detallespedido = $('#pedido').val();
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

    


});
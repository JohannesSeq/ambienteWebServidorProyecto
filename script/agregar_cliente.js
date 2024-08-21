$(document).ready(function(){

    $('#Agregar_Cliente_Form').submit(function(e){

        e.preventDefault();
        var nombre = $('#nombre_cliente').val();
        var telefono = $('#telefono_cliente').val();
        var direccion = $('#direccion_cliente').val();
        
        $.ajax({
            url: '../php/agregarCliente_Process.php',
            method: 'POST',

            data: {
                nombre: nombre,
                telefono: telefono,
                direccion: direccion,
            },

            success: function(response){
                console.log(response)
                alert("Cliente agregado correctamente!");
                window.location.href = "agregarCliente.php";
            }
        });
    });
});
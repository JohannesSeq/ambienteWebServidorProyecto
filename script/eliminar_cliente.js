$(document).ready(function(){

    $('#Eliminar_Cliente_Form').submit(function(e){

        e.preventDefault();
        var id = $('#id_cliente').val();

        
        $.ajax({
            url: '../php/consultarCliente_process.php',
            method: 'GET',

            data: {
                id: id
            },

            success: function(response){
                console.log(response)
                if(response != 'null'){
                    $.ajax({

                        url: '../php/eliminarCliente_process.php',
                        method: 'POST',
            
                        data: {
                            id: id,
                        },

                        success: function(response){
                            alert("Cliente eliminado correctamente correctamente!");
                            console.log(response)
                            window.location.href = "eliminarCliente.php";
                        }
                    });
                } else {

                    alert("El ID del cliente ingresado es invalido o no existe.");
                    window.location.href = "eliminarCliente.php";
                    
                }


                }
        });
    });
});

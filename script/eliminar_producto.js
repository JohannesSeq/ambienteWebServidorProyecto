$(document).ready(function(){

    $('#Eliminar_Producto_Form').submit(function(e){

        e.preventDefault();
        var id = $('#id_producto').val();

        
        $.ajax({
            url: '../php/consultar_producto.php',
            method: 'GET',

            data: {
                id: id
            },

            success: function(response){
                console.log(response)
                if(response != 'null'){
                    $.ajax({

                        url: '../php/eliminarProducto_process.php',
                        method: 'POST',
            
                        data: {
                            id: id,
                        },

                        success: function(response){
                            alert("Producto eliminado correctamente correctamente!");
                            console.log(response)
                            window.location.href = "eliminarProducto.php";
                        }
                    });
                } else {

                    alert("El ID del producto ingresado es invalido o no existe.");
                    window.location.href = "eliminarProducto.php";
                    
                }


                }
        });
    });
});

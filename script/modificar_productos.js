$(document).ready(function(){

    $('#Buscar_Producto_Form').submit(function(e){

        e.preventDefault();
        var id = $('#id_producto').val();

        
        $.ajax({
            url: '../php/consultar_producto.php',
            method: 'GET',

            data: {
                id: id
            },

            success: function(formulario){
                console.log(formulario)
                $('#Modificar_Form').html(formulario);


                $('#Modificar_Form').submit(function(f){

                    f.preventDefault();

                    var nombre = $('#nombre_producto').val();
                    var categoria = $('#categoria').val();
                    var cantidad = $('#cantidad').val();
                    var precio = $('#precio').val();

                    $.ajax({

                        url: '../php/modificarProducto_process.php',
                        method: 'POST',
            
                        data: {
                            id: id,
                            nombre: nombre,
                            categoria: categoria,
                            cantidad: cantidad,
                            precio: precio
                        },

                        success: function(response){
                            alert("Prodcuto modificado correctamente!");
                            console.log(response)
                            window.location.href = "modificarProducto.php";
                        }
                    });
                    

                });



            }
        });
    });
});
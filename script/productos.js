$(document).ready(function(){

    $('#Agregar_Producto_Form').submit(function(e){

        e.preventDefault();
        var nombre = $('#nombre_producto').val();
        var categoria = $('#categoria').val();
        var cantidad = $('#cantidad').val();
        var precio = $('#precio').val();
        
        $.ajax({
            url: '../php/agregarProducto_Process.php',
            method: 'POST',

            data: {
                nombre: nombre,
                categoria: categoria,
                cantidad: cantidad,
                precio: precio
            },

            success: function(response){
                console.log(response)
                alert("Prodcuto Agregado correctamente!");
                window.location.href = "index.php";
            }
        });
    });
});
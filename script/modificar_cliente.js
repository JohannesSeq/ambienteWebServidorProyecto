$(document).ready(function(){

    $('#Buscar_Cliente_Form').submit(function(e){

        e.preventDefault();
        var id = $('#id_cliente').val();

        
        $.ajax({
            url: '../php/consultarCliente_process.php',
            method: 'GET',

            data: {
                id: id
            },

            success: function(formulario){

                if(formulario != 'null'){
                    console.log(formulario)
                    $('#Modificar_Form').html(formulario);
                    
                    $('#Modificar_Form').submit(function(f){
    
                        f.preventDefault();
    
                        var nombre = $('#nombre').val();
                        var direccion = $('#direccion').val();
                        var telefono = $('#telefono').val();
    
                        $.ajax({
    
                            url: '../php/modificarCliente_process.php',
                            method: 'POST',
                
                            data: {
                                id: id,
                                nombre: nombre,
                                direccion: direccion,
                                telefono: telefono,
                            },
    
                            success: function(response){
                                alert("Cliente modificado correctamente!");
                                console.log(response)
                                window.location.href = "modificarCliente.php";
                            }
                        });
                        
    
                    });
                } else {
                    alert("El ID del cliente ingresado es invalido o no existe.");
                    window.location.href = "modificarCliente.php";                    
                }


            }
        });
    });
});
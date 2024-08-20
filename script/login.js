$(document).ready(function(){

    $('#formulario_login').submit(function(e){

        e.preventDefault();

        //Variables obtenidas del formulario de login.
        var correo = $('#email').val();
        var user_pass = $('#passowrd').val();

        console.log('Fabian Mena esta procesando' + correo + user_pass);

        $.ajax({
            
            url: '../PHP/login_process.php',
            method: 'GET',
            data: {
                name: email,
                user_pass: user_pass
            },

            success: function(response){
                console.log(response)
            }
        });
    });

})
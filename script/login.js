$(document).ready(function(){
    Lectura_Tareas();

    $('#login_form').submit(function(e){

        e.preventDefault();
        var email = $('#email').val();
        var user_pass = $('#passowrd').val();
        console.log('Fabian Mena esta procesando' + email + user_pass);

        $.ajax({
            
            url: '../login_process.php',
            method: 'GET',
            data: {
                name: email,
                user_pass: user_pass
            },

            success: function(response){
                console.log(response)
                Lectura_Tareas();
                $('#email').val('');
                $('#passowrd').val('');
            }
        });
    });

})
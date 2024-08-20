$(document).ready(function(){
    var failure = false;
    
    $('#formulario_login').submit(function(e){
        //var errortext = document.getElementById('#error_text');
        e.preventDefault();

        //Variables obtenidas del formulario de login.
        var correo = $('#email_field').val();
        var user_pass = $('#password_field').val();

        $.ajax({
            
            url: '../PHP/login_process.php',
            method: 'GET',
            data: {
                correo: correo,
                user_pass: user_pass
            },

            success: function(response){


                if(response.startsWith('null')){
                    clear_cookie();
                    console.log("login error")
                    
                    failure = true;
                    escribir_error();
                    //errortext.val('Usuario o contraseña incorrectos.');

                } else {

                    console.log("Login was successful!")   
                    var RawResponse = '';
                    RawResponse = response.slice(1, response.length - 1)
                    var User_Array = RawResponse.split(",");
                    
                    for (let i = 0; i < User_Array.length; i++){

                        User_Array[i] = User_Array[i].slice(User_Array[i].indexOf(':') + 1, User_Array[i].length);
                        
                        if(User_Array[i].startsWith('"')){
                            User_Array[i] = User_Array[i].slice(1, User_Array[i].length - 1);
                        }

                        console.log(User_Array[i])
                    }

                    write_cookie(User_Array[2],User_Array[4]);
                    window.location.href = "../index.php";
                }

            }

        });

    });
});

function escribir_error(){
    //$('#error_text').val('Usuario o contraseña incorrectos.');
    var paragraph = document.getElementById("error_text");
    paragraph.textContent = 'Usuario o contraseña incorrectos';
}

function write_cookie(email,rol){
    document.cookie = "email=  ; path=/";
    document.cookie = "rol=  ; path=/";

    document.cookie = "email" + "=" + email + ";" + "path=/" + ";";
    document.cookie = "rol" + "=" + rol + ";" + "path=/" + ";";
}

function clear_cookie(){
    document.cookie = "email= ; path=/";
    document.cookie = "rol= ; path=/";
}

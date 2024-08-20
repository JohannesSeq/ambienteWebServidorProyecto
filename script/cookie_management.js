function write_cookie(email,rol){
    document.cookie = "email= ; path=/";
    document.cookie = "rol= ; path=/";

    document.cookie = "email" + "=" + email + ";" + "path=/" + ";";
    document.cookie = "rol" + "=" + rol + ";" + "path=/" + ";";
}

function clear_cookie(){
    document.cookie = "email= ; path=/";
    document.cookie = "rol= ; path=/";
    window.location.href = "../index.php";
}

$(document).ready(function(){

    const boton_envio = document.getElementById("logout").addEventListener("click",clear_cookie);

});

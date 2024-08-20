<?php

$Servidor = "localhost";
$usuario = "root";
$password = "";
$db = "playa_cacao_db";

$conn = new mysqli($Servidor,$usuario, $password, $db);

if($conn->connect_error){
    die("Conexion fallida: ".$conn->connect_error);
    
}

?>
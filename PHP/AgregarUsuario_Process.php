<?php
include 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $rol = $_POST['rol'];
    $password = $_POST['password'];

    $Cifrado = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuario (nombre, correo, rol, user_pass) VALUES (?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssss", $nombre, $email, $rol, $Cifrado);
        if ($stmt->execute()) {
            echo "Nuevo usuario agregado con éxito";
        } else {
            echo "Error al agregar usuario: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Error en la preparación: " . $conn->error;
    }
}
    $conn->close();
?>
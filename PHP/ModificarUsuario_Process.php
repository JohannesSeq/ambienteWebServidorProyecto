<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $rol = $_POST['rol']; // New field for role

    $stmt = $conn->prepare("UPDATE usuario SET nombre = ?, correo = ?, user_pass = ?, rol = ? WHERE id = ?");

    if ($stmt === false) {
        die('Error preparing the statement: ' . $conn->error);
    }

    $stmt->bind_param("ssssi", $nombre, $email, $password, $rol, $id);

    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Usuario actualizado con éxito!";
    } else {
        echo "No se actualizó el usuario, verifica que el ID sea correcto.";
    }

    $stmt->close();
}

$conn->close();
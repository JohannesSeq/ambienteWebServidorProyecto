<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $stmt = $conn->prepare("DELETE FROM usuario WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Usuario eliminado con éxito!";
    } else {
        echo "No se pudo eliminar el usuario, verifica que el ID sea correcto.";
    }

    $stmt->close();
}

$conn->close();
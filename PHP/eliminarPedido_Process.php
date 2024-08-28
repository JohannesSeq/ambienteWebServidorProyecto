<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar el ID del pedido a eliminar
    $id = $_POST['id'];

    // Preparar la consulta para eliminar el pedido
    $stmt = $conn->prepare("DELETE FROM pedido WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    // Verificar si el pedido fue eliminado exitosamente
    if ($stmt->affected_rows > 0) {
        echo "Pedido eliminado con éxito!";
    } else {
        echo "No se pudo eliminar el pedido, verifica que el ID sea correcto.";
    }

    // Cerrar la declaración
    $stmt->close();
}

// Cerrar la conexión
$conn->close();
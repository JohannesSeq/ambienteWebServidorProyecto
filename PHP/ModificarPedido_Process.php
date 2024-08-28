<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $Detallespedido = $_POST['Detallespedido'];
    $estado =  $_POST['estado'];

    $stmt = $conn->prepare("UPDATE clientes SET nombre = ?, telefono = ?, direccion = ?, Detalle_pedido = ?, estado = ? WHERE id = ?");
    $stmt->bind_param("sssssi", $nombre, $telefono, $direccion, $Detallespedido, $estado, $id);
    $stmt->execute();

    // Check for successful update
    if ($stmt->affected_rows > 0) {
        echo "Pedido actualizado con éxito!";
    } else {
        echo "No se actualizó el pedido, verifica que el ID sea correcto.";
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
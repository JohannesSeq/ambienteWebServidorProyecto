<?php
include 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $Detallespedido = $_POST['Detallespedido'];

    // Set the estado to "pendiente"
    $estado = "pendiente";

    // Get the current date
    $fecha = date("Y-m-d");

    $sql = "INSERT INTO pedido (id, fecha, estado, Nombre_cliente, telefono, Detalle_pedido, Direcion_entrega) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssss", $productoId, $fecha, $estado, $nombre, $telefono, $Detallespedido, $direccion);
    if ($stmt->execute()) {
        echo "Nuevo pedido agregado con éxito";
    } else {
        echo "Error al agregar pedido: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
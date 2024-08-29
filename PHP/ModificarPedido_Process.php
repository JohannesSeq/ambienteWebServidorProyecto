<?php
include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $detalles = $_POST['detalles'];
    $estado = $_POST['estado'];

    // Prepare the SQL statement with the correct table name 'pedido'
    $stmt = $conn->prepare("UPDATE pedido SET Nombre_cliente = ?, telefono = ?, Direcion_entrega = ?, Detalle_pedido = ?, estado = ? WHERE id = ?");

    // Check if the statement was prepared successfully
    if ($stmt === false) {
        // Output the error message
        die('Error preparing the statement: ' . $conn->error);
    }

    // Bind the parameters
    $stmt->bind_param("sisssi", $nombre, $telefono, $direccion, $detalles, $estado, $id);

    // Execute the statement
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

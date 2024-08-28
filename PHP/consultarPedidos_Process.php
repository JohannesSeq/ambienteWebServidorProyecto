<?php
include('connection.php');

// Preparar la consulta para obtener todos los pedidos
$query = "SELECT * FROM pedido";
$result = $conn->query($query);

$pedidos = array();

if ($result->num_rows > 0) {
    // Recorrer cada fila y agregarla al array de pedidos
    while($row = $result->fetch_assoc()) {
        $pedidos[] = $row;
    }
    // Devolver los pedidos en formato JSON
    echo json_encode($pedidos);
} else {
    echo json_encode(array('error' => 'No se encontraron pedidos.'));
}

// Cerrar la conexión
$conn->close();
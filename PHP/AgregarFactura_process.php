<?php
    include 'connection.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recibir los datos del formulario
        $clienteId = $_POST['clienteId'];
        $total = $_POST['total'];
        // Más campos según necesites

        // Preparar y ejecutar la consulta SQL
        $sql = "INSERT INTO facturas (clienteId, total) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("id", $clienteId, $total);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo "Factura creada correctamente";
        } else {
            echo "Error al crear factura";
        }
        $stmt->close();
    }
    $conn->close();
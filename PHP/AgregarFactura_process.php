<?php
    include 'connection.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recibir los datos del formulario
        $pedidoId = $_POST['pedidoID'];
        $fechaFactura = date("Y-m-d");
        $montoTotal = $_POST['montoTotal'];

        // Insertar la factura con el pedidoID
        $sql = "INSERT INTO facturas (fecha, monto_total, id_pedido) VALUES (?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $fechaFactura ,$montoTotal, $pedidoId);
        $stmt->execute();

        $sqlEstadoPedido = "UPDATE pedido SET estado = 'completado' WHERE id = ?";
        $stmtEstadoPedido = $conn->prepare($sqlEstadoPedido);
        $stmtEstadoPedido->bind_param("s", $pedidoId);
        $stmtEstadoPedido->execute();

        if ($stmt->affected_rows > 0 && $stmtEstadoPedido->affected_rows > 0) {
            echo "Factura creada correctamente";
        } else {
            echo "Error al crear factura";
        }
        $stmt->close();
    }
    $conn->close();
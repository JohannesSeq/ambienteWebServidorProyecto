<?php
include('connection.php');

$query = "
    SELECT facturas.id AS factura_id, facturas.fecha AS factura_fecha, facturas.monto_total AS factura_monto, 
           pedido.Nombre_cliente AS pedido_cliente, pedido.Direcion_entrega AS pedido_direccion, 
           pedido.telefono AS pedido_telefono, pedido.Detalle_pedido AS pedido_detalle 
    FROM facturas 
    INNER JOIN pedido ON facturas.id_pedido = pedido.id";

$result = $conn->query($query);
$facturas = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $facturas[] = $row;
    }
    echo json_encode($facturas);
} else {
    echo json_encode(array('error' => 'No se encontraron facturas.'));
}

$conn->close();

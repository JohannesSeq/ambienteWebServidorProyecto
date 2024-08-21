<?php
    include('connection.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];

    $stmt = $conn->prepare("UPDATE clientes SET nombre = ?, telefono = ?, direccion = ? WHERE id = ?");
    $stmt->bind_param("sssi", $nombre, $telefono, $direccion,$id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Cliente Actualizada!";
    } else {
        echo "No se actualizo el producto.";
    }
?>
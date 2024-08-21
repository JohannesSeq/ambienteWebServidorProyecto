<?php
    include('connection.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $categoria = $_POST['categoria'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];

    $stmt = $conn->prepare("UPDATE productos SET nombre = ?, categoria = ?, cantidad = ?, precio = ? WHERE id = ?");
    $stmt->bind_param("ssssi", $nombre, $categoria, $cantidad, $precio ,$id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Producto Actualizada!";
    } else {
        echo "No se actualizo el producto.";
    }
?>
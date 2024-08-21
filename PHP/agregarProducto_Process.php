<?php
    include('connection.php');

    $nombre = $_POST['nombre'];
    $categoria = $_POST['categoria'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];

    $stmt = $conn->prepare("INSERT INTO productos (nombre, categoria, cantidad,precio) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nombre, $categoria, $cantidad, $precio);
    $stmt->execute();

    $stmt->close();
    $conn->close();
?>
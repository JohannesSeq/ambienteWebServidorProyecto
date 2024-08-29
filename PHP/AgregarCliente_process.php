<?php
    include("db.php");
    
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];

    $stmt = $conn->prepare("INSERT INTO clientes (nombre, telefono, direccion) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nombre, $telefono, $direccion);
    $stmt->execute();

    $stmt->close();
    $conn->close();
?>
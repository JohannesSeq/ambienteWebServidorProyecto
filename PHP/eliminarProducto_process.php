<?php
    include('../PHP/connection.php');
    $id = $_POST['id'];

    $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
    $stmt->bind_param("i", $id); 
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Producto eliminado.";
    }

    $stmt->close();
    $conn->close();
?>
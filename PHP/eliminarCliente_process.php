<?php
    include('../PHP/connection.php');
    $id = $_POST['id'];

    $stmt = $conn->prepare("DELETE FROM clientes WHERE id = ?");
    $stmt->bind_param("i", $id); 
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Cliente eliminado.";
    }

    $stmt->close();
    $conn->close();
?>
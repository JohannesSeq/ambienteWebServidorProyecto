<?php
include('connection.php');

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM usuario WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();
        echo json_encode($usuario);
    } else {
        echo json_encode(array('error' => 'No se encontró el usuario.'));
    }

    $stmt->close();
} else {
    echo json_encode(array('error' => 'No se proporcionó un ID.'));
}

$conn->close();

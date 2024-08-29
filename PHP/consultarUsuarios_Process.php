<?php
include('connection.php');

$query = "SELECT * FROM usuario";
$result = $conn->query($query);

$usuarios = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $usuarios[] = $row;
    }
    echo json_encode($usuarios);
} else {
    echo json_encode(array('error' => 'No se encontraron usuarios.'));
}

$conn->close();
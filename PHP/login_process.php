<?php
include('connection.php');

//Passdown de las variables del JS al backend
$correo = $_GET['correo'];
$user_pass = $_GET['user_pass'];

$stmt = $conn->prepare("SELECT * FROM usuario WHERE correo = ? AND user_pass = ?");

$stmt->bind_param("ss", $correo, $user_pass);
$stmt->execute();

$result = $stmt->get_result();
$task = $result->fetch_assoc();

echo json_encode($task);

$stmt->close();
$conn->close();
?>

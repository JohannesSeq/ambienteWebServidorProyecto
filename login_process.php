<?php
include('connection.php');

//Passdown de las variables del JS al backend
$email = $_GET['email'];
$user_pass = $_GET['user_pass'];

$stmt = $conn->prepare("SELECT * FROM tb_task WHERE email = ? AND user_pass = ?");

$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();
$task = $result->fetch_assoc();

echo json_encode($task);

$stmt->close();
$conn->close();
?>

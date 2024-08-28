<?php
include('connection.php');

// Check if an 'id' parameter is provided in the GET request
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Prepare the query to fetch the specific order by ID
    $stmt = $conn->prepare("SELECT * FROM pedido WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch the order details and return as JSON
    if ($result->num_rows > 0) {
        $pedido = $result->fetch_assoc();
        echo json_encode($pedido);
    } else {
        echo json_encode(array('error' => 'No se encontró el pedido.'));
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(array('error' => 'No se proporcionó un ID.'));
}

// Close the connection
$conn->close();

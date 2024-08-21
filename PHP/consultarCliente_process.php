<?php
    include('connection.php');

    //Passdown de las variables del JS al backend
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM clientes WHERE id = ?");

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();
    
    $clientes = $result->fetch_assoc();
    $formulario = '';

    if($clientes != null) {
            $formulario = 
            '<div class="form-group">'.
            '<label for="nombre">Nombre del cliente</label>'.
            '<input type="text" class="form-control" id="nombre" value="'.$clientes['nombre'].'">'.
        '</div>'.
        '<div class="form-group">'.
            '<label for="telefono">Numero telefónico del cliente</label>'.
            '<input type="text" class="form-control" id="telefono" value="'.$clientes['telefono'].'">'.
        '</div>'.
        '<div class="form-group">'.
            '<label for="direccion">Dirección del cliente</label>'.
            '<input type="text" class="form-control" id="telefono" value="'.$clientes['direccion'].'"></textarea>'.
        '</div>'.
        '<button type="submit" class="btn btn-primary">Modificar cliente</button>';
    
    } else {
        $formulario = 'null';
    }
    echo $formulario;

    $stmt->close();
    $conn->close();
?>

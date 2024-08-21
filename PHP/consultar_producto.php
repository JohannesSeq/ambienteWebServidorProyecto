<?php
    include('connection.php');

    //Passdown de las variables del JS al backend
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM productos WHERE id = ?");

    $stmt->bind_param("s", $id);
    $stmt->execute();

    $result = $stmt->get_result();
    //$productos = $result->fetch_assoc();
    
    $productos = $result->fetch_assoc();

    if($result != null) {
            $formulario =                     
            '<div class="form-group">'.
                '<label for="nombre_producto">Nombre del Producto</label>'.
                '<input type="text" class="form-control" id="nombre_producto" placeholder="'.$productos['nombre'] .'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="categoria">Categoría</label>'.
                '<input type="text" class="form-control" id="categoria" placeholder="'.$productos['categoria'].'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="cantidad">Cantidad</label>'.
                '<input type="text" class="form-control" id="cantidad" placeholder="'.$productos['cantidad'].'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="precio">Precio</label>'.
                '<input type="text" class="form-control" id="precio" placeholder="'.$productos['precio'].'">'.
            '</div>'.
            '<button type="submit" class="btn btn-primary">Modificar Producto</button>';

    
    } else {
        $formulario = '<p>El producto ingresado no existe.</p>';
    }
    echo $formulario;

    $stmt->close();
    $conn->close();
?>

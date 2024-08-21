<?php
    include('connection.php');

    //Passdown de las variables del JS al backend
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM productos WHERE id = ?");

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();
    //$productos = $result->fetch_assoc();
    
    $productos = $result->fetch_assoc();

    if($productos != null) {
            $formulario = 
            '<div class="form-group">'.
                '<label for="nombre_producto">Nombre del Producto</label>'.
                '<input type="text" class="form-control" id="nombre_producto" value="'.$productos['nombre'] .'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="categoria">Categoría</label>'.
                '<input type="text" class="form-control" id="categoria" value="'.$productos['categoria'].'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="cantidad">Cantidad</label>'.
                '<input type="text" class="form-control" id="cantidad" value="'.$productos['cantidad'].'">'.
            '</div>'.
            '<div class="form-group">'.
                '<label for="precio">Precio</label>'.
                '<input type="text" class="form-control" id="precio" value="'.$productos['precio'].'">'.
            '</div>'.
            '<button type="submit" class="btn btn-primary">Modificar Producto</button>';

    
    } else {
        $formulario = 'null';
    }
    echo $formulario;

    $stmt->close();
    $conn->close();
?>

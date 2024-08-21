<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante Playa Cacao</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/style.css">
</head>

<body>

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Restaurante Playa Cacao</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto" style="margin-right: 100px;">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="usuarioDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Usuario
                        </a>
                        <div class="dropdown-menu" aria-labelledby="usuarioDropdown">

                            <?php
                                if (isset($_COOKIE["email"]) && $_COOKIE["email"] != "") {
                                        echo '<a class="dropdown-item" href="index.php" id="logout">Cerrar Sesión</a>';
                                } else
                                    { 
                                        echo '<a class="dropdown-item" href="./pages/login.php" id="login">Iniciar Sesión</a>';
                                    }
                            ?>

                        </div>

                    </li>
                    <?php                 
                    if (isset($_COOKIE["email"]) && $_COOKIE["email"] != "") {
                        
                        if ($_COOKIE["rol"] == "Gerente" || $_COOKIE["rol"] == "vendedor"){

                            echo 
                            '<li class="nav-item dropdown">'.
                            '<a class="nav-link dropdown-toggle" href="#" id="facturasDropdown" role="button"'.
                                'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.
                                'Facturas'.
                            '</a>'.
                            '<div class="dropdown-menu" aria-labelledby="facturasDropdown">'.
                                '<a class="dropdown-item" href="#">Generar Factura</a>'.
                                '<a class="dropdown-item" href="#">Historial de Facturas</a>'.
                            '</div>'.
                        '</li>'.
                        '<li class="nav-item dropdown">'.
                        '<a class="nav-link dropdown-toggle" href="#" id="inventarioDropdown" role="button"'.
                            'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.
                            'Inventario'.
                        '</a>'.
                        '<div class="dropdown-menu" aria-labelledby="inventarioDropdown">'.
                            '<a class="dropdown-item" href="#">Agregar Inventario</a>'.
                            '<a class="dropdown-item" href="#">Modificar Productos</a>'.
                            '<a class="dropdown-item" href="#">Mostrar Inventario</a>'.
                            '<a class="dropdown-item" href="#">Dashboard de Inventario</a>'.
                            '<a class="dropdown-item" href="#">Gestión de Pedidos</a>'.
                        '</div>'.
                    '</li>'.
                    '<li class="nav-item dropdown">'.
                    '<a class="nav-link dropdown-toggle" href="#" id="pedidosDropdown" role="button"'.
                        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.
                        'Pedidos'.
                    '</a>'.
                    '<div class="dropdown-menu" aria-labelledby="pedidosDropdown">'.
                        '<a class="dropdown-item" href="#">Hacer Pedido</a>'.
                        '<a class="dropdown-item" href="#">Ver Pedidos</a>'.
                        '<a class="dropdown-item" href="#">Modificar Pedido</a>'.
                        '<a class="dropdown-item" href="#">Eliminar Pedido</a>'.
                    '</div>'.
                '</li>';
                    } else {

                        echo
                        '<li class="nav-item dropdown">'.
                        '<a class="nav-link dropdown-toggle" href="#" id="pedidosDropdown" role="button"'.
                            'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.
                            'Pedidos'.
                        '</a>'.
                        '<div class="dropdown-menu" aria-labelledby="pedidosDropdown">'.
                            '<a class="dropdown-item" href="#">Hacer Pedido</a>'.
                            '<a class="dropdown-item" href="#">Modificar Pedido</a>'.
                        '</div>'.
                    '</li>';
                    }


                        if ($_COOKIE["rol"] == "Gerente"){

                            echo
                                '<li class="nav-item dropdown">'.
                                '<a class="nav-link dropdown-toggle" href="#" id="PersonalDropdown" role="button"'.
                                    'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.
                                    'Administrar cuentas'.
                                '</a>'.
                                '<div class="dropdown-menu" aria-labelledby="PersonalDropdown">'.
                                    '<a class="dropdown-item" href="#">Agregar Usuario</a>'.
                                    '<a class="dropdown-item" href="#">Modificar Usuario</a>'.
                                    '<a class="dropdown-item" href="#">Mostrar Usuarios</a>'.
                                    '<a class="dropdown-item" href="#">Eliminar Usuario</a>'.
                                '</div>'.
                            '</li>';
                        }
                    }                 
                    ?>
                    
                </ul>
            </div>
        </nav>
    </header>
</body>

</html>

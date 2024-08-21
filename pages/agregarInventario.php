<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Inventario - Restaurante Playa Cacao</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/style.css">
    <style>
        .inventario-form {
            padding: 50px 0;
        }

        .inventario-form .container {
            max-width: 800px;
            margin: 0 auto;
        }

        footer {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            text-align: center;
        }

        footer a {
            color: #ffc107;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }
    </style>
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
                            <a class="dropdown-item" href="#" id="login">Iniciar Sesión</a>
                            <a class="dropdown-item" href="#" id="logout" style="display:none;">Cerrar Sesión</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="facturasDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Facturas
                        </a>
                        <div class="dropdown-menu" aria-labelledby="facturasDropdown">
                            <a class="dropdown-item" href="#">Generar Factura</a>
                            <a class="dropdown-item" href="#">Historial de Facturas</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="pedidosDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pedidos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="pedidosDropdown">
                            <a class="dropdown-item" href="#">Hacer Pedido</a>
                            <a class="dropdown-item" href="#">Ver Pedidos</a>
                            <a class="dropdown-item" href="#">Modificar Pedido</a>
                            <a class="dropdown-item" href="#">Eliminar Pedido</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="inventarioDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Inventario
                        </a>
                        <div class="dropdown-menu" aria-labelledby="inventarioDropdown">
                            <a class="dropdown-item" href="#">Agregar Inventario</a>
                            <a class="dropdown-item" href="#">Modificar Productos</a>
                            <a class="dropdown-item" href="#">Mostrar Inventario</a>
                            <a class="dropdown-item" href="#">Dashboard de Inventario</a>
                            <a class="dropdown-item" href="#">Gestión de Pedidos</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="container-fluid mt-3">
        <div class="jumbotron">
            <h1 class="display-4">Agregar Inventario</h1>
            <p class="lead">Añade nuevos productos a tu inventario.</p>
            <hr class="my-4">
        </div>
    </div>

    <section class="inventario-form">
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="producto">Nombre del Producto</label>
                    <input type="text" class="form-control" id="producto" placeholder="Ingresa el nombre del producto">
                </div>
                <div class="form-group">
                    <label for="categoria">Categoría</label>
                    <input type="text" class="form-control" id="categoria" placeholder="Ingresa la categoría del producto">
                </div>
                <div class="form-group">
                    <label for="cantidad">Cantidad</label>
                    <input type="number" class="form-control" id="cantidad" placeholder="Ingresa la cantidad">
                </div>
                <div class="form-group">
                    <label for="precio">Precio</label>
                    <input type="number" class="form-control" id="precio" placeholder="Ingresa el precio">
                </div>
                <button type="submit" class="btn btn-primary">Agregar Producto</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Restaurante Playa Cacao. Todos los derechos reservados.</p>
            <p>
                <a href="#">Aviso de Privacidad</a> |
                <a href="#">Términos de Servicio</a> |
                <a href="#">Contáctanos</a>
            </p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Pedido - Restaurante Playa Cacao</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style/style.css">
    <style>
        .modificar-pedido-form {
            padding: 50px 0;
        }
        .modificar-pedido-form .container {
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
    <?php include_once 'header.php'; ?>

    <div class="container-fluid mt-3">
        <div class="jumbotron">
            <h1 class="display-4">Modificar Pedidos</h1>
            <p class="lead">Actualiza los detalles de los pedidos existentes.</p>
            <hr class="my-4">
        </div>
    </div>

    <section class="modificar-pedido-form">
        <div class="container">
            <table id="pedidosTable" class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Detalles del Pedido</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be populated dynamically by JavaScript -->
                </tbody>
            </table>
        </div>
    </section>

    <?php include_once 'footer.php'; ?>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../script/pedidoController.js"></script> <!-- Ensure this script contains logic to fetch and update data -->
</body>
</html>

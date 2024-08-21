<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generar Factura - Restaurante Playa Cacao</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/style.css">
    <style>
        .factura-form {
            padding: 50px 0;
        }

        .factura-form .container {
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
            <h1 class="display-4">Generar Factura</h1>
            <p class="lead">Crea una factura para tu pedido.</p>
            <hr class="my-4">
        </div>
    </div>

    <section class="factura-form">
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="nombreCliente">Nombre del Cliente</label>
                    <input type="text" class="form-control" id="nombreCliente" placeholder="Ingresa el nombre del cliente">
                </div>
                <div class="form-group">
                    <label for="direccionCliente">Dirección del Cliente</label>
                    <input type="text" class="form-control" id="direccionCliente" placeholder="Ingresa la dirección del cliente">
                </div>
                <div class="form-group">
                    <label for="telefonoCliente">Teléfono del Cliente</label>
                    <input type="tel" class="form-control" id="telefonoCliente" placeholder="Ingresa el número de teléfono del cliente">
                </div>
                <div class="form-group">
                    <label for="detallesPedido">Detalles del Pedido</label>
                    <textarea class="form-control" id="detallesPedido" rows="5" placeholder="Describe los detalles del pedido"></textarea>
                </div>
                <div class="form-group">
                    <label for="total">Total a Pagar</label>
                    <input type="number" class="form-control" id="total" placeholder="Ingresa el total a pagar">
                </div>
                <button type="submit" class="btn btn-primary">Generar Factura</button>
            </form>
        </div>
    </section>

    <?php include_once 'footer.php'; ?>   

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>

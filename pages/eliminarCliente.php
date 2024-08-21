<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eliminar cliente - Restaurante Playa Cacao</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="../style/style.css">
        <style>
            .cliente-form {
                padding: 50px 0;
            }

            .cliente-form .container {
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
                <h1 class="display-4">Eliminar un cliente</h1>
                <p class="lead">Elimine un cliente desde aca.</p>
                <hr class="my-4">
            </div>
        </div>


        <section class="cliente-form">

                <div class="container">
                    <form id="Eliminar_Cliente_Form">

                        <div class="form-group">
                            <label for="id_cliente">ID del cliente</label>
                            <input type="text" class="form-control" id="id_cliente" placeholder="Ingresa el id del cliente a eliminar.">
                        </div>
                        <button type="submit" class="btn btn-primary">Eliminar cliente</button>
                    </form>
                    <p id="error_text" class ="Error_Message"> </p>
                </div>
                
            </section>

        <?php include_once 'footer.php'; ?>

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="../script/cookie_management.js"></script>
        <script src="../script/eliminar_cliente.js"></script>

    </body>

</html>

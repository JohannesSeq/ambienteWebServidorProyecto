//import { dispararAlertaExito,dispararAlertaError } from './script.js';

$(document).ready(function () {
    fetchPedidos();

    $('#backToPedidoList').click(function () {
        $('.factura-form').hide();
        $('.pedido-list').show();
    });

    $('#pedidoList').on('click', '.btn-seleccionar', function () {
        var pedidoId = $(this).data('id');
        $('#pedidoID').val(pedidoId);

        // Fetch the selected pedido details and populate the form
        $.ajax({
            url: '../PHP/consultarPedidoPorID_Process.php',
            method: 'GET',
            data: { id: pedidoId },
            success: function (pedido) {
                pedido = JSON.parse(pedido);
                $('#nombreCliente').val(pedido.Nombre_cliente);
                $('#direccionCliente').val(pedido.Direcion_entrega);
                $('#telefonoCliente').val(pedido.telefono);
                $('#detallesPedido').val(pedido.Detalle_pedido);

                $('.pedido-list').hide();
                $('.factura-form').show();
            },
            error: function (error) {
                console.error('Error fetching pedido details:', error);
            }
        });
    });

    $('#formAgregarFactura').submit(function (e) {
        e.preventDefault();
        let pedidoID = $('#pedidoID').val();
        let montoTotal = $('#montoTotal').val();
        alert(pedidoID);
        $.ajax({
            type: "POST",
            url: "../php/AgregarFactura_process.php",
            data: {
                pedidoID: pedidoID,
                montoTotal: montoTotal
            },
            success: function (response) {
                alert(response);
            }
        });
    });
});

function fetchPedidos() {
    $.ajax({
        url: '../PHP/consultarPedidos_Process.php',
        method: 'GET',
        success: function (data) {
            var pedidos = JSON.parse(data);
            var tbody = $('#pedidoList');
            tbody.empty();

            pedidos.forEach(function (pedido) {
                if (pedido.estado !== 'completado') { // Only display pedidos that are not 'completado'
                    var row = `<tr>
                        <td>${pedido.id}</td>
                        <td>${pedido.Nombre_cliente}</td>
                        <td>${pedido.Detalle_pedido}</td>
                        <td><button class="btn btn-primary btn-seleccionar" data-id="${pedido.id}">Seleccionar</button></td>
                    </tr>`;
                    tbody.append(row);
                }
            });
        },
        error: function (error) {
            console.error('Error fetching pedidos:', error);
        }
    });
}

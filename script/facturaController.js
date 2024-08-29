//import { dispararAlertaExito,dispararAlertaError } from './script.js';

$(document).ready(function () {
    fetchPedidos();
    fetchFacturas(); // This needs to be outside of fetchPedidos

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

function fetchFacturas() {
    $.ajax({
        url: '../PHP/consultarFactura_Process.php',
        method: 'GET',
        success: function (data) {
            var facturas = JSON.parse(data);
            var tbody = $('#facturaList');
            tbody.empty();

            facturas.forEach(function (factura) {
                var row = `<tr>
                    <td>${factura.factura_id}</td>
                    <td>${factura.factura_fecha}</td>
                    <td>${factura.factura_monto}</td>
                    <td>${factura.pedido_cliente}</td>
                    <td>${factura.pedido_direccion}</td>
                    <td>${factura.pedido_telefono}</td>
                    <td>${factura.pedido_detalle}</td>
                    <td><button class="btn btn-success btn-download-pdf" data-id="${factura.factura_id}">Download PDF</button></td>
                </tr>`;
                tbody.append(row);
            });

            // Add event listener for each download button
            $('.btn-download-pdf').on('click', function() {
                var facturaId = $(this).data('id');
                var selectedFactura = facturas.find(factura => factura.factura_id == facturaId);
                downloadFacturaPDF(selectedFactura);
            });
        },
        error: function (error) {
            console.error('Error fetching facturas:', error);
        }
    });
}

function downloadFacturaPDF(factura) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Factura ID: " + factura.factura_id, 10, 10);
    doc.text("Fecha: " + factura.factura_fecha, 10, 20);
    doc.text("Monto Total: " + factura.factura_monto, 10, 30);
    doc.text("Cliente: " + factura.pedido_cliente, 10, 40);
    doc.text("Dirección: " + factura.pedido_direccion, 10, 50);
    doc.text("Teléfono: " + factura.pedido_telefono, 10, 60);
    doc.text("Detalle Pedido: " + factura.pedido_detalle, 10, 70);

    doc.save(`factura_${factura.factura_id}.pdf`);
}


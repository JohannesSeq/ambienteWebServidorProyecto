$(document).ready(function () {
    $('#Agregar_Pedido_Form').submit(function (e) {

        e.preventDefault();
        let nombre = $('#nombre').val();
        let direccion = $('#direccion').val();
        let telefono = $('#telefono').val();
        let Detallespedido = $('#pedido').val();
        $.ajax({
            url: '../php/AgregarPedido_Process.php',
            method: 'POST',

            data: {
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                Detallespedido: Detallespedido
            },

            success: function (response) {
                dispararAlertaExito("Pedido agregado correctamente").then(() => {       
                        
                });
                location.reload();  
            }
        });
    });

    $(document).on('click', '.btn-modify', function () {
        var pedidoId = $(this).data('id');

        $.ajax({
            url: '../PHP/consultarPedidoPorID_Process.php', // Use the new process file
            method: 'GET',
            data: { id: pedidoId },
            success: function (pedido) {
                var pedido = JSON.parse(pedido);
                if (pedido.error) {
                    alert(pedido.error);
                } else {
                    $('#modifyOrderModal input[name="nombre"]').val(pedido.Nombre_cliente);
                    $('#modifyOrderModal input[name="direccion"]').val(pedido.Direcion_entrega);
                    $('#modifyOrderModal input[name="telefono"]').val(pedido.telefono);
                    $('#modifyOrderModal textarea[name="detalles"]').val(pedido.Detalle_pedido);
                    $('#modifyOrderModal select[name="estado"]').val(pedido.estado);
                    $('#modifyOrderModal').data('id', pedidoId);

                    $('#modifyOrderModal').modal('show');
                }
            },
            error: function (error) {
                console.error('Error fetching order details:', error);
            }
        });
    });

    $('#modifyOrderForm').on('submit', function (e) {
        e.preventDefault();

        var pedidoId = $('#modifyOrderModal').data('id');
        var formData = $(this).serialize() + '&id=' + pedidoId;  

        $.ajax({
            url: '../PHP/ModificarPedido_Process.php',
            method: 'POST',
            data: formData,
            success: function (response) {
                if (response.includes("éxito")) {
                    alert('Pedido actualizado correctamente');
                    $('#modifyOrderModal').modal('hide');
                    fetchOrders(); 
                } else {
                    alert('Error actualizando el pedido');
                    console.error(response);
                    alert(response);
                }
            },
            error: function (error) {
                console.error('Error updating order:', error);
            }
        });
    });

    $(document).on('click', '.btn-delete', function () {
        var pedidoId = $(this).data('id');

        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '../PHP/eliminarPedido_Process.php',
                    method: 'POST',
                    data: { id: pedidoId },
                    success: function (response) {
                        if (response.includes("éxito")) {
                            Swal.fire('Eliminado!', 'El pedido ha sido eliminado.', 'success');
                            fetchOrders();
                        } else {
                            Swal.fire('Error', 'No se pudo eliminar el pedido.', 'error');
                        }
                    },
                    error: function (error) {
                        console.error('Error deleting order:', error);
                    }
                });
            }
        });
    });
});


function fetchOrders() {
    $.ajax({
        url: '../PHP/consultarPedidos_Process.php',
        method: 'GET',
        success: function (data) {
            var pedidos = JSON.parse(data);
            var tbody = $('#pedidosTable tbody');
            tbody.empty();

            pedidos.forEach(function (pedido) {
                var row = `<tr>
                    <td>${pedido.id}</td>
                    <td>${pedido.Nombre_cliente}</td>
                    <td>${pedido.Direcion_entrega}</td>
                    <td>${pedido.telefono}</td>
                    <td>${pedido.Detalle_pedido}</td>
                    <td>${pedido.estado}</td>
                    <td>
                        <button class="btn btn-primary btn-modify" data-id="${pedido.id}">Modificar</button>
                        <button class="btn btn-danger btn-delete" data-id="${pedido.id}">Eliminar</button>
                    </td>
                </tr>`;
                tbody.append(row);
            });
        },
        error: function (error) {
            console.error('Error fetching orders:', error);
        }
    });
}

function dispararAlertaExito(mensaje) {
    Swal.fire({
        icon: "success",
        title: mensaje,
        confirmButtonText: 'Ok'
    }).then(() => {
        location.reload();  
    });
}

function dispararAlertaError(mensaje) {
    Swal.fire({
        icon: "error",
        title: mensaje,
        confirmButtonText: 'Ok'
      }).then(() => {
        location.reload();
    });
}
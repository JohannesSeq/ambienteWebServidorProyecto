$(document).ready(function () {
    // Manejador del evento de envío del formulario de agregar pedido
    $('#Agregar_Pedido_Form').submit(function (e) {

        e.preventDefault();// Previene el comportamiento por defecto del formulario (recarga de página)

        // Obtiene los valores de los campos del formulario
        let nombre = $('#nombre').val();
        let direccion = $('#direccion').val();
        let telefono = $('#telefono').val();
        let Detallespedido = $('#pedido').val();

        // Realiza una petición AJAX para enviar los datos del nuevo pedido a AgregarPedido_Process.php
        $.ajax({
            url: '../php/AgregarPedido_Process.php', // URL del archivo PHP que procesará la solicitud
            method: 'POST', // Método HTTP para enviar los datos

            data: {
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                Detallespedido: Detallespedido
            },

            success: function (response) {
                // Muestra una alerta de éxito y recarga la página
                dispararAlertaExito("Pedido agregado correctamente").then(() => {       
                        
                });
                location.reload();  
            }
        });
    });

    // Manejador para el botón de modificar pedido
    $(document).on('click', '.btn-modify', function () {
        var pedidoId = $(this).data('id'); // Obtiene el ID del pedido a modificar
        
        // Realiza una petición AJAX para obtener los datos del pedido según su ID
        $.ajax({
            url: '../PHP/consultarPedidoPorID_Process.php', // URL del archivo PHP que devolverá los detalles del pedido
            method: 'GET', // Método HTTP para solicitar los datos
            data: { id: pedidoId }, // Envía el ID del pedido como parámetro
            
            success: function (pedido) {
                var pedido = JSON.parse(pedido); // Parse la respuesta JSON
                if (pedido.error) {
                    alert(pedido.error); // Muestra un mensaje de error si lo hay
                } else {
                    // Rellena el formulario modal con los datos del pedido para su modificación
                    $('#modifyOrderModal input[name="nombre"]').val(pedido.Nombre_cliente);
                    $('#modifyOrderModal input[name="direccion"]').val(pedido.Direcion_entrega);
                    $('#modifyOrderModal input[name="telefono"]').val(pedido.telefono);
                    $('#modifyOrderModal textarea[name="detalles"]').val(pedido.Detalle_pedido);
                    $('#modifyOrderModal select[name="estado"]').val(pedido.estado); 
                    $('#modifyOrderModal').data('id', pedidoId); // Guarda el ID del pedido en el modal

                    $('#modifyOrderModal').modal('show'); // Muestra el modal para modificar el pedido
                }
            },
            error: function (error) {
                console.error('Error fetching order details:', error); // Muestra el error en la consola
            }
        });
    });

    // Manejador para el envío del formulario de modificar pedido
    $('#modifyOrderForm').on('submit', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        var pedidoId = $('#modifyOrderModal').data('id');  // Obtiene el ID del pedido a modificar
        var formData = $(this).serialize() + '&id=' + pedidoId;  // Serializa los datos del formulario y añade el ID del pedido

        // Realiza una petición AJAX para actualizar los datos del pedido
        $.ajax({
            url: '../PHP/ModificarPedido_Process.php', // URL del archivo PHP que procesará la solicitud de actualización
            method: 'POST', // Método HTTP para enviar los datos actualizados
            data: formData, // Envía los datos del formulario
            success: function (response) {
                if (response.includes("éxito")) {
                    alert('Pedido actualizado correctamente'); // Muestra un mensaje de éxito
                    $('#modifyOrderModal').modal('hide'); // Oculta el modal
                    fetchOrders();  // Recarga la lista de pedidos
                } else {
                    alert('Error actualizando el pedido');
                    console.error(response);
                    alert(response); // Muestra la respuesta en un alert
                }
            },
            error: function (error) {
                console.error('Error updating order:', error);
            }
        });
    });

    // Manejador para el botón de eliminar pedido
    $(document).on('click', '.btn-delete', function () {
        var pedidoId = $(this).data('id'); // Obtiene el ID del pedido a eliminar

        // Muestra una alerta de confirmación usando SweetAlert2
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
                // Si el usuario confirma, realiza una petición AJAX para eliminar el pedido
                $.ajax({
                    url: '../PHP/eliminarPedido_Process.php', // URL del archivo PHP que procesará la eliminación
                    method: 'POST', // Método HTTP para enviar la solicitud de eliminación
                    data: { id: pedidoId }, // Envía el ID del pedido como parámetro
                    success: function (response) {
                        if (response.includes("éxito")) {
                            Swal.fire('Eliminado!', 'El pedido ha sido eliminado.', 'success');
                            fetchOrders(); // Recarga la lista de pedidos
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

// Función para cargar la lista de pedidos desde el servidor
function fetchOrders() {
    $.ajax({
        url: '../PHP/consultarPedidos_Process.php', // URL del archivo PHP que devolverá la lista de pedidos
        method: 'GET', // Método HTTP para solicitar los datos
        success: function (data) {
            var pedidos = JSON.parse(data); // Parse la respuesta JSON
            var tbody = $('#pedidosTable tbody');
            tbody.empty(); // Limpia la tabla antes de añadir nuevos datos

            pedidos.forEach(function (pedido) {
                // Construye una fila de la tabla con los datos del pedid
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
                tbody.append(row); // Añade la fila a la tabla
            });
        },
        error: function (error) {
            console.error('Error fetching orders:', error); // Muestra el error en la consola
        }
    });
}
// Función para mostrar una alerta de éxito usando SweetAlert2
function dispararAlertaExito(mensaje) {
    Swal.fire({
        icon: "success", // Icono de éxito
        title: mensaje, // Título de la alerta
        confirmButtonText: 'Ok' // Texto del botón de confirmación
    }).then(() => {
        location.reload();  // Recarga la página después de cerrar la alerta
    });
}
// Función para mostrar una alerta de error usando SweetAlert2
function dispararAlertaError(mensaje) {
    Swal.fire({
        icon: "error", // Icono de error
        title: mensaje,
        confirmButtonText: 'Ok' // Texto del botón de confirmación
      }).then(() => {
        location.reload(); // Recarga la página después de cerrar la alerta
    });
}

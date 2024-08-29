$(document).ready(function () {
    // Llama a la función para cargar los usuarios al cargar la página
    fetchUsuarios();
 // Manejador del evento de envío del formulario de agregar usuario
    $('#Agregar_Usuario_Form').submit(function (e) {
        e.preventDefault();// Previene el comportamiento por defecto del formulario (recarga de página)

// Obtiene los valores de los campos del formulario
        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let rol = $('#rol').val();
        let password = $('#password').val();
// Realiza una petición AJAX para enviar los datos a AgregarUsuario_Process.php
        $.ajax({
            url: '../PHP/AgregarUsuario_Process.php',
            method: 'POST',
            data: {
                nombre: nombre,
                email: email,
                rol: rol,
                password: password
            },
            success: function (response) {
                alert("Usuario registrado correctamente");
                console.log(response)
                location.reload();
            },
            error: function (error) {
                console.error("Error registrando usuario:", error);// Muestra el error en la consola
            }
        });
    });
// Manejador para el botón de modificar usuario
    $(document).on('click', '.btn-modify', function () {
        var usuarioId = $(this).data('id'); // Obtiene el ID del usuario a modificar
// Realiza una petición AJAX para obtener los datos del usuario según su ID
        $.ajax({
            url: '../PHP/consultarUsuarioPorID_Process.php',
            method: 'GET',
            data: { id: usuarioId },
            success: function (usuario) {
                var usuario = JSON.parse(usuario); // Parse la respuesta JSON
                if (usuario.error) {
                    alert(usuario.error); // Muestra un error si la respuesta contiene uno
                } else { // Rellena el formulario modal con los datos del usuario
                    $('#modifyUserModal input[name="nombre"]').val(usuario.nombre);
                    $('#modifyUserModal input[name="email"]').val(usuario.correo);
                    $('#modifyUserModal').data('id', usuarioId);
                    $('#modifyUserModal').modal('show'); // Muestra el modal para modificar usuario
                }
            },
            error: function (error) {
                console.error('Error fetching user details:', error); // Muestra el error en la consola
            }
        });
    });
// Manejador para el envío del formulario de modificar usuario
    $('#modifyUserForm').on('submit', function (e) {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        var usuarioId = $('#modifyUserModal').data('id'); // Obtiene el ID del usuario a modificar
        var formData = $(this).serialize() + '&id=' + usuarioId; // Serializa los datos del formulario y añade el ID

        // Realiza una petición AJAX para actualizar los datos del usuario
        $.ajax({
            url: '../PHP/ModificarUsuario_Process.php',
            method: 'POST',
            data: formData,
            success: function (response) {
                if (response.includes("éxito")) {
                    alert('Usuario actualizado correctamente'); // Muestra un mensaje de éxito
                    $('#modifyUserModal').modal('hide'); // Oculta el modal
                    fetchUsuarios(); // Recarga la lista de usuarios
                } else {
                    alert('Error actualizando el usuario'); // Muestra un mensaje de error
                    console.error(response); // Muestra el error en la consola
                    alert(response); // Muestra la respuesta en un alert
                }
            },
            error: function (error) {
                console.error('Error updating user:', error);
            }
        });
    });
// Manejador para el botón de eliminar usuario
    $(document).on('click', '.btn-delete', function () {
        var usuarioId = $(this).data('id');// Obtiene el ID del usuario a eliminar

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
                // Si el usuario confirma, realiza una petición AJAX para eliminar el usuario
                $.ajax({
                    url: '../PHP/eliminarUsuario_Process.php',
                    method: 'POST',
                    data: { id: usuarioId },
                    success: function (response) {
                        if (response.includes("éxito")) {
                            Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
                            fetchUsuarios(); // Recarga la lista de usuarios
                        } else {
                            Swal.fire('Error', 'No se pudo eliminar el usuario.', 'error');
                        }
                    },
                    error: function (error) {
                        console.error('Error deleting user:', error);
                    }
                });
            }
        });
    });
});
// Función para cargar la lista de usuarios desde el servidor
function fetchUsuarios() {
    $.ajax({
        url: '../PHP/consultarUsuarios_Process.php',
        method: 'GET',
        success: function (data) {
            var usuarios = JSON.parse(data); // Parse la respuesta JSON
            var tbody = $('#usuariosTable tbody');
            tbody.empty(); // Limpia la tabla antes de añadir nuevos datos

            usuarios.forEach(function (usuario) {
                var row = `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.correo}</td>
                    <td>${usuario.rol}</td> <!-- Display role -->
                    <td>
                        <button class="btn btn-primary btn-modify" data-id="${usuario.id}">Modificar</button>
                        <button class="btn btn-danger btn-delete" data-id="${usuario.id}">Eliminar</button>
                    </td>
                </tr>`;
                tbody.append(row); // Añade la fila a la tabla
            });
        },
        error: function (error) {
            console.error('Error fetching users:', error); // Muestra el error en la consola
        }
    });
}

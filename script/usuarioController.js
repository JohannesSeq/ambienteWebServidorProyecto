$(document).ready(function () {
    fetchUsuarios();

    $('#Agregar_Usuario_Form').submit(function (e) {
        e.preventDefault();

        let nombre = $('#nombre').val();
        let email = $('#email').val();
        let rol = $('#rol').val();
        let password = $('#password').val();

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
                location.reload();
            },
            error: function (error) {
                console.error("Error registrando usuario:", error);
            }
        });
    });

    $(document).on('click', '.btn-modify', function () {
        var usuarioId = $(this).data('id');

        $.ajax({
            url: '../PHP/consultarUsuarioPorID_Process.php',
            method: 'GET',
            data: { id: usuarioId },
            success: function (usuario) {
                var usuario = JSON.parse(usuario);
                if (usuario.error) {
                    alert(usuario.error);
                } else {
                    $('#modifyUserModal input[name="nombre"]').val(usuario.nombre);
                    $('#modifyUserModal input[name="email"]').val(usuario.correo);
                    $('#modifyUserModal').data('id', usuarioId);
                    $('#modifyUserModal').modal('show');
                }
            },
            error: function (error) {
                console.error('Error fetching user details:', error);
            }
        });
    });

    $('#modifyUserForm').on('submit', function (e) {
        e.preventDefault();

        var usuarioId = $('#modifyUserModal').data('id');
        var formData = $(this).serialize() + '&id=' + usuarioId;

        $.ajax({
            url: '../PHP/ModificarUsuario_Process.php',
            method: 'POST',
            data: formData,
            success: function (response) {
                if (response.includes("éxito")) {
                    alert('Usuario actualizado correctamente');
                    $('#modifyUserModal').modal('hide');
                    fetchUsuarios();
                } else {
                    alert('Error actualizando el usuario');
                    console.error(response);
                    alert(response);
                }
            },
            error: function (error) {
                console.error('Error updating user:', error);
            }
        });
    });

    $(document).on('click', '.btn-delete', function () {
        var usuarioId = $(this).data('id');

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
                    url: '../PHP/eliminarUsuario_Process.php',
                    method: 'POST',
                    data: { id: usuarioId },
                    success: function (response) {
                        if (response.includes("éxito")) {
                            Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
                            fetchUsuarios();
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

function fetchUsuarios() {
    $.ajax({
        url: '../PHP/consultarUsuarios_Process.php',
        method: 'GET',
        success: function (data) {
            var usuarios = JSON.parse(data);
            var tbody = $('#usuariosTable tbody');
            tbody.empty();

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
                tbody.append(row);
            });
        },
        error: function (error) {
            console.error('Error fetching users:', error);
        }
    });
}

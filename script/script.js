export function dispararAlertaExito(mensaje) {
    Swal.fire({
        icon: "success",
        title: mensaje,
        confirmButtonText: 'Ok'
    }).then(() => {
        location.reload();
    });
}

export function dispararAlertaError(mensaje) {
    Swal.fire({
        icon: "error",
        title: mensaje,
        confirmButtonText: 'Ok'
      }).then(() => {
        location.reload();
    });
}
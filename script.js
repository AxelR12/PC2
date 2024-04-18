function login() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Reemplace estos datos con sus propias credenciales de usuario.
    var profesor_usuario = 'profesor';
    var profesor_contrasena = 'contrasena_profesor';
    var alumno_usuario = 'alumno';
    var alumno_contrasena = 'contrasena_alumno';

    if (usuario === profesor_usuario && contrasena === profesor_contrasena) {
        window.location.href = 'dashboard_profe.html';
    } else if (usuario === alumno_usuario && contrasena === alumno_contrasena) {
        window.location.href = 'dashboard_alumno.html';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
}

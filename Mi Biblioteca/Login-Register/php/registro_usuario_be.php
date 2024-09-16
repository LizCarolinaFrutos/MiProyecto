<?php
session_start();
include 'conexion_be.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $clave_admin = $_POST['clave_admin'];

    // Mantener los datos en caso de error
    $_SESSION['nombre_completo_value'] = $nombre_completo;
    $_SESSION['correo_value'] = $correo;
    $_SESSION['usuario_value'] = $usuario;
    $_SESSION['contrasena_value'] = $contrasena;

    if ($clave_admin == 'admin123') {
        $contrasena_hash = hash('sha512', $contrasena);

        $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");
        if (mysqli_num_rows($verificar_correo) > 0) {
            $_SESSION['error_message'] = "Este correo ya está registrado. Intenta con otro diferente.";
            header("Location: ../index.php");
            exit();
        }

        $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");
        if (mysqli_num_rows($verificar_usuario) > 0) {
            $_SESSION['error_message'] = "Este usuario ya está registrado. Intenta con otro diferente.";
            header("Location: ../index.php");
            exit();
        }

        $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena) VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena_hash')";
        $ejecutar = mysqli_query($conexion, $query);

        if ($ejecutar) {
            $_SESSION['registro_success'] = "El usuario se registró exitosamente.";
            // Limpiar valores de campos después del registro exitoso
            unset($_SESSION['nombre_completo_value']);
            unset($_SESSION['correo_value']);
            unset($_SESSION['usuario_value']);
            unset($_SESSION['contrasena_value']);
        } else {
            $_SESSION['error_message'] = "Error al registrar el usuario.";
        }
    } else {
        $_SESSION['error_message'] = "Clave de administrador incorrecta.";
    }

    // En cualquier caso, redirigir de vuelta al formulario de registro
    header("Location: ../index.php");
    exit();
} else {
    header("Location: ../index.php");
    exit();
}
?>

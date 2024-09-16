<?php 
session_start();

// Si el usuario ya ha iniciado sesión, redirigirlo a la página de bienvenida
if(isset($_SESSION['usuario'])){
    header("location: bienvenida.php");
    exit();
}

// Capturar mensajes de la sesión si existen
$error_message = '';
if (isset($_SESSION['error_message'])) {
    $error_message = $_SESSION['error_message'];
    unset($_SESSION['error_message']);
}

$success_message = '';
if (isset($_SESSION['registro_success'])) {
    $success_message = $_SESSION['registro_success'];
    unset($_SESSION['registro_success']);
}

// Mantener los valores introducidos en caso de error
$nombre_completo_value = '';
if (isset($_SESSION['nombre_completo_value'])) {
    $nombre_completo_value = $_SESSION['nombre_completo_value'];
    unset($_SESSION['nombre_completo_value']);
}

$correo_value = '';
if (isset($_SESSION['correo_value'])) {
    $correo_value = $_SESSION['correo_value'];
    unset($_SESSION['correo_value']);
}

$usuario_value = '';
if (isset($_SESSION['usuario_value'])) {
    $usuario_value = $_SESSION['usuario_value'];
    unset($_SESSION['usuario_value']);
}

$contrasena_value = '';
if (isset($_SESSION['contrasena_value'])) {
    $contrasena_value = $_SESSION['contrasena_value'];
    unset($_SESSION['contrasena_value']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>
    <section>
        <main>
        <div class="contenedor__todo">
                <!-- Caja trasera para mostrar alternador de formularios -->
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Iniciar sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>Registro de Administrador</h3>
                        <p>Solicita el registro a un administrador</p>
                        <button id="btn__registrarse">Registrarse</button>
                    </div>
                </div>
                 <!-- Formularios de login y registro -->
                <div class="contenedor__login-register">
                    <!-- Formulario de inicio de sesión -->
                    <form action="php/login_usuario_be.php" method="POST" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electrónico" name="correo" autocomplete="username" required value="<?php echo $correo_value; ?>">
                        <input type="password" placeholder="Contraseña" name="contrasena" autocomplete="new-password" required>
                        <?php if ($error_message): ?>
                            <span id="error-message" style="color: red;"><?php echo $error_message; ?></span><br>
                        <?php else: ?>
                            <span id="error-message" style="color: red; display: none;"></span><br>
                        <?php endif; ?>
                        <button type="submit">Entrar</button>
                    </form>
                     <!-- Formulario de registro -->
                    <form action="php/registro_usuario_be.php" method="POST" class="formulario__register">
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre Completo" name="nombre_completo" required value="<?php echo $nombre_completo_value; ?>">
                        <input type="email" placeholder="Correo Electrónico" name="correo" required value="<?php echo $correo_value; ?>">
                        <input type="text" placeholder="Usuario" name="usuario" autocomplete="username" required value="<?php echo $usuario_value; ?>">
                        <input type="password" placeholder="Contraseña" name="contrasena" required value="<?php echo $contrasena_value; ?>">
                        <input type="password" placeholder="Clave de Administrador" name="clave_admin" autocomplete="new-password" required>
                         <!-- Mostrar mensaje de éxito si existe -->
                        <?php if ($success_message): ?>
                            <span id="success-message" style="color: green;"><?php echo $success_message; ?></span><br>
                        <?php endif; ?>
                        <!-- Mostrar mensaje de error si existe -->
                        <?php if ($error_message): ?>
                            <span id="error-message" style="color: red;"><?php echo $error_message; ?></span><br>
                        <?php endif; ?>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </main>
    </section>
    <script src="assets/js/script.js"></script>
</body>
</html>

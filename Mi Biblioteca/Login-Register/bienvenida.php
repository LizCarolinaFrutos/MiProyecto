<?php

session_start();

if(!isset($_SESSION['usuario'])){
    echo '
        <script>
            alert("Por favor debes iniciar sesión para poder entrar a la pág.");
            window.location = "index.php";
        </script>
    ';
    session_destroy();
    die();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida</title>
</head>
<body>
    <h1>Bienvenida a Tripplaner</h1>
    <a href="php/cerrar_sesion.php">Cerrar Sesión</a>
</body>
</html>
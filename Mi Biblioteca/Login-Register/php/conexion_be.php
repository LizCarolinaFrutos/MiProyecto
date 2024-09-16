<?php
 
    //Conexion a la base de datos: nos da la posibilidad de almacenar datos a cualquiera de las tablas 

    $conexion = mysqli_connect("localhost", "root", "", "login_register_db"); //para crear una variable hay que colocar el signo $.
    //Nos concetamos a una BD local (Xampp)

    /*
    if($conexion){
        echo 'Conectado exitosamente a la Base de Datos';
    }
    else{
        echo 'No se ha podido conectar a la Base de Datos';
    }
    */

?>
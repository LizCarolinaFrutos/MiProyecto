-- Crear base de datos
CREATE DATABASE login_register_db;

-- Usar la base de datos creada
USE login_register_db;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    usuario VARCHAR(255) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'user') DEFAULT 'user' NOT NULL
);

-- Insertar un usuario administrador inicial
INSERT INTO usuarios (nombre_completo, correo, usuario, contrasena, rol) VALUES 
('Admin', 'admin@admin.com', 'admin', SHA2('admin123', 512), 'admin');


1. Crear la base de datos: Se crea una base de datos llamada login_register_db.
2. Usar la base de datos: Se selecciona la base de datos recién creada para trabajar con ella.
3. Crear tabla de usuarios: Se crea una tabla llamada usuarios con las siguientes columnas:
    * id: Un identificador único para cada usuario (clave primaria, autoincremental).
    * nombre_completo: El nombre completo del usuario.
    * correo: El correo electrónico del usuario (único).
    * usuario: El nombre de usuario (único).
    * contrasena: La contraseña del usuario (almacenada encriptada con SHA-512).
    * rol: El rol del usuario, que puede ser 'admin' (administrador) o 'user' (usuario normal), con 'user' como valor predeterminado.
4. Insertar un usuario administrador inicial: Se inserta un usuario administrador con el nombre de usuario 'admin' y la contraseña 'admin123' 
(encriptada con SHA-512) para que puedas tener un acceso administrativo inicial.
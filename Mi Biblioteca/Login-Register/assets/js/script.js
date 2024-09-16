document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

// Declaración de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var errorMessage = document.getElementById('error-message');

function anchoPagina() {
    console.log("Función anchoPagina() llamada."); // Verificar si la función se está llamando correctamente

    console.log("Ancho de la ventana:", window.innerWidth); // Verificar el ancho de la ventana

    if (window.innerWidth > 850) {
        console.log("Ventana más ancha que 850px. Mostrar elementos necesarios.");
        // Lógica para mostrar elementos necesarios
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        console.log("Ventana más estrecha que 850px. Ocultar elementos innecesarios.");
        // Lógica para ocultar elementos innecesarios
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

// Agregar un evento de cambio de tamaño de ventana para llamar a la función anchoPagina() cuando sea necesario
window.addEventListener("resize", function() {
    console.log("Evento de cambio de tamaño de ventana detectado.");
    anchoPagina(); // Llamar a la función anchoPagina() cuando cambie el tamaño de la ventana
});

// Llamar a la función anchoPagina() al cargar la página para asegurarse de que los elementos se muestren correctamente inicialmente

anchoPagina();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

formulario_login.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const formData = new FormData(formulario_login);

    fetch('php/login_usuario_be.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirigir a la página de bienvenida si el inicio de sesión fue exitoso
            window.location.href = 'bienvenida.php';
        } else {
            // Mostrar mensaje de error debajo del campo de contraseña
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Enfocar automáticamente en el campo del correo en el formulario de inicio de sesión
    var correoInput = document.querySelector('.formulario__login input[name="correo"]');
    if (correoInput) {
        correoInput.focus();
    }
});
/*
document.addEventListener("DOMContentLoaded", function() {
    // Llenar automáticamente los campos del formulario
    var campos = document.querySelectorAll("input[placeholder]");
    campos.forEach(function(campo) {
        campo.value = campo.placeholder;
    });

    // Agregar el evento keypress a todos los campos de entrada
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.addEventListener("keypress", function(event) {
            // Verificar si la tecla presionada es Enter (código 13)
            if (event.keyCode === 13) {
                // Obtener el índice del campo actual en la lista de campos
                var currentIndex = Array.prototype.indexOf.call(inputs, input);
                // Obtener el siguiente campo de entrada
                var nextIndex = currentIndex + 1;
                // Verificar si hay un siguiente campo y enfocarlo
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes mantener el código para agregar el evento keypress si es necesario
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.addEventListener("keypress", function(event) {
            // Verificar si la tecla presionada es Enter (código 13)
            if (event.keyCode === 13) {
                // Obtener el índice del campo actual en la lista de campos
                var currentIndex = Array.prototype.indexOf.call(inputs, input);
                // Obtener el siguiente campo de entrada
                var nextIndex = currentIndex + 1;
                // Verificar si hay un siguiente campo y enfocarlo
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    });

    // Evento de submit para el formulario de login
    formulario_login.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        const formData = new FormData(formulario_login);

        fetch('php/login_usuario_be.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Redirigir a la página de bienvenida si el inicio de sesión fue exitoso
                window.location.href = 'bienvenida.php';
            } else {
                // Mostrar mensaje de error debajo del campo de contraseña
                errorMessage.textContent = data.message;
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    var enviarBtn = document.getElementById("enviar");
    var campos = form.querySelectorAll("input, textarea");

    function validarNombre() {
        var nombreInput = document.getElementById("nombre");
        var nombre = nombreInput.value.trim();
        if (nombre === "") {
            alert("El campo Nombre es obligatorio.");
            return false;
        }
        return true;
    }

    function validarEmail() {
        var emailInput = document.getElementById("email");
        var email = emailInput.value.trim();
        var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return false;
        }
        return true;
    }

    function validarAsunto() {
        var asuntoInput = document.getElementById("asunto");
        var asunto = asuntoInput.value.trim();
        if (asunto === "") {
            alert("El campo Asunto es obligatorio.");
            return false;
        }
        if (asunto.length > 50) {
            alert("El asunto no puede exceder los 50 caracteres.");
            return false;
        }
        return true;
    }

    function validarMensaje() {
        var mensajeInput = document.getElementById("mensaje");
        var mensaje = mensajeInput.value.trim();
        if (mensaje === "") {
            alert("El campo Mensaje es obligatorio.");
            return false;
        }
        if (mensaje.length > 300) {
            alert("El mensaje no puede exceder los 300 caracteres.");
            return false;
        }
        return true;
    }

    function validarFormulario(event) {
        event.preventDefault();
        if (validarNombre() && validarEmail() && validarAsunto() && validarMensaje()) {
            alert("Mensaje enviado correctamente.");
            form.reset();
        } else {
            alert("Por favor, completa todos los campos correctamente antes de enviar.");
        }
    }

    enviarBtn.addEventListener("click", validarFormulario);
});



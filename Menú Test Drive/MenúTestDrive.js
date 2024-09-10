
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const estrato = document.getElementById('estrato').value.trim();
    const generoMasculino = document.getElementById('masculino').checked;
    const generoFemenino = document.getElementById('femenino').checked;

    // Validación de los nombres (primera letra mayúscula)
    const nombreRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
    if (!nombreRegex.test(nombres)) {
        alert('El nombre debe empezar con mayúscula.');
        return;
    }

    // Validación de apellidos (dos apellidos con mayúscula inicial)
    const apellidosRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
    if (!apellidosRegex.test(apellidos)) {
        alert('Debe ingresar dos apellidos, ambos con mayúscula inicial.');
        return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Debe ingresar un email válido.');
        return;
    }

    // Validación de teléfono (solo números)
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono solo debe contener números.');
        return;
    }

    // Validación de estrato (debe estar entre 1 y 9)
    const estratoRegex = /^[1-9]$/;
    if (!estratoRegex.test(estrato)) {
        alert('El estrato debe ser un número entre 1 y 9.');
        return;
    }

    // Validación de género (solo puede seleccionar uno)
    if (!generoMasculino && !generoFemenino) {
        alert('Debe seleccionar un género.');
        return;
    }

    // Si todas las validaciones pasan, se puede enviar el formulario
    alert('Formulario enviado correctamente');
    this.submit();
});

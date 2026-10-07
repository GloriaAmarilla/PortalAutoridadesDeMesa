

document.addEventListener('DOMContentLoaded', mainFunction);

function mainFunction(){
    const botonEnviar = document.getElementById('botonEnviar');
    botonEnviar.addEventListener('click', function(){
        alert("Enviado correctamente");
    });
}

function guardarDatosPostulante(){
    const distrito = document.getElementById('distrito');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const dni = document.getElementById('dni');
    const fechaDeNacimiento = document.getElementById('fecha-nacimiento');
    const direccionActual = document.getElementById('direccion-actual');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const fueAutoridad = document.querySelector('input[name="fueAutoridad"]:checked');
}
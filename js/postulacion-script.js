import Postulante from './postulante.js';

document.addEventListener('DOMContentLoaded', mainFunction);

function mainFunction(){
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        guardarDatosPostulante();
    });
}

function guardarDatosPostulante(){
    const distrito = document.getElementById('distrito').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const fechaDeNacimiento = document.getElementById('fecha-nacimiento').value;
    const direccionActual = document.getElementById('direccion-actual').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const fueAutoridad = document.querySelector('input[name="fueAutoridad"]:checked').value;

    const postulante = new Postulante(distrito, nombre, apellido, dni, fechaDeNacimiento, 
        direccionActual, telefono, email, fueAutoridad);
    
    console.log(postulante);
}
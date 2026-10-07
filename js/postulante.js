export default class Postulante {
    constructor(distrito, nombre, apellido, dni, fechaDeNacimiento, direccionActual, telefono, email, fueAutoridad) {
        //Falta manejo de excepciones
        if (distrito === "--Selecciona tu Distrito--") {
            throw new Error("No ha seleccionado un distrito");
        }
        if (nombre === "" || apellido === "") {
            throw new Error("Nombre y/o apellido vacío/s");
        }
        if (!this.esDniValido(dni)) {
            throw new Error("No es un DNI válido");
        }
        if (this.fechaEsFutura(fechaDeNacimiento) || this.esMenorDeDieciseis(fechaDeNacimiento)) {
            throw new Error("El postulante es menor de 16 años");
        }
        if (direccionActual === "") {
            throw new Error("Dirección no puede ser vacía");
        }
        if (!this.esTelefonoValido(telefono)) {
            throw new Error("No es un número de teléfono válido");
        }
        if(email === ""){
            throw new Error("No es un email válido");
        }

        this.distrito = distrito;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.direccionActual = direccionActual;
        this.telefono = telefono;
        this.email = email;
        this.fueAutoridad = fueAutoridad;
    }

    esDniValido(dni){
        const regex = /^\d{7,8}$/;
        return regex.test(dni);
    }

    esTelefonoValido(telefono) {
        const regex = /^\d{3} \d{8}$/;
        return regex.test(telefono);
    }

    fechaEsFutura(fechaDeNacimiento){
        const nacimiento = new Date(fechaDeNacimiento);
        const hoy = new Date();
        return nacimiento > hoy;
    }

    esMenorDeDieciseis(fechaDeNacimiento) {
        const nacimiento = new Date(fechaDeNacimiento);
        const hoy = new Date()

        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if(mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())){
            edad --;
        }

        return edad < 16;
    }
}


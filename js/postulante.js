export default class Postulante{
    constructor(distrito, nombre, apellido, dni, fechaDeNacimiento, direccionActual, telefono, email, fueAutoridad){
        //Falta manejo de excepciones
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
}
// data-sedes.js
// Archivo de datos con la información de las charlas y las sedes.
// Estructura adaptada según el diagrama de clases y requerimientos (RFE-01).

const charlasData = [
  {
    id: 1,
    nombre: "Capacitación Autoridades - Modulo 1",
    tema: "Roles y responsabilidades",
    fecha: "15/10/2026",
    horario: "18:00 hs",
    sede: {
      id: 101,
      nombre: "Sede Central UNGS",
      direccion: "Juan María Gutiérrez 1150, Los Polvorines",
      lat: -34.522108,
      lng: -58.700142
    }
  },
  {
    id: 2,
    nombre: "Taller: Escrutinio y Conteo",
    tema: "Práctica de escrutinio",
    fecha: "18/10/2026",
    horario: "10:00 hs",
    sede: {
      id: 102,
      nombre: "Centro Cultural San Miguel",
      direccion: "Domingo Faustino Sarmiento 1551, San Miguel",
      lat: -34.542261,
      lng: -58.712613
    }
  },
  {
    id: 3,
    nombre: "Charla Informativa General",
    tema: "Orientación y dudas frecuentes",
    fecha: "20/10/2026",
    horario: "14:30 hs",
    sede: {
      id: 103,
      nombre: "Escuela Técnica N° 2",
      direccion: "José León Suárez 1999, Los Polvorines",
      lat: -34.515024,
      lng: -58.694200
    }
  },
  {
    id: 4,
    nombre: "Simulacro de Elección",
    tema: "Práctica con urnas",
    fecha: "25/10/2026",
    horario: "09:00 hs",
    sede: {
      id: 104,
      nombre: "Polideportivo Grand Bourg",
      direccion: "Soldado Baigorria y Beauchef, Grand Bourg",
      lat: -34.484277,
      lng: -58.724785
    }
  }
];

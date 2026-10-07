import Postulante from "./postulante.js";

document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction() {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    guardarDatosPostulante();
  });
}

function guardarDatosPostulante() {
  const distrito = document.getElementById("distrito").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const fechaDeNacimiento = document.getElementById("fecha-nacimiento").value;
  const direccionActual = document.getElementById("direccion-actual").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const fueAutoridad = document.querySelector(
    'input[name="fueAutoridad"]:checked',
  ).value;

  try {
    const postulante = new Postulante(
      distrito,
      nombre,
      apellido,
      dni,
      fechaDeNacimiento,
      direccionActual,
      telefono,
      email,
      fueAutoridad,
    );

    // Mostramos la tarjeta en el DOM
    mostrarMensajeExito(postulante);

    // Limpiamos el formulario
    document.querySelector("form").reset();
  } catch (error) {
    alert(error.message);
  }
}

function mostrarMensajeExito(datos) {
  // Verificar si ya existe una tarjeta de éxito y eliminarla para no duplicar
  const tarjetaExistente = document.getElementById("tarjeta-exito");
  if (tarjetaExistente) {
    tarjetaExistente.remove();
  }

  // Crear el contenedor principal de la tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.id = "tarjeta-exito";
  tarjeta.style.marginTop = "30px";
  tarjeta.style.padding = "25px";
  tarjeta.style.border = "2px solid #4CAF50";
  tarjeta.style.borderRadius = "10px";
  tarjeta.style.backgroundColor = "#f9fff9";
  tarjeta.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  tarjeta.style.maxWidth = "600px";
  tarjeta.style.margin = "30px auto";

  // Crear el título
  const titulo = document.createElement("h3");
  titulo.textContent = "¡Tus datos ya fueron ingresados!";
  titulo.style.color = "#4CAF50";
  titulo.style.textAlign = "center";
  titulo.style.marginBottom = "20px";
  tarjeta.appendChild(titulo);

  // Crear la lista para los datos
  const lista = document.createElement("ul");
  lista.style.listStyleType = "none";
  lista.style.padding = "0";
  lista.style.color = "#333";

  // Recorrer los datos ingresados y agregarlos a la lista
  for (const [key, value] of Object.entries(datos)) {
    const item = document.createElement("li");
    item.style.marginBottom = "12px";
    item.style.borderBottom = "1px solid #ddd";
    item.style.paddingBottom = "8px";
    item.style.display = "flex";
    item.style.justifyContent = "space-between";

    // Formatear el nombre de la clave para que se vea mejor (capitalizar primera letra)
    const claveFormateada =
      key.charAt(0).toUpperCase() +
      key
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim();

    item.innerHTML = `<strong>${claveFormateada}:</strong> <span>${value}</span>`;
    lista.appendChild(item);
  }

  tarjeta.appendChild(lista);

  // Insertar la tarjeta justo debajo del formulario (en el main)
  const main = document.querySelector("main");
  main.appendChild(tarjeta);

  // Hacer scroll automático hacia la tarjeta
  tarjeta.scrollIntoView({ behavior: "smooth" });
}

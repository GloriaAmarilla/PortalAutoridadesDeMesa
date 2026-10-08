import Postulante from "./postulante.js";

document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction() {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    guardarDatosPostulante(formulario);
  });
}

function guardarDatosPostulante(formulario) {
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
  const cumplioCapacitacion = document.querySelector(
    'input[name="cumplioCapacitacion"]:checked',
  ).value;
  const afiliadoAgrupacion = document.querySelector(
    'input[name="afiliadoAgrupacion"]:checked',
  ).value;
  const agrupacion = document.getElementById("agrupacion").value;

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
      cumplioCapacitacion,
      afiliadoAgrupacion,
      agrupacion,
    );

    fetch(formulario.action, {
      //fetch permite enviar la info a servidores externos (a formspree en este caso)
      method: formulario.method, //lee el metodo que le asignamos en el html
      body: new FormData(formulario), // en el cuerpo del mensaje estaran los inputs con atributo 'name'
      headers: {
        Accept: "application/json", //para que no aparezca una pagina de agradecimiento de formspree al enviar los datos, sino que aparezca el cartel con los datos confirmados
      },
    })
      .then((response) => {
        //si formspree respondio
        if (response.ok) {
          //y si respondio que recibio todo bien
          //se muestra el cartel de los datos ingresados
          mostrarMensajeExito(postulante);
          formulario.reset(); //y se limpian los campos
        } else {
          alert(
            //la respuesta de formspree es negativa (no procesó bien los datos)
            "El servidor de Formspree rechazó el envío.",
          );
        }
      })
      .catch((error) => {
        //no pudimos conectarnos con formspree
        console.error(
          //mensaje para programador que se ve en el inspector de la pagina
          "Error de red al intentar conectar con Formspree:",
          error,
        );
        alert(
          //mensaje para usuario
          "No se pudo enviar el formulario. Revisa tu conexión a internet.",
        );
      });
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

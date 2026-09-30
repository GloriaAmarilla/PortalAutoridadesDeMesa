// mapa-script.js
// Lógica que utiliza el mapa de leaflet para inicializar, este conjunto de scripts crear los pines y las tarjetas

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el mapa centrado en una ubicación general (ej. Los Polvorines)
  // Utilizamos las coordenadas de la primera sede como centro inicial
  const centroInicial = [charlasData[0].sede.lat, charlasData[0].sede.lng];
  const map = L.map('mapa-contenedor').setView(centroInicial, 12);

  // Agregar la capa de mapa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const listaCharlasElement = document.getElementById('lista-charlas');
  const marcadores = {}; // Diccionario para guardar los marcadores asociados a cada ID
  let markerGroup = L.featureGroup().addTo(map);

  // Generar tarjetas y pines
  charlasData.forEach(charla => {
      // 1. Crear el marcador en el mapa
      const marcador = L.marker([charla.sede.lat, charla.sede.lng])
          .bindPopup(`<b>${charla.sede.nombre}</b><br>${charla.sede.direccion}<br><i>${charla.nombre}</i>`)
          .addTo(markerGroup);
      
      marcadores[charla.id] = marcador;

      // 2. Crear la tarjeta HTML
      const card = document.createElement('div');
      card.className = 'charla-card';
      card.id = `charla-${charla.id}`;
      
      card.innerHTML = `
          <div class="charla-tema">${charla.tema}</div>
          <h3 class="charla-nombre">${charla.nombre}</h3>
          <div class="charla-info">
              <span>📅 ${charla.fecha}</span>
              <span>⏰ ${charla.horario}</span>
          </div>
          <div class="charla-sede-nombre">${charla.sede.nombre}</div>
          <div class="charla-direccion">
              <span class="pin-icon">📍</span> ${charla.sede.direccion}
          </div>
      `;

      // 3. Evento de click en la tarjeta
      card.addEventListener('click', () => {
          // Remover clase active de todas
          document.querySelectorAll('.charla-card').forEach(c => c.classList.remove('active'));
          // Añadir active a la clickeada
          card.classList.add('active');

          // Hacer zoom al punto con animación suave
          map.flyTo([charla.sede.lat, charla.sede.lng], 16, {
              animate: true,
              duration: 1.5 // duración de la animación en segundos
          });
          
          // Abrir el popup del marcador
          marcador.openPopup();
      });

      // 4. Evento de click en el marcador (opcional: sincronizar tarjeta)
      marcador.on('click', () => {
          document.querySelectorAll('.charla-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          // Hacer scroll hacia la tarjeta si es necesario
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      listaCharlasElement.appendChild(card);
  });

  // Ajustar el mapa para que todos los pines sean visibles al inicio
  map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
});

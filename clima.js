window.addEventListener('DOMContentLoaded', (event) => {
  if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition((position) => {
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;
    const unidadTemperatura = 'metric';

    
    const geocodingUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`;


    fetch(geocodingUrl)
    .then(response => response.json())
    .then(geocodingData => {
      // Extraer el nombre de la ciudad del objeto de datos de geocodificación
      const ciudadActual = geocodingData.address.city;
      const apiKey = '347b9972a6aac4016656e49b7a7b6fe2';
      const owmUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=${unidadTemperatura}&appid=${apiKey}`;
    
      fetch(owmUrl)
            .then(response => response.json())
            .then(data => {
              // Extraer la información del clima del objeto data
              const infoClima= data.weather[0].description;
              const temperatura = data.main.temp;
              const temperaturaMin = data.main.temp_min;
              const temperaturaMax = data.main.temp_max;
              const humedad = data.main.humidity;
              const probLluvia = data.rain ? data.rain['1h'] : 0

              // Actualizar el contenido del clima en la barra lateral
              const weatherInfoElement = document.getElementById('weather-info');
              weatherInfoElement.innerHTML = `
                <p><strong>Ciudad Actual:</strong> ${ciudadActual}</p> 
                <p><strong>Clima:</strong> ${infoClima}</p>
                <p><strong>Temperatura:</strong> ${temperatura} °C</p> 
                <p><strong>Temperatura Mín.:</strong> ${temperaturaMin} °C</p>
                <p><strong>Temperatura Máx.:</strong> ${temperaturaMax} °C</p>
                <p><strong>Humedad:</strong> ${humedad} %</p>
                <p><strong>Prob. de lluvia:</strong> ${probLluvia} %</p>
              `;
              console.log('hecho');
            })
          })
          .catch(error => {
            console.error('Error al obtener los datos del clima:', error);
            console.log('Error al obtener los datos del clima:');
          });
      });
  } else {
    console.error('La geolocalización no está disponible en este navegador.');
    console.log('error geolocalizacion');

}})



const apiKey = 'ba174bfbed46ac15dbcd7628397c28cc';
const locationForm = document.getElementById('locationForm');
const result = document.getElementById('result');
const locationBtn = document.getElementById('locationBtn');

locationBtn.addEventListener('click', function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temp = ((data.main.temp - 273.15) * 1.8 + 32).toFixed(1);
        const conditions = data.weather[0].description;
        result.innerHTML = `The temperature at latitude ${lat} and longitude ${lon} is ${temp} degrees Fahrenheit with ${conditions}.`;
      })
      .catch(error => console.log(error));
  });
});

locationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = ((data.main.temp - 273.15) * 1.8 + 32).toFixed(1);
      const conditions = data.weather[0].description;
      result.innerHTML = `The temperature at latitude ${lat} and longitude ${lon} is ${temp} degrees Fahrenheit with ${conditions}.`;
    })
    .catch(error => console.log(error));
});


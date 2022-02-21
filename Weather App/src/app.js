function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let weatherElement = document.querySelector("#conditions");
  weatherElement.innerHTML = response.data.weather[0].description;

  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let humidityElement = document.querySelector("#humidity");
  let humidityData = response.data.main.humidity;
  humidityElement.innerHTML = `Humidity: ${humidityData}%`;

  let windElement = document.querySelector("#wind");
  let speedData = Math.round(response.data.wind.speed);
  windElement.innerHTML = `Speed: ${speedData}Km/H`;
}

let apiKey = "d23a0d3530ddedd914cb8e35a010be9d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

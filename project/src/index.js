function getTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let currTemp = document.querySelector(".currTemp");
  currTemp.innerHTML = `${temp}°F`;

  let currWeather = response.data.weather[0].description;
  let weather = document.querySelector(".weather");
  weather.innerHTML = currWeather;
}

function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search").value;
  searchInput = searchInput.toLowerCase();
  searchInput = searchInput.trim();
  searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);

  let city = document.querySelector(".city");

  city.innerHTML = searchInput;

  let apiKey = "05992a658e151609dfa497fc6c2796f2";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=imperial`;

  axios.get(apiURL).then(getTemp);
}

let citySearch = document.querySelector("#search");
citySearch.addEventListener("submit", updateCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let date = document.querySelector(".date");
date.innerHTML = `${day} ${hours}:${minutes}`;

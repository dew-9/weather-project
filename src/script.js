let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = document.querySelector("#date");
let day = now.getDay();
let minute = now.getMinutes();
let hour = now.getHours();
if (minute < 10) {
  minute = `0${minute}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
date.innerHTML = `${days[day]} at ${hour}:${minute}`;

function searchCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#cityInput");
  let cityValue = searchCity.value;
  function displayTemp(response) {
    let temp = Math.round(response.data.temperature.current);
    let conditionIcon = response.data.condition.description;
    let currentCity = document.querySelector("#city");
    let currentTemp = document.querySelector(".current-weather");
    currentCity.innerHTML = `${cityValue}`;
    currentTemp.innerHTML = `${temp} ℃ - ${conditionIcon}`;
  }
  let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${cityValue}&key=6o808f4d3ta99b430e5547b006a7c43c&units=metric`;
  axios.get(apiURL).then(displayTemp);
}

let form = document.querySelector("#searchForm");
form.addEventListener("submit", searchCity);

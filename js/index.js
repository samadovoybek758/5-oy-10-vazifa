import { getData,getWeather } from "./function.js";

const change_location = document.getElementById('change-location');
const card = document.getElementById('card');
const details = document.getElementById('details');
const wether_icon = document.getElementById('weather-icon');


change_location.city.focus()


// ui dagi malumot
const updateUi = function (weather) {
    console.log(weather);
    details.innerHTML = `
         <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
          </div>
    `
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
    wether_icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}


// get location
change_location.addEventListener('submit', function (el) {
    el.preventDefault()
    const cityName = change_location.city.value.trim();
    change_location.reset();

    getWeather(cityName).then((data) => updateUi(data));
})


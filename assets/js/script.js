
var weather_APIKey = "5b83fe4bc0e5a5e00702d6628342934c"
var currentDashboardEl = document.getElementById("current-ds")
var forecastDashboardEl = document.getElementById("forecast-ds")
var searchBtnEl = document.getElementById("search-btn")
var currentContainerEl= document.getElementById("current-ds-c")
var forecastTitleEl = document.getElementById("forecast-title")


function currentWeather(cityName) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weather_APIKey}&units=imperial`
    currentContainerEl.classList.remove("hide")

    fetch(queryURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var unixTimestamp = data.dt
        var date = new Date(unixTimestamp * 1000)
        var convertTimestamp = date.toLocaleDateString("en-US")
        currentDashboardEl.innerHTML = `<h4>${data.name} ${convertTimestamp}<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'></h3>
        <p class="m-1">Temp: ${data.main.temp}&degF</p>
        <p class="m-1">Wind: ${data.wind.speed}MPH</p>
        <p class="m-1">Humidity: ${data.main.humidity}%</p>`
    })

    searchHistory(cityName)
}

function fivedayForecast(cityName) {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weather_APIKey}&units=imperial`
    forecastDashboardEl.innerHTML = ""
    currentDashboardEl.classList.remove("hide")
    forecastTitleEl.classList.remove("hide")
    forecastDashboardEl.classList.remove("hide")
console.log(cityName)
    fetch(queryURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        for(var i=3; i < data.list.length; i+=8) {
            
            var unixTimestamp = data.list[i].dt
            var date = new Date(unixTimestamp * 1000)
            var convertTimestamp = date.toLocaleDateString("en-US")

            forecastDashboardEl.innerHTML += `<div class="col-sm-2"><div class="card custom-card-bg"><div class="card-body"><h5 class="card-title">${convertTimestamp}<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"></h5><p class="card-text m-1">Temp: ${data.list[i].main.temp}&degF</p><p class="card-text m-1">Wind: ${data.list[i].wind.speed}MPH</p><p class="card-text m-1">Humidity: ${data.list[i].main.humidity}%</p></div></div></div>`
        }
    })
}

function displayWeather() {
    var cityName = document.getElementById("city-name").value
    currentWeather(cityName)
    fivedayForecast(cityName)
}

searchBtnEl.addEventListener("click", displayWeather)
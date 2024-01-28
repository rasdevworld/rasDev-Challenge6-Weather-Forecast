//https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=5b83fe4bc0e5a5e00702d6628342934c

var formEl = document.getElementById("form")
var textboxEl = document.getElementById("cname")
var weather_APIKey = "5b83fe4bc0e5a5e00702d6628342934c"
var dayJS = dayjs()
var currentDate = dayJS.format("M/D/YYYY")
var cityName
//var weatherData = []


/*fetch(queryURL)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
   // return data
})*/

function retrieveWeatherData(event) {
    event.preventDefault()
    cityName = textboxEl.value
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+weather_APIKey
    //console.log(queryURL)
    fetch(queryURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        /*console.log(data.main.temp)
        console.log(data.name)
        console.log(data.wind.speed)
        console.log(data.main.humidity)*/
        var cityWeatherData = {
            cityname : data.name,
            temperature : data.main.temp,
            wind : data.wind.speed,
            humidity : data.main.humidity,
            icon : data.weather[0].icon
        }
        displayWeatherData(data)
//console.log(data)
//console.log(cityWeatherData)
    // return data
    })
}

formEl.addEventListener("submit", retrieveWeatherData)
var weatherB1El = document.getElementById("weather_data_b1")
var weatherDbEl = document.getElementById("weather_data_brief")
var forecastContainerEl = document.getElementById("fiveday_forecast")
var weatherB2El = document.getElementById("weather_data_b2")

function displayWeatherData(data) {
console.log(data)
var temp = data.main.temp
var convertTemp = Math.floor((temp - 273.15)*1.8+32)
console.log("convertTemp: "+convertTemp)
weatherB1El.classList.remove("hide")
weatherB1El.innerHTML = "<div id='weather_data_brief'><h5>"+data.name+" ("+currentDate+")</h5> <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></div><br><ul><li>Temp: "+convertTemp+"&deg;F</li><li>Wind: "+data.wind.speed+"MPH</li><li>Humidity: "+data.main.humidity+"%</li></ul>"
fivedayForecast()
}

function fivedayForecast() {
    var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&cnt=5&appid="+weather_APIKey
    //console.log(fiveDayQueryURL)

    fetch(fiveDayQueryURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        renderFivedayForecast(data)
    })
    
}

function renderFivedayForecast(data) {

    console.log(data.cnt)

    for(var i=0; i < data.cnt; i++) {

        weatherB2El.classList.remove("hide")
        var unixTimestamp = data.list[i].dt
        var date = new Date(unixTimestamp * 1000)
        var convertTimestamp = date.toLocaleDateString("en-US")
        var tempByDay = data.list[i].main.temp
        var convertTempByDay = Math.floor((tempByDay - 273.15)*1.8+32)
        
        forecastContainerEl.innerHTML += "<div class='forecast_day'><h6>"+convertTimestamp+"</h6><img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'><br><ul><li>Temp: "+convertTempByDay+"&deg;F</li><li>Wind: "
        +data.list[i].wind.speed+"MPH</li><li>Humidity: "+data.list[i].main.humidity+"%</li></ul></div>"
    }
    /*
    <div class="forecast_day">
    <h6>9/14/2022</h6>
    <img src="./assets/images/icons8-sun-star-48.png"><br>
    <label>Temp: </label><br>
    <label>Wind: </label><br>
    <label>Humidity: </label>
</div>
*/
}
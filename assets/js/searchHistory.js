
var searchHistoryEl = document.getElementById("search-history")
var cityNamesList = JSON.parse(localStorage.getItem('cityNamesList')) || []
function searchHistory(cityName) {

    if(!cityNamesList.includes(cityName)) {
        cityNamesList.push(cityName)
    }

localStorage.setItem('cityNamesList', JSON.stringify(cityNamesList))
displaycityNames()
   
}

function displaycityNames() {
    var getSearchHistory = JSON.parse(localStorage.getItem('cityNamesList'))
    searchHistoryEl.classList.remove("hide")
    searchHistoryEl.innerHTML = ""
    
    for(i=0; i < getSearchHistory.length; i++) {
        searchHistoryEl.innerHTML += `<button class="btn bg-secondary w-100 mx-2 my-1 text-light">${getSearchHistory[i]}</button>`
    }
}

function populateData(event) {
    var currentButton = event.target
    var cityName = currentButton.textContent
    currentWeather(cityName)
    fivedayForecast(cityName)
}

searchHistoryEl.addEventListener("click", populateData)
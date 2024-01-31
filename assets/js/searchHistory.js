//var searchHistoryEl = document.getElementById("search_history")
var searchHistoryEl = document.getElementById("search-history")
var cityNamesList = []
function searchHistory(cityName) {

    if(!cityNamesList.includes(cityName)) {
        cityNamesList.push(cityName)
    }

   // cityNamesList.push(cityName)
localStorage.setItem('cityNamesList', JSON.stringify(cityNamesList))
displaycityNames()
   
}

function displaycityNames() {
    var getSearchHistory = JSON.parse(localStorage.getItem('cityNamesList'))
    //console.log(getSearchHistory)
   /* var getSearchHistoryList = []
    for(i=0; i < getSearchHistory.length; i++) {
        if(!getSearchHistoryList.includes(getSearchHistory[i])) {
            getSearchHistoryList.push(getSearchHistory)
        }
    }*/
    searchHistoryEl.classList.remove("hide")
    searchHistoryEl.innerHTML = ""
    //console.log(getSearchHistoryList)
    for(i=0; i < getSearchHistory.length; i++) {
        searchHistoryEl.innerHTML += `<button class="btn bg-secondary w-100 mx-2 my-1 text-light">${getSearchHistory[i]}</button>`
    }
}
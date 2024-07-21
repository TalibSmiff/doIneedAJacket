"use strict"

let submitButton = document.querySelector("#submitButton")
let weatherCard = document.querySelector(".weather-Cards")

async function fetchWeather(zipCode){
  let url = `https://api.weatherapi.com/v1/forecast.json?q=${zipCode}&days=1&key=`;
  const response = await fetch(url)
  const weatherReport = await response.json()
  return weatherReport
}


submitButton.addEventListener('click', async () => {
  let newZipCode = document.querySelector("#zipCodeInput").value
  let weatherReport = await fetchWeather(newZipCode);
  
  if(weatherReport) {
    weatherCard.innerHTML = '';

    let weatherInfo = weatherReport.forecast.forecastday[0]
    createWeaterCard(weatherInfo)
  }else{
    console.log("I didnt find that shit bruv")
  }
});

function createWeaterCard(weatherInfo){
 console.log(weatherInfo)

 let image = document.createElement('img')
 image.src = weatherInfo.day.condition.icon



 let card = document.createElement('div');
 card.className  = 'weather-card';

 let location = document.createElement('h2')
 location.textContent = weatherInfo.name

 let date = document.createElement('h3');
 date.textContent = weatherInfo.date

 let condition = document.createElement('p');
 condition.textContent = weatherInfo.day.condition.text 

 let temp = document.createElement('p')
 temp.textContent = `High: ${weatherInfo.day.maxtemp_f}°F, Low: ${weatherInfo.day.mintemp_f}°F`;

 card.appendChild(image)
 card.appendChild(location)
 card.appendChild(date)
 card.appendChild(condition)
 card.appendChild(temp)

 weatherCard.appendChild(card)
 checkweather(weatherInfo)
}

function checkweather(weatherInfo){
  let maxTemp = weatherInfo.day.maxtemp_f 

  if(maxTemp > 60 ){
    console.log('its kinda hot I dont think you need a jacket')
  }
  else {
    console.log('you should wear a jacket')
  }
}
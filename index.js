let submitButton = document.querySelector("#submitButton")

async function fetchWeather(zipCode){
  let url = `https://api.weatherapi.com/v1/forecast.json?q=${zipCode}&days=1&key=your key here`;
  const response = await fetch(url)
  const weatherReport = await response.json()
  return weatherReport
}


submitButton.addEventListener('click', async () => {
  let newZipCode = document.querySelector("#zipCodeInput").value
  let weatherReport = await fetchWeather(newZipCode);
  
  for(k in weatherReport){
  let weatherInfo = weatherReport[k]
  console.log(weatherInfo)
  }
});
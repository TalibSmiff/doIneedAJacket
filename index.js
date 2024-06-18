let url = "https://api.weatherapi.com/v1/forecast.json?q=15206&days=1&key=a872efdb6a3848d9882203829242804"

fetch(url)
.then(response => {
  
  if (!response.ok)
    {
    
    throw new Error("NAH THAT WAS NOT COOL")
  }
  return response.json()
})
.then(data => {
  let weatherObj = data 
  
  for (const property in weatherObj)
    {
      let weatherDetails = weatherObj[property]
      
      for (const b in weatherDetails){
        let weatherReport = weatherDetails[b]
        console.log(`${b}: ${weatherReport}`)
      }
    }
})
.catch(error => {
  console.error("OH MY GOD SOMETHINGS WRONG: ", error)
})
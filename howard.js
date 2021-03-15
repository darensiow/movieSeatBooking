function fetchWeatherInformation(){
  URL = 'https://api.openweathermap.org/data/2.5/weather?q=singapore&appid=4c3753aa7212f795a4f238d6bbc1b10a'
  fetch(URL)
    .then( res=> res.json())
    .then( res => {
      let currentTemp = res.main.temp-273.15
  
      const weatherSpan = document.getElementById('weather')
      weatherSpan.innerHTML = Math.round(currentTemp*100, 2)/100
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  
}

setInterval(fetchWeatherInformation, 60000);

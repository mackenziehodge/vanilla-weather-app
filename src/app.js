function displayTemperature(response){
    let temperature= document.querySelector("#temperature")
    temperature.innerHTML= Math.round(response.data.main.temp);
    let cityElement= document.querySelector("#current-city")
    cityElement.innerHTML= response.data.name;
    let weatherDescription= document.querySelector("#current-description")
    weatherDescription.innerHTML= response.data.weather[0].description;
    let humidity= document.querySelector("#current-humidity")
    humidity.innerHTML = response.data.main.humidity;
    let windSpeed= document.querySelector("#wind-speed")
    windSpeed.innerHTML= Math.round(response.data.wind.speed);
   }  
   
   let apiKey = "ab59ca7402d6fc239c3f8d540f4ab058";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
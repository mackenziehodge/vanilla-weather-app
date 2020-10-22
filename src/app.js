function formatDate(timestamp) {
let date = new Date (timestamp);
let hours = date.getHours();
if(hours < 10){
    hours=`0${hours}`;
}
let minutes= date.getMinutes();
if(minutes < 10){
    minutes=`0${minutes}`;
}

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[date.getDay()];
return`${day} ${hours}:${minutes}`;
}


function displayTemperature(response){
    let temperature= document.querySelector("#temperature");
    temperature.innerHTML= Math.round(response.data.main.temp);
    let cityElement= document.querySelector("#current-city");
    cityElement.innerHTML= response.data.name;
    let weatherDescription= document.querySelector("#current-description");
    weatherDescription.innerHTML= response.data.weather[0].description;
    let humidity= document.querySelector("#current-humidity");
    humidity.innerHTML = response.data.main.humidity;
    let windSpeed= document.querySelector("#wind-speed");
    windSpeed.innerHTML= Math.round(response.data.wind.speed);
    let dateElement= document.querySelector("#current-date");
    dateElement.innerHTML= formatDate(response.data.dt * 1000);
   }  
   
let apiKey = "ab59ca7402d6fc239c3f8d540f4ab058";
let city = "London"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
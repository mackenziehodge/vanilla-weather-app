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
    let cityElement= document.querySelector("#current-city");
    let weatherDescription= document.querySelector("#current-description");
    let humidity= document.querySelector("#current-humidity");
    let windSpeed= document.querySelector("#wind-speed");
    let dateElement= document.querySelector("#current-date");
    let iconElement= document.querySelector("#icon")

    celsiusTemperature=response.data.main.temp;

    temperature.innerHTML= Math.round(response.data.main.temp);
    cityElement.innerHTML= response.data.name;
    weatherDescription.innerHTML= response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    windSpeed.innerHTML= Math.round(response.data.wind.speed);
    dateElement.innerHTML= formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description)
   
} 
function search(city){
let apiKey = "ab59ca7402d6fc239c3f8d540f4ab058";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
} 
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
} 
function displayFahrenheit(event){
    event.preventDefault();
    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature*9)/5 + 32;
    let temperatureElement= document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(fahrenheitTemperature);

}
function displayCelsius(event){
    event.preventDefault();
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");
    let temperatureElement= document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(celsiusTemperature);



}
let celsiusTemperature= null;


let form=document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsius);

search("New York");
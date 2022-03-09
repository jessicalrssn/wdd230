const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
     document.querySelector('#t').textContent = jsObject.main.temp.toFixed(1);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const windspeed = jsObject.wind.speed;

document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#s').textContent= windspeed;

let t= parseFloat(document.querySelector("#t").textContent);
let s= parseFloat(document.querySelector("#s").textContent);
let windchill="";

if (t <= 50 && s > 3) {
    windchill = windChill(t, s);
    windchill =`${windchill}&#176; F`;
}else{
    windchill="N/A";
}

document.querySelector("#w").innerHTML = windchill;


  
  });

  
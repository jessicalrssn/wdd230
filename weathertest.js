const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=Logan&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log
     document.querySelector('#t').textContent = jsObject.main.temp.toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const windspeed = jsObject.wind.speed.toFixed(0);
const h= jsObject.humidity;

document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h').textContent= windspeed;


  
  });

  
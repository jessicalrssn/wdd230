const apiURL1= "https://api.openweathermap.org/data/2.5/weather?q=Rome,It&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
  
     document.querySelector('#t').textContent = jsObject.main.temp.toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const humid = jsObject.main.humidity;

document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h').textContent= humid;


  });

const apiURL= "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
     document.querySelector('#current-temp').textContent = jsObject.main.temp.toFixed(1);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const w= jsObject.wind;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#wind').setAttribute('src', w);

  });



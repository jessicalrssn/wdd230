const apiURL= "https://api.openweathermap.org/data/2.5/onecall?lat=41&lon=12&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     document.querySelector('#t3').textContent = jsObject.daily.temp.day;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.daily.weather[0].icon}.png`;
const desc = jsObject.weather.description;
const humid = jsObject.main.humidity;

document.querySelector('#weathericon3').setAttribute('src', iconsrc);
document.querySelector('#weathericon3').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h3').textContent= humid;

  });



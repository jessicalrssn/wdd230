const apiURL3= "http://api.openweathermap.org/data/2.5/onecall?lat=41&lon=12&dt=1586468027&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     //document.querySelector('#t3').textContent = jsObject.temp.toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const humid = jsObject.main.humidity;

document.querySelector('#weathericon3').setAttribute('src', iconsrc);
document.querySelector('#weathericon3').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h3').textContent= humid;

  });


  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     document.querySelector('#t2').textContent = jsObject.main.temp.toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const humid = jsObject.main.humidity;

document.querySelector('#weathericon2').setAttribute('src', iconsrc);
document.querySelector('#weathericon2').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h2').textContent= humid;

  });

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     document.querySelector('#t1').textContent = jsObject.main.temp.toFixed(0);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
const humid = jsObject.main.humidity;

document.querySelector('#weathericon1').setAttribute('src', iconsrc);
document.querySelector('#weathericon1').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('#h1').textContent= humid;

  });

"https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=12&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5"
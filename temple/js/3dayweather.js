const apiURL= "https://api.openweathermap.org/data/2.5/onecall?lat=41&lon=12&units=imperial&appid=76fda5fbdea32e8ea0ce839e840b62d5";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
     document.querySelector('#t1').textContent = jsObject.daily[1].temp.day.toFixed(0);
     document.querySelector('#t2').textContent = jsObject.daily[2].temp.day.toFixed(0);
     document.querySelector('#t3').textContent = jsObject.daily[3].temp.day.toFixed(0);
     document.querySelector('#h1').textContent= jsObject.daily[1].humidity;
     document.querySelector('#h2').textContent= jsObject.daily[2].humidity;
     document.querySelector('#h3').textContent= jsObject.daily[3].humidity;

//const iconsrc= jsObject.daily[1].weather[0].icon;
const iconsrc= `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
const iconsrc2= `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
const iconsrc3= `https://openweathermap.org/img/w/${jsObject.daily[3].weather[0].icon}.png`;
const desc1 = jsObject.daily[1].weather[0].description;
const desc2 = jsObject.daily[2].weather[0].description;
const desc3 = jsObject.daily[3].weather[0].description;

document.querySelector('#weathericon1').setAttribute('src', iconsrc);
document.querySelector('#weathericon2').setAttribute('src', iconsrc2);
document.querySelector('#weathericon3').setAttribute('src', iconsrc3);


document.querySelector('#weathericon1').setAttribute('alt', desc1);
document.querySelector('#weathericon2').setAttribute('alt', desc2);
document.querySelector('#weathericon3').setAttribute('alt', desc3);
document.querySelector('figcaption').textContent = desc1;
document.querySelector('figcaption').textContent = desc2;
document.querySelector('figcaption').textContent = desc3;



  });

//const iconsrc1= `http://openweathermap.org/img/wn/${jsObject.daily[1].weather[0].icon}.png`;



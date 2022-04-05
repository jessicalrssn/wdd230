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


const iconsrc1= `http://openweathermap.org/img/wn/10d@2x.png${jsObject.daily.weather[0].icon}.png`;
const desc = jsObject.daily.weather.description;


document.querySelector('#weathericon1').setAttribute('src', iconsrc1);
document.querySelector('#weathericon1').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;



  });





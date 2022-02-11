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

function windChill(temp, speed){
     let a = Math.pow(speed, .16);
               let f = 35.74 + 0.6215 * temp - 35.75 * a + 0.4275 * temp * a;
               return f.toFixed(1);}
  
   


let daynames=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d= new Date();
let dayName= daynames[d.getDay()];
let monthNames= months[d.getMonth()];
let year= d.getFullYear();
let fulldate= `Last Updated: ${dayName}, ${monthNames} ${d.getDate()}, ${year}`;

document.getElementById("currentDate").textContent= fulldate;
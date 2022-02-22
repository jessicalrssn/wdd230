//Hamburger menu-------
function toggleMenu() {
 document.getElementById("primaryNav").classList.toggle("open");
 document.getElementById("hamburgerButton").classList.toggle("open");
}

const x= document.getElementById("hamburgerButton")
x.onclick= toggleMenu;
//end hamburger menu-------


//current date-------
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
//end current date-------


//copywrite date-------
const d= new Date();
const year = d.getFullYear();
document.querySelector('#currentyear').textContent = ` ${year} Bear Lake Chamber | Jessica Larsson | 
WDD230 Project | `;

//last modified
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;


//-----popup banner----/
console.log(d.getDay());
let dayOfWeek= now.getDay();
 if (d.getDay() === 1 || d.getDay() === 2 ){
  const banner = document.querySelector('#banner');
  banner.style.display="block";
 } 





//copywrite date-------
const d= new Date();
const year = d.getFullYear();
document.querySelector('#currentyear').textContent = ` ${year} Temple Inn & Suites | Jessica Larsson | 
WDD230 Project | `;

//last modified
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified} | `;

//Hamburger menu-------
function toggleMenu() {
 document.getElementById("primaryNav").classList.toggle("open");
 document.getElementById("hamburgerButton").classList.toggle("open");
}

const x= document.getElementById("hamburgerButton")
x.onclick= toggleMenu;
//end hamburger menu-------
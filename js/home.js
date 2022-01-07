//copywrite date
const d= new Date();
const year = d.getFullYear();
document.querySelector('#currentyear').textContent = ` ${year} | Jessica Larsson | Utah`;

//last modified
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;
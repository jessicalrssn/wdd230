//copywrite date
const d= new Date();
const year = d.getFullYear();
document.querySelector('#currentyear').textContent = ` ${year} | Jessica Larsson | WDD 230`;

//last modified
const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;
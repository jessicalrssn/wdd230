const requestURL = 'https://jessicalrssn.github.io/wdd230/chamber/data.json';

const spot1= document.querySelector('.spot1');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const directory = jsonObject['directory'];
        // console.table(jsonObject); //temporary checking for valid response and data parsing
         const golddirectory = directory.filter(x => (x.level === "gold"));
         golddirectory.forEach(displayDirectory);

        
       
          
    });

 function displayDirectory(directory) { //create elements to add to the document
  let spot1 = document.createElement('section');


  let h2 = document.createElement('h2');
  h2.textContent = `${directory.name}`;
  spot1.appendChild(h2);
 


  let p1 = document.createElement('p');
  p1.textContent = ` ${directory.address}`;
  spot1.appendChild(p1);
  

  
 
  

    let p3 = document.createElement('p');
  p3.textContent = `${directory.website}`;
  spot1.appendChild(p3);
  

  //add images
  let image = document.createElement('img');
  image.src = directory.imageurl;
  image.setAttribute('alt', directory.order);
  spot1.appendChild(image);


  document.querySelector('div.spot1').appendChild(spot1);
 

}
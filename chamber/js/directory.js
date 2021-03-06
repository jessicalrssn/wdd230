const requestURL = 'https://jessicalrssn.github.io/wdd230/chamber/data.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['directory'];
       
        directory.forEach(displayDirectory);
    });

function displayDirectory(directory) { //create elements to add to the document
  let card = document.createElement('section');

  let h2 = document.createElement('h2');
  h2.textContent = `${directory.name}`;
  card.appendChild(h2);


  let p1 = document.createElement('p');
  p1.textContent = ` ${directory.address}`;
  card.appendChild(p1);

  
  let p2 = document.createElement('p');
  p2.textContent = `${directory.phone}`;
  card.appendChild(p2);

    let p3 = document.createElement('p');
  p3.textContent = `${directory.website}`;
  card.appendChild(p3);

  //add images
  let image = document.createElement('img');
  image.src = directory.imageurl;
  image.setAttribute('alt', directory.order);
  card.appendChild(image);


  document.querySelector('div.cards').appendChild(card);

}


const cards = document.querySelector('.cards');
const listbtn = document.querySelector("#list-btn");
const gridbtn = document.querySelector("#grid-btn");

listbtn.addEventListener("click", ()=> {
    cards.classList.replace("grid-view", "list-view")
});

gridbtn.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "grid-view")
});




 
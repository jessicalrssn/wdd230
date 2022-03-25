const requestURL = 'https://jessicalrssn.github.io/wdd230/temple/data.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
       
        temples.forEach(displayTemples);
    });

function displayTemples(temples) { //create elements to add to the document
  let card = document.createElement('section');

  let h2 = document.createElement('h2');
  h2.textContent = `${temples.name}`;
  card.appendChild(h2);

 let p1 = document.createElement('p');
  p1.textContent = `${temples.history}`;
  card.appendChild(p1);

  let p2 = document.createElement('p');
  p2.textContent = ` ${temples.address}`;
  card.appendChild(p2);

  
  let p3 = document.createElement('p');
  p3.textContent = `${temples.phone}`;
  card.appendChild(p3);

    let p4 = document.createElement('p');
  p4.textContent = `${temples.services}`;
  card.appendChild(p4);

  

  //add images
  let image = document.createElement('img');
  image.src = temples.imageurl;
  image.setAttribute('alt', temples.order);
  card.appendChild(image);


  document.querySelector('div.cards').appendChild(card);

}




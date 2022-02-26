const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        // console.table(jsonObject); //temporary checking for valid response and data parsing
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) { //create elements to add to the document
  let card = document.createElement('section');

  //make h2 contain prophets full name
  let h2 = document.createElement('h2');
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  card.appendChild(h2);

  //make p contain birth date
  let p1 = document.createElement('p');
  p1.textContent = `Date of Birth: ${prophet.birthdate}`;
  card.appendChild(p1);

  //make p contain birth place
  let p2 = document.createElement('p');
  p2.textContent = `Place of birth: ${prophet.birthplace}`;
  card.appendChild(p2);

  //add images
  let image = document.createElement('img');
  image.src = prophet.imageurl;
  image.setAttribute('alt', prophet.order);
  card.appendChild(image);


  document.querySelector('div.cards').appendChild(card);

}
 
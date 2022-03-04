const requestURL = 'https://jessicalrssn.github.io/wdd230/chamber/data.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['directory'];
        // console.table(jsonObject); //temporary checking for valid response and data parsing
        directory.forEach(displayDirectory);
    });

function displayDirectory(directory) { //create elements to add to the document
  let card = document.createElement('section');

  //make h2 contain prophets full name
  let h2 = document.createElement('h2');
  h2.textContent = `${directory.name}`;
  card.appendChild(h2);

  //make p contain birth date
  let p1 = document.createElement('p');
  p1.textContent = ` ${directory.address}`;
  card.appendChild(p1);

  //make p contain birth place
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

//list and grid buttons----------------------
// Get the elements with class="column"
//let grid = document.getElementsByClassName("cards");
//let list = document.getElementsByClassName("list");

// Declare a loop variable
//let i;

// List View
//function listView() {
  //for (i = 0; i < list.length; i++) {
    //list[i].style.display = "block";
    
  //}
//}

// Grid View
//function gridView() {
  //for (i = 0; i < grid.length; i++) {
    //grid[i].style.display='grid';
  //}
//}
const cards = document.querySelector('.cards');
const listbtn = document.querySelector("#list-btn");
const gridbtn = document.querySelector("#grid-btn");

listbtn.addEventListener("click", ()=> {
    cards.classList.replace("grid-view", "list-view")
});

gridbtn.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "grid-view")
});


/* Optional: Add active class to the current button (highlight it) */
let container = document.getElementById("listview-btn");
let btns = container.getElementsByClassName("dirbtn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

 
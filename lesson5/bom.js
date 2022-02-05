const item= document.querySelector('#item');
const buildButton = document.querySelector('button');
const list = document.querySelector('#userlist');

buildButton.addEventListener('click', function(){
//get the list size
let size = Number(item.value);
//build html
for (let i = 1; i<= size; i++){
    let li = document.createElement('li');
    li.textContent= `Item ${i}`;
    list.appendChild(li);
}
//output to the DOM
})
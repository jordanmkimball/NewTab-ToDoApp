const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

//Declaring empty items array
let itemsArray = [];

//Create a key to be used in local storage. The value of the key "items" is the stringified items Array
localStorage.setItem('items', JSON.stringify(itemsArray));
//Data retrieves the itemsArray from localStorage. Uses JSON.parse to store items in a way that JavaScript can understand. 
const data = JSON.parse(localStorage.getItem('items'));


/*An arrow function with one parameter 'text'. Creates a new list element with paramater 'text' as its text and then appends it to the 
unordered list 'ul' defined above.*/
const listMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


//Listens for someone to press enter on the textbox and 'submit'. Adds thier text to the list. 
form.addEventListener('submit', function(e) {
    //Prevents the form from the default submit action which we don't want because we are not sending any data to a server
    e.preventDefault();
    //Push the value of the text box to the itemsArray
    itemsArray.push(input.value);
    //Reset the value of 'items' in localStorage
    localStorage.setItem('items', JSON.stringify(itemsArray));
    //Takes the value that is written in the text box on submit and sends it over to the listMaker function
    listMaker(input.value);
    //Resets what is written in the textbox to nothing
    input.value = "";
});

//Looping through the data array. Taking each item and sending it through the listMaker. This will allow the list to show all stored items in localStorage.
for(i=0; i<data.length; i++){
    listMaker(data[i]);
}

//This is the function that deals with clicking the "Clear" button
button.addEventListener('click', function() {
    //Clear the local storage
    localStorage.clear();
    //Clear all items from the list. While a first child exists. Remove that child. 
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
});


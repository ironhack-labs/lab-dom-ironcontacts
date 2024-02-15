// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length); //randomizer 

const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const randomizer =  Math.floor(Math.random() * contacts.length); //will get a random value from the contacts array in data.js
console.log(randomizer); 

const threeContacts = contacts.splice(0, 3);


console.log(threeContacts); //Newyly obtained array

// Your code goes here ...

threeContacts.forEach(randomContact => {
  const newRow = document.createElement('tr'); 

  newRow.innerHTML += `


  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
console.log("newRow", newRow)


  // ITERATION 2 - Delete Buttons

tableBody.appendChild(newRow);
newRow.querySelector('.btn-delete').addEventListener('click',function(){

  newRow.remove();

})


})
// Iterate over the newly obtained array of 3 contacts
// and, for each contact, create a new table row and
// append it to the table body.




  
  

































  // ITERATION 3 - Like Buttons

// Get the Like button element from a newly created row.

// const newRow = document.createElement('tr'); 
//This is the created row 

// Add an event listener to the Like button element, for the click event.

// <button class="btn-like">



const likeBtns = document.querySelectorAll(".btn-like"); //NodeList

likeBtns.forEach(btn => {

btn.addEventListener("click", function (){

// console.log("likeBtns", likeBtns); //NodeList(4)
  console.log("btn",btn);

 btn.classList.toggle("btn-like.selected");

 console.log("btn.classList", btn.classList);


// btn.classList.toggle("btn-like-selected");



// console.log("clicked"); //Working 

  });

});












// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

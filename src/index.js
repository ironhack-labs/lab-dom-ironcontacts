/*
// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");



*/

// ITERATION ONE

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
<td>
<img src="${randomContact.pictureUrl}" />
</td>
<td> ${randomContact.name} </td>
<td>${randomContact.popularity.toFixed(2)} </td>
<td>
<button class="btn-like">Delete</button>
</td>
<td>
<button class="btn-like">
<img src="./image/icon.png" alt="like" />
</button>
</td>

`;

  //delete button

tableBody.appendChild(exampleRow);
const exampleDeleteBtn = document.querySelector(".btn-delete");
exampleDeleteBtn.addEventListener("click",()=>{
exampleRow.remove();
});



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

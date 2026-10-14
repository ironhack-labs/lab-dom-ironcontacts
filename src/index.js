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

  const deleteButton = exampleRow.querySelector(".btn-delete");

deleteButton.addEventListener("click", () => {
  exampleRow.remove();
});

const likeButton = exampleRow.querySelector(".btn-like");

likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
  });

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  let exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  const deleteButton = exampleRow.querySelector(".btn-delete");

deleteButton.addEventListener("click", () => {
  exampleRow.remove();
});

   const likeButton = exampleRow.querySelector(".btn-like");

likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("selected");
  });
  

  tableBody.appendChild(exampleRow);
})

console.log(threeContacts);
console.log(deleteButton);
console.log(likeButton);


// splice method
//iterate over the new 3 contacts and create new table row and append it to table body
//appendChild() each new table row to table body

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
 
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const firstContact = threeContacts[0];
const firstRow = document.createElement("tr");
firstRow.innerHTML = `
  <td>
    <img src="${firstContact.pictureUrl}" />
  </td>
  <td> ${firstContact.name} </td>
  <td> ${firstContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(firstRow);

const secondContact = threeContacts[1];
const secondRow = document.createElement("tr");
secondRow.innerHTML = `
  <td>
    <img src="${secondContact.pictureUrl}" />
  </td>
  <td> ${secondContact.name} </td>
  <td> ${secondContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(secondRow);

const thirdContact = threeContacts[2];
const thirdRow = document.createElement("tr");
thirdRow.innerHTML = `
  <td>
    <img src="${thirdContact.pictureUrl}" />
  </td>
  <td> ${thirdContact.name} </td>
  <td> ${thirdContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(thirdRow);
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
 tableBody.addEventListener("click", (event) => {
   if (event.target.classList.contains("btn-delete")) {
       const rowToDelete = event.target.closest("tr");
       rowToDelete.remove();
  }
})
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  tableBody.addEventListener("click", (event) => {
   if (event.target.classList.contains("btn-like")) {
       const heartToColor = event.target.closest("tr");
       heartToColor.classList.toggle("selected");
  }
})
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

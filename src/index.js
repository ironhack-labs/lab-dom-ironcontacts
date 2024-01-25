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

threeContacts.forEach((contants) => {
  //console.log (contacts);

  const firstThreeRows = document.createElement("tr");
firstThreeRows.innerHTML = `
  <td>
    <img src="${contants.pictureUrl}" />
  </td>
  <td> ${contants.name} </td>
  <td> ${contants.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(firstThreeRows);
})


  // ITERATION 2 - Delete Buttons

  const tableBody3 = document.querySelector("tbody#contacts");
  
  const oneContact = contacts.splice(0,1);
  oneContact.forEach(contact => {
  const newRow = document.createElement("tr");
  
  newRow.innerHTML =`
  <td>
  <img src="${contact.pictureUrl}"/>
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
  </td>`;
  tableBody3.appendChild(newRow);
});

  const deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener("click", () => {
      const row = deleteButton.closest("tr");
      row.remove();
  });
  });
  
  
  // ITERATION 3 - Like Buttons
  const likeButtons = document.querySelectorAll(".btn-like");

  likeButtons.forEach((likeButton) => {
      likeButton.addEventListener("click", function () {
      this.classList.toggle("selected");
  });
});
  
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

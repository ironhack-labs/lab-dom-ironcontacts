// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// FUNCTIONS
function deleteContact(btn) {
  btn.addEventListener("click", function() {
    this.parentElement.parentElement.remove();
  });
}

function likeContact(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("selected");
  });
}

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
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
`;

tableBody.appendChild(exampleRow);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);
})

  
// ITERATION 2 - Delete Buttons

// Your code goes here ...
const btnDelete = document.querySelectorAll(".btn-delete");

btnDelete.forEach(btn => {
    deleteContact(btn);
});



// ITERATION 3 - Like Buttons

// Your code goes here ...
const btnLike = document.querySelectorAll(".btn-like");

btnLike.forEach(btn => {
    likeContact(btn);
});

  

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", function() {

  // Check if there are contacts left
  if (contacts.length === 0) {
    return;
  }

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
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  tableBody.appendChild(exampleRow);

  // Add event listeners to the new buttons
  const newDeleteButton = exampleRow.querySelector(".btn-delete");
  const newLikeButton = exampleRow.querySelector(".btn-like");

  deleteContact(newDeleteButton);
  likeContact(newLikeButton);
});
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
threeContacts.forEach((contact) => {
  const threeContacts = document.createElement("tr");
  threeContacts.innerHTML = `
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
  tableBody.appendChild(threeContacts);
  // ITERATION 2 - Delete Buttons

  // Your code goes here ...
  let button_delete = threeContacts.querySelector(".btn-delete");
  button_delete.addEventListener("click", () => {
    threeContacts.remove();
    let like_button = threeContacts.querySelector(".btn-like");

    // ITERATION 3 - Like Buttons

    // Your code goes here ...

    like_button.addEventListener("click", () => {
      threeContacts.toggle(".selected");
    });
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
let adding_new_random_contact = document.getElementById("btn-add-random");
// 1 - Add an event listener to the randm contact
// 2 - when clicked,  will get new contact
adding_new_random_contact.addEventListener("click", () => {
  // 3- create a random contact inside the new table
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const newTableRow = document.createElement("tr");
  newTableRow.innerHTML = `
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
  tableBody.appendChild(newTableRow);
  let button_delete = newTableRow.querySelector(".btn-delete");
  button_delete.addEventListener("click", () => {
    newTableRow.remove();
  });
});

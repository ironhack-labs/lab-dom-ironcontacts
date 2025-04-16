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
  const contactRow = document.createElement("tr");
  contactRow.className = "contact-row";
  contactRow.innerHTML = `
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
  tableBody.appendChild(contactRow);
  // const deleteButton = contactRow.querySelector(".btn-delete");
  // deleteButton.onclick = () => contactRow.remove();
});

// ITERATION 2 - Delete Buttons
// Your code goes here ...
const contactRows = document.querySelectorAll(".contact-row");
contactRows.forEach((contact) => {
  const deleteButton = contact.querySelector(".btn-delete");
  deleteButton.onclick = () => contact.remove();
});
// const deleteButton = document.querySelectorAll(".btn-delete");
// deleteButton.forEach((button) => {
//   button.onclick = () => {
//     button.parentElement.parentElement.remove();
//   };
// });

// deleteButton.addEventListener("click", () => {
//   deleteButton.remove();
// });
// function deleteRow() {
//   return contactRow.remove();
// }

// ITERATION 3 - Like Buttons
const likeButtons = document.querySelectorAll(".btn-like");
likeButtons.forEach((button) => {
  button.onclick = () => {
    button.classList.toggle("selected");
  };
});

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

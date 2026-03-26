// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
let tableBody = document.querySelector("tbody#contacts");
let rmvButtons = document.querySelectorAll(".btn-delete");
let likeBtns = document.querySelectorAll(".btn-like");
console.log("Botones encontrados:", likeBtns.length);
// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
let randomIndex = Math.floor(Math.random() * contacts.length);
let splicedArr = [...contacts].splice(randomIndex, 1);

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
const threeContacts = [...contacts].splice(0, 3);

// Your code goes here ...
threeContacts.forEach((x) => {
  let rows = document.createElement("tr");
  rows.innerHTML = `
  <td>
    <img src="${x.pictureUrl}" />
  </td>
  <td> ${x.name} </td>
  <td> ${x.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(rows);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
function deleteButton(event) {
  const row = event.currentTarget.closest("tr");
  row.remove();
  // rows update.
}
// ITERATION 3 - Like Buttons

// Your code goes here ...
function likeButton(event) {
  event.currentTarget.classList.toggle("selected");
}
// Bonus: ITERATION 4 - Add Random Contacts
function newContact(event) {
  let index = Math.floor(Math.random() * contacts.length);
  let newContact = [...contacts].splice(index, 1)[0];
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newContact.pictureUrl}" />
  </td>
  <td> ${newContact.name} </td>
  <td> ${newContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(newRow);
  const removeBtn = newRow.querySelector(".btn-delete");
  const lkButton = newRow.querySelector(".btn-like");
  removeBtn.addEventListener("click", deleteButton);
  lkButton.addEventListener("click", likeButton);
}
// Your code goes here ...
window.addEventListener("load", () => {
  rmvButtons = document.querySelectorAll(".btn-delete");
  likeBtns = document.querySelectorAll(".btn-like");
  rmvButtons.forEach((btn) => btn.addEventListener("click", deleteButton));
  likeBtns.forEach((btn) => btn.addEventListener("click", likeButton));
  buttonAddRandom.addEventListener("click", newContact);
});

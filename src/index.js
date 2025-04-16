// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
function generateRandomRow() {
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
  //edited the example row to keep functionality consistent and make it reusable
  const removeButton = exampleRow.querySelector(".btn-delete");
  removeButton.addEventListener("click", () => {
    exampleRow.remove();
  });

  const heartButton = exampleRow.querySelector(".btn-like");
  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("selected");
  });

  tableBody.appendChild(exampleRow);
}
generateRandomRow();

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
for (const contact of threeContacts) {
  const autoRow = document.createElement("tr");
  autoRow.innerHTML = `
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
  // ITERATION 2 - Delete Buttons
  const deleteButton = autoRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    autoRow.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeButton = autoRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  tableBody.appendChild(autoRow);
}

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  generateRandomRow();
});

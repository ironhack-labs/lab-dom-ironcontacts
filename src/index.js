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
function addNewContactToTable(contact) {
  const row = document.createElement("tr");
  row.innerHTML = `
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
  const deleteBtnNode = row.querySelector("button.btn-delete");
  deleteBtnNode.addEventListener("click", () => {
    row.remove();
  });

  // ITERATION 3 - Like Buttons
  const likeBtnNode = row.querySelector("button.btn-like");
  likeBtnNode.addEventListener("click", () => {
    likeBtnNode.classList.toggle("selected");
  });

  tableBody.appendChild(row);
}

// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => addNewContactToTable(contact));

// Bonus: ITERATION 4 - Add Random Contacts
document.querySelector("button#btn-add-random").addEventListener("click", () => {
  const randomContactIndex = Math.floor(Math.random() * contacts.length);
  const splicedContactArray = contacts.splice(randomContactIndex, 1);

  // Get the element from the spliced array
  const contact = splicedContactArray[0];
  addNewContactToTable(contact);
});
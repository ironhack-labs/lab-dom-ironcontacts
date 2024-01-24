// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row


// ITERATION 1 - Display 3 Contacts
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);
  tableBody.appendChild(contactRow);
});

// ITERATION 2 - Delete Buttons
threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);

  const deleteButton = contactRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    contactRow.remove();
  });

  tableBody.appendChild(contactRow);
});

// ITERATION 3 - Like Buttons
threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);

  const likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    contactRow.classList.toggle("selected");
  });

  tableBody.appendChild(contactRow);
});

// Helper function to create a contact row
function createContactRow(contact) {
  const contactRow = document.createElement("tr");
  const contactInfoCells = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>`;
  const deleteButtonCell = `<td><button class="btn-delete">Delete</button></td>`;
  const likeButtonCell = `<td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>`;

  contactRow.innerHTML = contactInfoCells + deleteButtonCell + likeButtonCell;

  return contactRow;
}

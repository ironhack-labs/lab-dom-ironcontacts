// ------------------------------
// ITERATION 0 | Example Row
// ------------------------------

const tableBody = document.getElementById("contacts-body");

// Example row added for you
function createExampleRow() {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="https://i.imgur.com/7vQD0fPs.jpg" alt="" width="80"></td>
    <td>Example Name</td>
    <td>4.3</td>
    <td>
        <button class="btn-delete">Delete</button>
        <button class="btn-like">Like</button>
    </td>
  `;

  tableBody.appendChild(row);
}

createExampleRow();

// =====================================================
// HELPER FUNCTION: Create a contact row dynamically
// =====================================================

function createContactRow(contact) {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" width="80"></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
      <button class="btn-like">Like</button>
    </td>
  `;

  // DELETE BUTTON — Iteration 2
  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => newRow.remove());

  // LIKE BUTTON — Iteration 3
  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  return newRow;
}

// ------------------------------
// ITERATION 1 | Display First 3 Contacts
// ------------------------------

const firstThree = contacts.splice(0, 3);

firstThree.forEach(contact => {
  const row = createContactRow(contact);
  tableBody.appendChild(row);
});

// ------------------------------
// BONUS | ITERATION 4 — Add Random Contact
// ------------------------------

document.getElementById("btn-add-random").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];

  const newRow = createContactRow(randomContact);
  tableBody.appendChild(newRow);
});

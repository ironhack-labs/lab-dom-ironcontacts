// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Función auxiliar para crear una fila
function createContactRow(contact) {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", function () {
    newRow.remove();
  });

  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected");
  });

  return newRow;
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
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
`;

const exampleDeleteBtn = exampleRow.querySelector(".btn-delete");
exampleDeleteBtn.addEventListener("click", function () {
  exampleRow.remove();
});

const exampleLikeBtn = exampleRow.querySelector(".btn-like");
exampleLikeBtn.addEventListener("click", function () {
  exampleLikeBtn.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

for (let i = 0; i < threeContacts.length; i++) {
  const newRow = createContactRow(threeContacts[i]);
  tableBody.appendChild(newRow);
}

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", function () {
  if (contacts.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContactArray = contacts.splice(randomIndex, 1);
  const randomContact = randomContactArray[0];

  const newRow = createContactRow(randomContact);
  tableBody.appendChild(newRow);
});
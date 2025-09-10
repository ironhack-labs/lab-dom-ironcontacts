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

const deleteBtn = exampleRow.querySelector(".btn-delete");
deleteBtn.addEventListener("click", () => {
  exampleRow.remove();
});

const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
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
  tableBody.appendChild(tableRow);

  const deleteBtn = tableRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    tableRow.remove();
  });
  const likeBtn = tableRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
// Get the element from the spliced array

const randomBtn = document.getElementById("btn-add-random");
randomBtn.addEventListener("click", () => {
  const randomContactIndex = Math.floor(Math.random() * contacts.length);
  const contactFromArr = contacts.splice(randomContactIndex, 1);
  const randomContactToAdd = contactFromArr[0];

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>
    <img src="${randomContactToAdd.pictureUrl}" />
  </td>
  <td> ${randomContactToAdd.name} </td>
  <td> ${randomContactToAdd.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(tableRow);

  const deleteBtn = tableRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    tableRow.remove();
  });
  const likeBtn = tableRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

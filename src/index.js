// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// --- ITERATION 0 | Example Row ---
const randomIndex0 = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex0, 1);
const randomContact0 = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact0.pictureUrl}" />
  </td>
  <td>${randomContact0.name}</td>
  <td>${randomContact0.popularity.toFixed(2)}</td>
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

// Events for Iteration 0
exampleRow.querySelector(".btn-delete").addEventListener("click", () => exampleRow.remove());
exampleRow.querySelector(".btn-like").addEventListener("click", function() {
  this.classList.toggle("selected");
});

// --- ITERATION 1 | Show 3 contacts ---
const firstThreeContacts = contacts.splice(0, 3);

firstThreeContacts.forEach(contact => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newRow);

  // --- ITERATION 2 | Delete Buttons ---
  newRow.querySelector(".btn-delete").addEventListener("click", () => newRow.remove());

  // --- ITERATION 3 | Like Buttons ---
  newRow.querySelector(".btn-like").addEventListener("click", function() {
    this.classList.toggle("selected");
  });
});

// --- ITERATION 4 | Add Random Contact ---
buttonAddRandom.addEventListener("click", function() {
  if (contacts.length === 0) return; // No quedan contactos

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete event
  newRow.querySelector(".btn-delete").addEventListener("click", () => newRow.remove());

  // Like event
  newRow.querySelector(".btn-like").addEventListener("click", function() {
    this.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});
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
console.log("contacts restantes:", contacts.length);
console.log("threeContacts:", threeContacts);
// Your code goes here ...

threeContacts.forEach(function (contact) {
  const tr = document.createElement(`tr`);

  tr.innerHTML = `
  <td><img src="${contact.pictureUrl}" /></td>
  <td>${contact.name}</td>
  <td>${contact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
      <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
               </button>
  </td>
`;

  const deleteBtn = tr.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", function () {
    tr.remove();
  });

  const likeBtn = tr.querySelector(".btn-like");
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(tr);
});

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", function () {
  if (contacts.length === 0) {
    console.log("No quedan contactos para añadir.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * contacts.lenght);
  const spliced = contacts.splice(randomIndex, 1);
  const contact = spliced[0];

  const tr = document.createElement(`tr`);

  tr.innerHTML = `
  <td><img src="${contact.pictureUrl}" /></td>
  <td>${contact.name}</td>
  <td>${contact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
      <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
               </button>
  </td>
`;

  const deleteBtn = tr.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", function () {
    tr.remove();
  });

  const likeBtn = tr.querySelector(".btn-like");
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(tr);
});

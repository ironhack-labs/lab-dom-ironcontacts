// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const contact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
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

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// const table = document.getElementById("contacts");
threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  </td>`;
  tableBody.append(newRow);
  // ITERATION 2 - Delete Buttons
  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => newRow.remove("td"));

  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle("selected"));
});

// Bonus: ITERATION 4 - Add Random Contacts
const randomBtn = document.querySelector("#btn-add-random");
randomBtn.addEventListener("click", () => {
  const randomPick = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomPick];
  const newRandomRow = document.createElement("tr");
  newRandomRow.innerHTML = `
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
  </td>`;
  const deleteBtn = newRandomRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => newRandomRow.remove("td"));

  const likeBtn = newRandomRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle("selected"));
  tableBody.append(newRandomRow);
});

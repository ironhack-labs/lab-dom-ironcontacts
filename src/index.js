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

for (let contact of threeContacts) {
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
  tableBody.appendChild(row);

  // const deleteContact = row.querySelector(".btn-delete");

  // deleteContact.addEventListener("click", (e) => {
  //   row.remove();
  // });
}

// ITERATION 2 - Delete Buttons

// const allButtons = document.querySelectorAll(".btn-delete");
// allButtons.forEach((deleteContact) => {
//   deleteContact.addEventListener("click", (e) => {
//     e.target.closest("tr").remove();
//   });
// });

const allDeleteButtons = document.querySelectorAll(".btn-delete");
for (const deleteButton of allDeleteButtons) {
  deleteButton.addEventListener("click", (e) => {
    e.target.closest("tr").remove();
  });
}

// ITERATION 3 - Like Buttons

const allLikeButtons = document.querySelectorAll(".btn-like");
for (const likeButton of allLikeButtons) {
  likeButton.addEventListener("click", (e) => {
    e.target.closest(".btn-like").classList.toggle("selected");
  });
}

// Bonus: ITERATION 4 - Add Random Contacts

const addRandomContact = document.querySelector("#btn-add-random");
addRandomContact.addEventListener("click", (e) => {
  const splicedArrNew = contacts.splice(randomIndex, 1);
  const randomNew = splicedArrNew[0];
  const random = document.createElement("tr");
  random.innerHTML = `
  <td>
    <img src="${randomNew.pictureUrl}" />
  </td>
  <td> ${randomNew.name} </td>
  <td> ${randomNew.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  tableBody.appendChild(random);

  const deleteButton = random.querySelector(".btn-delete");
  // for (const deleteButton of allDeleteButtons) {
  deleteButton.addEventListener("click", (e) => {
    e.target.closest("tr").remove();
    // });
  });

  const likeButton = random.querySelector(".btn-like");
  // for (const button of allLikeButtons) {
  likeButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("selected");
  });
  // }
});

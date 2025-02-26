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

const btnDelete = exampleRow.querySelector(".btn-delete");
btnDelete.addEventListener("click", () => {
  // console.log("text");
  exampleRow.remove();
});

const btnLike = exampleRow.querySelector(".btn-like");
btnLike.addEventListener("click", () => {
  btnLike.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

for (let i = 0; i < threeContacts.length; i++) {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${threeContacts[i].pictureUrl}" />
  </td>
  <td> ${threeContacts[i].name} </td>
  <td> ${threeContacts[i].popularity.toFixed(2)} </td>
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

  const btnDelete = exampleRow.querySelector(".btn-delete");
  btnDelete.addEventListener("click", () => {
    // console.log("text");
    exampleRow.remove();
  });

  const btnLike = exampleRow.querySelector(".btn-like");
  btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("selected");
  });
}

// ITERATION 2 - Delete Buttons
// document.querySelectorAll(".btn-delete").forEach((button) => {
//   button.addEventListener("click", function () {
//     this.closest("tr").remove();
//   });
// });

// ITERATION 3 - Like Buttons

// document.querySelectorAll(".btn-delete").forEach((button) => {
//   button.addEventListener("click", function () {
//     this.closest("tr").toggle(
//   });
// });

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
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

  const btnDelete = exampleRow.querySelector(".btn-delete");
  btnDelete.addEventListener("click", () => {
    exampleRow.remove();
  });

  const btnLike = exampleRow.querySelector(".btn-like");
  btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("selected");
  });
});

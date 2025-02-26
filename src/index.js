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
  // console.log("text");
  btnLike.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
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

  const btnDelete = exampleRow.querySelector(".btn-delete");
  btnDelete.addEventListener("click", () => {
    // console.log("text");
    exampleRow.remove();
  });

  const btnLike = exampleRow.querySelector(".btn-like");
  btnLike.addEventListener("click", () => {
    // console.log("text");
    btnLike.classList.toggle("selected");
  });
});

// ITERATION 2 - Delete Buttons
// const btnDelete = document.querySelectorAll(".btn-delete");
// btnDelete.forEach((btnElem) => {
//   btnElem.addEventListener("click", () => {
//     console.log("text");
//     const parentRow = btnElem.closest("tr");
//     parentRow.remove();
//   });
// });

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  const newRandomIndex = Math.floor(Math.random() * contacts.length);
  const newSplicedArr = contacts.splice(newRandomIndex, 1);
  const newRandomContact = newSplicedArr[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newRandomContact.pictureUrl}" />
  </td>
  <td> ${newRandomContact.name} </td>
  <td> ${newRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(newRow);

  const btnDelete = newRow.querySelector(".btn-delete");
  btnDelete.addEventListener("click", () => {
    // console.log("text");
    newRow.remove();
  });

  const btnLike = newRow.querySelector(".btn-like");
  btnLike.addEventListener("click", () => {
    // console.log("text");
    btnLike.classList.toggle("selected");
  });
});

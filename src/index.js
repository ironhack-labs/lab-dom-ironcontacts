// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
// const deleteBtnElement = newRow.querySelector("btn-delete");

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

buttonAddRandom.addEventListener(`click`, () => {
  console.log(`newAddition`);
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomPerson = contacts[randomIndex];
  contacts.splice(randomIndex, 1);
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${randomPerson.pictureUrl}" />
  </td>
  <td> ${randomPerson.name} </td>
  <td> ${randomPerson.popularity.toFixed(2)} </td>
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
  const deleteBtnElement = exampleRow.querySelector(`.btn-delete`);
  deleteBtnElement.addEventListener(`click`, () => {
    console.log(`deleted`);
    exampleRow.style.display = `none`;
  });
  // ITERATION 3 - Like Buttons
  const likeBtnElement = exampleRow.querySelector(`.btn-like`);
  likeBtnElement.addEventListener(`click`, () => {
    console.log(`liked`);
    likeBtnElement.classList.toggle(`selected`);
  });
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((oneContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
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

  // ITERATION 2 - Delete Buttons
  const deleteBtnElement = exampleRow.querySelector(`.btn-delete`);
  deleteBtnElement.addEventListener(`click`, () => {
    console.log(`deleted`);
    exampleRow.style.display = `none`;
  });
  // ITERATION 3 - Like Buttons
  const likeBtnElement = exampleRow.querySelector(`.btn-like`);
  likeBtnElement.addEventListener(`click`, () => {
    console.log(`liked`);
    likeBtnElement.classList.toggle(`selected`);
  });

  // Bonus: ITERATION 4 - Add Random Contacts
});

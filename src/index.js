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

// Your code goes here ...

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
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

  const deleteButton = newRow.querySelector(".btn-delete");

  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });
});

// const buttonLike = newRow.querySelector(".btn-like");

// buttonLike.addEventListener("click", () => {
//   buttonLike.classList.toggle("selected");
// });

buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];
  const newRandomRow = document.createElement("tr");

  newRandomRow.innerHTML = `
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

  tableBody.appendChild(newRandomRow);

  const buttonLike2 = newRandomRow.querySelector(".btn-like");
  buttonLike2.addEventListener("click", () => {
    buttonLike2.classList.toggle("selected");
  });

  const buttonDelete2 = newRandomRow.querySelector(".btn-delete");
  buttonDelete2.addEventListener("click", () => {
    newRandomRow.remove();
  });
});

//
//   const buttonLike = newRandomRow.querySelector(".btn-like");
//   buttonLike.addEventListener("click", () => {
//     buttonLike.classList.toggle("selected");
//   });
//   const buttonDelete = newRandomRow.querySelector(".btn-delete");
//   buttonDelete.addEventListener("click", () => {
//     newRandomRow.remove();
//   });
// });

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

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

const threeContacts = contacts.splice(0, 3);
const createContactRow = (contact) => {
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
  return row;
};
threeContacts.forEach((person) => {
  const element = createContactRow(person);
  tableBody.appendChild(element);
  const deleteButton = element.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    element.remove();
  });
  const likeButton = element.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  console.log(likeButton, "like button here");
});

const addRandomContact = (arrContacts) => {
  const randomIndex = Math.floor(Math.random() * arrContacts.length);
  const randomContact = arrContacts.splice(randomIndex, 1)[0];

  tableBody.prepend(createContactRow(randomContact));
};

buttonAddRandom.addEventListener("click", () => {
  addRandomContact(contacts);
});
// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...
// Iterate over the first three contacts
// document.querySelectorAll(".btn-delete").forEach((button, index) => {
//   button.addEventListener("click", () => {
//     button.closest(".your-container-selector").remove();
//   });
// });

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

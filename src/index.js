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
    <button class="btn-like btn-like selected">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

let deleteButton = exampleRow.querySelector(".btn-delete");

deleteButton.addEventListener("click", function () {
  exampleRow.remove();
  contacts.push(randomContact);
});

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Your code goes here ...
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  let row = document.createElement("tr");
  row.insertAdjacentHTML(
    "beforeend",
    `
  <td><img src="${contact.pictureUrl}" /></td>
  <td>${contact.name}</td>
  <td>${contact.popularity.toFixed(2)}</td>
  <td><button class="btn-delete">Delete</button></td>
  <td><button class="btn-like "btn-like selected"><img src="./images/icon.png" alt="like" /></button></td>
`
  );

  tableBody.appendChild(row);

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  let deleteButton = row.querySelector(".btn-delete");

  deleteButton.addEventListener("click", function () {
    row.remove();
    contacts.push(contact);
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  let likeButton = row.querySelector(".btn-like");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  let row = document.createElement("tr");
  row.insertAdjacentHTML(
    "beforeend",
    `
  <td><img src="${randomContact.pictureUrl}" /></td>
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td><button class="btn-delete">Delete</button></td>
  <td><button class="btn-like "btn-like selected"><img src="./images/icon.png" alt="like" /></button></td>
`
  );

  let deleteButton = row.querySelector(".btn-delete");

  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  let likeButton = row.querySelector(".btn-like");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(row);
});

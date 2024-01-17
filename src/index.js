// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody3 = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
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
  </td>`;

const exampleDeleteButton = exampleRow.querySelector(".btn-delete");
exampleDeleteButton.addEventListener("click", () => {
  exampleRow.remove();
});
tableBody3.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
const threeContacts = contacts.splice(0, 3);
const tableBody2 = document.querySelector("tbody#contacts");

threeContacts.forEach(contact => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = ` 
    <td>
      <img src="${contact.pictureUrl}"/>
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

  tableBody2.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  tableBody3.appendChild(newRow);
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons
  tableBody2.appendChild(newRow);
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    newRow.classList.toggle("btn-like");
    newRow.classList.toggle("btn-like-selected");
  });
});


// Bonus: ITERATION 4 - Add Random Contacts
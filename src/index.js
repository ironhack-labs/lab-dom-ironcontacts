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

const newdeleteBtn = document.querySelector(".btn-delete");
newdeleteBtn.addEventListener("click", () => {
  exampleRow.style.display = "none";
});

const newlikeBtn = document.querySelector(".btn-like");
newlikeBtn.addEventListener("click", () => {
  newlikeBtn.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((oneContact) => {
  const newRowContact = document.createElement("tr");
  newRowContact.innerHTML = ` <td>
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
  </td> `;
  tableBody.appendChild(newRowContact);

  const deleteBtn = newRowContact.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    console.log("work");
    newRowContact.style.display = "none";
  });

  const likeBtn = newRowContact.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

buttonAddRandom.addEventListener("click", () => {
  const newRandomIndex = Math.floor(Math.random() * contacts.length);

  const newRandomContactrowBelow = contacts[newRandomIndex];

  contacts.splice(newRandomIndex, 1);
  const newContactrow = document.createElement("tr");
  newContactrow.innerHTML = `<td>
    <img src="${newRandomContactrowBelow.pictureUrl}" />
  </td>
  <td> ${newRandomContactrowBelow.name} </td>
  <td> ${newRandomContactrowBelow.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;
  tableBody.appendChild(newContactrow);

  const newTestButtonDelete = newContactrow.querySelector(".btn-delete");
  newTestButtonDelete.addEventListener("click", () => {
    newContactrow.style.display = "none";
  });

  const newTestlikebutton = newContactrow.querySelector(".btn-like");
  newTestlikebutton.addEventListener("click", () => {
    newTestlikebutton.classList.toggle("selected");
  });
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

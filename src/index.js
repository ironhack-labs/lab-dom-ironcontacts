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

const deleteButton = exampleRow.querySelector(".btn-delete");
  const likeButton = exampleRow.querySelector(".btn-like");

  deleteButton.addEventListener("click", () => {
   exampleRow.remove();
  });

  likeButton.addEventListener("click", (element) => {
    const btn = element.currentTarget;
    btn.classList.toggle("selected")
  });


tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const row = document.createElement("tr");

  row.innerHTML = ` <td>
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

  const deleteButton = row.querySelector(".btn-delete");
  const likeButton = row.querySelector(".btn-like");

  deleteButton.addEventListener("click", () => {
   row.remove();
  });

  likeButton.addEventListener("click", (element) => {
    const btn = element.currentTarget;
    btn.classList.toggle("selected")
  });


tableBody.appendChild(row)
});



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

  const deleteButton = exampleRow.querySelector(".btn-delete");
  const likeButton = exampleRow.querySelector(".btn-like");

  deleteButton.addEventListener("click", () => {
   exampleRow.remove();
  });

  likeButton.addEventListener("click", (element) => {
    const btn = element.currentTarget;
    btn.classList.toggle("selected")
  });

tableBody.appendChild(exampleRow);  
});




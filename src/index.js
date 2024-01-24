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
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
  </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
for (let i = 0; i < threeContacts.length; i++) {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
  <td>
    <img src="${threeContacts[i].pictureUrl}"/>
  </td>
  <td> ${threeContacts[i].name} </td>
  <td> ${threeContacts[i].popularity.toFixed(i)} </td>
  <td>
    <button class= "btn-like">
      <img src="./images/icon.png" alt= "like" />
    </button>
  </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
`;
  const deleteButton = contactRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    contactRow.remove();
  });

  const likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(contactRow);
}
// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const newRandom = document.createElement("tr");
  newRandom.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;
  const deleteButton = newRandom.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRandom.remove();
  });

  const likeButton = newRandom.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  tableBody.appendChild(newRandom);
});

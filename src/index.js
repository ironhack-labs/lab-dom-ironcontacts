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

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact, i) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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

  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  });

  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});

buttonAddRandom.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * contacts.length);
  let randomElement = contacts[randomIndex];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${randomElement.pictureUrl}" />
  </td>
  <td> ${randomElement.name} </td>
  <td> ${randomElement.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  });

  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});

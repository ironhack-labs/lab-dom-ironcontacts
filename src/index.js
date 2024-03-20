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
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...
threeContacts.forEach(currentContact => {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>
    <img src="${currentContact.pictureUrl}" />
  </td>
  <td> ${currentContact.name} </td>
  <td> ${currentContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...
  tableRow.querySelector(".btn-delete").addEventListener("click", () => {
    tableBody.removeChild(tableRow);
  });



  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = tableRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  tableBody.appendChild(tableRow);
})


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomElement = contacts.splice(randomIndex, 1)[0];
  console.log(randomElement);
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
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
  tableRow.querySelector(".btn-delete").addEventListener("click", () => {
    tableBody.removeChild(tableRow);
  });

  const likeButton = tableRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  })

  tableBody.appendChild(tableRow);
})
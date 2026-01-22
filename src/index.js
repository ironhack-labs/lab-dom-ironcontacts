// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");




// ITERATION 1 - Display 3 contacts

// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // ITERATION 2 - Delete button ussing class btn-delete on each created row

  const deleteBtn = row.querySelector(".btn-delete"); 
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  tableBody.appendChild(row);

  // ITERATION 3 - Like
  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected"); // This means if class exists remove it or if not add it
  });

  tableBody.appendChild(row);
});



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


 
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete
  row.querySelector(".btn-delete").addEventListener("click", () => {
    row.remove();
  });

  // Like
  row.querySelector(".btn-like").addEventListener("click", () => {
    row.querySelector(".btn-like").classList.toggle("selected");
  });

  tableBody.appendChild(row);
});

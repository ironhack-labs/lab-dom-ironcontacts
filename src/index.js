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
exampleRow.querySelector(".btn-delete").addEventListener("click", () => {
  exampleRow.remove();
});
exampleRow.querySelector(".btn-like").addEventListener("click", (e) => {
  const btn = exampleRow.querySelector(".btn-like");
  btn.classList.toggle("selected");
  console.log("click");
});
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contacto, i) => {
  const expRow = document.createElement("tr");

  expRow.innerHTML = `
    <td>
      <img src="${contacto.pictureUrl}" />
    </td>
    <td> ${contacto.name} </td>
    <td> ${contacto.popularity.toFixed(2)} </td>
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
  expRow.querySelector(".btn-delete").addEventListener("click", () => {
    expRow.remove();
  });

  // ITERATION 3 - Like Buttons
  expRow.querySelector(".btn-like").addEventListener("click", (e) => {
    const btn = expRow.querySelector(".btn-like");
    btn.classList.toggle("selected");
    console.log("click");
  });

  tableBody.appendChild(expRow);
});
// Your code goes here ...

// Your code goes here ...

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];
  const row = document.createElement("tr");

  row.innerHTML = `
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
  // ITERATION 2 - Delete Buttons
    row.querySelector(".btn-delete").addEventListener("click", () => {
    row.remove();
  });

  // ITERATION 3 - Like Buttons
    row.querySelector(".btn-like").addEventListener("click", (e) => {
    const btn = row.querySelector(".btn-like");
    btn.classList.toggle("selected");

   
  });
   tableBody.appendChild(row);
});
// Your code goes here ...

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
for (let i = 0; i < threeContacts.length; i++) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${threeContacts[i].pictureUrl}" />
  </td>
  <td> ${threeContacts[i].name} </td>
  <td> ${threeContacts[i].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>`;
  tableBody.appendChild(newRow);
  // ITERATION 2 - Delete Buttons
  let buttonDel = newRow.querySelector(".btn-delete");
  buttonDel.onclick = function (e) {
    newRow.remove();
  };
  let buttonLike = newRow.querySelector(".btn-like");
  buttonLike.onclick = function (e) {
    console.log("clicked");
    buttonLike.classList.toggle("selected");
  };
}
buttonAddRandom.onclick = function (e) {
  const randomIndex2 = Math.floor(Math.random() * contacts.length);
  const splicedArr2 = contacts.splice(randomIndex2, 1);

  // Get the element from the spliced array
  const randomContact2 = splicedArr2[0];

  const exampleRow2 = document.createElement("tr");
  exampleRow2.innerHTML = `
  <td>
    <img src="${randomContact2.pictureUrl}" />
  </td>
  <td> ${randomContact2.name} </td>
  <td> ${randomContact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(exampleRow2);
  let buttonDel = exampleRow2.querySelector(".btn-delete");
  buttonDel.onclick = function (e) {
    exampleRow2.remove();
  };
  let buttonLike = exampleRow2.querySelector(".btn-like");
  buttonLike.onclick = function (e) {
    buttonLike.classList.toggle("selected");
  };
};

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

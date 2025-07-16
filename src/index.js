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
  const exampleRow = document.createElement("tr");

  exampleRow.innerHTML = `
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
  </td>
`;
  tableBody.appendChild(exampleRow);
}

// ITERATION 2 - Delete Buttons

let buttonDelete = document.querySelectorAll(".btn-delete");
buttonDelete.forEach((element) => {
  element.addEventListener("click", (e) => {
    let row = e.currentTarget.closest("tr");
    if (row) row.remove();
    // let parentTd = element.parentNode;
    // let grandParentTr = parentTd.parentNode;
    // let grandParentsParent = grandParentTr.parentNode;
    // console.log(grandParentTr);
    // grandParentsParent.removeChild(grandParentTr);
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
let likeButton = document.querySelectorAll(".btn-like");
likeButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
let addRandomContactButton = document.querySelector("#btn-add-random");

addRandomContactButton.addEventListener("click", (e) => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];
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

  //
  let buttonDelete = document.querySelectorAll(".btn-delete");
  buttonDelete[buttonDelete.length - 1].addEventListener("click", (e) => {
    let row = e.currentTarget.closest("tr");
    if (row) row.remove();
  });

  //
  let likeButton = document.querySelectorAll(".btn-like");
  likeButton[likeButton.length - 1].addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("selected");
  });
});

// Your code goes here ...

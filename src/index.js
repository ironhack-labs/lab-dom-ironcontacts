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

const deleteButtonExampleRow = exampleRow.querySelector(".btn-delete");
deleteButtonExampleRow.addEventListener("click", function () {
  exampleRow.remove();
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((element) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
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

  // deleteContact(exampleRow);

  const likeButton = exampleRow.querySelector(".btn-like");
  likeButton.addEventListener("click", likeContact);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
var theParent = document.querySelector("tbody");
theParent.addEventListener("click", deleteContact, false);
//theParent.addEventListener("click", likeContact, false);

function deleteContact(event) {
  const target = event.target;

  if (target.classList.contains("btn-delete")) {
    target.closest("tr").remove();
  }
}

// ITERATION 3 - Like Buttons

// Your code goes here ...
function likeContact(event) {
  let target = event.target;

  target.classList.toggle("selected");
}
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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
exampleRow.setAttribute("data-contact-name", randomContact.name); // Set data-contact-name

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

const delButton = exampleRow.querySelector(".btn-delete");
delButton.addEventListener("click", function () {
  exampleRow.remove();
});

const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("selected");
});

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((currentContact) => {
  const newRow = document.createElement("tr");
  newRow.setAttribute("data-contact-name", randomContact.name); // Set data-contact-name

  newRow.innerHTML = `
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

  const delButton = newRow.querySelector(".btn-delete");
  delButton.addEventListener("click", function () {
    newRow.remove();
  });

  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", addRandomContact);

function addRandomContact() {
  // Get all currently displayed contact names
  const displayedNames = Array.from(tableBody.querySelectorAll("tr")).map(
    (row) => row.dataset.contactName
  );

  // Filter contacts to only those not currently displayed
  const availableContacts = contacts.filter(
    (contact) => !displayedNames.includes(contact.name)
  );

  if (availableContacts.length === 0) {
    alert("No more contacts to add.");
    return; // Exit the function early if no available contacts left
  }

  const randomIndex = Math.floor(Math.random() * availableContacts.length);
  const randomContact = availableContacts[randomIndex];

  // Create and append the new row for the randomly selected contact
  const randomRow = document.createElement("tr");
  // Set the data-contact-name attribute to help with duplicate management
  randomRow.setAttribute("data-contact-name", randomContact.name);
  randomRow.innerHTML = `
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

  // Adding functionality to the Delete button
  const delButton = randomRow.querySelector(".btn-delete");
  delButton.addEventListener("click", function () {
    randomRow.remove();
  });

  // Adding functionality to the Like button
  const likeButton = randomRow.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(randomRow);
}

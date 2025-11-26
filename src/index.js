// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

// function to add inner HTML for a contact row
function createContactRow(contact) {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = `
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
  return contactRow;
}

const exampleRow = createContactRow(randomContact);

// Append the example row to the table body
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact => {
  const contactRow = createContactRow(contact);
  tableBody.appendChild(contactRow);
});

  // ITERATION 2 - Delete Buttons - Display alert when table body is empty
  
  // Your code goes here ...
  tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
      const rowToDelete = event.target.closest("tr");
      tableBody.removeChild(rowToDelete);
      if (tableBody.children.length === 0) {
        alert("No more contacts!");
      }
    }
  });

  // ITERATION 3 - Like Buttons - Toggle "selected" class on like button click

  // Your code goes here ...
  tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-like") || event.target.closest(".btn-like")) {
      const likeButton = event.target.closest(".btn-like");
      likeButton.classList.toggle("selected");
    }
  });

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) {
    alert("No more contacts to add!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  const contactRow = createContactRow(randomContact);
  tableBody.appendChild(contactRow);
});



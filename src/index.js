// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// function to remove and return a random contact from the contacts array
function getRandomContact() {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  return splicedArr[0];
}

const randomContact = getRandomContact();

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

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");

  row.innerHTML = `
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

// ITERATION 2 - Delete Buttons
// Attach event listener to all delete buttons in the row
const deleteButtons = row.querySelectorAll(".btn-delete");

deleteButtons.forEach((deleteButton) => {
  // 2. Listen for clicks on it
  deleteButton.addEventListener("click", () => {
    // 3. Remove the row from the table
    row.remove();
  });
});

tableBody.appendChild(row);
});

// ITERATION 3 - Like Buttons
 const likeButtons = tableBody.getElementsByClassName('btn-like')

    const likeButtonsArray = [...likeButtons]
  
  likeButtonsArray.forEach((button) => {
  
    button.addEventListener('click', () => {
      console.log("Hitting like button!!!")
      button.classList.toggle('selected')
    })
  })
  


// function to add a contact row to the table
function addContactRow(contact) {
  const row = document.createElement("tr");

  row.innerHTML = `
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
  // Attaching delete event
  const deleteButtons = row.querySelectorAll(".btn-delete");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      row.remove();
    });
  });

  // attaching like event
  const likeButtons = row.querySelectorAll(".btn-like");
  likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
    });
  });

  tableBody.appendChild(row);
}



// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  // Do not  add anything if there are no contacts left
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  addContactRow(randomContact);
});


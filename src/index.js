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
        <img src="images/icon.png" alt="Like" />
      </button>
    </td>
  `;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

/* Loop through the array of 3 contacts */
threeContacts.forEach((contact) => {
  /* Create a new table row */
  const newRow = document.createElement("tr");
  /* Add the contact information inside the row */
  newRow.innerHTML = `
      <td>
    <img src="${contact.pictureUrl}" />
  </td>
    <td> ${contact.name} </td>
      <td>${contact.popularity.toFixed(2)}</td>
        <td>
          <button class="btn-delete">Delete</button>
        </td>
          <td>
            <button class="btn-like">
              <img src="images/icon.png" alt="Like" />
            </button>
          </td>
    `;


  // ITERATION 2 - Delete Buttons

  // Your code goes here ...
  /* Get the delete button inside the current row */
  const deleteButton = newRow.querySelector(".btn-delete");

  /* Add click event listner to the delete buttton */
  deleteButton.addEventListener("click", () => {

    /* Remove the current row */
    newRow.remove();
  });


  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  /* Get the like button inside the current row */
  const likeButton = newRow.querySelector(".btn-like");

  /* Add click event listner to the like button */
  likeButton.addEventListener("click", () => {
    /* Toggle the "selected" class on the like button */
    likeButton.classList.toggle("selected");
  });

  /* Append the new row to the table body */
  tableBody.appendChild(newRow);
});



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="images/icon.png" alt="Like" />
      </button>
    </td>
  `;

  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(newRow);
});
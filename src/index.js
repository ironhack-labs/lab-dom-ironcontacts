// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 1 - Display 3 contacts

// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Loop through the 3 contacts
threeContacts.forEach((contact) => {
  // Create a new table row
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
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

  // ITERATION 2 - Delete Button
  const deleteBtn = newRow.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });

  // ITERATION 3 - Like Button
  
  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  // Add the row to the table
  tableBody.appendChild(newRow);
});
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

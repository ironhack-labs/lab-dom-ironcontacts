function createContactRow(contact) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" height="100" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      ${contact.wonOscar ? "🏆" : ""} ${contact.wonEmmy ? "🌟" : ""}
    </td>
    <td>
      <button class="btn-delete">Delete</button>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete button
  const deleteButton = row.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  // Like button
  const likeButton = row.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

  return row;
}




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
const tableBody = document.querySelector("tbody#contacts");

threeContacts.forEach(contact => {
  const row = createContactRow(contact);
  tableBody.appendChild(row);
});

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addRandomBtn = document.querySelector("#add-random-btn");

addRandomBtn.addEventListener("click", () => {
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  const row = createContactRow(randomContact);
  tableBody.appendChild(row);
});

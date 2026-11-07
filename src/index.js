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
threeContacts.forEach((contact) => {
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
<td>
`;

tableBody.appendChild(contactRow);
});

  
 // ITERATION 2 - Delete Buttons

 //your code goes here ...

const deleteButtons = document.querySelectorAll(".btn-delete");

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("tr").remove();
  });
});
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButtons = document.querySelectorAll(".btn-like");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  // stop if there are no contacts left to add
  if (contacts.length === 0) return;

  const index = Math.floor(Math.random() * contacts.length);
  const contact = contacts.splice(index, 1)[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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


// EXTRA - Full screen image

const pictures = document.querySelectorAll("td:first-child img");

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      picture.requestFullscreen();
    }
  });
});

const newPicture = newRow.querySelector("td:first-child img");

newPicture.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    newPicture.requestFullscreen();
  }
});


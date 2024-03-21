// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const renderRow = (contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  const deleteBtn = newRow.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    // console.log(newRow, 'Something', contact.name)
    newRow.remove();
  });

  // console.log(deleteBtn)

  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
};

renderRow(randomContact);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach((currentContact) => {
  renderRow(currentContact);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts
const addRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  if (splicedArr.length > 0) {
    const randomContact = splicedArr[0];
    renderRow(randomContact);
  } else {
    buttonAddRandom.setAttribute("disabled", "true");
  }
};
buttonAddRandom.addEventListener("click", () => {
  addRandomContact();
});
// Your code goes here ...

// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];


// A function to add elements
function addRowWithData(contactsToAdd) {
  const addedRow = document.createElement("tr");
  addedRow.innerHTML = `
  <td>
    <img src="${contactsToAdd.pictureUrl}" alt="photo" />
  </td>
  <td> ${contactsToAdd.name} </td>
  <td> ${contactsToAdd.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  const deleteButton = addedRow.querySelector(".btn-delete");
  const likeButton = addedRow.querySelector(".btn-like");

  deleteButton.addEventListener("click", () => {
    contacts.push(contactsToAdd);
    addedRow.remove();
    buttonAddRandom.disabled = false;
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected")
  });

  tableBody.appendChild(addedRow);
}


// adding the first random element
addRowWithData(randomContact)


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...


//adding three contacts
threeContacts.forEach(contact => addRowWithData(contact));
  


// ITERATION 2 - Delete Buttons
// added in the function
  

  // ITERATION 3 - Like Buttons
  // Your code goes here ...

  
  

// Bonus: ITERATION 4 - Add Random Contact
// grabbing the add Random COntact button

buttonAddRandom.addEventListener("click", () => {
  if (contacts.length > 0) {

    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0];
    addRowWithData(randomContact);
  } else {
    console.log("No more contacts to add.");
    buttonAddRandom.disabled = true;
  }
});

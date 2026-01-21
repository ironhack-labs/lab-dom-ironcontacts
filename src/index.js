// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row

addRowToTable(createRandomContact())

function createRandomContact() {
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  return splicedArr[0];
}

function addRowToTable(contact) {
  const contactRow = document.createElement("tr");
  contactRow.innerHTML = createContactRow(contact)
  const deleteNode = contactRow.querySelector(".btn-delete")
  deleteNode.addEventListener("click", () => {
    contactRow.remove()
  })
  const likeNode = contactRow.querySelector(".btn-like")
  likeNode.addEventListener("click", () => {
    likeNode.classList.toggle("selected")
  })
  tableBody.appendChild(contactRow);
}

function createContactRow( contact ) {
  return `
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
`
}


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  addRowToTable(contact)
});


  
  // ITERATION 2 - Delete Buttons
  
  const tableRowNodes = tableBody.querySelectorAll("tr")
  tableRowNodes.forEach((tableRowNode) => {
    const deleteNode = tableRowNode.querySelector(".btn-delete")
    deleteNode.addEventListener("click", () => {
      tableRowNode.remove()
    })
  })
  
  

  // ITERATION 3 - Like Buttons

  tableRowNodes.forEach((tableRowNode) => {
    const likeNode = tableRowNode.querySelector(".btn-like")
    likeNode.addEventListener("click", () => {
      likeNode.classList.toggle("selected")
    })
  })

  
  


// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {
  addRowToTable(createRandomContact())
})

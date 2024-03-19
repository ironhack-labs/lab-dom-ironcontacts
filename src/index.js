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
addButtonListeners(exampleRow);
buttonAddRandom.addEventListener("click", addRandomContact);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

function addContacts(contactsArr, contactCount){
  const contactToAdd = contactsArr.splice(0, contactCount);

  for(const currentContact of contactToAdd){
    addContact(currentContact);
  }
}

addContacts(contacts, 3);

function addRandomContact(){
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];
  addContact(randomContact);
}

function addContact(contact){
  const newRow = document.createElement("tr");
  newRow.innerHTML = `  
  <td>
    <img src="${contact.pictureUrl}" />  
  </td>
  <td>
    ${contact.name};
  </td>
  <td>
    ${contact.popularity.toFixed(2)}
  </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(newRow);

  addButtonListeners(newRow);
}

function addButtonListeners(rowElement){
  const deleteButtons = rowElement.querySelector(".btn-delete");
  const likeButtons = rowElement.querySelector(".btn-like");

  deleteButtons.addEventListener("click",function(){
    deleteButtons.closest("tr").remove();
  })

  likeButtons.addEventListener("click",function(){
    likeButtons.classList.toggle("selected");
  })
}

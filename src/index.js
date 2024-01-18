// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index

function getRandomContact() {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  return contacts.splice(randomIndex, 1)[0]
}

const exampleRow = document.createElement("tr");
const exampleRowContact = getRandomContact()
createContactRow(exampleRowContact)
// exampleRow.innerHTML = `
//   <td>
//     <img src="${exampleRowContact.pictureUrl}" />
//   </td>
//   <td> ${exampleRowContact.name} </td>
//   <td> ${exampleRowContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);



function createContactRow(contact) {
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

  removeElement(row.querySelector(".btn-delete"), row);
  likeBtnAvail(row.querySelector(".btn-like"));
  tableBody.appendChild(row);

}
// Your code goes here ...
threeContacts.forEach(contact => createContactRow(contact))

// ITERATION 2 - Delete Buttons

// Your code goes here ...
function removeElement(key, row) {
  key.addEventListener("click", () => {
    row.remove()
  })
}


// ITERATION 3 - Like Buttons

// Your code goes here ...

function likeBtnAvail(key) {
  key.addEventListener("click", () => {
    key.classList.toggle('selected')
  })
}


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", () => {

  createContactRow(getRandomContact())
})

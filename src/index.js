// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

function addContactToList (contact){
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
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

  tableBody.appendChild(exampleRow);

  const deleteButton = exampleRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    exampleRow.remove();
  });

  const likeButton = exampleRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected');
  });

}

addContactToList(randomContact);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  addContactToList(contact);
})
  
  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  // let deleteButtons = document.querySelectorAll('button.btn-delete');
  // deleteButtons.forEach((deleteButton) => {
  //   deleteButton.addEventListener('click', () => {
  //     deleteButton.closest('tr').remove();
  //   })
  // });

  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  // let likeButtons = document.querySelectorAll('button.btn-like');
  // likeButtons.forEach((likeButton) => {
  //   likeButton.addEventListener('click', () => {
  //     likeButton.classList.toggle('selected');
  //   })
  // });



// // Bonus: ITERATION 4 - Add Random Contacts


buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];
  addContactToList(randomContact);
})


// Your code goes here ...

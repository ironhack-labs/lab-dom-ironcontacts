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
const tableBody = document.getElementById('contactsBody');

// Iterate over the first 3 contacts and create a new row in the table for each one
threeContacts.forEach(contact => {
  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = contact.name;
  newRow.appendChild(nameCell);

  const emailCell = document.createElement('td');
  emailCell.textContent = contact.email;
  newRow.appendChild(emailCell);

  const phoneCell = document.createElement('td');
  phoneCell.textContent = contact.phone;
  newRow.appendChild(phoneCell);

  tableBody.appendChild(newRow);
});
    
   
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  const deleteButtonCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    newRow.remove();
  });
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const editButtonCell = document.createElement('td');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    console.log('Edit button clicked for:', contact);
  });


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

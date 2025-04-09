// HTML ELEMENTS

const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
console.log(splicedArr[0]);
console.log(contacts);

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
console.log("Contato removido:", randomContact);
console.log("tableBody:", tableBody);




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;
  tableBody.appendChild(row);
});


// Your code goes here ...



// ITERATION 2 - Delete Buttons

// Your code goes here ...
const deleteButtons = document.querySelectorAll('.btn-delete');
deleteButtons.forEach(button => {
  button.addEventListener('click', function () {
    const row = button.closest('tr');
    row.remove();
    console.log("Contact deleted:", row);
  });
});


// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButtons = document.querySelectorAll('.btn-like');
likeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const likeIcon = button.querySelector('img');
    if (likeIcon.style.filter === 'grayscale(100%)') {
      likeIcon.style.filter = '';
    } else {
      likeIcon.style.filter = 'grayscale(100%)';
    }
  });
});




// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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

const deleteButton = exampleRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', function() {
    exampleRow.remove();
  });



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(contact =>{
const threeRow = document.createElement("tr");
threeRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">s
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
//iteration2
tableBody.appendChild(threeRow);
const deleteButton = threeRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', function() {
    threeRow.remove();
  });
//iteration3
const likeButton = threeRow.querySelector('.btn-like');
  likeButton.addEventListener('click', function(){
    threeRow.classList.toggle('selected') 
});
});

  
// ITERATION 2 - Delete Buttons
  
// Your code goes here ...
// ITERATION 3 - Like Buttons

// Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

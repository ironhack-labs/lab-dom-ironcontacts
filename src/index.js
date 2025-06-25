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

 // ITERATION 2 - Delete Buttons
  
 const deleteBtn = exampleRow.querySelector('.btn-delete');

 deleteBtn.addEventListener('click', () => {
    exampleRow.remove();
 });


  // ITERATION 3 - Like Buttons

  const likeBtn = exampleRow.querySelector('.btn-like');

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('selected');
  });
tableBody.appendChild(exampleRow);




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(element => {
  const row = document.createElement("tr");
row.innerHTML = `
  <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  // ITERATION 2 - Delete Buttons
  
 const deleteBtn = row.querySelector('.btn-delete');

 deleteBtn.addEventListener('click', () => {
    row.remove();
 });



  // ITERATION 3 - Like Buttons

  const likeBtn = row.querySelector('.btn-like');

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('selected');
  });
  
   tableBody.appendChild(row);
});



// Bonus: ITERATION 4 - Add Random Contacts


const randomBtn = document.querySelector('#btn-add-random');

randomBtn.addEventListener('click', () => {
  const randomIndexForContacts = Math.floor(Math.random() * contacts.length);
const randomContact = contacts.splice(randomIndexForContacts, 1)[0];

const randomRow = document.createElement("tr");
randomRow.innerHTML = `
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

  // ITERATION 2 - Delete Buttons
  
 const deleteBtn = randomRow.querySelector('.btn-delete');

 deleteBtn.addEventListener('click', () => {
    randomRow.remove();
 });



  // ITERATION 3 - Like Buttons

  const likeBtn = randomRow.querySelector('.btn-like');

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('selected');
  });
  
   tableBody.appendChild(randomRow);
});







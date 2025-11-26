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
threeContacts.forEach(currentCeleb => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${currentCeleb.pictureUrl}" />
  </td>
  <td> ${currentCeleb.name} </td>
  <td> ${currentCeleb.popularity.toFixed(2)} </td>
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

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteButton = newRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    newRow.remove()
  })
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    console.log(`clicked!!!!!`)
    likeButton.classList.toggle('selected')

  })
  
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
  // get a random celebrity
  const randomCeleb = contacts[randomIndex] 

  // remove that celeb from the array so no duplicates
  contacts.splice(randomIndex, 1);
  console.log(randomCeleb)

  const randomCelebRow = document.createElement("tr");
  randomCelebRow.innerHTML = `
  <td>
    <img src="${randomCeleb.pictureUrl}" />
  </td>
  <td> ${randomCeleb.name} </td>
  <td> ${randomCeleb.popularity} </td>
  <td> 
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  tableBody.appendChild(randomCelebRow);

  const deleteButton = randomCelebRow.querySelector('.btn-delete');
  deleteButton.addEventListener('click', () => {
    randomCelebRow.remove()
  })
  
  const likeButton = randomCelebRow.querySelector('.btn-like');
  likeButton.addEventListener('click', () => {
    console.log(`clicked!!!!!`)
    likeButton.classList.toggle('selected')

  })
})


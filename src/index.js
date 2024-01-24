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



// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((randomContact) => { // creates a loop
  const createSpace = document.createElement("tr"); // creates a new element 
  createSpace.innerHTML = ` 
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `; // added html to the element
  tableBody.appendChild(createSpace); // add it on the page

  // delete btn
  const deleteBtn = createSpace.querySelector('.btn-delete') // creates a variable for each btn with this class
  deleteBtn.addEventListener('click', () => { // creates an event 
    createSpace.remove() // remove the block
  });

  //like btn
  const likeBtn = createSpace.querySelector('.btn-like'); // set variable for like btns
  likeBtn.addEventListener('click', () => { // add en event
    likeBtn.setAttribute('class', 'selected'); // modify the attribute to add a second class if clicked
    createSpace.classList.toggle('selected'); // 
  });
  });

// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener('click', () => {

  // get random guy every click on the button
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  // create a row for every click
  const createSpace = document.createElement("tr"); 
  createSpace.innerHTML = ` 
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `; 
  tableBody.appendChild(createSpace); // add it on the page
  
  // delete btn, same settings as ite 3
  const deleteBtn = createSpace.querySelector('.btn-delete') 
  deleteBtn.addEventListener('click', () => { 
    createSpace.remove() 
  });

  //like btn, same settings as ite 4 
  const likeBtn = createSpace.querySelector('.btn-like'); // set variable for like btns
  likeBtn.addEventListener('click', () => { // add en event
    likeBtn.setAttribute('class', 'selected'); // modify the attribute to add a second class if clicked
    createSpace.classList.toggle('selected'); // 
  });
})

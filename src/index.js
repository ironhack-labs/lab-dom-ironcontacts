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
// Get the first 3 contacts from the 'contacts' array.]

// Your code goes here ...
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((element) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener('click', function() {
    newRow.remove();
  })
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle("selected")
    if (likeButton.classList.contains("selected")) {
      likeButton.style.backgroundColor = "red";
    } else {
      likeButton.style.backgroundColor = "#d4d3d3";
    }
  })

  tableBody.appendChild(newRow);
})



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const randomButton = document.querySelector("#btn-add-random")
randomButton.addEventListener('click', () => {
  const newSplicedArr = contacts.splice(randomIndex, 1);
  const newContact = newSplicedArr[0];
  
  const anotherRow = document.createElement("tr");
  anotherRow.innerHTML = `
    <td>
      <img src="${newContact.pictureUrl}" />
    </td>
    <td> ${newContact.name} </td>
    <td> ${newContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  const deleteButton = anotherRow.querySelector(".btn-delete");
  deleteButton.addEventListener('click', function() {
    anotherRow.remove();
  })
  const likeButton = anotherRow.querySelector(".btn-like");
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle("selected")
    if (likeButton.classList.contains("selected")) {
      likeButton.style.backgroundColor = "red";
    } else {
      likeButton.style.backgroundColor = "#d4d3d3";
    }
  });
  tableBody.appendChild(anotherRow);
})
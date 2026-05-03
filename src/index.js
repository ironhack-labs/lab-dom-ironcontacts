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
console.log(threeContacts)
threeContacts.forEach((contact) => {

const rowAdd = document.createElement("tr")


rowAdd.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td><button class="btn-delete">Delete</button>
    </td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `

  tableBody.appendChild(rowAdd)  

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
const deleteButton = rowAdd.querySelector(".btn-delete")

  deleteButton.addEventListener("click", () => 
    rowAdd.remove())
  

  console.log(rowAdd)

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

const likeButton = rowAdd.querySelector(".btn-like")

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected")
  })

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

/*function addRandomContact() {
  // Get random index
  const randomIndex = Math.floor(Math.random() * contacts.length);

  // Get random contact
  const contact = contacts[randomIndex];

  // Create row
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" width="50"/></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-like">Like</button></td>
    <td><button class="btn-delete">Delete</button></td>
  `;

  // Append to table
  document.querySelector("tbody").appendChild(newRow);

  
  const deleteBtn = newRow.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });

  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
}*/})
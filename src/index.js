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

// tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
console.log(threeContacts); // we are getting the first three


threeContacts.forEach((contact) => {
  const liContact = document.createElement("tr");
  liContact.innerHTML = `
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

  tableBody.appendChild(liContact);
});

// ITERATION 2 - Delete Buttons

const deleteButtons = document.querySelectorAll(".btn-delete");

deleteButtons.forEach((remove) => {
  remove.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
  })
})


// ITERATION 3 - Like Buttons

// Your code goes here ...

const likeButtons = document.querySelectorAll(".btn-like");

likeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // button is the element
    button.classList.toggle('selected');

    console.log("LIKE BUTTON WORKS");
  })
})



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const randomAddButton = document.querySelector("#btn-add-random");


randomAddButton.addEventListener("click", (event) => {
  // 1 Get a random contact
  const randomIndex = Math.floor(Math.random() * contacts.length);


  const splicedArr = contacts.splice(randomIndex, 1);

  // Get the element from the spliced array
  const randomContact1 = splicedArr[0]; // THIS IS AN OBJECT

  const randomContactElement = document.createElement("tr"); // this is a new element
  randomContactElement.innerHTML = `
    <td>
      <img src="${randomContact1.pictureUrl}" />
    </td>
    <td> ${randomContact1.name} </td>
    <td> ${randomContact1.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(randomContactElement);

  console.log("random BUTTON WORKS");
})

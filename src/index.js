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

// const tbody = document.querySelector("tbody");

threeContacts.forEach((contact) =>{
  const row = document.createElement("tr");

row.innerHTML = `
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
`

tableBody.appendChild(row);


 // ITERATION 2 - Delete Buttons
  
   // ✅ STEP 1: get delete button INSIDE this row
  const deleteBtn = row.querySelector(".btn-delete");
 // ✅ STEP 2: add event listener
  deleteBtn.addEventListener("click", () => {
    row.remove(); // ✅ removes the row
  });

})


  // ITERATION 3 - Like Buttons

    const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    row.classList.toggle("selected");
  });

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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

// ITERATION - Delete Buttons
    let deleteRow = exampleRow.querySelector(".btn-delete");

    deleteRow.addEventListener("click", function() {
        exampleRow.remove();
      });
      
// ITERATION - Like Buttons
      let likeButton = exampleRow.querySelector(".btn-like");
      
      likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("selected");
      });





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
const tableContact = threeContacts.forEach((contact) => {

  const oneRow = document.createElement("tr");
  oneRow.innerHTML = `
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
    tableBody.appendChild(oneRow);
    
    // ITERATION 2 - Delete Buttons
    let deleteRow = oneRow.querySelector(".btn-delete");

    deleteRow.addEventListener("click", function() {
        oneRow.remove();
      });
      
      // ITERATION 3 - Like Buttons
      let likeButton = oneRow.querySelector(".btn-like");
      
      likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("selected");
      });
  });
  

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

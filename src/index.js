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
// Your code goes here ...

const threeContacts = contacts.splice(0, 3); // Get first 3 contacts

threeContacts.forEach((element) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${element.pictureUrl || element.picture}" width="50" alt="${element.name}" />
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

  tableBody.appendChild(row); // Append row to the table body

 
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...


  // Select the delete button inside the row and add event listener


  const deleteBtn = row.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", () => {
      console.log(`Deleting`);
      row.remove();
    });
  

// Iterate through the first three contacts and create rows for them



  // ITERATION 3 - Like Buttons

//   Your code goes here ...

const likeBtn = row.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  console.log(likeBtn,"click");
  likeBtn.classList.toggle("selected");
});
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
});
buttonAddRandom.addEventListener("click", () => {
  
  // if (contacts.length === 0) return; // Prevent errors 

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];
  

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" width="50" alt="${randomContact.name}" />
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

  tableBody.appendChild(row); // Append row to the table body
});

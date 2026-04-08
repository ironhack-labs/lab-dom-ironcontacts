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
console.log(threeContacts);



// Contact one starts here ...

const contact1 = threeContacts[0,0];

const tableRow1Node = document.createElement("tr");

tableRow1Node.innerHTML = `
  <td>
    <img src="${contact1.pictureUrl}" />
  </td>
  <td> ${contact1.name} </td>
  <td> ${contact1.popularity.toFixed(3)} </td>
  <td>
    <button class="btn-delete">Delete</button>  
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(tableRow1Node);



// Contact two starts here ...

const contact2 = threeContacts[0,1];

const tableRow2Node = document.createElement("tr");

tableRow2Node.innerHTML = `
  <td>
    <img src="${contact2.pictureUrl}" />
  </td>
  <td> ${contact2.name} </td>
  <td> ${contact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(tableRow2Node);




// Contact there starts here ...

const contact3 = threeContacts[0,2];

const tableRow3Node = document.createElement("tr");

tableRow3Node.innerHTML = `
  <td>
    <img src="${contact3.pictureUrl}" />
  </td>
  <td> ${contact3.name} </td>
  <td> ${contact3.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(tableRow3Node);




// ITERATION 2 - Delete Buttons
  
  // Your code goes here ...


 // Delete row1... 
const row1DeleteNode = tableRow1Node.querySelector(".btn-delete");
// console.log (row1DeletelNode);
row1DeleteNode.addEventListener("click", () => {
tableRow1Node.remove()
});


// Delete row2...
const row2DeleteNode = tableRow2Node.querySelector(".btn-delete");
row2DeleteNode.addEventListener("click", () => {
tableRow2Node.remove()
});


// Delete random...

const row3DeleteNode = tableRow3Node.querySelector(".btn-delete");
row3DeleteNode.addEventListener("click", () => {
tableRow3Node.remove()
});
  
// Delete row3...

const randomDeleteNode = document.querySelector(".btn-delete");
randomDeleteNode.addEventListener("click", () => {
exampleRow.remove()
});




  // ITERATION 3 - Like Buttons 
const likedBtn = document.querySelectorAll(".btn-like").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");
  });
});


// Bonus: ITERATION 4 - Add Random Contacts

const addContactBtn = document.querySelector("#btn-add-random");

const randomContactAdd = contacts [Math.floor(Math.random() * contacts.length)];
const splicedContactArr = contacts.splice(randomContactAdd, 1);


//Building the table for new randome contact.....

const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${randomContactAdd.pictureUrl}" />
  </td>
  <td> ${randomContactAdd.name} </td>
  <td> ${randomContactAdd.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;



newRow.querySelector(".btn-like").addEventListener("click", () => {
newRow.querySelector(".btn-like").classList.toggle("selected");
  });

  newRow.querySelector(".btn-delete").addEventListener("click", () => {
  newRow.remove();
  });

  // Adding event listener....

  addContactBtn.addEventListener("click", () => { 
  tableBody.appendChild(newRow)++;
  });

 

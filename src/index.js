  
 
// Your code goes here ...
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
// Get the first 3 contacts from the 'contacts' array.`

const treecontacts = contacts.splice(0, 3);

treecontacts.forEach(contact => {
  const rowS = document.createElement("tr");
  rowS.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}" width="50"/>
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;


let deleteBtnNode = rowS.querySelector(".btn-delete");
deleteBtnNode.addEventListener("click", function()  {
  rowS.remove() 
});




let likeButton = rowS.querySelector(".btn-like");

likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
});




tableBody.appendChild(rowS);
});
 

  
// Your code goes here ...

 // ITERATION 2 - Delete Buttons
  
  
  
  // let deleteBtnNode = document.querySelector("#delete-btn")


  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

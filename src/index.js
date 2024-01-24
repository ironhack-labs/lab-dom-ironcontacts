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

//create a forEach loop to create 3 rows using the array splice made of the contacts array (threeContacts)
threeContacts.forEach((contact)=> {

//create a new table row and append it
  let newRow = document.createElement('tr');

//set the values for each 'tr' - creates 'tr' skeleton in HTML - REMEMBER TO CHECK IF THE OBJECT ABOVE IS WELL SELECTED - contact array object.
  newRow.innerHTML = `
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
  //Spreed Operator: collects all elements and spread them into a new non-primitive(array and objects) data type, like in this case - an array.
  tableBody.appendChild(newRow);
 
 // ITERATION 2 - Delete Buttons
  //Delete button event
  // add event listener for delete button
  let deleteBtn = document.querySelectorAll('.btn-delete');
    deleteBtn.forEach((deleteBtn)=> {
      deleteBtn.addEventListener('click', () => {
        // remove the row from the table
          tableBody.removeChild(newRow);
    })
});

});

  

  // ITERATION 3 - Like Buttons
  const likeBtns = document.querySelectorAll('.btn-like');
  likeBtns.forEach((likeBtn)=>{
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle("selected");
    })
  })

  
  
 
  
  



  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

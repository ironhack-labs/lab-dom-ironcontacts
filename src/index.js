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
const deleteButton = exampleRow.querySelector('.btn-delete');


tableBody.appendChild(exampleRow);
deleteButton.addEventListener('click', function(event){
  exampleRow.remove()
});


const createRow = (element) => {
  const displaycontact = document.createElement("tr");
displaycontact.innerHTML = `
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
const deleteButton = displaycontact.querySelector('.btn-delete');

tableBody.appendChild(displaycontact);
deleteButton.addEventListener('click', function(event){
  displaycontact.remove()
});
const likeButton = displaycontact.querySelector('.btn-like')
  likeButton.addEventListener('click', (event)=>{
    likeButton.classList.toggle('selected')
  });
};

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(element => {
  createRow(element)
});
// Your code goes here ...
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
buttonAddRandom.addEventListener('click', function(event){
  if(contacts.length === 0){
    return ;
  }else{
  const Index = Math.floor(Math.random() * contacts.length);
  const Arr = contacts.splice(randomIndex, 1);
  createRow(Arr[0]) 
  }
  
});
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

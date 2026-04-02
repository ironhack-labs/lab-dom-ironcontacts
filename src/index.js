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
//console.log(threeContacts)
// Your code goes here ...
threeContacts.forEach(element => {
  const newRow = document.createElement('tr')
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
  `
  tableBody.appendChild(newRow)
    const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newRow.style.display  = 'none';
  });
    const likeButton = newRow.querySelector(".btn-like");
    likeButton.addEventListener("click", () =>{
      likeButton.classList.toggle("selected");
  });

});


  
  // ITERATION 2 - Delete Buttons
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length); 78
  const randomContactArr = contacts.splice(randomIndex, 1)
  
  randomContactArr.forEach(obj =>{
    const randomRow = document.createElement('tr')

    randomRow.innerHTML = `
          <td>
    <img src="${obj.pictureUrl}" />
  </td>
  <td> ${obj.name} </td>
  <td> ${obj.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
    `
    tableBody.appendChild(randomRow)
    
    const deleteButton = randomRow.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
    randomRow.style.display  = 'none';})
    const likeButton = randomRow.querySelector(".btn-like");
    likeButton.addEventListener("click", () =>{
    likeButton.classList.toggle("selected");
  })
    

})});
// Your code goes here ...

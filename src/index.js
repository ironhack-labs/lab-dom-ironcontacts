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

let elemButton3 = exampleRow.querySelector('.btn-delete')
elemButton3.addEventListener("click", () => {
  exampleRow.remove()
 })

 let elemLikeButton3 = exampleRow.querySelector('.btn-like')
  elemLikeButton3.addEventListener("click", () => {
  exampleRow.classList.toggle("selected")
 })
  



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach(eachContact => {
const newContactRow = document.createElement("tr");
newContactRow.innerHTML =`
<td>
    <img src="${eachContact.pictureUrl}" />
  </td>
  <td> ${eachContact.name} </td>
  <td> ${eachContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(newContactRow);

let elemButton2 = newContactRow.querySelector('.btn-delete')
elemButton2.addEventListener("click", () => {
  newContactRow.remove()
 })

 let elemLikeButton2 = newContactRow.querySelector('.btn-like')
  elemLikeButton2.addEventListener("click", () => {
  newContactRow.classList.toggle("selected")
 })
  
})
  
  // ITERATION 2 - Delete Buttons
// Your code goes here ...
  const randomIndex2 = Math.floor(Math.random() * contacts.length);
const splicedArr2 = contacts.splice(randomIndex2, 1);

const randomContact2 = splicedArr2[0];

const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${randomContact2.pictureUrl}" />
  </td>
  <td> ${randomContact2.name} </td>
  <td> ${randomContact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(newRow);

let elemButton = newRow.querySelector('.btn-delete')
elemButton.addEventListener("click", () => {
  newRow.remove()
 
})
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

 let elemLikeButton = newRow.querySelector('.btn-like')
  elemLikeButton.addEventListener("click", () => {
  newRow.classList.toggle("selected")
 })
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

let elemAddRandomButton = document.querySelector('#btn-add-random');
elemAddRandomButton.addEventListener( "click", () => {
  
  const randomIndex3 = Math.floor(Math.random() * contacts.length);
const splicedArr3 = contacts.splice(randomIndex3, 1);

const randomContact3 = splicedArr3[0];

const newRandomRow = document.createElement("tr");
newRandomRow.innerHTML = `
  <td>
    <img src="${randomContact3.pictureUrl}" />
  </td>
  <td> ${randomContact3.name} </td>
  <td> ${randomContact3.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(newRandomRow);

let elemButton4 = newRandomRow.querySelector('.btn-delete')
elemButton4.addEventListener("click", () => {
  newRandomRow.remove()
})

let elemLikeButton4 = newRandowRow.querySelector('.btn-like')
  elemLikeButton4.addEventListener("click", () => {
  newRandomRow.classList.toggle("selected")
 })
  
})

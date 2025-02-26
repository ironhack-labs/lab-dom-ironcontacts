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
const buttonElement = exampleRow.querySelector(".btn-delete");
buttonElement.addEventListener("click", () => {
 exampleRow.remove() });

 const buttonLike= exampleRow.querySelector(".btn-like");
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("selected");});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach((oneContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
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
  // ITERATION 2 - Delete Buttons
  
//here is where we make the button 'clickable'
  const buttonElement = exampleRow.querySelector(".btn-delete");
  buttonElement.addEventListener("click", () => {
   exampleRow.remove() });

 // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const buttonLike= exampleRow.querySelector(".btn-like");
  buttonLike.addEventListener("click", () => {
    buttonLike.classList.toggle("selected");});
  });

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
  const buttonRandom = document.querySelector('#btn-add-random')
  buttonRandom.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
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

// to add at the beginning
//tableBody.insertBefore(exampleRow, tableBody.firstChild); 

const buttonElement = exampleRow.querySelector(".btn-delete");
buttonElement.addEventListener("click", () => {
 exampleRow.remove() });


const buttonLike= exampleRow.querySelector(".btn-like");
buttonLike.addEventListener("click", () => {
  buttonLike.classList.toggle("selected");});
});
  

  

 
  
  



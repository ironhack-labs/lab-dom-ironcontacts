// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `<td>
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
  </td>`
  //tableBody.appendChild(exampleRow);
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  const currentRow = document.createElement("tr");
  currentRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete
      ">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `
  tableBody.appendChild(currentRow);

  // ITERATION 2 - Delete Buttons
const deleteButtons = currentRow.querySelector(".btn-delete");
deleteButtons.addEventListener("click", function(e) {
  currentRow.remove();
})


 // ITERATION 3 - Like Buttons
const myLikeButton = currentRow.querySelector (".btn-like");
myLikeButton.addEventListener("click", function(e) {
    myLikeButton.classList.toggle("selected");
});

});


// Bonus: ITERATION 4 - Add Random Contacts
const addRandomButton = document.querySelector("#btn-add-random");  
addRandomButton.addEventListener("click", function(e) {
  const randomIndex2 = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex2, 1);
  const randomContact = splicedArr[0];

  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete
      ">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `
  tableBody.appendChild(randomRow);

  const deleteButtons = randomRow.querySelector(".btn-delete");
  deleteButtons.addEventListener("click", function(e) {
  randomRow.remove();
})

const myLikeButton = randomRow.querySelector (".btn-like");
myLikeButton.addEventListener("click", function(e) {
    myLikeButton.classList.toggle("selected");
});

});

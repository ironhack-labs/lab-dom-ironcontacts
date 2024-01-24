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

// Your code goes here ..
threeContacts.forEach((eachContacts) =>{
  
const threeContactsRow = document.createElement("tr")
threeContactsRow.innerHTML = `
<td>
  <img src = "${eachContacts.pictureUrl}" />
</td>
<td> ${eachContacts.name} </td>
<td> ${eachContacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(threeContactsRow)

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
const deleteButton = threeContactsRow.querySelector(".btn-delete")
deleteButton.onclick = () => {
  threeContactsRow.remove(eachContacts)
}

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

const likeButton = threeContactsRow.querySelector(".btn-like")
likeButton.onclick = () => {
  likeButton.classList.toggle("selected")
}  
})



// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.onclick = () => {
   const newRandomIndex = Math.floor(Math.random() * contacts.length);
  const newSplicedArr = contacts.splice(newRandomIndex, 1);

  const newRandomContact = newSplicedArr[0];

const newRow = document.createElement("tr");
newRow.innerHTML = `
  <td>
    <img src="${newRandomContact.pictureUrl}" />
  </td>
  <td> ${newRandomContact.name} </td>
  <td> ${newRandomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(newRow)

  
const deleteButton = newRow.querySelector(".btn-delete")
deleteButton.onclick = () => {
  newRow.remove(newRandomContact)
}


const likeButton = newRow.querySelector(".btn-like")
likeButton.onclick = () => {
  likeButton.classList.toggle("selected")
}  
}


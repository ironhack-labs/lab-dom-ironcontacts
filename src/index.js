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
const threeContact = contacts.splice(0, 3);
threeContact.forEach((randomContact) => {
  const newRow= document.createElement("tr");
  newRow.innerHTML = `
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
  `
  tableBody.appendChild(newRow);



  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteButton = newRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  });

  
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("selected");
  });

});
  

  
  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addRandomButton = document.querySelector("#btn-add-random");
addRandomButton.addEventListener("click", function () {
const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts[randomIndex];
const addRandomRow = document.createElement("tr");
addRandomRow.innerHTML = `<td>
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
`
tableBody.appendChild(addRandomRow);

const deleteButtonOfAddContact = addRandomRow.querySelector(".btn-delete");
  deleteButtonOfAddContact.addEventListener("click", function () {
    addRandomRow.remove();
  });

  const btnLikeOfAddContact = addRandomRow.querySelector(".btn-like");
  btnLikeOfAddContact.addEventListener("click", function () {
btnLikeOfAddContact.classList.toggle("selected");
  })
})

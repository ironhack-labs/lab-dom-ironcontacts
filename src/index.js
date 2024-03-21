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

threeContacts.forEach((el) =>{
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${el.pictureUrl}" />
  </td>
  <td> ${el.name} </td>
  <td> ${el.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`
tableBody.appendChild(row)

// ITERATION 2 - Delete Buttons
  
  

const deleteButton = row.querySelector(".btn-delete")
deleteButton.addEventListener("click", function(){
row.remove()
  })

// ITERATION 3 - Like Buttons

const likeButton = row.querySelector(".btn-like")
likeButton.addEventListener("click",function(){
likeButton.classList.toggle("selected")
} )

})


   


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * contacts.length)

  const randomContact1 = contacts[randomIndex]

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${randomContact1.pictureUrl}" />
    </td>
    <td> ${randomContact1.name} </td>
    <td> ${randomContact1.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `
  tableBody.appendChild(row)

  const deleteButton = row.querySelector(".btn-delete")
  deleteButton.addEventListener("click", function(){
  row.remove()
  })
  
const likeButton = row.querySelector(".btn-like")
likeButton.addEventListener("click",function(){
likeButton.classList.toggle("selected")
} )

  
  
})

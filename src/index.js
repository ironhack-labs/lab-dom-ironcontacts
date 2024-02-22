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

// like button for the example

const likeButton = exampleRow.querySelector(".btn-like");

  likeButton.addEventListener("click", function () {

    likeButton.classList.toggle("selected")
  })

  // delete button for example 

  const deleteButton = exampleRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function () {
    exampleRow.remove()
  })




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.


// Your code goes here ...

const splicedthreeContacts = contacts.splice(0, 3);

splicedthreeContacts.forEach((contacts) => {

  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${contacts.pictureUrl}" />
  </td>
  <td> ${contacts.name} </td>
  <td> ${contacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(row);


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  const deleteButton = row.querySelector(".btn-delete");

  deleteButton.addEventListener("click", function (){

    row.remove()
  })


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButton = row.querySelector(".btn-like");

  likeButton.addEventListener("click", function (){

    likeButton.classList.toggle("selected")
  })
})

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.addEventListener("click", function (){

  const elementRandom = Math.floor(Math.random() * contacts.length );
  const contactRandom = contacts.splice(elementRandom, 1)[0];

  const Newrow = document.createElement("tr");
  Newrow.innerHTML = `
  <td>
    <img src="${contactRandom.pictureUrl}" />
  </td>
  <td> ${contactRandom.name} </td>
  <td> ${contactRandom.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(Newrow);

  // delete button for the Random Contact

  const deleteButton = Newrow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", function (){
    Newrow.remove()
  })

  // like button 
  const likeButton = Newrow.querySelector(".btn-like");

  likeButton.addEventListener("click", function (){

    likeButton.classList.toggle("selected")
  })

})



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
console.log(threeContacts)
// Your code goes here ...
  
  threeContacts.forEach(contactObj => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${contactObj.pictureUrl}" />
  </td>
  <td> ${contactObj.name} </td>
  <td> ${contactObj.popularity.toFixed(2)} </td>
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



  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
      newRow.remove() 

  
    })
    const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected")
  })
  })


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...


const randomBtn = document.querySelector("#btn-add-random")

randomBtn.addEventListener("click", () => {
const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts[randomIndex]
const randomRow = document.createElement("tr");
randomRow.innerHTML = `
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

tableBody.appendChild(randomRow);

const deleteBtn = randomRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
      randomRow.remove() 

  
    })
    const likeBtn = randomRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected")
  })

})
  




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
// Your code goes here ...

console.log(threeContacts);

threeContacts.forEach((element) => {
  const makeTr = document.createElement("tr");
  makeTr.innerHTML = `
     <td>
        <img  src=${element.pictureUrl} />
     </td>
     <td>
       ${element.name}
     </td>
     <td>
        ${element.popularity}
     </td>
     <td>
       <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `;
  tableBody.appendChild(makeTr);
  const button = makeTr.querySelector(".btn-delete");
  button.addEventListener("click", () => {
    makeTr.remove();
  });
  const likeButton = makeTr.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("btn-like");
    likeButton.classList.toggle("btn-like-selected");
  });
});
const randContact = contacts[randomIndex];
const addedRow = document.createElement("tr");
addedRow.innerHTML = `
  <td>
        <img  src=${randContact.pictureUrl} />
     </td>
     <td>
       ${randContact.name}
     </td>
     <td>
        ${randContact.popularity}
     </td>
     <td>
       <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
   
  `;

buttonAddRandom.addEventListener("click", () => {
  
  tableBody.appendChild(addedRow);
});
const likedButton = addedRow.querySelector(".btn-like");
likedButton.addEventListener("click", () => {
  likedButton.classList.toggle("btn-like");
  likedButton.classList.toggle("btn-like-selected");
});

const aButton = addedRow.querySelector(".btn-delete");
aButton.addEventListener("click", () => {
  addedRow.remove();
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

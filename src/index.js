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

//Obtener los primeros 3 contactos del data.js.
const threeContacts = contacts.splice(0, 3);


//forEach
threeContacts.forEach(contact => {

  const exampleRow2 = document.createElement("tr");
  exampleRow2.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(exampleRow2);

  //ITERATION 2
  //Al ser una iteración continua del anterior  lo pongo aquí, porque fuera te daría error
  // Your code goes here ...
  exampleRow2.querySelector(".btn-delete").addEventListener("click", ()=> exampleRow2.remove());
 // ITERATION 3 - Like Buttons
   exampleRow2.querySelector(".btn-like").addEventListener("click", function() {
    this.classList.toggle("selected");
});
  
});
 


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" /></td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  newRow.querySelector(".btn-delete").addEventListener("click", () => newRow.remove());
  newRow.querySelector(".btn-like").addEventListener("click", function() {
    this.classList.toggle("selected");
  });
});
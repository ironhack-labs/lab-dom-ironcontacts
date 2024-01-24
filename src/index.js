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
threeContacts.forEach((elm) => {

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${elm.pictureUrl}" />
  </td>
  <td> ${elm.name} </td>
  <td> ${elm.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
  const parent = document.querySelector('#contacts')
  parent.appendChild(newRow)





  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  // addEventListener()

  let buttonDelete = newRow.querySelector('.btn-delete')

  buttonDelete.onclick = () => {

    newRow.remove(elm)
  }



  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  let buttonLike = newRow.querySelector('.btn-like')

  buttonLike.onclick = () => {

    buttonLike.classList.toggle('selected')
  }







})
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...




const newRandomIndex = Math.floor(Math.random() * contacts.length);
const newSplicedArr = contacts.splice(newRandomIndex, 1);

// Get the element from the spliced array
const newRandomContact = newSplicedArr[0];

const newExampleRow = document.createElement("tr");
newExampleRow.innerHTML = `
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

tableBody.appendChild(newExampleRow);




//const oneContacts = contacts.splice(0, 1);

// Your code goes here ...
oneContacts.forEach((elements) => {

  const newExampleRow = document.createElement("tr");
  newExampleRow.innerHTML = `
  <td>
    <img src="${elements.pictureUrl}" />
  </td>
  <td> ${elements.name} </td>
  <td> ${elements.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `
  const parent = document.querySelector('#contacts')
  parent.appendChild(newExampleRow)

  let newButtonDelete = newExampleRow.querySelector('.btn-delete')

  newButtonDelete.onclick = () => {

    newExampleRow.remove(elements)
  }



  let newButtonLike = newExampleRow.querySelector('.btn-like')

  newButtonLike.onclick = () => {

    newButtonLike.classList.toggle('selected')
  }
})
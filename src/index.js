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

let deleteButtonExample = exampleRow.querySelector(".btn-delete");

deleteButtonExample.onclick = () => {

  exampleRow.remove(exampleRow)

}

const likeButtonsExample = exampleRow.querySelector(".btn-like")

likeButtonsExample.onclick = () => {

  likeButtonsExample.classList.toggle("selected")

}


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const contactsCopy = JSON.parse(JSON.stringify(contacts))

const threeContacts = contactsCopy.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(elm => {

  const newRows = document.createElement("tr")
  newRows.innerHTML = `
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

  tableBody.appendChild(newRows)

  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  let deleteButton = newRows.querySelector(".btn-delete");

  deleteButton.onclick = () => {

    newRows.remove(elm)

  }

  // ITERATION 3 - Like Buttons

  // Your code goes here ...


  const likeButtons = newRows.querySelector(".btn-like")

  likeButtons.onclick = () => {

    likeButtons.classList.toggle("selected")

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

  tableBody.appendChild(newRow);

  let deleteButton = newRow.querySelector(".btn-delete");

  deleteButton.onclick = () => {

    newRow.remove(newRow)

  }

  const likeButtons = newRow.querySelector(".btn-like")

  likeButtons.onclick = () => {

    likeButtons.classList.toggle("selected")

  }

}




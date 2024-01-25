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




threeContacts.forEach(elm => {

  const threeContactsRows = document.createElement("tr")

  threeContactsRows.innerHTML =

    `
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
`;

  tableBody.appendChild(threeContactsRows)

  let deletebutton = threeContactsRows.querySelector(".btn-delete")

  deletebutton.onclick = () => {
    threeContactsRows.remove()
  }

  let likeButton = threeContactsRows.querySelector(".btn-like")

  likeButton.onclick = () => {
    likeButton.classList.toggle("selected")
  }

})


let addRamdom = document.querySelector("#btn-add-random")



addRamdom.onclick = () => {

  const randomizer = Math.floor(Math.random() * contacts.length)

  const splicedArr2 = contacts.splice(randomizer, 1)[0]

  const randomRow = document.createElement("tr")

  randomRow.innerHTML = `
<td>
    <img src="${splicedArr2.pictureUrl}" />
  </td>
  <td> ${splicedArr2.name} </td>
  <td> ${splicedArr2.popularity.toFixed(1)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`
  tableBody.appendChild(randomRow)

  let deletebutton = randomRow.querySelector(".btn-delete")

  deletebutton.onclick = () => {
    randomRow.remove()
  }

  let likeButton = randomRow.querySelector(".btn-like")

  likeButton.onclick = () => {
    likeButton.classList.toggle("selected")
  }

}
////arhgghgh

//dos preguntas el "selected" y [0]

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

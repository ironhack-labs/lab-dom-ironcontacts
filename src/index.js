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


let deleteButton = exampleRow.querySelector('.btn-delete')

deleteButton.onclick = () => {
  exampleRow.remove(exampleRow)
}
let likeButton = exampleRow.querySelector('.btn-like')

likeButton.onclick = () => {

  likeButton.classList.toggle('selected')
}







// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(element => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
  <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
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

  let deleteButton = newRow.querySelector('.btn-delete')

  deleteButton.onclick = () => {
    newRow.remove(element)
  }

  let likeButton = newRow.querySelector('.btn-like')

  likeButton.onclick = () => {

    likeButton.classList.toggle('selected')
  }
})



buttonAddRandom.onclick = () => {
  const newRandomIndex = Math.floor(Math.random() * contacts.length)
  const newSplicedArr = contacts.splice(newRandomIndex, 1)
  const newRandomContact = newSplicedArr[0]

  const newRandomRow = document.createElement("tr")
  newRandomRow.innerHTML = `
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
`

  tableBody.appendChild(newRandomRow)

  let deleteButton = newRandomRow.querySelector('.btn-delete')

  deleteButton.onclick = () => {
    newRandomRow.remove(newRandomRow)
  }
  let likeButton = newRandomRow.querySelector('.btn-like')

  likeButton.onclick = () => {

    likeButton.classList.toggle('selected')
  }


}
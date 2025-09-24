// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random')
const tableBody = document.querySelector('tbody#contacts')

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length)
const splicedArr = contacts.splice(randomIndex, 1)

// Get the element from the spliced array
const randomContact = splicedArr[0]

const exampleRow = document.createElement('tr')
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
`

tableBody.appendChild(exampleRow)

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3)

// Your code goes here ...
threeContacts.forEach((element) => {
	const exampleRow = document.createElement('tr')
	exampleRow.innerHTML = `
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

	tableBody.appendChild(exampleRow)
})

// ITERATION 2 - Delete Buttons

// Your code goes here ...
const buttons = document.querySelectorAll('.btn-delete')
console.log(buttons)

buttons.forEach((b) =>
	b.addEventListener('click', () => {
		console.log(b.parentElement.parentElement)
		b.parentElement.parentElement.remove()
	})
)

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButtons = document.querySelectorAll('.btn-like')
likeButtons.forEach((b) =>
	b.addEventListener('click', () => b.classList.toggle('selected'))
)

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * contacts.length)
	const splicedArr = contacts.splice(randomIndex, 1)

	// Get the element from the spliced array
	const randomContact = splicedArr[0]

	const exampleRow = document.createElement('tr')
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
`

	tableBody.appendChild(exampleRow)
})

// Your code goes here ...

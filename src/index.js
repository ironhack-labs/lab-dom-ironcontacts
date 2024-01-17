// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random');
const tableBody = document.querySelector('tbody#contacts');

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index

function getRandomContact() {
	const randomIndex = Math.floor(Math.random() * contacts.length);
	return contacts.splice(randomIndex, 1)[0];

	// Get the element from the spliced array
}
const exampleRow = document.createElement('tr');
const exampleRowContact = getRandomContact();
exampleRow.innerHTML = `
  <td>
    <img src="${exampleRowContact.pictureUrl}" />
  </td>
  <td> ${exampleRowContact.name} </td>
  <td> ${exampleRowContact.popularity.toFixed(2)} </td>
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
function createContactRow(contact) {
	console.log(contact);
	const row = document.createElement('tr');
	row.innerHTML = `
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
	const deleteBtn = row.querySelector('.btn-delete');
	removeElement(deleteBtn, row);
	const likeBtn = row.querySelector('.btn-like');
	likeElement(likeBtn);
	tableBody.appendChild(row);
}
threeContacts.forEach((e) => createContactRow(e));
// ITERATION 2 - Delete Buttons
function removeElement(btn, row) {
	btn.addEventListener('click', () => {
		row.remove();
	});
}
// Your code goes here ...

// ITERATION 3 - Like Buttons

function likeElement(btn) {
	btn.addEventListener('click', () => {
		btn.classList.toggle('selected');
	});
}
// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
	createContactRow(getRandomContact());
});
// Your code goes here ...

// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random');
const tableBody = document.querySelector('tbody#contacts');

// ITERATION 0 | Example Row

function getRandomContact() {
	const randomIndex = Math.floor(Math.random() * contacts.length);
	return contacts.splice(randomIndex, 1)[0];
}
const exampleRow = document.createElement('tr');
const exampleRowContact = getRandomContact();
createContactRow(exampleRowContact);

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
function createContactRow(contact) {
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
// ITERATION 2 - Delete Buttons
threeContacts.forEach((e) => createContactRow(e));

function removeElement(btn, row) {
	btn.addEventListener('click', () => {
		row.remove();
	});
}

// ITERATION 3 - Like Buttons

function likeElement(btn) {
	btn.addEventListener('click', () => {
		btn.classList.toggle('selected');
	});
}

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener('click', () => {
	createContactRow(getRandomContact());
});

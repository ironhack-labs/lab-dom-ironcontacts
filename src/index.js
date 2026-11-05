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

// ITERATIONS 1, 2, 3 and 4
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(function (contact) {

	const makeRow = document.createElement("tr");

	makeRow.innerHTML =
		`
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

	tableBody.appendChild(makeRow);

	const deleteButton = makeRow.querySelector(".btn-delete");                                                    

	deleteButton.addEventListener("click", function () {                                                                                                                  
		makeRow.remove();
	});
	
	const likeButton = makeRow.querySelector(".btn-like");

	likeButton.addEventListener("click", function() {
		
		likeButton.classList.toggle("selected");
	});
});

buttonAddRandom.addEventListener("click", function() {
	
	const randomRowIndex = Math.floor(Math.random() * contacts.length);
	const splicedRowArr = contacts.splice(randomRowIndex, 1);
	const randomRowContact = splicedRowArr[0];
	const makeRandomRow = document.createElement("tr"); 

	makeRandomRow.innerHTML =
		`
			<td>
				<img src="${randomRowContact.pictureUrl}" />
			</td>
			<td> ${randomRowContact.name} </td>
			<td> ${randomRowContact.popularity.toFixed(2)} </td>
			<td>
				<button class="btn-delete">Delete</button>
			</td>
			<td>
				<button class="btn-like">
					<img src="./images/icon.png" alt="like" />
				</button>
			</td>
		`;

	tableBody.appendChild(makeRandomRow);	

	const deleteRandomButton = makeRandomRow.querySelector(".btn-delete");

	deleteRandomButton.addEventListener("click", function () {                                                                                                                  
		makeRandomRow.remove();
	});
	
	const likeRandomButton = makeRandomRow.querySelector(".btn-like");

	likeRandomButton.addEventListener("click", function() {
		
		likeRandomButton.classList.toggle("selected");
	});
});

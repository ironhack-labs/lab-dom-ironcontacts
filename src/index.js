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

// Your code goes here ...

const threeContacts = contacts.splice(0, 3);

for (const randomActor of threeContacts) {
  const twoToFourRow = document.createElement("tr");
  twoToFourRow.innerHTML = `
    <td>
      <img src="${randomActor.pictureUrl}" />
    </td>
    <td>${randomActor.name}</td>
    <td>${randomActor.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(twoToFourRow);

  const deleteButton = twoToFourRow.querySelector(".btn-delete");

  // Now you can work with the deleteButton, for example, add an event listener
  deleteButton.addEventListener("click", function () {
    const rowToDelete = this.closest("tr");
    rowToDelete.remove();
  });

  const likeButton = twoToFourRow.querySelector(".btn-like");

  likeButton.addEventListener("click", function () {
    this.classList.toggle("selected");
  });
}

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

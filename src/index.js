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
// console.log(threeContacts);
const firstThree = threeContacts.forEach((elem) => {
  let anotherRow = `  <td>
  <img src="${elem.pictureUrl}" />
</td>
<td> ${elem.name} </td>
<td> ${elem.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
</td>`;
  return (tableBody.innerHTML += anotherRow);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
let deleteBtn = document.querySelectorAll(".btn-delete");
//console.log(deleteBtn);
deleteBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    let row = elem.closest("tr");
    if (row) {
      row.remove();
    }
  });
});
// ITERATION 3 - Like Buttons

// Your code goes here ...
let likeBtn = document.querySelectorAll(".btn-like");

likeBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.add("selected");
  });
});
// Bonus: ITERATION 4 - Add Random Contacts
//console.log(randomContact);
// Your code goes here ...
let randomBtn = document.querySelector("#btn-add-random");
//console.log(randomBtn);
randomBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * contacts.length);
  console.log(randomIndex);
  let randomCeleb = contacts[randomIndex];
  let randomRow = ` <td>
  <img src="${randomCeleb.pictureUrl}" />
</td>
<td> ${randomCeleb.name} </td>
<td> ${randomCeleb.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
  <button class="btn-like">
    <img src="./images/icon.png" alt="like" />
  </button>
</td>
`;
  tableBody.innerHTML += randomRow;
  let deleteBtn = document.querySelectorAll(".btn-delete");
  //console.log(deleteBtn);
  deleteBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      let row = elem.closest("tr");
      if (row) {
        row.remove();
      }
    });
  });
});

//randomContact

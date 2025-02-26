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
// tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  const currentContactRow = document.createElement("tr");
  currentContactRow.innerHTML = `
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
  tableBody.appendChild(currentContactRow);
  // ITERATION 2 - Delete Buttons
  // Your code goes here ...
  const myDeleteButton = currentContactRow.querySelector(".btn-delete");

  myDeleteButton.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target.parentElement.parentElement);
    // console.log(currentContactRow);
    // currentContactRow.style.display="none";
    currentContactRow.remove();
  });
  // ITERATION 3 - Like Buttons
  // Your code goes here ...
  const myLikeButton = currentContactRow.querySelector(".btn-like");

  myLikeButton.addEventListener("click", function (e) {
    console.log(e.target);
    myLikeButton.classList.toggle("selected");
    // if(myLikeButton.style.backgroundColor === "red"){
    //   myLikeButton.style.backgroundColor = "#a9a7a7";
    // } else {
    //   myLikeButton.style.backgroundColor = "red";
    // }
  });
  //
  // tableBody.appendChild(currentContactRow);
});

// Bonus: ITERATION 4 - Add Random Contacts
const addButton = document.querySelector("#btn-add-random");
addButton.addEventListener("click", function (e) {
  console.log(e.target);
  const randomIndexBis = Math.floor(Math.random() * contacts.length);
  const splicedArrBis = contacts.splice(randomIndexBis, 1);
  const randomContactBis = splicedArrBis[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${randomContactBis.pictureUrl}" />
  </td>
  <td> ${randomContactBis.name} </td>
  <td> ${randomContactBis.popularity.toFixed(2)} </td>
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
  const myDeleteBtn = newRow.querySelector(".btn-delete");
  myDeleteBtn.addEventListener("click", function (e) {
    newRow.remove();
  });
  const myLikeBtn = newRow.querySelector(".btn-like");
  myLikeBtn.addEventListener("click", function (e) {
    myLikeBtn.classList.toggle("selected");
  });
});
// Your code goes here ...

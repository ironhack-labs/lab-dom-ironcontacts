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



//* ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3);

/* First Contact */

const firstContact = threeContacts[0];

const firstRow = document.createElement("tr");
firstRow.innerHTML = `
<td>
  <img src="${firstContact.pictureUrl}" />
<td> ${firstContact.name} </td>
<td> ${firstContact.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(firstRow);


/* Second Contact */

const secondContact = threeContacts[1];

const secondRow = document.createElement("tr");
secondRow.innerHTML = `
<td>
  <img src="${secondContact.pictureUrl}" />
<td> ${secondContact.name} </td>
<td> ${secondContact.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(secondRow);


/* Third Contact */

const thirdContact = threeContacts[2];

const thirdRow = document.createElement("tr");
thirdRow.innerHTML = `
<td>
  <img src="${thirdContact.pictureUrl}" />
<td> ${thirdContact.name} </td>
<td> ${thirdContact.popularity.toFixed(2)} </td>
<td>
  <button class="btn-delete">Delete</button>
</td>
<td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(thirdRow);



//* ITERATION 2 - Delete Buttons


/* Example Contact */

const deleteBtnNode = exampleRow.querySelector(".btn-delete");
deleteBtnNode.addEventListener("click", () => {
  exampleRow.remove();
});


/* First Contact */

const deleteBtnNode1 = firstRow.querySelector(".btn-delete");
deleteBtnNode1.addEventListener("click", () => {
  firstRow.remove();
});

/* Second Contact */

const deleteBtnNode2 = secondRow.querySelector(".btn-delete");
deleteBtnNode2.addEventListener("click", () => {
  secondRow.remove();
});

/* Third Contact */

const deleteBtnNode3 = thirdRow.querySelector(".btn-delete");
deleteBtnNode3.addEventListener("click", () => {
  thirdRow.remove();
});




//* ITERATION 3 - Like Buttons

/* Example Contact */
const likebtnNode = exampleRow.querySelector(".btn-like");
likebtnNode.addEventListener("click", () => {
  likebtnNode.classList.toggle("selected");
});

/* First Contact */
const likebtnNode1 = firstRow.querySelector(".btn-like");
likebtnNode1.addEventListener("click", () => {
  likebtnNode1.classList.toggle("selected");
});

/* Second Contact */
const likebtnNode2 = secondRow.querySelector(".btn-like");
likebtnNode2.addEventListener("click", () => {
  likebtnNode2.classList.toggle("selected");
});

/* Third Contact */
const likebtnNode3 = thirdRow.querySelector(".btn-like");
likebtnNode3.addEventListener("click", () => {
  likebtnNode3.classList.toggle("selected");
});



// Bonus: ITERATION 4 - Add Random Contacts

/* ADD FUNCTIONALITY TO RANDOM BUTTON */

buttonAddRandom.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const fourthRandomContact = contacts[randomIndex];

/* ADD NEW RANDOM CONTACT */

const fourthRow = document.createElement("tr");
fourthRow.innerHTML = `
<td>
  <img src="${fourthRandomContact.pictureUrl}" />
</td>
<td> ${fourthRandomContact.name} </td>
<td> ${fourthRandomContact.popularity.toFixed(2)} </td>
</td>
  <button class="btn-delete">Delete</button>
</td>
<td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
</td>
`;
tableBody.appendChild(fourthRow);


/* Delete button */

const deleteBtnNode4 = fourthRow.querySelector(".btn-delete");
deleteBtnNode4.addEventListener("click", () => {
  fourthRow.remove();
});


/*Like button */

const likebtnNode4 = fourthRow.querySelector(".btn-like");
likebtnNode4.addEventListener("click", () => {
  likebtnNode4.classList.toggle("selected");
});

});





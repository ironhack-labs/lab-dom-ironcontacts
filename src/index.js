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
const copyContactsArr = [...contacts];
const threeContacts = copyContactsArr.splice(0, 3);

// Your code goes here ...

//new row
threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
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

  tableBody.appendChild(newRow);
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...
// find all delete btn
const delBtnAll = document.querySelectorAll(".btn-delete");

delBtnAll.forEach((btn) => {
  btn.addEventListener("click", function (btnElm) {
    console.log("moin");
    //find closest Element of tr and remove it
    btnElm.target.closest("tr").remove();
  });
});

console.log();

// ITERATION 3 - Like Buttons

// Your code goes here ...
// find all like buttons
const likeBtnAll = document.querySelectorAll(".btn-like");

likeBtnAll.forEach((likebtn) => {
  // console.log(likebtn)
  likebtn.addEventListener("click", (btnElm) => {
    likebtn.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const addContactBtn = document.getElementById("btn-add-random");

addContactBtn.addEventListener("click", () => {
  console.log("ADDD");
  const randomIndex3 = Math.floor(Math.random() * contacts.length);
  const newRandSplice = contacts.splice(randomIndex3, 1);
  // Get the element from the spliced array
  const newContact = newRandSplice[0];
  console.log(newContact);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newContact.pictureUrl}" />
  </td>
  <td> ${newContact.name} </td>
  <td> ${newContact.popularity.toFixed(2)} </td>
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

  const delBtnAllNew = document.querySelectorAll(".btn-delete");

  delBtnAllNew.forEach((btn) => {
    btn.addEventListener("click", function (btnElm) {
      console.log("moin");
      //find closest Element of tr and remove it
      btnElm.target.closest("tr").remove();
    });
  });

  const likeBtnAllNew = document.querySelectorAll(".btn-like");

  likeBtnAllNew.forEach((likebtn) => {
    // console.log(likebtn)
    likebtn.addEventListener("click", (btnElm) => {
      likebtn.classList.toggle("selected");
    });
  });
});

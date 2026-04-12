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

const delBtn1 = exampleRow.querySelector(".btn-delete");
  delBtn1.onclick = function () {
    return exampleRow.remove()
    }

const likeBtn1 = exampleRow.querySelector(".btn-like");
 likeBtn1.onclick = function () {
    likeBtn1.classList.toggle("selected")
  }




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {
  const row = document.createElement("tr");
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

  tableBody.appendChild(row);

   // ITERATION 2 - Delete Buttons
  const delBtn2 = row.querySelector(".btn-delete");
  delBtn2.onclick = function () {
    return row.remove()
    }
  // ITERATION 3 - Like Buttons
  const likeBtn2 = row.querySelector(".btn-like");

  likeBtn2.onclick = function () {
    likeBtn2.classList.toggle("selected")
  }
  
})



// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.onclick = function () {

const randomIndx = Math.floor(Math.random() * contacts.length);
const spliceArr = contacts.splice(randomIndx, 1);
const rndmContact = spliceArr[0];

const aleatoryRow = document.createElement("tr");
aleatoryRow.innerHTML = `
  <td>
    <img src="${rndmContact.pictureUrl}" />
  </td>
  <td> ${rndmContact.name} </td>
  <td> ${rndmContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(aleatoryRow);

 const delBtn3 = aleatoryRow.querySelector(".btn-delete");
  delBtn3.onclick = function () {
    return aleatoryRow.remove()
    }
  // ITERATION 3 - Like Buttons
  const likeBtn3 = aleatoryRow.querySelector(".btn-like");

  likeBtn3.onclick = function () {
    likeBtn3.classList.toggle("selected")
}

}

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




threeContacts.forEach(contact => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <tr>
      <td>
        <img src="${contact.pictureUrl}" />
      </td>
      <td>${contact.name}</td>
      <td>${contact.popularity.toFixed(2)}</td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    </tr>`;

    tableBody.appendChild(newRow);

    newRow.querySelector('.btn-delete').addEventListener('click', () => {
        newRow.remove();
  });
  


  newRow.querySelector('.btn-like').addEventListener('click', function () {
      this.classList.toggle('selected');
  } )

});



// document.querySelectorAll('.btn-delete').forEach(deleteButton => {
//   deleteButton.addEventListener('click', () => {
//     let rowToRemove = deleteButton.closest('tr');
//     rowToRemove.remove();
//   });
// });


  // ITERATION 3 - Like Buttons

  // Your code goes here ...



  // document.querySelectorAll('.btn-like').forEach((likeButton, index) => {
  //   likeButton.addEventListener('click', () => {
  //     let row = tableBody.querySelectorAll('tr')[index];
  //     row.classList.toggle('selected');
  //   });
  // });


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

buttonAddRandom.addEventListener('click', addRandom);

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
// <tr>
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// </tr> 
// `;

// tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts & 2
// Get the first 3 contacts from the 'contacts' array.
const theseContacts = contacts.splice(0, 3);
contacts.splice(0, 3);


function displayContacts () {
  // Your code goes here ...
  theseContacts.forEach((contact, i) => {
    tableBody.innerHTML += `
    <tr>
      <td>
        <img src="${contact.pictureUrl}" />
      </td>
      <td> ${contact.name} </td>
      <td> ${contact.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete" id=${i}>Delete</button>
      </td>
      <td>
        <button class="btn-like">       
          <img class='img-like' src="./images/icon.png" alt="like" />
        </button>
      </td>
    </tr> 
    `;
  });


  // ITERATION 2 - Delete Buttons
  let deleteBottons = document.getElementsByClassName("btn-delete");

  let buttons = [...deleteBottons];

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      tableBody.innerHTML = "";
      contacts.push(theseContacts[button.id]);
      theseContacts.splice(button.id, 1);
      displayContacts();       
    });
  });


  // ITERATION 3 - Like Buttons
  let likeBottons = document.getElementsByClassName("img-like");

  let specialButtons = [...likeBottons];

  specialButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("selected");
    });
  });
};


// Bonus: ITERATION 4 - Add Random Contacts
function addRandom () {
  if (contacts.length < 1){
    alert("All contacts have been displayed"); 
    return;
  }

  const randomIndex = Math.floor(Math.random() * contacts.length);
  theseContacts.unshift(contacts[randomIndex]);
  contacts.splice(randomIndex, 1);
  tableBody.innerHTML = "";
  displayContacts();
}

displayContacts();



  


  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

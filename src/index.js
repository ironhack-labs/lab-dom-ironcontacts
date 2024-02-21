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
const threeContacts = contacts.splice(0, 3);

buttonAddRandom.addEventListener("click", function (e) {

  threeContacts.forEach(element => {

    const exampleRow2 = document.createElement("tr");
    
    exampleRow2.innerHTML = `
      <td>
        <img src="${element.pictureUrl}" />
      </td>
      <td> ${element.name} </td>
      <td> ${element.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;
    const deleteButton = exampleRow2.querySelector('.btn-delete');

    deleteButton.addEventListener('click', function() {
      exampleRow2.remove();
    });

    const likeButton = exampleRow2.querySelector('.btn-like');
    
    likeButton.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
    tableBody.appendChild(exampleRow2)
  });
});

  // ITERATION 2 - Delete Buttons
  const newRows = document.querySelectorAll('tr');
  // console.log(newRows)
  // Your code goes here ...
  // const deleteButton = document.querySelectorAll('.btn-delete');

  
 
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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
const first3Contacts = contacts.slice(0, 3);

// Your code goes here ...

first3Contacts.forEach((contact) => {
  
  const newRow = document.createElement("tr");

  const imgCell = document.createElement("td");
  imgCell.innerHTML = `<img src="${contact.pictureUrl}" />`;

  const nameCell = document.createElement("td");
  nameCell.textContent = contact.name;

  const popularityCell = document.createElement("td");
  popularityCell.textContent = contact.popularity.toFixed(2);

  const deleteButtonCell = document.createElement("td");
  deleteButtonCell.innerHTML = `<button class="btn-delete">Delete</button>`;

  const likeButtonCell = document.createElement("td");
  likeButtonCell.innerHTML = `
      <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
      </button>
  `;

  newRow.appendChild(imgCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(popularityCell);
  newRow.appendChild(deleteButtonCell);
  newRow.appendChild(likeButtonCell);

 
  tableBody.appendChild(newRow);
});

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  first3Contacts.forEach((contact) => {
    
   
    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn-delete";
  
    deleteButton.addEventListener("click", () => {
      
      newRow.remove();
    });
  
    deleteButtonCell.appendChild(deleteButton);
  
    const likeButtonCell = document.createElement("td");
    likeButtonCell.innerHTML = `
        <button class="btn-like">
            <img src="./images/icon.png" alt="like" />
        </button>
    `;
  
  
    newRow.appendChild(imgCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(popularityCell);
    newRow.appendChild(deleteButtonCell);
    newRow.appendChild(likeButtonCell);
  
    
    tableBody.appendChild(newRow);
  });
  

  // ITERATION 3 - Like Buttons
  first3Contacts.forEach((contact) => {

    const newRow = document.createElement("tr");
  
    const imgCell = document.createElement("td");
    imgCell.innerHTML = `<img src="${contact.pictureUrl}" />`;
  
    const nameCell = document.createElement("td");
    nameCell.textContent = contact.name;
  
    const popularityCell = document.createElement("td");
    popularityCell.textContent = contact.popularity.toFixed(2);
  
    const deleteButtonCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn-delete";
  
    deleteButton.addEventListener("click", () => {
      newRow.remove();
    });
  
    deleteButtonCell.appendChild(deleteButton);
  
    const likeButtonCell = document.createElement("td");
    const likeButton = document.createElement("button");
    likeButton.className = "btn-like";
  
    likeButton.addEventListener("click", () => {
      newRow.classList.toggle("selected");
    });
  
    likeButtonCell.appendChild(likeButton);
  
    newRow.appendChild(imgCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(popularityCell);
    newRow.appendChild(deleteButtonCell);
    newRow.appendChild(likeButtonCell);
  
    tableBody.appendChild(newRow);
  });
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

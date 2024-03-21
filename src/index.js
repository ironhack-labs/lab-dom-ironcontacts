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
const tableBody = document.getElementById("table-body");

// Get the first 3 contacts from the contacts array using splice
const firstThreeContacts = contacts.splice(0, 3);

// Iterate over the firstThreeContacts array and create table rows
firstThreeContacts.forEach(contact => {
    // Create a new table row
    const newRow = document.createElement("tr");

    // Populate the table row with contact information
    newRow.innerHTML = `
        <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td><button class="btn-delete">Delete</button></td>
    `;

    // Append the new table row to the table body
    tableBody.appendChild(newRow);

    // Get the Delete button element from the newly created row
    const deleteButton = newRow.querySelector(".btn-delete");

    // Add event listener to the Delete button
    deleteButton.addEventListener("click", () => {
        // Remove the row element from the table
        newRow.remove();
    });
});


  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  // Get all Delete buttons
const deleteButtons = document.querySelectorAll(".btn-delete");

// Add event listener to each Delete button
deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the parent row of the clicked Delete button
        const row = button.closest("tr");
        
        // Remove the row element from the table
        row.remove();
    });
});
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  contacts.forEach(contact => {
    // Create a new table row
    const newRow = document.createElement("tr");

    // Create table data for each contact property
    const nameData = document.createElement("td");
    nameData.textContent = contact.name;

    const pictureData = document.createElement("td");
    const picture = document.createElement("img");
    picture.src = contact.pictureUrl;
    picture.alt = contact.name;
    picture.style.width = "50px"; // Adjust size if needed
    pictureData.appendChild(picture);

    const popularityData = document.createElement("td");
    popularityData.textContent = contact.popularity.toFixed(2);

    const likeData = document.createElement("td");
    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeData.appendChild(likeButton);

    // Append table data to the new row
    newRow.appendChild(nameData);
    newRow.appendChild(pictureData);
    newRow.appendChild(popularityData);
    newRow.appendChild(likeData);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Add event listener to the like button
    likeButton.addEventListener("click", () => {
        // Toggle the class "selected" on the row element
        newRow.classList.toggle("selected");
    });
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
Bonus: Iteration 4 | Add Random Contacts
For the final iteration, you will need to implement the event listener for the Add Random Contact button. When clicked, the button should add a new random contact to the table. You will need to do the following:

Add an event listener to the Add Random Contact button element, for the click event.
When the Add Random Contact button is clicked, get a random contact from the contacts array.
You can use the Math.random() method to generate a random number.
Create a new table row for the new contact and append it to the table body.
Add event listeners to the Delete and Like buttons of the new row, following the same steps as in the previous iterations.
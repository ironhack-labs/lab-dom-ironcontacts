// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array

// ITERATION 1 - Display 3 contacts

/*Iteration 1 | Display 3 Contacts
Let's start by displaying the first 3 contacts in the table. To do so, you will need to:

Get the first 3 contacts from the contacts array.
You can use the splice() method for this. Remember that the splice() method modifies the original array, and returns the results as a new array.
Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.
You can use the Iteration 0 code as an example of how to create a new table row and what its structure should be.
Append each new table row to the table body. You can use the appendChild() method for this.*/


// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact => { // Iterate over the newly obtained array of 3 contacts
  const contactRow = document.createElement("tr"); // Create a new table row
  contactRow.innerHTML = `
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



  //IT 2: 
const deleteBtn = contactRow.querySelector(".btn-delete"); // The Delete button element
  deleteBtn.addEventListener("click", () => { // Click on the Delete button
    contactRow.remove(); // When click delepte the row element delete from the table.
  });

  //IT 3:

const likeBtn = contactRow.querySelector(".btn-like"); // The Like button element
  likeBtn.addEventListener("click", () => { // Like button 
    alert(`You liked ${contact.name}!`); // When the Like button is clicked show alert
  });






  tableBody.appendChild(contactRow); // I append each new table row to the table body
});

  

  // ITERATION 2 - Delete Buttons//
//Get the Delete button element from a newly created row.
//After creating a new table row, you can call the querySelector() method on the newly created table row to search for the Delete button only inside that row, like this: newRow.querySelector(...).//
  //Add an event listener to the Delete button element, for the click event.
//You can use the addEventListener() method for this.
//When the Delete button is clicked, the row element should be removed from the table.
//You can use the remove() method for this.
  
  // Your code goes here ...

  





  

  

  // ITERATION 3 - Like Buttons


  // Your code goes here ...




  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

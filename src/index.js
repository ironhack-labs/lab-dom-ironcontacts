// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
const exampleContact =   {
  name: "Al Pacino",
  pictureUrl: "https://image.tmdb.org/t/p/w500/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg",
}

// Create a new row element to the table body (tbody)
const exampleRow = document.createElement("tr");
tableBody.appendChild(exampleRow);

// Create table cell elements
const tdName = document.createElement("td");
const tdPicture = document.createElement("td");
const tdDelete = document.createElement("td");
const tdLike = document.createElement("td");

// Append all cell elements (td) to the row (tr)
exampleRow.appendChild(tdPicture);
exampleRow.appendChild(tdName);
exampleRow.appendChild(tdDelete);
exampleRow.appendChild(tdLike);

// Add an image to the first table cell
const imgPicture = document.createElement("img");
imgPicture.setAttribute("src", exampleContact.pictureUrl);
tdPicture.appendChild(imgPicture);

// Show the contact's name in the second table cell
tdName.textContent = exampleContact.name;

// Add a "Delete" button to the fourth cell
const btnDelete = document.createElement("button");
btnDelete.textContent = "Delete";
tdDelete.appendChild(btnDelete);

// Add a like button to the fifth cell
const btnLike = document.createElement("button");
btnLike.textContent = "🤍";
btnLike.className = "btn-like";
tdLike.appendChild(btnLike);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...


  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

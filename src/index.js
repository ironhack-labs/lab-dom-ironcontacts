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
const threeContacts = contacts.splice(0, 15);

console.log(threeContacts);

// Your code goes here ...
for (let i = 0; i < threeContacts.length; i++) {
  const contact = threeContacts[i];
  console.log("Creating row for:", contact.name);
  
  const newFile = document.createElement("tr");
  newFile.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>${contact.wonOscar}<td>
    <td>
      <button class="btn-delete">borrar</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
 
  const likeButton = newFile.querySelector(".btn-like")
  likeButton.addEventListener("click",function(){
    likeButton.classList.toggle("selected")
  });


  const deleteButton = newFile.querySelector(".btn-delete");

  deleteButton.addEventListener("click", function() {
    newFile.remove();
  });
 
tableBody.appendChild(newFile)
  
}


  
  // ITERATION 2 - Delete Buttons
 
  

  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click",function(){
  if(contacts.length===0){
    return;
  }
  const randomIndex = Math.floor(Math.random*contacts.length);
  const splicedArr = contacts.splice(randomIndex,1)
  const randomContact = splicedArr[0] 
  
})
const newFile = document.createElement("tr");
  newFile.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>${randomContact.wonOscar}<td>
    <td>
      <button class="btn-delete">borrar</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  
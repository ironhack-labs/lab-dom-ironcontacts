// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// // ITERATION 0 | Example Row
// // Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement("tr");
// exampleRow.innerHTML = `
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
// `;

// tableBody.appendChild(exampleRow);

//exampleRow.remove();




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
// Your code goes here ...

const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((element)=>{
  const row = document.createElement("tr");
row.innerHTML = `
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
tableBody.appendChild(row);

const deleteButton = row.querySelector(".btn-delete");
deleteButton.addEventListener("click", () =>{  
  console.log(deleteButton,"click")
  row.remove();
});

const likeButton = row.querySelector(".btn-like");
likeButton.addEventListener("click", () => {
  console.log(likeButton, "click")
  likeButton.classList.toggle("selected");
} )
})

buttonAddRandom.addEventListener("click", () => {
  //Splice 1 element from the contacts array at the random index
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const splicedArr = contacts.splice(randomIndex, 1);
    const randomContact = splicedArr[0];
    const addRandomRow = document.createElement("tr");
    addRandomRow.innerHTML =
              `<td>
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
      tableBody.appendChild(addRandomRow);

      const deleteButton = addRandomRow.querySelector(".btn-delete");
      deleteButton.addEventListener("click", () =>{  
        console.log(deleteButton,"click")
        addRandomRow.remove();
      });

      const likeButton = addRandomRow.querySelector(".btn-like");
      likeButton.addEventListener("click", () => {
      console.log(likeButton, "click")
      likeButton.classList.toggle("selected");
} )
})




  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

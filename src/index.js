// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random"); //btn 
const tableBody = document.querySelector("tbody#contacts"); // whole table


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length); // length of whole celeberity
const splicedArr = contacts.splice(randomIndex, 1); // add one celebrity

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
// threeContacts.forEach(contact => {
//   const row = document.createElement("tr");

//   row.innerHTML = `
//     <td>
//       <img src="${contact.pictureUrl}" />
//     </td>
//     <td>${contact.name}</td>
//     <td>${contact.popularity.toFixed(2)}</td>
//     <td>
//       <button class="btn-delete">Delete</button>
//     </td>
//     <td>
//       <button class="btn-like">
//         <img src="./images/icon.png" alt="like" />
//       </button>
//     </td>
//   `;

//   tableBody.appendChild(row);
// });

// Your code goes here ..

threeContacts.forEach(contact => {
  tableBody.innerHTML += `
  <tr>
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
  </tr>
  `
})

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

  let DeleteBtnNodeList = document.querySelectorAll(".btn-delete");
  
  DeleteBtnNodeList.forEach((button) => {
    button.addEventListener("click", (event) => {
      button.closest("tr").remove();
      // button.parentNode.parentNode.remove()
      
    })
  })


  // DeleteBtn.addEventListener("click", (event) => {
  //   event.target.closest("tr").remove();
     
  // })
  console.log(document.querySelector("tr").innerHTML)
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  let favBtnNodeList = document.querySelectorAll(".btn-like")
  favBtnNodeList.forEach((button) => {
    button.addEventListener("click" , (event) => {
      button.classList.toggle("selected" )
    })
  })


  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...




// buttonAddRandom.addEventListener("click", ()=>{
//   splicedArr.forEach(contact => {
//     tableBody.innerHTML += `
//     <tr>
//       <td>
//         <img src="${contact.pictureUrl}" />
//       </td>
//       <td> ${contact.name} </td>
//       <td> ${contact.popularity.toFixed(2)} </td>
//       <td>
//         <button class="btn-delete">Delete</button>
//       </td>
//       <td>
//         <button class="btn-like">
//           <img src="./images/icon.png" alt="like" />
//         </button>
//       </td>
//     </tr>
//     `
//   })
// })


// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
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
   // ITERATION 2 - Delete Buttons
  function btnDelete(row){
  const btnDelete = row.querySelector('.btn-delete')
  
  btnDelete.addEventListener('click', () => row.remove())
}
// Boton de Like Iter 3
function btnlike(row){
  const btnlike = row.querySelector('.btn-like')
    btnlike.addEventListener('click', () => {
    btnlike.classList.toggle('selected')
  })
}

function renderContact(contact) { //Creamos una funcion reutilzable para utilizarlo tanto en el random como en la carrga inical de la pagina
  const rowContacts = document.createElement('tr')
  rowContacts.innerHTML = `
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
   btnDelete(rowContacts) // integramos los botones
   btnlike(rowContacts)
  
   tableBody.appendChild(rowContacts) 
}

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
//Cargamos los 3 elementos y ulizamos la funcion crreada anteriormente
threeContacts.forEach(contact => renderContact(contact))




// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  renderContact(contacts.splice(randomIndex, 1)[0]);
// Aprobechando todo lo anterior(Variable que utiliza la funcion matematica parta darnos un index random) para renderizar un contacto random 
  
})
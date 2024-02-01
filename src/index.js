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
    <button class="btn-delete" id="delete-contact">Delete</button>
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
console.log(threeContacts);

// Your code goes here ...
threeContacts.forEach((contact) => {
  tableBody.innerHTML += `
    <tr>
      <td><img src="${contact.pictureUrl}" /></td>
      <td>${contact.name}</td>
      <td>${contact.popularity.toFixed(2)}</td>
      <td>
      <button class="btn-delete" id="delete-contact">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    </tr>
  `;
});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

tableBody.querySelectorAll("tr").forEach((newRow, index) => {
  //seleciono las filas tr dentro del tb boody  y itero cada una de ellas con el forEch 
  const deleteButton = newRow.querySelector(".btn-delete"); // creo const llamada deleteButton y la igualo a la fila donde encuentra el boton 
  deleteButton.addEventListener("click", () => { //agrega un evento de eliminacion al clic 
    newRow.remove(); //elimina la linea 
    threeContacts.splice(index, 1); // elimina le contacto asociado del Arry "threeContacts"  de contactos.
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeButtons = document.querySelectorAll('.btn-like'); // selecciona elementos en el doc que tiene la classe btn_like y devulve una Node list

likeButtons.forEach((button) => { //itera sobre cada uno de los elementos selccionados de la classe 
  button.addEventListener('click', () => { 
    button.classList.toggle("selected"); //si esta presente desactica si no activa y la classe "selected" esta en el css
  });
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

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

threeContacts.forEach((contact) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
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
});

// ITERATION 2 - Delete Buttons

// 1. Seleccionar TODOS los botones delete que existan actualmente en la tabla
// ITERATION 2 - Delete Buttons

// Seleccionamos todos los botones "Delete" que existen en la tabla
const deleteButtons = document.querySelectorAll(".btn-delete");

// A cada botón le añadimos un event listener
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Buscamos la fila (<tr>) más cercana y la eliminamos
    const row = button.closest("tr");
    row.remove();
  });
});

// ITERATION 3 - Like Buttons

// ITERATION 3 - Add Random Contact

buttonAddRandom.addEventListener("click", () => {
  // Si ya no quedan contactos en el array, no hacemos nada
  if (contacts.length === 0) {
    console.log("No more contacts to add!");
    return;
  }

  // Elegir un contacto aleatorio del array 'contacts'
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  // Crear la nueva fila
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // 🔁 Le añadimos funcionalidad al botón Delete de ESTA nueva fila
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  // Añadimos la fila a la tabla
  tableBody.appendChild(row);
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

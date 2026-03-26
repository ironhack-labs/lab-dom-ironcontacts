// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Al comprobar el funcionamiento me quedó la misma estructura repetida en tres partes
// carga inicial, carga posteror de 3 actores random y luego, el actor random añadido manualmente.
// Se crea una única función para ser llamada en esas tres funcionalidades. La pongo al principio
// por respetar la lógica de ejecución de javascript.
// Parte del código es reciclado del anterior lab.
function insertRow(contact) {
const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class ="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

const newRemoveBtn = exampleRow.querySelector('.btn-delete');
  newRemoveBtn.addEventListener('click', () => {
    exampleRow.remove();
  });

  const btnLike = exampleRow.querySelector('.btn-like');
  btnLike.addEventListener('click', () => {
    btnLike.classList.toggle("selected");
  });

tableBody.appendChild(exampleRow); 
}


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// Añado la función insertRow, con el parámetro randomContact.

const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];
insertRow(randomContact);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

// Precodificado: Array que se crea en threeContacts, el cual
// toma los tres primeros contactos de data.js.
// Le aplico el method .forEach que le dice "por cada contacto
// ejecuta la función insertRow"

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => insertRow(contact));
  
  // ITERATION 2 - Delete Buttons  //and // ITERATION 3 - Like Buttons

  // Estas iteraciones fueron incluidas de forma integra en la función:
  // insertRow. La lógica que seguí fue: el listener se queda sordo para
  // nodos del DOM que aparecen después de cargar el código. Tengo que
  // confirmar que sea correcto.  


// Bonus: ITERATION 4 - Add Random Contacts

// Recupero la fórmula para generar aleatorios dada precodificada en la
// iteración 1 y la meto en una función, con la orden de ejecutar la función
// insertRow cuando es llamada.

function createRandom () {
  const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
insertRow(splicedArr[0]);
}

// Creo el escuchador del botón que llama a crear la fila aleatoria.

window.addEventListener("load",() => {
buttonAddRandom.addEventListener("click", createRandom);

});
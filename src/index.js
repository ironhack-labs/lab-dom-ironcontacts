// ITERATION 0 | Example Row
// (Este código ya estaba como ejemplo, lo dejamos tal cual o lo comentamos si ya no lo necesitas)

// Seleccionamos el tbody de la tabla
const tbody = document.querySelector("tbody");

// ITERATION 1 | Display 3 Contacts
// Obtenemos una copia de los primeros 3 contactos (sin modificar el array original)
// Usamos slice() en lugar de splice() para no alterar contacts
const firstThreeContacts = contacts.slice(0, 3);

// Iteramos sobre los 3 contactos
firstThreeContacts.forEach(contact => {
  // Crear nueva fila (<tr>)
  const newRow = document.createElement("tr");

  // Estructura de la fila (igual que el ejemplo)
  newRow.innerHTML = `
    <td>${contact.name}</td>
    <td>${contact.phone}</td>
    <td>${contact.email}</td>
    <td>${contact.company}</td>
    <td>
      <button class="btn-delete">Delete</button>
      <button class="btn-like">❤️</button>
    </td>
  `;

  // ITERATION 2 | Delete Buttons
  // Buscamos el botón Delete dentro de esta fila específica
  const deleteBtn = newRow.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    // Eliminamos la fila completa del DOM
    newRow.remove();
  });

  // ITERATION 3 | Like Buttons
  // Buscamos el botón Like dentro de esta fila específica
  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    // Toggle de la clase "selected" en la fila completa
    // Esto cambiará el color del botón según el CSS (.selected)
    newRow.classList.toggle("selected");
  });

  // Finalmente, añadimos la fila al tbody
  tbody.appendChild(newRow);
});
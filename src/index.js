// HTML ELEMENTS
//aqui captyuramos el boton de añadir contacto rANDOM DEL HTML 
const buttonAddRandom = document.querySelector("#btn-add-random");
// aqui estamos capturando la etiqueta html "tbody" del index.html para despues poder trabajar con ese html desde este nuestro javascript
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// usamos el splice metodo para obtener un elemento random del array de contactos de data,js
//cuantos contactos hay
console.log(contacts.length)
//caculamos una posicion al voleo random
const randomIndex = Math.floor(Math.random() * contacts.length);
console.log(randomIndex)
//el metdoo match.floor , lo que hace es calcular un numero al voleo de posicion [index] desde 0 hasta el numero maximo del array de contactos por eso se usa .length
const splicedArr = contacts.splice(randomIndex, 1);
// el splice te va a guardar en la variable spliceArr un nuevo array pero solo con un objeto que es el que hemos calculado random arriba
// //[{{
//     name: "Arnold Schwarzenegger",
//     pictureUrl: "https://image.tmdb.org/t/p/w500/sOkCXc9xuSr6v7mdAq9LwEBje68.jpg",
//     popularity: 18.216362,
//     wonOscar: false,
//   }}]
console.log(splicedArr)
// aqui almacenamos el contacto literalmente para luego usar sus datos en la etiqueta tr que vamos a crear a continuacion
const randomContact = splicedArr[0];
// aqui lo que obtenemos es literalmente el abojeto ya sacado del array de arriba 
console.log("este es mi contacto random",randomContact)

//primero creamos el elemento VACIO HTML que despues insertaremos en el tbody del html
const exampleRow = document.createElement("tr");

//le asigan contenido usando el metodo .innerHTML entonces a partir de ahora la etiqueta tr vacia de antes , ya no lo estará y vamos a usar los datos del randomContact
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





console.log("esta es mi etiqueta html con contendio ya metido", exampleRow)


tableBody.appendChild(exampleRow);


//ITERACION 1 , PINTAR LOS 3 PRIMEROS CONTACTOS DEL ARRAY DE CONTACTOS DE data.js
const threeContacts = contacts.splice(0, 3);
// En este array solo obtenemos los 3 primeros contactos del array de 52 contactos para despues recorrerlo con el bucle forEach y meterlos al DOM al html
console.log("estos son mis 3 primeros contactos", threeContacts)

// este for each lo que hace es recorrer los 3 contactos del array "actualContact" es el contacto en cuestion que estamos metiendo en el dom 
// , y cada vez que el bucle foeEach llega a su fin pasa al sigueinte contacto , hace lo mismo y pasa al siguiente
threeContacts.forEach(elementoQueSeEstaRecorriendo => {



  console.log("este es el elemento que se esta recorriendo en el forEach", elementoQueSeEstaRecorriendo)
  // lo mismo de arriba , creamos la etiqueta
const contactInfo = document.createElement("tr");

//le asigan contenido usando el metodo .innerHTML entonces a partir de ahora la etiqueta tr vacia de antes , ya no lo estará y vamos a usar los datos del actualContact
contactInfo.innerHTML = `
  <td>
    <img src="${elementoQueSeEstaRecorriendo.pictureUrl}" />
  </td>
  <td> ${elementoQueSeEstaRecorriendo.name} </td>
  <td> ${elementoQueSeEstaRecorriendo.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
// y aqui lo enchufamos a el bodyd e la tabla usando el appendChild
tableBody.appendChild(contactInfo);


});

  
  // ITERATION 2 - Delete Buttons
  
  // ITERATION 2 - Delete Buttons
  // Primero capturamos todos los botones de delete de la tabla usando el querySelectorAll
  //  y guardamos esa coleccion de botones en la variable deleteButtons
  //Aqui capturamos todos los botones 
  const deleteButtons = document.querySelectorAll(".btn-delete");

  // cuando uno de esos botones en el html es clickeado , el metodo addEventListener 
  // va a ejecutar la funcion que le pasamos como segundo argumento ,
  //  esa funcion lo que hace es eliminar el elemento html mas cercano a ese boton que es un tr 
  // , entonces al hacer click en el boton delete , se elimina toda la fila del contacto
  deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.target.closest("tr").remove();
      // este metodo remove es el que elimina la fila de la tabla que hemos clickeado en delete
    });
  });
  

  // ITERATION 3 - Like Buttons

  // Primero capturamos todos los botones de like de la tabla usando el querySelectorAll
  const likeButtons = document.querySelectorAll(".btn-like");

  // cuando uno de esos botones en el html es clickeado , el metodo addEventListener 
  // va a ejecutar la funcion que le pasamos como segundo argumento ,
  // esa funcion lo que hace es alternar la clase "selected" en el boton de like
  likeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.target.classList.toggle("selected");
    });
  });

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Escuchamos el click en el botón para añadir contactos aleatorios
buttonAddRandom.addEventListener("click", () => {
  // Si no hay más contactos en el array, salimos de la función
  if (contacts.length === 0) return;
  
  // Generamos un número aleatorio entre 0 y la cantidad de contactos disponibles
  const randomIndex = Math.floor(Math.random() * contacts.length);
  // Extrae un contacto aleatorio del array de contactos y lo guarda en la variable
  const randomContact = contacts.splice(randomIndex, 1)[0];
  
  // Creamos una nueva fila (elemento tr) en la tabla de forma vacía
  const newRow = document.createElement("tr");
  // Rellenamos la fila con el contenido HTML del contacto usando interpolación de strings
  newRow.innerHTML = `
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
  
  // Añadimos la nueva fila al cuerpo de la tabla (tbody)
  tableBody.appendChild(newRow);
  
  // Capturamos el botón de delete dentro de la nueva fila
  const deleteBtn = newRow.querySelector(".btn-delete");
  // Agregamos un evento de click al botón de delete para eliminar la fila
  deleteBtn.addEventListener("click", (event) => {
    // Encuentra la fila más cercana (tr) y la elimina del DOM
    event.target.closest("tr").remove();
  });
  
  // Capturamos el botón de like dentro de la nueva fila
  const likeBtn = newRow.querySelector(".btn-like");
  // Agregamos un evento de click al botón de like para activar/desactivar el favorito
  likeBtn.addEventListener("click", (event) => {
    // Alterna la clase "selected" en el botón para marcar/desmarcar como favorito
    event.target.classList.toggle("selected");
  });
});
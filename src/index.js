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
console.log(threeContacts);

// Your code goes here ...

threeContacts.forEach((contacto) => {
  const row = document.createElement("tr");
  row.classList.add("randomNodo");

  const imgNode = document.createElement("td");
  imgNode.innerHTML = `<img src="${contacto.pictureUrl}" />`;

  const nameNode = document.createElement("td");
  nameNode.innerHTML = contacto.name;

  const popularityNode = document.createElement("td");
  popularityNode.innerHTML = contacto.popularity.toFixed(2);

  const delBtn = document.createElement("td");
  delBtn.innerHTML = `<button class="btn-delete">Delete</button>`;
  const likeBtn = document.createElement("td");
  likeBtn.innerHTML = `<button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>`;

  row.appendChild(imgNode);
  row.appendChild(nameNode);
  row.appendChild(popularityNode);
  row.appendChild(delBtn);
  row.appendChild(likeBtn);

  tableBody.appendChild(row);

  const btnDeleteNode = row.querySelector(".btn-delete");
  btnDeleteNode.addEventListener("click", () => {
    row.remove();
  });

  const likeBtnFunction = row.querySelector(".btn-like");
  likeBtnFunction.addEventListener("click", () => {
    likeBtnFunction.classList.toggle("selected");
  });

});

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

const randomBtn = document.querySelector("#btn-add-random");
  randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];

    const row = document.createElement("tr");
    row.classList.add("randomNodo");

    const imgNode = document.createElement("td");
    imgNode.innerHTML = `<img src="${randomContact.pictureUrl}" />`;

    const nameNode = document.createElement("td");
    nameNode.innerHTML = randomContact.name;

    const popularityNode = document.createElement("td");
    popularityNode.innerHTML = randomContact.popularity.toFixed(2);

    const delBtn = document.createElement("td");
    delBtn.innerHTML = `<button class="btn-delete">Delete</button>`;
    const likeBtn = document.createElement("td");
    likeBtn.innerHTML = `<button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>`;

    row.appendChild(imgNode);
    row.appendChild(nameNode);
    row.appendChild(popularityNode);
    row.appendChild(delBtn);
    row.appendChild(likeBtn);

    tableBody.appendChild(row);

    const btnDeleteNode = row.querySelector(".btn-delete");
    btnDeleteNode.addEventListener("click", () => {
      row.remove();
    });

    const likeBtnFunction = row.querySelector(".btn-like");
    likeBtnFunction.addEventListener("click", () => {
      likeBtnFunction.classList.toggle("selected");
    });
  });
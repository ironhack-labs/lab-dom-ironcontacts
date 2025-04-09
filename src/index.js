const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
const contactCount = document.querySelector("#contact-count");

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((el) => {
  addContactRow(el);
});

function addContactRow(contact) {
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
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  exampleRow.querySelector(".btn-delete").addEventListener("click", () => {
    exampleRow.remove();
    contacts.push(contact);
    contactCount.textContent = tableBody.rows.length;
    if (contacts.length > 0) {
      buttonAddRandom.disabled = false;
    }
  });

  exampleRow.querySelector(".btn-like").addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("selected");
  });

  tableBody.appendChild(exampleRow);

  contactCount.textContent = tableBody.rows.length;

  if (contacts.length === 0) {
    buttonAddRandom.disabled = true;
  }
}

buttonAddRandom.addEventListener("click", (e) => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const spliced = contacts.splice(randomIndex, 1);
  const randomContact = spliced[0];

  if (randomContact) {
    addContactRow(randomContact);
  }
});

// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


const randomContact = getRandomContact();
showContact(randomContact);

const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => {
  showContact(contact);
});

buttonAddRandom.addEventListener("click", () => {
  showContact(getRandomContact());
})

function getRandomContact(){
  // Splice 1 element from the contacts array at the random index
  const randomIndex = Math.floor(Math.random() * contacts.length);
  return contacts.splice(randomIndex, 1)[0];
}

function showContact(contact){
  const row = document.createElement("tr");
          row.innerHTML = `
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

        tableBody.appendChild(row);
  
        const deleteButton = row.querySelector(".btn-delete");
        deleteButton.addEventListener("click", ()=> {
          row.remove();
        })

        const likeButton = row.querySelector(".btn-like");
        likeButton.addEventListener("click", ()=> {
          likeButton.classList.toggle("selected");
        })

}

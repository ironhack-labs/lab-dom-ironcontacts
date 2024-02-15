// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

buttonAddRandom.addEventListener("click", addRandom);

// ITERATION 0 | Example Row

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const theseContacts = contacts.splice(0, 3);
contacts.splice(0, 3);
// contacts = contacts.splice(3)

function displayContacts() {
  theseContacts.forEach((contact, i) => {
    tableBody.innerHTML += `
    <tr>
      <td>
        <img src="${contact.pictureUrl}" />
      </td>
      <td> ${contact.name} </td>
      <td> ${contact.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete" id=${i}>Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img class='img-like' src="./images/icon.png" alt="like" />
        </button>
      </td>
    </tr> 
    `;
  });

  let deleteButtons = document.getElementsByClassName("btn-delete");

  let buttons = [...deleteButtons];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      tableBody.innerHTML = "";
      contacts.push(theseContacts[button.id]);
      theseContacts.splice(button.id, 1);
      displayContacts();
    });
  });

  let likeButtons = document.getElementsByClassName("img-like");

  let specialButtons = [...likeButtons];

  specialButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentNode.classList.toggle("selected");
    });
  });
}

function addRandom() {
  if (contacts.length < 1) {
    alert("All contacts have been displayed")
    return
  }
  const randomIndex = Math.floor(Math.random() * contacts.length);
  theseContacts.unshift(contacts[randomIndex]);
  contacts.splice(randomIndex, 1);
  console.log("Spliced ===>", contacts);
  tableBody.innerHTML = "";
  displayContacts();
}

displayContacts();

// Your code goes here ...

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
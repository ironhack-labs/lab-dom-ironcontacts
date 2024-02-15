// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

buttonAddRandom.addEventListener('click', addRandom)


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
//const randomIndex = Math.floor(Math.random() * contacts.length);
//const splicedArr = contacts.splice(randomIndex, 1);

//const randomContact = splicedArr[0];

//const exampleRow = document.createElement("tr");
//exampleRow.innerHTML = `
//<tr>
  //<td>
    //<img src="${randomContact.pictureUrl}" />
  //</td>
  //<td> ${randomContact.name} </td>
  //<td> ${randomContact.popularity.toFixed(2)} </td>
  //<td>
//    <button class="btn-delete">Delete</button>
  //</td>
  //<td>
    //<button class="btn-like">
      //<img src="./images/icon.png" alt="like" />
    //</button>
  //</td>
  //</tr>`

//tableBody.appendChild(exampleRow);



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
//Numeros random
//const randomIndex1 = Math.floor(Math.random() * 4);
//const splicedArr1 = contacts.splice(randomIndex1, 1);
//const randomIndex2 = Math.floor(Math.random() * 2);
//const splicedArr2 = contacts.splice(randomIndex2, 1);

//Valores arry

//const randomContact1 = splicedArr1[0];
//const randomContact2 = splicedArr2[0];


//const row1 =document.createElement("tr");
//row1.innerHTML = `
  //<td>
    //<img src="${randomContact1?.pictureUrl}" />
  //</td>
  //<td> ${randomContact1.name} </td>
  //<td> ${randomContact1.popularity.toFixed(2)} </td>
  //<td>
    //<button class="btn-delete">Delete</button>
  //</td>
  //<td>
    //<button class="btn-like">
      //<img src="./images/icon.png" alt="like" />
    //</button>
  //</td>`

  //const row2 =document.createElement("tr");
  //row2.innerHTML = `
  //<td>
    //<img src="${randomContact2?.pictureUrl}" />
  //</td>
  //<td> ${randomContact2.name} </td>
  //<td> ${randomContact2.popularity.toFixed(2)} </td>
  //<td>
    //<button class="btn-delete">Delete</button>
  //</td>
  //<td>
    //<button class="btn-like">
      //<img src="./images/icon.png" alt="like" />
    //</button>
  //</td>
//`;

//tableBody.appendChild(row1);
//tableBody.appendChild(row2);

const theseContacts = contacts.splice(0, 3);
contacts.splice(3)

function displayContacts () {

theseContacts.forEach((contact, i) => {
  tableBody.innerHTML +=
  `<tr>
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
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  </tr>`;
})

// ITERATION 2 - Delete Buttons

// Your code goes here ...
let deleteButtons = document.getElementsByClassName("btn-delete")

let buttons = [...deleteButtons]

buttons.forEach((button) => {
  button.addEventListener('click', (e) =>{
    tableBody.innerHTML = "" 
    contacts.push(theseContacts[button, id])
    theseContacts.splice(button.id, 1)
    displayContacts()
  })
})

// ITERATION 3 - Like Buttons

// Your code goes here ...
let likeButtons = document.getElementsByClassName("btn-like")

let buttonsLike = [...likeButtons]

buttonsLike.forEach((button) =>{
  button.addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('selected')
  })
})
}
displayContacts() 

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
function addRandom () {
const randomIndex = Math.floor(Math.random() * contacts.length);
theseContacts.unshift(contacts[randomIndex])
contacts.splice(randomIndex, 1);
tableBody.innerHTML = ''
displayContacts ()
}
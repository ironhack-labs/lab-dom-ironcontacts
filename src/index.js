// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

console.log(randomIndex);

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
      <img src="./images/icon.png" alt="like" class='btn-img' />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
const newArr = [randomContact, ...threeContacts];
console.log(newArr);

function render() {
  return (tableBody.innerHTML = newArr
    .map((element, index) => {
      return `<tr>
    <td>
    <img src="${element.pictureUrl}" />
  </td>
  <td> ${element.name} </td>
  <td> ${element.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete" data-id=${index}>Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" class='btn-img' />
    </button>
  </td>
</tr>`;
    })
    .join(""));
}

render();
//   .map((element, index) => {
//     return `<tr>
//     <td>
//     <img src="${element.pictureUrl}" />
//   </td>
//   <td> ${element.name} </td>
//   <td> ${element.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete" data-id=${index}>Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" class='btn-img' />
//     </button>
//   </td>
// </tr>`;
//   })
//   .join("");

// ITERATION 2 - Delete Buttons

tableBody.addEventListener("click", (e) => {
  if (e.target.className === "btn-delete") {
    // console.log(11);
    // console.log(e.target.dataset.id);
    console.log(e.target.dataset);
    newArr.splice(e.target.dataset.id, 1);
    console.log(newArr);
    render();
  }
});

// ITERATION 3 - Like Buttons
tableBody.addEventListener("click", (e) => {
  if (e.target.className === "btn-img") {
    // console.log(111);
    const parent = e.target.parentNode;
    parent.classList.contains("selected")
      ? parent.classList.remove("selected")
      : parent.classList.add("selected");
  }
});

// Bonus: ITERATION 4 - Add Random Contacts
// console.log(contacts.length);
let counter = 4;

document.querySelector("#btn-add-random").addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * contacts.length);
  const selectedArr = contacts.splice(randomNum, 1);
  const selectedItem = selectedArr[0];
  newArr.push(selectedItem);
  render();

  //   console.log(randomNum);
  //   tableBody.innerHTML += `<tr>
  //   <td>
  //     <img src="${selectedItem.pictureUrl}" />
  //   </td>
  //   <td> ${selectedItem.name} </td>
  //   <td> ${selectedItem.popularity.toFixed(2)} </td>
  //   <td>
  //     <button class="btn-delete" data-id=${counter}>Delete</button>
  //   </td>
  //   <td>
  //     <button class="btn-like">
  //       <img src="./images/icon.png" alt="like" class='btn-img' />
  //     </button>
  //   </td>
  //   </tr>
  // `;
  //   counter++;
});

// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
//const trTable = document.querySelectorAll(".deleteTable");



// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 4);
console.log(splicedArr)

// Get the element from the spliced array
/* const threeContacts = contacts.splice(randomIndex, 3);
console.log(threeContacts);

const randomContact = splicedArr.concat(threeContacts);
console.log(randomContact) */
splicedArr.forEach((spliceEle)=>{



const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${spliceEle.pictureUrl}" />
  </td>
  <td> ${spliceEle.name} </td>
  <td> ${spliceEle.popularity.toFixed(2)} </td>
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

const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", () => {
  exampleRow.remove();
});

const likeButton = exampleRow.querySelector('.btn-like')
likeButton.addEventListener('click',()=>{
  likeButton.classList.toggle('selected')
})

})

/* const deleteBtn = document.querySelectorAll('btn-delete')

deleteBtn.forEach((buttonDelete)=>{
buttonDelete.addEventListener('click',()=>{
  buttonDelete.closest('tr').remove();
})
}) */



//console.log(exampleRow)
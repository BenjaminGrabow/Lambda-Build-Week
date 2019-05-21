// !!!!!!!!! BUTTONS !!!!!!!!!!!!!
const buttons = document.querySelectorAll(".btn");
const lists = document.querySelectorAll(".middle-section");
const buttonSection = document.querySelector(".categories");

//Show me from the category the list
buttons.forEach((button) => button.addEventListener('click', (event) => {
  // display none to all buttons
  buttonSection.style.display = "none";
  //loop for  all list items - assign to current one display flex
  lists.forEach((list) => {
     if(list.children[0].children[0].children[1].textContent === event.target.textContent) {
        list.style.display = "flex";
    } 
  });
}));

// !!!!!!!!! GO BACK BUTTON !!!!!!!!!
const goBackBtn = document.querySelectorAll(".goBackBtn");
goBackBtn.forEach(button => button.addEventListener('click', () => {

  lists.forEach(list => {
      if(list.style.display ==='flex'){
        list.style.display = "none";
        buttonSection.style.display = "flex";
      };
  });
}));

// Create a "close" button and append it to each list item
const myNodelist = document.querySelectorAll(".li");

myNodelist.forEach(el => {
  const button = document.createElement("button");
  button.classList.add("close");
  button.textContent = "X";
  el.appendChild(button);
})

// Click on a close button to hide the current list item
const close = document.querySelectorAll(".close");
close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));


// Create element when add button get clicked
const addBtn = document.querySelectorAll(".addBtn");
addBtn.forEach((button) => button.addEventListener("click", (event) => {
  
  let inputElement = event.currentTarget.parentNode.children[2].value;
  
  let inputClass = event.currentTarget.parentNode.children[2];

  let inputClassName = inputClass.getAttribute('class');
  let li = document.createElement("li");
  let inputValue = document.querySelectorAll(`.${inputClassName}`);
  let liValue;
  let uLTarget = event.target.parentNode.parentNode.children[1];
  inputValue.forEach((currentvalue, index) => { liValue = li.textContent = currentvalue.value;})

  let uLClassName = uLTarget.getAttribute('class');
  
  if(liValue === inputElement && liValue === "") { 
    alert("You must write something!");
  } else {
    li.textContent = inputElement;
    document.querySelector(`.${uLClassName}`).appendChild(li);
    document.querySelectorAll(".input").forEach(input  => input.value = '');
  } 
}));

// // Create new element when clicked for Business
// function addElementBusiness() {
//   const li = document.createElement("li");
//   const inputValue = document.querySelector(".inputBusiness").value;
//   li.textContent = inputValue;

//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.querySelector(".uLBusiness").appendChild(li);
//   }
//   document.querySelector(".inputBusiness").value = "";


//   const button = document.createElement("button");
//   button.textContent = "X";
//   button.className = "close";
//   li.appendChild(button);

//   const close = document.querySelectorAll(".close");
//   close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
// }

// const addBtnBusiness = document.querySelector(".addBtnBusiness");
// addBtnBusiness.addEventListener("click", () => addElementBusiness());

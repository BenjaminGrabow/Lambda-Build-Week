const buttons = document.querySelectorAll(".btn");
const lists = document.querySelectorAll(".middle-section1");
const buttonSection = document.querySelector(".categories");

//Show me the list if I click on the category button
buttons.forEach((button) => button.addEventListener('click', (event) => {
  // display none to all category buttons
  buttonSection.style.display = "none";
  //loop for all list items - assign to current one display flex
  lists.forEach((list) => {
    if (list.children[0].children[0].children[1].textContent === event.target.textContent) {
      list.style.display = "flex";
    }
  });
}));

// When you click on the go back button -> show the category buttons
const goBackBtn = document.querySelectorAll(".goBackBtn");
// take every go back button -> loop through and add the eventlistener
goBackBtn.forEach(button => button.addEventListener('click', () => {
  //take every list for the category and loop through
  lists.forEach(list => {
    // if the list for the current category is visible -> make the list away and show the various category buttons
    if (list.style.display === 'flex') {
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
  // Get every add button and loop through -> add to each add button the event listener
  let inputElement = event.currentTarget.parentNode.children[2].value;
  // safe what you wrote in the input element
  let inputClass = event.currentTarget.parentNode.children[2];
  // Get the input element 
  let inputClassName = inputClass.getAttribute('class');
  // Get the input element class
  let li = document.createElement("li");
  // create a new li element which get's later added to the unordered list
  let EveryInputElement = document.querySelectorAll(`.${inputClassName}`);
  // get every input element
  let liValue;
  let uLTarget = event.target.parentNode.parentNode.children[1];
  // Get the unordered list element where the li element gets appended

  EveryInputElement.forEach((currentvalue) => { liValue = li.textContent = currentvalue.value; })
  // The for each method loops through every input element and the actual input which is written down get's assigned to the liValue variable
  let uLClassName = uLTarget.getAttribute('class');
  // Get from the unordered list the class

  if (liValue === inputElement && liValue === "") {
    // if the actual liValue is the inputElement (without the line it would alert every time) and if the liValue is empty make a alert
    alert("You must write something!");
  } else {
    li.textContent = inputElement;
    // if liValue is not empty assign to the new created li element the textcontent
    document.querySelector(`.${uLClassName}`).appendChild(li);
    // append the the li element with the textcontent to the current unordered list
    document.querySelectorAll(".input").forEach(input => input.value = '');
    // make the input field empty again

    const button = document.createElement("button");
    // create a new button
    button.textContent = "X";
    // make the textcontent to a x for style reason 
    button.className = "close";
    // add the class close to the button
    li.appendChild(button);
    // append the button to the new created li element
    const close = document.querySelectorAll(".close");
    close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
    // loop through all close buttons and add the eventlistener -> when the button get's clicked make the li element with the close button away
  }
}));
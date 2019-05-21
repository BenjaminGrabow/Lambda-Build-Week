// !!!!!!!!! BUTTONS !!!!!!!!!!!!!
const buttons = document.querySelectorAll(".btn");
const listSport = document.querySelector(".middle-sectionSport");
const listVideo = document.querySelector(".middle-sectionVideo");
const listMakeup = document.querySelector(".middle-sectionMakeup");
const listMovie = document.querySelector(".middle-sectionMovie");
const listParty = document.querySelector(".middle-sectionParty");
const listOutdoor = document.querySelector(".middle-sectionOutdoor");
const listAdventure = document.querySelector(".middle-sectionAdventure");
const listTravel = document.querySelector(".middle-sectionTravel");
const listLearning = document.querySelector(".middle-sectionLearning");
const listBusiness = document.querySelector(".middle-sectionBusiness");
const buttonSection = document.querySelector(".categories");

buttons.forEach((button) => button.addEventListener('click', (event) => {
  buttonSection.style.display = "none";
 if(event.target.textContent === "Sport"){
  listSport.style.display = "block";
  listSport.style.display = "flex";
 } else if(event.target.textContent === "Video-Game"){
  listVideo.style.display = "block";
  listVideo.style.display = "flex";
 } else if(event.target.textContent === "Makeup"){
  listMakeup.style.display = "block";
  listMakeup.style.display = "flex";
 } else if(event.target.textContent === "Movie"){
  listMovie.style.display = "block";
  listMovie.style.display = "flex";
 } else if(event.target.textContent === "Party"){
  listParty.style.display = "block";
  listParty.style.display = "flex";
 } else if(event.target.textContent === "Outdoor"){
  listOutdoor.style.display = "block";
  listOutdoor.style.display = "flex";
 } else if(event.target.textContent === "Adventure"){
  listAdventure.style.display = "block";
  listAdventure.style.display = "flex";
 } else if(event.target.textContent === "Travel"){
  listTravel.style.display = "block";
  listTravel.style.display = "flex";
 } else if(event.target.textContent === "Learning"){
  listLearning.style.display = "block";
  listLearning.style.display = "flex";
 } else if(event.target.textContent === "Business"){
  listBusiness.style.display = "block";
  listBusiness.style.display = "flex";
 }
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

// !!!!!! LIST Generator Sport !!!!!!!!!!!!
// Create new element when clicked for Sport



function addElementSport() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputSport").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLSport").appendChild(li);
  }
  document.querySelector(".inputSport").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnSport = document.querySelector(".addBtnSport");
addBtnSport.addEventListener("click", () => addElementSport());
/////!!!! TRY WITH MAP !! Array.from(element);

// Create new element when clicked for Video
function addElementVideo() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputVideo").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLVideo").appendChild(li);
  }
  document.querySelector(".inputVideo").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnVideo = document.querySelector(".addBtnVideo");
addBtnVideo.addEventListener("click", () => addElementVideo());

// Create new element when clicked for Makeup
function addElementMakeup() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputMakeup").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLMakeup").appendChild(li);
  }
  document.querySelector(".inputMakeup").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnMakeup = document.querySelector(".addBtnMakeup");
addBtnMakeup.addEventListener("click", () => addElementMakeup());

// Create new element when clicked for Movie
function addElementMovie() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputMovie").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLMovie").appendChild(li);
  }
  document.querySelector(".inputMovie").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnMovie = document.querySelector(".addBtnMovie");
addBtnMovie.addEventListener("click", () => addElementMovie());

// Create new element when clicked for Party
function addElementParty() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputParty").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLParty").appendChild(li);
  }
  document.querySelector(".inputParty").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnParty = document.querySelector(".addBtnParty");
addBtnParty.addEventListener("click", () => addElementParty());

// Create new element when clicked for Outdoor
function addElementOutdoor() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputOutdoor").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLOutdoor").appendChild(li);
  }
  document.querySelector(".inputOutdoor").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnOutdoor = document.querySelector(".addBtnOutdoor");
addBtnOutdoor.addEventListener("click", () => addElementOutdoor());

// Create new element when clicked for Adventure
function addElementAdventure() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputAdventure").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLAdventure").appendChild(li);
  }
  document.querySelector(".inputAdventure").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnAdventure = document.querySelector(".addBtnAdventure");
addBtnAdventure.addEventListener("click", () => addElementAdventure());

// Create new element when clicked for Travel
function addElementTravel() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputTravel").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLTravel").appendChild(li);
  }
  document.querySelector(".inputTravel").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnTravel = document.querySelector(".addBtnTravel");
addBtnTravel.addEventListener("click", () => addElementTravel());

// Create new element when clicked for Learning
function addElementLearning() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputLearning").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLLearning").appendChild(li);
  }
  document.querySelector(".inputLearning").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnLearning = document.querySelector(".addBtnLearning");
addBtnLearning.addEventListener("click", () => addElementLearning());

// Create new element when clicked for Business
function addElementBusiness() {
  const li = document.createElement("li");
  const inputValue = document.querySelector(".inputBusiness").value;
  li.textContent = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".uLBusiness").appendChild(li);
  }
  document.querySelector(".inputBusiness").value = "";


  const button = document.createElement("button");
  button.textContent = "X";
  button.className = "close";
  li.appendChild(button);

  const close = document.querySelectorAll(".close");
  close.forEach(el => el.addEventListener("click", () => el.parentElement.style.display = "none"));
}

const addBtnBusiness = document.querySelector(".addBtnBusiness");
addBtnBusiness.addEventListener("click", () => addElementBusiness());


// !!!!!!!!! GO BACK BUTTON !!!!!!!!!
const goBackBtn = document.querySelectorAll(".goBackBtn");
goBackBtnSport.forEach(button => button.addEventListener('click', () => {
if( listSport.style.display = "flex"){
  listSport.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listVideo.style.display = "flex"){
  listVideo.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listMakeup.style.display = "flex"){
  listMakeup.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listMovie.style.display = "flex"){
  listMovie.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listParty.style.display = "none"){
  listParty.style.display = "none";
  buttonSection.style.display = "flex";
} else if( listOutdoor.style.display = "flex"){
  listOutdoor.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listAdventure.style.display = "flex"){
  listAdventure.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listTravel.style.display = "flex"){
  listTravel.style.display = "none";
  buttonSection.style.display = "flex";
} else if( listLearning.style.display = "flex"){
  listLearning.style.display = "none";
  buttonSection.style.display = "flex";
} else if(listBusiness.style.display = "flex"){
  listBusiness.style.display = "none";
  buttonSection.style.display = "flex";
}
}));

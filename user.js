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
const h3 = document.createElement("h3");
const h2Sport = document.querySelector(".h2Sport");
const h2Video = document.querySelector(".h2Video");
const h2Makeup = document.querySelector(".h2Makeup");
const h2Movie = document.querySelector(".h2Movie");
const h2Party = document.querySelector(".h2Party");
const h2Outdoor = document.querySelector(".h2Outdoor");
const h2Adventure = document.querySelector(".h2Adventure");
const h2Travel = document.querySelector(".h2Travel");
const h2Learning = document.querySelector(".h2Learning");
const h2Business = document.querySelector(".h2Business");

buttons[0].addEventListener("click", () => {
  listSport.style.display = "block";
  listSport.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Sport";
  h2Sport.insertAdjacentElement('beforeend', h3);

});

buttons[1].addEventListener("click", () => {
  listVideo.style.display = "block";
  listVideo.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Video Game";
  h2Video.insertAdjacentElement('beforeend', h3);
});

buttons[2].addEventListener("click", () => {
  listMakeup.style.display = "block";
  listMakeup.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Makeup";
  h2Makeup.insertAdjacentElement('beforeend', h3);
});

buttons[3].addEventListener("click", () => {
  listMovie.style.display = "block";
  listMovie.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Movie";
  h2Movie.insertAdjacentElement('beforeend', h3);
});

buttons[4].addEventListener("click", () => {
  listParty.style.display = "block";
  listParty.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Party";
  h2Party.insertAdjacentElement('beforeend', h3);
});

buttons[5].addEventListener("click", () => {
  listOutdoor.style.display = "block";
  listOutdoor.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Outdoor";
  h2Outdoor.insertAdjacentElement('beforeend', h3);
});

buttons[6].addEventListener("click", () => {
  listAdventure.style.display = "block";
  listAdventure.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Adventure";
  h2Adventure.insertAdjacentElement('beforeend', h3);
});

buttons[7].addEventListener("click", () => {
  listTravel.style.display = "block";
  listTravel.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Travel";
  h2Travel.insertAdjacentElement('beforeend', h3);
});

buttons[8].addEventListener("click", () => {
  listLearning.style.display = "block";
  listLearning.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Learning";
  h2Learning.insertAdjacentElement('beforeend', h3);
});

buttons[9].addEventListener("click", () => {
  listBusiness.style.display = "block";
  listBusiness.style.display = "flex";
  buttonSection.style.display = "none";
  h3.textContent = "Business";
  h2Business.insertAdjacentElement('beforeend', h3);
});
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
const goBackBtnSport = document.querySelector(".goBackBtnSport");
goBackBtnSport.addEventListener("click", () => {
  listSport.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnVideo = document.querySelector(".goBackBtnVideo");
goBackBtnVideo.addEventListener("click", () => {
  listVideo.style.display = "none";
  buttonSection.style.display = "flex";
});


const goBackBtnMakeup = document.querySelector(".goBackBtnMakeup");
goBackBtnMakeup.addEventListener("click", () => {
  listMakeup.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnMovie = document.querySelector(".goBackBtnMovie");
goBackBtnMovie.addEventListener("click", () => {
  listMovie.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnParty = document.querySelector(".goBackBtnParty");
goBackBtnParty.addEventListener("click", () => {
  listParty.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnOutdoor = document.querySelector(".goBackBtnOutdoor");
goBackBtnOutdoor.addEventListener("click", () => {
  listOutdoor.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnAdventure = document.querySelector(".goBackBtnAdventure");
goBackBtnAdventure.addEventListener("click", () => {
  listAdventure.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnTravel = document.querySelector(".goBackBtnTravel");
goBackBtnTravel.addEventListener("click", () => {
  listTravel.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnLearning = document.querySelector(".goBackBtnLearning");
goBackBtnLearning.addEventListener("click", () => {
  listLearning.style.display = "none";
  buttonSection.style.display = "flex";
});

const goBackBtnBusiness = document.querySelector(".goBackBtnBusiness");
goBackBtnBusiness.addEventListener("click", () => {
  listBusiness.style.display = "none";
  buttonSection.style.display = "flex";
});
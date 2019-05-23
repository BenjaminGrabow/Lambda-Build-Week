const loginData = [
    {
      imageSrc: "/pictures/Top4.png",
      imageClassList: "avatar",
      h1textContent: "Login Here",
      formClassList: "logInForm",
      formAction: "user.html",
      paragraphTextContent: "Username",
      inputType: "text",
      inputPlaceholder: "Enter Username",
      paragraph2TextContent: "Password",
      input2Type: "password",
      input2Placeholder: "Enter Password",
      buttonTextContent: "Login",
      anchorHref: "#",
      anchorTextContent: "Lost your password?",
      anchor2Href: "#",
      anchor2TextContent: "Don't have an account?",
      },
  ];

// LogInBoxGenerator 
class LogInBoxGenerator {
    constructor(logInElement, data) {
        // constructor function
        this.logInElement = logInElement;
        this.data = data;
        // assign the loginelement which is the div with the loginBox class to this.loginElement
        this.createImage();
        // call the createImage method which is in the method section of the LogInBoxGenerator
        this.createH1();
        this.createForm();
        this.form = document.querySelector(".logInForm");
        // when the form got created from the createForm method -> assign it to this.form with a querySelector to get access to the form element for the next methods
        this.createParagraph();
        this.createInput();
        this.createParagraph2();
        this.createInput2();
        this.createButton();
        this.createAnchor();
        this.createLineBreak();
        this.createAnchor2();
    }

    createImage() {
        const image = document.createElement("img");
        // create a img element
        image.src = this.data.imageSrc;
        // assign to the image the src
        image.classList.add(this.data.imageClassList);
        // add the class "avatar" to the image
        this.logInElement.append(image);
        // append the created image to this.loginElement(the div with the class loginBox )
    }

    createH1() {
        const h1 = document.createElement("h1");
        h1.textContent = this.data.h1textContent;
        this.logInElement.insertAdjacentElement('beforeend', h1);
    }

    createForm() {
        const form = document.createElement("form");
        form.classList.add(this.data.formClassList);
        form.action = this.data.formAction;
        this.logInElement.insertAdjacentElement('beforeend', form);
        // now we created the form and must assign the form to thisForm to have access to the form in the next methods
    }

    createParagraph() {
        const paragraph = document.createElement("p");
        paragraph.textContent = this.data.paragraphTextContent;
        this.form.insertAdjacentElement('beforeend', paragraph);
        // we must now append (append method would also be usable like with that method) the p to the form and not to this.loginBox because we want it to append inside the form
    }

    createInput() {
        const input = document.createElement("input");
        input.type = this.data.inputType;
        input.placeholder = this.data.inputPlaceholder;
        this.form.insertAdjacentElement('beforeend', input);
    }

    createParagraph2() {
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = this.data.paragraph2TextContent;
        this.form.insertAdjacentElement('beforeend', paragraph2);
    }

    createInput2() {
        const input2 = document.createElement("input");
        input2.type = this.data.input2Type;
        input2.placeholder = this.data.input2Placeholder;
        this.form.insertAdjacentElement('beforeend', input2);
    }

    createButton() {
        const button = document.createElement("button");
        button.textContent = this.data.buttonTextContent;
        this.form.insertAdjacentElement('beforeend', button);
    }

    createAnchor() {
        const anchor = document.createElement("a");
        anchor.href = this.data.anchorHref;
        anchor.textContent = this.data.anchorTextContent;
        this.form.insertAdjacentElement('beforeend', anchor);
    }

    createLineBreak() {
        const br = document.createElement("br");
        this.form.insertAdjacentElement('beforeend', br);
    }

    createAnchor2() {
        const anchor2 = document.createElement("a");
        anchor2.href = this.data.anchor2Href;
        anchor2.textContent = this.data.anchor2TextContent;
        this.form.insertAdjacentElement('beforeend', anchor2);
    }
}

document.querySelectorAll(".logInBox").forEach((login, index) => new LogInBoxGenerator(login, loginData[index]));
// get the loginbox class from the div which is in the html file -> loop through and generate a new loginbox
// we must have the method where the new LogInBoxGenerator get's created under the constructor function because 
// the console cannot access 'LogInBoxGenerator' before initialization

// RegisterBoxGenerator
class RegisterBoxGenerator {
    constructor(registerElement) {
        // same use like with the LogInBoxGenerator at the top
        this.registerElement = registerElement;
        this.createImage();
        this.createH1();
        this.createForm();
        this.form = document.querySelector(".registerForm");
        this.createParagraph();
        this.createInput();
        this.createParagraph2();
        this.createInput2();
        this.createParagraph3();
        this.createInput3();
        this.createButton();
    }

    createImage() {
        const image = document.createElement("img");
        image.src = "/pictures/Top4.png";
        image.classList.add("avatar");
        this.registerElement.append(image);
    }

    createH1() {
        const h1 = document.createElement("h1");
        h1.textContent = "Register Here";
        this.registerElement.insertAdjacentElement('beforeend', h1);
    }

    createForm() {
        const form = document.createElement("form");
        form.classList.add("registerForm");
        form.action = "user.html";
        this.registerElement.insertAdjacentElement('beforeend', form);
    }

    createParagraph() {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Username";
        this.form.insertAdjacentElement('beforeend', paragraph);
    }

    createInput() {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter Username";
        this.form.insertAdjacentElement('beforeend', input);
    }

    createParagraph2() {
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = "Email";
        this.form.insertAdjacentElement('beforeend', paragraph2);
    }

    createInput2() {
        const input2 = document.createElement("input");
        input2.type = "text";
        input2.placeholder = "Enter Email";
        this.form.insertAdjacentElement('beforeend', input2);
    }

    createParagraph3() {
        const paragraph3 = document.createElement("p");
        paragraph3.textContent = "Password";
        this.form.insertAdjacentElement('beforeend', paragraph3);
    }

    createInput3() {
        const input3 = document.createElement("input");
        input3.type = "password";
        input3.placeholder = "Enter Password";
        this.form.insertAdjacentElement('beforeend', input3);
    }

    createButton() {
        const button = document.createElement("button");
        button.textContent = "Register";
        this.form.insertAdjacentElement('beforeend', button);
    }
}

document.querySelectorAll(".registerBox").forEach(register => new RegisterBoxGenerator(register));

// Show loginBox
const logInButton = document.querySelectorAll("a");
// get every a element and assign it to loginButton 
const logInBox = document.querySelector(".logInBox");
// get the the element with the class loginBox and assign it to logInBox
logInButton[2].addEventListener("click", () => {
    // we take the third a element ([2]) and give the element a event listener (when a element get's clicked)
    registerBox.style.display = "none";
    // if the third a element get's clicked assign to the element which have the class registerBox the style display none to get it out of the window
    logInBox.style.display = "block";
    // also give the element with the class logInbox the style display block so you can see it
    TweenMax.to(".logInBox", 2, { x: "-50%", ease: Bounce.easeOut });
    // GSAP effect : the element is in default (from the CSS outside the window and on the y axis -50% which is the middle on the y axis on the page)
    // now make the element to the position x axis : -50% which is also the middle of the page on the x axis
});

// Show registerBox
// same logic like with the logInBox up
const registerButton = document.querySelectorAll("a");
const registerBox = document.querySelector(".registerBox")
logInButton[3].addEventListener("click", () => {
    logInBox.style.display = "none";
    registerBox.style.display = "block";
    TweenMax.to(".registerBox", 2, { x: "-50%", ease: Bounce.easeOut });
});

// Carousel
class Carousel {
    constructor(carouselElement) {
        // constructor function
        this.carouselElement = carouselElement;
        // assign the element with the carousel function to this carouselElement
        // In JavaScript, the thing called this is the 
        // object that "owns" the code. The value of this ,
        // when used in an object, is the object itself.
        // In a constructor function this does not have a value.
        // It is a substitute for the new object.
        this.left = carouselElement.querySelector(".left-button");
        // assign the element with the class left-button to this element
        this.right = carouselElement.querySelector(".right-button");
        // same like one line up
        this.img = carouselElement.querySelectorAll("img");
        // get the images and assign them to this.img
        this.right.addEventListener('click', () => this.rightPicture());
        //assign to the element with the right-button class a event listener -> if the element get's clicked call the method rightPicture which is down in the method section 
        this.left.addEventListener('click', () => this.leftPicture());
        // same like one line up
        this.index = 0;
        // assign to this.index the number 0 to have a index for the methods which we need to get the different images
        this.img[0].style.display = "block";
        // show at the beginning the first picture
    }

    rightPicture() {
        this.img[this.index].style.display = "none";
        // The current image gets the style display none that get it away from the screen
        this.index += 1;
        //1 get's added to this.index 
        if (this.index > 3) {
            // If the index get's higher than 3 (we have only 4 pictures in our case so from 0 started to 3)
            this.index -= 4;
            // make this.index -4 ( is it than at the start again which is 0 because 4 is the only number which get's triggered in the if statement)
        }
        this.img[this.index].style.display = "block";
        // if this.index got not added to 4 show us the picture with the current number from this.index
    }

    leftPicture() {
        this.img[this.index].style.display = "none";
        // The current image gets the style display none that get it away from the screen
        this.index -= 1;
        // -1 gets subtracted from this.index 
        if (this.index < 0) {
            this.index += 4;
            // if this.index gets smaller than 0 add 4 to this.index
        }
        this.img[this.index].style.display = "block";
        // if this.index got not subctracted to -1 show us the picture with the current number from this.index
    }
}

let carousel = document.querySelectorAll(".carousel").forEach(el => new Carousel(el));
// get the element with the carousel class and loop through with the forEach method

// TAB SECTION
class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = tabElement.dataset.tab;
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
        this.cards = Array.from(this.cards).map(card => new TabCard(card))
        this.tabElement.addEventListener("click", () => this.selectTab());
    }

    selectTab() {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => tab.classList.remove("active-tab"));
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.style.display = "none");
        this.tabElement.classList.add("active-tab");
        this.cards.forEach(card => card.selectCard());
    }
}

class TabCard {
    constructor(cardElement) {
        this.cardElement = cardElement;
    }

    selectCard() {
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.style.display = "flex";
        this.cardElement.style.display = "flex";
    }
}

let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));

// Subcribe effect for min width of 750px
const subcribe = document.querySelector(".button-Subcribe");
const minWidthforEvent = window.matchMedia("(min-width: 1200px)");
if (minWidthforEvent.matches) {
    subcribe.addEventListener("click", () => {
        TweenMax.to(".button-Subcribe", 4, { x: "-57%", ease: Bounce.easeOut });
        subcribe.value = "Thank you";
        subcribe.style.width = "140%";
        subcribe.style.fontSize = "6rem";
    });
}

// USERPAGE FUNCTIONALITY
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
// select all elements with the class addBTN
const AddIndexForReduceMethod = [0, 0, 0];
// Added this Index for counting how often the add button got clicked and to get experience with reduce method
addBtn.forEach((button) => button.addEventListener("click", (event) => {
    //take the variable addBtb which are the add buttons -> loop through and add on each the event listener
    AddIndexForReduceMethod.push(1);
    // push the number 1 to the array AddIndexForReduceMethod if the add button got clicked
    const addButtonCounter = AddIndexForReduceMethod.reduce((acc, val) => acc + val, 0);
    // sum all numbers from the pushed array AddIndexForReduceMethod together and assign it to the variable addButtonCounter
    const paragraph = document.createElement("p");
    // create element p and assign it to the variable paragraph
    paragraph.textContent = `You added ${addButtonCounter} items so so far to all your lists`;
    // assign to the p element the textContent with the actual sum which we got from the reduce method and saved in the variable addButtonCounter
    paragraph.classList.add("count-Items");
    // add the classlist count-Items for css reason

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
        document.querySelector(`.${uLClassName}`).appendChild(paragraph);
        // append the paragraph with the counted number from the reduce method
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

// When you click on the go back button -> show the category buttons
const goBackBtn = document.querySelectorAll(".goBackBtn");
const h4 = document.querySelector(".h4");
// take the element with class h4 and assign to h4
goBackBtn.forEach(button => button.addEventListener('click', () => {
    // take every go back button -> loop through and add the eventlistener
    lists.forEach(list => {
        //take every list for the category and loop through
        if (list.style.display === 'flex') {
            list.style.display = "none";
            buttonSection.style.display = "flex";
            // if the list for the current category is visible -> make the list away and show the various category buttons
            const anotherAddCounter = AddIndexForReduceMethod.reduce((acc, value) => acc + value, 0);
            // sum all numbers from AddIndexForReduceMethod together (on every click on add button the variable gets a 1 added) and assign it to anotherAddCounter
            h4.textContent = `You added ${anotherAddCounter} items so far`;
            // change the textcontent from h4 and add the summed number to the text;
            h4.style.color = "green";
            // make the color from h4 to green (at the start it is red)
        };
    });
}));
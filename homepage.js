// LogInBoxGenerator 
class LogInBoxGenerator {
    constructor(logInElement) {
        this.logInElement = logInElement;
        this.createImage();
        this.createH1();
        this.createForm();
        this.form = document.querySelector(".logInForm");
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
        image.src = "/pictures/avatar.png";
        image.classList.add("avatar");
        this.logInElement.append(image);
    }

    createH1() {
        const h1 = document.createElement("h1");
        h1.textContent = "Login Here";
        this.logInElement.insertAdjacentElement('beforeend', h1);
    }

    createForm() {
        const form = document.createElement("form");
        form.classList.add("logInForm");
        form.action = "user.html";
        this.logInElement.insertAdjacentElement('beforeend', form);
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
        paragraph2.textContent = "Password";
        this.form.insertAdjacentElement('beforeend', paragraph2);
    }

    createInput2() {
        const input2 = document.createElement("input");
        input2.type = "password";
        input2.placeholder = "Enter Password";
        this.form.insertAdjacentElement('beforeend', input2);
    }

    createButton() {
        const button = document.createElement("button");
        button.textContent = "Login"
        this.form.insertAdjacentElement('beforeend', button);
    }

    createAnchor() {
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.textContent = "Lost your password?";
        this.form.insertAdjacentElement('beforeend', anchor);
    }

    createLineBreak() {
        const br = document.createElement("br");
        this.form.insertAdjacentElement('beforeend', br);
    }

    createAnchor2() {
        const anchor2 = document.createElement("a");
        anchor2.href = "#";
        anchor2.textContent = "Don't have an account?";
        this.form.insertAdjacentElement('beforeend', anchor2);
    }

}

document.querySelectorAll(".logInBox").forEach(login => new LogInBoxGenerator(login));

// RegisterBoxGenerator
class RegisterBoxGenerator{
    constructor(registerElement) {
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
        image.src = "/pictures/avatar.png";
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

    createParagraph()  {
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
const logInBox = document.querySelector(".logInBox")
logInButton[2].addEventListener("click", () => {
    registerBox.style.display = "none";
    logInBox.style.display = "block";
    TweenMax.to(".logInBox", 2, {x:"-50%", ease: Bounce.easeOut});
});

// Show registerBox
const registerButton = document.querySelectorAll("a");
const registerBox = document.querySelector(".registerBox")
logInButton[3].addEventListener("click", () => {
    logInBox.style.display = "none";
    registerBox.style.display = "block";
    TweenMax.to(".registerBox", 2, {x:"-50%", ease: Bounce.easeOut});
});
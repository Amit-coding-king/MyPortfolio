// Typing animation
const text = ["Web Developer ", "Java Programmer", "Frontend Designer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index < text.length) {
        if (!isDeleting && charIndex <= text[index].length) {
            currentText = text[index].substring(0, charIndex++);
        } else if (isDeleting && charIndex >= 0) {
            currentText = text[index].substring(0, charIndex--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (!isDeleting && charIndex === text[index].length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
        }
    } else {
        index = 0;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Button click
function showAlert() {
    alert("Thanks for visiting my portfolio!");
}
showAlert()
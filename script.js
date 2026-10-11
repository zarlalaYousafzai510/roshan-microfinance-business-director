const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

const form = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        successMessage.hidden = false;
        form.reset();
    }
});
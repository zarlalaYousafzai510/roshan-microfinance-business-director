const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menuBtn.addEventListener("click", function(){
    if (nav.style.display==="none"){
        nav.style.display="flex"

    }
    else{
        nav.style.display="none"
    }
})
const form = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        successMessage.hidden = false;
        form.reset();
    }
});


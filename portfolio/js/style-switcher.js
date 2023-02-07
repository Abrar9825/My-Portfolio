// toggle style switcher
const styleSwitchertoggle = document.querySelector(".style-switcher-toggler");///store a class in varible 
styleSwitchertoggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");//to open on touch on setting button
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");//to remove on scrool time
    }
})

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {    //here we write a color cuz of we passing the argument
    alternateStyles.forEach((style) => { //alternateStyles is class of all stylesheet so we get access a all stylesheet to passing a argument
        if (color === style.getAttribute("title")) {//here we get a title attribute which is same is argumet 
            style.removeAttribute("disabled");//then remove disabled
        }
        else {
            style.setAttribute("disabled", "true");//if not mach then don't change

        }
    })
}


// dark mode not working now
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})
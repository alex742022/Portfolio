//Scroll Animation
window.addEventListener('scroll',() => {
    var  reveals = document.querySelectorAll('.reveal, .reveal1, .reveal2');
    for (var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 200;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
    }
});

// Nav Animation
const barIcontainer = document.querySelector(".bar-container");
const navbarContainer = document.querySelector(".navbar-content");
const barIcon = document.querySelector(".bar");

barIcontainer.addEventListener("click", () =>{
    navbarContainer.classList.toggle("nav-active");
    barIcon.classList.toggle("xmark-active");
    // xIcon.style.display = "block";
    // barIcon.style.display = "none";
});

// xIcon.addEventListener("click", () =>{
//     navbarContainer.style.right = "-100%";
//     barIcon.style.display = "block";
//     xIcon.style.display = "none";
// })

// // Waiting function | till the content is ready  
const loadingContainer = document.querySelector(".loading-container");
const displayContainer = document.querySelector(".display-container");
window.addEventListener("load", showPage);
function showPage() {
    displayContainer.style.display = "block";
    loadingContainer.style.display ="none";
}
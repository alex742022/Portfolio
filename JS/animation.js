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

//colorThme Manipulate function

const themeButton = document.querySelector(".theme-button");
const themeContainer = document.querySelector(".theme-container");
themeButton.addEventListener("click", () => {
    themeContainer.classList.toggle("theme-container-active");
})

const colorOne = document.querySelector(".color1");
colorOne.addEventListener("click", () => {
    // const color3 = "linear-gradient(90deg, rgba(93,112,127,1) 0%, rgba(109,138,150,1) 100%)";
    const colorTheme1 = "#841c26";
    const colorTheme3 = "linear-gradient(90deg, rgba(132,28,38,1) 0%, rgba(237,123,132,1) 100%)";
    document.documentElement.style.setProperty("--colorTheme3", colorTheme3);
    document.documentElement.style.setProperty("--colorTheme1", colorTheme1);
});

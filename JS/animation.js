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
});

// Waiting function | till the content is ready  
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

//Reset themeColor Function
const colorReset = document.querySelector(".color-reset");
colorReset.addEventListener("click", () => {
    const colorThemeTwo1 = "#008726";
    const colorThemeTwo3 = "linear-gradient(90deg, rgba(0,135,38,1) 0%, rgba(50,185,44,1) 100%)";
    document.documentElement.style.setProperty("--colorThemeOne1", colorThemeTwo1);
    document.documentElement.style.setProperty("--colorThemeOne3", colorThemeTwo3);
});

// colorOne Theme Function
const colorOne = document.querySelector(".color1");
colorOne.addEventListener("click", () => {
    const colorThemeTwo1 = "#841c26";
    const colorThemeTwo3 = "linear-gradient(90deg, rgba(132,28,38,1) 0%, rgba(237,123,132,1) 100%)";
    document.documentElement.style.setProperty("--colorThemeOne1", colorThemeTwo1);
    document.documentElement.style.setProperty("--colorThemeOne3", colorThemeTwo3);
});

// colorTwo Theme Function
const colorTwo = document.querySelector(".color2");
colorTwo.addEventListener("click", () => {
    const colorThemeTwo1 = "#5f0f40";
    const colorThemeTwo3 = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,15,64,1) 35%, rgba(200,128,183,1) 100%)";
    document.documentElement.style.setProperty("--colorThemeOne1", colorThemeTwo1);
    document.documentElement.style.setProperty("--colorThemeOne3", colorThemeTwo3);
});

// colorThree Theme Function
const colorThree = document.querySelector(".color3");
colorThree.addEventListener("click", () => {
    const colorThemeTwo1 = "#440381";
    const colorThemeTwo3 = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,3,129,1) 35%, rgba(109,152,186,1) 100%)";
    document.documentElement.style.setProperty("--colorThemeOne1", colorThemeTwo1);
    document.documentElement.style.setProperty("--colorThemeOne3", colorThemeTwo3);
});

window.addEventListener('scroll',() => {
    // var navBar = document.querySelector('.nav-bar');
    // navBar.classList.toggle('nav-bar2', windo)
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
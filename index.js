function myFunction() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(`.navbar`).classList.toggle("navbar-dark-mode");
    document.querySelector(`#profileborder`).classList.toggle("profile-dark-mode");
    document.querySelector(`#profilepic`).classList.toggle("pic-dark-mode");
    document.querySelector(`#aboutme`).classList.toggle("aboutme-dark-mode");
    document.querySelector(`.mywork`).classList.toggle("mywork-dark-mode");
}
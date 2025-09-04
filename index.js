function darkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(`.navbar`).classList.toggle("navbar-dark-mode");
    document.querySelector(`#profileborder`).classList.toggle("profile-dark-mode");
    document.querySelector(`#profilepic`).classList.toggle("pic-dark-mode");
    document.querySelector(`#aboutme`).classList.toggle("aboutme-dark-mode");
    document.querySelector(`.mywork`).classList.toggle("mywork-dark-mode");
     document.querySelector(`.header`).classList.toggle("header-dark-mode");}


     const text="Miya Simms";
     const span=document.getElementById("typewrite");
     let i=0;
function typeWriter(){
        if (i < text.length){
            span.textContent += text.charAt(i); i++;
            setTimeout(typeWriter,150);
        }
     }
     span.textContent = ""
     typeWriter();
     
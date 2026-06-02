function darkMode(){
    document.body.classList.toggle("dark");
}

let text = "Java Full Stack Developer";
let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

typeEffect();
function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.onload = function(){

    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";
}
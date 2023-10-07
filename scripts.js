let menuVisible = false;
// Función que oculta o muesta el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }    
}

function seleccionar(){
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcssjs");
        habilidades[1].classList.add("react");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("b4a");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("empatia");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("responsabilidad");
    }
}
// detecto el scrolling para aplicar la animacion de la barrera de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
let menuVisible = false;
//Funcion Ocultar o Mostrar Menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
//ocultamos menu cuando seleccionamos opcion.
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//FUNCION ANIMACIONES EN HABILIDADES
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("reactjs");
        habilidades[3].classList.add("sass");
        habilidades[4].classList.add("boostrap");
        habilidades[5].classList.add("wordpress");
        habilidades[6].classList.add("github");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proyectmanage");
    }
}
//DETECTAMOS SCROLLING PARA APLICAR EN ANIMACIONES
window.onscroll = function(){
    efectoHabilidades();
}

const form = document.querySelector(".formulario")
const mascara =document.querySelector(".mascara-formulario")


function clicaboton() {
    mascara.style.visibility ="visible"
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"

    
}

function clicamascara(){
    mascara.style.visibility ="hidden"
    form.style.left= "-300px"
    form.style.transform= "translateX(0%)"

}

function mostraform(){
    mascara.style.visibility ="visible"
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"

}


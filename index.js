//controlar los elementos
//efectos
//le menutoggle: donde vamos a expandirlo

const menuToggle = document.querySelector('.memuToggle')
const navigation = document.querySelector('.navigation')

//funconalidades
//controlar elementos de css
//classList es nuestra class
//toglle: como un activador



window.onclick = function (onclick) {
    navigation.classList.toggle('open')//toggle reconoce todo lo que tiene en open
}

const list = document.querySelectorAll('.list')
function activarLink() {
    list.forEach((item) => //forEach para recorrer cada item
        item.classList.remove('active'))//remove es deseleccionar cada active
    this.classList.add('active')//seleccionamos ese active con esas propiedades de estilos
}

//forEach como un bucle

list.forEach((item) =>
    item.addEventListener('click', activarLink)
)

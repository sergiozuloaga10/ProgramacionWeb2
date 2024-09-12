window.addEventListener('scroll', evento);

/*
function evento(evt){
    evt.preventDefault();
    console.log('scroll');
    console.log(window.scrollY);

}
*/

//si llegamos a un elemento
function evento(evt){
    const imagen = document.querySelector('#img');
    const ubicacion = imagen.getBoundingClientRect();
    //console.log(ubicacion)
    if(ubicacion.top < 685){
        console.log('Ya estamos en el elemento');
    } else {
        console.log('Todavia no llegamos');
    }
}
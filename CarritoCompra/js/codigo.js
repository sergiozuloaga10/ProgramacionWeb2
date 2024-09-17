const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
const listaLibros = document.querySelector('#lista-libros');
let itemsCarrito = [];

registrarListener();

function registrarListener(){
    listaLibros.addEventListener('click', agregarLibro);
}

//agregamos un libro al carrito
function agregarLibro(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('agregar-carrito')){
        const libroSeleccionado = evt.target.parentElement.parentElement;
                leerLibro(libroSeleccionado);
    }
}

//leer el contenido del libro
function leerLibro(libro){
    const libroInfo = {
        imagen: libro.querySelector('img').src,
        nombre: libro.querySelector('h4').textContent,
        precio: libro.querySelector('.precio span').textContent,
        cantidad:1
    }
    console.log(libroInfo);
}
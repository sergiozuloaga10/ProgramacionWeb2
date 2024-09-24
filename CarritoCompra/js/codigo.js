
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
const listaLibros = document.querySelector('#lista-libros');
let itemsCarrito = [];
let precio = 0;

registrarListener();

function registrarListener(){
    listaLibros.addEventListener('click', agregarLibro);
    vaciarCarritoB.addEventListener('click', vaciar);
    contenedorCarrito.addEventListener('click', quitarItem);
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
    clicks = 0
    const libroInfo = {
        imagen: libro.querySelector('img').src,
        nombre: libro.querySelector('h4').textContent,
        precio: libro.querySelector('.precio span').textContent,
        id: libro.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = itemsCarrito.some(libro => libro.id === libroInfo.id);

    if(existe){
        //se actualiza la cantidad
        const libros = itemsCarrito.map(libro => {
            if(libro.id === libroInfo.id){
                libro.cantidad++;
                return libro;
            }else{
                return libro;
            }
        });
        itemsCarrito = [...libros];
    }else{
        itemsCarrito = [...itemsCarrito, libroInfo];
    }

    console.log(libroInfo);
    console.log(itemsCarrito);
    agregarCarrito();
}

function agregarCarrito(){
    contenedorCarrito.innerHTML = '';

    itemsCarrito.forEach((item, i) => {

        const row = document.createElement('tr');

        let itemPrice = parseFloat(item.precio.slice(1));
        itemPrice * item.cantidad;
        precio += itemPrice;
        row.innerHTML = `
        <td>
        <img src="${item.imagen}" alt="${item.title}" width="100">
        </td>
        <td>
            <h4>${item.nombre}</h4>
        </td>
        <td>
            ${item.precio}
        </td>
        <td>
            ${item.cantidad}
        </td>
        <td>
        <button class='quitar' data-index="${i}">Quitar</button>
        </td>
        `;

        contenedorCarrito.appendChild(row);
        });
    
    totalVenta();
}

function totalVenta(){
    let total = document.querySelector('.total');
    total.innerHTML = `Total: $${precio}`;
    console.log(total);
}

//vaciamos el carrito
function vaciar(){
    itemsCarrito = [];
    agregarCarrito();
    precio = 0;
    totalVenta();

}

//funcionalidad de boton quitar
function quitarItem(e){
    if (e.target.classList.contains('quitar')) {

        let index = e.target.getAttribute('data-index'); 
      
        let removedItem = itemsCarrito.splice(index, 1)[0];

        let itemPrice = parseFloat(removedItem.precio.slice(1));
        
        

        agregarCarrito();

        console.log(`Item removed: ${removedItem.title}`);

        totalVenta();

    }
}


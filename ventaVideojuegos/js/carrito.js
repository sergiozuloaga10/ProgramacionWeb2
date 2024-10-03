let carrito = [];
let listaJuegos = document.querySelector('.contenido');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
let precio = 0;

registrarListener();

function registrarListener() {
    listaJuegos.addEventListener('click', agregarJuego);
    vaciarCarritoB.addEventListener('click', vaciar);
    contenedorCarrito.addEventListener('click', quitarItem);
}

// Agregamos un juego al carrito
function agregarJuego(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('agregar')) {
        const juegoSeleccionado = evt.target.closest('.juegos'); 
        leerJuego(juegoSeleccionado);
    }
}

// Leer el contenido del juego
function leerJuego(juego) {
    const juegoInfo = {
        imagen: juego.querySelector('img').src,
        nombre: juego.querySelector('h3').textContent,
        precio: juego.querySelector('span').textContent,
        id: juego.querySelector('a.agregar').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = carrito.some(juego => juego.id === juegoInfo.id);

    if (existe) {
        // Actualizar la cantidad
        const juegos = carrito.map(juego => {
            if (juego.id === juegoInfo.id) {
                juego.cantidad++;
                return juego;
            } else {
                return juego;
            }
        });
        carrito = [...juegos];
    } else {
        carrito = [...carrito, juegoInfo];
    }

    console.log(juegoInfo);
    console.log(carrito);
    agregarCarrito();
}

// Actualizar el carrito y mostrar los juegos
function agregarCarrito() {
    contenedorCarrito.innerHTML = '';

    // Reinicializa el precio cada vez que se actualiza el carrito
    precio = 0;

    carrito.forEach((item, i) => {

        const row = document.createElement('tr');

        let itemPrice = parseFloat(item.precio.slice(1)); // Convertir a número el precio
        precio += itemPrice * item.cantidad;

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
        <button class='quitar' data-index="${i}">X</button>
        </td>
        `;

        contenedorCarrito.appendChild(row);
    });

    totalVenta();
}

// Actualizar el total de la venta
function totalVenta() {
    let total = document.querySelector('.total');
    total.innerHTML = `Total: $${precio.toFixed(2)}`;
    console.log(total);
}

// Vaciar el carrito
function vaciar() {
    carrito = [];
    agregarCarrito();
    precio = 0;
    totalVenta();
}

// Quitar un elemento del carrito
function quitarItem(e) {
    if (e.target.classList.contains('quitar')) {
        let index = e.target.getAttribute('data-index'); 

        // Eliminar el juego del array `carrito`
        let removedItem = carrito.splice(index, 1)[0];

        let itemPrice = parseFloat(removedItem.precio.slice(1));

        // Restar el precio al total
        precio -= itemPrice * removedItem.cantidad;

        agregarCarrito();

        console.log(`Item removed: ${removedItem.nombre}`);

        totalVenta();
    }
}

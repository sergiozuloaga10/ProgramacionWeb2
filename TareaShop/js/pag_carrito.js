let car = document.querySelector('.productos-carrito');

let storedCart = localStorage.getItem('carrito');
window.carrito = storedCart ? JSON.parse(storedCart) : [];

let precio = 0;

function renderCart() {
    car.innerHTML = '';
    precio = 0; 
    
    window.carrito.forEach((cartItem, index) => {
       
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.id = `item-${index}`;

        let aux1 = cartItem.price;
        const aux2 = aux1.slice(1); 
        const aux = parseFloat(aux2); 
        precio += aux;

        itemDiv.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.title}" width="100">
            <h3>${cartItem.title}</h3>
            <button class='quitar' data-index="${index}">Quitar</button>
            <span class="price">${cartItem.price}</span>
        `;

        car.appendChild(itemDiv);
    });

    let total = document.querySelector('.total');
    total.innerHTML = `Total: $${precio}`;
}

renderCart();

car.addEventListener('click', (e) => {
    if (e.target.classList.contains('quitar')) {
        let index = e.target.getAttribute('data-index'); 
      
        let removedItem = window.carrito.splice(index, 1)[0];

        let itemPrice = parseFloat(removedItem.price.slice(1));
        precio -= itemPrice;

        localStorage.setItem('carrito', JSON.stringify(window.carrito));

        renderCart();

        console.log(`Item removed: ${removedItem.title}`);
    }
});

let items = document.querySelectorAll('.items');
items = Array.from(items);
console.log(items);

let boton = document.querySelectorAll('button');
boton = Array.from(boton);
console.log(boton);

boton.forEach((boton, index) => {
    boton.addEventListener('click', () => {
  
        let item = items[index];
        let imageSrc = item.querySelector('img').src;
        let title = item.querySelector('h3').textContent; 
        let price = item.querySelector('span').textContent; 

        let cartItem = {
            image: imageSrc,
            title: title,
            price: price
        };

        window.carrito.push(cartItem);
        
        localStorage.setItem('carrito', JSON.stringify(window.carrito));
        
        console.log(window.carrito);
    });
});

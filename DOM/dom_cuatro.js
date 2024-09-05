var navegar = document.querySelector('#base');
console.log(navegar);
console.log(navegar.childNodes); //los espacios en blanco son elementos
console.log(navegar.children);
console.log(navegar.children[5].src='image/fes_2.jpg');
//https;//developer.mozilla.org/es/docs/Web/API/Node/nodeType
console.log(navegar.children[5].nodeType);

//avanzar al siguiente elemento
const siguiente = navegar.children[0];
console.log(siguiente.nextElementSibling);
siguiente.nextElementSibling.innerText = 'Hola Web 2';

//elemento anterior
console.log(navegar.children[5].previousElementSibling);

//eliminar un elemento desde el padre
navegar.removeChild(navegar.children[6]);


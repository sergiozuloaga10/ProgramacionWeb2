const imagen = document.createElement('img');
imagen.textContent = 'imagen nueva';
imagen.src = 'image/fes_2.jpg';
imagen.onclick = funcion;
console.log(imagen);

function funcion(){
    alert('Evento de la imagen');
}
//seleccionar en donde
const donde = document.querySelector('#base');
console.log(donde.children);
//al final
donde.appendChild(imagen);


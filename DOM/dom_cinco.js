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

//en el lugar que deseamos
donde.insertBefore(imagen, donde.children[1]);
//agregar un div nuevo
const div = document.createElement('div');
const imagen_1 = document.createElement('img');
imagen_1.src = 'image/fes_2.jpg';
imagen_1.classList.add("clase-1");
const imagen_2 = document.createElement('img');
imagen_2.src = 'image/fes_2.jpg';
div.appendChild(imagen_1);
div.appendChild(imagen_2);
const ubicacion = document.querySelector('#cuerpo');
ubicacion.appendChild(div);


//Seleccionar elemntos por clase
const clase = document.getElementsByClassName("fondo");
console.log(clase);

const clase_no = document.getElementsByClassName("fondo2");
console.log(clase_no);

//seleccionar formulario
const formulario = document.getElementById('f0');
console.log(formulario);

const formulario_no = document.getElementById('f1');
console.log(formulario_no);

//querySelector para clases
//el primero que se encuentre
const selector = document.querySelector('.fondo');
console.log(selector);

//querySelector id
const form_dos = document.querySelector('.fondo #f0')
console.log(form_dos);

//querySelector por su etiqueta
const etiqueta = document.querySelector('img')
console.log(etiqueta);

//querySelectorAll
const todos = document.querySelectorAll('img')
console.log(todos);

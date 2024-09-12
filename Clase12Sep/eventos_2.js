//eventos del mouse
const img = document.querySelector('#img');

/*
img.addEventListener('click', () => {
    console.log('Evento de click en imagen');    
});
*/
/*
//mover el modo celular
img.addEventListener('mouseenter', () => {
    console.log('Evento de mouseenter en imagen');
});
*/
/*
//mover el modo celular
img.addEventListener('mouseout', () => {
    console.log('Evento de mouseout en imagen');
});
*/
/*
//mover el modo celular juntos
img.addEventListener('mouseenter', () => {
    console.log('Evento de mouseenter en imagen');
    img.style.borderRadius = '60px';
});

img.addEventListener('mouseout', () => {
    console.log('Evento de mouseout en imagen');
    img.style.borderRadius = '10px';
});
*/

//click y se suelta
img.addEventListener('mouseup', () => {
    console.log('Evento de mouseup apretar y soltar imagen');
    img.style.borderRadius = '80px';
});

//doble click
img.addEventListener('dblclick', () => {
    console.log('Evento de mouseout doble click imagen');
    img.style.borderRadius = '80px';
});

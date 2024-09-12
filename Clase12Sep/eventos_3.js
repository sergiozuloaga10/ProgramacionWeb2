const buscar = document.querySelector('#f0');

//evento se presiona una tecla keydown
//evento de presionar y soltar keyup
//evento de dar click afuera del componente focusout
//evento copiar copy
//evento pegar paste
//evento cortar cut
//evento ejecuta todos los anteriores menor focust, input

buscar.addEventListener('input', (evt) => {
    console.log('Evento se ejecuta');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.target.value);

    if(evt.target.value == 'a'){
        console.log('AAAAAAAAAAA');
    }
});
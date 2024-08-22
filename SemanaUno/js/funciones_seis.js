// funciones flecha => solo se usa cuando tienes una instruccion pero con {} para varias inst
const f = function(){
    console.log('JavaScript');
}

const f1 = () => {
    console.log('JavaScript');
}

const f2 = () => console.log('JavaScript');

//retornar un valor
const f3 = () => 'JavaScript';

f();
f1();
f2();
f3();

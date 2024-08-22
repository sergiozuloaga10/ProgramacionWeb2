dato = 2;
console.log(dato.toString()); // esto es un metodo
console.log(parseInt("2")); // esto es una funcion

function f(matricula, nombre){
    console.log(`Hola ${nombre} ${matricula}`);
}
f(2342, 'Trejo');
f();

//sin argumentos
function f_2(matricula = 11, nombre = 'sin nombre'){
    console.log(`Hola ${nombre} ${matricula}`);
}
f_2();

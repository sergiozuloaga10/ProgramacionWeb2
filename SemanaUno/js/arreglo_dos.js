const datos = ['dato 1', 'dato 2', 'dato 3', 'dato 4', 'dato 5'];

const datosDos = [
    {id:1,nombre: 'Manuel'},
    {id:2,nombre: 'Rebeca'},
    {id:3,nombre: 'Trejo'},
    {id:4,nombre: 'Tomas'},
]

datosDos.forEach(d => {
    if(d === 'dato 3'){
        console.log("Si se encuentra");
    }
});

//solo arreglo de objetos
const resultado = datos.includes('dato 5');
console.log(resultado);

//arreglo de objetos o arreglo simple
const r = datosDos.some(d => {
    return d.nombre === 'Rebeca';
})
console.log(r);


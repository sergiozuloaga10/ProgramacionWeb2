const alumno = [
    {nombre: 'Alan', matricula: 1},
    {nombre: 'Pedro', matricula: 2},
    {nombre: 'Tomas', matricula: 3},
    {nombre: 'Alfonso', matricula: 4},
    {nombre: 'Samuel', matricula: 5},
    {nombre: 'Raul', matricula: 6},
]

const arr1 = alumno.map(
    dato => `Alumno: ${dato.nombre} Cuenta: ${dato.matricula}`
)

alumno.forEach(dato =>
    console.log(`Alumno: ${dato.nombre} Cuenta: ${dato.matricula}`

));

console.log(arr1);
//console.log(arr2);

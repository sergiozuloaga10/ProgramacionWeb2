const alumno = {
    nombre: "Pedro",
    matricula: "12312",
    semestre:1,
    materias: {
        calculo: 7,
        programacion: 8,
    },
    mostrarDatos:function(){
        console.log(`Nombre: ${this.nombre}, Matricula: ${this.matricula}`);
    },
}

console.log(Object.keys(alumno));
console.log(Object.values(alumno));
console.log(Object.entries(alumno));

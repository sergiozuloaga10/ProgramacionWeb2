let cadenaUno = "Esta es una cadena";
let cadenaDos = 'Segunda cadena';
let cadenaTres = String("Tercera cadena");
let cadenaCuatro = new String('Cuarta cadena');

console.log(cadenaUno);
console.log(cadenaDos);
console.log(cadenaTres);
console.log(cadenaCuatro);

//concatenar cadenas
console.log(cadenaUno + " " + cadenaDos);
console.log(cadenaDos + " " + cadenaTres);

//metodos con String

//longitud de la cadena
console.log(cadenaUno.length);

//encontrar la posicion de una cadena
console.log(cadenaUno.indexOf('cadena'));

//extraer una subcadena
console.log(cadenaUno.substring(0,4));

//combinar metodos
console.log(cadenaUno.charAt(cadenaUno.length-1));

//convertir numeros a cadenas
let n = 34;
console.log("Tu edad es: " + n);
console.log("Tu edad es: ", n.toString());
console.log("Tu edad es: ", String(n));

//convertir numeros a cadenas pero con otras bases
n = 10
console.log("binario: ", n.toString(2));
console.log("octal: ", n.toString(8));
console.log("hexadecimal: ", n.toString(16));

//convertir cadenas en numeros
let dato = "10.10"
console.log(Number(dato) * 2);
console.log("21" * "3");
console.log(("34" - 0) * 3);

//para mayor control y no solo base 10
console.log(parseInt("3 datos"));
console.log(parseFloat("3.14 valor de pi"));
console.log(parseInt("110", 2));
console.log(parseInt("A", 16));


const jedi = { nombre: "Luke Skywalker", edad: 19 };

// Mi código para cambiar la edad aquí...
jedi.edad = 25;

console.log(jedi);
//2
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

let mensaje = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

console.log(mensaje);

//3
// Coste total de sables de luz
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioTotalSables = sable1.precio + sable2.precio;
console.log("El precio total de los dos sables de luz es:", precioTotalSables);

// 4
let precioBaseGlobal = 25000; // Cambiado a 25.000 créditos

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1.nombre + " precio final:", nave1.precioFinal);
console.log(nave2.nombre + " precio final:", nave2.precioFinal);



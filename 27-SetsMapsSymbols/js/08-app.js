// Veremos diferentes interadores que se pueden considerar como nuevos
// Algunso son de ES7 otros de ES8

// Veamos unas erie de iteradores que se pueden considerar nuevos en Js, 
// Ya vimos algunos en videos anteriores y usualmente con un for un map 
// estarás bien, pero hay otros que pueden facilitarte tu código.

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris']; // Arreglo
const ordenes = new Set([123, 231, 131, 102]); // Un Set
const datos = new Map(); // Definimos un map
datos.set('nombre', 'Fernando');
datos.set('profesion', 'Desarrollador Web');
// Estos ultimos tres son iterables con un foreach 

// Entries Iterador
// Nos agrega una llave si no existe
// retorna llave valor
// entries a las ciudades
for( let entry of ciudades.entries() ){
    // imprimir llave valor
    console.log(entry);
}

console.log('');

// entries a las ordenes
for( let entry of ordenes.entries() ){
    // Le agrega una llave al Set
    console.log(entry);
}

console.log('');

// entries a los datos
for( let entry of datos.entries() ){
    console.log(entry);
}


console.log('');
console.log('');

// Values iterator
// Imprime los valores
// values a las ciudades
for(let value of ciudades.values()) {
    // Imprimi el valor sin tanto misterio
    console.log(value);
}

console.log('');

// values a las ordenes
for( let value of ordenes.values() ){
    console.log(value);
}

console.log('');

// values a los datos
for( let value of datos.values() ){
    console.log(value);
}

console.log('');
console.log('');

// Keys iterator
// Nos trae solo las llaves de los valores
// las posiciones son las llaves
// keys a las ciudades
for(let keys of ciudades.keys() ) {
    console.log(keys);
}

console.log('');

// keyss a las ordenes
for( let keys of ordenes.keys()  ){
    console.log(keys);
}

console.log('');

// keyss a los datos
for( let keys of datos.keys()  ){
    console.log(keys);
}

console.log('');
console.log('');

// Default
// ESto es depende del tipo de dato que estamos declarando
// es el resultado que vamos a obtener
for(let ciudad of ciudades) {
    console.log(ciudad);
}

console.log('');

for( let orden of ordenes){
    console.log(orden);
}

console.log('');

for( let dato of datos){
    console.log(dato);
}

console.log('');
console.log('');

// Iterar en un string
const mensaje = 'Hola';

// Forma vieja
for( let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje[i]);
}

console.log('');

for( let letra of mensaje ) {
    console.log(letra);
}

console.log('');
console.log('');

// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace.href);
}
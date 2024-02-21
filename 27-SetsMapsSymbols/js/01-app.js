
// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

// los set no tienen valores repetidos
// los duplicados
let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
console.log(carrito.size); // cuantos elementos tenemos


// En un arreglo
// let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
// console.log(numeros.size);

// Comprobando que un valor existe en el set.
console.log( carrito.has('Camisa') ); // para verificar que exista un elemento

// Eliminando del set
console.log( carrito.delete('Camisa') ); // eliminamos un elementos del set
console.log( carrito.has('Camisa') );
console.log(carrito);

// Limpiar un set
// carrito.clear(); // eliminar todos los elementos del set
// console.log(carrito);

// los set son interables
// Foreach a un set
carrito.forEach(producto =>  {
    console.log(producto);
})

// Foreach a un set con un valor
// llave o valor, el ultimo valor es como verificar al set al que pertenece
carrito.forEach((producto, index, pertenece) =>  {
    console.log(`${index} : ${producto}`);
    console.log(pertenece  === carrito); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

// del siguiente arreglo eliminar los duplicados
let numeros = new Set([1,2,3,4,5,6,7,3,3,3,3]);
// console.log(numeros.size);
const noDuplicados = new Set(numeros);
console.log(noDuplicados);

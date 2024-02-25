// el set debil
// el weakSet y la diferencia con el set
// en el weakSet solo le puedes pasar objetos
// en el set le podes pasar cualquier cosa, objetos, numeros, bools
var ws = new WeakSet();

// objeto de cliente
const cliente = {
    nombre: 'Juan',
    saldo : 3000
}

const cliente2 = {
    nombre: 'Pedro',
    saldo: 3000
}

// si trato de agregar un nombre dara un error error en HD
const nombre = 'Pedro';
// ws.add(nombre); // Solo se pueden agregar objetos

// agregamos el weakSet 
ws.add(cliente); 
ws.add(cliente2);

// eso nos retorna si existe o no ese objeto
// nos devuelve un true o un false
console.log( ws.has(cliente) ); 
console.log( ws.has(cliente2));  
// console.log( ws.has(nombre));  

// console.log( ws.delete(window)); 
console.log( ws.delete(cliente));
console.log( ws.has(cliente) ); 

console.log(ws);

// No tienen la propiedad size aunque si tienen length
// Tampoco son iterables ni tienen keys, values entries etc.
// no puede usar un foreach ni iterarlos
// Symbol
// Nuevos a partir de ES6 

// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.

const sym = Symbol('symbol');
const sym2 = Symbol('symbol');

// Los symbolos siempre son diferentes
// ningun simbols es igual nunca 
// console.log( Symbol() === Symbol() );

// Llaves de objetos únicas
let nombre = Symbol();
let apellido = Symbol();

// Crear un objeto vacio
let persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre]     = 'Juan';
persona[apellido]   = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo       = 500;


// Esto no va a servir
console.log(persona);
// saldo : 500
// tipoCliente : "Premium"
// Symbol() :  "Juan"
// Symbol() : "De la torre"

// console.log(persona);
// console.log(persona[nombre]); // tenemos que usar los chochetes

// Las propiedades que utilizan un simbols no son interables
// digamos que se mantienen de forma privada
// No se puede acceder al SYMBOL con un for.
for(let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}


// También se puede crear UNA DESCRIPCION DEL SYMBOLO
// Definimos una descripcion del simbols

let nombreCliente = Symbol('Nombre del cliente');
let cliente = {};

cliente[nombreCliente] = 'Pedro';

// Nos da los datos con la descipcion
console.log(cliente);
console.log(cliente[nombreCliente]); // Acceder dirtamente al nombre del cliente
console.log(nombreCliente);

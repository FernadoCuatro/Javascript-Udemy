// Un generador es una funcion que retorna un iterador
// Se indican con un asterisco después de la palabra function

// Generador
// Antes del nombre de la funcion va un asterisco
// Esto ya es una funcion
function *crearGenerador() {
    // Yiel es nuevo también en es6 y 
    // son los valores que podemos utilziar para iterar
    // Yiel indica que valores se puede iterar
    yield 1;
    yield 'Fernando';
    yield 3 +3;
    yield true;
}

// Se llaman como funciones normales pero retornan un iterador
const iterador = crearGenerador();

// Accedemos a los valores
// Aqui el generador esta dormido esta suspedindo
console.log(iterador); 
console.log(iterador.next().value);
console.log(iterador.next().value); // done se va al ultimo
console.log(iterador.next());
console.log(iterador); 


console.log('');
console.log('');
console.log('');

// Generador para carrito de compras
// carrito

function *generadorCarrito( carrito ) {
    // yield es reservado para mostrar y extraer valores
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
let iteradorCarrito = generadorCarrito( carrito );

// Nos dice producto 1 pero que aun no ha terminado
console.log( iteradorCarrito.next() ); // {value: 'Producto 1', done: false}
console.log( iteradorCarrito.next() ); 
console.log( iteradorCarrito.next() ); 
console.log( iteradorCarrito.next() ); 
console.log( iteradorCarrito.next() ); // {value: undefined, done: true}
// Como crear nuestro propio iterador

// Esta es una funcion que retorna una funcion
function crearIterador( carrito ) {
    // Definimos un contador
    let i = 0;

    return {
        // Usamos un arrow funcion, una funcion de flecha
        siguiente: () => {
            // Cuando iteras, es importante es conocer
            // La posicion actual 
            // Tambien es importante cuantos elementos vas a iterar
            let fin   = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined; // Si no hemos llegado al final

            return {
                fin: fin,
                valor: valor
            };
        }
    };
}

// Carrito a iterar
//              [0]            [1]            [2]          [3]
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// Utilizar el interador 
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
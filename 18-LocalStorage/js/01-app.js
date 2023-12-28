// localstorage es una API de Javascript

// para agregar elementos
localStorage.setItem('nombre', 'Fernando');

// esto es un objeto 
const producto = {
    nombre: 'Monito 24 pulgadas',
    precio: 240
}

// convertimos ese objeto a un string
const productoString = JSON.stringify(producto);
// console.log(productoString);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
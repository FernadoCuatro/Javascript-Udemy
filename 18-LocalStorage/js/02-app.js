// recuperamos datos desde el localStorage
const nombre = localStorage.getItem('nombre');
// console.log(nombre);

// obtenemos objeto
const productoJSON = localStorage.getItem('producto');
// pasamos ese string a objeto
// console.log(JSON.parse(productoJSON));

const mesesJson = localStorage.getItem('meses');
// obtenemos el arreglo
console.log(JSON.parse(mesesJson));
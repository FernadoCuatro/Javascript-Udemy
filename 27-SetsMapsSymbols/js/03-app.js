// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...
// puede ser cualquier tipo de dato

// y en cuanto a performance los maps tienen mejor performance que los objetos, 
// son especialmente diseñados para agregar o quitar elementos así­ como recorrer, 
// tambein cuando son muy grandes tienen mejor performance que un objeto
// cuandos son muy grandes tienen mucho mejor performarce que un objeto

// creando un Map
// son listas de llave y valor
let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size);

// Si contiene el valor
console.log(cliente.has('tipo'));
// Obtenenmos el valor
console.log(cliente.get('tipo'));


// acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

// Borramos del map
cliente.delete('nombre');
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.size);

// Borrar el map
cliente.clear();
console.log(cliente);

// También se puede inicializar un map con diferentes valores
// arreglo dentro de arreglo
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

// tambien se puede reescribir las llaves
// paciente.set('nombre', 'Antonio');
paciente.set('Dr', 'Dr asignado');
// paciente.set('cuarto', 400);

console.log(paciente);

// Foreach a un map
paciente.forEach((datos, index) => {
    // console.log(datos);
    console.log(`${index}: ${datos}`);
});
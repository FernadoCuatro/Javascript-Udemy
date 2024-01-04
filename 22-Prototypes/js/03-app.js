// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// agregamos mas funciones exclucivas para esa clase o para esa funcion
// donde se crea un nuevo proto
Cliente.prototype.tipoCliente = function() {
    console.log('Desde mi nuevo proto');
}

// creamos una instancia
const pedro = new Cliente('Pedro', 120);
// utilizamos el proto recien creado
// se utilizan como si fueran metodos
pedro.tipoCliente();

console.log(pedro);
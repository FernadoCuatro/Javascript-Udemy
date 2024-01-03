// un prototype estan relacionados con los objetos
// todos los objetos tienen un prototype

// un objeto
// el object literal
const cliente = {
    nombre: 'Fernando',
    saldo: 500
}

// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const ferb = new Cliente('Fernando', 500);


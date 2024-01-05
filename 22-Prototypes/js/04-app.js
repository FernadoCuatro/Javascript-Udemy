// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// agregamos mas funciones exclucivas para esa clase o para esa funcion
// donde se crea un nuevo proto
// usa funcion pq funcion busca dentro del mismo objeto
// mientras que el arrow funcion se va hacia la ventana global
Cliente.prototype.tipoCliente = function() {
    // console.log('Desde mi nuevo proto');
    // console.log(this.saldo); // accedemos al salgo del objeto anterior mantiene la refencia al objeto actual
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'MEEEEESSSSSSSSII';
    } else if (this.saldo > 500) {
        tipo = 'SIUUUU';
    } else {
        tipo = 'normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `${this.nombre}, con el saldo: ${this.saldo}, tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


// heredamos de cliente hacia persona para no tner mucho texto
// creamos la de una persona
function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// si quieres heredar prototype tiene que ser antes de que crees instancias
Persona.prototype = Object.create(Cliente.prototype);

// por si perdemos el constructor
Persona.prototype.constructor = Cliente;


// instanciamos
const fernando = new Persona('Persona', 3500, 64229837);
console.log(fernando);

// aunque sea difente esta heredando sus funciones
console.log(fernando.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(fernando.mostrarTelefono());
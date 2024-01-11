// dos formas de crear clases

// la forma de class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

// instanciar la clase
const juan = new Cliente('Juan', 300);
console.log(juan);

// class expresion 
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Fernando', 1000);
console.log(juan2);

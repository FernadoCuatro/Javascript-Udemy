// dos formas de crear clases

// la forma de class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodos al final son funciones
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }
    
    // propiedades estaticas
    // pertenece mas a la clase no tanto al objeto
    static bienvenida(){
        return `Bienvenida`;
    }
}

// instanciar la clase
const juan = new Cliente('Juan', 300);
console.log(juan.mostrarInformacion());

console.log(Cliente.bienvenida());

// class expresion 
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodos al final son funciones
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }

}

const juan2 = new Cliente2('Fernando', 1000);
console.log(juan2.mostrarInformacion());

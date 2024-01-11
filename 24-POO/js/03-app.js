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
    // si existe en la clase hijo a este lo ignora
    // esto para esta y todas las funciones
    static bienvenida(){
        return `Bienvenida`;
    }
}

// herencia
// de esta forma herencia es una clase hijo de cliente
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // va a la clase padre y trae los atributos
        this.telefono  = telefono;
        this.categoria = categoria;
    }

    // propiedades estaticas
    // pertenece mas a la clase no tanto al objeto
    static bienvenida(){
        return `Bienvenida al cajero de empresa`;
    }

}

// instanciar la clase
const juan = new Cliente('Juan', 300);

// instancia para la clase hija
const empresa = new Empresa('Codigo con Juan', 500, 64229837, 'aprendizaje en linea');


console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
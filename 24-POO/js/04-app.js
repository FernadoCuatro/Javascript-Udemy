// la forma de class declaration
class Cliente {
    // hace que la propiedad sea privada
    #nombre
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    // metodos al final son funciones
    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, saldo: ${this.saldo}`;
    }
    
    // propiedades estaticas
    // pertenece mas a la clase no tanto al objeto
    // si existe en la clase hijo a este lo ignora
    // esto para esta y todas las funciones
    static bienvenida(){
        return `Bienvenida`;
    }

    // esto son los metodos accesores
    // setNombre(nombre) {
    //     this.#nombre = nombre;
    // }

    // getNombre(nombre) {
    //     return this.#nombre;
    // }
}

const juan = new Cliente('juan', 200);

console.log(juan.mostrarInformacion());


// juan.setNombre('juan');
// console.log(juan.getNombre());
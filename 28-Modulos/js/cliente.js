// Para tener este valor disponible en otro archivo
// Saca una variable, una clase, objeto una funcion lo que sea
export const nombreCliente = 'Fernando';
export const ahorro = 200;

// Ojo con el export
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// Seguimos exportando funciones
export function tieneSaldo( ahorro ) {
    if ( ahorro > 0 ) {
        console.log('Si tiene saldo');
    } else {
        console.log('El cliente no tiene saldo');
    }
}

// Ahora exportamos una funcion
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}
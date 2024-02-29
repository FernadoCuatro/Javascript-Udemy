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


// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no
// en el archivo de apps.js este deault no tiene que estar en la llave
// Y solamente puedes tener un export default
// export default function nuevaFuncion() {
//     console.log('Función por default')
// }

export default function () {
    console.log('Función por default')
}
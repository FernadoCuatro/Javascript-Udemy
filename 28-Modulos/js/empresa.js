// Importamos una clase desde otro archivo
import { Cliente }  from './cliente.js';

// La clase extiende de Cliente
export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro); // COn el super heredamos el constructor pero tambien iniciamos las variables
        // La variable de esta clase
        this.categoria = categoria;
    }
    
    // Sobre escribimos el metodo des de la clase de Cliente en empressa
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
    }
}

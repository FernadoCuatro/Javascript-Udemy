// IIFE es una funcion que se ejecuta inmediatamente se carga la pagina
// (function() {
//     // mantiene las variables localmente no se mezclan con otros archivos
//     // El problema es que si queremos ordenar el codigo por funciones no se puede hacer
// })();

//import te permite traerlo a este aechivo 
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

// El default 
nuevaFuncion()

// Variables 
console.log(nombreCliente);
console.log(ahorro);

// Funciones
console.log( mostrarInformacion( nombreCliente, ahorro ) );
tieneSaldo( ahorro )

// Clases 
const cliente = new Cliente( nombreCliente, ahorro );
console.log(cliente);

// Importamos la clase de empresa
// Es decir la clase desde otro archivo
const empresa = new Empresa( 'FernandoEmpresa', 100, 'Aprendamos' );
console.log( empresa.mostrarInformacion() );
import { datosCita, nuevaCita } from '../funciones.js';

// Selectores
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from '../selectores.js';

class App {
    // Constructor por defecto
    constructor() {
        this.initApp(); 
    }

    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita)

        // Evento al boton
        formulario.addEventListener('submit', nuevaCita);
    }
}
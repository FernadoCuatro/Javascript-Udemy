// variables
const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners() {
    // funcion que ejecutara lo que necesita el documento cuando 
    // cargue por primera vez
    document.addEventListener('DOMContentLoaded', iniciarApp);

}

// funciones 

/**
 * funcion que tendra toda la informacion que necesita la app al iniciar
 */
function iniciarApp() {
    // desabilitar el boton de envio
    btnEnviar.disabled = true;
    // las clases a usar: cursor-not-allowed opacity-50

    
}
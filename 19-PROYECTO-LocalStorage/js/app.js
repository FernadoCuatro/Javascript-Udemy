// variables
const formualario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweests = [];

// eventos
eventListeners();

// funciones 

/**
 * event para disparar los eventos
 */
function eventListeners() {
    // disparamos la funcion cuando le de submit al formumario
    formualario.addEventListener('submit', agregarTweet); 


}


/**
 * funcion para agregar tw al LS
 * @param {*} e envia la informacion del formulario para obtenerla
 */
function agregarTweet(e) {
    e.preventDefault();

    
}
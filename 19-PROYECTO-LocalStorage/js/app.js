// variables
const formualario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweests     = [];

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

    // obtenemos la informacion del textarea donde se escribe 
    const tweet = document.querySelector('#tweet').value;
    // console.log(tweet);

    // validacion de la entrada
    if (tweet === '') {
        mostrarError('Poenele mente, el tweet no puede ir vacio');

        // funciona si el if esta dentro de una funcion
        return; // evita que se ejecuten mas lineas de codigo
    }
    
}


/**
 * muestra mensaje de error
 */
function mostrarError(error) {
    const mensajeError = document.createElement('p');

    // vamos con scripting
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertando en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
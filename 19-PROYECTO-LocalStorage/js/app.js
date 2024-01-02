// variables
const formualario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweests     = [];

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
    
    // obj de objeto
    const tweetObj = {
        id   : Date.now(),
        tweet
    }

    // adding el arreglo de tweets
    tweests = [...tweests, tweetObj];

    // una vez agregado, lo pintamos en el HTML
    crearHTML();

    // reiniciar el formulario
    formualario.reset();
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


/**
 * muestra el listado de los tweets
 */
function crearHTML() {
    limpiarHTML()

    if (tweests.length > 0) {
        tweests.forEach(tweet => {
            // crear el HTML
            const li = document.createElement('li');

            // adding el texto
            li.innerText = tweet.tweet

            // colocando el listado de tweets en el HTML
            listaTweets.appendChild(li);
        });
    }
}

// limpiamos el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
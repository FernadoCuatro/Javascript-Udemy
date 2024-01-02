// variables
const formualario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweests = [];

// eventos
eventListeners();

// funciones 

/**
 * event para disparar los eventos
 */
function eventListeners() {
    // disparamos la funcion cuando le de submit al formumario
    // cuando el usuario agrega un nuevo tweet
    formualario.addEventListener('submit', agregarTweet);

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweests = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    });

    // configuracion para cuando quiera guardar un dato desde el teclado
    document.addEventListener('keydown', function (event) {
        // verificar si la tecla presionada es 'S' y la tecla CTRL está presionada (o CMD en Mac)
        if ((event.key === 's' || event.key === 'S') && (event.ctrlKey || event.metaKey)) {
            // Prevenir el comportamiento predeterminado (como guardar la página)
            event.preventDefault();

            // llamamos a la funcion de guardar 
            agregarTweet(event);
        }
    });
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
        id: Date.now(),
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

    sincronizarStorege();
}


/**
 * agrega los tweets actuales al localstorage
 */
function sincronizarStorege() {
    localStorage.setItem('tweets', JSON.stringify(tweests));
}

// limpiamos el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
// variables
const btnEnviar  = document.querySelector('#enviar');
const btnReset   = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// variables para campos
const email   = document.querySelector('#email');
const asunto  = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// expresion regular 
// vamos a ir validando con una expresion regular 
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    // funcion que ejecutara lo que necesita el documento cuando 
    // cargue por primera vez
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // campos del forumario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // reincia el formulario
    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        
        resetearFormulario();
    });

    // enviar email
    formulario.addEventListener('submit', enviarEmail);
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


/**
 * funcion para validar el formulario
 * enviandole un evento (e) para saber que es lo que el usuario escribe
 */
function validarFormulario(e) {
    // console.log(e.target.type);
    if (e.target.value.length > 0) {
        // elimina los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        // e.target.style.borderBottomColor = 'red';
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    // validamos el correo
    if (e.target.type === 'email') {
        // console.log('Es email, hay que validarlo diferente.');
        // const resultado = e.target.value.indexOf('@'); // -1 signfica que no existe una arroba
        
        if (er.test(e.target.value)) {
            // console.log('Email valido');
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500')
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido');
        }
    }
    
    // validamos para habilitar boton de envio
    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    } else {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('cursor-not-allowed','opacity-50');
    }


}


/**
 * mostramos los errores al usuario
 */
function mostrarError(mensaje) {
    // creamos un parrafo
    const mensajeError = document.createElement('p');
    mensajeError.textContent =  mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    // revisamos que si existe un elemento con esa clae
    // ya no lo vuelva a pintar
    const errores = document.querySelectorAll('.error');

    // validamos
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}


/**
 * funcion para enviar el email
 */
function enviarEmail(e) {
    e.preventDefault(); // quitamos el evento por defecto
    // console.log('Enviando');

    // selector para el spinner para mostrarlo
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    // despues de tres segundos ocultar el spinner y mostrar el mensaje despues de 3 segundos
    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje que dice que se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'bont-bold', 'uppercase');

        // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); // eliminar el mensaje de éxito
            resetearFormulario(); // reseteamos el formulario
        }, 5000);

    }, 3000);
}

function resetearFormulario() {
    formulario.reset();

    iniciarApp(); // iniciar app para que el boton se bloquee
}
// variables desde campos del formulario
const mascotaInput     = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput    = document.querySelector('#telefono');
const fechaInput       = document.querySelector('#fecha');
const horaInput        = document.querySelector('#hora');
const sintomasInput    = document.querySelector('#sintomas');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// user interface UI
const formulario       = document.querySelector('#nueva-cita');
const contedorCitas    = document.querySelector('#citas');

// para el detalle de edicion
let editando = false;

// clases
class Citas {
    // constructor para inicar el objeto cuando se cree la instancia
    constructor() {
        this.citas = []
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        // console.log(this.citas);
    }

    editarCita(citaActualizada) {
        // el punto map recorre todos los elementos pero crea un nuevo arreglo con los datos validados y asigna los datos
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        // filter quita un elemento o mantiene los demas depende de la condicion
        this.citas = this.citas.filter( cita => cita.id !== id ); // nos traemos todas las que sean diferentes a la cita sleccioanda 
    }
}

class UI {
    // para mostrar un mensaje, ya sea de error o success
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Si es de tipo error agrega una clase
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout(() => {  
            divMensaje.remove();
        }, 3000);
    }

    imprimirCitas({ citas }) {
        // Se puede aplicar destructuring desde la función...
        // extrae las citas del objetos con el ({ })

        this.limpiarHTML();

        // accedemos a cada cita
        citas.forEach(cita => {
            // aplicamos el destructuring para cada variable junto con el ID
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            // creamos un div
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3'); // agregamos clases
            divCita.dataset.id = id; // establecemos el dataset con el ID de la clase extraido desde el destructuring

            // puro scripting para todos los elementos, un textazo
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.innerHTML = `${mascota}`; // imprimimos el nombre de la mascota

            // agregamos los parrafos al div de la cita divCita
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

            // Agregar un botón de eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar con el arrow funcion, funcion de flecha
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita); // funcion de fecha

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML() {
        while ( contenedorCitas.firstChild ) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

// instancias de las clases
const ui = new UI();
const administrarCitas = new Citas();

// eventos
eventListeners();

// funciones 
function eventListeners() {
    // leemos lo que el usuario escribe
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

// un objeto para guardar el textazo del la informacion de la cita
const citaObj = {
    mascota    : '',
    propietario: '',
    telefono   : '',
    fecha      : '',
    hora       : '',
    sintomas   : ''
}

// para leer lo que el usuario esta escribiendo 
// agregamos datos al objeto de citas
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    // console.log(citaObj);
}

// Valida ya agrega una nueva cita
function nuevaCita(e) {
    // la de siempre 
    e.preventDefault();

    // Usamos el destruccion y extraemos la informacion
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    // Validamos
    if( mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '' ) {
        // console.log('Todos los campos son obligatorios');
        ui.imprimirAlerta('Todos los campos son Obligatorios', 'error')
        return;
    }

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...citaObj} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...citaObj});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }

    // Mostrar mensaje de que todo esta bien...
    // ui.imprimirAlerta('Se agregó correctamente')

    // Reiniciar Formulario
    formulario.reset();

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.mascota     = '';
    citaObj.propietario = '';
    citaObj.telefono    = '';
    citaObj.fecha       = '';
    citaObj.hora        = '';
    citaObj.sintomas    = '';
}

// funcion para eliminar el enfermito
function eliminarCita(id) {
    // eliminar la cita
    administrarCitas.eliminarCita(id);

    // muestra un mensaje
    ui.imprimirAlerta('La cita se elimino correctamente');

    // refresque lo que son las cita
    ui.imprimirCitas(administrarCitas);
}

// funcion para cargar los datos para editar
function cargarEdicion(cita) {
    // vamos con el detruccion para obtener el objeto y desmenuzar por variables
    const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Reiniciar el objeto
    citaObj.mascota     = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono    = telefono;
    citaObj.fecha       = fecha
    citaObj.hora        = hora;
    citaObj.sintomas    = sintomas;
    citaObj.id          = id;

    // Llenar los Inputs
    mascotaInput.value     = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value    = telefono;
    fechaInput.value       = fecha;
    horaInput.value        = hora;
    sintomasInput.value    = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}






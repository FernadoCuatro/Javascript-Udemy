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

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(cita);

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
        });ñ
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

    // generar un id único
    citaObj.id = Date.now();

    // creando una nueva cita
    // console.log(citaObj);

    // Añade la nueva cita
    administrarCitas.agregarCita( {...citaObj} ); // para que se mande una copia 

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
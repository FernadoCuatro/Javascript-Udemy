// variables desde campos del formulario
const mascotaInput     = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput    = document.querySelector('#telefono');
const fechaInput       = document.querySelector('#fecha');
const horaInput        = document.querySelector('#hora');
const sintomasInput    = document.querySelector('#sintomas');

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
}

// instancias de las clases
const UI = new UI();
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

    // generar un id unico
    citaObj.id = Date.now();

    // creando una nueva cita
    // console.log(citaObj);

    // Añade la nueva cita
    administrarCitas.agregarCita({...citaObj}); // para que se mande una copia 

    // Mostrar mensaje de que todo esta bien...
    // ui.imprimirAlerta('Se agregó correctamente')

    // Reiniciar Formulario
    formulario.reset();

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

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

// function nuevaCita(e) {



//     if(editando) {
//         // Estamos editando
//         administrarCitas.editarCita( {...citaObj} );

//         ui.imprimirAlerta('Guardado Correctamente');

//         formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

//         editando = false;

//     } else {
//         // Nuevo Registrando

//         // Generar un ID único
//         citaObj.id = Date.now();
        
//         // Añade la nueva cita
//         administrarCitas.agregarCita({...citaObj});

//         // Mostrar mensaje de que todo esta bien...
//         ui.imprimirAlerta('Se agregó correctamente')
//     }


//     // Imprimir el HTML de citas
//     ui.imprimirCitas(administrarCitas);



// }
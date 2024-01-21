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
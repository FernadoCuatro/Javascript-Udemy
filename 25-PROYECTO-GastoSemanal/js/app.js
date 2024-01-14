// Variables y Selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    // formulario.addEventListener('submit', agregarGasto);
    // gastosListado.addEventListener('click', eliminarGasto);
}


// Classes


// funciones 
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // isNaN es isNotanNunber, quiere decir que no es un numero
    // verifica que ese dato sea un numero
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // // Presupuesto valido
    // presupuesto = new Presupuesto(presupuestoUsuario);

    // // console.log(presupuesto);

    // // Agregarlo en el HTML
    // ui.insertarPresupuesto(presupuesto)
}

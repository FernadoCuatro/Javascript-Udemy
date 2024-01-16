// Variables y Selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
    // gastosListado.addEventListener('click', eliminarGasto);
}


// Classes
class Presupuesto {
    // el Number los convierte a numero con decimales sea entero o float
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante    = Number(presupuesto);
        this.gastos      = []; // para ir agregando los gastos poco a poco
    }

    nuevoGasto(gasto) {
        // console.log(gasto);
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
        // this.calcularRestante();
    }

    // eliminarGasto(id) {
    //     this.gastos = this.gastos.filter( gasto => gasto.id.toString() !== id );
    //     this.calcularRestante();
    // }

    // calcularRestante() {
    //     const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    //     this.restante = this.presupuesto - gastado;
    // }
}

class UI {
    // metodo para pintar los resultados en el HTML
    insertarPresupuesto(cantidad) {
        document.querySelector('#total').textContent    = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;
    }
    
    // metodo reutilizable para imprimir alerta
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        // insertBefore toma dos elementos, el primero que vamos a insertar
        // y el segundo en que parte lo vamos a colocar
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
                document.querySelector('.primario .alert').remove();
        }, 2000);
    }

    // Inserta los gastos a la lista 
//     agregarGastoListado(gastos) {

//         // Limpiar HTML
//         this.limpiarHTML();

//         // Iterar sobre los gastos 
//         gastos.forEach(gasto => {
//             const {nombre, cantidad, id } = gasto;

//             // Crear un LI
//             const nuevoGasto = document.createElement('li');
//             nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
//             nuevoGasto.dataset.id = id;

//             // Insertar el gasto
//             nuevoGasto.innerHTML = `
//                 ${nombre}
//                 <span class='badge badge-primary badge-pill'>$ ${cantidad}</span>
//             `;

//             // boton borrar gasto.
//             const btnBorrar = document.createElement('button');
//             btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
//             btnBorrar.textContent = 'Borrar';
//             nuevoGasto.appendChild(btnBorrar);

//             // Insertar al HTML
//             gastosListado.appendChild(nuevoGasto);
//         });
//    }

     // Comprueba el presupuesto restante
    // actualizarRestante(restante) {
    //     document.querySelector('span#restante').textContent = restante; 
    // }

     // Cambia de color el presupuesto restante
    //  comprobarPresupuesto(presupuestoObj) {
    //     const { presupuesto, restante} = presupuestoObj;
    //     const restanteDiv = document.querySelector('.restante');

    //     // console.log(restante);
    //     // console.log( presupuesto);

    //     // Comprobar el 25% 
    //     if( (presupuesto / 4) > restante) {
    //         restanteDiv.classList.remove('alert-success', 'alert-warning');
    //         restanteDiv.classList.add('alert-danger');
    //     } else if( (presupuesto / 2) > restante) {
    //         restanteDiv.classList.remove('alert-success');
    //         restanteDiv.classList.add('alert-warning');
    //     } else {
    //         restanteDiv.classList.remove('alert-danger', 'alert-warning');
    //         restanteDiv.classList.add('alert-success');
    //     }

    //     // Si presupuesta es igual a 0 
    //     if(restante <= 0 ) {
    //         ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
    //         formulario.querySelector('button[type='submit']').disabled = true;
    //     } 
    // }

    // limpiarHTML() {
    //     while(gastosListado.firstChild) {
    //         gastosListado.removeChild(gastosListado.firstChild);
    //     }
    // }
}


// instanciar user interfeces
const ui = new UI();
let presupuesto;

// funciones 
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // isNaN es isNotanNunber, quiere decir que no es un numero
    // verifica que ese dato sea un numero
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    // Agregarlo en el HTML
    ui.insertarPresupuesto(presupuesto)
}

// funcion que añade un gasto
function agregarGasto(e) {
    // Como es un submit le quitamos la funcion por default
    e.preventDefault();

    // Leer del formulario de Gastos
    const nombre   = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // 1 Comprobar que los campos no esten vacios
    if (nombre === '' || cantidad === '') {
        // 2 parametros: mensaje y tipo
        // console.log('Ambos campos son obligatorios');
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
        
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        // si hay una cantidad negativa o letras.
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;

    }

    // genera un objeto con el gasto 
    // con el contrario del distroction
    // se le conoce como object literal
    const gasto = { nombre, cantidad, id: Date.now() };
    // console.log(gasto);

    // Añadir nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Insertar en el HTML la alerta de correcto
    ui.imprimirAlerta('Gasto agregado correctamente');

    // // Pasa los gastos para que se impriman
    // const { gastos } = presupuesto;
    // ui.agregarGastoListado(gastos);

    // // Cambiar la clase que nos avisa si se va terminando
    // ui.comprobarPresupuesto(presupuesto);

    // // Actualiza el presupuesto restante
    // const { restante } = presupuesto;

    // // Actualizar cuanto nos queda
    // ui.actualizarRestante(restante);

    // Reiniciar el form
    formulario.reset();
}

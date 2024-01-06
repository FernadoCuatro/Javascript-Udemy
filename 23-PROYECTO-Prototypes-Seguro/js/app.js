// constructores
function Seguro(marca, year, tipo) {
    this.marca = marca,
    this.year  = year,
    this.tipo  = tipo
}

// realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function() {
    // se usa funcion pq aqui se tiene que acceder a los datos del objeto

    /*
        1 = Americano 1.15
        2 = Asiático  1.05
        3 = Europeo   1.35
    */
   
    let cantidad;
    const base = 2000;
    // console.log(this.marca);
    switch (this.marca) {
        case '1':
            // americano
            cantidad = base * 1.15;

            break;

        case '2':
            // asiatico
            cantidad = base * 1.05;

            break;

        case '3':
            // europeo
            cantidad = base * 1.35;

            break;

        default:
            break;
    }

    // leer el year
    const diferencia = new Date().getFullYear() - this.year;
    // cada year que la diferencia es mayor el costo va a reducirse un 3%
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        si el seguro es basico se multiplica por un 30% mas 
        si el seguro es completo se multiplica por un 50% mas 
    */

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI() { }

// creamos Prototype para el User Interface
// llena las opciones de los years
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    // llenamos el select
    const selectYear = document.querySelector('#year');

    // iteramos
    for (let i = max; i > min; i--) {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        selectYear.appendChild(opcion);
    }
}

// muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');

    } else {
        div.classList.add('correcto');

    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // lo insertamos en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    // se inserta el nuevo nodo
    // y el nodo de referncia donde quieres insertarlo 
    // eso con el insertBefore
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);
}

// mustra el calculo final de los datos en pantalla
// comunicandose entre los dos prototype
UI.prototype.mostrarResultado = (total, seguro) => {
    // Desestructuración de objetos
    const {marca, year, tipo} = seguro;
    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano'
            break;

        case '2':
            textoMarca = 'Asiático'
            break;

        case '3':
            textoMarca = 'Europeo'
            break;
        default:
            break;
    }

    // creamos el resultado 
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Resumen de la cotización</p>

        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold mb-5">Tipo: <span class="font-normal capitalize">${tipo}</span></p>

        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    
    // mostramos el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; 
        // se borra el spinner pero se muestra  el resultado
        resultadoDiv.appendChild(div);
    }, 3000);
}

// instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // llena el select con los years
});

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    // console.log(marca);

    // leer el year sleccionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // console.log(tipo);

    if (marca === '' || year === '' || tipo === '') {
        // console.log('no paso la validacion');
        ui.mostrarMensaje('Valida todo los campos', 'error');
        // cortamos el flujo del codigo
        return;
    } 

    ui.mostrarMensaje('Cotizando, por favor espere', 'exito');

    // ocultar las ocupaciones previas si existen
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    // inicializar seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(total.toFixed(2), seguro);
}

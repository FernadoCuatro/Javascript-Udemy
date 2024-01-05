// constructores
function Seguro(marca, year, tipo) {
    this.marca = marca,
    this.year  = year,
    this.tipo  = tipo
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
        console.log('no paso la validacion');
    } else {
        console.log('SIUUUUUUUUUUUU');
    }

}
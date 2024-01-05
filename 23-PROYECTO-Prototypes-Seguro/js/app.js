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
// variables
const resultado = document.querySelector('#resultado');
const year      = document.querySelector('#year');

const max = new Date().getFullYear(); // trae el anio actual
const min = max - 10;

// eventos
document.addEventListener('DOMContentLoaded', () => {
    // una vez que se complete la carga la pagina, mostramos los autos
    mostrarAutos();

    // llena las opciones de años
    llenarSelect();
});

// funciones

/**
 * muestra los datos recorriendo con un foreach
 */
function mostrarAutos() {
    // iteramos sobre autros, es decir sobre el archivo autos
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        // creamos un template string
        autoHTML.textContent = `
            ${marca} ${modelo} - (${year}) - $${precio} - ${puertas} Puertas - ${color} - ${transmision}
        `;

        // insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}


/**
 * genera los años del select
 */
function llenarSelect() {
    // generamos loa anios
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;

        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de anio al select
    }
}
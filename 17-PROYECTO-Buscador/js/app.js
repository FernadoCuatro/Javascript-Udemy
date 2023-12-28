// variables
const marca       = document.querySelector('#marca');
const year        = document.querySelector('#year');
const minimo      = document.querySelector('#minimo');
const maximo      = document.querySelector('#maximo');
const puertas     = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color       = document.querySelector('#color');

// contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // trae el anio actual
const min = max - 10;

// generamos un objeto con la busqueda
// colocando los diferentes parametros como busqueda
const datosBusqueda = {
    marca      : '',
    year       : '',
    minimo     : '',
    maximo     : '',
    puertas    : '',
    transmision: '',
    color      : ''
}

// eventos
document.addEventListener('DOMContentLoaded', () => {
    // una vez que se complete la carga la pagina, mostramos los autos
    mostrarAutos(autos);

    // llena las opciones de años
    llenarSelect();
});

// eventListener para los inputs de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
});

// funciones

/**
 * muestra los datos recorriendo con un foreach
 */
function mostrarAutos(autos) {
    limpiarHTML();
    
    // iteramos sobre autros, es decir sobre el archivo autos
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');

        // creamos un template string
        autoHTML.textContent = `
            ${marca} ${modelo} - (${year}) - $${precio} - ${puertas} Puertas - ${color} - ${transmision}
        `;

        // insertar en el HTML
        // appendChild no borra el contenido previo
        // lo tenemos nosotros
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


/**
 * funcion para limpiar html
 */
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

/**
 * funcion que filtra autos en base a las busquedas
 */
function filtrarAuto() {
    // filter es el mas dinamicos de todos '
    // resultado nos va a generar un arreglo nuevo
    // y lo hacemos con una funcion de alto nivel funciones que toman otra funcion
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    
    // console.log(resultado);
    mostrarAutos(resultado);
    

}


/**
 * se encarga de iterar entre todos los objetos y filtra los autos
 */
function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if (datosBusqueda.marca) {
        return auto.marca === marca;
    }

    return auto;
}


function filtrarYear(auto) {
    const {year} = datosBusqueda;

    if (datosBusqueda.year) {
        return auto.year === year;
    }

    return auto;
}

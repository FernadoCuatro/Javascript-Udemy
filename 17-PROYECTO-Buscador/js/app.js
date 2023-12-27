// variables
const resultado = document.querySelector('#resultado');

// eventos
document.addEventListener('DOMContentLoaded', () => {
    // una vez que se complete la carga la pagina, mostramos los autos
    mostrarAutos();
});

// funciones
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
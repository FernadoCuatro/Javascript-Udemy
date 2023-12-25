// variables
// const porque no se reasigna
// y el querySelector porque solamente tenemos un carrito
const carrito           = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito     = document.querySelector('#vaciar-carrito');

// traemos todo el listado de cursos 
const listaCursos       = document.querySelector('#lista-cursos'); 

// variable para el carrito de compras
let articulosCarrito = []; // let pq es muy variable


cargarEventListeners();

// funcion para registrar todos los eventListener
function cargarEventListeners() {
    // cuando agregas un curso presionando agregar al carrito
    // agregamos un evento al lsitado de los cursos
    listaCursos.addEventListener('click', agregarCurso);
    
    // elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito
    vaciarCarrito.addEventListener('click', () => {
        // se ejecuta la funcion anonima 
        // console.log('vaciar carrito');
        // reinciamos el arreglo
        articulosCarrito = []

        // reimprimos el HTML
        limpiarHTML();
    });
}

// funciones 

/**
 * funcion para agregar un curso 
 * @param {*} e agregamos para saber a que curso le estamos a dando click
 */
function agregarCurso(e) { 
    e.preventDefault();

    // console.log(e.target.classList);
    // ejecutamos la funcion cuando tenga la clase carrito
    if (e.target.classList.contains('agregar-carrito')) {
        // console.log('Agregando al carrito');
        
        // nos vamos hacia atrás para obtener la informacion del elemento
        // desde el card para obtener los datos
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


/**
 * funcion para eliminar elemenos del carrito
 */
function eliminarCurso(e) {
    // console.log("Desde el eliminar curso");
    // console.log(e.target.classList);

    // cuando contenga esa clase, se va a eliminar del carrito
    if (e.target.classList.contains('borrar-curso')) {
        // obtenemos el id unico
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo articuloCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        // iteramos sobre el carrito y mostramos el HTML
        carritoHTML();
    }
}

/**
 * Lee el contenido del HTML al que le dimos click
 * y extrae la información del curso
 * @param {*} curso se reciben los datos del curso a agregar
 */
function leerDatosCurso(curso) {
    // vamos un elemento arriba para obtener los datos del carrito
    // console.log(curso);

    // creamos un objeto con el contenido del curso actual
    const infoCurso = {
        id      : curso.querySelector('a').getAttribute('data-id'),
        imagen  : curso.querySelector('img').src,
        titulo  : curso.querySelector('h4').textContent,
        precio  : curso.querySelector('.precio span').textContent,
        cantidad: 1
    } 

    // validamos que el elemento ya exista en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    // console.log(existe);

    if (existe) {
        // si el elemetno ya existe en el carrito actualizamos la cantidad
        // map estara iterando en todos los elementos del carrito
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // agregamos el elemento al carrito
        // llenamos el arreglo con el objeto 
        // los tres puntos significa que tomamos una copia del array existente
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    // console.log(articulosCarrito);

    // mandamos a llamar la funcion para pintar el contenido
    carritoHTML();
}

/**
 * mustra el carrito de compras en el HTML
 */
function carritoHTML() {
    // limpiamos el HTML
    limpiarHTML();

    // itemarmos cada curso que tengamos
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        // construimos un template string
        row.innerHTML = `
            <td><img src="${imagen}" style="width:100px; border-radius:10px"></td>
            <td>${titulo}</td>
            <td style="text-align: center;">${precio}</td>
            <td style="text-align: center;">${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

        // agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}


/**
 * limpiamos el HTML es decir elimina los cursos del HTML
 */
function limpiarHTML() {
    // forma lenta 
    // contenedorCarrito.innerHTML = '';

    // mas eficiente
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
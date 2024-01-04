// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// instancia
const ferb = new Cliente('Fernando', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `el Cliente ${nombre} tiene un saldo de ${saldo}`
}

console.log(formatearCliente(ferb));

// para empresas
function Empresa(nombre, saldo, categoria) {
    this.nombre    = nombre;
    this.saldo     = saldo;
    this.categoria = categoria;
}

// una nueva instancia
const CCJ = new Empresa('LOS4', 3500, 'Cursos en linea');

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} de la categoria ${categoria}`
}

console.log(formatearEmpresa(CCJ));


// siempre es importante la documentacion pero no todos los hacen 
// se recomienda que se haga protoype para proyectos grandes
// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// agregamos mas funciones exclucivas para esa clase o para esa funcion
// donde se crea un nuevo proto
// usa funcion pq funcion busca dentro del mismo objeto
// mientras que el arrow funcion se va hacia la ventana global
Cliente.prototype.tipoCliente = function() {
    // console.log('Desde mi nuevo proto');
    // console.log(this.saldo); // accedemos al salgo del objeto anterior mantiene la refencia al objeto actual
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'MEEEEESSSSSSSSII';
    } else if (this.saldo > 500) {
        tipo = 'SIUUUU';
    } else {
        tipo = 'normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `${this.nombre}, con el saldo: ${this.saldo}, tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


// creamos una instancia
const pedro = new Cliente('Pedro', 670);
// utilizamos el proto recien creado
// se utilizan como si fueran metodos
// console.log(pedro);
// console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(200);
console.log(pedro.nombreClienteSaldo());


// este metodo no podra acceder a tipoCliente
// para empresas
function Empresa(nombre, saldo, categoria) {
    this.nombre    = nombre;
    this.saldo     = saldo;
    this.categoria = categoria;
}

// una nueva instancia
const CCJ = new Empresa('Lo4', 3500, 'Cursos en linea');
console.log(CCJ);
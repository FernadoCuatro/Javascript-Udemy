// eliminamos nombre
localStorage.removeItem('nombre');

// en localstorage no hay update
// si quiers actualizar un registro, debes definir que vas a actualizar
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Abril');

localStorage.setItem('meses', JSON.stringify(mesesArray));

// metodo para limpiar localStorage
localStorage.clear();
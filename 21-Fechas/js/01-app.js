const diaHoy = new Date();
// const diaHoy = new Date('1-5-2000');
// const diaHoy = new Date('January 5 2000');

let valor;

valor = diaHoy
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth() + 1;
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // son los milisegundos que han trascurrido desde el primero de enero de 1970 hasta la fecha 

console.log(valor); // Mon Jan 01 2024 20:24:23 GMT-0600 (hora estándar central)



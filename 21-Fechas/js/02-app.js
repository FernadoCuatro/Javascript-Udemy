// https://momentjs.com/
const diaHoy = new Date();

let valor;

valor = moment().format('MMMM Do YYYY, h:mm:ss a'); // January 1st 2024, 8:43:52 pm
valor = moment().format('dddd');                    // Monday

valor = moment("20000917", "YYYYMMDD").fromNow(); // 12 years ago
valor = moment().startOf('day').fromNow();        // 21 hours ago

valor = moment().format('LLLL', diaHoy); // Monday, January 1, 2024 8:49 PM

valor = moment().add(3, 'days').calendar(); // como sumarle  a la fecha para algo que expire


console.log(valor);
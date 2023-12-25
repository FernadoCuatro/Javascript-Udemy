// manejo de textos e imágenes
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// acceder al texto desde mi codigo de Js
// console.log(encabezado.innerText); 
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);
// los dos primeros el textos, el tercero se trae el HTML
// el primero con el visibly de css, no lo encuentra 

// document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading desde el Js con DOM';



const imagen = document.querySelector('.card img');
// console.log(imagen);
imagen.src = 'img/hacer2.jpg';
// Que cargue cuando la pagina se complete la carga
document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Creamos una base de datos
    // Version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la base de datos');
    }

    // Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Se creo correctaemente');
    }

    // Configuracion de la base de datos
    crmDB.onupgradeneeded = function() {
        // Aqui se definen las columnas que puede tener la base de datos 
    }
}
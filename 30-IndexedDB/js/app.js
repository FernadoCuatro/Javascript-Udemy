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
    // Se ejecuta una vez cuando se crea la base de datos 
    // Automaticamente pasa el evento
    crmDB.onupgradeneeded = function(e) {
        // Aqui se definen las columnas que puede tener la base de datos
        // console.log(e.target.result);
        const db = e.target.result;

        // Definimos el objectStore
        // Con un objeto de configuracion
        const objectStore = db.createObjectStore('crm' ,{
            keyPath: 'crm',
            autoIncrement: true
        });

        // Es un CRM es como un administrador de clientes
        // Definimos las columnas
        // Lo segundo es el keyPath es como, lo vas a llamar para consultarla data
        objectStore.createIndex('nombre', 'nombre', { unique: false } );
        objectStore.createIndex('email', 'email', { unique: true } );
        objectStore.createIndex('telefono', 'telefono', { unique: false } );

        console.log('Columnas Creadas');
        
    }
}
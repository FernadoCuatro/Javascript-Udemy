// Variable global para la base de datos
let DB;

// Que cargue cuando la pagina se complete la carga
document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    // Agregando registros a la base de datos que hemos creado
    // 5 segundos despues
    setTimeout(() => {

        crearCliente();
        
    }, 5000);
});

// Funcion para crear la base de datos
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
        console.log('Se creo correctamente');

        // Asignamos a la variable global
        DB = crmDB.result;
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

// Funcion para crear un nuevo cliente
function crearCliente() {
    // Utilizamos transacciones para trabajar con base de datos
    // Una transacción es cuando se completan correctamente ciertos pasos específicos

    // Le decimos donde sera la transaccion
    // Tambien le decimos el modo, que sera el de readwrite
    let transaction = DB.transaction(['crm'], 'readwrite'); // readonly, solamente lectura

    transaction.oncomplete =  function() {
        console.log('Transacción completada');
    }

    transaction.onerror =  function() {
        console.log('Ocurrió un error en la transacción');
    }
    // Lo de arriba es el camino para usar las transacciones

    // Ahora vamos a escribir un objeto en la base de datos
    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 12323,
        nombre: 'Fernando',
        email: 'correo@corre.com'
    }
    
    // Aqui se pueden usar varios metodos, como para eliminar o para obtener
    // put editar
    // delete eliminar
    const peticion = objectStore.add( nuevoCliente );
    // console.log(peticion);
}
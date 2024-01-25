let email = 'patricio@gmail.com';
let name = 'Patricio';
let dirección = {
    calle: 'Traslaviña st',
    número: 60,
};

let user = {
    email: 'patricio@gmail.com',
    name: 'Patricio',
    dirección: {
    calle: 'Traslaviña st',
    número: 60,
    },
    activo: true,
    // recuperarClave: function recuperarClave () {},
    recuperarClave: function () {  // ANCHOR - anónimo
        console.log('Recuperando clave...');
    },
}; //NOTE - POO = PROGRAMACIÓN ORIENTADA A OBJETOS

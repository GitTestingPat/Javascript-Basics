let user = {
    id: 1,
    email: 'patricio@gmail.com',
    name: 'Patricio',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};

// let user1 = {
//     id: 2,
//     email: 'rafael@gmail.com',
//     name: 'rafael',
//     activo: true,
//     recuperarClave: function () {
//         console.log('Recuperando clave...');
//     },
// };

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Patricio', 'patricio@gmail.com');
let user2 = crearUsuario('Rafael', 'rafael@gmail.com');

console.log(user1, user2);

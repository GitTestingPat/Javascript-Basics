let user = {
    id: 1,
    email: 'patricio@gmail.com',
    name: 'Patricio',
    active: true,
    recoverPassword: function () {
        console.log('Recovering password...');
    },
};

// let user1 = {
//     id: 2,
//     email: 'rafael@gmail.com',
//     name: 'rafael',
//     active: true,
//     recoverPassword: function () {
//         console.log('Recovering password...');
//     },
// };

function createUser(name, email) {
    return {
        email,
        name,
        active: true,
        recoverPassword: function () {
            console.log('Recovering password...');
        },
    };
}

let user1 = createUser('Patricio', 'patricio@gmail.com');
let user2 = createUser('Rafael', 'rafael@gmail.com');

console.log(user1, user2);
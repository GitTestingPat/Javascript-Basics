let email = 'patricio@example.com';
let name = 'Patricio';
let address = {
    street: 'myneighborhood st',
    number: 65,
};

let user = {
    email: 'patricio@example.com',
    name: 'Patricio',
    address: {
        street: 'myneighborhood st',
        number: 65,
    },
    active: true,
    // recoverPassword: function recoverPassword() {},
    recoverPassword: function () {  // ANCHOR - anonymous
        console.log('Recovering password...');
    },
}; // NOTE - OOP = Object-Oriented Programming
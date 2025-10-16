const user = { id: 1 };

user.name = 'Patricio';
user.save = function () {
    console.log('Saving', user.name);
};

user.save();

delete user.name;
delete user.save;
console.log(user);

// const user1 = Object.freeze({ id: 1 });
const user1 = Object.seal({ id: 1 });
user1.name = 'Patricio';
user.id = 2;
console.log(user1);
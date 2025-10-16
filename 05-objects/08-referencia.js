// let a = 1;
// let b = 2;

// b++;
// console.log(a, b);

// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);

// let a = 1;

// function sum(n){
//     n++
// }

// sum(a);
// console.log(a);

let a = { prop: 1 };

function sum(n){
    n.prop++;
}

sum(a);
console.log(a);
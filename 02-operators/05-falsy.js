// short-circuit

// False
// false
// 0
// ''
// null
// undefined
// NaN
let name = 'Happy feet';
let username = void 0 || 'Anonymous';
console.log(username);

function fn1() {
    console.log('I am function 1');
    return false;
}

function fn2() {
    console.log('I am function 2');
    return true;
}

let x = fn1() && fn2();
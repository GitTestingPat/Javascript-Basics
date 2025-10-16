/**
 * Create a program that returns
 * the price of a product
 * plus tax.
 */

function totalPrice(price, tax) {
    return price + price * tax;
}

let result = totalPrice(19.9, 0.15);
console.log(result);
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dibujar = function() { console.log('Drawing...'); };
    }
}

let point = { z: 7 };
// Point.call(point, 1, 2);
Point.apply(point, [1, 2]);

console-log(point);
// const Point = new Function('x', 'y', `
// this.x = x;
// this.y = y;
// this.draw = function() { console.log('Drawing...'); };
// `);

// const p = new Point(1, 2);
// console.log(p);
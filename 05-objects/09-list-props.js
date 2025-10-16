const point = {
    x: 10,
    y: 15,
    draw() {
        console.log('Drawing');
    }
};

// delete point.draw;
if ('draw' in point) {
    point.draw();
}

// let keys = Object.keys(point);
// console.log(Object.keys(point));
for (let key of Object.keys(point)) {
    console.log(key, point[key]);
}

for (let entry of Object.entries(point)) {
    console.log(entry);
}

for (let key in point) {
    console.log(key, point[key]);
}
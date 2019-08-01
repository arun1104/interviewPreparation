var arr = [-4, 3, -9, 0, 4, 1];
var counter = [0, 0, 0]; //0 th index stands for negative 1st for zero and 2nd for positive
arr.forEach(element => {
    let x = element / Math.abs(element);
    switch (isNaN(x) || x) {
        case -1:
            counter[0]++;
            break;
        case true:
            counter[1]++;
            break;
        case 1:
            counter[2]++;
            break;
    }
});

console.log((counter[2] / arr.length).toPrecision(arr.length));
console.log((counter[0] / arr.length).toPrecision(arr.length));
console.log((counter[1] / arr.length).toPrecision(arr.length));
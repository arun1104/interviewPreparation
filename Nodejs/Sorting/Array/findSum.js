var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(simpleArraySum(arr));

function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);

}
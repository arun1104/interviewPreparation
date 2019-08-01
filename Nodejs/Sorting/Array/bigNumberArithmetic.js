'use strict';

function splitNumber(number) {
    let result = [];
    while (number >= 10) {
        result.push(number % 10);
        number = Math.floor(number / 10);
    }
    result.push(number);
    return result;
}

function sumOfTwoArrays(g, b) {
    let result = [];
    let input1, input2;
    if (g.length == b.length || g.length > b.length) {
        input1 = g;
        input2 = b;
    } else {
        input1 = b;
        input2 = g;
    }
    let j = 0;
    let remainder = 0;
    let sum = 0;
    input1.forEach(element => {
        if (j != input2.length) {
            sum = element + remainder + input2[j++];
            remainder = 0;
        } else {
            sum = element + remainder;
            remainder = 0;
        };

        if (sum >= 10) {
            sum = sum % 10;
            remainder = 1;
        }
        result.push(sum);
    });
    return result.reverse();
}

function bigArraySum(ar) {
    let result = ar.reduce((accumulator, currentValue, currentIndex, array) => {
        if (typeof accumulator == 'number') {
            accumulator = splitNumber(accumulator);
            accumulator.reverse();
        }
        currentValue = splitNumber(currentValue);
        let sum = sumOfTwoArrays(accumulator.reverse(), currentValue);
        console.log("Sum:" + sum.toString());
        return sum;
    });
    return result;
}

console.log(bigArraySum([1000000001,
    1000000002, 1000000003, 1000000004, 1000000005
]).toString());
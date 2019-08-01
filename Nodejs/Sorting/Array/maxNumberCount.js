function maxNumberCount(arr) {
    let biggest;
    let firstElement = true;
    let result;
    if (arr.length === 0) return 0;
    let sum = arr.reduce((accumulator, element) => {
        if (firstElement) {
            firstElement = false
            if (accumulator > element) {
                biggest = accumulator;
                return biggest;
            } else if (accumulator < element) {
                biggest = element;
                return biggest;
            } else {
                biggest = element;
                return accumulator + element;
            }
        } else {
            if (biggest < element) {
                biggest = element;
                return biggest;
            } else if (biggest === element) {
                return accumulator + element;
            } else return accumulator;
        }
    });

    if (sum) {
        result = sum / biggest;
    } else {
        result = 1;
    }
    return result;
}

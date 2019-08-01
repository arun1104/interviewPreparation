function minMax(arr) {
    let biggest, smallest;
    let firstElement = true;
    let result = arr.reduce((accumulator, element) => {

        if (firstElement) {
            firstElement = false
            if (accumulator >= element) {
                biggest = accumulator;
                smallest = element;
            } else {
                smallest = accumulator
                biggest = element;
            }
        } else {
            if (element > biggest) biggest = element;
            if (element < smallest) smallest = element;
        }
        return accumulator + element;
    });
    return {
        biggest,
        smallest,
        sum: result
    }
}

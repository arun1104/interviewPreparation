//Sort object based on one attribute

function sortInDescendingOrder(a, b) {
    if (a.year < b.year)
        return 1;
    if (a.year === b.year) {
        if (a.month < b.month) {
            return 1;
        }
        if (a.month === b.month) {
            if (a.day < b.day) {
                return 1;
            }
        }
    }
}

function sortInAscendingOrder(a, b) {
    if (a.year > b.year)
        return 1;
}

function algorithm(testData) {
    testData.sort(sortInDescendingOrder);
    return testData;
}
module.exports = { algorithm }
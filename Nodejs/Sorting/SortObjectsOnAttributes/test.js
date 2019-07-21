const Assert = require('assert');
const code = require('./code');

var inputData = [
    { day: 12, month: 5, year: 1200 },
    { day: 29, month: 9, year: 2018 },
    { day: 31, month: 10, year: 2010 },
    { day: 12, month: 4, year: 2000 },
    { day: 01, month: 12, year: 1999 },
    { day: 12, month: 5, year: 1999 },
    { day: 12, month: 4, year: 2019 },
    { day: 31, month: 11, year: 2018 },
    { day: 12, month: 6, year: 1999 },
    { day: 11, month: 4, year: 1991 }
];
var outputData = [
    { day: 12, month: 4, year: 2019 },
    { day: 31, month: 11, year: 2018 },
    { day: 29, month: 9, year: 2018 },
    { day: 31, month: 10, year: 2010 },
    { day: 12, month: 4, year: 2000 },
    { day: 01, month: 12, year: 1999 },
    { day: 12, month: 6, year: 1999 },
    { day: 12, month: 5, year: 1999 },
    { day: 11, month: 4, year: 1991 },
    { day: 12, month: 5, year: 1200 }
];

try {
    var algoOutput = code.algorithm(inputData);
    var t = JSON.stringify(algoOutput);
    Assert.deepEqual(algoOutput, outputData);
    console.log('Output verified');
} catch (ex) {
    console.log('Error in code');
}
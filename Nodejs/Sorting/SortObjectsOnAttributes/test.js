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
    Assert.deepEqual(algoOutput, outputData);
    console.log('Output verified');
} catch (ex) {
    console.log('Error in code');
}

var inputDataString = ['11 Apr 1991', '11 Apr 2019', '12 Apr 1991', '31 May 1991'];
var dateMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var outputData = ['11 Apr 2019', '31 May 1991', '12 Apr 1991', '11 Apr 1991'];

try {
    var algoInput = convertStringToObjectArray(inputDataString);
    var algoOutput = code.algorithm(algoInput);
    formatOutput(algoOutput);
    Assert.deepEqual(algoOutput, outputData);
    console.log('Output verified');
} catch (ex) {
    console.log('Error in code');
}

function convertStringToObjectArray(inputDataString) {
    var temp = [];
    inputDataString.forEach(function(element) {
        var splitted = element.split(' ');
        var day = parseInt(splitted[0]);
        var year = parseInt(splitted[2]);
        var inputObj = {
            day: day,
            year: year,
            month: dateMap.findIndex((ele) => ele === splitted[1]),
            monthString: splitted[1],
            date: `${day} ${splitted[1]} ${year}`
        }
        temp.push(inputObj);
    });
    return temp;
}

function formatOutput(output) {
    for (var i in output) {
        var firstEle = output.shift();
        output.push(firstEle.date);
    }
}
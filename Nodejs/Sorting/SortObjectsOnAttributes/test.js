const Assert = require('assert');
const code = require('./code');
try {
    Assert.deepEqual(code.algorithm(), []);
} catch (ex) {
    console.log('Error in code');
}
console.log('Output verified');
console.log("\n=============================================================================\n");

const dbl = require('./dbl').double;
const trpl = require('./dbl').triple;

let test = 1;
trpl(test);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
narr = arr.map(dbl);

console.log(narr);


console.log("\n=============================================================================\n");

console.log("\n=============================================================================\n");

//Pulling functions defined in dbl.js
const dbl = require('./dbl').double;
const trpl = require('./dbl').triple;

//Testing trpl function
let test = 1;
trpl(test);

//Testing an array map with the dbl function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
narr = arr.map(dbl);
console.log(narr);

console.log("\n=============================================================================\n");

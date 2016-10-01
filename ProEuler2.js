console.log("\n=============================================================================\n");

//Recursive fibonacci algorithm
let fib = function fib(n) {
  if(n <= 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

let count = 0;
let sum = 0;
// Add any even number in the fibonacci sequence below 4000000 to a sum
while(fib(count) < 4000000) {
  if (fib(count) % 2 === 0) {
    sum += fib(count);
  }
  count ++;
}

console.log (sum);

//array.map
//array.foreach
//array.filter
//array.reduce

console.log("\n=============================================================================\n");

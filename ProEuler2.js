console.log("\n=============================================================================\n");
console.log("New Method");
//Recursive fibonacci algorithm
let fib = function fib(n) {
  if(n <= 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}


let mkArr = function(n) {
  //Create an array with n values
  let arr = [];
  let i = 0;
  while (i < n) {
    arr.push(i);
    i ++;
  }
  return arr;
}

//Make an array and perform Fibonaci algorithm on all elements
arr = mkArr(35);
fibArr = arr.map(fib);

//Remove all elements that are larger than 4000000 or that are not even
fibArrLength = fibArr.length;
for (let i = fibArrLength; i >= 0 ; i--) {
  if (fibArr[i] % 2 != 0 || fibArr[i] > 4000000) {
    fibArr.splice(i, 1);
  }
}

//Add all elments of the array together
function getSum(total, num) {
    return total + Math.round(num);
}
fibArrSum = fibArr.reduce(getSum, 0);

console.log(fibArrSum);

console.log("\n=============================================================================\n");
console.log("Original Method");

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

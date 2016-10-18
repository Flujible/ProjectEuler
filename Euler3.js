console.log("\n=============================================================================\n");

const num = 600851475143;
//We dont need to check anything above the sqrt, as its counterpart will be
//below the sqrt and wont be prime
const sqrtNum = Math.floor(Math.sqrt(num));

//if i modulo n = 0, then it is a factor, so store it, return the factors
let createFactors = function (n) {
	let factors = [];
	for (let i = 0; i <= n; i++) {
		if (n % i === 0) {
			console.log(i)
			factors.push(i);
		}
	}
	return factors;
};

// check if the number is prime or not
let isPrime = function (n) {
	if (n < 2 || n % 1) {
		return false;
	} else {
		let sqrt = Math.sqrt(n);
		for (let i = 2; i < sqrt; i++) {
			if (n % i === 0) {
				return false;
			}
			return true;
		}
	}
}

let factors = createFactors(100);
console.log(factors);
factors = factors.filter(isPrime);
console.log(factors);

console.log("\n=============================================================================\n");

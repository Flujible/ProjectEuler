//import used for writing assertion tests
const assert = require('assert');

//function to double an input of any basic type
let dbl = function(n) {
  if (typeof n === 'undefined') {
    return undefined;
  } else if (typeof n === 'string') {
    return n + n;
  } else {
    return n * 2;
  }
};

//function to double an input of any basic type
let trpl = function(n) {
  if (typeof n === 'undefined') {
    return undefined;
  } else if (typeof n === 'string') {
    return n + n;
  } else {
    return n * 3;
  }
};

//Example pieces of code that may be needed when making my FYP
let processSingleJob = function (job) {
  job.getResults().then(display);
};

let processJobs = function (jobList) {
  jobList.forEach(processSingleJob);
};

request('/selenium/jobs')
  .then(processJobs)
  .catch(function (error) {
    console.log(error);
  });

assert(dbl(1) === 2);
assert(dbl(0) === 0);
assert(dbl('a') === 'aa');
assert(dbl(-1000) === -2000);
assert(typeof dbl() === 'undefined');

//Function to state which parts of the file should be accessible in a 'require'
module.exports = {
  double: dbl,
  triple: trpl
};

const assert = require('assert');

let dbl = function(n) {
  if (typeof n === 'undefined') {
    return undefined;
  } else if (typeof n === 'string') {
    return n + n;
  } else {
    return n * 2;
  }
}

let processSingleJob = function (job) {
  job.getResults().then(
    display();
  )
};

let processJobs = function (jobList) {
  jobsList.forEach(processSingleJob);
}

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

let trpl = function(n) {
  return n * 3;
}

module.exports = {
  double: dbl,
  triple: trpl
};

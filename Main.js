const euler1 = require('./euler1').euler1;

let tasks = {
  '1': euler1,
  '2': euler2,
}

let count = 0;
for (let task in tasks) {
  count++;
  if (tasks.hasOwnProperty(task)) {
      console.log("Project Euler task " + count + ": " + tasks[task]());
  }
}

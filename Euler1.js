let euler1 = () => {
  const list = 1000;
  let sum = 0;
  for (let i = 0; i < list; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = {
  euler1
}

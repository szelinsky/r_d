const dividedByThreeFiveSeven = (n) => {
  const result = [];
  for (let i = 1; i <= 7; i++) {
    if (i % 3 === 0) {
      result.push(i);
    } else if (i % 5 === 0) {
      result.push(i);
    } else if (i % 7 === 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(dividedByThreeFiveSeven(7));


const dividedByThreeFiveSeven2 = (n) => {
  let result = [];
  while (n > 0) {
    result = n % 3 === 0 || n % 5 === 0 || n % 7 === 0 ? [...result, n] : result;
    n--;
  }
  return result.reverse();
};
console.log(dividedByThreeFiveSeven2(7));

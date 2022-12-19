//? Problem 1.
// sum of every positive elements
const input = [1, -4, 12, 0, -3, 29, -150]; //Ans: 42

const sum = input.reduce(function (acc, val) {
  if (val >= 0) {
    return acc + val;
  }
  return acc;
});
console.log(sum);

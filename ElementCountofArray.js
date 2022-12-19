//? Problem 4.
// Count elements in array of arrays
const inputArr = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];
/*
Ans:
{
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  f: 2,
  g: 1,
}
*/
const arr1 = inputArr.reduce(function (acc, curr) {
  return acc.concat(curr);
});
console.log(arr1);
const freq = arr1.reduce(function (acc, val) {
  acc[val] = acc[val] ? acc[val] + 1 : 1;
  return acc;
}, {});
console.log(freq);

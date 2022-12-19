//Problem 3
// Count the Age Difference between having max&min ages
const inputAge = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  },
];
const age = inputAge.map((i) => i.age);
const sortedAge = age.sort((a, b) => a - b);
console.log(Math.max(...age) - Math.min(...age));
// Ans: 54  , Explanation: (Max Age: 67, Min Age: 13)

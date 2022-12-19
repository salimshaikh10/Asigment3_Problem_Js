//? Problem 2.
// Get name initials
const inputString = 'George Raymond Richard Martin'; //Ans: GRRM
const sptarr = inputString.split(' ');
const initials = sptarr.reduce((acc, val) => acc + val[0], '');
console.log(initials);

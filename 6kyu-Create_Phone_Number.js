/*
Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.
04.01.22
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function num(arr){
  return [].concat(["("]).concat(arr.slice(0,3)).concat(") ").concat(arr.slice(3,6)).concat("-").concat(arr.slice(6,10)).join('') 
}
console.log(num(arr))
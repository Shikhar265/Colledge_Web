let arr1=[1,2,3,4,5];
arr1.push(2);
// insert last element
console.log(arr1);
arr1.pop();
// remove last element
console.log(arr1);
arr1.shift();
// remove first element
console.log(arr1);
arr1.unshift(34);
// add first element
console.log(arr1);

let arr2=[10,20,30,40];
console.log(arr1.concat(arr2));
// merge two arrays

console.log(arr1.indexOf(2));
console.log(arr1.indexOf(12));
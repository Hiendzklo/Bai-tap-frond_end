let arr1 = ["", false, 0, 5, 10, "Hello world!"];
let arr2 = ["", false, 0, undefined, null];
let arr3 = [NaN, "test", 4];
let arr4 = ["JavaScript", 0, null, true, 7, " "];

let filteredArr1 = arr1.filter(Boolean);
let filteredArr2 = arr2.filter(Boolean);
let filteredArr3 = arr3.filter(Boolean);
let filteredArr4 = arr4.filter(Boolean);

console.log(filteredArr1);  
console.log(filteredArr2);  
console.log(filteredArr3);  
console.log(filteredArr4);  

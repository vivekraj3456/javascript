// Array

const myArr=[0,1,3,4,5,6,7,5]
console.log(myArr);
console.log(typeof myArr) //object

const fruits = ["apple", "banana", "grapes"]
console.log(fruits);
console.log(typeof fruits) //object

const myArr2= new Array(1,2,3,4,5) // another way to create array using Array constructor
console.log(myArr2);
console.log(myArr2[3]); //4

myArr.push(8)
console.log(myArr); // add 8 at last index

myArr.pop()
console.log(myArr); // remove last element (8)

myArr.unshift(-1)
console.log(myArr); // add -1 at first index

myArr.shift()
console.log(myArr); // remove first element (-1)

console.log(myArr.length); // length of array

console.log(myArr.includes(15)); // false bcoz 15 is not present in array
console.log(myArr.includes(5)); // true bcoz 5 is present in array

const newArr=myArr.join()
console.log(newArr); // "0,1,3,4,5,6,7,5" => converts array to string with , separator
console.log(typeof newArr); // string

const newArr2=myArr.join(" ")
console.log(newArr2); // "0 1 3 4 5 6 7 5" => converts array to string with space separator

//Slice,Splice

const Animals = ["tiger", "lion", "elephant", "deer", "monkey", "dog"]
const newAnimals=Animals.slice(2,5)
console.log("A: ",Animals); // original array remains same
console.log(newAnimals); // sliced array from index 2 to 4

const newAnimals2=Animals.splice(2,5)
console.log("B: ",Animals); // original array is modified in which elements from index 2 to 6 are removed
console.log(newAnimals2); // removed elements from index 2 to 6





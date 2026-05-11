const fruits=["apple", "banana", "grapes", "mango", "orange"]
const vegetables=["carrot", "broccoli", "asparagus"]

fruits.push(vegetables)
console.log(fruits); // vegetables array is added as last element in fruits array
console.log(fruits[5][1]); // access broccoli from nested array


const allFood=fruits.concat(vegetables) // merging two arrays
console.log("a", allFood); // new array by merging two arrays

const allFood1=[...fruits,...vegetables] // merging two arrays using spread operator
console.log("b", allFood1); // new array by merging two arrays

const arr=[1,2,3,...[4,5,6],7,8,9,...[10,11,12],...[13,14]]
console.log("c", arr);


const arr1=[1,2,[3,4,[5,6]] ,7,8,[9,10,[11,12]]]
const arr2=arr1.flat(Infinity) // flattening nested arrays
console.log("d", arr2);

console.log(Array.isArray("vivek")); // false bcoz string is not an array
console.log(Array.isArray(["vivek"])); // true bcoz it is an array
console.log(Array.from("vivek")); // converting string to array


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // creating array from individual elements

// TODO: FOR...OF LOOP
// Used to directly iterate over VALUES of iterable data such as Arrays, Strings, and Maps.
// No need to manually manage index, condition, or increment.

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }


// TODO: FOR...OF WITH STRING
// Strings are iterable, so for...of gives each character one by one.

// const greeting = "Hello world!"
// for(const greet of greeting){
//     console.log(`Each character is ${greet}`);
// }


// TODO: MAPS
// Map stores data in KEY-VALUE pairs.
// Keys are unique, and values maintain their insertion order.

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set("FR", "France");

// console.log(map);


// TODO: ITERATING OVER MAP
// A Map is iterable, so for...of can be used on it.
// Each iteration gives a [key, value] pair.

// for (const key of map) {
//     console.log(key);
// }


// TODO: MAP DESTRUCTURING
// Destructure [key, value] to access both separately.

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


// TODO: FOR...OF DOES NOT WORK DIRECTLY WITH OBJECTS
// Normal JavaScript objects are not iterable with this syntax.
// Objects need other approaches such as for...in.

// const myObj = {
//     'game1': 'NFS',
//     'game2': "Spiderman"
// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


// TODO: FOR...IN LOOP
// Mainly used to iterate over KEYS of an object.
// Use object[key] to access the corresponding value.

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// TODO: FOR...IN WITH ARRAY
// for...in gives the INDEXES (keys) of an array, not the values directly.

// const programming = ["js", "rb", "py", "java", "cpp", "PHP"]
// for(const key in programming){
//     console.log(programming[key]);
// }


// TODO: FOR-EACH LOOP
// Array method that executes a callback function for every element.
// Commonly used for array iteration.

// const coding = ["js", "ruby", "python", "java", "cpp"]


// TODO: FOR-EACH WITH NORMAL FUNCTION
// The callback receives each array element.

// coding.forEach(function (ele) {
//     console.log(ele);
// });


// TODO: FOR-EACH WITH ARROW FUNCTION

// coding.forEach((item) => {
//     console.log(item); 
// })


// TODO: PASSING FUNCTION REFERENCE TO FOR-EACH
// Pass the function name without () because forEach calls it for each element.

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


// TODO: FOR-EACH CALLBACK PARAMETERS
// Callback can receive: item (value), index, and the original array.

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


// TODO: ARRAY OF OBJECTS WITH FOR-EACH
// Very common in real projects and API data.
// Iterate through objects and access their properties using dot notation.

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
];

myCoding.forEach((item) => {
    console.log(item.langName, item.langFileName);
});
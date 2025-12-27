// const score =123;
// console.log(score);
// console.log(typeof score);

// const balance = new Number(345);  // object ://!Avoid in code
// console.log(balance);
// console.log(typeof balance); //object
// console.log(balance.toFixed(2)); // 345.00

// const num=543;
// console.log(num.toString());
// console.log(typeof num.toString());
// console.log(num.toString().length);

// const price= 123.376;
// console.log(price.toFixed(1)); // tofixed - decimal places
// console.log(price.toPrecision(5)); // toPrecision - total digits

// console.log(Number.isInteger(price));
// console.log(Number.isInteger(num));

// let bigNumber= 12345678901234567;
// console.log(bigNumber.toLocaleString());  // toLocaleString - adds commas based on locale // US Numbering System
// console.log(bigNumber.toLocaleString("en-IN")); // Indian Numbering System
// // ---------------------------------------
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);1
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// ---------------------------------------

console.log(1/0);  // infinity
console.log(-1/0); // -infinity
console.log("=================================");

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2); 
console.log("=================================");

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-6));
console.log(Math.round(5.7));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));

console.log(Math.min(3,5,7,2,4));
console.log(Math.max(4,45,6,7,3,8));

console.log(Math.random());
console.log(Math.random()*10+1);

console.log(Math.sqrt(49));
console.log(Math.pow(2,5));

// ! Dice(1 to 6 )
console.log(Math.floor(Math.random()*6)+1);

const min1 = 10
const max1 = 20
console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1)
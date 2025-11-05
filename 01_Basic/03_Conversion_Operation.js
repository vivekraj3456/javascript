let score="vivek"

console.log(typeof score);
console.log(typeof(score));// both are same
//type conversion
let valueInNumber=Number(score); // converting string to number
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); //NaN=> not a number bcoz string cannot be converted to number

let score1=null; 
console.log(typeof(score1)); //object
let valueInNumber1=Number(score1);
console.log(typeof(valueInNumber1)); //number
console.log(valueInNumber1); //0 bcoz null is considered as 0 in number conversion

let isLoggedIn="true";
let booleanValue=Boolean(isLoggedIn);
console.log(typeof isLoggedIn); //string
console.log(typeof booleanValue); //boolean
console.log(booleanValue); //true bcoz non empty string is considered as true in boolean conversion

let score2=undefined;
console.log(typeof(score2));//undefined
let valueInNumber2=Number(score2);
console.log(typeof(valueInNumber2));//number
console.log(valueInNumber2);//NaN bcoz undefined cannot be converted to number

let num=123;
let str=String(num); // converting number to string
console.log(num); //123
console.log(typeof num); //number
console.log(str); // "123"
console.log(typeof str); //string

//* 1=>true 0=>false
let isLoggedIn1=1;
let booleanValue1=Boolean(isLoggedIn1);
console.log(typeof isLoggedIn1); //number
console.log(typeof booleanValue1); //boolean
console.log(booleanValue1); //true bcoz 1 is considered as true in boolean conversion

let isLoggedIn2=0;
let booleanValue2=Boolean(isLoggedIn2);
console.log(typeof isLoggedIn2); //number
console.log(typeof booleanValue2); //boolean
console.log(booleanValue2); //false bcoz 0 is considered as false in boolean conversion

//* ""=>false "vivek"=>true

let emptyString="";
let booleanValue3=Boolean(emptyString);
console.log(typeof emptyString);
console.log(typeof booleanValue3);
console.log(booleanValue3); //false bcoz empty string is considered as false in boolean conversion

let nonEmptyString="vivek";
let booleanValue4=Boolean(nonEmptyString);
console.log(typeof nonEmptyString);
console.log(typeof booleanValue4);
console.log(booleanValue4); //true bcoz non empty string is considered as true in boolean conversion
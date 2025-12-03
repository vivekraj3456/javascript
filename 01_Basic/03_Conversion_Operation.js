let score="vivek"

//type conversion
let valueInNumber=Number(score); // converting string to number
console.log(typeof score, typeof(valueInNumber), valueInNumber); //string number NaN=> not a number bcoz string cannot be converted to number

let score1=null; 
let valueInNumber1=Number(score1);
console.log(typeof(score1), typeof(valueInNumber1), valueInNumber1); //object number 0 bcoz null is considered as 0 in number conversion

let isLoggedIn="true";
let booleanValue=Boolean(isLoggedIn);
console.log(typeof isLoggedIn, typeof booleanValue, booleanValue); //string boolean true bcoz non empty string is considered as true in boolean conversion

let score2=undefined;
let valueInNumber2=Number(score2);
console.log(typeof(score2), typeof(valueInNumber2), valueInNumber2);//undefined number NaN bcoz undefined cannot be converted to number

let num=123;
let str=String(num); // converting number to string
console.log(num, typeof num, str, typeof str); //123 number "123" string

//* 1=>true 0=>false
let isLoggedIn1=1;
let booleanValue1=Boolean(isLoggedIn1);
console.log(typeof isLoggedIn1, typeof booleanValue1, booleanValue1); //number boolean true bcoz 1 is considered as true in boolean conversion

let isLoggedIn2=0;
let booleanValue2=Boolean(isLoggedIn2);
console.log(typeof isLoggedIn2, typeof booleanValue2, booleanValue2); //number boolean false bcoz 0 is considered as false in boolean conversion

//* ""=>false "vivek"=>true

let emptyString="";
let booleanValue3=Boolean(emptyString);
console.log(typeof emptyString, typeof booleanValue3, booleanValue3); //string boolean false bcoz empty string is considered as false in boolean conversion

let nonEmptyString="vivek";
let booleanValue4=Boolean(nonEmptyString);
console.log(typeof nonEmptyString, typeof booleanValue4, booleanValue4); //string boolean true bcoz non empty string is considered as true in boolean conversion



// ************Operation*******************
let value=3
let negvalue= -value
console.log(negvalue) //-3

// *Arithmetic operations
console.log(2+2, 2-2, 2*2, 2**3, 2/2, 2%3); // 4 0 4 8 1 2
// *Conversion in operation
let str1="123"
let str2="456"
console.log(str1+str2, +str1 + +str2, Number(str1) + Number(str2)) //123456 (concatenation) 579 (addition) 579 (addition)
// *Type coercion
// automatic conversion of data type by js engine
console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+"2") //12
console.log(1+1+"2") //22
console.log("1"+1+2) //112

console.log("1"-2, "1"*2, "6"/"2") // -1 2 3 

// *Comparison operators
console.log(2>"12") //false bcoz 12 is greater than 2

// *the unary plus (+) is used to convert a value into a number.
console.log(+true, +false); //1 0

console.log("2">1, "01"==1); //true true

console.log(null > 0, null < 0, null == 0, null >= 0, null <= 0) //false false false true true

console.log(undefined > 0, undefined < 0, undefined == 0, undefined >= 0, undefined <= 0, undefined == null) //false false false false false true

// *Strict equality operator (===)
console.log("1" === 1, "1" !== 1) //false true

// *Loose equality operator (==)
console.log("1" == 1, "1" != 1) //true false


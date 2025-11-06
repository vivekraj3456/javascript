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



// ************Operation*******************
let value=3
let negvalue= -value
console.log(negvalue) //-3

// *Arithmetic operations
console.log(2+2); 
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2); // 1
console.log(2%3); //2
// *Conversion in operation
let str1="123"
let str2="456"
console.log(str1+str2) //123456 (concatenation)
console.log(+str1 + +str2) //579 (addition) converting string to number using + operator
console.log(Number(str1) + Number(str2)) //579 (addition) converting string to number using Number() function
// *Type coercion
// automatic conversion of data type by js engine
console.log("1"+2) //12 bcoz + operator concatenates number to string
console.log(1+"2") //12 bcoz + operator concatenates number to string
console.log("1"+"2"); //12 bcoz + operator concatenates string to string
console.log(1+1+"2") //22 bcoz 1+1=2 then + operator concatenates number to string
console.log("1"+1+2) //112 bcoz + operator concatenates number to string step by step

console.log("1"-2) // -1 bcoz - operator converts string to number
console.log("1"*2) //2 bcoz * operator converts string to number
console.log("6"/"2") //3 bcoz / operator converts string to number 

// *Comparison operators
console.log(2>"12") //false bcoz 12 is greater than 2

// *the unary plus (+) is used to convert a value into a number.
console.log(+true); //1 bcoz true is converted to 1 in number conversion
console.log(+false); //0 bcoz false is converted to 0 in number conversion

console.log("2">1); //true bcoz "2" is converted to 2 in number conversion and 2>1
console.log("01"==1); //true bcoz "01" is converted to 1 in number conversion and 1==1

console.log(null > 0) //false bcoz null is converted to 0 in number conversion and 0 is not greater than 0
console.log(null < 0) //false bcoz null is converted to 0 in number conversion and 0 is not less than 0
console.log(null == 0) //false bcoz null is only equal to undefined
console.log(null >= 0) //true bcoz null is converted to 0 in number conversion and 0 is equal to 0
console.log(null <= 0) //true bcoz null is converted to 0 in number conversion and 0 is equal to 0

console.log(undefined > 0) //false bcoz undefined is converted to NaN in number conversion and NaN is not comparable
console.log(undefined < 0) //false bcoz undefined is converted to NaN in number conversion and NaN is not comparable
console.log(undefined == 0) //false bcoz undefined is only equal to null
console.log(undefined >= 0) //false bcoz undefined is converted to NaN in number conversion and NaN is not comparable
console.log(undefined <= 0) //false bcoz undefined is converted to NaN in number conversion and NaN is not comparable
console.log(undefined == null) //true bcoz undefined is equal to null

// *Strict equality operator (===)
console.log("1" === 1) //false bcoz different data types
console.log("1" !== 1) //true bcoz different data types

// *Loose equality operator (==)
console.log("1" == 1) //true bcoz type coercion is done and both are converted to number 1
console.log("1" != 1) //false bcoz type coercion is done and both are converted to number 1


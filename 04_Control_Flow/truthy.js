// TODO: 1.TRUTHY VALUE

const userEmail="abc@gmail.com";
if(userEmail){
    console.log("Got user email"); // this will be executed because userEmail is a truthy value
}

// TODO: 2.FALSY VALUE
const emptyEmail="";
if(emptyEmail){
    console.log("Got user email"); // this will not be executed because emptyEmail is a falsy value
}
// TODO: 3. FALSY VALUE

if(false) console.log("false"); // this will not be executed because false is a falsy value
if(null) console.log("null"); // this will not be executed because null is a falsy value
if(undefined) console.log("undefined"); // this will not be executed because undefined is a falsy value
if(0) console.log("0"); // this will not be executed because 0 is a falsy value
if(NaN) console.log("NaN"); // this will not be executed because NaN is a falsy value
if("") console.log("empty string"); // this will not be executed because empty string is a falsy value
if(0n) console.log("0n"); // this will not be executed because 0n is a falsy value


// TODO: 4.TRUTHY STRING VALUE
if("0") console.log("0"); // this will be executed because "0" is a truthy value
if("false") console.log("false"); // this will be executed because "false" is a truthy value
if(" ") console.log("space"); // this will be executed because space is a truthy value

// TODO: 5.EMPTY ARRAY 
const userEmails=[];
if(userEmails){
    console.log("Array is Truthy"); // this will be executed because empty array is a truthy value
}
if(userEmails.length===0){
    console.log("Array is empty"); // this will be executed because array length is 0
}

// TODO: 6.ARRAY WITH VALUES


const emails=[
    "abc@gmail.com",
    "xyz@gmail.com"
];
if(emails.length===0){
    console.log("Array is empty"); // this will not be executed because array length is not 0   
}
else {
    console.log("Array has values"); // this will be executed because array length is not 0
}

// TODO: 7.EMPTY OBJECT

const user={};
if(user){console.log("Object is Truthy"); }// this will be executed because empty object is a truthy value}

if(Object.keys(user).length===0){
    console.log("Object is empty"); // this will be executed because object has no keys
}
// TODO: 8.OBJECT WITH DATA    
const userData={
    name : "vivek",
    email : "vivek@gmail.com"
};
if(Object.keys(userData).length===0){
    console.log("Object is empty"); // this will not be executed because object has keys
}
else{
    console.log("Object has data"); // this will be executed because object has keys
}
// TODO: 9.LOOSE EQUALITY
console.log(false ==0); // true because false is converted to 0
console.log(false == null); // false because null is not converted to 0
console.log(false == undefined); // false because undefined is not converted to 0
console.log(false == NaN); // false because NaN is not converted to 0
console.log(false == false); // true because both are false
console.log(false == true); // false because both are not equal
console.log(0==false) // true because 0 is converted to false
console.log(0==null) // false because null is not converted to 0
console.log(0=="") // true because 0 is converted to 0 and "" is converted to 0


// TODO: 10.NULLISH COALESCING OPERATOR
// null      → right side
// undefined → right side

// anything else → left side

let val1= null ?? 10; // val1 will be 10 because null is nullish value
console.log(val1); // 10

let val2= undefined ?? 20; // val2 will be 20 because undefined is nullish value
console.log(val2); // 20

let val3= 15 ?? 30; // val3 will be 15 because 15 is not a nullish value
console.log(val3); // 15

const databaseUser = null;
const finalvalue = databaseUser ?? "Default User"; // finalvalue will be "Default User" because databaseUser is nullish value
console.log(finalvalue); // "Default User"

// TODO: 11.TERNARY OPERATOR
// ! condition ? true_value : false_value
const price=100;
const priceCheck = price>200 ? "Price is greater than 200" : "Price is less than or equal to 200";
console.log(priceCheck); // "Price is less than or equal to 200"
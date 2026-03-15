const firstname="Vivek";
const Lastname="Raj";

const fullName=firstname + " " + Lastname;
console.log(fullName);

console.log(`my full name is ${firstname} ${Lastname}`);

console.log(fullName.length);

// ----------------------------
const myName=new String("abcdefghi")

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.charAt(0));
console.log(myName.charAt(1));
console.log(myName.charAt(2));
console.log(myName.indexOf('f'));

console.log(myName.substring(2,5));
console.log(myName.slice(-8,3));


const newstring="     hello world       ";
console.log(newstring);
console.log(newstring.trim());
console.log(newstring.trimStart());
console.log(newstring.trimEnd());

const url="vivek%20raj@gmail.com";

console.log(url.replace( "%20","-"));

console.log(url.includes("frhg"));
console.log(url.includes("vive"));

console.log(url.split("@"));
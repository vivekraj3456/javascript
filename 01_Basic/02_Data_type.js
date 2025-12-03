"use strict;" // treat all js code as newer version

// alert(3+3) // we can use alert, prompt, confirm in browser environment only,not in node js environment

console.log(3 + 3)
console.log("Hello World")


let name ="vivek"
let age=18
let IsLoggedIn=true
let state // undefined
console.log(typeof name, typeof age, typeof IsLoggedIn, typeof state)  //string number boolean undefined

// *Data type:
// 1_number=>2 to power 53
// 2_bigint
// 3_String=>""
// 4_boolean=>true/false

// 5_null => standalone value means empty value// null is object type
// 6_undefined => default value when variable is not initialized
console.log(typeof null, typeof undefined) //object undefined

// 7_symbol=>unique

//dynamic typing
name=34
console.log(typeof name) //number
name=true
console.log(typeof name) //boolean


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId, typeof heros); //symbol object

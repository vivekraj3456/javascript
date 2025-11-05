"use strict;" // treat all js code as newer version

// alert(3+3) // we can use alert, prompt, confirm in browser environment only,not in node js environment

console.log(3 + 3)
console.log("Hello World")


let name ="vivek"
let age=18
let IsLoggedIn=true
let state // undefined
console.log(typeof name)  //string
console.log(typeof age) //number
console.log(typeof IsLoggedIn) //boolean
console.log(typeof state)  //undefined

// *Data type:
// 1_number=>2 to power 53
// 2_bigint
// 3_String=>""
// 4_boolean=>true/false

// 5_null => standalone value means empty value// null is object type
console.log(typeof null) //object

// 6_undefined => default value when variable is not initialized
console.log(typeof undefined) //undefined

// 7_symbol=>unique

//dynamic typing
name=34
console.log(typeof name) //number
name=true
console.log(typeof name) //boolean



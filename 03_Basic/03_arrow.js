const user={
    username: "Vivek",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to this website`);
        console.log(this); //this refers to the object that is calling the function, in this case, it refers to the user object
    }
}
user.welcomeMessage(); //Here, this refers to the user object because the function is called as a method of the user object.
user.username="abc"
user.welcomeMessage();//Here, this refers to the user object because the function is called as a method of the user object.

console.log("---------------")
console.log(this) //{} //In the global context, this refers to the global object (window in browsers, global in Node.js). In strict mode, it will be undefined.
function xyz(){
    let username="Vivek"
    console.log(this.username) 
}
xyz(); //undefined //this doesn't refer to the xyz function's scope, it refers to the global object. Since username is not a property of the global object, it returns undefined.
// *basic way

const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(5,2)); //7 //Arrow functions do not have their own this context; they inherit it from the enclosing scope. In this case, it doesn't matter because the function doesn't use this.

//*implicit return

const addTwoImplicit =(num1,num2) => num1+num2; //Don't need to use return keyword and curly braces for single line functions
console.log(addTwoImplicit(5,2)); //7

// *for-each loop with arrow function
const arr=[1,2,3,4,5];
    arr.forEach((num)=>{
        console.log(num);
    })

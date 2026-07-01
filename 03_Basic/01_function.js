function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
sayMyName();

function summation(num1,num2){
    console.log(num1+num2);
    // !let result=num1+num2; //this is a local variable and can only be accessed inside the function
    // !return result; 
}
summation(13,15);
// !const result=summation(12,13); 

function loginUserMessage(username="abc"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vivek")); 
console.log(loginUserMessage("Raj"));

function CalculateCartPrice(val,val2,...num1){
    return num1
}
console.log(CalculateCartPrice(200,400,2000,330,3423,4,435,456,456,56,5,6,65));

// const user={
//     username: "Vivek",
//     price: 999
// }

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username:"raj",
    price: 499
})

const myNewArray=[200,300,400,500];

function ReturnSecondValue(getArray){
    return getArray[1];
}
console.log(ReturnSecondValue([200,400,500,1000]));
console.log(ReturnSecondValue)
        
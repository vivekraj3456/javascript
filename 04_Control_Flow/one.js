// today we will be study the topic 
const isUserLoggedIn = true;
const temp=41;
if(temp===40){
    console.log("temprature is less than 50");
}
else{
    console.log("temprature is greater than 50");
}
console.log("Execute");

 const score=200;
 if(score>1000){
    let power="fly";
    console.log(`user power is ${power}`);
 }
 console.log(`user power is ${power}`); // this will give error because power is defined in if block and we are trying to access it outside the block

 const balance =1000;
 if(balance>500){
    console.log("less than 50");
 }
 else if(balance>750){
    console.log("less than 750");
 }
 else{
    console.log("less than 1000");
 }
 const userLoggedIn = true;
 const debitCard = true;
 const loggedInFromGoogle = false;
 const loggedInEmail = true;
 if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
 }
 if(loggedInFromGoogle || loggedInEmail){
    console.log("User is logged in");  
 }


//  TODO: switch case

const month="march";
switch(month){
    case "jan":
        console.log("january");
        break;
        case "feb":
            console.log("february");
            break;
        case "march":
            console.log("march");
            break;
        case "april":
            console.log("april");
            break;
        default:
            console.log("not a valid month");
            break;
}


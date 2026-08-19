let a=300
if(true){
    let a=10
    const b=20
    var c=20
    console.log("Inner",a);
    console.log(b);
}
console.log(a); //global scoped variable
console.log(c); //var is function scoped so it can be accessed outside the block but let and const are block scoped so they cannot be accessed outside the block

function one(){
    const username = "Vivek";f

    function two(){
        const website="Youtube"
        console.log(username);
    }
    console.log(website);
f
    two()

}
<<<<<<< Updated upstream
console.log("---------------")
=======
>>>>>>> Stashed changes
if(true){
    const username="Vivek"
    if(username==="Vivek"){
        const website="Youtube"
<<<<<<< Updated upstream
           console.log(username + website); 
    }
    // console.log(website); // website is block scoped so it cannot be accessed outside the block
    // console.log(username); // username is block scoped so it cannot be accessed outside the block
}
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));
=======
        console.log(website);
    }
}   
>>>>>>> Stashed changes

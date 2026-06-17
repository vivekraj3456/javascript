let a=300
if(true){
    let a=10
    const b=20
    var c=20
    console.log("Inner",a);
    console.log(b);
}
console.log(a);
console.log(c); //

function one(){
    const username = "Vivek";

    function two(){
        const website="Youtube"
        console.log(username);
    }
    console.log(website);

    two()

}

if(true){
    const username="Vivek"
    if(username==="Vivek"){
        const website="Youtube"
        log
    }
}
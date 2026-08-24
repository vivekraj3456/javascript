// TODO: FOR LOOP
// Used when we know how many times the loop needs to run.
// Structure: Initialization → Condition → Increment/Decrement


// for(let i=0;i<10;i++){
//     const element=i;
//     if(element==5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }


// TODO: NESTED FOR LOOP
// A loop inside another loop.
// Commonly used for patterns, tables, and 2D data.

// for(let i=1;i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`Inner loop vale ${j} and inner loop ${i}`);
//         console.log(i+ '*' +j + '= ' + i*j);
//     }
// }


// TODO: ARRAY TRAVERSAL USING FOR LOOP
// Access each array element using its index.

// let myArr=["flash","batman","Superman"]
// for(let i=0;i<myArr.length;i++){
//     const ele =myArr[i];
//     console.log(ele);
// }


// TODO: BREAK AND CONTINUE
// break → exits the entire loop.
// continue → skips the current iteration and moves to the next one.

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         // break;
//         continue;
//     }
//     console.log(`value of i is ${index}`);
// }


// TODO: WHILE LOOP
// Used when the number of iterations is not necessarily known beforehand.
// Condition is checked before executing the loop body.

// let i=0;
// while(i<=10){
//     console.log(`value of index is ${i}`);
//     i+=2;
// }


// TODO: ARRAY TRAVERSAL USING WHILE LOOP
// Traverse an array manually using an index variable.

// let myarr=['flash',"batman","superman"]
// let arr=0
// while(arr<myarr.length){
//     console.log(`value is ${myarr[arr]}`);
//     arr+=1;
// }


// TODO: DO-WHILE LOOP
// The loop body executes at least once because the condition is checked after execution.

let score=1;
do{
    console.log(`score is ${score}`);
    score++;
}
while(score<=10);
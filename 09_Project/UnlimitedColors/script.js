const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// console.log(randomColor());
let IntervalId
const startChangingColor=function(){
    if(!IntervalId){
    IntervalId=setInterval(changeBGcolor,1000);
    }
    function changeBGcolor(){
        document.body.style.backgroundColor=randomColor();
    }
};
const stopChangingColor=function(){
    clearInterval(IntervalId);
    IntervalId=null;
};
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)


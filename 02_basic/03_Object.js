const JsUser = {
    "name": "vivek",
    course: "CSE",
    age: 23,
    isLoggedIn: true,
    location: "Jalandhar",
    email: "vivek@abc.com",
    lastLoginDays: ["Monday", "Friday"]
}
console.log(JsUser.name);
console.log(JsUser.email); 
console.log(JsUser["name"]); // another way to access object properties

JsUser.email="vivek@def.com";
// Object.freeze(JsUser) // to prevent object from further modifications
JsUser.email="vivek@ghi.com"; // this will not work
console.log(JsUser); 

JsUser.greeting=function(){
    console.log("Hello JS learner");
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS learner ${this.name}`); // this refers to current object
}
console.log(JsUser.greetingTwo());



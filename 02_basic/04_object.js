// const tinderUser=new Object(); //create an empty object using Object constructor
const tinderUser={}
    tinderUser.id="123abc"
    tinderUser.name="sammy"
    tinderUser.isLoggedin=false
    console.log(tinderUser);
    console.log("-----------")
    const regularUser={
        email: "some@gmail.com",
        fullname:{
            userFullname:{
                firstname:"vivek",
                lastname:"raj"
            }
        }
    }
    console.log(regularUser.fullname.userFullname);
    console.log("-----------")
    
    const obj1={1:"a",2:"b"}
    const obj2={3:"c",4:"d"}
    const obj3={5:"e",6:"f"}
    const newObj={...obj1,...obj2,...obj3} // merging multiple objects using spread operator
    console.log(newObj);
    console.log("-----------")

    const users=[
        {
            id:1,
            email:"abc@gamil.com"
        },
        {
            id:2,
            email:"def@gmail.com"
        },
        {
            id:3,
            email:"ghi@gmail.com"
        },
    ]
    users[1].email
    console.log(users);
    console.log(typeof users); // object bcoz array is also a type of object in JS
    console.log("-----------")

    console.log(Object.keys(tinderUser)); // returns an array of keys of the object
    console.log(Object.values(tinderUser)); // returns an array of values of the object
    console.log(Object.entries(tinderUser)); // returns an array of key-value pairs of the object
    console.log("-----------")
// returns an array of key-value pairs of the object
    console.log(tinderUser.hasOwnProperty("isLoggedin")); // checks if the object has the specified property
    console.log(tinderUser.hasOwnProperty("age")); // checks if the object has the specified property
    
    console.log("-----------")

    const course={ //object literal
        courseName:"JS Bootcamp",
        courseInstructor:"Vivek",
        coursePrice:999
    }

    //!ab baar baar courseInstructor likhne ki zarurat nahi hai, directly use kar sakte hai
    course.courseInstructor //ye bhi kaam karega, but destructuring se code clean aur readable hota hai
    // *object destructuring to extract specific property from object
    const {courseInstructor}=course 
    const {courseInstructor: instructor}=course // object destructuring with aliasing to extract specific property from object and assign it to a new variable name
    console.log(courseInstructor); 
    console.log(instructor);  //ab courseInstructor ki jagah instructor variable use kar sakte hai
    console.log("-----------")

    const {coursePrice: price}=course // object destructuring with aliasing to extract specific property from object and assign it to a new variable name
    // *courseprice ka chhota sa alias price hai, ab coursePrice ki jagah price variable use kar sakte hai
    console.log(price); //ab coursePrice ki jagah price variable use kar sakte hai
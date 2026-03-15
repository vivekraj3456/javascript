//Dates

let myDate = new Date()
console.log(myDate); // Full date and time in default format
console.log(myDate.toString()); // Full date and time in string format Sat Dec 27 2025 14:35:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Date in human-readable format Sat Dec 27 2025
console.log(myDate.toUTCString()); // Date in UTC format Sat, 27 Dec 2025 14:35:20 GMT
console.log(myDate.toLocaleString()); // Date and time in locale format 12/27/2025, 2:35:20 PM
console.log(typeof myDate); // object
console.log(myDate.getFullYear()); // 2025
console.log(myDate.getMonth() + 1); // Month (0-11, so +1 for human-readable format) 12
console.log(myDate.getDate()); // Day of the month (1-31) 27
console.log(myDate.getDay()); // Day of the week (0-6) 6
console.log(myDate.getHours()); // Hours (0-23) 14
console.log(myDate.toJSON());
console.log(myDate.toISOString()); // ISO format 2025-12-27T14:35:20.000Z
console.log(myDate.toTimeString()); // Time portion in string format 14:35:20 GMT+0000 (Coordinated Universal Time)


let myCreatedDate = new Date(2025,0,12); //YYYY,MM,DD
console.log(myCreatedDate.toDateString());  // Sun Jan 12 2025
console.log(myCreatedDate.toLocaleDateString()); // 1/12/2025

let myCreatedDate1 = new Date(2025,0,12,5,20,35); //YYYY,MM,DD,HH,mm,ss
console.log(myCreatedDate1.toLocaleString()); // 1/12/2025, 5:20:35 AM

let myCreatedDate2 = new Date("2025-09-13"); //YYYY-MM-DD
console.log(myCreatedDate2.toLocaleString()); // 9/13/2025, 12:00:00 AM

let myCreatedDate3 = new Date("09-13-2025"); //MM-DD-YYYY
console.log(myCreatedDate3.toLocaleString()); // 9/13/2025, 12:00:00 AM

//! but,DD-MM-YYYY is not supported in js date format
let myCreatedDate4 = new Date("13-09-2025"); //DD-MM-YYYY
console.log(myCreatedDate4.toLocaleString()); // Invalid Date


let myTimeStamp = Date.now(); //Timestamp in milliseconds
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));





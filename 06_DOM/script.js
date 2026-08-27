// ================================
// 1. getElementById
// ================================

const title = document.getElementById("title");

console.log(title);
console.log(title.id);
console.log(title.className);


// ================================
// 2. getAttribute
// ================================

console.log(title.getAttribute("id"));
console.log(title.getAttribute("class"));


// ================================
// 3. setAttribute
// ================================

// title.setAttribute("class", "test heading");


// ================================
// 4. Styling
// ================================

title.style.backgroundColor = "green";
title.style.padding = "15px";
title.style.borderRadius = "10px";


// ================================
// 5. Content
// ================================

console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerHTML);


// ================================
// 6. getElementsByClassName
// ================================

const listItems = document.getElementsByClassName("list-item");

console.log(listItems);
console.log(listItems[0]);


// ================================
// 7. querySelector
// ================================

console.log(document.querySelector("h1"));
console.log(document.querySelector("#title"));
console.log(document.querySelector(".heading"));
console.log(document.querySelector('input[type="password"]'));


// ================================
// 8. Parent → Child Selection
// ================================

const myUL = document.querySelector("ul");
const firstLi = myUL.querySelector("li");

firstLi.style.backgroundColor = "green";
firstLi.innerText = "Five";


// ================================
// 9. querySelectorAll
// ================================

const tempList = document.querySelectorAll("li");

console.log(tempList);

tempList.forEach((item) => {
    item.style.color = "red";
});


// ================================
// 10. HTMLCollection → Array
// ================================

const tempClassList =
    document.getElementsByClassName("list-item");

const convertedArray = Array.from(tempClassList);

convertedArray.forEach((item) => {
    item.style.backgroundColor = "orange";
});



//!  getElementById()          → ID se ek element
//!  getElementsByClassName()  → Class se HTMLCollection
//!  querySelector()           → First matching element
//!  querySelectorAll()        → All matching elements (NodeList)
//!  
//!  textContent               → Text content
//!  innerText                 → Visible text
//!  innerHTML                 → HTML with content
//!  
//!  getAttribute()            → Attribute ki value lena
//!  setAttribute()            → Attribute set/change karna
//!  
//!  Array.from()              → Collection ko Array banana
//!  forEach()                 → Multiple elements par loop
// TODO: FOREACH vs RETURN
// forEach() is mainly used for iteration and does NOT return a new array.
// Even if we return something inside its callback, the overall result is undefined.

const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })
// console.log(values);


// TODO: FILTER METHOD
// filter() creates and returns a NEW array containing elements
// that satisfy the given condition.

// const myNums = [1, 2, 4, 75, 32, 6, 7, 8, 9, 9, 2, 34]

// Implicit return → no curly braces needed
// const newNums = myNums.filter((num) => num > 4)

// Explicit return → curly braces require the return keyword
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// console.log(newNums);


// TODO: FILTER USING FOREACH (MANUAL APPROACH)
// forEach() doesn't return a new array, so we manually push matching values.
// Note: Push results into a NEW array, not the same array being iterated.

// const newNums1 = [1, 2, 4, 75, 32, 6, 7, 8, 9, 9, 2, 34]
// const filteredNums = [];

// newNums1.forEach((num) => {
//     if (num > 4) {
//         filteredNums.push(num);
//     }
// })
// console.log(filteredNums);


// TODO: FILTER ARRAY OF OBJECTS
// Common real-world use: Filter API/database data based on one or multiple conditions.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter by a single condition
// let userBooks = books.filter((bk) => bk.genre === 'History')

// Filter by multiple conditions using logical operators
// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"
// })
// console.log(userBooks);


// TODO: MAP METHOD
// map() transforms every element and returns a NEW array of the same length.
// Use it when you want to modify/transform data.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map((num) => num + 10)
// console.log(newNums);


// TODO: METHOD CHAINING
// Output of one array method becomes the input for the next method.
// Useful for performing multiple transformations in sequence.

// const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums1 = myNumbers2
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)

// console.log(newNums1);


// TODO: REDUCE METHOD
// reduce() combines all array elements into a SINGLE final value.
// Common uses: sum, total price, average, counting, etc.
// acc = accumulated result | curr = current array element
// Initial value determines the starting value of acc.

// const myTotal = myNumbers2.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

// console.log(myTotal);


// TODO: REDUCE WITH ARROW FUNCTION
// Short syntax for the same accumulation logic.

// const myTotal3 = myNumbers2.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal3);


// TODO: REAL-WORLD REDUCE - CALCULATING CART TOTAL
// Iterate through an array of objects and accumulate the price of each item.
// `0` is the initial accumulator value.

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
);

console.log(priceToPay);

// TODO: FORMAT NUMBER FOR INDIAN CURRENCY DISPLAY
console.log(`Total Price: ₹${priceToPay.toLocaleString("en-IN")}`);
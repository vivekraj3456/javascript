// -------------------------------
// *1. Normal Function Declaration
// -------------------------------

// Function declare kiya
function abc() {
    console.log("vivek1");
}
// Function ko manually call kiya
abc();

// -------------------------------
// *2. IIFE (Immediately Invoked Function Expression)
// -------------------------------

// Function define hote hi turant execute ho jayega
(function abc() {
    console.log("vivek2");

// -------------------------------
// *3. Arrow Function IIFE
// -------------------------------

// Arrow function ko define karte hi execute kiya
(()=>{
    console.log("vivek3")
})();


// -------------------------------
// *4. IIFE with Parameter
// -------------------------------

// 'college' parameter me "LPU" pass kiya gaya
((college)=>{
    console.log(`${college}, vivek4`)
})('LPU')



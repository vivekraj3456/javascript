const accountId = 123456;
let accountEmail = "vivekraj123@gmail.com";
let accountPassword = "1234567890"; 
let accountCity = "Jalandhar";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
accountEmail="abc123@gmail.com";
accountPassword=" newpassword123";
accountCity="New York";
console.table({ accountEmail, accountPassword, accountCity});

let accountState;
console.log(accountState); // Output: undefined bcoz variable is declared but not initialized

accountState="Punjab";
console.log(accountState); // Output: Punjab bcoz variable is now initialized with a value


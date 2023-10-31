const accountId = 9393
let accountEmail = "deepak@gmail.com"
var accountPassword = "test123"
accountCity = "Bengaluru"
let accountState; //--> bydefault in javascript values will be undefined if it is not initialized


// accountId = 0099;  TypeError: Assignment to constant variable.
//console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
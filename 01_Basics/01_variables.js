const accountId = 1234;
let accountEmail = "Shivani@gmail.com"
var accountPassword = "1234@12"
accountCity = "Mumbai"
let accountState;

//accountId = 2;   //not allowed

accountEmail = "abc@abc.com"
accountPassword = "123212"
accountCity = "Pune"

console.log(accountId);
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
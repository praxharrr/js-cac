const accountId = 123456;
let accountEmail = "ps6165215@gmail.com";
var accountPassword = "my_password_123";
accountCity = "New York";
let accountState;

// naccountId = 654321; // This will cause an error because accountId is a constant
console.log(accountId);

accountEmail = "sc@gmail.com";
accountPassword = "new_password_456";
accountCity = "Los Angeles";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*we should use const when we don't want the variable to be reassigned, let when we want to reassign the variable, and avoid using var to prevent scope-related issues.*/
/*we should not use var to declare variables because it is function-scoped and can lead to unexpected behavior due to hoisting. Instead, we should use let and const, which are block-scoped and provide better control over variable scope and reassignment.*/

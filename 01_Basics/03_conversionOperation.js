let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN      //NotaNumber
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggenIn = Boolean(isLoggedIn)
console.log(booleanIsLoggenIn);

//1 =
// 1 => true 
// 0 => false
// "shivani"

console.log("1" + 2 + 2);       //if string appears in first position then all other will consider as string
console.log(1 + 1 + "2");       //if string is at last it will add first number and then concate it with string

console.log(true);              //o/p : true
console.log(+true);             //o/p : 1

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
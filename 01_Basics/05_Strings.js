const name = 'Shivani'      //String Declaration
const repoCount = 50

// console.log(name + repoCount + " Value");       //OutDated Syntax

console.log(`Hello my name is ${name} and repoCount is ${repoCount}`);

const gameName = new String('ShivaniP')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 2);
console.log(anotherString);

const newStringOne= "            Shivani  ";
console.log(newStringOne);
console.log(newStringOne.trim());       //removes extra spaces

const url = "https://shivaniP.com/shivani%20P";
console.log(url.replace('%20', '-'));

console.log(url.includes('shivani'));

console.log(gameName.split('-'));
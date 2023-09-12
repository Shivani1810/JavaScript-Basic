//  1.Primitive Type

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('125')

console.log(id === anotherId);

const BigNumber = 1344765373882n;

//  2.Reference Type

// Array, Objects, Functions

const heros = ["Abdul Kalam", "Zakir Khan", "Dhoni"];

let obj = {
    name: "Shivani",
    age: 21
}


const myFunction = function(){
        console.log("Hello World!");
}

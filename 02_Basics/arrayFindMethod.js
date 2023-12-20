// Array Find() function : returns the first element in the provided array that
// satisfies the provided testing function
const array1 = [4, 2, 6, 7, 8, 9, 10, 11];
const found = array1.find((element) => element > 7);
console.log(found);  // output : 8

//Find an object in an array by one of its properties

const Inventory = [
    {name: "Apples", quantity:2},
    {name: "Bananas", quantity:5},
    {name: "cherries", quantity: 8}
];

function isCherries(fruit){
    return fruit.name === "cherries";
}

console.log(Inventory.find(isCherries));    

//Using arrow function and destructuring

const Inventory1 = [
   {name: "apples", quantity:3},
   {name: "Bananas", quantity:6},
   {name: "cherries", quantity:7}
];

const result = Inventory1.find(({name}) => name === "cherries");
console.log(result);

//findIndex() = returns the index of the first element in an array that satisfies 
// the provided testing function. If no elements satisfy the testing function, -1 is returned.

const arr1 = [5, 12, 45, 23, 130, 44];
const isLargerNum = (element) => element > 13;

console.log(arr1.findIndex(isLargerNum));  // output : 2


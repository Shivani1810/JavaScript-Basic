// Arrays

const myArr = [0, 1, 2, 3, 4, 5, 6]

// console.log(myArr)
// console.log(myArr[0])

//Array Methods

// myArr.push(7);
// myArr.push(8);

// myArr.pop();

// myArr.unshift(9);       //inserts elements at the start of array and shifts all elements to right
// myArr.shift();
// myArr.shift();          // removes element from start
// console.log(myArr);


// const newArr = myArr.join();        // binds array in string format

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);         //string


// Slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);          // returns the content mentioned between first and last index - 1
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)         // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("C", myArr);
console.log(myn2);
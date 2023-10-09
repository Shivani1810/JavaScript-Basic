const user = {
    username: "Shivani",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to wesite`);         //here this refers to current context.
        console.log(this);                                          //here thisrefers to current object in scope
    }
}
// user.welcomeMessage();
// user.username = 'Hitesh';
// user.welcomeMessage();

// console.log(this);                  // here this refers to empty object as its defined in global
                                    // *** but if we are checking this in the brower then it will show 
                                    // as winodw object

// function one(){
//     let username = "Shivani";
//     console.log(this.username);
// }
// one();                              //this will give output as 'undefined' because this keyword will not 
                                    // work in case of functions


const two = function(){
    let username = "Shivani";   
    console.log(this.username);         
}
two();                              // this will also give output as 'undefined

 
// ARROW FUNCTION

const three = () => {
    let username = 'Shivani';
    console.log(this);
}

three();                    // {} - empty object

const addTwo = (num1, num2) => {
    return num1 + num2;             //explicit return
}

console.log(addTwo(2, 3));

// Implicit return -> means we dont have to write {} around function body and also return keyword

const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(4, 5));

const addTwoN = (num1, num2) => ( num1 + num2 );
console.log(addTwoN(3., 4));

// to return a object using arrow function we have to wrap object inside ()

const name = (num1, num2) => ({username: 'Shivani'});

console.log(name(1, 3));
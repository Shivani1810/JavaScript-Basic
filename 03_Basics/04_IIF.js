// Immediately Invoked Function Expressions
//  An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// mmediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope
//  the power of IIFEs and how they can enhance code organization, protect variables, and prevent naming collisions. 

(function one(){
    console.log(`DB CONNECTED`);
}) ();                              // here to stop the execution of the function we have to give ';'

(function two(){                    // NAMED IIFE
    console.log(`DB CONNECTED 2`);
})();

(() =>{                             //UNNAMED IIFE
    console.log(`CONNECTED`);
})();

((name) => {                                // Parameterised IIFE
    console.log(`DB CONNECTED ${name}`);
})('Shivani');

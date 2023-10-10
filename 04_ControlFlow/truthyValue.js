const userEmail = []

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Dont have user email");
}

//falsy Value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Value
// "0", "false", " ", [], {}, function(){}

//To check array is empty or not

    if(userEmail.length === 0){
        console.log("Array is empty");
    }

//To empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

/*
    false == 0
  >>true
    false == ''
  >>true
    0 == ''
  >>true
*/

//Nullish Coalescing Operator (??): null, undefined
let val1, val2;
val1 = 5 ?? 10
 console.log(val1);         //here it will print 5 because it will check first null is there or not and it will give first notnull to the variable
 
 val2 = null ?? 10;
 console.log(val2);         //it will print 10 because it takes not null value

 // val1 = undefined ?? 10

 //Ternary Operator

 // condition ? true : false
 const Price = 100
 Price <= 80 ? console.log("less than 80") : console.log("greater than 80");
 

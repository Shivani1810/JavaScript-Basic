//Javascript Objects: - One of Js data types
//                    - Stores various Keyed collections and more complex entities
//                    - there are 2 ways to declare an object 1.Literal objects  2. Constructor methods
//
// Using Literal Objects----

const mySym = Symbol("key1")        //Symbol declartion

const JsUser = {
    name: "Shivani",
    "full name": "Shivani P",
    [mySym]: "mykey1",              // to define symbol you have to give square bracket to the var
    age: 18,
    location: "Mumbai",
    email: "Shivani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

console.log(typeof [mySym]);

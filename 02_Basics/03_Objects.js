//Singleton

//object literal

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

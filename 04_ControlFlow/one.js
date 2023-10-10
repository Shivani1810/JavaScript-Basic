// if
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("Logged In");
}

const temperature = 41

if(temperature === 41){
    console.log("less than 50");
}
else{
    console.log("Greater than 50");
}

console.log("Executed");

const balance = 1000;

// if(balance > 500) console.log("test"), console.log("tes2");

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less tha 750");
}else if(balance < 900) {
    console.log("less than 900");
}else
{
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("allow to buy courses");
}


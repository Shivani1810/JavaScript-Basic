const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )


const greetings = "Hellow world!";
for (const greet of greetings) {
    if(greet === ' ')
        continue;
    console.log(`each character in greetings is ${greet}`);
    
}

const map = new Map();
map.set('IN', "India");
map.Set('US', "United State");
map.set('FR', "France");

for(const [i, j] of map)
{
    console.log(i, j);
} 


for(const key of map){
    console.log(key);
}
/* output
['IN', 'India']
['US', 'United state']
['FR', 'France']
*/

for(const [key, value] of map){
    console.log(key, ':-', value);
}

/*
IN :- India
US :- United state
FR :- France
*/

//Can we apply for loop on Object ? =>

const myObject  = {
    'game1' : "Cricket",
    'game2' : "Football"
}

for(const [key, value] in myObject){            //for in loop is used to iterate through objects
    console.log(key, value);
}
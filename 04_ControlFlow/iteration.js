// for

for(let i = 0; i <= 10; ++i){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

for(let i = 0; i <= 10; ++i){
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j <= 10; ++j){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

let myarray = ["Flash", "IronMan", "BatMan", "Captain America"]

for(let i = 0; i < myarray.length; ++i){
    console.log(myarray[i]);
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 0; i <= 10; ++i){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
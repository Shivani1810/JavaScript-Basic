const myArr = [1, 2,3 ,4,5,6,7,8,9,10,11,12];

function isPrime(num){
    for(let i = 2; i < num; i++)
    {
        if(num % 1 === 0){
            return false;
        }
    }
    return num > 1;
}
console.log(myArr.filter(isPrime)); //

const word = ["Shivani", "Ajay", "Shweta", "Sayali", "Vijay", "Neelam"];
const result = word.filter((word) => word.length > 5);
console.log(result); 
// output : ['Shivani', 'Shweta', 'Sayali', 'Neelam' 



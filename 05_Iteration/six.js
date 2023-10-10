const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "Python",
        price: 2000
    },
    {
        itemName: "Data Science",
        price: 3000
    },
    {
        itemName: "Mobile dev",
        price: 4000
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay);
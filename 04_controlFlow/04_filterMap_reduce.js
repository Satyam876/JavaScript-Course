const coding = ['js', 'cpp', 'python', 'sql']

const values = coding.forEach( (item)=>{                         // for-each loop doesn't return any values
    // console.log(item)
    return item
})

// console.log(values)                // -> undefined


// 1. FILTER 


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]             // To Return values -> filter()

const myNums = myNumbers.filter((num) => {
        return num > 4
})

// console.log(myNums)


const books = [
    {title : "Book One", genre : "Fiction", publish : 1981, edition : 2004},
    {title : "Book Two", genre : "Non-Fiction", publish : 1992, edition : 2002},
    {title : "Book Three", genre : "History", publish : 1999, edition : 2010},
    {title : "Book Four", genre : "Non-Fiction", publish : 1989, edition : 2006},
    {title : "Book Five", genre : "Science", publish : 1994, edition : 2008},
    {title : "Book Six", genre : "Fiction", publish : 1983, edition : 2007},
    {title : "Book Seven", genre : "History", publish : 2005, edition : 2021},
    {title : "Book Eight", genre : "Science", publish : 1988, edition : 2018},
    {title : "Book Nine", genre : "Non-Fiction", publish : 2001, edition : 2023}
]

const myBooks = books.filter( (book) => {
    return (book.genre === "History")
})

// console.log(myBooks)

const publishedBooks = books.filter( (book) => {
    return (book.publish >= 2000)
})

// console.log(publishedBooks)



//      2. MAP

const myNumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNum1 = myNumber1.map( (num)=>{
    return num + 10
})

// console.log(myNum1)

// CHAINING

const myNum2 = myNumber1
                .map( (num)=> num*10)
                .map( (num)=> num+1)
                .filter( (num) => num > 50)

// console.log(myNum2)


//       3. REDUCE 

const numArray = [1, 2, 3, 4, 5]

const sumTotal = numArray.reduce( (accumulator, currentValue) => {
    // console.log(`Accumulator : ${accumulator} and Current Value : ${currentValue}`)
    return accumulator + currentValue
}, 0)                                                                       // Here 0 is the initial value of accumulator

// console.log("Sum Total : ", sumTotal)



const shoppingCart = [
    {
        productName : "Jeans",
        price : 2999 
    },
    {
        productName : "SweatShirt",
        price : 1999
    },
    {
        productName : "Nike Sneaker",
        price : 9000
    },
    {
        productName : "Parachute Pants",
        price : 1599
    },
    {
        productName : "Leather Jacket",
        price : 5999
}]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
},0)

console.log("Total Bill Amount : ", priceToPay)

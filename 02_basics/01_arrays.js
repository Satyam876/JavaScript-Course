// Array Declaration

const myArray = [1,2,3,4,5]
// console.log(myArray)

const myArray2 = new Array(10,20,30,40,50)
// console.log(myArray2)

const myHeroesArray = ["Batman", "Spiderman", "Superman", "Homelander"]
// console.log(myHeroesArray)
// console.log(myHeroesArray[3])


myArray.push(99)  
// console.log(myArray)

myArray.push(100)
myArray.pop()
// console.log(myArray)


myArray.unshift(17)                          // -> Includes the element at the starting of Array
// console.log(myArray)

// console.log(myArray.includes(99))
// console.log(myArray.indexOf(2))

const newArray = myArray.join()
// console.log(newArray)
// console.log(typeof newArray)




/*                           #####################  SLICE & SPLICE ####################     -> Very Important */

const arr = new Array(0,1,2,3,4,5)

console.log("A ", arr)
console.log(arr.slice(1,3))          // SLICE  -> Starting Index is Included and Ending Index is not included

console.log("B ", arr)
console.log(arr.splice(1,3))        // SPLICE  -> Starting & Ending Index both inclusive & Important -> It removes the sliced part from original array. 

console.log("C ", arr)
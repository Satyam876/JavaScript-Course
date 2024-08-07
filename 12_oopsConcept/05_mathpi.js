const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)



// MATH.PI value can't be changed because:
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,       
//     configurable: false      
//   }


// ** Now we can create our own object whose property can be changed **//

const myObj = {
    name : "chai",
    price : 250,
    isAviabale : true
}

console.log(myObj)

console.log(Object.getOwnPropertyDescriptor(myObj, "name"))        // This myObj name property can be changed
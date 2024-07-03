// FOR LOOP

const array = [1, 2, 3, 4, 5]

// for(let index = 0; index < array.length; index++)
// {
//     console.log(array[index])
// }

// BREAK STATEMENT

// for(let i=1; i <= array.length; i++)
//     {
//         if(i == 5)
//             {
//                 console.log("Value 5 encountered !!");
//                 break;
//             }
//         console.log("Value of i : ", i);
//     }

// CONTINUE STATEMENT

// for(let i=1; i <= array.length; i++)
//     {
//         if(i == 5)
//             {
//                 console.log("Value 5 encountered !!");
//                 continue;
//             }
//         console.log("Value of i : ", i);
//     }


// WHILE - LOOP

let myArray = ['flash', 'batman', 'spiderman']

let i = 0;

while(i < myArray.length)
    {
        console.log(`SuperHero ${i} :  ${myArray[i]}`)
        i++;
    }


// DO-WHILE LOOP

let score = 1;

do{
    console.log(`Score is : ${score}`);
    score++;
}
while(score <= 10);
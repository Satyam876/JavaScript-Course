"use strict";      // Treat all JS Codes as newer version.

let name = "Satyam Kumar"
let age = 21
let isLoggedIn = true;
let state;

console.table([name, age, isLoggedIn]);

console.table([typeof(name), typeof(age), typeof(isLoggedIn), typeof(state)])

console.log(typeof(null))         // type -> object
console.log(typeof(undefined))    // type -> undefined


// In the early implementation of JavaScript, values were represented as a type tag followed by the actual value. The type tag for objects was 0. Since null was represented as the null pointer (0x00 in most platforms), it ended up having the same type tag (0) as objects, resulting in typeof null being "object".
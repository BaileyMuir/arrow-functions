/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addtwonumbers(a, b) {
//     return a + b;
// }

// let sum = addtwonumbers(20, 7);
// console.log(sum);

// Arrow Function With Parameters

const addtwonumbers = (a, b) => {
    return a + b;
}
let sum = addtwonumbers(20, 9);
console.log(sum);

// Single Line Arrow Function With Parameters

const addtwonumbers2 = (a, b) => a + b;
let sum2 = addtwonumbers2(74, 33);
console.log(sum2)

// Implicit Returns

const saysomething = message => console.log(message);
saysomething("Hello there")

const sayhello = () => console.log("hello");
sayhello();
// Returning Multiple Lines

const returnmoultilinestring = () => (
    `<p>
    This is a multi line string!
    </p>`
)
console.log(returnmoultilinestring());

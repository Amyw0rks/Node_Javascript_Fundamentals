// Important JavaScript fundamentals
// 1. Variables
// 2. functions
// 3. Object/Arrays
// 4. Conditionals
// 5. Loops
// 6. Callbacks/Promises
// 7. Modules
// 8. HTTP Basics

// lets work with basic JavaScript Syntax
const name = "Ameera"
let age = 25

console.log(name)
console.log(age)
console.log(`she is ${name} by name and ${age} years old.`)

//Use function
function greet(){
    console.log("Hello TechCrush")
}

//A function doesn't work until you call it out
greet()

// Understanding data types - Strings,numbers,booleans,
//1. arrays and objects
const user = {name: "Ameera", age: 20}; //Object uses curly bracket
//assesing objects
console.log(user.name)

const colors = ["red","blue","green"];  //arrays use block brackets
console.log(colors[0])

console.log(user)
console.log(colors)

//2. Control flow
// if ... else statements
var myAge = 20
if (myAge> 18){
    console.log("Adult")
}else{
    console.log("Minor")
}

//Loop (for, while)
for (let i=0; i < 5; i++){
    console.log(i)
}

//3. Functions and Arrow Functions
// normal function
function add(a, b){
    return a + b;
}

console.log(add(20, 50))

// Es6 Arrow Function
const multiply = (a, b) => a * b
console.log(multiply(10,10))

//4. Callbacks, Promises and Async/Await
// Callback examples
 setTimeout(() => {
    console.log("Hello after 2 seconds")
 }, 2000)
setTimeout(() => {
    console.log("Hello after 1 seconds")
 }, 1000)

 // Promise example
 const promise = new Promise((resolve) =>
resolve("Done"))
promise.then((result) =>
console.log(result))

//Async/Await example
async function greetMe(){
    const message = await Promise.resolve("Hello Async");
    console.log(message)
}

greetMe()
/*// Little assesment
//List of students and their scores
const students =[
    {name: "Mary", score: 80}
    {name: "Adam", score: 70}
    {name: "Sally", score: 78}
    {name: "John", score: 82}
    {name: "Gary", score: 76}
];*/




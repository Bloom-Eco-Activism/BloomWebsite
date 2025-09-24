// =======================================================
// 🌱 JavaScript Basics for React / Next.js
// =======================================================
// This file is a tutorial for Javascript which React / Next.js is built on
// =======================================================


// -------------------------------------------------------
// 1. VARIABLES & DATA TYPES
// -------------------------------------------------------
// JavaScript can store data in variables.
// Use "const" when the value won't change,
// and "let" when it might change later.

//const myName = "Lara";   // string (text)
//let age = 19;                // number
//const isStudent = true;      // boolean (true/false)

// typeof shows what "kind" of value a variable holds
//console.log("Type of myName:", typeof myName);  // string
//console.log("Type of age:", typeof age);        // number
//console.log("Type of isStudent:", typeof isStudent);  // boolean


// -------------------------------------------------------
// 2. ARRAYS
// -------------------------------------------------------
// Arrays = lists of values, ordered by index (0-based).
// They let you group data together.

//const fruits = ["apple", "banana", "cherry"];

//console.log("First fruit:", fruits[0]);  // apple
//console.log("How many fruits?", fruits.length);  // 3


// -------------------------------------------------------
// 3. OBJECTS
// -------------------------------------------------------
// Objects = key:value pairs. Think of them like a "dictionary".
// They're everywhere in JavaScript AND React (props, state, etc).

//const user = {
//  name: "Bloom",
//  age: 19,
//  role: "developer"
//};

//console.log("User object:", user);
//console.log("User name:", user.name);   // dot notation
//console.log("User role:", user["role"]); // bracket notation


// -------------------------------------------------------
// 4. FUNCTIONS
// -------------------------------------------------------
// Functions = reusable "mini-programs". They take input (parameters)
// and return output (a value). In React, components are functions.

//function greet(name) {
//  return `Hello, ${name}!`;
//}

//console.log(greet("Marjorie"));


// -------------------------------------------------------
// 5. LOGIC & FLOW
// -------------------------------------------------------
// Programs often need to make decisions.
// We use if/else, comparison operators, and switch.

//if (age >= 18) {
//  console.log("You are an adult ✅");
//} else {
//  console.log("You are a minor ❌");
//}

//const score = 85;
//switch (true) {
//  case score >= 90:
//    console.log("Grade: A");
//    break;
//  case score >= 80:
//    console.log("Grade: B");
//    break;
//  default:
//    console.log("Grade: C or below");
//}


// -------------------------------------------------------
// 6. ARRAY METHODS (SUPER IMPORTANT FOR REACT)
// -------------------------------------------------------
// Instead of loops, we often use "array methods".
// These are critical in React (e.g., rendering lists).

///const numbers = [1, 2, 3, 4, 5];

// map() = transform each item into something new
//const doubled = numbers.map(num => num * 2);
//console.log("Doubled:", doubled);  // [2,4,6,8,10]

// filter() = keep only items that match a condition
//const evens = numbers.filter(num => num % 2 === 0);
//console.log("Evens:", evens);  // [2,4]

// find() = first item that matches
//const firstEven = numbers.find(num => num % 2 === 0);
//console.log("First even:", firstEven);  // 2


// -------------------------------------------------------
// 7. DESTRUCTURING
// -------------------------------------------------------
// Destructuring = unpack values from objects or arrays.
// This makes code cleaner.

// const car = { make: "Tesla", model: "Model 3", year: 2022 };
// const { make, model } = car; // pull out keys

//console.log("Car make:", make);   // Tesla
//console.log("Car model:", model); // Model 3

//const colors = ["red", "green", "blue"];
//const [firstColor, secondColor] = colors; // pull out by position

//console.log("First color:", firstColor);   // red
//console.log("Second color:", secondColor); // green


// -------------------------------------------------------
// 8. MODULES (IMPORT / EXPORT)
// -------------------------------------------------------
// In real projects, code is split across files.
// - "export" lets one file share code.
// - "import" lets another file use it.
// (React components rely on this!)

/*
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./math.js";
console.log(add(2, 3));
*/


// -------------------------------------------------------
// 9. EVENTS & CALLBACKS
// -------------------------------------------------------
// Functions can be passed into other functions as arguments.
// React uses this for things like onClick handlers.

//function doSomething(callback) {
//  console.log("Doing something...");
//  callback(); // run the function passed in
//}

//doSomething(() => console.log("This runs after the first thing"));


// -------------------------------------------------------
// 10. ASYNC & FETCH
// -------------------------------------------------------
// JavaScript is asynchronous: it can fetch data from the web
// without freezing the page. React apps use this constantly.

//async function fetchPosts() {
  // fetch() asks a URL for data
//  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");
  // .json() converts response into usable JS objects
//  const posts = await res.json();
//  console.log("Fetched posts:", posts);
//}

//fetchPosts();

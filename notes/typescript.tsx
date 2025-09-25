// =======================================================
// 🌱 TypeScript Basics for React / Next.js
// =======================================================

// https://www.geeksforgeeks.org/typescript/typescript-cheat-sheet/

// -------------------------------------------------------
// 1. BASIC TYPES
// -------------------------------------------------------
//let myName: string = "Marjorie"; // must be text
//let age: number = 19;            // must be a number
//let isStudent: boolean = true;   // must be true/false
//vgtvgt5vbgt5
//console.log("Name:", myName, "| Age:", age, "| Student?", isStudent);

// Try this (will error in TS, but JS would allow it):
// age = "nineteen"; // ❌ error: string not assignable to number


// -------------------------------------------------------
// 2. ARRAYS
// -------------------------------------------------------
// Add [] after the type to say "array of ___".
//let fruits: string[] = ["apple", "banana", "cherry"];
//let scores: number[] = [95, 88, 76];

//console.log("First fruit:", fruits[0], "| First score:", scores[0]);


// -------------------------------------------------------
// 3. OBJECTS & TYPES
// -------------------------------------------------------
// Define the "shape" of an object.
//type User = {
//  name: string;
//  age: number;
//  isAdmin: boolean;
//};

//let user1: User = { name: "Bloom", age: 19, isAdmin: false };

//console.log("User:", user1);


// -------------------------------------------------------
// 4. FUNCTIONS
// -------------------------------------------------------
// TypeScript can define types for parameters and return value.

//function add(a: number, b: number): number {
//  return a + b;
//}

//console.log("Add:", add(2, 3));

// Arrow function version
//const greet = (name: string): string => `Hello, ${name}`;
//console.log(greet("Lara"));


// -------------------------------------------------------
// 5. OPTIONAL & DEFAULT VALUES
// -------------------------------------------------------
// Add ? to mark a parameter as optional.

//function logMessage(message: string, prefix?: string) {
//  console.log(prefix ? `${prefix}: ${message}` : message);
//}

//logMessage("Hello world");          // no prefix
//logMessage("Server started", "LOG"); // with prefix


// -------------------------------------------------------
// 6. UNION TYPES
// -------------------------------------------------------
// A variable can be one of several types.

//let id: string | number;

//id = 123;        // ✅ allowed
//id = "abc123";   // ✅ allowed
// id = true;    // ❌ error: boolean not allowed


// -------------------------------------------------------
// 7. INTERFACES
// -------------------------------------------------------
// Interfaces are like type aliases, but often used for objects.

//interface Product {
//  id: number;
//  name: string;
//  price: number;
//}

//let book: Product = { id: 1, name: "Intro to TS", price: 19.99 };

//console.log("Book:", book);


// -------------------------------------------------------
// 8. GENERICS (advanced, but powerful)
// -------------------------------------------------------
// Generics = flexible "type variables".
// Example: a function that works on ANY array type.

//function getFirst<T>(arr: T[]): T {
//  return arr[0];
//}

//console.log("First fruit:", getFirst(fruits)); // string
//console.log("First score:", getFirst(scores)); // number


// -------------------------------------------------------
// 9. TYPE ASSERTIONS
// -------------------------------------------------------
// Sometimes you KNOW a variable type but TS can't tell.
// Use "as" to assert the type.

//let someValue: unknown = "Hello TypeScript";
//let lengthOfString: number = (someValue as string).length;

//console.log("Length of string:", lengthOfString);


// -------------------------------------------------------
// 10. ENUMS
// -------------------------------------------------------
// Enums = a set of named constants.

//enum Direction {
//  Up,
//  Down,
//  Left,
//  Right
//}

//let move: Direction = Direction.Up;
//console.log("Move direction:", move); // 0 (index of Up)
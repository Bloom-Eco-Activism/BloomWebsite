// components folder is where we are keeping reusable bits of UI like Navbar, Footer, ArticleCard

/* some notes while we learn:
we are creating with next.js - a web framework built on React
React itself uses JavaScript, but we're using TypeScript instead (.tsx) because it catches errors earlier
.tsx = react components written in Javascript with JSX + Typescript

every UI piece we build (a Navbar, Footer, Button) is a function that returns JSX
ex:
function Navbar() { -> defines a React component
  return ( -> tells React what to draw on the screen
    <nav>
      <p>I am a navbar!</p>
    </nav>
  )
} -> looks like HTML code, but its JSX (Javascript that compiles to HTML)

export default Navbar; -> we can export the function and that lets us "import" anywhere else in the app

we will be using Next.js's Link instead of <a> for faster navigation because <a> reloads the whole page
Next.js wraps every page with a layout.tsx. by putting <Navbar /> in there, it shows up on all pages automatically
so for ex. Navbar is the first component, its just a function that returns some JSX and we'll plug it into the global layout

Core: JavaScript (the web’s scripting language)
Flavor: TypeScript (JavaScript + type safety)
Syntax extension: JSX (JavaScript that looks like HTML, used for React)
Framework: React (library for building UI) + Next.js (adds routing, server stuff, optimizations)
Javascript -> with TypeScript -> written in JSX -> inside React/Next.js
*/

/* What is JavaScript?
- high level, interperted programming language
- unlike Java. Java is a compiling language, meaning it needs to be compiled by a compiler
- multi-paradigm
- runs on the client/browser as well as on the server (Node.js)

- it is the programming language of the browser
- build very interactive UI with frameworks like React
- used in building very fast server side and full stack applications
- used in mobile development (React Native, Native Script, Ionic)
- used in desktop application development (Electron JS)

- src = 'main.js'
- console.log('Hello World'); -> shows messages in console of browser
- console.error('This is an error');
- console.warn('This is a warning');

var = globally scoped variables
let = lets you reassign variables
cont = cannot be reassigned

always use const unless you know you are going to reassign the value

DATA TYPES
string, numbers, boolean, null, undefined, symbols

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; -> this is undefined

const name = "Bloom";
const age = 19;
const user = { name, age };

console.log(`Hello ${user.name}, age ${user.age}`);


console.log(typeof name); -> returns the type of data type

CONCATENATION
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
console.log(s.length); -> this is a property which doesnt require paranthesis, length() is a function

ARRAYS
const fruits = ['apples', 'oranges', 'pears'];
you can put whichever kinds of data in one array

OBJECT LITERALS
const todos = [
  {
  id: 1,
  text: 'Take out trash',
  isCompleted: true
  },
  {
  id: 2,
  text: 'Meet with boss',
  isCompleted: true
  },
  {
  id: 3,
  text: 'Dentist appt',
  isCompleted: false
  }
]
  -> these are all objects
console.log(todos[1].text);

JSON
very similar to javascript
used to send to a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

LOOPS
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for(let todo of todos) {
  console.log(todo.text);
}

let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i});
  i ++;
}

todos.forEach(function(todo)){
  console.log(todo.text);
}

const todoText = todos.map(function(todo) {
  return todo.text;
});

console.log(todoText);

*/
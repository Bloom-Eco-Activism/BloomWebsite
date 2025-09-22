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
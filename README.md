- [Introduction](#org2a895c3)
  - [What is React?](#org90c9547)
  - [Why React?](#org26d3ccb)
  - [Single Page Applications / Multi Page Applications](#orge8b7839)
- [Refreshing Next Generation Javascript](#org0f50fb1)
  - [&ldquo;let&rdquo; and &ldquo;const&rdquo;](#org7ce9c53)
  - [Arrow Functions](#org98bf8d3)
  - [Exports & Imports (Modules)](#org6ed8ae3)
  - [Classes](#org04314ab)
  - [Classes, Properties and Methods](#org2954ddb)
  - [Spread and Rest Operator](#orgb096081)
  - [Destructuring](#org879f54a)
- [Understanding the Base Features & Syntax](#org0c575c8)
  - [Using a Build Workflow](#org811d126)
- [Working with Lists and Conditionals](#orgd428b4a)
  - [JSX](#orgd53e658)
  - [Components](#org5ec40df)
- [Styling React Components & Elements](#org7ce0b31)
- [Debugging React Apps](#org4640627)
- [Diving Deeper into Components & React internals](#org2dbbca6)

---


<a id="org2a895c3"></a>

# Introduction


<a id="org90c9547"></a>

## What is React?

&ldquo;A javascript Library for building User Interfaces&rdquo;

A browser side javascript framework - no need for server side rendering

user Interfaces - Components - enable flexibility and reusibility by constructing small modular pieces of code


<a id="org26d3ccb"></a>

## Why React?

-   UI State becomes difficult to handle with Vanilla Javascript
-   Focus on Business Logic, not on preventing your App from exploding
-   Huge Ecosystem, Active Community, High Performance


<a id="orge8b7839"></a>

## Single Page Applications / Multi Page Applications

-   Single Page Applications - Only ONE HTML Page, Content is (re)rendered on Client - Typically only ONE ReactDOM.render() call

-   Multi Page Applications - Multi HTML Pages, Content is rendered on Server - One ReactDOM.render() call per &ldquo;widget&rdquo;


<a id="org0f50fb1"></a>

# Refreshing Next Generation Javascript


<a id="org7ce9c53"></a>

## &ldquo;let&rdquo; and &ldquo;const&rdquo;

-   var - creates a variable in javascript

-   let - variable values
-   const - constant values


<a id="org98bf8d3"></a>

## Arrow Functions

> Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword

> Normal Javascript Function Syntax

```javascript
    function myFnc(arg) {
        console.log(arg);
    }
```

> Arrow Function Syntax

```javascript

    // if there is just one argument the parenthesis can be omitted, but if there is none or multiple arguments they must be present

    const myFnc = (arg) {
        console.log(arg);
    }
```


<a id="org6ed8ae3"></a>

## Exports & Imports (Modules)

> person.js

```javascript
    const person = {
    name: 'Max'
    }

exports default person
```

> utility.js

```javascript
    export const clean = () => {...}
    export const baseData = 10;
```

> app.js

```javascript
// default export
import person from './person.js'
import prs from './person.js'

// named export
import { baseData } from '.utility.js'
import { clean as cln } from './utility.js' // using an alias
import * from './utility' // importing all using an alias from module
```


<a id="org04314ab"></a>

## Classes

```javascript
// class declaration
class Human {

    let gender;

    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }

}

// Inheritance
class Person extends Human {

    let name;

    constructor() {
        super();
        this.name = 'user';
    }

    printUserName() {
    console.log(this.name)
    }
}

// class usage
const somePerson = new Person()

somePerson.printUserName();
somePerson.printGender();
```


<a id="org2954ddb"></a>

## Classes, Properties and Methods

-   Properties are like &ldquo;variables attached to classes/objects&rdquo;

```javascript
// ES6
constructor() {
this.property = "value";
}

//ES7
this.property = "value";
```

-   Methods are like &ldquo;functions attached to classes/objects&rdquo;

```javascript
// ES6
someMethod () { ... }

//ES7
someMethod = () => { ... }
```

```javascript
// class declaration
class Human {

    let gender = 'male'

    printGender = () => {
        console.log(this.gender);
    }

}

// Inheritance
class Person extends Human {

    name = "user"
    gender = "female"

    printUserName() {
    console.log(this.name)
    }
}

// class usage
const somePerson = new Person()

somePerson.printUserName();
somePerson.printGender();

```


<a id="orgb096081"></a>

## Spread and Rest Operator

-   Spread - Used to split up array elements or object properties

```javascript
const newArray = [...oldArray, 1, 2];

const newObject =  { ...oldObject, newProp: 5 };
```

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]
```

-   Rest - Used to merge a list of function arguments into an array

```javascript
function sortArgs(args) {
    return args.sort()
}
```

```javascript
const person = {
name: 'Doe'
};

const newPerson =0 {
...person,
age: 20
};
```


<a id="org879f54a"></a>

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
// Array Destructuring
[a, b] = ['Hello', 'Max']
```

```javascript
{name} = {name: 'Doe', age: 20}
```


<a id="org0c575c8"></a>

# Understanding the Base Features & Syntax


<a id="org811d126"></a>

## Using a Build Workflow

**Why?**

-   Recommended for SPAs and MPAs
-   Optimize Code
-   Use Next-Gen JavaScript Features
-   Be more Productive

**How?**

-   Use Dependency Management Tool (npm or yarn)
-   use Bundler (recommended: Webpack)
-   Use Compoler (Next-Gen JavaScript) Babel + presets
-   Use a Development Server


<a id="orgd428b4a"></a>

# Working with Lists and Conditionals


<a id="orgd53e658"></a>

## JSX


<a id="org5ec40df"></a>

## Components

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core. A typical React app therefore could be depicted as a component tree - having one root component (&ldquo;App&rdquo;) and then an potentially infinite amount of nested child components. Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

-   Functional Components (also referred to as &ldquo;presentational&rdquo;, &ldquo;dumb&rdquo; or &ldquo;stateless&rdquo; components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

-   Class Components (also referred to as &ldquo;containers&rdquo;, &ldquo;smart&rdquo; or &ldquo;stateful&rdquo; components) => class Cmp extends Component { render () { return <div>some JSX</div> } }


<a id="org7ce0b31"></a>

# Styling React Components & Elements


<a id="org4640627"></a>

# Debugging React Apps


<a id="org2dbbca6"></a>

# Diving Deeper into Components & React internals


```javascript

```

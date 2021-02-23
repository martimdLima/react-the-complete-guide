- [Introduction](#org7b343e2)
  - [What is React?](#orgac6a263)
  - [Why React?](#orgbd90b62)
  - [Single Page Applications / Multi Page Applications](#org0d08680)
- [Refreshing Next Generation Javascript](#org2e3a34a)
  - [&ldquo;let&rdquo; and &ldquo;const&rdquo;](#org637c6ba)
  - [Arrow Functions](#orge7f59dc)
  - [Exports & Imports (Modules)](#org9c1731e)
  - [Classes](#org355d125)
  - [Classes, Properties and Methods](#org0940471)
  - [Spread and Rest Operator](#org9bb4084)
  - [Destructuring](#org62e1e78)
- [Understanding the Base Features & Syntax](#orga862492)
  - [Using a Build Workflow](#org1b78520)
- [Working with Lists and Conditionals](#orgf334806)
- [Styling React Components & Elements](#orgd60ef3a)
- [Debugging React Apps](#orgda561f1)
- [Diving Deeper into Components & React internals](#orgadc7c25)

---


<a id="org7b343e2"></a>

# Introduction


<a id="orgac6a263"></a>

## What is React?

&ldquo;A javascript Library for building User Interfaces&rdquo;

A browser side javascript framework - no need for server side rendering

user Interfaces - Components - enable flexibility and reusibility by constructing small modular pieces of code


<a id="orgbd90b62"></a>

## Why React?

-   UI State becomes diffcult to hadnle with Vanilla Javascript
-   Focus on Business Logic, not on preventing your App from exploding
-   Huge Ecosystem, Active Community, High Performance


<a id="org0d08680"></a>

## Single Page Applications / Multi Page Applications

-   Single Page Applications - Only ONE HTML Page, Content is (re)rendered on Client - Typically only ONE ReactDOM.render() call

-   Multi Page Applications - Multi HTML Pages, Content is rendered on Server - One ReactDOM.render() call per &ldquo;widget&rdquo;


<a id="org2e3a34a"></a>

# Refreshing Next Generation Javascript


<a id="org637c6ba"></a>

## &ldquo;let&rdquo; and &ldquo;const&rdquo;

-   var - creates a variable in javascript

-   let - variable values
-   const - constant values


<a id="orge7f59dc"></a>

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


<a id="org9c1731e"></a>

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


<a id="org355d125"></a>

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


<a id="org0940471"></a>

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


<a id="org9bb4084"></a>

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


<a id="org62e1e78"></a>

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
// Array Destructuring
[a, b] = ['Hello', 'Max']
```

```javascript
{name} = {name: 'Doe', age: 20}
```


<a id="orga862492"></a>

# Understanding the Base Features & Syntax


<a id="org1b78520"></a>

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


<a id="orgf334806"></a>

# Working with Lists and Conditionals


<a id="orgd60ef3a"></a>

# Styling React Components & Elements


<a id="orgda561f1"></a>

# Debugging React Apps


<a id="orgadc7c25"></a>

# Diving Deeper into Components & React internals


```javascript

```

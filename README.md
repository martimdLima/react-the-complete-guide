- [Introduction](#org0ec27d3)
  - [What is React?](#orgb64bc33)
  - [Why React?](#org075ce3b)
  - [Single Page Applications / Multi Page Applications](#orgfc9b736)
- [Refreshing Next Generation Javascript](#orgd2544e5)
  - [&ldquo;let&rdquo; and &ldquo;const&rdquo;](#org71cfcb9)
  - [Arrow Functions](#org09b3caa)
  - [Exports & Imports (Modules)](#org65dd0d2)
  - [Classes](#orgc6b5e65)
  - [Classes, Properties and Methods](#org9471106)
  - [Spread and Rest Operator](#org4a3c122)
  - [Destructuring](#orge8b452d)
- [Understanding the Base Features & Syntax](#org3a052a0)
  - [Using a Build Workflow](#org49c045b)
- [Working with Lists and Conditionals](#orgea1d633)
  - [JSX](#org1cb513e)
  - [Components](#org4408a45)
  - [Props and State](#org158b512)
- [Styling React Components & Elements](#org7bb3909)
- [Debugging React Apps](#orgfaef2e2)
- [Diving Deeper into Components & React internals](#orgd906f0b)
- [Useful Resources & Links](#orgc981d5f)

---


<a id="org0ec27d3"></a>

# Introduction


<a id="orgb64bc33"></a>

## What is React?

&ldquo;A javascript Library for building User Interfaces&rdquo;

A browser side javascript framework - no need for server side rendering

user Interfaces - Components - enable flexibility and reusibility by constructing small modular pieces of code


<a id="org075ce3b"></a>

## Why React?

-   UI State becomes difficult to handle with Vanilla Javascript
-   Focus on Business Logic, not on preventing your App from exploding
-   Huge Ecosystem, Active Community, High Performance


<a id="orgfc9b736"></a>

## Single Page Applications / Multi Page Applications

-   Single Page Applications - Only ONE HTML Page, Content is (re)rendered on Client - Typically only ONE ReactDOM.render() call

-   Multi Page Applications - Multi HTML Pages, Content is rendered on Server - One ReactDOM.render() call per &ldquo;widget&rdquo;


<a id="orgd2544e5"></a>

# Refreshing Next Generation Javascript


<a id="org71cfcb9"></a>

## &ldquo;let&rdquo; and &ldquo;const&rdquo;

-   var - creates a variable in javascript

-   let - variable values
-   const - constant values


<a id="org09b3caa"></a>

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


<a id="org65dd0d2"></a>

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


<a id="orgc6b5e65"></a>

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


<a id="org9471106"></a>

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


<a id="org4a3c122"></a>

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


<a id="orge8b452d"></a>

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
// Array Destructuring
[a, b] = ['Hello', 'Max']
```

```javascript
{name} = {name: 'Doe', age: 20}
```


<a id="org3a052a0"></a>

# Understanding the Base Features & Syntax


<a id="org49c045b"></a>

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


<a id="orgea1d633"></a>

# Working with Lists and Conditionals


<a id="org1cb513e"></a>

## JSX


<a id="org4408a45"></a>

## Components

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core. A typical React app therefore could be depicted as a component tree - having one root component (&ldquo;App&rdquo;) and then an potentially infinite amount of nested child components. Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

-   Functional Components (also referred to as &ldquo;presentational&rdquo;, &ldquo;dumb&rdquo; or &ldquo;stateless&rdquo; components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

-   Class Components (also referred to as &ldquo;containers&rdquo;, &ldquo;smart&rdquo; or &ldquo;stateful&rdquo; components) => class Cmp extends Component { render () { return <div>some JSX</div> } }


<a id="org158b512"></a>

## Props and State

props and state are CORE concepts of React. Actually, only changes in props and/ or state trigger React to re-render your components and potentially update the DOM in the browser (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

**Props**

props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

**Example:**

**AllPosts Component:**

```javascript
const posts = () => {
    return (
        <div>
            <Post title="My first Post" />
        </div>
    );
}
```

Here, title is the custom property (prop ) set up on the custom Post component. We basically replicate the default HTML attribute behavior we already know (e.g. <input type=&ldquo;text&rdquo;> informs the browser about how to handle that input).

**Post Component:**

```javascript
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```

The Post component receives the props argument. You can of course name this argument whatever you want - it&rsquo;s your function definition, React doesn&rsquo;t care! But React will pass one argument to your component function => An object, which contains all properties you set up on <Post &#x2026; /> .

{props.title} then dynamically outputs the title property of the props object - which is available since we set the title property inside AllPosts component (see above).

**State**

Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

**Example:**

**NewPost Component:**

```javascript
class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };

    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
```

Here, the NewPost component contains state . Only class-based components can define and use state . You can of course pass the state down to functional components, but these then can&rsquo;t directly edit it.

state simply is a property of the component class, you have to call it state though - the name is not optional. You can then access it via this.state in your class JSX code (which you return in the required render() method).

Whenever state changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don&rsquo;t receive new data (props ) from outside!


<a id="org7bb3909"></a>

# Styling React Components & Elements


<a id="orgfaef2e2"></a>

# Debugging React Apps


<a id="orgd906f0b"></a>

# Diving Deeper into Components & React internals


<a id="orgc981d5f"></a>

# Useful Resources & Links

-   [State and Props](https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper)

-   [ReactJs: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)


```javascript

```

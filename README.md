- [Introduction](#org75fc967)
  - [What is React?](#org8d443bb)
  - [Why React?](#orgecb6ddf)
  - [Single Page Applications / Multi Page Applications](#orgf0018e2)
- [Refreshing Next Generation Javascript](#org9206e72)
  - [&ldquo;let&rdquo; and &ldquo;const&rdquo;](#orgd737e3a)
  - [Arrow Functions](#org5e2b459)
  - [Exports & Imports (Modules)](#org5afd001)
  - [Classes](#org31895b1)
  - [Classes, Properties and Methods](#orgbc96932)
  - [Spread and Rest Operator](#orge87e233)
  - [Destructuring](#org9a41e2c)
- [Understanding the Base Features & Syntax](#orgdc70224)
  - [Using a Build Workflow](#org4e4131f)
- [Working with Lists and Conditionals](#org38c15ed)
  - [JSX](#org394e95a)
  - [Components](#org3306e93)
  - [Props and State](#orga26a6fc)
  - [Class, Pure and Function Components](#orgf4bbd1a)
- [Styling React Components & Elements](#org6276456)
- [Debugging React Apps](#org5bc3277)
  - [Understanding Error Messages](#org11f82fa)
  - [Using Dev Tools & Sourcemaps to find Logical Errors](#org9d1c5bd)
  - [Using React Developer Tools](#orge4881a7)
  - [Using Error Boundaries](#org2d50cb5)
- [Diving Deeper into Components & React internals](#orgc424d26)
  - [Components: stateful, stateless, dumb and smart](#orgc2ade9a)
  - [Functional Components vs. Class Components](#orgf07aa48)
  - [Lifecycle of Components](#org11d6c92)
- [Multi-Page-Feeling in a Single-Page-App: Routing](#org8c98e07)
  - [Routing and SPAs](#org9429b29)
  - [react-router vs react-router-dom](#org90d7fbe)
  - [Absolute vs Relative Paths](#org2334954)
  - [Parsing Query Parameters & the Fragment](#org82b2387)
- [Redux](#org2e01c1d)
  - [Immutable Update Patterns](#orgbfbc603)
- [Project Modules & Services](#org3c92bf5)
  - [Modules used:](#orgaa26bb3)
  - [Services used:](#org974b558)
- [Useful Resources & Links](#orgdfeda67)

---


<a id="org75fc967"></a>

# Introduction


<a id="org8d443bb"></a>

## What is React?

&ldquo;A javascript Library for building User Interfaces&rdquo;

A browser side javascript framework - no need for server side rendering

user Interfaces - Components - enable flexibility and reusibility by constructing small modular pieces of code


<a id="orgecb6ddf"></a>

## Why React?

-   UI State becomes difficult to handle with Vanilla Javascript
-   Focus on Business Logic, not on preventing your App from exploding
-   Huge Ecosystem, Active Community, High Performance


<a id="orgf0018e2"></a>

## Single Page Applications / Multi Page Applications

-   Single Page Applications - Only ONE HTML Page, Content is (re)rendered on Client - Typically only ONE ReactDOM.render() call

-   Multi Page Applications - Multi HTML Pages, Content is rendered on Server - One ReactDOM.render() call per &ldquo;widget&rdquo;


<a id="org9206e72"></a>

# Refreshing Next Generation Javascript


<a id="orgd737e3a"></a>

## &ldquo;let&rdquo; and &ldquo;const&rdquo;

-   var - creates a variable in javascript

-   let - variable values
-   const - constant values


<a id="org5e2b459"></a>

## Arrow Functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword

**Normal Javascript Function Syntax**

```javascript
    function myFnc(arg) {
        console.log(arg);
    }
```

**Arrow Function Syntax**

```javascript

    // if there is just one argument the parenthesis can be omitted, but if there is none or multiple arguments they must be present

    const myFnc = (arg) {
        console.log(arg);
    }
```


<a id="org5afd001"></a>

## Exports & Imports (Modules)

**person.js**

```javascript
    const person = {
    name: 'Max'
    }

exports default person
```

**utility.js**

```javascript
    export const clean = () => {...}
    export const baseData = 10;
```

**app.js**

```javascript
// default export
import person from './person.js'
import prs from './person.js'

// named export
import { baseData } from '.utility.js'
import { clean as cln } from './utility.js' // using an alias
import * from './utility' // importing all using an alias from module
```


<a id="org31895b1"></a>

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


<a id="orgbc96932"></a>

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


<a id="orge87e233"></a>

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


<a id="org9a41e2c"></a>

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
// Array Destructuring
[a, b] = ['Hello', 'Max']
```

```javascript
{name} = {name: 'Doe', age: 20}
```


<a id="orgdc70224"></a>

# Understanding the Base Features & Syntax


<a id="org4e4131f"></a>

## Using a Build Workflow

**Why?**

-   Recommended for SPAs and MPAs
-   Optimize Code
-   Use Next-Gen JavaScript Features
-   Be more Productive

**How?**

-   Use Dependency Management Tool (npm or yarn)
-   use Bundler (recommended: Webpack)
-   Use Compiler (Next-Gen JavaScript) Babel + presets
-   Use a Development Server


<a id="org38c15ed"></a>

# Working with Lists and Conditionals


<a id="org394e95a"></a>

## JSX


<a id="org3306e93"></a>

## Components

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core. A typical React app therefore could be depicted as a component tree - having one root component (&ldquo;App&rdquo;) and then an potentially infinite amount of nested child components. Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

-   Functional Components (also referred to as &ldquo;presentational&rdquo;, &ldquo;dumb&rdquo; or &ldquo;stateless&rdquo; components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

-   Class Components (also referred to as &ldquo;containers&rdquo;, &ldquo;smart&rdquo; or &ldquo;stateful&rdquo; components) => class Cmp extends Component { render () { return <div>some JSX</div> } }


<a id="orga26a6fc"></a>

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


<a id="orgf4bbd1a"></a>

## Class, Pure and Function Components

React components come in different flavors to tackle different problems. In typical programming fashion, choosing which one works best gets an “it depends.” Each component type has its pros and cons depending on the problem at hand. The main takeaway is knowing how each component type is useful for a given scenario.


### Class components (formerly ‘Stateful’ components)

The one component type we see all over the place is the class component. It is a stateful component because it has both state and props. This component has a ton of flexibility which is the reason why it is all over the place. A plus here is this has all component lifecycle methods in their raw form. This helps in tailoring the component to fit specific use cases. For example, firing an Ajax request right after the component mounts. One con is managing state manually with setState because of complexity and risk increase.

Type definition for class components looks like this:

```javascript
interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
```

The ComponentLifecycle type definition has:

```javascript
interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
  componentDidMount?(): void;
  shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
  componentWillUnmount?(): void;
  componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
}
```

The following lifecycle methods are of interest:

-   **componentDidMount**: runs right after a component is mounted, setting state here triggers re-rendering
-   **shouldComponentUpdate**: determines whether changes in props and state warrants re-render, class components return true by default
-   **componentWillUnmount**: runs right before a component is destroyed, can do any necessary cleanup such as canceled network requests
-   **componentDidCatch**: catches exceptions from child components, unhandled exceptions unmount the component

With class components, we get all React has to offer. One check is to see if any lifecycle methods are necessary. If not, class components are too complex for the job at hand. Best to look at other ways to solve the problem by reducing complexity.

On the flip side, if complexity is a big concern, look into web hooks. Web hooks allow a functional paradigm while tapping into component state.


### Pure components

Pure components have this type definition:

```javascript
class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> { }
```

This means pure components support everything class components have plus more. For example, a pure component does a shallow comparison in shouldComponentUpdate by default. This optimization comes for free with pure components without any code. Unlike class components that return true by default, pure components optimize re-renders. One gotcha is to check that props and state are not complex nested objects. Also, avoid large props and state objects as this will affect React’s performance.

A shallow comparison goes one-level deep in props and state, for example:

```javascript
{
  "item": "strict value comparison",
  "nestedObject": {
    "item": "reference comparison"
  },
  "nestedArray": ["reference comparison"]
}
```

For this object, item gets a strict comparison of its value. But, nestedItem and nestedArray only get reference comparisons, or where it lives in memory. A shallow comparison stays at the top level to remain performant. It does not drill into nested objects or arrays because it is not a value comparison. One gotcha is shallow comparison might skip updates when only nested properties change. This can hide bugs that are difficult to track.

Consider using pure components for one-level deep state and props. Here, we get a bit of a boost by not re-rendering when state mutates. These components can live in tree leaf nodes which have simple data shapes.

For example:

```javascript
class LeafItem extends React.PureComponent {
  render() {
    return (<>
      {this.props.name} {this.props.description}
    </>);
  }
}
```


### Function components (formerly ‘Stateless’ components)

A function component in React is defined like this:

```javascript
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

This component type does not have any lifecycle methods. At a minimum, it must define a JavaScript function that returns ReactElement or null. All other properties such as propTypes and displayName are optional. A function component does not take in state and does not have setState. State mutation may happen in a parent component or a state machine like Redux. Function components re-render when state mutates and does not allow optimizations. This is not a deal-breaker because React performs reconciliation. Library internals figure out an optimal way to reconcile the virtual DOM with the one in the browser. This reconciliation process takes care of most performance concerns in React.

If performance is a big concern because reconciliation is not enough, take a look at React.memo. This is much like React.PureComponents but for function components vs classes.

Abstracting state mutation through Redux allows function components to focus on presentation. This makes it easy to test function components in a shallow renderer like Enzyme. A shallow renderer can check all test conditions by setting props. Reducers in Redux are pure functions that are also testable. This is because pure functions have a one-to-one mapping between input and output. A plus is all UI “logic” gets abstracted away from the presentation layer. This reduces cognitive load and aids dev creativity. Function components solve for most use cases in a neat clean way.

In simple terms, this is a function component:

```javascript
const LeafItem = ({name, description}) => <>{name} {description}</>;
```


<a id="org6276456"></a>

# Styling React Components & Elements


<a id="org5bc3277"></a>

# Debugging React Apps


<a id="org11f82fa"></a>

## Understanding Error Messages


<a id="org9d1c5bd"></a>

## Using Dev Tools & Sourcemaps to find Logical Errors


<a id="orge4881a7"></a>

## Using React Developer Tools


<a id="org2d50cb5"></a>

## Using Error Boundaries


<a id="orgc424d26"></a>

# Diving Deeper into Components & React internals


<a id="orgc2ade9a"></a>

## Components: stateful, stateless, dumb and smart

There are many terms to describe components: stateless, stateful, dumb, smart, container, presentational.


### Stateful vs Stateless

A stateless component is a component without an internal state. What’s a state? It depends, in Angular it can be represented by internal properties of a class, in React it may be represented by the property this.state or by a hook, in StencilJS it may be indicated by a @State decorator, and so on… Let’s say that a component has an internal state whenever it can change behavior without receiving a property (or an input) from the outside.

Let’s take a simple case: an Accordion. How does it work? The user clicks on a tab and that tab opens, becoming visible. So, the internal state of an accordion could simply be the index of the open tab (or tabs, if we can keep multiple tabs open at the same time).

Therefore, an accordion which is completely stateless shouldn’t worry about changing its state autonomously, it should only rely on his parent component. This should be the flow:

1.  The parent gives the initial index of the open tab to the accordion.
2.  When the user clicks, the accordion just tells the parent which tab was clicked.
3.  The father then gives back to the accordion the index of the new tab.

As you can see, this is an unusual behavior: the accordion already knows which tab to open! In fact, every accordion you’ll find in component libraries will be stateful, it’ll update its state independently whenever the user clicks.

> Watch out: a stateful component is a good thing (it doesn’t affect in any way the quality of your code, if it’s well-written), but if we want to do things properly we should take care to notify the parent whenever the internal state changes, and accept a new state as input. This way, we can continue to maneuver it from the outside if we must.

So, as we said, it’s fine to create stateful components, but do it only if your component needs to be autonomous. It could save your life in some cases, saving you hundreds of repeated lines of code, but remember that a stateless component is typically more performant, easier to understand and to reason about, and we say it becomes more predictable: that means that if a change happens, it will be easier to understand the result.

A stateless component is to be preferred is many cases, but this is only a general rule. Don’t bang your head on this wall and don’t let this be your life mission: if it’s logic that a component should maintain its internal state, there’s nothing wrong with that. As a matter of fact, wanting to create stateless components at all costs can be dangerous and can make your application more complex than it needs to be.


### Dumb vs Smart

There’s a lot of confusion here, so let’s clarify what these terms don’t mean: dumb doesn’t mean stateless and smart doesn’t mean stateful.

We can think of it this way: a dumb component is one that has no dependencies from outside. Vice versa, a smart component has dependencies! It means that it knows where he is, it knows that he’s part of a bigger application. It is aware of its surroundings. It’s a living thing. Sort of.

The classic example is with a State Manager (such as Redux): typically, for every route there’s one smart component which is connected to the Application State (via Dependency Injection in Angular, for example), which can take things from the current state in order to pass it to the children, and it listens to the events emitted by the children in order to update the state.

Consequently, it’s a good practice to write every child component as dumb. Let the parent be the one who interferes with the state, don’t touch it directly. If it happened, we’d have an application which is hard to maintain, with inconsistent behaviors: it’d become hard to understand who updates the state and why.

![img](https://gitlab.com/mdLima0/react-the-complete-guide/-/raw/master/resources/imgs/components.jpeg "stateful, stateless, dumb and smart")

It could happen that a smart component may have the need to have its own internal state regardless of the global state (from the State Manager): maybe we’ve chosen not to keep a part of the state at the global level, like a form which could be pretty big or useless if serialized (it’s just an example, you could also keep a form in the global state).


### Recap

So, in a typical component-based architecture scenario, these are the categories we can find:

-   Stateless Component: it doesn’t have its internal state, it’s driven by the parent which gives it all it needs at the moment.
-   Stateful Component: it can be guided by the father, but it has its own internal state for convenience. But it’s a good thing if this state is controllable by the parent component, so it doesn’t go out of control.
-   Dumb/Presentational Component: it has no dependencies on the rest of the app (apart from the ones he needs in order to exist, obviously) and it shows some data with its template. It’s typically stateless, but it’s not always the case.
-   Smart/Container Component: it can have external dependencies (eg. Redux), it organizes the route using child dumb components, it’s in charge of passing the state to the children and uses their events to update the global state (or its state).


<a id="orgf07aa48"></a>

## Functional Components vs. Class Components

React uses a declarative approach and simplifies the creation of user interfaces. A web application built in React is structured in several small and isolated pieces of code called React components. There are two main types of components:

-   Functional components
-   Class components

To understand the differences, it’s important to know what the React ecosystem used to be like. Years ago, functional components were used only to render JSX to show content to the user. On the other hand, class components were also able to utilize the lifecycle method system or the state system.

![img](https://gitlab.com/mdLima0/react-the-complete-guide/-/raw/master/resources/imgs//functional-class-components.jpeg "functional and class components worked")

In February 2019, the React team introduced Hooks as a new addition to React v16.8.0. React Hooks gave functional components the same capabilities as class components, with the possibility to use the state system and achieve the same results as the class components’ lifecycle methods.

![img](https://gitlab.com/mdLima0/react-the-complete-guide/-/raw/master/resources/imgs/functional-class-components-current.jpeg "functional and class components work currently")


### 1. Rendering JSX to Show Content

JSX stands for JavaScript XML, it “allows us to write HTML elements in JavaScript and place them in the DOM without using any createElement() and/or appendChild() methods”.

**Rendering JSX in a class component**

Class components are ES6 classes that extend the rendering method of React.Component:

```javascript
import React from "react";

class App extends React.Component {
  render() {
    return <h1>This is a Class Component!!</h1>;
  }
}

export default App;
```

You can also achieve the same result using destructuring:

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return <h1>This is a Class Component!!</h1>;
  }
}

export default App;
```

**Rendering JSX in a functional component**

Functional components are JavaScript functions that return JSX:

```javascript
import React from "react";

const App = () => {
  return <h1>Function Components are the best!</h1>;
};

export default App;

```


### 2. Handling State

With the state system, we create a JavaScript object containing some data strictly relevant to the component we’re working on. Before Hooks, the state system was only usable with class components. But with this new addition, it is now possible to obtain the same result with functional components.

To better see the differences between the two components, let’s make a simple counter that starts from zero and increments by clicking on the + button.

**Handling state in a class component**

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
          <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}> + </button>
      </div>
    );
  }
}
export default Counter;
```

In a class component, we initialize our state object at the top containing a property called count and set it to 0. We reference our piece of state inside the render method with this.state.count. Finally, we call an arrow function that changes the state of count with this.setState whenever a user clicks on +.

**Handling state in a functional component**

```javascript
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;

```

In a functional component, first, we have to get the useState function from the React library. Then, we make use of array destructuring to initialize a new piece of state. The first variable inside the count array is the piece of state that we are trying to keep track of, while the second element (setCount) is a function that we call to update our piece of state. useState takes in one argument that is the default value for our piece of state. Finally, we call an arrow function that changes the state of count with the use of setCount whenever a user clicks on +.


### 3. Passing Props

To pass data as parameters from one React component to another, we use React’s props.

**Passing props in a class component**

```javascript
import React from "react";
import FunctionalComponent from "./ClassComponent";

const App = () => {
  return <FunctionalComponent name="Theresa" />;
};

export default App;
```

```javascript
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    const { name } = this.props;
    return <h1>Hi! My name is {name}</h1>;
  }
}

export default ClassComponent;
```

In a class component, props are received via the use of this.

**Passing props in a functional component**

```javascript
import React from "react";
import FunctionalComponent from "./FunctionalComponent";

const App = () => {
  return <FunctionalComponent name="Gianmarco" />;
};

export default App;
```

```javascript
import React from "react";

const FunctionalComponent = ({ name }) => {
  return <h1>Hi! My name is {name}</h1>;
};

export default FunctionalComponent;
```

In a functional component, we are passing props as an argument of the function.


### 4. Lifecycle Method System

Every component in React goes through a lifecycle of events. Lifecycles have a significant role in the timing of rendering. An example of a lifecycle method is the componentDidMount() that corresponds to the useEffect() method in a functional component.

**componentDidMount() in a class component**

```javascript
import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("After the component did mount!");
  }

  render() {
    console.log("Component did mount!");
    return <h1>Hello world!</h1>;
  }
}

export default App;
```

componentDidMount is a lifecycle method that is called after the component gets mounted on the DOM.

**useEffect() in a functional component**

```javascript
import React from "react";

const App = () => {
  React.useEffect(() => {
      console.log("Second!");
  }, []);

  console.log("First!")
  return <h1>Hello World!</h1>;
 };

export default App;
```

To obtain the same result in a functional component, we use the useEffect hook with the second argument of [].


<a id="org11d6c92"></a>

## Lifecycle of Components

Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows.

1.  **Initialization** - This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
2.  **Mounting** - Mounting is the stage of rendering the JSX returned by the render method itself.
3.  **Updating** - Updating is the stage when the state of a component is updated and the application is repainted.
4.  **Unmounting** - As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

React provides the developers a set of predefined functions that if present is invoked around specific events in the lifetime of the component. Developers are supposed to override the functions with desired logic to execute accordingly.

![img](https://gitlab.com/mdLima0/react-the-complete-guide/-/raw/master/resources/imgs/react-component-lifecycle2.png "React Components Lifecycle")


### Functions of each Phase of Lifecycle

1.  **Initialization** - In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. The following code snippet describes the initialization process.

2.  **Mounting** - Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.
    -   **componentWillMount() Function** - As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
    -   **componentDidMount() Function** - Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time
3.  **Updating** - React is a JS library that helps create Active web pages easily. Now active web pages are specific pages that behave according to their user. Updating is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on the keyboard, etc. The following are the descriptions of functions that are invoked at different points of Updating phase.
    -   **componentWillRecieveProps() Function** - This is a Props exclusive Function and is independent of States. This function is invoked before a mounted component gets its props reassigned. The function is passed the new set of Props which may or may not be identical to the original Props. Thus checking is a mandatory step in this regard. The following code snippet shows a sample use-case.
    
    -   **setState() Function** - This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the state of a component. You may refer to this article for detailed information.
    
    -   **shouldComponentUpdate() Function** - By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in the case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.
    
    -   **componentWillUpdate() Function** - As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.
    
    -   **componentDidUpdate() Function** - Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.

4.  **Unmounting** - This is the final phase of the lifecycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.
    -   **componentWillUnmount() Function** - This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.


<a id="org8c98e07"></a>

# Multi-Page-Feeling in a Single-Page-App: Routing


<a id="org9429b29"></a>

## Routing and SPAs


<a id="org90d7fbe"></a>

## react-router vs react-router-dom


<a id="org2334954"></a>

## Absolute vs Relative Paths


<a id="org82b2387"></a>

## Parsing Query Parameters & the Fragment

You learned how to extract route parameters (=> :id etc).

But how do you extract search (also referred to as &ldquo;query&rdquo;) parameters (=> ?something=somevalue at the end of the URL)? How do you extract the fragment (=> #something at the end of the URL)?

**Query Params:** You can pass them easily like this:

```javascript
<Link to="/my-path?start=5">Go to Start</Link>
```

or

```javascript
<Link
    to={{
        pathname: '/my-path',
        search: '?start=5'
    }}
    >Go to Start</Link>
```

React router makes it easy to get access to the search string: props.location.search .

But that will only give you something like ?start=5

You probably want to get the key-value pair, without the ? and the = . Here&rsquo;s a snippet which allows you to easily extract that information:

```javascript
componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
```

URLSearchParams is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries() method. entries() returns an Iterator - basically a construct which can be used in a for&#x2026;of&#x2026; loop (as shown above).

When looping through query.entries() , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

**Fragment:** You can pass it easily like this:

```javascript
<Link to="/my-path#start-position">Go to Start</Link>
```

```javascript
<Link>
    TO ={{
        pathname: '/my-path',
        hash: 'start-position'
    }}
    >Go to Start</Link>
```

React router makes it easy to extract the fragment. You can simply access props.location.hash .


<a id="org2e01c1d"></a>

# Redux


<a id="orgbfbc603"></a>

## Immutable Update Patterns


### Updating Nested Objects

The key to updating nested data is **that every level of nesting must be copied and updated appropriately**. This is often a difficult concept for those learning Redux, and there are some specific problems that frequently occur when trying to update nested objects. These lead to accidental direct mutation, and should be avoided.

**Common Mistake #1: New variables that point to the same objects**

Defining a new variable does not create a new actual object - it only creates another reference to the same object. An example of this error would be:

```javascript
function updateNestedState(state, action) {
    let nestedState = state.nestedState;
    // ERROR: this directly modifies the existing object reference - don't do this!
    nestedState.nestedField = action.data;

    return {
        ...state,
        nestedState
    };
}
```

This function does correctly return a shallow copy of the top-level state object, but because the nestedState variable was still pointing at the existing object, the state was directly mutated.

**Common Mistake #2: Only making a shallow copy of one level**

Another common version of this error looks like this:

```javascript
function updateNestedState(state, action) {
    // Problem: this only does a shallow copy!
    let newState = {...state};

    // ERROR: nestedState is still the same object!
    newState.nestedState.nestedField = action.data;

    return newState;
}
```

Doing a shallow copy of the top level is not sufficient - the nestedState object should be copied as well.

**Correct Approach: Copying All Levels of Nested Data**

Unfortunately, the process of correctly applying immutable updates to deeply nested state can easily become verbose and hard to read. Here&rsquo;s what an example of updating state.first.second[someId].fourth might look like:

```
function updateVeryNestedField(state, action) {
    return {
        ...state,
        first : {
            ...state.first,
            second : {
                ...state.first.second,
                [action.someId] : {
                    ...state.first.second[action.someId],
                    fourth : action.someValue
                }
            }
        }
    }
}
```

Obviously, each layer of nesting makes this harder to read, and gives more chances to make mistakes. This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible.

**Inserting and Removing Items in Arrays** Normally, a Javascript array&rsquo;s contents are modified using mutative functions like push, unshift, and splice. Since we don&rsquo;t want to mutate state directly in reducers, those should normally be avoided. Because of that, you might see &ldquo;insert&rdquo; or &ldquo;remove&rdquo; behavior written like this:

```javascript
function insertItem(array, action) {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
}

function removeItem(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}
```

However, remember that the key is that the original in-memory reference is not modified. As long as we make a copy first, we can safely mutate the copy. Note that this is true for both arrays and objects, but nested values still must be updated using the same rules.

This means that we could also write the insert and remove functions like this:

```javascript
function insertItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}

function removeItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
}
```

The remove function could also be implemented as:

```javascript
function removeItem(array, action) {
    return array.filter( (item, index) => index !== action.index);
}
```

**Updating an Item in an Array**

Updating one item in an array can be accomplished by using Array.map, returning a new value for the item we want to update, and returning the existing values for all other items:

```javascript
function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };
    });
}
```

**Immutable Update Utility Libraries** Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. Some, like dot-prop-immutable, take string paths for commands:

```javascript
state = dotProp.set(state, `todos.${index}.complete`, true)
```

Others, like immutability-helper (a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:

```javascript
var collection = [1, 2, {a: [12, 17, 15]}];
var newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
They can provide a useful alternative to writing manual immutable update logic.
```


<a id="org3c92bf5"></a>

# Project Modules & Services


<a id="orgaa26bb3"></a>

## Modules used:

-   create-react-app
-   radium
-   styled-components
-   prop-types
-   react-router
-   react-router-dom
-   redux
-   react-redux


<a id="org974b558"></a>

## Services used:

-   [Json Placeholder](https://jsonplaceholder.typicode.com/)


<a id="orgdfeda67"></a>

# Useful Resources & Links

-   [create-react-app](https://github.com/facebookincubator/create-react-app)

-   [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

-   [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

-   [Components & Props](https://reactjs.org/docs/components-and-props.html)

-   [stateful-vs-stateless-vs-pure-react-components](https://blog.jscrambler.com/stateful-vs-stateless-vs-pure-react-components/)

-   [Components: stateful, stateless, dumb and smart](https://medium.com/@michelestieven/components-stateful-stateless-dumb-and-smart-2847dd4092f2)

-   [Functional Components vs. Class Components in React](https://betterprogramming.pub/functional-components-vs-class-components-in-react-2f28adccc993)

-   [Listenable Events](https://reactjs.org/docs/events.html)

-   [State and Props](https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper)

-   [ReactJs: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)

-   [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

-   [Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)

-   [Using CSS Modules in create-react-app Projects](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)

-   [More information about CSS Modules](https://github.com/css-modules/css-modules)

-   [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)

-   [Chrome Devtool Debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/)

-   [More on useEffect() ](https://reactjs.org/docs/hooks-effect.html)

-   [State & Lifecycle ](https://reactjs.org/docs/state-and-lifecycle.html)

-   [PropTypes ](https://reactjs.org/docs/typechecking-with-proptypes.html)

-   [Higher Order Components](https://reactjs.org/docs/higher-order-components.html)

-   [Refs](https://reactjs.org/docs/refs-and-the-dom.html)

-   [Validate.js](https://validatejs.org/)

-   [Get more ideas about potential validation approaches](https://react.rocks/tag/Validation)

-   [react-validation package](https://www.npmjs.com/package/react-validation)

-   [formsy-react package](https://github.com/christianalfoni/formsy-react)

-   [Immutable Update Patterns on reduxjs.org](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/)

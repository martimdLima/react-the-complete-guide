- [Introduction](#org86f043f)
  - [What is React?](#org87343f3)
  - [Why React?](#org24ed722)
  - [Single Page Applications / Multi Page Applications](#orga260e76)
- [Refreshing Next Generation Javascript](#org2cd4862)
  - [&ldquo;let&rdquo; and &ldquo;const&rdquo;](#orgd570fa4)
  - [Arrow Functions](#orgf6c4658)
  - [Exports & Imports (Modules)](#org1a3fb58)
  - [Classes](#org9dab36d)
  - [Classes, Properties and Methods](#org0436ef4)
  - [Spread and Rest Operator](#org16d23ea)
  - [Destructuring](#orgf0d309b)
- [Understanding the Base Features & Syntax](#org3368fe2)
  - [Using a Build Workflow](#org0ae13cd)
- [Working with Lists and Conditionals](#orgc7cc5c4)
  - [JSX](#orgdc26204)
  - [Components](#org957a5d9)
  - [Props and State](#org9a1e806)
  - [Class, Pure and Function Components](#orgd36a128)
- [Styling React Components & Elements](#org5118c17)
- [Debugging React Apps](#orgc4b6c31)
- [Diving Deeper into Components & React internals](#org0bcd97c)
- [Useful Resources & Links](#org888575b)

---


<a id="org86f043f"></a>

# Introduction


<a id="org87343f3"></a>

## What is React?

&ldquo;A javascript Library for building User Interfaces&rdquo;

A browser side javascript framework - no need for server side rendering

user Interfaces - Components - enable flexibility and reusibility by constructing small modular pieces of code


<a id="org24ed722"></a>

## Why React?

-   UI State becomes difficult to handle with Vanilla Javascript
-   Focus on Business Logic, not on preventing your App from exploding
-   Huge Ecosystem, Active Community, High Performance


<a id="orga260e76"></a>

## Single Page Applications / Multi Page Applications

-   Single Page Applications - Only ONE HTML Page, Content is (re)rendered on Client - Typically only ONE ReactDOM.render() call

-   Multi Page Applications - Multi HTML Pages, Content is rendered on Server - One ReactDOM.render() call per &ldquo;widget&rdquo;


<a id="org2cd4862"></a>

# Refreshing Next Generation Javascript


<a id="orgd570fa4"></a>

## &ldquo;let&rdquo; and &ldquo;const&rdquo;

-   var - creates a variable in javascript

-   let - variable values
-   const - constant values


<a id="orgf6c4658"></a>

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


<a id="org1a3fb58"></a>

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


<a id="org9dab36d"></a>

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


<a id="org0436ef4"></a>

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


<a id="org16d23ea"></a>

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


<a id="orgf0d309b"></a>

## Destructuring

> Easily extract array elements or object properties and store them in variables

```javascript
// Array Destructuring
[a, b] = ['Hello', 'Max']
```

```javascript
{name} = {name: 'Doe', age: 20}
```


<a id="org3368fe2"></a>

# Understanding the Base Features & Syntax


<a id="org0ae13cd"></a>

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


<a id="orgc7cc5c4"></a>

# Working with Lists and Conditionals


<a id="orgdc26204"></a>

## JSX


<a id="org957a5d9"></a>

## Components

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core. A typical React app therefore could be depicted as a component tree - having one root component (&ldquo;App&rdquo;) and then an potentially infinite amount of nested child components. Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

-   Functional Components (also referred to as &ldquo;presentational&rdquo;, &ldquo;dumb&rdquo; or &ldquo;stateless&rdquo; components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

-   Class Components (also referred to as &ldquo;containers&rdquo;, &ldquo;smart&rdquo; or &ldquo;stateful&rdquo; components) => class Cmp extends Component { render () { return <div>some JSX</div> } }


<a id="org9a1e806"></a>

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


<a id="orgd36a128"></a>

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


<a id="org5118c17"></a>

# Styling React Components & Elements


<a id="orgc4b6c31"></a>

# Debugging React Apps


<a id="org0bcd97c"></a>

# Diving Deeper into Components & React internals


<a id="org888575b"></a>

# Useful Resources & Links

-   [create-react-app](https://github.com/facebookincubator/create-react-app)

-   [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

-   [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

-   [Components & Props](https://reactjs.org/docs/components-and-props.html)

-   [stateful-vs-stateless-vs-pure-react-components](https://blog.jscrambler.com/stateful-vs-stateless-vs-pure-react-components/)

-   [Listenable Events](https://reactjs.org/docs/events.html)

-   [State and Props](https://reactjs.org/docs/faq-state.html#gatsby-focus-wrapper)

-   [ReactJs: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)

-   [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

-   [Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)

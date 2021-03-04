// Imports
const redux = require("redux");
const createStore = redux.createStore;


// Initialize the State
const initialState = {
    counter: 0
}

// Create the Reducer
const rootReducer = (currentState = initialState, action) => {
    return currentState 
}

// Create the Store
const store = createStore(rootReducer);
console.log(store.getState());


// Dispatching Action


// Subscription
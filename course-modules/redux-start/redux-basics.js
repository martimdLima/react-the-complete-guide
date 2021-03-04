// Imports
const redux = require("redux");
const createStore = redux.createStore;

// Initialize the State
const initialState = {
    counter: 0,
};

// Create the Reducer
const rootReducer = (currentState = initialState, action) => {
    //let updatedState = null;

    if (action.type === "INC_COUNTER") {
        return {
            ...currentState,
            counter: currentState.counter + 1,
        };
    }

    if (action.type === "ADD_COUNTER") {
        return {
            ...currentState,
            counter: currentState.counter + action.value,
        };
    }

    return currentState;
};

// Create the Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());

// Subscription

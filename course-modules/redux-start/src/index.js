import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

import "./index.css";
import App from "./App";

// combineReducers, as the name suggests, is a function which takes a javascript object mapping the reducers to different slices of our
// state as input and merges everything into one state and one reducer for us.
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
});

// create the store and pass the reducer to it
const store = createStore(rootReducer);

// Provider is a helper component which allows to kind of inject the store
// into the react components. For hooking up the provider component with the store here,

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "./store/reducer";

import "./index.css";
import App from "./App";

// create the store and pass the reducer to it
const store = createStore(reducer);

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

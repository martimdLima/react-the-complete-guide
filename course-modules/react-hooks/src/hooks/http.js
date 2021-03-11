import { useCallback, useReducer } from "react";

// Building your own Hooks lets you extract component logic into reusable functions.

// Traditionally in React, we’ve had two popular ways to share stateful logic between components: render props and higher-order components.
// Hooks solve many of the same problems without forcing you to add more components to the tree.

// A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

// Unlike a React component, a custom Hook doesn’t need to have a specific signature.
// We can decide what it takes as arguments, and what, if anything, it should return.

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case "SEND_REQUEST":
            return {
                loading: true,
                error: null,
                data: null,
                extra: null,
                identifier: action.identifier
            };
        case "RESPONSE":
            return {
                ...httpState,
                loading: false,
                data: action.responseData,
                extra: action.extra
            };
        case "ERROR":
            return {
                loading: false,
                error: action.error,
            };
        case "CLEAR_ERROR":
            return {
                ...httpState,
                error: null,
            };
        default:
            throw new Error("Error");
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
        data: null,
        extra: null,
        identifier: null
    });

    const sendRequest = useCallback((url, method, body, extra, identifier) => {
        dispatchHttp({ type: "SEND", identifier: identifier});
        fetch(url, {
            method: method,
            body: body,
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                dispatchHttp({ type: "RESPONSE", responseData: responseData, extra: extra  });
            })
            .catch((err) => {
                dispatchHttp({
                    type: "ERROR",
                    error: err.message,
                });
            });
    }, []);

    return {
        isLoading: httpState.isLoading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        extra: httpState.extra,
        identifier: httpState.identifier
    };
};

export default useHttp;
